from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import time
import logging
from app.config import settings
from app.routes import recipes, fridge
from app.services.faiss_service import faiss_service

# Setup logger
logger = logging.getLogger(__name__)

# Create FastAPI app
app = FastAPI(
    title="Smart Fridge Chef API",
    description="Backend API for Smart Fridge Chef - AI-powered recipe recommendation system",
    version="1.0.0"
)

# Response time middleware
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(round(process_time * 1000, 2))  # ms
    return response

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL, "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["X-Process-Time"],  # Frontend'in görebilmesi için
)


# Startup event - Load FAISS index
@app.on_event("startup")
async def startup_event():
    """
    Startup event handler
    Loads FAISS index automatically when the application starts
    """
    logger.info("🚀 Starting Smart Fridge Chef API...")
    
    # Load FAISS index
    try:
        logger.info("Loading FAISS index...")
        success = faiss_service.load_index()
        
        if success:
            index_info = faiss_service.get_index_info()
            logger.info("✅ FAISS index loaded successfully")
            logger.info(f"   Index type: {index_info.get('index_type', 'unknown')}")
            logger.info(f"   Vectors: {index_info.get('num_vectors', 'unknown')}")
            logger.info(f"   Dimension: {index_info.get('dimension', 'unknown')}")
        else:
            logger.warning("⚠️  FAISS index not found or could not be loaded")
            logger.warning("   Vector search will not be available")
            logger.warning("   Application will continue with string matching fallback")
            
    except Exception as e:
        logger.error(f"❌ Error loading FAISS index: {e}", exc_info=True)
        logger.warning("   Continuing with string matching fallback")
        logger.warning("   Application will continue to run normally")
    
    logger.info("✅ API startup completed")


# Health check endpoint
@app.get("/health")
async def health_check():
    """
    Health check endpoint to verify the API is running
    """
    return {
        "status": "ok",
        "timestamp": datetime.now().isoformat(),
        "environment": settings.NODE_ENV
    }


# Include routers
app.include_router(recipes.router, prefix="/api")
app.include_router(fridge.router, prefix="/api")


# Root endpoint
@app.get("/")
async def root():
    """
    Root endpoint with API information
    """
    return {
        "message": "Smart Fridge Chef API",
        "version": "1.0.0",
        "docs": "/docs",
        "health": "/health"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=settings.PORT,
        reload=True if settings.NODE_ENV == "development" else False
    )


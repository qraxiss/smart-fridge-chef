from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    PORT: int = 3001
    FRONTEND_URL: str = "http://localhost:3000"
    GEMINI_API_KEY: Optional[str] = None
    NODE_ENV: str = "development"
    # Embedding Model Configuration
    EMBEDDING_MODEL: str = "all-MiniLM-L6-v2"  # English-only, fast, 384 dimensions
    EMBEDDING_DIMENSION: int = 384
    
    # FAISS Index Configuration
    FAISS_INDEX_TYPE: str = "IndexFlatL2"  # Options: IndexFlatL2, IndexIVFFlat, IndexHNSW
    FAISS_METRIC: str = "L2"  # Options: L2 (Euclidean), IP (Inner Product)
    FAISS_INDEX_PATH: str = "data/recipe_index.faiss"

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()


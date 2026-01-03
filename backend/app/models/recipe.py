from pydantic import BaseModel, Field
from typing import List, Optional


class Recipe(BaseModel):
    Title: str
    Ingredients: str  # Stored as a stringified list in the source data
    Instructions: Optional[str] = ""  # Some recipes might not have instructions
    Image_Name: str
    Cleaned_Ingredients: str  # Stored as a stringified list


class RecipeWithMatch(Recipe):
    matchingCount: int
    matchingIngredients: List[str]


class RecipeSearchParams(BaseModel):
    ingredients: List[str] = []
    limit: int = 50
    offset: int = 0


class RecipeRecommendRequest(BaseModel):
    ingredients: List[str]
    use_vector_search: Optional[bool] = True
    top_k: Optional[int] = 50


class RecipeRecommendResponse(BaseModel):
    recommendations: List[RecipeWithMatch]
    count: int
    userIngredients: List[str]
    search_method: str  # "vector" or "string_matching"


class RecipeSearchRequest(BaseModel):
    query: str
    top_k: Optional[int] = 20


class RecipeSearchResponse(BaseModel):
    recipes: List[RecipeWithMatch]
    count: int
    query: str
    search_method: str  # "vector" or "string_matching"


export interface Recipe {
    Title: string;
    Ingredients: string; // Stored as a stringified list in the source data
    Instructions: string;
    Image_Name: string;
    Cleaned_Ingredients: string; // Stored as a stringified list
}

export interface RecipeWithMatch extends Recipe {
    matchingCount: number;
    matchingIngredients: string[];
}

export interface Ingredient {
    name: string;
}

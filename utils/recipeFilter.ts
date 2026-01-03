/**
 * Recipe Filtering Utility
 * Filters recipes based on dietary preferences and excluded ingredients
 */

import { RecipeWithMatch } from '../types';
import { getAllForbiddenIngredients } from './dietaryRules';
import { matchesExcludedIngredient } from './ingredientNormalizer';
import { DietaryPreferences } from './dietaryRules';

/**
 * Filter recipes based on dietary preferences and excluded ingredients
 */
export function filterRecipes(
    recipes: RecipeWithMatch[],
    dietaryPreferences: DietaryPreferences,
    excludedIngredients: string[]
): RecipeWithMatch[] {
    // Get all forbidden ingredients (dietary + excluded)
    const forbiddenIngredients = getAllForbiddenIngredients(dietaryPreferences, excludedIngredients);
    
    if (forbiddenIngredients.length === 0) {
        // No filters active, return all recipes
        return recipes;
    }
    
    // Filter recipes
    return recipes.filter(recipe => {
        // Check if recipe contains any forbidden ingredients
        // Use Cleaned_Ingredients if available, otherwise use Ingredients
        const ingredientsString = recipe.Cleaned_Ingredients || recipe.Ingredients;
        
        // Check excluded ingredients (user-specific)
        if (excludedIngredients.length > 0) {
            if (matchesExcludedIngredient(ingredientsString, excludedIngredients)) {
                return false; // Recipe contains excluded ingredient
            }
        }
        
        // Check dietary forbidden ingredients
        if (forbiddenIngredients.length > 0) {
            if (matchesExcludedIngredient(ingredientsString, forbiddenIngredients)) {
                return false; // Recipe contains forbidden ingredient
            }
        }
        
        return true; // Recipe passes all filters
    });
}

/**
 * Get active filter labels for display
 */
export function getActiveFilterLabels(
    dietaryPreferences: DietaryPreferences,
    excludedIngredients: string[]
): string[] {
    const labels: string[] = [];
    
    // Dietary preferences
    if (dietaryPreferences.vegan) labels.push('Vegan');
    if (dietaryPreferences.vegetarian && !dietaryPreferences.vegan) labels.push('Vegetarian');
    if (dietaryPreferences.glutenFree) labels.push('Gluten-Free');
    if (dietaryPreferences.dairyFree) labels.push('Dairy-Free');
    if (dietaryPreferences.nutAllergy) labels.push('Nut-Free');
    
    // Excluded ingredients (show first 3)
    if (excludedIngredients.length > 0) {
        const excludedLabels = excludedIngredients.slice(0, 3).map(ing => {
            // Capitalize first letter
            return ing.charAt(0).toUpperCase() + ing.slice(1);
        });
        if (excludedIngredients.length > 3) {
            excludedLabels.push(`+${excludedIngredients.length - 3} more`);
        }
        labels.push(...excludedLabels.map(label => `No ${label}`));
    }
    
    return labels;
}


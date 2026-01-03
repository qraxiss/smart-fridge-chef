/**
 * Dietary Rules - Forbidden Ingredients by Diet Type
 * Maps dietary preferences to lists of ingredients that must be excluded
 */

import { INGREDIENT_CATEGORIES } from '../constants/ingredientData';

export interface DietaryPreferences {
    glutenFree: boolean;
    vegetarian: boolean;
    vegan: boolean;
    dairyFree: boolean;
    nutAllergy: boolean;
}

/**
 * Get forbidden ingredients for a specific dietary preference
 */
export function getForbiddenIngredients(preferences: DietaryPreferences): string[] {
    const forbidden: Set<string> = new Set();

    // VEGAN: No animal products
    if (preferences.vegan) {
        // Meat & Poultry
        forbidden.add('beef');
        forbidden.add('chicken');
        forbidden.add('turkey');
        forbidden.add('pork');
        forbidden.add('lamb');
        forbidden.add('veal');
        forbidden.add('duck');
        forbidden.add('goose');
        forbidden.add('rabbit');
        forbidden.add('bacon');
        forbidden.add('ham');
        forbidden.add('sausage');
        forbidden.add('salami');
        forbidden.add('chorizo');
        forbidden.add('prosciutto');
        forbidden.add('pancetta');
        
        // Seafood
        forbidden.add('fish');
        forbidden.add('salmon');
        forbidden.add('tuna');
        forbidden.add('shrimp');
        forbidden.add('crab');
        forbidden.add('lobster');
        forbidden.add('mussels');
        forbidden.add('oysters');
        forbidden.add('clams');
        forbidden.add('scallops');
        forbidden.add('squid');
        forbidden.add('octopus');
        forbidden.add('anchovies');
        forbidden.add('sardines');
        
        // Dairy & Eggs
        forbidden.add('milk');
        forbidden.add('cream');
        forbidden.add('butter');
        forbidden.add('cheese');
        forbidden.add('yogurt');
        forbidden.add('egg');
        forbidden.add('eggs');
        forbidden.add('egg yolk');
        forbidden.add('egg white');
        forbidden.add('mayonnaise');
        
        // Other animal products
        forbidden.add('honey');
        forbidden.add('gelatin');
        forbidden.add('whey');
        forbidden.add('casein');
    }

    // VEGETARIAN: No meat/seafood, but allows dairy/eggs
    if (preferences.vegetarian && !preferences.vegan) {
        // Meat & Poultry
        forbidden.add('beef');
        forbidden.add('chicken');
        forbidden.add('turkey');
        forbidden.add('pork');
        forbidden.add('lamb');
        forbidden.add('veal');
        forbidden.add('duck');
        forbidden.add('goose');
        forbidden.add('rabbit');
        forbidden.add('bacon');
        forbidden.add('ham');
        forbidden.add('sausage');
        forbidden.add('salami');
        forbidden.add('chorizo');
        forbidden.add('prosciutto');
        forbidden.add('pancetta');
        
        // Seafood
        forbidden.add('fish');
        forbidden.add('salmon');
        forbidden.add('tuna');
        forbidden.add('shrimp');
        forbidden.add('crab');
        forbidden.add('lobster');
        forbidden.add('mussels');
        forbidden.add('oysters');
        forbidden.add('clams');
        forbidden.add('scallops');
        forbidden.add('squid');
        forbidden.add('octopus');
        forbidden.add('anchovies');
        forbidden.add('sardines');
    }

    // GLUTEN FREE: No wheat, barley, rye, etc.
    if (preferences.glutenFree) {
        forbidden.add('flour');
        forbidden.add('wheat');
        forbidden.add('barley');
        forbidden.add('rye');
        forbidden.add('bread');
        forbidden.add('pasta');
        forbidden.add('spaghetti');
        forbidden.add('macaroni');
        forbidden.add('noodles');
        forbidden.add('couscous');
        forbidden.add('bulgur');
        forbidden.add('semolina');
        forbidden.add('breadcrumbs');
        forbidden.add('panko');
        forbidden.add('soy sauce'); // Usually contains wheat
    }

    // DAIRY FREE: No milk products
    if (preferences.dairyFree) {
        forbidden.add('milk');
        forbidden.add('cream');
        forbidden.add('butter');
        forbidden.add('cheese');
        forbidden.add('yogurt');
        forbidden.add('sour cream');
        forbidden.add('buttermilk');
        forbidden.add('whey');
        forbidden.add('casein');
        forbidden.add('lactose');
    }

    // NUT ALLERGY: No tree nuts and peanuts
    if (preferences.nutAllergy) {
        forbidden.add('almonds');
        forbidden.add('walnuts');
        forbidden.add('cashews');
        forbidden.add('pistachios');
        forbidden.add('hazelnuts');
        forbidden.add('pecans');
        forbidden.add('pine nuts');
        forbidden.add('peanuts');
        forbidden.add('peanut butter');
        forbidden.add('almond butter');
        forbidden.add('walnut oil');
        forbidden.add('almond milk');
    }

    return Array.from(forbidden);
}

/**
 * Get all forbidden ingredients combining dietary preferences and excluded ingredients
 */
export function getAllForbiddenIngredients(
    preferences: DietaryPreferences,
    excludedIngredients: string[]
): string[] {
    const dietaryForbidden = getForbiddenIngredients(preferences);
    const allForbidden = new Set([...dietaryForbidden, ...excludedIngredients]);
    return Array.from(allForbidden);
}

/**
 * Get active dietary preference labels
 */
export function getActiveDietaryLabels(preferences: DietaryPreferences): string[] {
    const labels: string[] = [];
    if (preferences.vegan) labels.push('Vegan');
    if (preferences.vegetarian && !preferences.vegan) labels.push('Vegetarian');
    if (preferences.glutenFree) labels.push('Gluten-Free');
    if (preferences.dairyFree) labels.push('Dairy-Free');
    if (preferences.nutAllergy) labels.push('Nut-Free');
    return labels;
}





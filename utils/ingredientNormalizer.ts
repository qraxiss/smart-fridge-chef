/**
 * Ingredient Normalization Utility
 * Uses cleaned_ingredients_map to normalize ingredient names for filtering
 */

interface IngredientMapping {
    raw: string;
    clean: string;
}

// Create lookup maps for fast access
const rawToCleanMap = new Map<string, string>();
const cleanToRawMap = new Map<string, string[]>();
let mapsInitialized = false;

/**
 * Simple normalization without map (fallback)
 * Uses basic string matching and common patterns
 */
function simpleNormalize(ingredient: string): string {
    let normalized = ingredient.toLowerCase().trim();
    
    // Remove common prefixes/suffixes
    normalized = normalized
        .replace(/^(fresh|dried|frozen|canned|raw|cooked|chopped|diced|sliced|minced|grated|ground)\s+/gi, '')
        .replace(/\s+(fresh|dried|frozen|canned|raw|cooked|chopped|diced|sliced|minced|grated|ground)$/gi, '')
        .replace(/\s*\([^)]*\)/g, '') // Remove parentheses
        .replace(/['"]/g, '') // Remove quotes
        .trim();
    
    return normalized;
}

/**
 * Normalize a raw ingredient string to its cleaned form
 */
export function normalizeIngredient(rawIngredient: string): string {
    const normalized = rawIngredient.toLowerCase().trim();
    
    // Direct lookup (if maps are initialized)
    if (mapsInitialized && rawToCleanMap.has(normalized)) {
        return rawToCleanMap.get(normalized)!;
    }
    
    // Try partial match (e.g., "shiitake mushrooms" contains "mushroom")
    if (mapsInitialized) {
        for (const [raw, clean] of rawToCleanMap.entries()) {
            if (raw.includes(normalized) || normalized.includes(raw)) {
                return clean;
            }
        }
    }
    
    // Fallback: simple normalization
    return simpleNormalize(normalized);
}

/**
 * Get all raw ingredient variations for a cleaned ingredient name
 * Useful for filtering: if user excludes "mushroom", also exclude "shiitake mushrooms"
 */
export function getIngredientVariations(cleanedIngredient: string): string[] {
    const normalized = cleanedIngredient.toLowerCase().trim();
    const variations = new Set<string>();
    
    // Add the cleaned name itself
    variations.add(normalized);
    
    // Add all raw variations (if maps are initialized)
    if (mapsInitialized && cleanToRawMap.has(normalized)) {
        cleanToRawMap.get(normalized)!.forEach(raw => {
            variations.add(raw.toLowerCase().trim());
        });
    }
    
    // Also check if any raw ingredient contains this cleaned name
    if (mapsInitialized) {
        for (const [raw, clean] of rawToCleanMap.entries()) {
            if (clean === normalized || raw.includes(normalized) || normalized.includes(clean)) {
                variations.add(raw);
                variations.add(clean);
            }
        }
    }
    
    // Always add simple variations (plural/singular, common patterns)
    variations.add(normalized + 's'); // plural
    if (normalized.endsWith('s')) {
        variations.add(normalized.slice(0, -1)); // singular
    }
    
    return Array.from(variations);
}

/**
 * Check if a recipe ingredient matches any excluded ingredient
 * Handles variations (e.g., "mushroom" matches "shiitake mushrooms")
 */
export function matchesExcludedIngredient(
    recipeIngredient: string,
    excludedIngredients: string[]
): boolean {
    if (excludedIngredients.length === 0) return false;
    
    const recipeLower = recipeIngredient.toLowerCase();
    
    for (const excluded of excludedIngredients) {
        const excludedLower = excluded.toLowerCase();
        
        // Exact match
        if (recipeLower === excludedLower) {
            return true;
        }
        
        // Partial match (e.g., "mushroom" in "shiitake mushrooms")
        if (recipeLower.includes(excludedLower) || excludedLower.includes(recipeLower)) {
            return true;
        }
        
        // Check variations
        const excludedVariations = getIngredientVariations(excludedLower);
        for (const variation of excludedVariations) {
            if (recipeLower.includes(variation) || variation.includes(recipeLower)) {
                return true;
            }
        }
    }
    
    return false;
}



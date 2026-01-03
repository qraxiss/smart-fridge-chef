const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export interface ApiError {
    message: string;
    status: number;
}

/**
 * Helper function to handle API errors
 */
const handleApiError = async (response: Response): Promise<never> => {
    let errorMessage = 'An error occurred';
    
    try {
        const data = await response.json();
        errorMessage = data.detail || data.message || errorMessage;
    } catch {
        errorMessage = `Server error: ${response.status} ${response.statusText}`;
    }
    
    const error: ApiError = {
        message: errorMessage,
        status: response.status
    };
    
    throw error;
};

/**
 * Get all recipes with optional filtering
 */
export const getRecipes = async (params?: {
    ingredients?: string[];
    limit?: number;
    offset?: number;
}) => {
    try {
        const queryParams = new URLSearchParams();
        
        if (params?.ingredients && params.ingredients.length > 0) {
            queryParams.append('ingredients', params.ingredients.join(','));
        }
        if (params?.limit) {
            queryParams.append('limit', params.limit.toString());
        }
        if (params?.offset) {
            queryParams.append('offset', params.offset.toString());
        }

        const url = `${API_BASE_URL}/recipes/?${queryParams}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            await handleApiError(response);
        }
        
        return await response.json();
    } catch (error) {
        if ((error as ApiError).status) {
            throw error;
        }
        throw {
            message: 'Network error. Please check if the backend is running.',
            status: 0
        } as ApiError;
    }
};

/**
 * Get a specific recipe by title
 */
export const getRecipeByTitle = async (title: string) => {
    try {
        const response = await fetch(
            `${API_BASE_URL}/recipes/${encodeURIComponent(title)}`
        );
        
        if (!response.ok) {
            await handleApiError(response);
        }
        
        return await response.json();
    } catch (error) {
        if ((error as ApiError).status) {
            throw error;
        }
        throw {
            message: 'Network error. Please check if the backend is running.',
            status: 0
        } as ApiError;
    }
};

/**
 * Get recipe recommendations based on ingredients
 */
export const getRecommendations = async (ingredients: string[]) => {
    try {
        const response = await fetch(`${API_BASE_URL}/recipes/recommend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ingredients }),
        });
        
        if (!response.ok) {
            await handleApiError(response);
        }
        
        return await response.json();
    } catch (error) {
        if ((error as ApiError).status) {
            throw error;
        }
        throw {
            message: 'Network error. Please check if the backend is running.',
            status: 0
        } as ApiError;
    }
};

/**
 * Health check - test if backend is running
 */
export const checkHealth = async () => {
    try {
        const response = await fetch('http://localhost:3001/health');
        return response.ok;
    } catch {
        return false;
    }
};


import React from 'react';
import { useFridge } from '../store/FridgeContext';
import { findSuitableRecipes, getRecipeImageUrl } from '../utils/helpers';
import { Link } from 'react-router-dom';

const RecipesPage: React.FC = () => {
    const { fridgeIngredients } = useFridge();
    const suitableRecipes = findSuitableRecipes(fridgeIngredients);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Recommended Recipes</h1>
                <p className="mt-2 text-gray-600">
                    Based on your fridge content: <span className="italic">{fridgeIngredients.join(', ') || "Nothing yet"}</span>
                </p>
            </div>

            {fridgeIngredients.length === 0 ? (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                                Your fridge is empty! <Link to="/" className="font-medium underline hover:text-yellow-600">Go back and add ingredients</Link> to see recipes.
                            </p>
                        </div>
                    </div>
                </div>
            ) : suitableRecipes.length === 0 ? (
                <div className="text-center py-16">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">No matching recipes found</h3>
                    <p className="mt-1 text-gray-500">Try adding more versatile ingredients like onions, garlic, or eggs.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {suitableRecipes.map((recipe, index) => (
                        <Link 
                            to={`/recipe/${encodeURIComponent(recipe.Title)}`} 
                            state={{ matchingIngredients: recipe.matchingIngredients }} 
                            key={index}
                            className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <img 
                                    src={getRecipeImageUrl(recipe.Image_Name)} 
                                    alt={recipe.Title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Recipe';
                                    }}
                                />
                                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    {recipe.matchingCount} Matches
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex-1 p-6 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                                    {recipe.Title}
                                </h3>
                                <div className="mb-2">
                                    <p className="text-sm text-gray-600">
                                        <span className="font-semibold">Matching Ingredients:</span> {recipe.matchingIngredients.join(', ')}
                                    </p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-sm font-medium text-primary">View Recipe &rarr;</span>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                                        Kitchen Ready
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecipesPage;
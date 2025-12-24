import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import recipes from '../data/recipes';
import { parseIngredientList, getRecipeImageUrl } from '../utils/helpers';
import { RecipeWithMatch } from '../types';

const RecipeDetailPage: React.FC = () => {
    const { title } = useParams<{ title: string }>();
    const location = useLocation();
    const { matchingIngredients } = (location.state as { matchingIngredients: string[] }) || { matchingIngredients: [] };
    
    // Find recipe by title (decodeURIComponent is handled by Router mostly, but good to be safe)
    const recipe = recipes.find(r => r.Title === decodeURIComponent(title || ''));

    if (!recipe) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-800">Recipe not found</h2>
                <Link to="/recipes" className="mt-4 text-primary hover:underline">Back to recipes</Link>
            </div>
        );
    }

    const ingredientsList = parseIngredientList(recipe.Ingredients);
    const instructionsList = recipe.Instructions.split('\n').filter(i => i.trim().length > 0);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-80 sm:h-96 w-full">
                <img 
                    src={getRecipeImageUrl(recipe.Image_Name)} 
                    alt={recipe.Title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Recipe+Image';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
                     <Link to="/recipes" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Results
                    </Link>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight shadow-sm">
                        {recipe.Title}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Sidebar: Ingredients */}
                    <div className="lg:col-span-1">
                        <div className="bg-green-50 rounded-2xl p-6 sm:p-8 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                Ingredients
                            </h2>
                            {matchingIngredients.length > 0 && (
                                <div className="mb-6 pb-4 border-b border-green-200">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Matching Ingredients:</h3>
                                    <ul className="flex flex-wrap gap-2">
                                        {matchingIngredients.map((ing, idx) => (
                                            <li key={idx} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">
                                                {ing}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <ul className="space-y-4">
                                {ingredientsList.map((ing, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full border border-green-200 flex items-center justify-center mr-3 mt-0.5 text-green-600 bg-white text-xs">
                                            {idx + 1}
                                        </div>
                                        <span className="text-gray-700 leading-relaxed">{ing}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Content: Instructions */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-100">Instructions</h2>
                        <div className="space-y-10">
                            {instructionsList.map((step, idx) => (
                                <div key={idx} className="flex">
                                    <div className="flex-shrink-0 mr-6">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg">
                                            {idx + 1}
                                        </span>
                                    </div>
                                    <div className="pt-1">
                                        <p className="text-lg text-gray-700 leading-relaxed">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RecipeDetailPage;
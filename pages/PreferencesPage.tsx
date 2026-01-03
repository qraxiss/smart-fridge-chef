import React, { useState } from 'react';
import { useFridge } from '../store/FridgeContext';
import { useIngredientSearch } from '../hooks/useIngredientSearch';
import { getIngredientDetails } from '../constants/ingredientData';

const PreferencesPage: React.FC = () => {
    const { dietaryPreferences, setDietaryPreferences, excludedIngredients, toggleExcludedIngredient } = useFridge();
    const [exclusionSearch, setExclusionSearch] = useState('');
    const { suggestions: exclusionSuggestions } = useIngredientSearch(exclusionSearch, {
        maxResults: 10,
        minQueryLength: 1,
    });

    const handleToggle = (key: keyof typeof dietaryPreferences) => {
        setDietaryPreferences({
            ...dietaryPreferences,
            [key]: !dietaryPreferences[key]
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Page Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">Preferences & Settings</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Customize your recipe recommendations by setting dietary preferences.
                </p>
            </div>

            {/* Dietary Preferences Section */}
            <div className="mb-16">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Dietary Preferences</h2>
                    <p className="text-gray-600 text-sm">Toggle dietary restrictions and preferences</p>
                </div>

                <div className="bg-white shadow-sm rounded-xl divide-y divide-gray-200 border border-gray-100">
                    {Object.keys(dietaryPreferences).map((key) => {
                        const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                        const isChecked = dietaryPreferences[key as keyof typeof dietaryPreferences];

                        return (
                            <div key={key} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-900">{label}</span>
                                    <span className="text-sm text-gray-500">
                                        {isChecked ? `Show only ${label.toLowerCase()} recipes.` : `Include recipes with ${label.toLowerCase()} ingredients.`}
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleToggle(key as keyof typeof dietaryPreferences)}
                                    type="button"
                                    className={`${
                                        isChecked ? 'bg-primary' : 'bg-gray-200'
                                    } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                                    role="switch"
                                    aria-checked={isChecked}
                                >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                        aria-hidden="true"
                                        className={`${
                                            isChecked ? 'translate-x-5' : 'translate-x-0'
                                        } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                                    />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Excluded Ingredients Section */}
            <div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Excluded Ingredients</h2>
                    <p className="text-gray-600 text-sm">Search and select ingredients you want to exclude from recipe suggestions</p>
                </div>

                {/* Search Bar */}
                <div className="mb-4 relative">
                    <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0 text-base outline-none transition-all"
                        placeholder="Search ingredients to exclude (e.g., 'mushroom', 'onion')"
                        value={exclusionSearch}
                        onChange={(e) => setExclusionSearch(e.target.value)}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Search Suggestions */}
                {exclusionSearch.length > 0 && exclusionSuggestions.length > 0 && (
                    <div className="mb-4 bg-white rounded-lg border border-gray-200 shadow-lg max-h-60 overflow-auto">
                        {exclusionSuggestions
                            .filter(ing => !excludedIngredients.includes(ing.name))
                            .map((ingredient) => {
                                const details = getIngredientDetails(ingredient.name);
                                return (
                                    <button
                                        key={ingredient.name}
                                        onClick={() => {
                                            toggleExcludedIngredient(ingredient.name);
                                            setExclusionSearch('');
                                        }}
                                        className="w-full flex items-center px-4 py-2 hover:bg-red-50 text-left transition-colors border-b border-gray-50 last:border-0"
                                    >
                                        <span className="text-xl mr-3">{details.emoji}</span>
                                        <span className="font-medium text-gray-700 capitalize">{details.label}</span>
                                        <span className="ml-auto text-sm text-red-600">+ Exclude</span>
                                    </button>
                                );
                            })}
                    </div>
                )}

                {/* Excluded Ingredients List */}
                {excludedIngredients.length > 0 ? (
                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-semibold text-gray-700">
                                {excludedIngredients.length} ingredient{excludedIngredients.length !== 1 ? 's' : ''} excluded
                            </span>
                            <button
                                onClick={() => {
                                    if (confirm(`Remove all ${excludedIngredients.length} excluded ingredients?`)) {
                                        excludedIngredients.forEach(ing => toggleExcludedIngredient(ing));
                                    }
                                }}
                                className="text-sm text-red-600 hover:text-red-700 font-medium"
                            >
                                Clear All
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {excludedIngredients.map((ingredient) => {
                                const details = getIngredientDetails(ingredient);
                                return (
                                    <button
                                        key={ingredient}
                                        onClick={() => toggleExcludedIngredient(ingredient)}
                                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 border border-red-200 rounded-lg text-sm font-medium text-red-700 hover:bg-red-100 transition-colors"
                                    >
                                        <span>{details.emoji}</span>
                                        <span>{details.label}</span>
                                        <span className="text-red-500">×</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 text-center">
                        <p className="text-gray-500 text-sm">No ingredients excluded yet. Use the search above to exclude ingredients.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreferencesPage;
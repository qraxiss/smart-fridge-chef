import React, { useState, useMemo } from 'react';
import { useFridge } from '../store/FridgeContext';
import allIngredients from '../data/ingredients';
import { getIngredientImageUrl } from '../utils/helpers';
import { Link } from 'react-router-dom';

const FridgePage: React.FC = () => {
    const { fridgeIngredients, addIngredient, removeIngredient } = useFridge();
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Filter suggestions based on search term, excluding already added items
    const suggestions = useMemo(() => {
        if (!searchTerm) return [];
        return allIngredients.filter(ing => 
            ing.toLowerCase().includes(searchTerm.toLowerCase()) && 
            !fridgeIngredients.includes(ing)
        );
    }, [searchTerm, fridgeIngredients]);

    const handleAdd = (ing: string) => {
        addIngredient(ing);
        setSearchTerm('');
        setIsDropdownOpen(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    What's in your fridge?
                </h1>
                <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                    Add ingredients to your virtual fridge and we'll tell you what you can cook today.
                </p>
            </div>

            {/* Search Section */}
            <div className="max-w-xl mx-auto relative mb-12">
                <div className="relative">
                    <input
                        type="text"
                        className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-primary focus:ring-0 shadow-sm text-lg outline-none transition-all"
                        placeholder="Search ingredients (e.g., 'bread', 'chicken')"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setIsDropdownOpen(true);
                        }}
                        onFocus={() => setIsDropdownOpen(true)}
                        onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} // Delay to allow click
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Dropdown Suggestions */}
                {isDropdownOpen && suggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 max-h-80 overflow-auto custom-scrollbar">
                        {suggestions.map((ing) => (
                            <button
                                key={ing}
                                className="w-full flex items-center px-4 py-3 hover:bg-green-50 text-left transition-colors border-b border-gray-50 last:border-0"
                                onClick={() => handleAdd(ing)}
                            >
                                <div className="w-10 h-10 bg-gray-100 rounded-lg p-1 mr-3 flex-shrink-0 overflow-hidden">
                                     <img 
                                        src={getIngredientImageUrl(ing)} 
                                        alt={ing}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=?'; 
                                            (e.target as HTMLImageElement).style.opacity = "0.5";
                                        }}
                                    />
                                </div>
                                <span className="font-medium text-gray-700 capitalize">{ing}</span>
                                <span className="ml-auto text-primary opacity-0 group-hover:opacity-100">+ Add</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Current Fridge Content */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Your Fridge</h2>
                    <span className="text-gray-500 text-sm">{fridgeIngredients.length} items</span>
                </div>

                {fridgeIngredients.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <p className="text-gray-500">Your fridge is empty. Start adding ingredients above!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {fridgeIngredients.map((ing) => (
                            <div key={ing} className="group relative bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center hover:shadow-md transition-shadow">
                                <button 
                                    onClick={() => removeIngredient(ing)}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                    title="Remove"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div className="w-16 h-16 mb-3">
                                     <img 
                                        src={getIngredientImageUrl(ing)} 
                                        alt={ing}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64?text=' + ing.charAt(0).toUpperCase(); 
                                        }}
                                    />
                                </div>
                                <span className="font-medium text-gray-700 capitalize text-center leading-tight">{ing}</span>
                            </div>
                        ))}
                    </div>
                )}
                
                {fridgeIngredients.length > 0 && (
                    <div className="mt-8 text-center">
                        <Link to="/recipes" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:scale-105">
                            Find Recipes
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FridgePage;
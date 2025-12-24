import React, { useState } from 'react';

const PreferencesPage: React.FC = () => {
    // Mock state
    const [preferences, setPreferences] = useState({
        glutenFree: false,
        vegetarian: false,
        vegan: false,
        dairyFree: false,
        nutAllergy: false
    });

    const handleToggle = (key: keyof typeof preferences) => {
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dietary Preferences</h1>
            <p className="text-gray-500 mb-10">Customize your recipe suggestions based on your dietary needs.</p>

            <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
                {Object.keys(preferences).map((key) => {
                    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    const isChecked = preferences[key as keyof typeof preferences];

                    return (
                        <div key={key} className="px-6 py-4 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="font-medium text-gray-900">{label}</span>
                                <span className="text-sm text-gray-500">
                                    {isChecked ? `Show only ${label.toLowerCase()} recipes.` : `Include recipes with ${label.toLowerCase()} ingredients.`}
                                </span>
                            </div>
                            <button
                                onClick={() => handleToggle(key as keyof typeof preferences)}
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
            
            <div className="mt-8 p-4 bg-blue-50 rounded-md text-blue-700 text-sm">
                <strong>Note:</strong> These preferences are for demonstration purposes and do not currently filter the recipe database.
            </div>
        </div>
    );
};

export default PreferencesPage;
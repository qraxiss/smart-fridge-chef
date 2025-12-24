import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFridge } from '../store/FridgeContext';

const Navbar: React.FC = () => {
    const location = useLocation();
    const { fridgeIngredients } = useFridge();

    const isActive = (path: string) => location.pathname === path ? 'text-primary font-bold bg-green-50' : 'text-gray-600 hover:text-primary hover:bg-green-50';

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                             <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                                F
                             </div>
                             <span className="font-bold text-xl tracking-tight text-gray-900">FridgeChef</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-8">
                        <Link 
                            to="/" 
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/')}`}
                        >
                            My Fridge 
                            <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                                {fridgeIngredients.length}
                            </span>
                        </Link>
                        <Link 
                            to="/recipes" 
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/recipes')}`}
                        >
                            Recipes
                        </Link>
                         <Link 
                            to="/preferences" 
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/preferences')}`}
                        >
                            Preferences
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
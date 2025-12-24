import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FridgePage from './pages/FridgePage';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import PreferencesPage from './pages/PreferencesPage';
import { FridgeProvider } from './store/FridgeContext';

const App: React.FC = () => {
  return (
    <FridgeProvider>
        <Router>
            <div className="min-h-screen bg-gray-50 font-sans">
                <Navbar />
                <Routes>
                    <Route path="/" element={<FridgePage />} />
                    <Route path="/recipes" element={<RecipesPage />} />
                    <Route path="/recipe/:title" element={<RecipeDetailPage />} />
                    <Route path="/preferences" element={<PreferencesPage />} />
                </Routes>
            </div>
        </Router>
    </FridgeProvider>
  );
};

export default App;
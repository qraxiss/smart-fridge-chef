import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FridgeContextType {
    fridgeIngredients: string[];
    addIngredient: (ingredient: string) => void;
    removeIngredient: (ingredient: string) => void;
}

const FridgeContext = createContext<FridgeContextType | undefined>(undefined);

export const FridgeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Initialize from localStorage if available
    const [fridgeIngredients, setFridgeIngredients] = useState<string[]>(() => {
        const saved = localStorage.getItem('fridgeIngredients');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('fridgeIngredients', JSON.stringify(fridgeIngredients));
    }, [fridgeIngredients]);

    const addIngredient = (ingredient: string) => {
        if (!fridgeIngredients.includes(ingredient)) {
            setFridgeIngredients([...fridgeIngredients, ingredient]);
        }
    };

    const removeIngredient = (ingredient: string) => {
        setFridgeIngredients(fridgeIngredients.filter(i => i !== ingredient));
    };

    return (
        <FridgeContext.Provider value={{ fridgeIngredients, addIngredient, removeIngredient }}>
            {children}
        </FridgeContext.Provider>
    );
};

export const useFridge = () => {
    const context = useContext(FridgeContext);
    if (!context) {
        throw new Error('useFridge must be used within a FridgeProvider');
    }
    return context;
};

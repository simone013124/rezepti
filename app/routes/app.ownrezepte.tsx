// Beispiel für eine Komponente, die die Playlists anzeigt (PlaylistComponent.tsx)
import React, { useState, useEffect } from 'react';
import { loadRecipesFromLocalStorage } from '~/storage.server/localStorageUtils';

const RecipeComponent: React.FC = () => {
    const [recipes, setRecipes] = useState<any[]>([]);

    useEffect(() => {
        const loadedRecipes = loadRecipesFromLocalStorage();
        setRecipes(loadedRecipes);
    }, []);

    return (
        <div>
            <h1>Shopping list</h1>
            <div className="shoppingList">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipeItem">
                        <input type="checkbox" id={`checkbox-${recipe.id}`} className="checkbox" />
                        <label htmlFor={`checkbox-${recipe.id}`} className="label">{recipe.title}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeComponent;

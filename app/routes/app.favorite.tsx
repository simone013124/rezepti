import React, { useState, useEffect } from 'react';
import { loadFavoritesFromLocalStorage } from '~/storage.server/localStorageUtils';
import { Recipe } from '~/models/recipe';
import RecipeCard from "~/components/recipeCard";

const FavoriteRecipes: React.FC = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const favorites = loadFavoritesFromLocalStorage();
        setFavoriteRecipes(favorites);
    }, []);

    return (
        <div>
            <h1>Favorite Recipes</h1>
            <div className="favorite-recipes">

                {favoriteRecipes.map((recipe) => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}

            </div>
        </div>
    );
};

export default FavoriteRecipes;

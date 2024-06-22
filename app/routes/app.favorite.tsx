import React, { useState, useEffect } from 'react';
import { loadFavoritesFromLocalStorage } from '~/storage.server/favorite-storage';
import { Recipe } from '~/models/recipe';
import RecipeCard from '~/components/recipeCard';

const FavoriteRecipes: React.FC = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const favorites = loadFavoritesFromLocalStorage();
        setFavoriteRecipes(favorites);
    }, []);

    console.log(favoriteRecipes);
    return (
        <div>
            <h1 className="mb-3">Favorite Recipes</h1>
            <div className="favorite-recipes">
                {favoriteRecipes.length === 0 ? (
                    <p>No favorite recipes found.</p>
                ) : (
                    favoriteRecipes.map((recipe) => (
                        <RecipeCard key={recipe.idMeal} recipe={recipe} />
                    ))
                )}
            </div>
        </div>
    );
};

export default FavoriteRecipes;

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
            <h1 className="mb-3">Favorite Recipes</h1>
            <p className="mb-12">lsifjiowe</p>
            <div className="favorite-recipes">
                {favoriteRecipes.length === 0 ? (
                    <p>No favorite recipes found.</p>
                ) : (
                    favoriteRecipes.map((recipe) => (
                        <div key={recipe.idMeal}>
                            <h2>{recipe.idMeal}</h2>
                            <p>{recipe.strMeal}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FavoriteRecipes;

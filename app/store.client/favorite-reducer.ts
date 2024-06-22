import { createAction, createReducer } from '@reduxjs/toolkit';
import { Recipe } from '~/models/recipe';
import { loadFavoritesFromLocalStorage } from '~/storage.server/favorite-storage';

// Define the payload structure for the toggleFavorite action
interface ToggleFavoritePayload {
    idMeal: string;
    strMealThumb: string;
    strMeal: string;
}

// Action zum Umschalten des Favoritenstatus
export const toggleFavoriteAction = createAction<ToggleFavoritePayload>('recipes/toggleFavorite');

const initialState: Recipe[] = (typeof window !== 'undefined') ? loadFavoritesFromLocalStorage() : [];

// Reducer
const favoriteReducer = createReducer(initialState, (builder) => {
    builder.addCase(toggleFavoriteAction, (state, action) => {
        const { idMeal, strMealThumb, strMeal } = action.payload;
        const recipeIndex = state.findIndex((recipe) => recipe.idMeal === idMeal);

        if (recipeIndex !== -1) {
            // Toggle isFavorite
            state[recipeIndex].isFavorite = !state[recipeIndex].isFavorite;
            // If isFavorite is false, remove the recipe from state
            if (!state[recipeIndex].isFavorite) {
                state.splice(recipeIndex, 1);
            }
        } else {
            // Füge ein neues Rezept mit isFavorite=true hinzu
            state.push({ idMeal, strMealThumb, strMeal, isFavorite: true } as Recipe);
        }

        // Favoritenliste im Local Storage aktualisieren (nur im Browser)
        if (typeof window !== 'undefined') {
            const updatedFavorites = state.filter((recipe) => recipe.isFavorite);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    });
});

export default favoriteReducer;

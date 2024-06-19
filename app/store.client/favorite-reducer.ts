import { createAction, createReducer } from '@reduxjs/toolkit';
import { Recipe } from '~/models/recipe';

// Action zum Umschalten des Favoritenstatus
export const toggleFavoriteAction = createAction<string>('recipes/toggleFavorite');

// Funktion zum Laden der Favoriten aus dem Local Storage (nur im Browser)
const loadFavoritesFromLocalStorage = (): Recipe[] => {
    if (typeof window !== 'undefined') {
        const recipesJson = localStorage.getItem('favoriteRecipes');
        return recipesJson ? JSON.parse(recipesJson) : [];
    }
    return [];
};

const initialState: Recipe[] = loadFavoritesFromLocalStorage();

// Reducer
const favoriteReducer = createReducer(initialState, (builder) => {
    builder.addCase(toggleFavoriteAction, (state, action) => {
        const recipeId = action.payload;
        const recipeToUpdate = state.find((recipe) => recipe.idMeal === recipeId);

        if (recipeToUpdate) {
            // Toggle isFavorite
            recipeToUpdate.isFavorite = !recipeToUpdate.isFavorite;
        } else {
            // Füge ein neues Rezept mit isFavorite=true hinzu
            state.push({ idMeal: recipeId, isFavorite: true } as Recipe);
        }

        // Favoritenliste im Local Storage aktualisieren (nur im Browser)
        if (typeof window !== 'undefined') {
            localStorage.setItem('favoriteRecipes', JSON.stringify(state));
        }
    });
});

export default favoriteReducer;

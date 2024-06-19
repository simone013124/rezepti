import { createAction, createReducer } from '@reduxjs/toolkit';

export const toggleFavoriteAction = createAction<string>('recipes/toggleFavorite');

type Recipe = {
    id: string;
    title: string;
    isFavorite: boolean;
};

const initialState: { recipes: Recipe[] } = {
    recipes: [
        { id: '1', title: 'Recipe 1', isFavorite: false },
        { id: '2', title: 'Recipe 2', isFavorite: true },
        // Weitere Rezepte nach Bedarf hinzufügen
    ],
};

const favoriteReducer = createReducer(initialState, (builder) => {
    builder.addCase(toggleFavoriteAction, (state, action) => {
        const recipeId = action.payload;
        const recipeToUpdate = state.recipes.find((recipe) => recipe.id === recipeId);

        if (recipeToUpdate) {
            recipeToUpdate.isFavorite = !recipeToUpdate.isFavorite;
        }
    });
});

export default favoriteReducer;

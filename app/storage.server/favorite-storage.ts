import {Recipe} from "~/models/recipe";

export const loadFavoritesFromLocalStorage = (): Recipe[] => {
    if (typeof window !== 'undefined') {
        const favoriteJson = localStorage.getItem('favorites');
        if (favoriteJson) {
            return JSON.parse(favoriteJson);
        }
    }
    return [];
}

export const deleteFavoritesFromLocalStorage = async (id: string) => {
    if (typeof window !== 'undefined') {
        let favorites = loadFavoritesFromLocalStorage();
        favorites = favorites.filter((recipe) => recipe.idMeal.toString() !== id); // Filtern der Rezepte
        localStorage.setItem('favorites', JSON.stringify(favorites)); // Speichern der aktualisierten Rezepte im localStorage
    }
};


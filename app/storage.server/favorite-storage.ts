import { Recipe } from '~/models/recipe';

// Funktion zum Speichern der Favoritenliste im Local Storage
const saveFavoriteRecipes = (favorites: Recipe[]) => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
};

// Funktion zum Laden der Favoritenliste aus dem Local Storage
const loadFavoriteRecipes = (): Recipe[] => {
    const favoritesJSON = localStorage.getItem('favoriteRecipes');
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
};

// Exportiere diese Funktion, um die Favoriten im Local Storage zu verwalten
export { saveFavoriteRecipes, loadFavoriteRecipes };

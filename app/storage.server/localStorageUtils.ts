

export const loadIngredientsFromLocalStorage = (): any[] => {
    const ingredientsJson = localStorage.getItem('ingredients');
    if (ingredientsJson) {
        return JSON.parse(ingredientsJson);
    }
    return [];
}

export const deleteIngredientsFromLocalStorage = async (id: string) => {
    let ingredients = loadIngredientsFromLocalStorage();
    ingredients = ingredients.filter((ingredients) => ingredients.id.toString() !== id); // Filtern der Rezepte
    localStorage.setItem('ingredients', JSON.stringify(ingredients)); // Speichern der aktualisierten Rezepte im localStorage
};


// Funktion zum Laden der Favoriten aus dem Local Storage
export const loadFavoritesFromLocalStorage = (): any[] => {
    const recipesJson = localStorage.getItem('favoriteRecipes');
    if (recipesJson) {
        return JSON.parse(recipesJson);
    }
    return [];
}

// Funktion zum Speichern der Favoriten im Local Storage
export const saveFavoritesToLocalStorage = (favorites: any[]): void => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
};

// Funktion zum Hinzufügen oder Entfernen eines Rezepts aus den Favoriten
export const toggleFavoriteInLocalStorage = (recipe: any): void => {
    const favorites = loadFavoritesFromLocalStorage();
    const index = favorites.findIndex((fav: any) => fav.id === recipe.id);

    if (index !== -1) {
        // Rezept bereits in Favoriten, entfernen
        favorites.splice(index, 1);
    } else {
        // Rezept nicht in Favoriten, hinzufügen
        favorites.push(recipe);
    }

    saveFavoritesToLocalStorage(favorites);
};
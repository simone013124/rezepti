// Beispiel für die Funktion loadPlaylistsFromLocalStorage im storageUtils.ts
export const loadIngredientsFromLocalStorage = (): any[] => {
    const recipesJson = localStorage.getItem('ingredients');
    if (recipesJson) {
        return JSON.parse(recipesJson);
    }
    return [];
}

export const deleteIngredientsFromLocalStorage = async (id: string) => {
    let recipes = loadIngredientsFromLocalStorage();
    recipes = recipes.filter((recipe) => recipe.id.toString() !== id); // Filtern der Rezepte
    localStorage.setItem('playlists', JSON.stringify(recipes)); // Speichern der aktualisierten Rezepte im localStorage
};
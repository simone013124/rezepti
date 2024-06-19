// Beispiel für die Funktion loadPlaylistsFromLocalStorage im storageUtils.ts
export const loadRecipesFromLocalStorage = (): any[] => {
    const recipesJson = localStorage.getItem('playlists');
    if (recipesJson) {
        return JSON.parse(recipesJson);
    }
    return [];
};

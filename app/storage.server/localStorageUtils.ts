// Beispiel für die Funktion loadPlaylistsFromLocalStorage im storageUtils.ts
export const loadPlaylistsFromLocalStorage = (): any[] => {
    const playlistsJson = localStorage.getItem('playlists');
    if (playlistsJson) {
        return JSON.parse(playlistsJson);
    }
    return [];
};

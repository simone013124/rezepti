// Beispiel für eine Komponente, die die Playlists anzeigt (PlaylistComponent.tsx)
import React, { useState, useEffect } from 'react';
import { loadPlaylistsFromLocalStorage } from '~/storage.server/localStorageUtils'; // Passe den Pfad entsprechend an

const PlaylistComponent: React.FC = () => {
    const [playlists, setPlaylists] = useState<any[]>([]);

    useEffect(() => {
        const loadedPlaylists = loadPlaylistsFromLocalStorage();
        setPlaylists(loadedPlaylists);
    }, []);

    return (
        <div>
            <h1>Meine Playlists</h1>
            <ul>
                {playlists.map((playlist) => (
                    <li key={playlist.id}>
                        <img src={playlist.imageUrl} alt={playlist.title} />
                        <p>{playlist.title}</p>
                        <p>{playlist.createdAt}</p>
                        {/* Weitere Anzeigeelemente hier */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlaylistComponent;

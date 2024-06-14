import { json } from '@remix-run/react';
import { getAllPlaylists } from '~/storage.server/rezept-storage';

export async function loader() {
    const playlists = await getAllPlaylists();
    return json(playlists, 200);
}

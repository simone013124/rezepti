import { LoaderFunctionArgs } from '@remix-run/node';
import { getPlaylistById } from '~/storage.server/rezept-storage';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  const playlistId = params['id'];

  if (!playlistId) {
    throw new Response('Not Found', { status: 404 });
  }

  const playlist = await getPlaylistById(playlistId);

  if (!playlist) {
    throw new Response('Not Found', { status: 404 });
  }

  // Beispielcode für das Abrufen und Filtern von Tracks
  // const tracks = await fetchTracks();
  // const filteredTracks = playlist?.tracks.map((trackId) => tracks.find((track) => track.id === trackId));

  return { playlist };
}

export default function PlaylistDetail() {
  const data = useLoaderData<typeof loader>();
  const playlist = data.playlist;
  // const tracks = data.playlistTracks;

  return (
      <>
        <h1 className="mb-8">{playlist.title}</h1>
        {/* Tracks anzeigen */}
      </>
  );
}

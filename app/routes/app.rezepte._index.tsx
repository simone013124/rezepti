import { rezeptQueryOptions } from '~/api/vegan-api';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '~/components/loading-spinner';

// Definiere den Typ der Daten, die von der Query zurückgegeben werden.
type Recipe = {
    id: string;
    title: string;
    // Füge weitere Felder hinzu, die im Rezeptobjekt vorhanden sind.
};

export default function PlaylistOverview() {
    const {data, isSuccess, isLoading} = useQuery<Recipe[]>(rezeptQueryOptions);

    return (
        <>
            <div className="mb-5">
                <h1>Playlists</h1>
                <p>Your playlists. Your music.</p>
            </div>

            {isLoading ? <LoadingSpinner className={''}></LoadingSpinner> : null}
            {isSuccess ? <PlaylistCardList playlists={data}></PlaylistCardList> : null}
        </>
    );
}
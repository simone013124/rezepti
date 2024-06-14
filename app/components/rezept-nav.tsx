import { Link } from '@remix-run/react';
import { useQuery } from '@tanstack/react-query';
import { ListMusic, ListPlus } from 'lucide-react';
import { rezeptQueryOptions } from '~/api/dessert-api';
import LoadingSpinner from './loading-spinner';

export function PlaylistNav() {
    const { data, isSuccess, isLoading } = useQuery(rezeptQueryOptions);

    return (
        <div className="space-y-1">
            {isLoading ? <LoadingSpinner className={''}></LoadingSpinner> : null}

            {isSuccess && Array.isArray(data) && data.length > 0 ? (
                data.map((playlist) => (
                    <Link key={playlist.id} className="sidebar_link" to={`/app/playlists/${playlist.id}`}>
                        <ListMusic />
                        {playlist.title}
                    </Link>
                ))
            ) : (
                !isLoading && <div>Keine Playlists gefunden.</div>
            )}

            <Link className="sidebar_link" to="/app/rezept/new">
                <ListPlus /> New recipe
            </Link>

            <Link className="sidebar_link" to="/app/ownrezepte">
                <ListPlus /> Own recipe
            </Link>
        </div>
    );
}

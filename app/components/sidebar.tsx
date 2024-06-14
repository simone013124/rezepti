import {Home, LayoutGrid, Apple, CakeSlice, ChefHat, Drumstick, Soup, Beef, Salad, Fish} from 'lucide-react';
import {Link} from '@remix-run/react';
import {PlaylistNav} from "~/components/rezept-nav";


export function Sidebar() {
    return (
        <div className="sidebar">
            <section>
                <h2 className="mb-2">Discover</h2>

                <div className="space-y-1">
                    <Link to="/app" className="sidebar_link">
                        <Home/>
                        Home
                    </Link>

                    <Link to="/app/library" className="sidebar_link">
                        <ChefHat/>
                        XY
                    </Link>

                    <div className="ml-3">

                        <Link to="/app/desserts" className="sidebar_link">
                            <Drumstick/>
                            Chicken
                        </Link>

                        <Link to="/app/desserts" className="sidebar_link">
                            <Beef/>
                            Beef
                        </Link>

                        <Link to="/app/desserts" className="sidebar_link">
                            <Fish/>
                            Seafood
                        </Link>

                        <Link to="/app/desserts" className="sidebar_link">
                            <Soup/>
                            Pasta
                        </Link>

                        <Link to="/app/desserts" className="sidebar_link">
                            <CakeSlice/>
                            Desserts
                        </Link>

                        <Link to="/app/vegan" className="sidebar_link">
                            <Salad/>
                            Vegan
                        </Link>
                    </div>
                    <Link to="/app/new" className="sidebar_link">
                        <Salad/>
                        Neu
                    </Link>


                </div>
            </section>

            <section>
                <h2 className="mb-2">Playlists</h2>

                <PlaylistNav></PlaylistNav>
            </section>
        </div>
    );
}

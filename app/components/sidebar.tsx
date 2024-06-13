import {Home, LayoutGrid, Apple, CakeSlice, ChefHat, Drumstick, Soup, Beef, Salad, Fish} from 'lucide-react';
//import { PlaylistNav } from './playlist-nav';
import {Link} from '@remix-run/react';
import {ChefHat} from "lucide-react";


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

                        <Link to="/app/desserts" className="sidebar_link">
                            <Salad/>
                            Vegan
                        </Link>
                    </div>

                </div>
            </section>

            <section>


            </section>
        </div>
    );
}

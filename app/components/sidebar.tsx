import {Home, CakeSlice, ChefHat, Drumstick, Soup, Beef, Salad, Fish} from 'lucide-react';
import {Link} from '@remix-run/react';
import {ShoppingNav} from "~/components/shopping-nav";


export function Sidebar() {
    return (
        <div className="sidebar">
            <section>
                <h2 className="mb-2">Discover</h2>

                <div>
                    <Link to="/app" className="sidebar_link">
                        <Home/>
                        Home
                    </Link>

                    <h2 className="mt-3">Recipes</h2>

                    <Link to="/app/favorite" className="sidebar_link">
                        <ChefHat/>
                        Favorites
                    </Link>

                    <div className="ml-3">

                        <Link to="/app/chicken" className="sidebar_link">
                            <Drumstick/>
                            Chicken
                        </Link>

                        <Link to="/app/beef" className="sidebar_link">
                            <Beef/>
                            Beef
                        </Link>

                        <Link to="/app/seafood" className="sidebar_link">
                            <Fish/>
                            Seafood
                        </Link>

                        <Link to="/app/pasta" className="sidebar_link">
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

                </div>
            </section>

            <section>
                <h2 className="mb-2">Shoppinglist</h2>
                <ShoppingNav></ShoppingNav>
            </section>
        </div>
    );
}

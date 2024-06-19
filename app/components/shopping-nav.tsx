import { Link } from '@remix-run/react';
import { Apple, ShoppingBasket} from "lucide-react";



export function ShoppingNav() {


    return (
        <div className="space-y-1">
            <Link className="sidebar_link" to="/app/ingredient/new">
                <Apple />Add to shopping list
            </Link>

            <Link className="sidebar_link" to="/app/shoppinglist">
                <ShoppingBasket />View Shoppinglist
            </Link>
        </div>
    );
}

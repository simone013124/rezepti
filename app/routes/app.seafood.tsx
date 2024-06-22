import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchSeafoods } from '../api/seafood-api';
import RecipeCard from '~/components/recipeCard';
import React from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetchSeafoods();

  return {
    rezepte: response.meals,
  };
}

export default function SeaFood() {
  const data = useLoaderData<typeof loader>();
  const rezepte = data.rezepte;

  // Check if rezepte is not an array or if it's empty
  if (!Array.isArray(rezepte) || rezepte.length === 0) {
    return <div>No recipes found.</div>; // or appropriate error handling
  }

  return (
      <div>
        <h1 className="mb-2">Seafood</h1>
        <p className="mb-8">Seafood recipes bring the taste of the ocean to your table, with dishes like succulent shrimp scampi and flavorful grilled salmon. Enjoy the fresh and delicate flavors that make seafood a cherished culinary delight.</p>
        <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

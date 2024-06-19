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
    return <div>No desserts found.</div>; // or appropriate error handling
  }

  return (
      <div>
        <h1 className="mb-2">Seafood</h1>
        <p className="mb-8">lksjfewpegj</p>
        <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

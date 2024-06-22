import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchPastas } from '../api/pasta-api';
import RecipeCard from '~/components/recipeCard';
import React from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetchPastas();

  return {
    rezepte: response.meals,
  };
}

export default function Pasta() {
  const data = useLoaderData<typeof loader>();
  const rezepte = data.rezepte;

  // Check if rezepte is not an array or if it's empty
  if (!Array.isArray(rezepte) || rezepte.length === 0) {
    return <div>No recipes found.</div>; // or appropriate error handling
  }

  return (
      <div>
        <h1 className="mb-2">Pasta</h1>
        <p className="mb-8">Pasta recipes offer a diverse range of flavors and styles, from classic spaghetti carbonara to creamy fettuccine Alfredo. Whether baked, boiled, or sautéed, pasta dishes are a comforting and versatile favorite.</p>
        <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

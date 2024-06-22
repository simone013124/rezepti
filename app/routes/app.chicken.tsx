import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchChickens } from '../api/chicken-api';
import RecipeCard from '~/components/recipeCard';
import React from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetchChickens();

  // @ts-ignore
    return {
    rezepte: response.meals,
  };
}

export default function Chicken() {
  const data = useLoaderData<typeof loader>();
  const rezepte = data.rezepte;

  // Check if rezepte is not an array or if it's empty
  if (!Array.isArray(rezepte) || rezepte.length === 0) {
    return <div>No recipes found.</div>; // or appropriate error handling
  }

  return (
      <div>
        <h1 className="mb-2">Recipes with Chicken</h1>
        <p className="mb-8">Chicken recipes offer a versatile and delicious range of meals, from savory grilled chicken breasts to comforting chicken stews. Whether you prefer spicy, sweet, or savory flavors, there's a chicken recipe to satisfy every palate.</p>
        <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

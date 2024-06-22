import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchBeefs } from '../api/beef-api';
import RecipeCard from '~/components/recipeCard';
import React from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetchBeefs();

  return {
    rezepte: response.meals,
  };
}

export default function Beefs() {
  const data = useLoaderData<typeof loader>();
  const rezepte = data.rezepte;

  // Check if rezepte is not an array or if it's empty
  if (!Array.isArray(rezepte) || rezepte.length === 0) {
    return <div>No desserts found.</div>; // or appropriate error handling
  }

  return (
      <div className="recipe-list">
          <h1 className="mb-4 text-center">Recipes with Beef</h1>
          <p className="mb-8 text-center">Discover a variety of delicious and hearty beef recipes that are perfect for any occasion. From classic beef stews and steaks to innovative dishes that bring out the best flavors of this versatile ingredient, you'll find something to satisfy every craving. Whether you're cooking for a family dinner or a special event, these beef recipes will elevate your culinary game and leave everyone asking for seconds.</p>

          <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

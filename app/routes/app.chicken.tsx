import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchChickens } from '../api/chicken-api';
import RecipeCard from '~/components/recipeCard';
import React from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetchChickens();

  return {
    rezepte: response.meals,
  };
}

export default function Chicken() {
  const data = useLoaderData<typeof loader>();
  const rezepte = data.rezepte;

  // Check if rezepte is not an array or if it's empty
  if (!Array.isArray(rezepte) || rezepte.length === 0) {
    return <div>No desserts found.</div>; // or appropriate error handling
  }

  return (
      <div className="recipe-list">
          <h1 className="mb-4 text-center">Chicken Recipes</h1>
          <p className="mb-8 text-center">Explore a collection of flavorful and versatile chicken recipes that will delight your taste buds. From comforting chicken soups and creamy pastas to zesty grilled chicken and exotic chicken curry dishes, there's something for everyone to enjoy. Whether you're looking for quick weeknight dinners or impressive meals for guests, these chicken recipes are sure to become family favorites.</p>

          <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

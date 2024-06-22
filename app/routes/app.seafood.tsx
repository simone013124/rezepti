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
      <div className="recipe-list">
          <h1 className="mb-4 text-center">Seafood Recipes</h1>
          <p className="mb-8 text-center">Dive into a world of fresh and delectable seafood recipes that capture the essence of the ocean. From succulent grilled shrimp and classic seafood paella to elegant lobster bisque and spicy seafood tacos, these recipes celebrate the flavors of the sea. Whether you're hosting a seafood feast or craving a light and refreshing dish, these seafood recipes will transport your taste buds to coastal paradise.</p>

          <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

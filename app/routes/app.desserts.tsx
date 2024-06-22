

import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchDesserts } from '../api/dessert-api';
import RecipeCard from '~/components/recipeCard';
import React from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetchDesserts();

  return {
    rezepte: response.meals, // Assuming response structure has a 'meals' array
  };
}

export default function Desserts() {
  const data = useLoaderData<typeof loader>();
  const rezepte = data.rezepte;

  // Check if rezepte is not an array or if it's empty
  if (!Array.isArray(rezepte) || rezepte.length === 0) {
    return <div>No recipes found.</div>; // or appropriate error handling
  }

  return (
      <div>
        <h1 className="mb-2">Desserts</h1>
        <p className="mb-8">Dessert recipes provide a delightful finish to any meal, featuring sweet treats like rich chocolate cakes and creamy fruit parfaits. Indulge in a variety of flavors and textures to satisfy your sweet tooth.</p>
        <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

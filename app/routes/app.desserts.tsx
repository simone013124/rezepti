

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
    return <div>No desserts found.</div>; // or appropriate error handling
  }

  return (
      <div className="recipe-list">
          <h1 className="mb-4 text-center">Dessert Recipes</h1>
          <p className="mb-8 text-center">Indulge in sweet and decadent dessert recipes that are perfect for satisfying your sweet tooth. From rich chocolate cakes and creamy cheesecakes to fruity tarts and refreshing sorbets, there's a dessert for every occasion and craving. Whether you're celebrating a special event or simply treating yourself, these dessert recipes will add a delightful ending to any meal.</p>

          <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

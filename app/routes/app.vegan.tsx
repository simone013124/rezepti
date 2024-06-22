import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchVegan } from '../api/vegan-api';
import RecipeCard from '~/components/recipeCard';
import React from "react";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetchVegan();

  return {
    rezepte: response.meals,
  };
}

export default function Vegan() {
  const data = useLoaderData<typeof loader>();
  const rezepte = data.rezepte;


  if (!Array.isArray(rezepte) || rezepte.length === 0) {
    return <div>No desserts found.</div>;
  }

  return (
      <div className="recipe-list">
          <h1 className="mb-4 text-center">Vegan Recipes</h1>
          <p className="mb-8 mx-4 text-center">Discover a diverse selection of plant-based vegan recipes that are both nutritious and delicious. From vibrant salads and hearty vegan burgers to comforting soups and innovative vegan desserts, these recipes showcase the versatility of vegan ingredients. Whether you're following a vegan lifestyle or looking to incorporate more plant-based meals into your diet, these vegan recipes offer something for everyone to enjoy.</p>

          <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

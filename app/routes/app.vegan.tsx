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
    return <div>No recipes found.</div>;
  }

  return (
      <div>
        <h1 className="mb-2">Vegan recipes</h1>
        <p className="mb-8">Vegan recipes showcase the vibrant flavors of plant-based ingredients, offering delicious dishes like hearty lentil stew and creamy avocado pasta. Enjoy a variety of meals that are both nutritious and satisfying without any animal products.</p>
        <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

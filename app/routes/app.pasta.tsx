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
    return <div>No desserts found.</div>; // or appropriate error handling
  }

  return (
      <div className="recipe-list">
          <h1 className="mb-4 text-center">Pasta Recipes</h1>
          <p className="mb-8 text-center">Tantalize your taste buds with a variety of mouthwatering pasta recipes that are sure to please pasta lovers everywhere. From classic Italian spaghetti and creamy carbonara to inventive pasta salads and spicy arrabbiata, these recipes highlight the versatility of pasta. Whether you prefer comforting baked pasta dishes or quick and easy weeknight dinners, these pasta recipes will satisfy your pasta cravings with every bite.</p>
          <div className="recipe-cards-container">
          {rezepte.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>

      </div>
  );
}

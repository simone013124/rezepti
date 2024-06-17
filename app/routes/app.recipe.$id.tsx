
import { useLoaderData } from '@remix-run/react';

import { LoaderFunctionArgs } from '@remix-run/node';
import { fetchById } from '~/api/byId-api'; 

export async function loader({ params }: LoaderFunctionArgs) {
    const id = params['id'];

    if (!id) {
        throw new Error('404');
    }

    const recipe = await fetchById(id);

    if (!recipe) {
        throw new Error('Recipe not found');
    }

    return { recipe };
}



export default function RecipeDetail() {
    const { recipe } = useLoaderData<{ recipe: never }>();

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="recipe-detail">
            <h2>{recipe.strMeal}</h2>
            <p>{recipe.strInstructions}</p>
            {/* Weitere Details hinzufügen */}
        </div>
    );
}

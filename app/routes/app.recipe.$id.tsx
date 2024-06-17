import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from '~/api/byId-api';

const RecipeDetail: React.FC = () => {

    const params = useParams();
    console.log(params); // Überprüfen Sie die Konsolenausgabe, um sicherzustellen, dass `id` enthalten ist
    const { id } = params as { id: string };

    console.log(id);

    const [recipe, setRecipe] = useState<any>(null); // Hier können Sie den Typ von `recipe` anpassen

    useEffect(() => {
        const loadRecipe = async () => {
            try {
                if (id) {
                    const recipeDetails = await fetchById(id);

                    setRecipe(recipeDetails);
                }
            } catch (error) {
                console.error('Failed to fetch recipe details', error);
            }
        };

        loadRecipe();
    }, [id]);

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
};

export default RecipeDetail;

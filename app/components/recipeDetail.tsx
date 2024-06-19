import React from 'react';
import { Recipe } from '~/models/recipe';
import {Link} from "@remix-run/react";

type RecipeDetailProps = {
    recipe: Recipe;
};

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
    return (
        <div className="recipe-detail">
            <div className="recipe-header">
                <h2>{recipe.strMeal}</h2>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
            </div>
            <div className="recipe-meta">
                <p><strong>Category:</strong> {recipe.strCategory}</p>
                <p><strong>Area:</strong> {recipe.strArea}</p>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    {renderIngredients(recipe)}
                </ul>
            </div>
            <div className="recipe-instructions">
                <h3>Instructions:</h3>
                <p>{recipe.strInstructions}</p>
            </div>
            {recipe.strYoutube && (
                <div className="recipe-video">
                    <h3>Video Instructions:</h3>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${extractVideoId(recipe.strYoutube)}`}
                        frameBorder="0"
                        allowFullScreen
                        title="Recipe Video"
                    ></iframe>
                </div>
            )}
            <Link to="/app" >
                Back
            </Link>
        </div>
    );
};



// Funktion zum Rendern der Zutatenliste
const renderIngredients = (recipe: Recipe): React.ReactNode => {
    const ingredients = [];
    for (let i = 1; i <= 10; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;
        if (recipe[ingredientKey] && recipe[measureKey]) {
            ingredients.push(
                <li key={i}>
                    {recipe[ingredientKey]} - {recipe[measureKey]}
                </li>
            );
        }
    }
    return ingredients;
};

// Funktion zur Extraktion der Video-ID aus der YouTube-URL
const extractVideoId = (youtubeUrl: string): string => {
    // Beispiel-Implementierung, anpassen je nach URL-Format
    const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = youtubeUrl.match(regExp);
    return match && match[1] ? match[1] : '';
};

export default RecipeDetail;

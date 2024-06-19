
import React from 'react';
import {Link} from "@remix-run/react";
import {  Heart } from 'lucide-react';



type Recipe = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    strIngredient1: string;
    strMeasure1: string;
    strIngredient2: string;
    strMeasure2: string;
    strIngredient3: string;
    strMeasure3: string;
    strYoutube: string;
    strSource: string;
};

type RecipeCardProps = {
    recipe: Recipe;
};

const isPlaying = true;

type PlayButtonProps = { isPlaying: boolean; onClick?: () => void };
function PlayButton({ isPlaying = false, onClick }: PlayButtonProps) {
    return (
        <button type="button" className="icon-button" onClick={onClick}>
            {isPlaying ? <Heart strokeWidth={1.5} /> :  <Heart strokeWidth={1.5} fill="white" />}
        </button>
    );
}



const onPlayButtonClicked = () => {
    if (isPlaying) {
        console.log("play");
    } else {
        console.log("play not");

    }
};


const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className="card">
            <div className="card_cover">
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="card_cover-img"
                />
            </div>
            <div className="card_body">
                <h2 className="card_title">{recipe.strMeal}</h2>
                <p>{recipe.idMeal}</p>
                <p className="card_description">{recipe.strInstructions}</p>
                <ul className="card_ingredients">
                    <li>{recipe.strIngredient1} - {recipe.strMeasure1}</li>
                    <li>{recipe.strIngredient2} - {recipe.strMeasure2}</li>
                    <li>{recipe.strIngredient3} - {recipe.strMeasure3}</li>
                    {/* Weitere Zutaten nach Bedarf hinzufügen */}
                </ul>
                <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                </a>
                <p className="card_source">
                    Source: <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">{recipe.strSource}</a>
                </p>


                <PlayButton isPlaying={isPlaying} onClick={onPlayButtonClicked}></PlayButton>

                <Link to={`/app/recipe/${recipe.idMeal}`}>
                    <button>More</button>
                </Link>


            </div>
        </div>
    );
};

export default RecipeCard;

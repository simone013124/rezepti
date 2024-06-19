import React from 'react';
import { Link } from '@remix-run/react';
import { Heart } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '~/store.client/store';
import { toggleFavoriteAction } from '~/store.client/favorite-reducer';
import { Recipe } from '~/models/recipe';

type RecipeCardProps = {
    recipe: Recipe;
};

type HeartButtonProps = { isHearted: boolean; onClick?: () => void };
function HeartButton({ isHearted = false, onClick }: HeartButtonProps) {
    return (
        <button type="button" className="icon-button" onClick={onClick}>
            {isHearted ? <Heart strokeWidth={1.5} fill="red" /> : <Heart strokeWidth={1.5} />}
        </button>
    );
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const dispatch = useAppDispatch();
    const isFavorite = useAppSelector((state) =>
        state.recipes.recipes.find((r) => r.id === recipe.id)?.isFavorite ?? false
    );

    const heartedClicked = () => {
        dispatch(toggleFavoriteAction(recipe.id));
    };

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
                </ul>
                <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                </a>
                <p className="card_source">
                    Source: <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">{recipe.strSource}</a>
                </p>

                <HeartButton isHearted={isFavorite} onClick={heartedClicked} />

                <Link to={`/app/recipe/${recipe.idMeal}`}>
                    <button>More</button>
                </Link>
            </div>
        </div>
    );
};

export default RecipeCard;

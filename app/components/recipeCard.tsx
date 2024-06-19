import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heart } from 'lucide-react';
import { toggleFavoriteAction } from '~/store.client/favorite-reducer';
import { Recipe } from '~/models/recipe';
import { Link } from '@remix-run/react';

type RecipeCardProps = {
    recipe: Recipe;
};

const HeartButton: React.FC<{ isHearted: boolean; onClick: () => void }> = ({ isHearted, onClick }) => (
    <button type="button" className="icon-button" onClick={onClick}>
        {isHearted ? <Heart strokeWidth={1.5} fill="white" /> : <Heart strokeWidth={1.5} />}
    </button>
);

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector((state: any) =>
        state.recipes.find((r: Recipe) => r.idMeal === recipe.idMeal)?.isFavorite ?? false
    );

    const onToggleFavoriteClicked = () => {
        dispatch(toggleFavoriteAction(recipe.idMeal));
    };

    return (
        <div className="card">
            <div className="card_cover">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="card_cover-img" />
            </div>
            <div className="card_body">
                <h2 className="card_title">{recipe.strMeal}</h2>
                <HeartButton isHearted={isFavorite} onClick={onToggleFavoriteClicked} />
                <Link to={`/app/recipe/${recipe.idMeal}`}>
                    <button>More</button>
                </Link>
            </div>
        </div>
    );
};

export default RecipeCard;

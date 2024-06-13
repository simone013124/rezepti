// AppHome.tsx

import React, { useEffect, useState } from 'react';
import RecipeCard from '~/components/recipeCard';

import { fetchRandom } from "~/api/random-api";

export default function AppHome() {
    const [random, setRandom] = useState(null);

    useEffect(() => {
        async function fetchRandomRecipe() {
            try {
                const response = await fetchRandom();
                if (response.meals && response.meals.length > 0) {
                    setRandom(response.meals[0]);
                }
            } catch (error) {
                console.error('Error fetching random recipe:', error);
            }
        }

        fetchRandomRecipe();
    }, []);

    return (
        <>
            <h1>ReJoSiCa</h1>
            <p className="text-muted-foreground text-sm mt-2">Savor the flavor with our delightful recipe app! Explore a treasure trove of culinary creations right at your fingertips.</p>
            <p className="text-muted-foreground text-sm mt-2">Whether you're craving something sweet or savory, our sidebar links make it easy to browse by categories. Let's embark on a journey of taste together!</p>

            <>

                {random && <RecipeCard recipe={random} />}
            </>

        </>
    );
}

import { fetchRandom } from "~/api/random-api";
import { useEffect, useState } from "react";


export default function AppHome() {

    const [random, setRandom] = useState(null); // Zustand für das einzelne Dessert

    useEffect(() => {
        async function loadRandom() {
            try {
                const data = await fetchRandom();
                if (data.meals && data.meals.length > 0) {
                    setRandom(data.meals[0]);
                } else {
                    console.error('No meals found in data:', data);
                }
            } catch (error) {
                console.error('Error loading dessert:', error);
            }
        }

        loadRandom();
    }, []);

    return (
        <>
            <h1>ReJoSiCa</h1>
            <p className="text-muted-foreground text-sm mt-2">Savor the flavor with our delightful recipe app! Explore a treasure trove of culinary creations right at your fingertips.</p>
            <p className="text-muted-foreground text-sm mt-2">Whether you're craving something sweet or savory, our sidebar links make it easy to browse by categories. Let's embark on a journey of taste together!</p>
            <br/>
            <h2>Enjoy your random recipe of the day</h2>
            <br/>
            {random && (
                <div>
                    <h2>{random.strMeal}</h2>
                    <img src={random.strMealThumb} alt={random.strMeal} style={{ maxWidth: '100%' }} />
                    <p>{random.strInstructions}</p>
                    <ul>
                        <li>{random.strIngredient1} - {random.strMeasure1}</li>
                        <li>{random.strIngredient2} - {random.strMeasure2}</li>
                        <li>{random.strIngredient3} - {random.strMeasure3}</li>
                        {/* Füge weitere Zutaten hinzu, je nach Bedarf */}
                    </ul>
                    <a href={random.strYoutube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                    <p>Source: <a href={random.strSource} target="_blank" rel="noopener noreferrer">{random.strSource}</a></p>
                </div>
            )}
        </>
    );
}

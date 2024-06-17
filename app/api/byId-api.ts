import { queryOptions } from '@tanstack/react-query';
import { Rezept } from '~/models/rezept';

export async function fetchById(id: string): Promise<any> {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals[0]; // Stellen Sie sicher, dass `data.meals` existiert und die richtigen Daten enthält
}


export async function createRezept(title: string): Promise<Rezept> {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`, {
        method: 'POST',
        body: JSON.stringify({ title: title }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Failed to create recipe.');
    }

    const data = await response.json();
    const newRezept: Rezept = data.meals?.[0]; // Sichergehen, dass meals nicht null ist und das erste Element auswählen

    if (!newRezept) {
        throw new Error('Created recipe not found in response.');
    }

    return newRezept;
}

export const rezeptQueryOptions = queryOptions({
    queryKey: ['rezepte'],
    queryFn: async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        return data.meals;
    },
});

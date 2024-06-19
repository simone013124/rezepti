import { queryOptions } from '@tanstack/react-query';
import { Rezept } from '~/models/recipe';


export async function fetchPastas() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta');
    const rezepte: Rezept[] = await response.json();

    return rezepte;
}


export async function createRezept(title: string) {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta', {
        method: 'POST',
        body: JSON.stringify({ title: title }),
    });
    const newRezept: Rezept = await response.json();

    return newRezept;
}


export const rezeptQueryOptions = queryOptions({
    queryKey: ['rezepte'],
    queryFn: () => fetchPastas(),
});


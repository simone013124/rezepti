export async function fetchById(id: string): Promise<any> {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch recipe details');
        }
        const data = await response.json();
        console.log('API Response:', data); // Konsolenausgabe zur Fehlerbehebung hinzufügen
        return data.meals ? data.meals[0] : null; // Sichergehen, dass `data.meals` existiert und die richtigen Daten enthält
    } catch (error) {
        throw new Error('Failed to fetch recipe details');
    }
}

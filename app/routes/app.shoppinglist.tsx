import React, { useState, useEffect } from 'react';
import { loadIngredientsFromLocalStorage, deleteIngredientsFromLocalStorage } from '~/storage.server/localStorageUtils';

const ShoppingList: React.FC = () => {
    const [recipes, setIngredients] = useState<any[]>([]);
    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        // Laden der Rezepte aus dem lokalen Speicher
        const loadedIngredients = loadIngredientsFromLocalStorage();
        setIngredients(loadedIngredients);
    }, []);

    const handleCheckboxChange = (id: number) => {
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [id]: !prevCheckedItems[id],
        }));
    };

    const handleClearStorage = () => {
        // Liste der IDs der ausgewählten Rezepte zum Löschen
        const selectedRecipeIds = Object.keys(checkedItems).filter(id => checkedItems[id]);

        // Lösche jedes ausgewählte Rezept aus dem localStorage und aktualisiere den State
        Promise.all(
            selectedRecipeIds.map(id =>
                deleteIngredientsFromLocalStorage(id).then(() => {
                    // Nach dem Löschen aktualisiere den State der Rezepte und Checkboxen
                    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id.toString() !== id));
                    setCheckedItems(prevCheckedItems => {
                        const updatedCheckedItems = { ...prevCheckedItems };
                        delete updatedCheckedItems[id];
                        return updatedCheckedItems;
                    });
                })
            )
        ).catch(error => {
            console.error('Fehler beim Löschen der Rezepte:', error);
        });
    };


    return (
        <div>
            <h1>Shopping list</h1>
            <div className="shoppingList">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipeItem">
                        <input
                            type="checkbox"
                            id={`checkbox-${recipe.id}`}
                            className="checkbox"
                            checked={!!checkedItems[recipe.id]}
                            onChange={() => handleCheckboxChange(recipe.id)}
                        />
                        <label
                            htmlFor={`checkbox-${recipe.id}`}
                            className={checkedItems[recipe.id] ? 'label checked' : 'label'}
                        >
                            {recipe.title}
                        </label>
                    </div>
                ))}
            </div>

            <button onClick={handleClearStorage}>Delete checked ingredients</button>
        </div>
    );
};

export default ShoppingList;


export const loadIngredientsFromLocalStorage = (): any[] => {
  const ingredientsJson = localStorage.getItem('ingredients');
  if (ingredientsJson) {
    return JSON.parse(ingredientsJson);
  }
  return [];
}

export const deleteIngredientsFromLocalStorage = async (id: string) => {
  let ingredients = loadIngredientsFromLocalStorage();
  ingredients = ingredients.filter((ingredients) => ingredients.id.toString() !== id); // Filtern der Rezepte
  localStorage.setItem('ingredients', JSON.stringify(ingredients)); // Speichern der aktualisierten Rezepte im localStorage
};


export const saveIngredientToLocalStorage = (ingredient: any) => {
  const ingredients = JSON.parse(localStorage.getItem('ingredients') || '[]');
  ingredients.push(ingredient);
  localStorage.setItem('ingredients', JSON.stringify(ingredients));
};

import { createFeatureStorage } from './storage-utils';

/* Type of the entities that should be stored */
export type IngredientType = {
  id: string;
  title: string;

};

/* Create the storage with a unique name */
const ingredientStorage = createFeatureStorage<IngredientType>('ingredients');

/* Expose the functions you need in your application */
export const getAllIngredients = () => {
  return ingredientStorage.getAll();
};

export const getIngredientBy = (id: string) => {
  return ingredientStorage.getById(id);
};

export const createIngredient = (title: string) => {
  const date = new Date().toISOString();
  const newIngredient = { id: Date.now().toString(), title: title, createdAt: date };
  return ingredientStorage.create(newIngredient);
};

export const updateIngredient = async (id: string, title: string) => {
  return ingredientStorage.update({ id: id, title: title});
};

export const deleteIngredient = async (id: string) => {
  return ingredientStorage.delete(id);
};

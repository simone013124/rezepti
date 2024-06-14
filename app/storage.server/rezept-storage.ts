import { createFeatureStorage } from './storage-utils';

/* Type of the entities that should be stored */
export type RezeptType = {
  id: string;
  title: string;
  createdAt: string;
};

/* Create the storage with a unique name */
const rezeptStorage = createFeatureStorage<RezeptType>('rezepte');

/* Expose the functions you need in your application */
export const getAllRezepte = () => {
  return rezeptStorage.getAll();
};

export const getRezeptById = (id: string) => {
  return rezeptStorage.getById(id);
};

export const createRezept = (title: string) => {
  const date = new Date().toISOString();
  const newRezept = { id: Date.now().toString(), title: title, createdAt: date };
  return rezeptStorage.create(newRezept);
};

export const updateRezept = async (id: string, title: string) => {
  return rezeptStorage.update({ id: id, title: title, createdAt: new Date().toISOString() });
};

export const deleteRezept = async (id: string) => {
  return rezeptStorage.delete(id);
};

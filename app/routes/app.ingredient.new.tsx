import { ClientActionFunctionArgs, redirect, useNavigate } from '@remix-run/react';
import { useState } from 'react';

// Funktion zum Speichern der Playlist im Local Storage
const saveIngredientToLocalStorage = (playlist: any) => {
  const playlists = JSON.parse(localStorage.getItem('ingredients') || '[]');
  playlists.push(playlist);
  localStorage.setItem('ingredients', JSON.stringify(playlists));
};


export async function clientAction({ request }: ClientActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get('title');

  if (!title || typeof title !== 'string') {
    throw new Error('missing title');
  }

  const newPlaylist = {
    title: title,
    id: `ingredient-${Date.now()}`
  };

  saveIngredientToLocalStorage(newPlaylist);

  return redirect('/app/shoppinglist');
}

export default function createIngredientItem() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title) {
      throw new Error('missing title');
    }

    const newPlaylist = {
      title: title,
      id: `ingredient-${Date.now()}`
    };

    saveIngredientToLocalStorage(newPlaylist);

    navigate('/app/shoppinglist');
  };


  return (
      <div className="max-w-md">
        <h1 className="mb-6">Add ingredient to shopping list</h1>

        <form onSubmit={onSubmitHandler} className="flex gap-4 flex-col" method="post">
          <label className="flex gap-3 items-baseline">
            <div className="w-40">Ingredient:</div>

            <div className="flex-auto">
              <input
                  aria-label="Ingredient"
                  name="title"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </label>

          <button className="ml-auto" type="submit">
            Submit
          </button>
        </form>
      </div>
  );
}

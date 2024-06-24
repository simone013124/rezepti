import { ClientActionFunctionArgs, redirect, useNavigate } from '@remix-run/react';
import { useState } from 'react';
import { saveIngredientToLocalStorage } from '~/storage.server/ingredient-storage';



export async function clientAction({ request }: ClientActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get('title');

  if (!title || typeof title !== 'string') {
    throw new Error('missing title');
  }

  const newIngredient = {
    title: title,
    id: `ingredient-${Date.now()}`
  };

  saveIngredientToLocalStorage(newIngredient);

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

          <button className="ml-auto btns" type="submit">
            Submit
          </button>
        </form>
      </div>
  );
}

import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {fetchVegan} from '../api/vegan-api';

export async function loader({ request }: LoaderFunctionArgs) {
  const rezepte = await fetchVegan();

  return {
    rezepte: rezepte,
  };
}

export default function Desserts() {
  const data = useLoaderData<typeof loader>();
  const rezepte = data.rezepte;

  return (
      <pre>{JSON.stringify(rezepte, null, 2)}</pre>
  );
}

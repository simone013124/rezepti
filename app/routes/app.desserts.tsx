import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import {fetchDesserts} from '../api/dessert-api';

export async function loader({ request }: LoaderFunctionArgs) {
  const rezepte = await fetchDesserts();

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

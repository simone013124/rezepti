import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { fetchRezepte } from '../api/rezepte-api';

export async function loader({ request }: LoaderFunctionArgs) {
  const rezepte = await fetchRezepte();

  return {
    rezepte: rezepte,
  };
}

export default function Library() {
  const data = useLoaderData<typeof loader>();
  const rezepte = data.rezepte;

  return (
      <pre>{JSON.stringify(rezepte, null, 2)}</pre>
  );
}

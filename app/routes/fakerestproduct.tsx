// File: app/routes/fakerestproducts.tsx
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return { products };
};

export default function FakeRestProducts() {
  const { products } = useLoaderData<{ products: { id: number; title: string }[] }>();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id} className="p-4 bg-white shadow rounded">
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
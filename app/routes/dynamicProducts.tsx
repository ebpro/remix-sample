// app/routes/dynamicProducts.tsx
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

// Define a Product type
// This interface represents the structure of a product object.
interface Product {
  id: number;
  name: string;
  price: string;
}

// Simulate fetching data from a database or API
// This function returns a list of products.
const fetchProducts = async (): Promise<Product[]> => {
  return [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
  ];
};

// Loader function to fetch data on the server side
// This function fetches the products and returns them as JSON.
export const loader = async () => {
  const products = await fetchProducts();
  return json({ products });
};

// React component to display the products
// This component uses the useLoaderData hook to get the products and displays them in a list.
export default function Products() {
  const { products } = useLoaderData<{ products: Product[] }>();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      {/* Heading for the products page */}
      <h1 className="text-4xl mb-4">Products</h1>
      {/* List of products */}
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="text-xl">
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
Explanation for Students:

1. Product Interface: Defines the structure of a product object with `id`, `name`, and `price` properties.
2. fetchProducts Function: Simulates fetching data from a database or API and returns a list of products.
3. Loader Function: Fetches the products on the server side and returns them as JSON. This function runs before the component is rendered.
4. Products Component: 
   - Uses the `useLoaderData` hook to get the products fetched by the loader function.
   - Displays the products in a list.
   - The `div` container centers the content and adds styling using Tailwind CSS classes.
   - The `h1` element displays the main heading of the products page.
   - The `ul` element displays the list of products, with each product rendered as a `li` element.

This structure ensures that the data is fetched on the server side and passed to the component, providing a seamless user experience.
*/

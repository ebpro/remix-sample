// app/routes/products.$productId.tsx
import { useLoaderData } from '@remix-run/react';
import { json, LoaderFunctionArgs } from '@remix-run/node';

// Simulate fetching product details from a database or API
const fetchProductById = async (id: string) => {
  const products = [
    { id: '1', name: 'Wireless Headphones', price: '€99.99', description: 'High-quality wireless headphones with noise cancellation.' },
    { id: '2', name: 'Smartwatch', price: '€199.99', description: 'Modern smartwatch with various health tracking features.' },
    { id: '3', name: 'Bluetooth Speaker', price: '€49.99', description: 'Portable Bluetooth speaker with excellent sound quality.' },
    { id: '4', name: 'Gaming Mouse', price: '€59.99', description: 'Ergonomic gaming mouse with customizable buttons.' },
  ];
  return products.find(product => product.id === id);
};

// Loader function to fetch product details on the server side
export const loader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.productId) {
    throw new Response('Product ID is required', { status: 400 });
  }
  const product = await fetchProductById(params.productId);
  if (!product) {
    throw new Response('Product Not Found', { status: 404 });
  }
  return json(product);
};

// Main component to display product details
export default function Product() {
  const product = useLoaderData();

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* Heading for the product name */}
      <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
      {/* Product price */}
      <p className="text-gray-700 mb-2">{product.price}</p>
      {/* Product description */}
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
}

/*
Explanation for Students:

1. Import Statements: Import necessary modules and components from Remix and other files.
2. fetchProductById Function: Simulates fetching product details from a database or API based on the product ID.
3. Loader Function: Fetches product details on the server side using the `fetchProductById` function. If the product is not found, it throws a 404 error.
4. Product Component: The main component that displays the product details.
   - `useLoaderData`: Retrieves the product data fetched by the loader function.
   - Container Div: The outer `div` uses Tailwind CSS classes to style the container with padding (`p-4`), a white background (`bg-white`), shadow (`shadow-md`), and rounded corners (`rounded-md`).
   - Heading: The `h2` element displays the product name with Tailwind CSS classes for text size (`text-2xl`), font weight (`font-semibold`), and margin bottom (`mb-2`).
   - Price: The `p` element displays the product price with Tailwind CSS classes for text color (`text-gray-700`) and margin bottom (`mb-2`).
   - Description: The `p` element displays the product description with Tailwind CSS classes for text color (`text-gray-700`).

This structure provides a clean and organized layout for displaying product details, with data fetched on the server side and passed to the component.
*/
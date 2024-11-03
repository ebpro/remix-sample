// app/routes/products.tsx
import Navbar from "~/components/Navbar";

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Products Page</h1>
        <p className="text-lg text-gray-700 mb-8">Details about the products will go here.</p>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="https://img.freepik.com/free-photo/black-wireless-headphones-isolated-white-background_53876-96804.jpg" alt="Wireless Headphones" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Wireless Headphones</h2>
              <p className="text-gray-700 mb-2">€99.99</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="https://img.freepik.com/free-photo/modern-smartwatch-with-black-strap-isolated-white-background_53876-96803.jpg" alt="Smartwatch" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Smartwatch</h2>
              <p className="text-gray-700 mb-2">€199.99</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="https://img.freepik.com/free-photo/portable-wireless-speaker-isolated-white-background_53876-96805.jpg" alt="Bluetooth Speaker" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Bluetooth Speaker</h2>
              <p className="text-gray-700 mb-2">€49.99</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="https://img.freepik.com/free-photo/gaming-mouse-isolated-white-background_53876-96806.jpg" alt="Gaming Mouse" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Gaming Mouse</h2>
              <p className="text-gray-700 mb-2">€59.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
Explanation for Students:

1. Component Definition: The `Products` function is a React component that represents the products page.
2. Container Div: The outer `div` has a minimum height of the screen (`min-h-screen`) and a gray background (`bg-gray-100`). These classes are from Tailwind CSS and help style the container.
3. Navbar Component: The `Navbar` component is included to provide navigation links.
4. Inner Container: The inner `div` centers the content and adds padding (`p-4`). It uses Tailwind CSS classes for layout and spacing.
5. Main Heading: The `h1` element displays the main heading of the products page. It uses Tailwind CSS classes for text size (`text-3xl`), font weight (`font-bold`), and margin bottom (`mb-4`).
6. Introductory Text: The `p` element provides some introductory text for the products page. It uses Tailwind CSS classes for text size (`text-lg`) and text color (`text-gray-700`).
7. Products Grid: The `div` with `grid` classes creates a responsive grid layout for the products. It uses Tailwind CSS classes to define the grid columns and gaps.
8. Product Cards: Each product is displayed in a card with a white background (`bg-white`), shadow (`shadow-md`), and rounded corners (`rounded-lg`). The product image, name, and price are styled using Tailwind CSS classes. The placeholder images are used for demonstration purposes and are sourced from Freepik. The prices are displayed in euros (€).

This structure provides a clean and organized layout for the products page, with a consistent header and space for displaying products in a responsive grid.
*/
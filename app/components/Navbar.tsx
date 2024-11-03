// app/components/Navbar.tsx
import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyApp</div>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className={`flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex transition-all duration-300 ease-in-out`}>
          <li>
            <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-gray-300 transition-colors duration-200">
              Products
            </Link>
          </li>
          <li>
            <Link to="/customers" className="text-white hover:text-gray-300 transition-colors duration-200">
              Customers
            </Link>
          </li>
          <li className="relative">
            <button
              className="text-white hover:text-gray-300 transition-colors duration-200 focus:outline-none"
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            >
              Dashboard
            </button>
            <ul className={`absolute left-0 mt-2 bg-blue-600 rounded shadow-lg ${isSubmenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
              <li>
                <Link to="/dashboard" className="block px-4 py-2 text-white hover:text-gray-300 transition-colors duration-200">
                  Dashboard Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/settings" className="block px-4 py-2 text-white hover:text-gray-300 transition-colors duration-200">
                  Dashboard Settings
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
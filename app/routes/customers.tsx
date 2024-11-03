// app/routes/customers.tsx
import { json, LoaderFunction, ActionFunction } from '@remix-run/node';
import { useLoaderData, Form, useActionData } from '@remix-run/react';
import { getCustomers, createCustomer, Customer } from '~/dao/customer.dao';
import { useState } from 'react';

import Navbar from "~/components/Navbar";

// Loader function to fetch customers from the database
export const loader: LoaderFunction = async () => {
  const customers = await getCustomers();
  return json(customers);
};

// Action function to handle form submission for creating a new customer
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  // Validate form data
  if (!name || !email) {
    return json({ error: 'Name and email are required' }, { status: 400 });
  }

  // Create a new customer in the database
  const newCustomer = await createCustomer(name, email);
  return json(newCustomer);
};

// React component to display and manage customers
export default function Customers() {
  // Fetch the list of customers from the loader function
  const customers = useLoaderData<Customer[]>();
  // Fetch any errors returned by the action function
  const actionData = useActionData<{ error?: string }>();
  // State variables for form inputs and errors
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  // Function to validate the form inputs
  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    // Prevent form submission if validation fails
    if (!validateForm()) {
      event.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Customers</h1>

        {/* Form to add a new customer */}
        <Form method="post" className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {/* Display validation error for name */}
            {errors.name && <div className="text-red-500">{errors.name}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {/* Display validation error for email */}
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>
          {/* Display server-side error */}
          {actionData?.error && (
            <div className="text-red-500 mb-2">{actionData.error}</div>
          )}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Customer</button>
        </Form>

        {/* Display the list of customers as cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-bold">{customer.name}</h2>
              <p className="text-gray-700">{customer.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
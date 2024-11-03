// app/dao/customer.dao.ts
import { pool } from '~/utils/db.server';

// Define a Customer type
// This interface represents the structure of a customer object in our database.
export interface Customer {
  id: number;
  name: string;
  email: string;
}

// Function to create a new customer
// This function takes a name and email as input, inserts a new customer into the database,
// and returns the newly created customer object.
export async function createCustomer(name: string, email: string): Promise<Customer | null> {
  try {
    // Execute the SQL query to insert a new customer and return the inserted row.
    const res = await pool.query(
      'INSERT INTO customers (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    // Return the first row of the result, which is the newly created customer.
    return res.rows[0];
  } catch (error) {
    // Log any errors that occur during the query execution.
    console.error('Error creating customer:', error);
    // Return null if an error occurs.
    return null;
  }
}

// Function to get all customers
// This function retrieves all customers from the database and returns them as an array.
export async function getCustomers(): Promise<Customer[]> {
  try {
    // Execute the SQL query to select all customers.
    const res = await pool.query('SELECT * FROM customers');
    // Return the rows of the result, which are the customers.
    return res.rows;
  } catch (error) {
    // Log any errors that occur during the query execution.
    console.error('Error fetching customers:', error);
    // Return an empty array if an error occurs.
    return [];
  }
}

// Function to get a customer by ID
// This function takes a customer ID as input, retrieves the corresponding customer from the database,
// and returns the customer object.
export async function getCustomerById(id: number): Promise<Customer | null> {
  try {
    // Execute the SQL query to select a customer by ID.
    const res = await pool.query('SELECT * FROM customers WHERE id = $1', [id]);
    // Return the first row of the result, or null if no customer is found.
    return res.rows[0] || null;
  } catch (error) {
    // Log any errors that occur during the query execution.
    console.error('Error fetching customer by ID:', error);
    // Return null if an error occurs.
    return null;
  }
}

// Function to update a customer
// This function takes a customer ID, name, and email as input, updates the corresponding customer in the database,
// and returns the updated customer object.
export async function updateCustomer(id: number, name: string, email: string): Promise<Customer | null> {
  try {
    // Execute the SQL query to update a customer and return the updated row.
    const res = await pool.query(
      'UPDATE customers SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    // Return the first row of the result, which is the updated customer.
    return res.rows[0];
  } catch (error) {
    // Log any errors that occur during the query execution.
    console.error('Error updating customer:', error);
    // Return null if an error occurs.
    return null;
  }
}

// Function to delete a customer
// This function takes a customer ID as input, deletes the corresponding customer from the database,
// and returns the deleted customer object.
export async function deleteCustomer(id: number): Promise<Customer | null> {
  try {
    // Execute the SQL query to delete a customer and return the deleted row.
    const res = await pool.query('DELETE FROM customers WHERE id = $1 RETURNING *', [id]);
    // Return the first row of the result, which is the deleted customer.
    return res.rows[0];
  } catch (error) {
    // Log any errors that occur during the query execution.
    console.error('Error deleting customer:', error);
    // Return null if an error occurs.
    return null;
  }
}
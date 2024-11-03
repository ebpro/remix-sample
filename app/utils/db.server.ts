// app/utils/db.server.ts

// Import the Pool class from the 'pg' (node-postgres) library
import { Pool } from 'pg';

// Create a new pool instance to manage connections to the PostgreSQL database
// The connection string is retrieved from the environment variables
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Export the pool instance so it can be used in other parts of the application
export { pool };

/*
Explanation for Students:

1. Importing the Pool Class: The `Pool` class is imported from the 'pg' library. This class is used to manage a pool of connections to the PostgreSQL database.
2. Creating a Pool Instance: A new instance of the `Pool` class is created. The `connectionString` property is set to the value of the `DATABASE_URL` environment variable. This URL contains the necessary information to connect to the database (e.g., username, password, host, port, and database name).
3. Exporting the Pool Instance: The `pool` instance is exported so that it can be imported and used in other parts of the application to interact with the database.

This setup allows the application to efficiently manage database connections and perform queries using the `pool` instance.
*/
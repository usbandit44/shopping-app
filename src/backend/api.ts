import postgres from "postgres";

// Database connection configuration
export async function test() {
  const sql = postgres({
    host: "127.0.0.1", // Database host
    port: 9999, // Database port (default is 5432)
    database: "db412project", // Database name
    username: "my_user", // Database username
    password: "root", // Database password
  });

  const result = await sql`SELECT NOW() AS current_time`;

  console.log("Connected to PostgreSQL database", result);
}

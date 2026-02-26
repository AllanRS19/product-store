import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { ENV } from "../config/env";

const { DATABASE_URL } = ENV;

if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not set in environment variables");
}

// Initialize PostgreSQL connection pool
const pool = new Pool({ connectionString: DATABASE_URL });

pool.on("connect", () => {
    console.log("Database connected successfully");
});

pool.on("error", (error) => {
    console.error(`Database connection failed: ${error.message}`);
});

export const db = drizzle({ client: pool, schema });
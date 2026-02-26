import { defineConfig } from "drizzle-kit";
import { ENV } from "./src/config/env";

const { DATABASE_URL } = ENV;

if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
}

export default defineConfig({
    schema: './src/db/schema.ts',
    out: './migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: DATABASE_URL
    }
});
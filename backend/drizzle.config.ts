import { defineConfig } from "drizzle-kit";
import { ENV } from "./src/config/env";

const { DATABASE_URL } = ENV;

export default defineConfig({
    schema: './src/db/schema.ts',
    out: './migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: DATABASE_URL!
    }
});
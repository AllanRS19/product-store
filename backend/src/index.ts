import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { ENV } from "./config/env";

const app = express();

const { PORT, FRONTEND_URL } = ENV;

app.use(cors({ origin: FRONTEND_URL }));
app.use(clerkMiddleware()); //Auth obj will be attached to the req
app.use(express.json()); // parses JSON request bodies
app.use(express.urlencoded({ extended: true })); // parses form data (like HTML forms)

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Productify API - Powered by PostgreSQL, Drizzle ORM & Clerk Auth",
        endpoints: {
            users: "/api/users",
            products: "/api/products",
            comments: "/api/comments"
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
import express from "express";
import { setupRoutes } from "./api/route";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import limiter from "./middleware/rate-limiter";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        const app = express();

        app.use(cors());

        app.use(limiter);

        setupRoutes(app);

        app.listen(PORT, () => {
            console.log(`[Dynamic Profile Service] Running on port ${PORT}...`);
        });
    } catch {
        process.exit(1);
    };
};

startServer();

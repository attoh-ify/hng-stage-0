import { Request, Response, NextFunction } from "express";
import { logger } from "../middleware/logger";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const name = process.env.MY_NAME || "John Doe";
const email = process.env.MY_EMAIL || "john.doe@email.com";
const stack = process.env.MY_STACK || "unknown";


export const profile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
            let fact;
            try {
                const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
                fact = response.data.fact
            } catch (error) {
                fact = "Could not fetch cat fact at the moment. Please try again later.";
                logger.error("Could not fetch cat fact at the moment. Please try again later.");
            };

            res.status(200).json({
                status: "success",
                user: {
                    email,
                    name,
                    stack
                },
                timestamp: new Date().toISOString(),
                fact
            });
        } catch (error) {
            logger.error(`Internal Server Error: ${(error as Error).message}`);
            res.status(500).json({
                status: "error",
                message: "Internal Server Error"
            });
        }
};
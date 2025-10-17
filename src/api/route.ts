import { Application, Request, Response, NextFunction } from "express";
import { profile } from "./controller";

export const setupRoutes = (app: Application): void => {
    app.get("/health", (req: Request, res: Response) => {
        res.status(200).json({
            status: "ok",
            timestamp: new Date().toISOString()
        });
    });

    app.get("/me", profile);
}
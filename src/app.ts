import express, { Express } from "express";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

// Create the Express application.
const app: Express = express();

// Enable JSON request data.
app.use(express.json());

// Return the server health status.
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

// Return the portfolio performance.
app.get("/api/v1/portfolio/performance", (req, res) => {
    // Get the initial investment and current value from the query parameters.
    const initialInvestment: number = Number(req.query.intialinvestment);
    const currentValue: number = Number(req.query.currentValue);

    // Calculate the portfolio performance.
    const result: ReturnType<typeof calculatePortfolioPerformance> =
        calculatePortfolioPerformance(
            initialInvestment,
            currentValue
        );

    // Return the calculated portfolio performance.
    res.json(result);
});

// Export the Express application.
export { app };
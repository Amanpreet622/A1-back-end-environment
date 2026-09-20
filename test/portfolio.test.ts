import request, { Response } from "supertest";
import { app } from "../src/app";

describe("GET /api/v1/portfolio/performance", () => {
    it("should return excellent performance for a 60% gain", async () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 16000;

        // Act
        const response: Response = await request(app).get(
            `/api/v1/portfolio/performance?intialinvestment=${initialInvestment}&currentValue=${currentValue}`
        );

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.initialinvestment).toBe(10000);
        expect(response.body.currentValue).toBe(16000);
        expect(response.body.profitorLoss).toBe(6000);
        expect(response.body.percentageChange).toBe(60);
        expect(response.body.performancesummary).toBe(
            "Excellent performance! your investments are doing great."
        );
    });

    it("should return no change when the current value equals the initial investment", async () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 10000;

        // Act
        const response: Response = await request(app).get(
            `/api/v1/portfolio/performance?intialinvestment=${initialInvestment}&currentValue=${currentValue}`
        );

        // Assert
        expect(response.status).toBe(200);
        expect(response.body.profitorLoss).toBe(0);
        expect(response.body.percentageChange).toBe(0);
        expect(response.body.performancesummary).toBe(
            "No change. your portfolio is holding steady."
        );
    });
});
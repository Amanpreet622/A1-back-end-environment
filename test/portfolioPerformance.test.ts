// Import the portfolio performance function.
import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

// Test the portfolio performance calculation.
describe("calculatePortfolioPerformance", () => {
    // Test a 60% increase in portfolio value.
    it("should return excellent performance for a 60% gain", () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 16000;

        // Act
        const result: ReturnType<typeof calculatePortfolioPerformance> =
            calculatePortfolioPerformance(
                initialInvestment,
                currentValue
            );

        // Assert
        expect(result.initialinvestment).toBe(10000);
        expect(result.currentValue).toBe(16000);
        expect(result.profitorLoss).toBe(6000);
        expect(result.percentageChange).toBe(60);
        expect(result.performancesummary).toBe(
            "Excellent performance! your investments are doing great."
        );
    });

    // Test the 30% boundary for excellent performance.
    it("should return excellent performance for a 30% gain", () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 13000;

        // Act
        const result: ReturnType<typeof calculatePortfolioPerformance> =
            calculatePortfolioPerformance(
                initialInvestment,
                currentValue
            );

        // Assert
        expect(result.profitorLoss).toBe(3000);
        expect(result.percentageChange).toBe(30);
        expect(result.performancesummary).toBe(
            "Excellent performance! your investments are doing great."
        );
    });

    // Test a small gain above the original investment.
    it("should return modest gain for a value just above the original investment", () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 10000.1;

        // Act
        const result: ReturnType<typeof calculatePortfolioPerformance> =
            calculatePortfolioPerformance(
                initialInvestment,
                currentValue
            );

        // Assert
        expect(result.percentageChange).toBeCloseTo(0.001);
        expect(result.performancesummary).toBe(
            "Modest gain. your portfolio is growing slowly."
        );
    });

    // Test a loss greater than 10%.
    it("should return significant loss for a value below a 10% loss", () => {
        // Arrange
        const initialInvestment: number = 10000;
        const currentValue: number = 8999.9;

        // Act
        const result: ReturnType<typeof calculatePortfolioPerformance> =
            calculatePortfolioPerformance(
                initialInvestment,
                currentValue
            );

        // Assert
        expect(result.percentageChange).toBeLessThan(-10);
        expect(result.performancesummary).toBe(
            "significant loss. review your portfolio strategy."
        );
    });
});
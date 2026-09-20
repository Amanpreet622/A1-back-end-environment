// Represents the result of a portfolio performance calculation.
 
interface PortfolioPerformance {
    initialinvestment: number;
    currentValue: number;
    profitorLoss: number;
    percentageChange: number;
    performancesummary: string;
}

/**
 * Calculates the performance of an investment portfolio.
 *
 * @param initialInvestment - The original amount invested.
 * @param currentValue - The current value of the investment.
 * @returns The portfolio profit or loss, percentage change, and performance summary.
 */
const calculatePortfolioPerformance = (
    initialInvestment: number,
    currentValue: number
): PortfolioPerformance => {
    const profitorLoss: number = currentValue - initialInvestment;
    const percentageChange: number =
        (profitorLoss / initialInvestment) * 100;

    const performancesummary: string =
        percentageChange >= 30
            ? "Excellent performance! your investments are doing great."
            : percentageChange >= 10
              ? "Solid gain. keep monitoring your investments."
              : percentageChange > 0
                ? "Modest gain. your portfolio is growing slowly."
                : percentageChange === 0
                  ? "No change. your portfolio is holding steady."
                  : percentageChange >= -10
                    ? "Minor loss. stay calm and review your options."
                    : "significant loss. review your portfolio strategy.";

    return {
        initialinvestment: initialInvestment,
        currentValue: currentValue,
        profitorLoss: profitorLoss,
        percentageChange: percentageChange,
        performancesummary: performancesummary,
    };
};

export { calculatePortfolioPerformance };
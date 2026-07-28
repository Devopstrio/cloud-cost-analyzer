import { CloudCostAnalyzer, ResourceCostItem } from "../src/analyzer/cost_analyzer";

describe("CloudCostAnalyzer Suite", () => {
  it("should calculate total spend and potential savings correctly", () => {
    const analyzer = new CloudCostAnalyzer();
    const items: ResourceCostItem[] = [
      { resourceId: "i-aws-01", service: "EC2", provider: "AWS", monthlyCostUSD: 1000 },
      { resourceId: "i-aws-02", service: "RDS", provider: "AWS", monthlyCostUSD: 500 }
    ];

    const summary = analyzer.analyzeSpend(items);
    expect(summary.totalSpendUSD).toBe(1500);
    expect(summary.potentialSavingsUSD).toBe(270);
    expect(summary.topCostService).toBe("EC2");
  });

  it("should throw error when items array is empty", () => {
    const analyzer = new CloudCostAnalyzer();
    expect(() => analyzer.analyzeSpend([])).toThrow("No resource cost items provided for analysis");
  });
});

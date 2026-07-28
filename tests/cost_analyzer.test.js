const { test, describe } = require("node:test");
const assert = require("node:assert/strict");
const { CloudCostAnalyzer } = require("../dist/analyzer/cost_analyzer");

describe("CloudCostAnalyzer Suite", () => {
  test("should calculate total spend and potential savings correctly", () => {
    const analyzer = new CloudCostAnalyzer();
    const items = [
      { resourceId: "i-aws-01", service: "EC2", provider: "AWS", monthlyCostUSD: 1000 },
      { resourceId: "i-aws-02", service: "RDS", provider: "AWS", monthlyCostUSD: 500 }
    ];

    const summary = analyzer.analyzeSpend(items);
    assert.equal(summary.totalSpendUSD, 1500);
    assert.equal(summary.potentialSavingsUSD, 270);
    assert.equal(summary.topCostService, "EC2");
  });

  test("should throw error when items array is empty", () => {
    const analyzer = new CloudCostAnalyzer();
    assert.throws(
      () => analyzer.analyzeSpend([]),
      { message: "No resource cost items provided for analysis" }
    );
  });
});

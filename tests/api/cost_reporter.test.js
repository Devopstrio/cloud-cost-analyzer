const { test, describe } = require("node:test");
const assert = require("node:assert/strict");
const { CostReporter } = require("../../dist/exporter/cost_reporter");

describe("CostReporter Suite", () => {
  test("should format executive summary report correctly", () => {
    const reporter = new CostReporter();
    const summary = {
      provider: "AWS",
      totalSpendUSD: 1500,
      topCostService: "EC2",
      potentialSavingsUSD: 270
    };

    const report = reporter.generateExecutiveSummary(summary);
    assert.ok(report.includes("DEVOPSTRIO CLOUD COST ANALYSIS REPORT"));
    assert.ok(report.includes("Provider: AWS"));
  });
});

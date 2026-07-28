const { test, describe } = require("node:test");
const assert = require("node:assert/strict");
const { CostAnomalyDetector } = require("../../dist/detector/anomaly_detector");

describe("CostAnomalyDetector Suite", () => {
  test("should flag cost spike above threshold as anomaly", () => {
    const detector = new CostAnomalyDetector();
    const item = { resourceId: "vol-99", service: "EBS", provider: "AWS", monthlyCostUSD: 200 };

    const report = detector.detectSpikes(item, 100);
    assert.equal(report.isAnomaly, true);
    assert.equal(report.spikePercentage, 100);
  });

  test("should mark normal cost variations as non-anomalous", () => {
    const detector = new CostAnomalyDetector();
    const item = { resourceId: "vol-100", service: "EBS", provider: "AWS", monthlyCostUSD: 110 };

    const report = detector.detectSpikes(item, 100);
    assert.equal(report.isAnomaly, false);
  });
});

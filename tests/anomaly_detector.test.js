const { CostAnomalyDetector } = require("../dist/detector/anomaly_detector");

describe("CostAnomalyDetector Suite", () => {
  it("should flag cost spike above threshold as anomaly", () => {
    const detector = new CostAnomalyDetector();
    const item = { resourceId: "vol-99", service: "EBS", provider: "AWS", monthlyCostUSD: 200 };

    const report = detector.detectSpikes(item, 100);
    expect(report.isAnomaly).toBe(true);
    expect(report.spikePercentage).toBe(100);
  });

  it("should mark normal cost variations as non-anomalous", () => {
    const detector = new CostAnomalyDetector();
    const item = { resourceId: "vol-100", service: "EBS", provider: "AWS", monthlyCostUSD: 110 };

    const report = detector.detectSpikes(item, 100);
    expect(report.isAnomaly).toBe(false);
  });
});

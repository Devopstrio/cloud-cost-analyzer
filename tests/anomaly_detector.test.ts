import { CostAnomalyDetector } from "../src/detector/anomaly_detector";
import { ResourceCostItem } from "../src/analyzer/cost_analyzer";

describe("CostAnomalyDetector Suite", () => {
  it("should flag cost spike above threshold as anomaly", () => {
    const detector = new CostAnomalyDetector();
    const item: ResourceCostItem = { resourceId: "vol-99", service: "EBS", provider: "AWS", monthlyCostUSD: 200 };

    const report = detector.detectSpikes(item, 100);
    expect(report.isAnomaly).toBe(true);
    expect(report.spikePercentage).toBe(100);
  });

  it("should mark normal cost variations as non-anomalous", () => {
    const detector = new CostAnomalyDetector();
    const item: ResourceCostItem = { resourceId: "vol-100", service: "EBS", provider: "AWS", monthlyCostUSD: 110 };

    const report = detector.detectSpikes(item, 100);
    expect(report.isAnomaly).toBe(false);
  });
});

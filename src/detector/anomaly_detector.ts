import { ResourceCostItem } from "../analyzer/cost_analyzer";

export interface AnomalyReport {
  resourceId: string;
  expectedCostUSD: number;
  actualCostUSD: number;
  spikePercentage: number;
  isAnomaly: boolean;
}

export class CostAnomalyDetector {
  public detectSpikes(item: ResourceCostItem, historicalAverageUSD: number): AnomalyReport {
    const spikePercentage = ((item.monthlyCostUSD - historicalAverageUSD) / historicalAverageUSD) * 100;
    const isAnomaly = spikePercentage > 35.0;

    return {
      resourceId: item.resourceId,
      expectedCostUSD: historicalAverageUSD,
      actualCostUSD: item.monthlyCostUSD,
      spikePercentage: Math.round(spikePercentage * 10) / 10,
      isAnomaly
    };
  }
}

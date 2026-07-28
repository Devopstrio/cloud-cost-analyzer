export interface ResourceCostItem {
  resourceId: string;
  service: string;
  provider: 'AWS' | 'Azure' | 'GCP';
  monthlyCostUSD: number;
}

export interface CostAnalysisSummary {
  provider: string;
  totalSpendUSD: number;
  topCostService: string;
  potentialSavingsUSD: number;
}

export class CloudCostAnalyzer {
  public analyzeSpend(items: ResourceCostItem[]): CostAnalysisSummary {
    if (!items || items.length === 0) {
      throw new Error("No resource cost items provided for analysis");
    }

    const totalSpend = items.reduce((acc, item) => acc + item.monthlyCostUSD, 0);
    const topItem = [...items].sort((a, b) => b.monthlyCostUSD - a.monthlyCostUSD)[0];
    const potentialSavings = totalSpend * 0.18;

    return {
      provider: topItem.provider,
      totalSpendUSD: Math.round(totalSpend * 100) / 100,
      topCostService: topItem.service,
      potentialSavingsUSD: Math.round(potentialSavings * 100) / 100
    };
  }
}

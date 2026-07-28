import { CostAnalysisSummary } from "../analyzer/cost_analyzer";
import { AnomalyReport } from "../detector/anomaly_detector";

export class CostReporter {
  public generateExecutiveSummary(summary: CostAnalysisSummary, anomaly?: AnomalyReport): string {
    let report = `=== DEVOPSTRIO CLOUD COST ANALYSIS REPORT ===\n`;
    report += `Provider: ${summary.provider}\n`;
    report += `Total Spend: $${summary.totalSpendUSD}\n`;
    report += `Top Cost Service: ${summary.topCostService}\n`;
    report += `Potential Savings: $${summary.potentialSavingsUSD}\n`;

    if (anomaly && anomaly.isAnomaly) {
      report += `[ALERT] Cost Anomaly Detected on ${anomaly.resourceId} (+${anomaly.spikePercentage}% spike)\n`;
    }

    return report;
  }
}

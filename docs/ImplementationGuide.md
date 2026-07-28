# TypeScript SDK Implementation Guide

This guide details how to integrate and use the `cloud-cost-analyzer` TypeScript SDK.

## Analyzing Spend Items

```typescript
import { CloudCostAnalyzer, ResourceCostItem } from "cloud-cost-analyzer";

const analyzer = new CloudCostAnalyzer();
const items: ResourceCostItem[] = [
  { resourceId: "i-00192", service: "EC2", provider: "AWS", monthlyCostUSD: 1250.0 },
  { resourceId: "i-00193", service: "RDS", provider: "AWS", monthlyCostUSD: 450.0 }
];

const summary = analyzer.analyzeSpend(items);
console.log("Total Spend:", summary.totalSpendUSD);
console.log("Potential Savings:", summary.potentialSavingsUSD);
```

## Detecting Cost Anomalies

```typescript
import { CostAnomalyDetector } from "cloud-cost-analyzer";

const detector = new CostAnomalyDetector();
const report = detector.detectSpikes(items[0], 800.0); // Baseline: $800

if (report.isAnomaly) {
  console.warn(`Spike detected on ${report.resourceId}: +${report.spikePercentage}%`);
}
```

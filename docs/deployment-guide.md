# Developer & Integration Guide: Cloud Cost Analyzer

This guide outlines Node.js installation, TypeScript compilation, SDK integration, and testing.

## 1. Installation

```bash
git clone https://github.com/Devopstrio/cloud-cost-analyzer.git
cd cloud-cost-analyzer

# Install dependencies
npm install

# Build TypeScript SDK
npm run build
```

## 2. TypeScript SDK Usage Example

```typescript
import { CloudCostAnalyzer, CostAnomalyDetector, CostReporter } from "cloud-cost-analyzer";

const analyzer = new CloudCostAnalyzer();
const summary = analyzer.analyzeSpend([
  { resourceId: "i-01", service: "EC2", provider: "AWS", monthlyCostUSD: 1200 }
]);

console.log("Total Spend:", summary.totalSpendUSD);
```

## 3. Running Jest Unit Test Suite

```bash
npm test
```

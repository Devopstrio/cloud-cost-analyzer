# Cloud Cost Analyzer Architecture

The **Cloud Cost Analyzer** is an enterprise billing analytics, waste identification, and cost anomaly detection SDK written in **TypeScript 5.3+ / Node.js v20+**.

![Cloud Cost Analyzer Architecture](images/architecture_diagram.jpg)

## Component Sequence Diagram

```mermaid
flowchart TD
    Ingress[Cloud Billing Ingestion Engine] -->|1. Transmit Resource Spend Items| Analyzer[Cloud Cost Analyzer Engine]
    Analyzer -->|2. Evaluate Historical Baseline| Detector[Cost Anomaly Detector]
    Detector --> IsAnomalyDetected{Is Cost Anomaly Detected?}
    IsAnomalyDetected -- Spike Detected --> Alert[Trigger Anomaly Warning Alert]
    IsAnomalyDetected -- Normal Spend --> Reporter[Executive Cost Reporter Engine]
    Reporter -->|3. Export Executive Summary| Output["Executive Reports (JSON / Markdown)"]
```

## Core SDK Engine Modules

1. **Cloud Cost Analyzer (`src/analyzer/cost_analyzer.ts`)**
   - Calculates total cloud spend, identifies top cost services, and computes potential savings.

2. **Cost Anomaly Detector (`src/detector/anomaly_detector.ts`)**
   - Compares real-time resource billing items against historical spend baselines.

3. **Cost Reporter (`src/exporter/cost_reporter.ts`)**
   - Formats billing insights and anomaly warnings into executive summary reports.

4. **SDK Entrypoint (`src/index.ts`)**
   - Primary TypeScript export module.

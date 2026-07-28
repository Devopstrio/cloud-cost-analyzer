# Frequently Asked Questions (FAQ)

### Q1: Which cloud providers are supported?
AWS, Azure, and GCP resource billing items are natively supported through standard JSON models.

### Q2: How does anomaly detection work?
The detector computes percentage spend deviations against historical averages. Any spike exceeding 35% is flagged as an anomaly.

### Q3: How do I run tests?
Run `npm test` to compile TypeScript with `tsc` and execute native Node.js 20 test suites.

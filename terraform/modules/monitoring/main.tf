resource "aws_cloudwatch_metric_alarm" "cost_spike_alarm" {
  alarm_name          = "cloud-cost-anomaly-high"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = 1
  metric_name         = "CostAnomalySpike"
  namespace           = "Devopstrio/FinOps"
  period              = 300
  statistic           = "Maximum"
  threshold           = 35
  alarm_description   = "Alarm when cost anomaly spike percentage exceeds 35%"
}

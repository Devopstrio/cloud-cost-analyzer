output "alarm_arn" {
  value       = aws_cloudwatch_metric_alarm.cost_spike_alarm.arn
  description = "CloudWatch Alarm ARN"
}

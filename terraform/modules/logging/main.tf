resource "aws_cloudwatch_log_group" "analyzer_log_group" {
  name              = "/aws/finops/cloud-cost-analyzer"
  retention_in_days = 30
}

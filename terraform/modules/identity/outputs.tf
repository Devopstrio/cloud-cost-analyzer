output "role_arn" {
  value       = aws_iam_role.analyzer_role.arn
  description = "IAM Role ARN"
}

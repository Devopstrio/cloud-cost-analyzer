output "vpc_id" {
  value       = aws_vpc.analyzer_vpc.id
  description = "Provisioned VPC ID"
}

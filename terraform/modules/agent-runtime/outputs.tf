output "cluster_id" {
  value       = aws_ecs_cluster.analyzer_cluster.id
  description = "ECS Cluster ID"
}

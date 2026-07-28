terraform {
  required_version = ">= 1.6.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.50.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "network" {
  source      = "./modules/network"
  vpc_cidr    = var.vpc_cidr
  environment = var.environment
}

module "identity" {
  source    = "./modules/identity"
  role_name = "cloud-cost-analyzer-role-${var.environment}"
}

module "logging" {
  source         = "./modules/logging"
  log_group_name = "/aws/finops/analyzer-${var.environment}"
}

module "monitoring" {
  source     = "./modules/monitoring"
  alarm_name = "cost-anomaly-${var.environment}"
}

module "agent_runtime" {
  source       = "./modules/agent-runtime"
  cluster_name = "analyzer-cluster-${var.environment}"
}

---
title: "Don't Lose Your Mind: A Guide to Terraform State Management"
description: "Best practices for handling tfstate in a team environment without causing a total infrastructure meltdown."
date: 2026-04-06
readTime: "4 min read"
category: "Infrastructure"
tags: ["Terraform", "AWS", "DevOps"]
---

If you are the only person working on an infrastructure project, keeping your `terraform.tfstate` file on your local laptop is fine. The moment you add a second engineer to the project, that local file becomes a ticking time bomb.

I have seen entire staging environments wiped out because two engineers ran `terraform apply` at the same time with out-of-sync state files. 

Here is how you fix it using AWS S3 and DynamoDB.

### 1. Remote State Storage
First, move your state file off your laptop and into an S3 bucket. S3 provides high durability, meaning your state file is highly unlikely to be corrupted or lost.

### 2. State Locking
S3 is great for storage, but it does not prevent concurrent runs. That is where DynamoDB comes in. By attaching a DynamoDB table to your backend configuration, Terraform will "lock" the state file the moment an apply starts. If someone else tries to run an apply, Terraform will throw an error and tell them to wait.

Here is the exact backend configuration to enable this:

```hcl
terraform {
  backend "s3" {
    bucket         = "my-company-terraform-state"
    key            = "core-infrastructure/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-state-locks"
    encrypt        = true
  }
}
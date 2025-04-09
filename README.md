# Paper.Social Multi-Cloud Deployment

## Project Overview
This repository contains infrastructure as code and deployment automation for Paper.Social's multi-cloud platform across AWS and IBM Cloud.

## Architecture Components
1. **Infrastructure as Code**: Terraform modules for AWS and IBM Cloud
2. **Configuration Management**: Ansible playbooks for server setup
3. **CI/CD Pipeline**: GitHub Actions workflow
4. **Monitoring**: Prometheus + Grafana + Loki stack
5. **Sample Application**: Node.js web server containerized with Docker

## Complete Setup Guide

### Prerequisites
- Terraform 1.0+
- Ansible 2.10+
- Node.js 16+
- Docker
- GitHub account

### Deployment Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/paper-social-deployment.git
   cd paper-social-deployment
   ```

2. **Configure Cloud Credentials**
   - AWS: Set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` in GitHub Secrets
   - IBM Cloud: Set `IBM_API_KEY` in GitHub Secrets

3. **Initialize Terraform**
   ```bash
   cd terraform/aws && terraform init
   cd ../ibm && terraform init
   ```

4. **Deploy Infrastructure**
   ```bash
   # For AWS
   cd terraform/aws
   terraform apply -auto-approve

   # For IBM Cloud
   cd terraform/ibm
   terraform apply -auto-approve
   ```

5. **Configure Servers with Ansible**
   ```bash
   ansible-playbook -i inventory.ini ansible/setup.yml
   ```

6. **Access Monitoring Dashboard**
   - Grafana: http://localhost:3000 (admin/password)
   - Prometheus: http://localhost:9090
   - Loki: http://localhost:3100

## CI/CD Pipeline
The GitHub Actions workflow will automatically:
- Run Terraform plan on push to main
- Deploy infrastructure changes
- Configure servers using Ansible
- Deploy the containerized application

## Security Considerations
- IAM roles with least privilege
- Encrypted volumes
- Security groups restricting access
- HTTPS enforced
- Regular security updates via Ansible

## Cost Optimization
- AWS: t3.micro instances (free tier eligible)
- IBM Cloud: bx2-2x8 instances (low-cost)
- Spot instances available in both clouds

## Support
For issues, please open a GitHub ticket or contact devops@paper.social

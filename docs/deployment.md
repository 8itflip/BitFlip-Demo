# Deployment

## Kubernetes Deployment

BitFlip Demo is deployed to the `argocd` namespace on the `ocplab` OpenShift cluster using ArgoCD for GitOps-based continuous deployment.

## Prerequisites

- Access to the `ocplab` OpenShift cluster
- ArgoCD application configured
- GitHub repository access

## Deployment Flow

1. Developer pushes code to `8itflip/BitFlip-Demo` on GitHub
2. ArgoCD detects changes in the repository
3. ArgoCD syncs the desired state to the Kubernetes cluster
4. Application pods are updated in the `argocd` namespace

## Monitoring

- **Backstage Kubernetes tab**: View pod status, deployments, and services
- **SonarQube**: Code quality metrics available in the Backstage component view

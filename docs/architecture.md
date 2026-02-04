# Architecture

## Application Structure

BitFlip Demo follows a simple Express.js application structure:

```
BitFlip-Demo/
├── app.js            # Main application entry point
├── package.json      # Dependencies and scripts
├── docs/             # TechDocs documentation
│   ├── index.md
│   ├── architecture.md
│   └── deployment.md
└── mkdocs.yml        # TechDocs configuration
```

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Deployment | Kubernetes (OpenShift) |
| GitOps | ArgoCD |
| IDP | Backstage (ClickOps) |

## Integration Points

- **GitHub**: Source code repository at `8itflip/BitFlip-Demo`
- **ArgoCD**: Manages Kubernetes deployments
- **Backstage**: Registered as a component in the software catalog
- **SonarQube**: Code quality analysis

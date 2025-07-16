# Infrastructure Configuration

## Directory Structure

```
infra/
├── local/                      # Local development environment
│   ├── docker-compose.yml     # Docker Compose configuration
│   ├── nginx/
│   │   └── nginx.conf         # Nginx configuration for local
│   ├── backend/
│   │   ├── Dockerfile         # Backend Docker image
│   │   └── .dockerignore      # Backend ignore patterns
│   └── frontend/
│       ├── Dockerfile         # Frontend Docker image
│       └── .dockerignore      # Frontend ignore patterns
└── production/                 # Production environment
    ├── Dockerfile             # Production Docker image (multi-stage)
    ├── nginx/
    │   └── nginx.conf         # Nginx configuration for production
    ├── php/
    │   ├── php-fpm.conf       # PHP-FPM configuration
    │   └── start.sh           # Service startup script
    └── gcp/
        ├── app.yaml           # Cloud Run configuration
        └── cloudbuild.yaml    # Cloud Build CI/CD configuration
```

## Environment Variables

Environment variables are managed in the `backend/` directory:

- **`.env`**: Local development environment variables
- **`.env.local`**: Local development specific overrides
- **`.env.prod`**: Production environment variables template
- **`.env.example`**: Example environment variables

## Usage

### Local Development

```bash
# Start local development environment
cd infra/local
docker-compose up -d

# Stop local development environment
docker-compose down
```

### Production Deployment

```bash
# Build and deploy to Cloud Run
gcloud builds submit --config=infra/production/gcp/cloudbuild.yaml .

# Or build manually
docker build -f infra/production/Dockerfile -t your-image .
```

## Configuration Files

### Local Development
- **docker-compose.yml**: Multi-service setup with hot-reload
- **nginx/nginx.conf**: Reverse proxy configuration
- **backend/Dockerfile**: Development-focused Laravel container
- **frontend/Dockerfile**: Development-focused React container

### Production
- **Dockerfile**: Multi-stage build for optimized production image
- **nginx/nginx.conf**: Production-optimized Nginx configuration
- **php/php-fpm.conf**: PHP-FPM performance configuration
- **php/start.sh**: Service orchestration script
- **gcp/app.yaml**: Cloud Run service configuration
- **gcp/cloudbuild.yaml**: CI/CD pipeline configuration

## Key Features

### Local Development
- Hot-reload for both React and Laravel
- Separate containers for easy debugging
- MySQL database included
- Port mapping for direct access

### Production
- Single optimized container
- Static file serving with caching
- Security headers and optimizations
- Health check endpoint
- Auto-scaling configuration
- Cloud SQL integration ready
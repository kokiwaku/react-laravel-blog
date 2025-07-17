# Multi-stage build for production deployment
# Stage 1: Build React frontend
FROM node:20-alpine AS frontend-build

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build

# Stage 2: Setup Laravel backend
FROM php:8.2-fpm-alpine AS backend

# Install system dependencies
RUN apk add --no-cache \
    git \
    curl \
    libpng-dev \
    oniguruma-dev \
    libxml2-dev \
    zip \
    unzip \
    icu-dev

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd intl

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app/backend

# Copy backend application first
COPY backend/ .

# Install PHP dependencies (production only)
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Set proper permissions
RUN chown -R www-data:www-data /app/backend \
    && chmod -R 755 /app/backend/storage \
    && chmod -R 755 /app/backend/bootstrap/cache

# Stage 3: Final production image with Nginx
FROM nginx:alpine

# Install PHP-FPM
RUN apk add --no-cache php82-fpm php82-pdo_mysql php82-mbstring php82-exif php82-pcntl php82-bcmath php82-gd php82-intl

# Copy built frontend from first stage
COPY --from=frontend-build /app/frontend/dist /var/www/html

# Copy backend from second stage
COPY --from=backend /app/backend /var/www/html/api

# Copy nginx configuration
COPY infra/production/nginx/nginx.conf /etc/nginx/nginx.conf

# Create PHP-FPM configuration
RUN mkdir -p /etc/php82/php-fpm.d
COPY infra/production/php/php-fpm.conf /etc/php82/php-fpm.d/www.conf

# Create startup script
COPY infra/production/php/start.sh /start.sh
RUN chmod +x /start.sh

# Expose port 8080 for Cloud Run
EXPOSE 8080

# Start both nginx and php-fpm
CMD ["/start.sh"]
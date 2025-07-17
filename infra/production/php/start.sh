#!/bin/sh

# Start PHP-FPM in background
php-fpm82 -D -F

# Start Nginx in foreground
nginx -g "daemon off;"
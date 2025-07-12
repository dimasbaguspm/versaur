#!/usr/bin/env bash

# Generate nginx configuration from template using environment variables
# This script processes the nginx.prod.conf.template file and replaces
# environment variable placeholders with actual values

echo "🔧 Generating nginx configuration from template..."

# Load environment variables from .env.prod if it exists
if [ -f .env.prod ]; then
  export $(grep -v '^#' .env.prod | grep -v '^$' | xargs)
fi

# Set default values if environment variables are not set
export DOMAIN_BASE="${DOMAIN_BASE:-localhost}"
export DOMAIN_APP_SUBDOMAIN="${DOMAIN_APP_SUBDOMAIN:-storybook}"
export DOMAIN_API_SUBDOMAIN="${DOMAIN_API_SUBDOMAIN:-storybook-api}"

# Create nginx directory if it doesn't exist
mkdir -p nginx

# Check if template exists
if [ ! -f "nginx/nginx.prod.conf.template" ]; then
  echo "⚠️  Template file nginx/nginx.prod.conf.template not found!"
  echo "📄 Creating default template..."
  
  # Create default template
  cat > nginx/nginx.prod.conf.template << 'EOF'
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logging
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json
        application/woff
        application/woff2
        font/woff
        font/woff2;

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    add_header Content-Security-Policy "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob:; img-src 'self' data: https:; font-src 'self' data: https:;";

    # HTTP server
    server {
        listen 8080;
        server_name ${DOMAIN_APP_SUBDOMAIN}.${DOMAIN_BASE};
        
        root /usr/share/nginx/html;
        index index.html;

        # Health check endpoint
        location /health {
            access_log off;
            return 200 "healthy\n";
            add_header Content-Type text/plain;
        }

        # Enable caching for static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
            add_header Vary "Accept-Encoding";
        }

        # Handle SPA routing for Storybook
        location / {
            try_files $uri $uri/ /index.html;
            add_header Cache-Control "no-cache, no-store, must-revalidate";
            add_header Pragma "no-cache";
            add_header Expires "0";
        }

        # Security: Deny access to hidden files and directories
        location ~ /\. {
            deny all;
        }

        # Deny access to backup files
        location ~* \.(bak|backup|old|tmp|temp)$ {
            deny all;
        }
    }

    # HTTPS server (for production with SSL)
    # server {
    #     listen 443 ssl http2;
    #     server_name ${DOMAIN_APP_SUBDOMAIN}.${DOMAIN_BASE};
    #     
    #     ssl_certificate /etc/nginx/ssl/fullchain.pem;
    #     ssl_certificate_key /etc/nginx/ssl/privkey.pem;
    #     
    #     # Modern SSL configuration
    #     ssl_protocols TLSv1.2 TLSv1.3;
    #     ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384;
    #     ssl_prefer_server_ciphers off;
    #     ssl_session_timeout 1d;
    #     ssl_session_cache shared:SSL:50m;
    #     ssl_stapling on;
    #     ssl_stapling_verify on;
    #     
    #     # HSTS
    #     add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
    #     
    #     root /usr/share/nginx/html;
    #     index index.html;
    #     
    #     # Same location blocks as HTTP server
    #     location /health {
    #         access_log off;
    #         return 200 "healthy\n";
    #         add_header Content-Type text/plain;
    #     }
    #     
    #     location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    #         expires 1y;
    #         add_header Cache-Control "public, immutable";
    #         add_header Vary "Accept-Encoding";
    #     }
    #     
    #     location / {
    #         try_files $uri $uri/ /index.html;
    #         add_header Cache-Control "no-cache, no-store, must-revalidate";
    #         add_header Pragma "no-cache";
    #         add_header Expires "0";
    #     }
    #     
    #     location ~ /\. {
    #         deny all;
    #     }
    #     
    #     location ~* \.(bak|backup|old|tmp|temp)$ {
    #         deny all;
    #     }
    # }
}
EOF
fi

echo "📋 Using domain configuration:"
echo "   - Base domain: $DOMAIN_BASE"
echo "   - App subdomain: $DOMAIN_APP_SUBDOMAIN.$DOMAIN_BASE"

# Process template and generate nginx configuration
if ! sed -e "s/\${DOMAIN_BASE}/$DOMAIN_BASE/g" \
    -e "s/\${DOMAIN_APP_SUBDOMAIN}/$DOMAIN_APP_SUBDOMAIN/g" \
    -e "s/\${DOMAIN_API_SUBDOMAIN}/$DOMAIN_API_SUBDOMAIN/g" \
    nginx/nginx.prod.conf.template > nginx/nginx.prod.conf; then
  echo "❌ Failed to process template!"
  exit 1
fi

# Verify the generated file is valid
if [ ! -s "nginx/nginx.prod.conf" ]; then
  echo "❌ Generated nginx configuration is empty!"
  exit 1
fi

echo "✅ Nginx configuration generated successfully!"
echo "📁 Configuration saved to: nginx/nginx.prod.conf"
echo "📊 File size: $(du -h nginx/nginx.prod.conf | cut -f1)"
echo ""
echo "🎯 Next steps:"
echo "1. Review the generated configuration"
echo "2. For SSL/HTTPS: Run './scripts/generate-ssl.sh'"
echo "3. Start services: './scripts/prod.sh up'"

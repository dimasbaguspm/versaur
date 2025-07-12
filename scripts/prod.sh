#!/usr/bin/env bash
set -e

# Use docker-compose.prod.yaml for production/staging
COMPOSE_FILE="docker-compose.prod.yaml"
ENV_FILE=".env.prod"

# Function to print environment info
print_env_info() {
  echo "🚀 Versaur Production Environment"
  echo "📄 Compose file: $COMPOSE_FILE"
  echo "🔧 Environment file: $ENV_FILE"
  echo "🐳 Docker Compose command: docker compose -f $COMPOSE_FILE --env-file $ENV_FILE"
  echo ""
}

# Print environment info immediately for all commands except help
if [ "$1" != "" ] && [ "$1" != "--help" ] && [ "$1" != "-h" ]; then
  print_env_info
  
  # Validate required files exist
  if [ ! -f "$COMPOSE_FILE" ]; then
    echo "❌ Error: Compose file '$COMPOSE_FILE' not found!"
    exit 1
  fi
  
  if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Error: Environment file '$ENV_FILE' not found!"
    echo "💡 Create one from .env.example or copy from .env.dev"
    exit 1
  fi
fi

case "$1" in
  up)
    # Generate nginx configuration
    echo "🔧 Generating nginx configuration..."
    if ! ./scripts/generate-nginx-config.sh; then
      echo "❌ Failed to generate nginx configuration!"
      exit 1
    fi
    
    # Verify nginx configuration file exists and is readable
    if [ ! -f "nginx/nginx.prod.conf" ]; then
      echo "❌ Error: nginx/nginx.prod.conf was not generated!"
      exit 1
    fi
    
    echo "✅ Nginx configuration verified"
    
    # Build and start services
    echo "🚀 Building and starting services..."
    docker compose -f $COMPOSE_FILE --env-file $ENV_FILE up -d --build
    
    echo ""
    echo "🎉 Production environment started successfully!"
    echo "🌐 Storybook: http://localhost:80"
    echo "📊 To check logs: ./scripts/prod.sh logs"
    echo "🔍 To check health: ./scripts/prod.sh check"
    ;;
  down)
    docker compose -f $COMPOSE_FILE --env-file $ENV_FILE down
    ;;
  rebuild)
    SERVICE=${2:-""}
    if [ -n "$SERVICE" ]; then
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE build --no-cache $SERVICE
    else
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE build --no-cache
    fi
    ;;
  logs)
    SERVICE=${2:-""}
    if [ -n "$SERVICE" ]; then
      echo "📋 Showing logs for service: $SERVICE"
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE logs -f $SERVICE
    else
      echo "📋 Showing logs for all services"
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE logs -f
    fi
    ;;
  restart)
    SERVICE=${2:-""}
    if [ -n "$SERVICE" ]; then
      echo "Restarting service: $SERVICE"
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE restart $SERVICE
    else
      echo "Restarting all services"
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE restart
    fi
    ;;
  clean-cache)
    SERVICE=${2:-""}
    if [ -n "$SERVICE" ]; then
      echo "Cleaning cache for service: $SERVICE"
      
      # Check if service is running and stop it only if needed
      if docker compose -f $COMPOSE_FILE --env-file $ENV_FILE ps --services --filter "status=running" | grep -q "^$SERVICE$"; then
        echo "  🛑 Stopping running service: $SERVICE"
        docker compose -f $COMPOSE_FILE --env-file $ENV_FILE stop $SERVICE
      else
        echo "  ℹ️  Service $SERVICE is not running"
      fi
      
      # Remove the container completely
      echo "  🗑️  Removing container for: $SERVICE"
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE rm -f -v $SERVICE
      
      # Get and remove the image
      IMAGE_NAME=$(docker compose -f $COMPOSE_FILE --env-file $ENV_FILE config | grep -A5 "$SERVICE:" | grep "image:" | awk '{print $2}')
      if [ -n "$IMAGE_NAME" ]; then
        echo "  🗑️  Removing image: $IMAGE_NAME"
        docker rmi -f $IMAGE_NAME 2>/dev/null || echo "  ⚠️  Image $IMAGE_NAME not found or already removed"
      fi
      
      # Remove orphaned containers
      echo "  🧹 Removing orphaned containers..."
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE down --remove-orphans
      
      # Rebuild the service (without starting)
      echo "  🔨 Rebuilding service: $SERVICE"
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE build --no-cache $SERVICE
      echo "  ✅ Cache cleaned and service rebuilt for: $SERVICE"
      echo "  💡 Run './scripts/prod.sh up' to start all services"
    else
      echo "⚠️  WARNING: This will completely remove ALL containers, images, and volumes!"
      echo ""
      read -p "Are you sure you want to continue? (y/N): " -n 1 -r
      echo
      if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Clean cache cancelled"
        exit 1
      fi
      
      echo "Cleaning cache for all services"
      
      # Stop all services and remove volumes
      echo "  🛑 Stopping all services and removing volumes..."
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE down --volumes --remove-orphans
      
      # Remove all containers forcefully
      echo "  🗑️  Removing all containers..."
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE rm -f -v
      
      # Get all images from the compose file and remove them
      echo "  🗑️  Removing all compose images..."
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE config --images | while read -r image; do
        if [ -n "$image" ]; then
          echo "    🗑️  Removing image: $image"
          docker rmi -f "$image" 2>/dev/null || echo "    ⚠️  Image $image not found or already removed"
        fi
      done
      
      # Remove project-specific volumes
      echo "  🗄️  Removing project volumes..."
      PROJECT_NAME=$(basename "$(pwd)")
      docker volume ls -q --filter "name=${PROJECT_NAME}_" | while read -r volume; do
        if [ -n "$volume" ]; then
          echo "    🗑️  Removing volume: $volume"
          docker volume rm -f "$volume" 2>/dev/null || echo "    ⚠️  Volume $volume not found or already removed"
        fi
      done
      
      # Remove dangling images and build cache
      echo "  🧹 Removing dangling images and build cache..."
      docker image prune -f
      docker builder prune -f
      docker volume prune -f
      
      # Rebuild all services (without starting)
      echo "  🔨 Rebuilding all services..."
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE build --no-cache
      echo "  ✅ Cache cleaned and all services rebuilt"
      echo "  💡 Run './scripts/prod.sh up' to start all services"
    fi
    ;;
  check)
    echo "🔍 Pre-deployment checks (Production):"
    echo ""
    
    # Check if required files exist
    echo "📁 Checking required files..."
    for file in "$COMPOSE_FILE" "$ENV_FILE" "nginx/nginx.prod.conf.template"; do
      if [ -f "$file" ]; then
        echo "  ✅ $file ($(du -h "$file" | cut -f1))"
      else
        echo "  ❌ $file (missing)"
      fi
    done
    echo ""
    
    # Check nginx configuration
    echo "🔧 Checking nginx configuration..."
    if [ -f "nginx/nginx.prod.conf" ]; then
      echo "  ✅ nginx/nginx.prod.conf exists ($(du -h nginx/nginx.prod.conf | cut -f1))"
      echo "  📋 Last modified: $(stat -c %y nginx/nginx.prod.conf)"
    else
      echo "  ⚠️  nginx/nginx.prod.conf does not exist"
      echo "  💡 Run './scripts/prod.sh generate-config' to create it"
    fi
    echo ""
    
    # Check SSL certificates
    echo "🔐 Checking SSL certificates..."
    if [ -d "nginx/ssl" ]; then
      if [ -f "nginx/ssl/fullchain.pem" ] && [ -f "nginx/ssl/privkey.pem" ]; then
        echo "  ✅ SSL certificates found"
      else
        echo "  ⚠️  SSL certificates missing"
        echo "  💡 Run './scripts/generate-ssl.sh' to create them"
      fi
    else
      echo "  ❌ SSL directory missing"
    fi
    echo ""
    
    # Check environment variables
    echo "🌍 Checking environment variables..."
    if [ -f "$ENV_FILE" ]; then
      echo "  ✅ Environment file found"
      echo "  📋 Key variables:"
      grep -E "^(NODE_ENV|STORYBOOK_|DOMAIN_)" "$ENV_FILE" | head -5 | while read line; do
        echo "    $line"
      done
    else
      echo "  ❌ Environment file missing"
    fi
    
    # Check if services are running
    echo ""
    echo "🐳 Checking services..."
    if docker compose -f $COMPOSE_FILE --env-file $ENV_FILE ps --services --filter "status=running" | grep -q .; then
      echo "  ✅ Services are running:"
      docker compose -f $COMPOSE_FILE --env-file $ENV_FILE ps --services --filter "status=running" | while read service; do
        echo "    📦 $service"
      done
    else
      echo "  ⚠️  No services are running"
      echo "  💡 Run './scripts/prod.sh up' to start services"
    fi
    ;;
  generate-config)
    echo "🔧 Generating nginx configuration..."
    if ! ./scripts/generate-nginx-config.sh; then
      echo "❌ Failed to generate nginx configuration!"
      exit 1
    fi
    echo "✅ Configuration generated successfully"
    ;;
  monitor-memory)
    echo "📊 docker container memory usage (snapshot):"
    docker stats --no-stream
    echo ""
    echo "🖥️  system memory usage (free -h):"
    free -h
    echo ""
    echo "🖥️  system cpu usage (top 5 processes):"
    ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%cpu | head -n 6
    echo ""
    echo "💾 system disk usage (df -h):"
    df -h
    ;;
  *)
    echo "Usage: $0 {up|down|rebuild [service]|logs [service]|restart [service]|clean-cache [service]|check|generate-config|monitor-memory}"
    echo ""
    echo "Commands:"
    echo "  up                     - Start all services with nginx proxy"
    echo "  down                   - Stop all services"
    echo "  rebuild [service]      - Rebuild and restart service(s)"
    echo "  logs [service]         - Show service logs (all services if no service specified)"
    echo "  restart [service]      - Restart service(s)"
    echo "  clean-cache [service]  - Clean Docker cache, remove containers/images/volumes and rebuild"
    echo "  check                  - Run pre-deployment checks"
    echo "  generate-config        - Generate nginx configuration"
    echo "  monitor-memory         - Show memory usage for all project containers and system"
    echo ""
    echo "Examples:"
    echo "  $0 up                  # Start production Storybook with nginx"
    echo "  $0 check               # Verify configuration and services"
    echo "  $0 logs nginx          # Show nginx logs"
    echo "  $0 rebuild storybook   # Rebuild Storybook service"
    echo "  $0 generate-config     # Generate nginx config from template"
    echo ""
    print_env_info
    exit 1
    ;;
esac

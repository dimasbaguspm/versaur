#!/usr/bin/env bash
set -e

# Use docker-compose.dev.yaml for local development
COMPOSE_FILE="docker-compose.dev.yaml"
ENV_FILE=".env.dev"

# Function to print environment info
print_env_info() {
  echo "🚀 Versaur Development Environment"
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
    echo "💡 Create one from .env.example or just create an empty file"
    exit 1
  fi
fi

case "$1" in
  up)
    docker compose -f $COMPOSE_FILE --env-file $ENV_FILE up -d
    
    echo ""
    echo "🎉 Development environment started successfully!"
    echo "🌐 Storybook: http://localhost:6006"
    echo "📊 To check logs: ./scripts/dev.sh logs"
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
      echo "  💡 Run './scripts/dev.sh up' to start all services"
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
      echo "  💡 Run './scripts/dev.sh up' to start all services"
    fi
    ;;
  exec)
    SERVICE=${2:-""}
    COMMAND=${3:-""}
    
    # Get list of running services
    RUNNING_SERVICES=$(docker compose -f $COMPOSE_FILE --env-file $ENV_FILE ps --services --filter "status=running")
    
    if [ -z "$RUNNING_SERVICES" ]; then
      echo "❌ No services are currently running"
      echo "💡 Run './scripts/dev.sh up' to start services first"
      exit 1
    fi
    
    # If no service specified, show available services and prompt
    if [ -z "$SERVICE" ]; then
      echo "🔧 Available running services:"
      echo "$RUNNING_SERVICES" | while read service; do
        echo "  📦 $service"
      done
      echo ""
      echo "Usage: $0 exec <service> [command]"
      echo "Examples:"
      echo "  $0 exec storybook               # Open interactive shell in storybook container"
      echo "  $0 exec storybook sh -c 'ls -la'  # Execute specific shell command"
      exit 1
    fi
    
    # Validate service exists and is running
    if ! echo "$RUNNING_SERVICES" | grep -q "^$SERVICE$"; then
      echo "❌ Service '$SERVICE' is not running or does not exist"
      echo "🔧 Available running services:"
      echo "$RUNNING_SERVICES" | while read service; do
        echo "  📦 $service"
      done
      exit 1
    fi
    
    # If no command specified, provide interactive shell
    if [ -z "$COMMAND" ]; then
      case "$SERVICE" in
        storybook)
          echo "📚 Opening interactive shell in Storybook container..."
          # Try to detect available shell in the container
          if docker compose -f $COMPOSE_FILE --env-file $ENV_FILE exec -T $SERVICE which bash >/dev/null 2>&1; then
            COMMAND="bash"
          elif docker compose -f $COMPOSE_FILE --env-file $ENV_FILE exec -T $SERVICE which sh >/dev/null 2>&1; then
            COMMAND="sh"
          else
            echo "❌ No shell found in container"
            exit 1
          fi
          ;;
        *)
          echo "🐚 Opening shell in $SERVICE container..."
          # Try to detect available shell in the container
          if docker compose -f $COMPOSE_FILE --env-file $ENV_FILE exec -T $SERVICE which bash >/dev/null 2>&1; then
            COMMAND="bash"
          elif docker compose -f $COMPOSE_FILE --env-file $ENV_FILE exec -T $SERVICE which sh >/dev/null 2>&1; then
            COMMAND="sh"
          else
            echo "❌ No shell found in container"
            exit 1
          fi
          ;;
      esac
      echo "  📡 Using shell: $COMMAND"
    else
      echo "🔧 Executing command in $SERVICE container: $COMMAND"
    fi
    
    # Execute the command with proper flags and error handling
    if [ "$COMMAND" = "bash" ] || [ "$COMMAND" = "sh" ]; then
      # Interactive commands need -it flags
      if ! docker compose -f $COMPOSE_FILE --env-file $ENV_FILE exec $SERVICE $COMMAND; then
        echo "❌ Command execution failed"
        echo "💡 Try running with a different shell or check if the service is properly configured"
        exit 1
      fi
    else
      # Non-interactive commands can use -T flag to avoid TTY issues
      if ! docker compose -f $COMPOSE_FILE --env-file $ENV_FILE exec -T $SERVICE $COMMAND; then
        echo "❌ Command execution failed"
        echo "💡 Check command syntax and service configuration"
        exit 1
      fi
    fi
    ;;
  check)
    echo "🔍 Pre-deployment checks (Development):"
    echo ""
    
    # Check if required files exist
    echo "📁 Checking required files..."
    for file in "$COMPOSE_FILE" "$ENV_FILE"; do
      if [ -f "$file" ]; then
        echo "  ✅ $file ($(du -h "$file" | cut -f1))"
      else
        echo "  ❌ $file (missing)"
      fi
    done
    echo ""
    
    # Check environment variables
    echo "🌍 Checking environment variables..."
    if [ -f "$ENV_FILE" ]; then
      echo "  ✅ Environment file found"
      echo "  📋 Key variables:"
      grep -E "^(NODE_ENV|STORYBOOK_)" "$ENV_FILE" | head -5 | while read line; do
        echo "    $line"
      done
    else
      echo "  ❌ Environment file missing"
    fi
    
    # Check Docker
    echo ""
    echo "🐳 Checking Docker..."
    if command -v docker >/dev/null 2>&1; then
      echo "  ✅ Docker is installed"
      if docker info >/dev/null 2>&1; then
        echo "  ✅ Docker daemon is running"
      else
        echo "  ❌ Docker daemon is not running"
      fi
    else
      echo "  ❌ Docker is not installed"
    fi
    ;;
  monitor-memory)
    echo "📊 docker container resource usage (CPU, memory, network, disk I/O):"
    # docker stats shows cpu, memory, network, and block io for all containers
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
    echo "Usage: $0 {up|down|rebuild [service]|logs [service]|restart [service]|exec <service> [command]|clean-cache [service]|check|generate-config|monitor-memory}"
    echo ""
    echo "Commands:"
    echo "  up                      - Start all services"
    echo "  down                    - Stop all services"
    echo "  rebuild [service]       - Rebuild and restart service(s)"
    echo "  logs [service]         - Show service logs (all services if no service specified)"
    echo "  restart [service]      - Restart service(s)"
    echo "  exec <service> [cmd]   - Execute command in running container (interactive shell if no command)"
    echo "  clean-cache [service]  - Clean Docker cache, remove containers/images/volumes and rebuild"
    echo "  check                  - Run pre-deployment checks"
    echo "  monitor-memory         - Show memory usage for all project containers and system"
    echo ""
    echo "Examples:"
    echo "  $0 up                  # Start Storybook development server"
    echo "  $0 logs storybook      # Show Storybook logs"
    echo "  $0 exec storybook      # Open shell in Storybook container"
    echo "  $0 rebuild             # Rebuild all services"
    echo "  $0 clean-cache         # Clean all Docker cache and rebuild"
    echo ""
    print_env_info
    exit 1
    ;;
esac

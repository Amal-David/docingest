#!/bin/bash

# Stop any running processes
echo "Stopping all existing processes..."
pm2 delete all
pm2 kill
sleep 2

# Kill any React development servers
echo "Killing any React development servers..."
pkill -f react-scripts || true
pkill -f webpack-dev-server || true
sleep 1

# Remove any lock files
echo "Removing lock files..."
rm -f frontend-server.lock

# Clean PM2 state completely
echo "Cleaning PM2 state..."
rm -rf ~/.pm2

# Start production services with the new configuration
echo "Starting production services..."
pm2 start production.config.cjs

# Save PM2 configuration
echo "Saving PM2 configuration..."
pm2 save

echo "Done! Services are running:"
pm2 list 
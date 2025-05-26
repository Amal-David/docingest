#!/bin/bash

# Script to monitor for and clean up duplicate PM2 processes
# Intended to run from cron every 5 minutes

# Log function
log() {
  echo "$(date): $1" >> /home/ubuntu/docingest/pm2-monitor.log
}

log "=== Starting PM2 monitoring ==="

# Count all PM2 processes to check for duplicates
PROCESS_COUNT=$(pm2 ls | grep -E 'docingest-(frontend|backend)' | wc -l)
log "Found $PROCESS_COUNT total docingest processes"

# Check for errored states or too many processes
ERROR_COUNT=$(pm2 ls | grep -E 'errored|stopped' | wc -l)
log "Found $ERROR_COUNT errored/stopped processes"

# If we have more processes than expected (should be 2) or any errored ones, clean everything
if [ "$PROCESS_COUNT" -gt 2 ] || [ "$ERROR_COUNT" -gt 0 ]; then
  log "Detected duplicate or errored processes. Cleaning up..."
  
  # Kill any potential dev servers
  pkill -f react-scripts || true
  pkill -f webpack-dev-server || true
  sleep 1
  
  # More aggressive cleanup
  log "Killing all PM2 processes"
  pm2 delete all || true
  pm2 kill || true
  sleep 2
  
  log "Killing any node processes that might be hanging"
  pkill -f node || true
  sleep 1
  
  # Remove lock file and PM2 state
  log "Cleaning files and state"
  rm -f /home/ubuntu/docingest/frontend-server.lock
  rm -rf /home/ubuntu/.pm2
  sleep 1
  
  # Start clean with production config
  log "Restarting with clean production config"
  cd /home/ubuntu/docingest
  pm2 start production.config.cjs
  pm2 save
  
  log "Cleanup complete. Restarted with production config."
else
  log "Process count looks normal. No action needed."
fi

log "Current process list:"
pm2 ls >> /home/ubuntu/docingest/pm2-monitor.log 2>&1

log "=== PM2 monitoring finished ===" 
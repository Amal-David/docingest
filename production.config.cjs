module.exports = {
  apps: [
    {
      name: 'docingest-frontend',
      script: 'bun',
      args: ['./src/frontend-static-server.ts'],
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_restarts: 2,
      restart_delay: 5000,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: '8000',
        PM2_UNIQUE_ID: 'frontend-prod-1'
      }
    },
    {
      name: 'docingest-backend',
      script: 'bun',
      args: ['./server/server.ts'],
      instances: 1, 
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_restarts: 2,
      restart_delay: 5000,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: '8001',
        PM2_UNIQUE_ID: 'backend-prod-1'
      }
    },
    {
      name: 'playwright-watchdog',
      script: 'bun',
      args: ['./server/scripts/playwright-watchdog.ts'],
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      autorestart: true,
      max_restarts: 50,
      restart_delay: 5000,
      max_memory_restart: '128M',
      env: {
        NODE_ENV: 'production',
        PLAYWRIGHT_CONTAINER: 'firecrawl-playwright-service-1',
        WORKER_CONTAINER: 'firecrawl-worker-1',
        ERROR_THRESHOLD: '3',
        WINDOW_MS: '60000',
        COOLDOWN_MS: '120000'
      }
    }
  ]
} 
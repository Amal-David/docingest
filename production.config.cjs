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
    }
  ]
} 
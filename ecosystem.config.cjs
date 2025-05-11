module.exports = {
  apps: [
    {
      name: 'docingest-frontend',
      script: 'http-server',
      args: ['./build', '-p', '8000'],
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'docingest-backend',
      script: 'bun',
      args: ['./server/server.ts'],
      instances: 1,
      autorestart: true,
      max_restarts: 10,
      restart_delay: 5000,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: '8001'
      }
    }
  ]
} 
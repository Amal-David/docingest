module.exports = {
  apps: [
    {
      name: 'docingest-frontend',
      script: 'serve',
      args: ['build', '--listen', '8000'],
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'docingest-backend',
      script: 'node',
      args: ['--loader', 'ts-node/esm', './server/server.ts'],
      env: {
        NODE_ENV: 'production',
        PORT: '8001'
      }
    }
  ]
} 
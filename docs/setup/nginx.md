# Nginx Setup Guide for DocIngest

This guide covers setting up Nginx as a reverse proxy for DocIngest in production environments.

## Overview

Nginx serves as a reverse proxy that:
- 🌐 **Routes traffic**: Directs requests to frontend (port 8000) and backend (port 8001)
- 🔒 **Handles SSL**: Manages HTTPS certificates and encryption
- ⚡ **Improves performance**: Gzip compression, caching, and load balancing
- 🛡️ **Security**: Adds security headers and rate limiting
- 📱 **Static files**: Efficiently serves static assets

## Architecture

```
Internet → Nginx (Port 80/443) → {
  / (frontend)     → localhost:8000 (React App)
  /api (backend)   → localhost:8001 (Express API)
}
```

## Prerequisites

- Ubuntu/Debian server with sudo access
- Domain name pointing to your server
- DocIngest application running on ports 8000 and 8001

## Installation

### 1. Install Nginx

```bash
# Update package list
sudo apt update

# Install Nginx
sudo apt install nginx -y

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

### 2. Configure Firewall

```bash
# Allow Nginx through firewall
sudo ufw allow 'Nginx Full'
sudo ufw allow ssh
sudo ufw --force enable

# Check firewall status
sudo ufw status
```

## Basic Configuration

### 1. Create Site Configuration

Create the Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/docingest
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/x-javascript
        application/xml+rss
        application/javascript
        application/json;

    # Frontend (React App)
    location / {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Handle React Router (SPA routing)
        try_files $uri $uri/ @fallback;
    }

    # API routes
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Increase timeout for long-running crawl operations
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
        proxy_send_timeout 300s;
    }

    # Fallback for React Router
    location @fallback {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Static assets optimization
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://localhost:8000;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Health check endpoint
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}
```

### 2. Enable Site Configuration

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/docingest /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

## SSL/HTTPS Setup

### 1. Install Certbot

```bash
# Install Certbot and Nginx plugin
sudo apt install certbot python3-certbot-nginx -y
```

### 2. Obtain SSL Certificate

```bash
# Get certificate for your domain
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Follow the prompts:
# 1. Enter email address
# 2. Agree to terms of service
# 3. Choose whether to share email with EFF
# 4. Choose redirect option (recommended: redirect HTTP to HTTPS)
```

### 3. Verify SSL Configuration

After Certbot runs, your configuration will be updated automatically. The updated config will look like:

```nginx
server {
    server_name yourdomain.com www.yourdomain.com;

    # ... existing configuration ...

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = www.yourdomain.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = yourdomain.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    return 404; # managed by Certbot
}
```

### 4. Test SSL Certificate

```bash
# Test SSL configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Test certificate renewal (dry run)
sudo certbot renew --dry-run
```

## Advanced Configuration

### 1. Rate Limiting

Add rate limiting to prevent abuse:

```nginx
# Add to the top of your nginx.conf or site config
http {
    # Define rate limiting zones
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=crawl:10m rate=1r/s;
    
    # ... existing config ...
}

server {
    # ... existing config ...
    
    # Apply rate limiting to API
    location /api {
        limit_req zone=api burst=20 nodelay;
        # ... existing proxy config ...
    }
    
    # Stricter rate limiting for crawl endpoints
    location /api/crawl {
        limit_req zone=crawl burst=5 nodelay;
        # ... existing proxy config ...
    }
}
```

### 2. Caching Configuration

Add caching for better performance:

```nginx
# Add to http block
http {
    # Define cache path
    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=docscache:10m max_size=1g inactive=60m use_temp_path=off;
    
    # ... existing config ...
}

server {
    # ... existing config ...
    
    # Cache static documentation
    location ~* ^/[^/]+\.(md|html)$ {
        proxy_pass http://localhost:8000;
        proxy_cache docscache;
        proxy_cache_valid 200 302 10m;
        proxy_cache_valid 404 1m;
        add_header X-Cache-Status $upstream_cache_status;
    }
}
```

### 3. Load Balancing (Multiple Instances)

If running multiple backend instances:

```nginx
# Add to http block
upstream backend {
    server localhost:8001;
    server localhost:8002;
    server localhost:8003;
    
    # Health checks (nginx-plus only)
    # health_check;
}

server {
    # ... existing config ...
    
    location /api {
        proxy_pass http://backend;
        # ... existing proxy config ...
    }
}
```

### 4. Security Enhancements

Enhanced security configuration:

```nginx
server {
    # ... existing config ...
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;" always;
    
    # Hide Nginx version
    server_tokens off;
    
    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Block common attack patterns
    location ~* (eval\(|base64_decode|gzinflate|rot13|str_rot13) {
        deny all;
    }
}
```

## Monitoring and Logs

### 1. Log Configuration

Configure detailed logging:

```nginx
# Add to http block
http {
    # Custom log format
    log_format detailed '$remote_addr - $remote_user [$time_local] '
                       '"$request" $status $body_bytes_sent '
                       '"$http_referer" "$http_user_agent" '
                       '$request_time $upstream_response_time';
    
    # ... existing config ...
}

server {
    # Custom access and error logs
    access_log /var/log/nginx/docingest_access.log detailed;
    error_log /var/log/nginx/docingest_error.log warn;
    
    # ... existing config ...
}
```

### 2. Log Rotation

Configure log rotation:

```bash
# Create log rotation config
sudo nano /etc/logrotate.d/docingest-nginx
```

Add the following:

```
/var/log/nginx/docingest_*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 0644 www-data adm
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 `cat /var/run/nginx.pid`
        fi
    endscript
}
```

### 3. Monitoring Commands

Useful commands for monitoring:

```bash
# Check Nginx status
sudo systemctl status nginx

# Test configuration
sudo nginx -t

# Reload configuration
sudo systemctl reload nginx

# View access logs
sudo tail -f /var/log/nginx/docingest_access.log

# View error logs
sudo tail -f /var/log/nginx/docingest_error.log

# Check SSL certificate expiry
sudo certbot certificates

# Monitor connections
sudo netstat -tulnp | grep nginx

# Check Nginx processes
ps aux | grep nginx
```

## Troubleshooting

### Common Issues

#### 1. 502 Bad Gateway

**Cause**: Backend services not running or wrong ports

**Solution**:
```bash
# Check if services are running
pm2 list

# Check ports
sudo netstat -tulnp | grep -E ':(8000|8001)'

# Restart services
pm2 restart all
```

#### 2. SSL Certificate Issues

**Cause**: Certificate expired or misconfigured

**Solution**:
```bash
# Check certificate status
sudo certbot certificates

# Renew certificate
sudo certbot renew

# Test renewal
sudo certbot renew --dry-run
```

#### 3. 413 Request Entity Too Large

**Cause**: Large file uploads or crawl requests

**Solution**:
```nginx
# Add to server block
client_max_body_size 100M;
```

#### 4. Timeout Issues

**Cause**: Long-running crawl operations

**Solution**:
```nginx
# Increase timeouts in API location
location /api {
    proxy_read_timeout 600s;
    proxy_connect_timeout 75s;
    proxy_send_timeout 600s;
    # ... existing config ...
}
```

### Debug Mode

Enable debug logging:

```nginx
# Add to main nginx.conf
error_log /var/log/nginx/debug.log debug;

# Or for specific server
server {
    error_log /var/log/nginx/docingest_debug.log debug;
    # ... existing config ...
}
```

## Performance Optimization

### 1. Worker Configuration

Optimize worker processes in `/etc/nginx/nginx.conf`:

```nginx
# Auto-detect number of CPU cores
worker_processes auto;

# Increase worker connections
events {
    worker_connections 1024;
    use epoll;
    multi_accept on;
}
```

### 2. Buffer Optimization

```nginx
http {
    # Optimize buffers
    client_body_buffer_size 128k;
    client_max_body_size 100m;
    client_header_buffer_size 1k;
    large_client_header_buffers 4 4k;
    output_buffers 1 32k;
    postpone_output 1460;
    
    # ... existing config ...
}
```

### 3. Keep-Alive Settings

```nginx
http {
    # Keep-alive settings
    keepalive_timeout 30;
    keepalive_requests 100;
    
    # ... existing config ...
}
```

## Backup and Maintenance

### 1. Configuration Backup

```bash
# Backup Nginx configuration
sudo tar -czf nginx-config-backup-$(date +%Y%m%d).tar.gz /etc/nginx/

# Backup SSL certificates
sudo tar -czf ssl-certs-backup-$(date +%Y%m%d).tar.gz /etc/letsencrypt/
```

### 2. Regular Maintenance

```bash
# Create maintenance script
sudo nano /usr/local/bin/nginx-maintenance.sh
```

Add the following:

```bash
#!/bin/bash

# Nginx maintenance script
echo "Starting Nginx maintenance - $(date)"

# Test configuration
if nginx -t; then
    echo "✓ Configuration test passed"
else
    echo "✗ Configuration test failed"
    exit 1
fi

# Reload configuration
systemctl reload nginx
echo "✓ Configuration reloaded"

# Check SSL certificates (30 days before expiry)
certbot renew --quiet
echo "✓ SSL certificates checked"

# Rotate logs manually if needed
logrotate -f /etc/logrotate.d/docingest-nginx
echo "✓ Logs rotated"

# Check disk space
df -h /var/log/nginx/
echo "✓ Disk space checked"

echo "Nginx maintenance completed - $(date)"
```

Make it executable and add to cron:

```bash
sudo chmod +x /usr/local/bin/nginx-maintenance.sh

# Add to crontab (run weekly)
sudo crontab -e
# Add: 0 2 * * 0 /usr/local/bin/nginx-maintenance.sh >> /var/log/nginx-maintenance.log 2>&1
```

## Integration with DocIngest

### Environment Variables

Update your DocIngest environment for production:

```bash
# Production environment
export REACT_APP_API_URL="https://yourdomain.com/api"
export NODE_ENV="production"
```

### PM2 Integration

Ensure PM2 services start before Nginx:

```bash
# Create systemd service for PM2
sudo nano /etc/systemd/system/pm2-docingest.service
```

Add:

```ini
[Unit]
Description=PM2 DocIngest Services
After=network.target

[Service]
Type=forking
User=ubuntu
WorkingDirectory=/home/ubuntu/docingest
ExecStart=/usr/bin/pm2 start production.config.cjs
ExecReload=/usr/bin/pm2 reload production.config.cjs
ExecStop=/usr/bin/pm2 delete production.config.cjs
PIDFile=/home/ubuntu/.pm2/pm2.pid

[Install]
WantedBy=multi-user.target
```

Enable the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable pm2-docingest
sudo systemctl start pm2-docingest
```

## Support and Resources

### Nginx Resources
- 📚 **Documentation**: [nginx.org/en/docs](https://nginx.org/en/docs/)
- 🔧 **Configuration Generator**: [nginxconfig.io](https://nginxconfig.io)
- 🛠️ **SSL Test**: [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/)

### DocIngest Integration
- 🔧 **Main Setup**: See [README.md](./README.md)
- 🕷️ **Firecrawl Setup**: See [firecrawl.md](./firecrawl.md)
- 🐛 **Issues**: [GitHub Issues](https://github.com/Amal-David/docingest/issues)

---

**Need help?** Check the [main README](./README.md) or open an issue on GitHub!

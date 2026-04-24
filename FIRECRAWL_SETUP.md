# Firecrawl Setup Guide

This guide covers everything you need to know about setting up and configuring Firecrawl for the DocIngest application.

## What is Firecrawl?

[Firecrawl](https://firecrawl.dev) is a powerful web scraping API that converts websites into clean, structured data. DocIngest uses Firecrawl to:

- 🕷️ **Crawl websites**: Systematically navigate through documentation sites
- 📝 **Extract content**: Convert HTML to clean Markdown format
- 🎯 **Smart filtering**: Focus on main content and ignore navigation/ads
- ⚡ **High performance**: Handle large documentation sites efficiently
- 🔄 **Reliable scraping**: Built-in retry logic and error handling

## Getting Your Firecrawl API Key

### Step 1: Create Account

1. Visit [firecrawl.dev](https://firecrawl.dev)
2. Click "Sign Up" or "Get Started"
3. Create your account with email/password or GitHub
4. Verify your email address

### Step 2: Get API Key

1. Log into your Firecrawl dashboard
2. Navigate to [API Keys](https://firecrawl.dev/app/api-keys)
3. Click "Create New API Key"
4. Give it a descriptive name (e.g., "DocIngest Production")
5. Copy the API key (starts with `fc-`)

### Step 3: Understand Pricing

Firecrawl operates on a credit system:

- **Free tier**: 500 credits/month
- **Pro plans**: Starting from $20/month
- **Enterprise**: Custom pricing

**Credit usage**:
- Simple scrape: ~1 credit per page
- Complex pages: 2-3 credits per page
- Failed requests: No credits charged

## Environment Configuration

### Development Setup

Create a `.env` file in your project root:

```bash
# Firecrawl Configuration
FIRECRAWL_API_KEY=fc-your-actual-api-key-here
REACT_APP_FIRECRAWL_API_URL=https://api.firecrawl.dev/v1

# Application Configuration
REACT_APP_API_URL=http://localhost:8001/api
NODE_ENV=development
PORT=8000

# Backend Configuration
API_PORT=8001
STORAGE_PATH=./storage/docs
```

### Production Setup

For production, use environment variables or a secure `.env` file:

```bash
# Production Environment Variables
export FIRECRAWL_API_KEY="fc-your-production-api-key"
export REACT_APP_FIRECRAWL_API_URL="https://api.firecrawl.dev/v1"
export REACT_APP_API_URL="https://yourdomain.com/api"
export NODE_ENV="production"
export PORT="8000"
export API_PORT="8001"
```

## Firecrawl Configuration Options

### Basic Crawl Configuration

```javascript
{
  "url": "https://docs.example.com",
  "maxPages": 50,                    // Limit pages to crawl
  "scrapeOptions": {
    "formats": ["markdown"],         // Output format
    "onlyMainContent": true,         // Extract main content only
    "removeBase64Images": false,     // Keep images
    "timeout": 20000,               // Page load timeout (ms)
    "waitFor": 1000                 // Wait after page load (ms)
  }
}
```

### Advanced Configuration

```javascript
{
  "url": "https://docs.example.com",
  "maxPages": 100,
  "maxDepth": 5,                     // How deep to crawl
  "allowBackwardLinks": true,        // Follow links to parent pages
  
  // URL Pattern Filtering
  "includePattern": "docs\\.example\\.com/(api|guides)/.*",
  "excludePattern": "docs\\.example\\.com/(blog|changelog)/.*",
  
  // Scraping Options
  "scrapeOptions": {
    "formats": ["markdown", "html"],
    "onlyMainContent": true,
    "removeBase64Images": false,
    "timeout": 30000,
    "waitFor": 2000,
    
    // Additional options
    "screenshot": false,             // Don't take screenshots
    "fullPageScreenshot": false,     // Don't take full page screenshots
    "headers": {                     // Custom headers
      "User-Agent": "DocIngest Bot 1.0"
    }
  }
}
```

### Pattern Examples

#### Include Patterns (Regex)
```javascript
// Include only API documentation
"includePattern": "docs\\.example\\.com/api/.*"

// Include guides and tutorials
"includePattern": "docs\\.example\\.com/(guides|tutorials)/.*"

// Include specific versions
"includePattern": "docs\\.example\\.com/v[0-9]+/.*"

// Include multiple sections
"includePattern": "(api|reference|guides)\\.example\\.com/.*"
```

#### Exclude Patterns (Regex)
```javascript
// Exclude blog and news
"excludePattern": "docs\\.example\\.com/(blog|news)/.*"

// Exclude old versions
"excludePattern": "docs\\.example\\.com/v[0-2]/.*"

// Exclude non-documentation
"excludePattern": "(changelog|releases|downloads)"

// Exclude multiple patterns
"excludePattern": "(blog|news|changelog|community|forum)"
```

## API Integration

### Frontend Integration

The DocIngest frontend integrates with Firecrawl through these key functions:

```typescript
// src/pages/HomePage.tsx
const FIRECRAWL_API = process.env.REACT_APP_FIRECRAWL_API_URL || 'https://api.firecrawl.dev/v1';

// Start a crawl
const startCrawl = async (config: CrawlConfig) => {
  const response = await fetch(`${FIRECRAWL_API}/crawl`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.FIRECRAWL_API_KEY}` // Note: In production, handle securely
    },
    body: JSON.stringify(config)
  });
  
  return response.json();
};

// Check crawl status
const checkCrawlStatus = async (jobId: string) => {
  const response = await fetch(`${FIRECRAWL_API}/crawl/${jobId}`, {
    headers: {
      'Authorization': `Bearer ${process.env.FIRECRAWL_API_KEY}`
    }
  });
  
  return response.json();
};
```

### Security Note

⚠️ **Important**: Never expose your Firecrawl API key in client-side code. In the current implementation, the API key should be handled by the backend server, not the frontend.

## Rate Limits and Best Practices

### Rate Limits

Firecrawl has built-in rate limiting:
- **Free tier**: 2 requests/second
- **Pro tiers**: Higher limits based on plan
- **Automatic retry**: Built-in exponential backoff

### Best Practices

1. **Start small**: Test with `maxPages: 5-10` first
2. **Use patterns**: Be specific with include/exclude patterns
3. **Monitor credits**: Keep track of your usage
4. **Handle errors**: Implement proper error handling
5. **Cache results**: Store successful crawls to avoid re-crawling

### Optimization Tips

```javascript
// Efficient crawling configuration
{
  "maxPages": 25,                    // Reasonable limit
  "maxDepth": 3,                     // Don't go too deep
  "includePattern": "specific-section", // Be targeted
  "excludePattern": "(images|assets|downloads)", // Skip non-content
  "scrapeOptions": {
    "onlyMainContent": true,         // Skip navigation/footer
    "timeout": 15000,               // Reasonable timeout
    "waitFor": 500                  // Minimal wait time
  }
}
```

## Troubleshooting

### Common Issues

#### 1. Authentication Errors
```bash
# Check API key format
echo $FIRECRAWL_API_KEY
# Should start with 'fc-' and be 32+ characters

# Test API key
curl -H "Authorization: Bearer $FIRECRAWL_API_KEY" \
     https://api.firecrawl.dev/v1/
```

#### 2. Rate Limiting
```json
{
  "error": "Rate limit exceeded",
  "retryAfter": 60
}
```

**Solution**: Implement exponential backoff or reduce request frequency.

#### 3. Credit Exhaustion
```json
{
  "error": "Insufficient credits",
  "creditsRemaining": 0
}
```

**Solution**: Upgrade plan or wait for monthly reset.

#### 4. Crawl Failures
```json
{
  "status": "failed",
  "error": "Timeout after 300 seconds"
}
```

**Solutions**:
- Reduce `maxPages`
- Add more specific `includePattern`
- Increase `timeout` in `scrapeOptions`

### Debug Mode

Enable detailed logging for troubleshooting:

```bash
# Development
DEBUG=firecrawl:* npm start

# Check crawl status manually
curl -H "Authorization: Bearer $FIRECRAWL_API_KEY" \
     https://api.firecrawl.dev/v1/crawl/your-job-id
```

### Common Error Codes

| Code | Meaning | Solution |
|------|---------|----------|
| 401 | Invalid API key | Check key format and validity |
| 402 | Insufficient credits | Upgrade plan or wait for reset |
| 429 | Rate limit exceeded | Implement backoff strategy |
| 500 | Server error | Retry after delay |
| 503 | Service unavailable | Check Firecrawl status page |

## Monitoring and Analytics

### Credit Usage Tracking

Monitor your Firecrawl usage:

1. **Dashboard**: Check [firecrawl.dev/dashboard](https://firecrawl.dev/dashboard)
2. **API endpoint**: GET `/v1/account/credits`
3. **Webhooks**: Set up notifications for low credits

### Performance Monitoring

Track crawl performance:

```javascript
// Log crawl metrics
const crawlMetrics = {
  startTime: Date.now(),
  url: crawlConfig.url,
  maxPages: crawlConfig.maxPages,
  actualPages: result.data?.length || 0,
  duration: Date.now() - startTime,
  creditsUsed: result.creditsUsed || 0
};

console.log('Crawl completed:', crawlMetrics);
```

## Self-Hosted Firecrawl (Advanced)

Firecrawl can be self-hosted if you want tighter control over infrastructure, networking, or data locality.

The official Firecrawl self-hosting guide is the source of truth:

- [Firecrawl self-hosting docs](https://docs.firecrawl.dev/contributing/self-host)
- [Firecrawl GitHub repository](https://github.com/mendableai/firecrawl)

### When self-hosting makes sense

- You want DocIngest to stay inside your own infrastructure
- You want to avoid relying on Firecrawl’s hosted service
- You are comfortable operating the supporting services Firecrawl requires

### Important caveats

According to Firecrawl’s official self-hosting docs:

- Self-hosted Firecrawl does not support every cloud feature
- Advanced anti-bot and Fire-engine capabilities are not available in self-hosted mode
- Some endpoints such as `/agent` and `/browser` are not supported in self-hosting

For DocIngest, this is usually fine because it primarily relies on Firecrawl’s crawl and scrape flows.

### Basic setup flow

```bash
# Clone Firecrawl
git clone https://github.com/mendableai/firecrawl.git
cd firecrawl

# Create the environment file
# The official docs currently point to apps/api/.env.example as the template source

# Start the stack using Firecrawl's documented compose flow
docker compose up -d
```

### DocIngest configuration for a self-hosted Firecrawl instance

Point DocIngest at your Firecrawl base URL:

```bash
REACT_APP_FIRECRAWL_API_URL=http://your-firecrawl-instance:3002/v1
FIRECRAWL_API_KEY=your-self-hosted-key
```

If your self-hosted Firecrawl instance runs without authentication in a trusted environment, you can leave the API key unset or use whatever auth model your deployment expects.

### Recommendation

Start with hosted Firecrawl unless you specifically need self-hosting. If you do self-host, follow the official Firecrawl guide closely because their required services and env vars can change over time.

## Support and Resources

### Official Resources
- 📚 **Documentation**: [docs.firecrawl.dev](https://docs.firecrawl.dev)
- 🐛 **Issues**: [GitHub Issues](https://github.com/mendableai/firecrawl/issues)
- 💬 **Discord**: [Firecrawl Community](https://discord.gg/firecrawl)
- 🌐 **Status Page**: [status.firecrawl.dev](https://status.firecrawl.dev)

### DocIngest Integration
- 🔧 **Configuration**: See main README.md
- 🚀 **Deployment**: See NGINX_SETUP.md
- 🐛 **Issues**: [DocIngest Issues](https://github.com/Amal-David/docingest/issues)

---

**Need help?** Check the [main README](./README.md) or open an issue on GitHub!

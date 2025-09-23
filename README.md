# DocIngest

A modern documentation scraping and management tool that allows you to download, save, and manage documentation from any website using the Firecrawl API.

## Features

- 🚀 Scrape documentation from any URL using Firecrawl
- 📝 Convert HTML to clean Markdown format
- 📁 Save documentation locally with organized storage
- 🔍 Full-text search capabilities across all saved docs
- 📱 Responsive design with mobile-first approach
- 🎨 Modern UI with consistent theming
- 🔗 SEO-friendly URLs for saved documentation
- ⚡ High-performance crawling with configurable limits
- 🔄 Real-time crawling status and progress tracking
- 📊 Comprehensive logging and debugging

## Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Node.js with Express, TypeScript
- **Runtime**: Bun (preferred) or Node.js
- **Process Manager**: PM2 for production
- **Web Scraping**: Firecrawl API (external service)
- **Storage**: File-based markdown storage
- **Proxy**: Nginx (for production)

## 📚 Setup Guides

| Guide | Purpose | When to Use |
|-------|---------|-------------|
| **[Main README](./README.md)** | Quick start and overview | Getting started |
| **[🕷️ Firecrawl Setup](./FIRECRAWL_SETUP.md)** | Detailed Firecrawl configuration | API setup and troubleshooting |
| **[🌐 Nginx Setup](./NGINX_SETUP.md)** | Production deployment | Production hosting |

## Prerequisites

- **Node.js** (v18 or higher) or **Bun** (recommended)
- **PM2** (for production deployment)
- **Nginx** (for production reverse proxy)
- **Firecrawl API Key** (get from [firecrawl.dev](https://firecrawl.dev))

## Quick Setup

### 1. Firecrawl Configuration

DocIngest requires a Firecrawl API key to scrape websites. 

**📖 [Complete Firecrawl Setup Guide →](./FIRECRAWL_SETUP.md)**

**Quick setup:**
1. Get API key from [firecrawl.dev](https://firecrawl.dev)
2. Create `.env` file:
```bash
FIRECRAWL_API_KEY=fc-your-api-key-here
REACT_APP_FIRECRAWL_API_URL=https://api.firecrawl.dev/v1
REACT_APP_API_URL=http://localhost:8001/api
```

## Installation

### Quick Start (Development)

1. **Clone the repository:**
```bash
git clone https://github.com/Amal-David/docingest.git
cd docingest
```

2. **Install Bun (recommended):**
```bash
# Install Bun (faster than npm/yarn)
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc
```

3. **Install dependencies:**
```bash
# Install all dependencies with Bun
bun install

# Install server dependencies
cd server && bun install && cd ..
```

4. **Set up environment variables:**
```bash
# Create environment file
cp .env.example .env
# Edit .env and add your Firecrawl API key
```

5. **Start development servers:**
```bash
# Start frontend (port 8000)
bun run dev

# In another terminal, start backend (port 8001)
cd server && bun run dev
```

### Alternative Installation (npm/yarn)

```bash
# Install dependencies
npm install
cd server && npm install && cd ..

# Start development
npm start                    # Frontend
cd server && npm start       # Backend
```

## Storage Location

### Saved Documentation Files

All scraped documentation is stored in the following locations:

```
docingest/
├── server/storage/docs/          # Primary storage location
│   ├── example.com/
│   │   ├── documentation_2025-01-15T10:30:00.000Z.md
│   │   └── metadata.json
│   └── another-site.com/
│       ├── documentation_2025-01-16T14:20:00.000Z.md
│       └── metadata.json
└── storage/docs/                 # Alternative storage (if configured)
```

### File Structure

- **Domain folders**: Each scraped site gets its own folder named after the domain
- **Markdown files**: Documentation content saved as timestamped `.md` files
- **Metadata files**: JSON files containing crawl information, timestamps, and configuration
- **Automatic organization**: Files are automatically organized by domain and timestamp

### Accessing Saved Documentation

1. **Via Web Interface**: Visit `http://localhost:8000/domain-name`
2. **Direct file access**: Navigate to `server/storage/docs/domain-name/`
3. **API endpoint**: `GET /api/docs/content?domain=domain-name`

## Production Deployment

For production deployment with Nginx, SSL, and PM2 process management:

**🚀 [Complete Production Setup Guide →](./NGINX_SETUP.md)**

### Quick Production Setup

1. **Install dependencies:**
```bash
sudo apt update && apt install nginx pm2 -y
curl -fsSL https://bun.sh/install | bash
```

2. **Deploy application:**
```bash
git clone https://github.com/Amal-David/docingest.git
cd docingest
bun install && cd server && bun install && cd ..
bun run build
```

3. **Start with PM2:**
```bash
chmod +x start-production.sh
./start-production.sh
```

4. **Configure Nginx** (see [NGINX_SETUP.md](./NGINX_SETUP.md) for complete configuration)

5. **Setup SSL:**
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com
```

## Usage

### Basic Usage

1. **Access the application**: Visit `http://localhost:8000` (development) or your domain (production)
2. **Enter documentation URL**: Paste any website URL you want to scrape
3. **Configure crawling options**:
   - **Max Pages**: Limit the number of pages to crawl (1-100)
   - **Include Patterns**: Specify URL patterns to include (optional)
   - **Exclude Patterns**: Specify URL patterns to exclude (optional)
4. **Start crawling**: Click "Download Documentation"
5. **Monitor progress**: Watch real-time status updates and logs
6. **Access results**: Once complete, view or download the documentation

### URL Structure

- **Homepage**: `/` - Main interface for starting new crawls
- **View Documentation**: `/:domain` - View saved documentation
- **Examples**:
  - `localhost:8000/docs.anthropic.com` - View Anthropic docs
  - `localhost:8000/nextjs.org` - View Next.js documentation
  - `localhost:8000/docs.firecrawl.dev` - View Firecrawl docs

### Crawling Configuration

#### Advanced Options

```javascript
// Example crawl configuration
{
  "url": "https://docs.example.com",
  "maxPages": 50,
  "includePattern": "docs\\.example\\.com/guides/.*",
  "excludePattern": "docs\\.example\\.com/(blog|changelog)/.*",
  "maxDepth": 5,
  "allowBackwardLinks": true,
  "scrapeOptions": {
    "formats": ["markdown", "html"],
    "onlyMainContent": true,
    "removeBase64Images": false,
    "timeout": 20000,
    "waitFor": 1000
  }
}
```

#### Pattern Examples

- **Include specific sections**: `docs\.example\.com/api/.*`
- **Exclude unwanted content**: `(blog|news|changelog|releases)`
- **Multiple patterns**: `(guides|tutorials|reference)`

### API Endpoints

#### Frontend Configuration

```typescript
const FIRECRAWL_API = process.env.REACT_APP_FIRECRAWL_API_URL || 'https://api.firecrawl.dev/v1';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8001/api';
```

#### Available Endpoints

```bash
# Documentation Management
GET    /api/docs/list                    # List all saved documentation
GET    /api/docs/content?domain=:domain  # Get documentation content
GET    /api/docs/download?domain=:domain # Download documentation file
POST   /api/docs/save                   # Save new documentation

# Crawling Operations (via Firecrawl)
POST   /v1/crawl                        # Start new crawl job
GET    /v1/crawl/:jobId                 # Check crawl status
```

#### Example API Usage

```javascript
// Start a new crawl
const response = await fetch(`${FIRECRAWL_API}/crawl`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: 'https://docs.example.com',
    maxPages: 10,
    scrapeOptions: {
      formats: ['markdown'],
      onlyMainContent: true
    }
  })
});

// Check crawl status
const status = await fetch(`${FIRECRAWL_API}/crawl/${jobId}`);

// Get saved documentation
const docs = await fetch(`${API_URL}/docs/content?domain=example.com`);
```

### Troubleshooting

#### Quick Fixes

1. **Firecrawl API Issues**: Check [FIRECRAWL_SETUP.md](./FIRECRAWL_SETUP.md#troubleshooting)
2. **Production Issues**: Check [NGINX_SETUP.md](./NGINX_SETUP.md#troubleshooting)
3. **Port conflicts**: `lsof -i :8000` and `lsof -i :8001`
4. **Storage issues**: `chmod -R 755 server/storage/`

#### Debug Mode

```bash
# Development
DEBUG=* bun run dev

# Production logs
pm2 logs --lines 100
```

## Features in Detail

### 🚀 Advanced Web Scraping
- **Firecrawl Integration**: Uses Firecrawl's robust API for reliable web scraping
- **Smart Content Extraction**: Automatically identifies and extracts main content
- **Configurable Crawling**: Control depth, page limits, and URL patterns
- **Real-time Progress**: Live updates during crawling process

### 📁 Organized Storage
- **Domain-based Organization**: Each site gets its own folder
- **Timestamped Files**: Multiple crawls of the same site are preserved
- **Metadata Tracking**: JSON files store crawl configuration and stats
- **Easy Access**: Files accessible via web interface or direct file system

### 🔍 Search and Navigation
- **Domain-based URLs**: Clean URLs like `/docs.anthropic.com`
- **Fast File Serving**: Optimized static file serving
- **Responsive Design**: Works on desktop and mobile devices

### ⚡ Performance Optimized
- **Bun Runtime**: Faster than Node.js for development and production
- **PM2 Process Management**: Automatic restarts and clustering
- **Nginx Reverse Proxy**: Production-ready load balancing
- **Efficient Storage**: Markdown format for smaller file sizes

## Environment Variables

### Essential Variables

```bash
# Required
FIRECRAWL_API_KEY=fc-your-api-key-here
REACT_APP_FIRECRAWL_API_URL=https://api.firecrawl.dev/v1
REACT_APP_API_URL=http://localhost:8001/api

# Optional
NODE_ENV=development
PORT=8000
API_PORT=8001
```

**📖 [Complete Environment Reference →](./FIRECRAWL_SETUP.md#environment-configuration)**

## Contributing

We welcome contributions! Here's how to get started:

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/yourusername/docingest.git
   cd docingest
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Install dependencies**:
   ```bash
   bun install
   cd server && bun install && cd ..
   ```
5. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your Firecrawl API key
   ```

### Making Changes

1. **Start development servers**:
   ```bash
   # Terminal 1: Frontend
   bun run dev
   
   # Terminal 2: Backend
   cd server && bun run dev
   ```

2. **Make your changes** and test thoroughly
3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```
4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request** on GitHub

### Code Style

- **TypeScript**: Use TypeScript for all new code
- **Functional Components**: Prefer functional React components
- **Tailwind CSS**: Use Tailwind for styling
- **ESLint**: Follow the existing ESLint configuration
- **Descriptive Names**: Use clear, descriptive variable and function names

### Areas for Contribution

- 🐛 **Bug Fixes**: Fix issues and improve stability
- ✨ **New Features**: Add new crawling options or UI improvements
- 📚 **Documentation**: Improve docs and add examples
- 🎨 **UI/UX**: Enhance the user interface and experience
- ⚡ **Performance**: Optimize crawling and storage performance
- 🔧 **DevOps**: Improve deployment and monitoring

## License

**MIT License**

Copyright (c) 2024 DocIngest

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Support

- 📧 **Issues**: [GitHub Issues](https://github.com/Amal-David/docingest/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Amal-David/docingest/discussions)
- 🌟 **Star the repo** if you find it useful!

Built with ❤️ using [Firecrawl](https://firecrawl.dev), React, and TypeScript.


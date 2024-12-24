# DocIngest

A modern documentation scraping and management tool that allows you to download, save, and manage documentation from any website.

## Features

- 🚀 Scrape documentation from any URL
- 📝 Convert HTML to clean Markdown
- 📁 Save documentation locally
- 🔍 Full-text search capabilities
- 📱 Responsive design
- 🎨 Modern UI with a consistent theme
- 🔗 SEO-friendly URLs for saved documentation

## Tech Stack

- Frontend: React with TypeScript
- Backend: Node.js with Express
- Scraping: Custom Firecrawl API
- Styling: Tailwind CSS

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Python 3.8+ (for Firecrawl API)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/docingest.git
cd docingest
```

2. Install dependencies:
```bash
# Install frontend dependencies
npm install

# Install server dependencies
cd server
npm install
```

3. Set up environment variables:
```bash
# Create .env file in root directory
cp .env.example .env

# Create .env file in server directory
cd server
cp .env.example .env
```

4. Start the development servers:
```bash
# Start frontend (in root directory)
npm start

# Start backend (in server directory)
cd server
npm start

# Start Firecrawl API (in a new terminal)
cd firecrawl
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

## Deployment

### Frontend Deployment (Vercel/Netlify)

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Add environment variables from `.env`

### Backend Deployment (DigitalOcean/Heroku)

1. Create a new app/droplet
2. Set up environment variables
3. Configure build command: `npm install && npm run build`
4. Start command: `npm start`

### Firecrawl API Deployment

1. Deploy as a separate service
2. Update API endpoint in frontend configuration
3. Set up rate limiting and security measures

## Usage

### Basic Usage

1. Visit the homepage
2. Enter a documentation URL
3. Click "Download Documentation"
4. Wait for the scraping to complete
5. View, copy, or download the documentation

### URL Structure

- Homepage: `/`
- View Documentation: `/:domain`
- Example: `docingest.com/cartesia` shows Cartesia documentation

### API Endpoints

```typescript
// Frontend API Configuration
const FIRECRAWL_API = 'http://localhost:3002/v1';
const API_URL = 'http://localhost:8001/api';

// Available Endpoints
GET /api/docs/list         // List all saved documentation
POST /api/docs/save        // Save new documentation
GET /api/docs/content      // Get documentation content
GET /api/docs/download     // Download documentation file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - feel free to use this project for your own purposes.

## Support

For support, email support@docingest.com or create an issue in the repository. 
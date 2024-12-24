# DocIngest

A modern documentation download and archival tool that helps you save technical documentation for offline access.

## Features

### Core Functionality
- Download and archive documentation from any website
- Automatic organization and indexing of content
- Support for up to 250 pages per documentation
- Easy search and navigation through saved documentation
- SEO-friendly URLs for archived documentation

### Performance Optimizations
- Lazy loading of documentation content
  - Initial load only fetches metadata
  - Content is loaded on-demand when copying or downloading
  - Cached in memory after first load
- Smart archival system
  - Checks for existing documentation before downloading
  - Auto re-downloads if content is older than 10 days
  - Shows archive status and last update date
- Efficient storage
  - Stores metadata separately from content
  - Displays file sizes before downloading
  - Supports files up to 100MB

### User Experience
- Clean, modern interface with Inter font
- Responsive design that works on all devices
- Progress indicators for all operations
- Quick search functionality
- One-click copy and download options

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/docingest.git
cd docingest
```

2. Install dependencies:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ..
npm install
```

3. Create environment files:
```bash
# Copy example environment files
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
# Server Configuration
PORT=8001
MAX_PAYLOAD_SIZE=100mb

# API Endpoints
REACT_APP_SERVER_API_URL=http://localhost:8001/api
REACT_APP_FIRECRAWL_API_URL=http://localhost:3002/v1
```

### Running the Application

1. Start the server:
```bash
cd server
npm start
```

2. Start the client:
```bash
# In another terminal
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

### Documentation Management
- `GET /api/docs/list` - List all saved documentation (metadata only)
- `GET /api/docs/content/:domain` - Get content for specific documentation
- `GET /api/docs/check/:domain` - Check if documentation exists and is recent
- `POST /api/docs/save` - Save new documentation
- `GET /api/docs/domain/:domain` - Get both metadata and content

### URL Structure
- Main application: `http://localhost:3000`
- Documentation view: `http://localhost:3000/docs/{domain}`
- API server: `http://localhost:8001/api`
- Firecrawl service: `http://localhost:3002/v1`

## Performance Considerations

### Content Loading
- Initial page load only fetches metadata (~1KB per doc)
- Content is loaded on-demand when needed
- In-memory caching prevents redundant fetches
- Progress indicators for all loading states

### Storage Optimization
- Metadata and content stored separately
- File sizes displayed before downloading
- Support for large documentation (up to 100MB)
- Automatic cleanup of outdated content

### Archive Management
- Smart caching system with 10-day freshness
- Automatic re-download of outdated content
- Archive status indicators
- Timestamp tracking for all content

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact @DavidAmal on Twitter/X. 
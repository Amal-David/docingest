const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

// Enable compression (gzip/brotli)
app.use(compression({
  level: 6, // Balance between compression and CPU
  filter: (req, res) => {
    // Compress all text-based responses
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

// Serve static files with aggressive caching
app.use(express.static(path.join(__dirname, 'build'), {
  maxAge: '1y', // Cache for 1 year
  etag: true,
  lastModified: true,
  setHeaders: (res, filePath) => {
    // More aggressive caching for hashed files (JS, CSS)
    if (filePath.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
  }
}));

// Always return index.html for any route - using express 4.x compatible syntax
app.use((req, res) => {
  // Don't cache HTML files
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});

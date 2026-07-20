import express from 'express';
import fs from 'fs';
import http from 'http';
import path from 'path';

// Create a flag file to help prevent duplicate processes
const LOCK_FILE = path.join(process.cwd(), 'frontend-server.lock');
const PORT = process.env.PORT || 8000;
const app = express();
const BACKEND_ORIGIN = new URL(process.env.DOCINGEST_BACKEND_URL || 'http://127.0.0.1:8001');

// Detect if another instance is already running
try {
  if (fs.existsSync(LOCK_FILE)) {
    const pid = fs.readFileSync(LOCK_FILE, 'utf8');
    console.error(`[${process.pid}] Another instance appears to be running (PID: ${pid}). If this is incorrect, delete ${LOCK_FILE}`);
    process.exit(1);
  }
  // Write current PID to lock file
  fs.writeFileSync(LOCK_FILE, String(process.pid));
} catch (err) {
  console.error(`[${process.pid}] Error checking/creating lock file:`, err);
}

// Remove lock file on exit
process.on('exit', () => {
  try {
    if (fs.existsSync(LOCK_FILE)) {
      fs.unlinkSync(LOCK_FILE);
    }
  } catch (e) {
    // Ignore errors on cleanup
  }
});

// Handle uncaught exceptions and rejections
process.on('uncaughtException', (err) => {
  console.error(`[${process.pid}] Uncaught Exception:`, err);
  cleanupAndExit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error(`[${process.pid}] Unhandled Rejection:`, reason);
  cleanupAndExit(1);
});

// Graceful exit function
function cleanupAndExit(code = 0) {
  try {
    if (fs.existsSync(LOCK_FILE)) {
      fs.unlinkSync(LOCK_FILE);
    }
  } catch (e) {
    // Ignore errors on cleanup
  }
  process.exit(code);
}

// Ensure build directory exists
const buildPath = path.join(process.cwd(), 'build');
if (!fs.existsSync(buildPath)) {
  console.error(`[${process.pid}] Build directory not found at: ${buildPath}`);
  cleanupAndExit(1);
}

const forwardedResponseHeaders = [
  'cache-control',
  'content-disposition',
  'content-length',
  'content-type',
  'etag',
  'link',
  'last-modified',
  'x-robots-tag',
];

function proxyAgentReadableResponse(req: express.Request, res: express.Response, upstreamPath: string) {
  const upstreamUrl = new URL(upstreamPath, BACKEND_ORIGIN);
  const upstreamRequest = http.request(upstreamUrl, {
    method: req.method,
    headers: {
      ...(req.headers['if-none-match'] ? { 'if-none-match': req.headers['if-none-match'] } : {}),
      ...(req.headers['if-modified-since'] ? { 'if-modified-since': req.headers['if-modified-since'] } : {}),
      ...(req.headers['user-agent'] ? { 'user-agent': req.headers['user-agent'] } : {}),
    },
  }, upstreamResponse => {
    res.status(upstreamResponse.statusCode || 502);
    for (const header of forwardedResponseHeaders) {
      const value = upstreamResponse.headers[header];
      if (value !== undefined) res.setHeader(header, value);
    }
    upstreamResponse.pipe(res);
  });

  upstreamRequest.setTimeout(15_000, () => {
    upstreamRequest.destroy(new Error('Backend request timed out'));
  });
  upstreamRequest.on('error', error => {
    console.error(`[${process.pid}] Agent-readable proxy failed:`, error);
    if (!res.headersSent) {
      res.status(502).type('text/plain').send('Documentation service unavailable');
    } else {
      res.end();
    }
  });
  req.on('aborted', () => upstreamRequest.destroy());
  upstreamRequest.end();
}

// Keep these before express.static so the checked-in SPA sitemap cannot shadow
// the live corpus and dedicated `.md` paths never fall through to index.html.
app.get('/sitemap.xml', (req, res) => {
  proxyAgentReadableResponse(req, res, '/api/sitemap.xml');
});

app.get(/^\/([A-Za-z0-9-]{8,128}\.txt)$/, (req, res) => {
  proxyAgentReadableResponse(req, res, `/api/indexnow/key/${encodeURIComponent(req.params[0])}`);
});

app.get(/^\/markdown\/([a-z0-9](?:[a-z0-9._-]*[a-z0-9])?)\.md$/i, (req, res) => {
  proxyAgentReadableResponse(req, res, `/api/docs/markdown/${encodeURIComponent(req.params[0])}`);
});

// Serve static files with fallthrough enabled
app.use(express.static(buildPath, { 
  index: ['index.html'],
  fallthrough: true 
}));

// For client-side routing, serve index.html for any request that doesn't match a file
app.use((req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  const now = new Date().toISOString();
  console.log(`[${process.pid}] Frontend static server started at ${now} on port ${PORT}`);
  console.log(`[${process.pid}] ENV:`, JSON.stringify({
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT
  }, null, 2));
  console.log(`[${process.pid}] ARGV:`, process.argv);
  console.log(`[${process.pid}] CWD:`, process.cwd());
});

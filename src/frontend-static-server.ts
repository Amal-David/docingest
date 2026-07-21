import express from 'express';
import fs from 'fs';
import path from 'path';
import {
  API_CATALOG_PROFILE,
  HOMEPAGE_LINK_HEADER,
  HOMEPAGE_MARKDOWN,
  acceptsMarkdown,
  createAgentSkillsIndex,
  createApiCatalog,
  createMcpPackageManifest,
  createOpenApiDocument,
} from './agent-discovery';

// Create a flag file to help prevent duplicate processes
const LOCK_FILE = path.join(process.cwd(), 'frontend-server.lock');
const PORT = process.env.PORT || 8000;
export const app = express();

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

const skillPath = path.join(buildPath, '.well-known', 'agent-skills', 'docingest-docs', 'SKILL.md');
if (!fs.existsSync(skillPath)) {
  console.error(`[${process.pid}] Agent skill not found at: ${skillPath}`);
  cleanupAndExit(1);
}
const skillBytes = fs.readFileSync(skillPath);
const agentSkillsIndex = createAgentSkillsIndex(skillBytes);

function setDiscoveryCache(res: express.Response, maxAge = 3600) {
  res.setHeader('Cache-Control', `public, max-age=${maxAge}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
}

app.get('/', (req, res) => {
  res.setHeader('Link', HOMEPAGE_LINK_HEADER);
  res.vary('Accept');

  if (acceptsMarkdown(req.headers.accept)) {
    setDiscoveryCache(res, 300);
    return res.type('text/markdown').send(HOMEPAGE_MARKDOWN);
  }

  return res.sendFile(path.join(buildPath, 'index.html'));
});

app.get('/health', (_req, res) => {
  res.type('text/plain').send('healthy\n');
});

app.get('/.well-known/api-catalog', (_req, res) => {
  setDiscoveryCache(res);
  res.setHeader('Link', '</.well-known/api-catalog>; rel="api-catalog"');
  res.setHeader('Content-Type', `application/linkset+json; charset=utf-8; profile="${API_CATALOG_PROFILE}"`);
  res.send(JSON.stringify(createApiCatalog()));
});

app.get('/.well-known/openapi.json', (_req, res) => {
  setDiscoveryCache(res);
  res.type('application/vnd.oai.openapi+json').send(createOpenApiDocument());
});

// DocIngest's MCP server is an installable npm/stdio package, not a remote
// Streamable HTTP server. Publish the registry-shaped package manifest without
// claiming an HTTP transport that does not exist.
app.get('/.well-known/mcp.json', (_req, res) => {
  setDiscoveryCache(res);
  res.json(createMcpPackageManifest());
});

app.get('/.well-known/agent-skills/index.json', (_req, res) => {
  setDiscoveryCache(res);
  res.json(agentSkillsIndex);
});

app.get('/.well-known/agent-skills/docingest-docs/SKILL.md', (_req, res) => {
  setDiscoveryCache(res);
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.send(skillBytes);
});

// Serve static files with fallthrough enabled
app.use(express.static(buildPath, { 
  index: ['index.html'],
  fallthrough: true 
}));

// Missing discovery documents must be real 404s rather than the SPA shell.
app.use('/.well-known', (_req, res) => {
  res.status(404).json({ error: 'Discovery document not found' });
});

app.get('/auth.md', (_req, res) => {
  res.status(404).type('text/plain').send('DocIngest does not require agent authentication.\n');
});

// For client-side routing, serve index.html for any request that doesn't match a file
app.use((req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Start server
export const frontendServer = process.env.NODE_ENV === 'test' ? null : app.listen(PORT, () => {
  const now = new Date().toISOString();
  console.log(`[${process.pid}] Frontend static server started at ${now} on port ${PORT}`);
  console.log(`[${process.pid}] ENV:`, JSON.stringify({
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT
  }, null, 2));
  console.log(`[${process.pid}] ARGV:`, process.argv);
  console.log(`[${process.pid}] CWD:`, process.cwd());
});

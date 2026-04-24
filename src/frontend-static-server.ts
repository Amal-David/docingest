import express from 'express';
import fs from 'fs';
import path from 'path';

// Create a flag file to help prevent duplicate processes
const LOCK_FILE = path.join(process.cwd(), 'frontend-server.lock');
const PORT = process.env.PORT || 8000;
const app = express();

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

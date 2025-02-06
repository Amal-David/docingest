import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const urlLogPath = path.join(logsDir, 'url.log');

// URL logging endpoint
router.post('/url', async (req, res) => {
  try {
    const { url, timestamp, userAgent } = req.body;
    
    // Create log entry
    const logEntry = JSON.stringify({
      url,
      timestamp,
      userAgent,
      ip: req.ip || req.connection.remoteAddress,
      referrer: req.headers.referer || 'direct'
    }) + '\n';

    // Append to log file
    fs.appendFileSync(urlLogPath, logEntry);

    res.json({ success: true });
  } catch (error) {
    console.error('Error logging URL:', error);
    res.status(500).json({ error: 'Failed to log URL' });
  }
});

export default router; 
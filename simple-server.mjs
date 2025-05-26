import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 8000;

// Just serve static files
app.use(express.static(path.join(__dirname, 'build')));

// A single catch-all route with no parameters
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log("server running on port", PORT)

});
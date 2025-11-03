const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Always return index.html for any route - using express 4.x compatible syntax
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});

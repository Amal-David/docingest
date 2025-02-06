import express from 'express';
import path from 'path';
import docsRouter from './routes/docs';
import logsRouter from './routes/logs';

const app = express();
app.use(express.json());

// Routes
app.use('/api/docs', docsRouter);
app.use('/api/logs', logsRouter);

// Serve static files from the public directory
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
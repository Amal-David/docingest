import express from 'express';
import cors from 'cors';
import fs from 'fs-extra';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8001;

// Update storage path to use absolute path
const STORAGE_PATH = path.join(process.cwd(), 'storage', 'docs');
console.log('Storage path:', STORAGE_PATH);

// Ensure storage directory exists
fs.ensureDirSync(STORAGE_PATH);

// Rest of the server code... 
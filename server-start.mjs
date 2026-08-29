import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Set PORT for Render
process.env.NITRO_PORT = process.env.PORT || '3000';
process.env.NITRO_HOST = process.env.HOST || '0.0.0.0';

// Log server info
console.log('Starting server...');
console.log('PORT:', process.env.NITRO_PORT);
console.log('HOST:', process.env.NITRO_HOST);
console.log('NODE_ENV:', process.env.NODE_ENV);

// Import and start the server (convert Windows path to file URL)
const serverPath = resolve(__dirname, '.output/server/index.mjs');
const serverURL = pathToFileURL(serverPath).href;
await import(serverURL);

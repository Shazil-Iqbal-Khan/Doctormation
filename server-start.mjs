import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Set PORT for Render
process.env.NITRO_PORT = process.env.PORT || '3000';
process.env.NITRO_HOST = process.env.HOST || '0.0.0.0';

// Log server info
console.log('='.repeat(50));
console.log('Starting Medrelay Server...');
console.log('='.repeat(50));
console.log('PORT:', process.env.NITRO_PORT);
console.log('HOST:', process.env.NITRO_HOST);
console.log('NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('Working Directory:', process.cwd());

// Verify build output exists
const serverPath = resolve(__dirname, '.output/server/index.mjs');
const publicPath = resolve(__dirname, '.output/public');

console.log('='.repeat(50));
console.log('Checking build output...');
console.log('Server exists:', existsSync(serverPath) ? '✓' : '✗');
console.log('Public dir exists:', existsSync(publicPath) ? '✓' : '✗');
console.log('='.repeat(50));

if (!existsSync(serverPath)) {
  console.error('ERROR: Server file not found at:', serverPath);
  console.error('Make sure to run "npm run build" before starting the server');
  process.exit(1);
}

// Import and start the server (convert Windows path to file URL)
const serverURL = pathToFileURL(serverPath).href;
console.log('Loading server from:', serverPath);
console.log('='.repeat(50));

await import(serverURL);

import { execSync } from 'child_process';
import { cpSync, mkdirSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const staticDir = join(__dirname, 'static-dist');

console.log('🚀 Building static site...\n');

// Clean previous static build
console.log('🧹 Cleaning previous build...');
try {
  rmSync(staticDir, { recursive: true, force: true });
} catch (e) {
  // Directory doesn't exist, that's fine
}

// Build the app
console.log('📦 Running npm build...');
execSync('npm run build', { stdio: 'inherit' });

// Create static-dist directory
console.log('\n📁 Creating static-dist directory...');
mkdirSync(staticDir, { recursive: true });

// Start server temporarily to capture HTML
console.log('🌐 Starting temporary server...');
const server = execSync('node server-start.mjs', { 
  detached: true,
  stdio: 'ignore'
});

// Wait for server to start
await new Promise(resolve => setTimeout(resolve, 5000));

// Capture rendered HTML
console.log('📄 Capturing rendered HTML...');
try {
  const html = execSync('curl http://localhost:3000/', { encoding: 'utf8' });
  const fs = await import('fs');
  fs.writeFileSync(join(staticDir, 'index.html'), html);
  console.log('✓ HTML captured');
} catch (e) {
  console.error('Failed to capture HTML:', e.message);
}

// Kill the server
try {
  if (process.platform === 'win32') {
    execSync('taskkill /F /IM node.exe /T', { stdio: 'ignore' });
  } else {
    execSync('pkill -f "node server-start.mjs"', { stdio: 'ignore' });
  }
} catch (e) {
  // Server might already be stopped
}

// Copy assets
console.log('📋 Copying assets...');
cpSync(join(__dirname, '.output/public'), staticDir, { recursive: true, force: true });
cpSync(join(__dirname, 'public/favicon.ico'), join(staticDir, 'favicon.ico'));
cpSync(join(__dirname, 'public/robots.txt'), join(staticDir, 'robots.txt'));

console.log('\n✅ Static site built successfully!');
console.log('📁 Output directory: static-dist/');
console.log('\n🚀 Deploy this folder to Render Static Site');

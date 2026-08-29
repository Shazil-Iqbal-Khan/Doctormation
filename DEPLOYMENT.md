# Deployment Guide - Medrelay (Doctormation)

This guide explains how to deploy your application to Render.

## ✅ Current Configuration

The application is now **fully configured for Render deployment** with:
- Node.js server build (not Cloudflare Workers)
- Proper PORT environment variable handling
- Server startup script that works with Render's infrastructure
- Tested and working locally

## 🚀 Deploy to Render

### Option 1: Auto-Deploy with render.yaml (Recommended)

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com/
   - Sign in with your GitHub account (or create free account)

2. **Create New Web Service**
   - Click **"New +"** button
   - Select **"Web Service"**

3. **Connect Repository**
   - Select **"Shazil-Iqbal-Khan/Doctormation"** repository
   - Click **"Connect"**

4. **Render Will Auto-Detect Settings**
   - Render will read the `render.yaml` file
   - All settings will be pre-configured:
     - Name: `doctormation`
     - Build Command: `npm ci && npm run build`
     - Start Command: `node server-start.mjs`
     - Node Version: 20.11.0

5. **Click "Create Web Service"**
   - Render will start building your app
   - First deployment takes 5-10 minutes
   - Watch the logs for progress

6. **Your Site Will Be Live!**
   - URL will be: `https://doctormation.onrender.com`
   - Or your custom URL if configured

### Option 2: Manual Configuration

If auto-detection doesn't work, configure manually:

1. **Basic Settings:**
   ```
   Name: doctormation (or your choice)
   Region: Oregon (or closest to you)
   Branch: main
   Runtime: Node
   ```

2. **Build & Deploy:**
   ```
   Build Command: npm ci && npm run build
   Start Command: node server-start.mjs
   ```

3. **Environment Variables:**
   ```
   NODE_VERSION = 20.11.0
   NODE_ENV = production
   ```

4. **Advanced Settings:**
   - Auto-Deploy: Yes (deploy on every push to main)
   - Health Check Path: `/` (optional)

## 🔧 How It Works

1. **Build Process:**
   - Render runs `npm ci && npm run build`
   - Vite builds the app with `node-server` preset
   - Output goes to `.output/` directory

2. **Server Startup:**
   - `server-start.mjs` starts the Node.js server
   - Reads `PORT` from Render environment
   - Serves the app on `0.0.0.0` (all interfaces)

3. **Static Assets:**
   - CSS, JS, and images served from `.output/public/`
   - Server-side rendering for initial page loads

## 🐛 Troubleshooting

### "Not Found" Error
- **Cause:** Old Cloudflare build still cached
- **Fix:** In Render dashboard, click "Manual Deploy" → "Clear build cache & deploy"

### "Failed to Load Resources"
- **Cause:** Static assets not being served
- **Fix:** Check logs to ensure server started on correct PORT
- Verify `server-start.mjs` is being used as start command

### Build Fails
- **Cause:** npm dependencies issue
- **Fix:** Try changing build command to `npm install && npm run build`

### Server Won't Start
- Check Render logs for errors
- Ensure Node version is 20.11.0 or higher
- Verify `.output/server/index.mjs` exists after build

## 📊 Monitoring

After deployment:
1. Check **Logs** tab in Render dashboard
2. Look for: `➜ Listening on: http://0.0.0.0:XXXX/`
3. Visit your site URL
4. Check browser console for errors

## 🔄 Continuous Deployment

Every time you push to `main` branch:
1. Render automatically detects the push
2. Runs build process
3. Deploys new version
4. Zero-downtime deployment

## 🎯 Expected Outcome

When working correctly, you should see:
- ✅ Build completes in 3-5 minutes
- ✅ Server starts successfully
- ✅ Site loads with all styling
- ✅ Navigation works
- ✅ No 404 errors in browser console

## 🆘 Need Help?

If deployment fails:
1. Check Render build logs
2. Check Render server logs  
3. Compare with successful local test: `node server-start.mjs`
4. Ensure latest code is pushed to GitHub

---

**Your site is ready for deployment!** Just follow the steps above and it should work perfectly on Render.

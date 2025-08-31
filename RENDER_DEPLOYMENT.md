# Render.com Deployment Configuration

## Service Configuration
- **Service Type**: Web Service
- **Environment**: Node
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`
- **Node Version**: 16.20.0 (specified in .node-version)

## Environment Variables (Set in Render Dashboard)
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-render-app-name.onrender.com
NEXT_PUBLIC_SITE_NAME=Incisive-Cul
```

## Deployment Steps

### 1. Repository Setup
- Push your code to GitHub
- Ensure all files are committed including:
  - `.node-version`
  - `build.sh`
  - `start.sh`
  - `.env.example`

### 2. Render Service Creation
1. Go to [Render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `incisive-cul` (or your preferred name)
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Build Command**: `npm ci && npm run build`
   - **Start Command**: `npm start`

### 3. Environment Variables
Add these in the Render dashboard under Environment:
- `NODE_ENV` = `production`
- `NEXT_PUBLIC_SITE_URL` = `https://your-service-name.onrender.com`
- `NEXT_PUBLIC_SITE_NAME` = `Incisive-Cul`

### 4. Deploy
- Click "Create Web Service"
- Render will automatically build and deploy your application
- Your site will be available at: `https://your-service-name.onrender.com`

## Auto-Deploy
- Render automatically deploys when you push to the main branch
- Build logs are available in the Render dashboard
- Zero-downtime deployments

## Performance Notes
- First build may take 3-5 minutes
- Subsequent builds are faster due to caching
- Static assets are served efficiently
- Free tier includes 750 hours/month

## Custom Domain (Optional)
1. Add your custom domain in Render dashboard
2. Update `NEXT_PUBLIC_SITE_URL` environment variable
3. Configure DNS records as instructed

## Monitoring
- View logs in real-time from Render dashboard
- Monitor performance and uptime
- Set up alerts for failures

## Troubleshooting
- Check build logs if deployment fails
- Verify environment variables are set correctly
- Ensure Node.js version compatibility
- Check that all dependencies are in package.json

Your Next.js application is fully optimized for Render deployment! 🚀

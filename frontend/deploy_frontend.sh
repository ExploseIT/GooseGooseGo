#!/bin/bash
set -e  # Stop on error

# Go to script directory (your frontend folder)
cd "$(dirname "$0")"

echo "🔄 Building Next.js frontend..."
npm run build

echo "🚀 Restarting ggg_frontend with PM2..."
pm2 restart ggg_frontend

echo "💾 Saving PM2 process list..."
pm2 save

echo "✅ Frontend deployment complete."

# LUMI Landing Page - Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables
Create a `.env.local` file if you need to add any environment variables (e.g., analytics keys, form endpoints):

```bash
# Example environment variables
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_FORM_ENDPOINT=your_form_api_endpoint
```

### 2. Update Social Links
Update social media links in:
- `components/sections/Footer.tsx`
- `components/sections/MediaCharacter.tsx`

### 3. Configure Form Submission
Update the form submission logic in `components/sections/Waitlist.tsx` to integrate with your backend or service (Mailchimp, ConvertKit, custom API, etc.).

### 4. Add Analytics
Add your analytics code to `app/layout.tsx` if needed:
- Google Analytics
- Meta Pixel
- TikTok Pixel
- Hotjar
- PostHog

## Deployment to Vercel (Recommended)

### Option 1: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Configure project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Add environment variables if needed
7. Click "Deploy"

### Vercel Configuration (Optional)

Create `vercel.json` for custom configuration:

```json
{
  "github": {
    "silent": true
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## Deployment to Other Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

Netlify configuration (`netlify.toml`):

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Railway

1. Create account at [railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Railway auto-detects Next.js
4. Set environment variables in Railway dashboard
5. Deploy automatically on push

### DigitalOcean App Platform

1. Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
2. Create new app from GitHub repository
3. Configure:
   - Build Command: `npm run build`
   - Run Command: `npm start`
4. Set environment variables
5. Deploy

## Performance Optimization

### Image Optimization

Images are automatically optimized by Next.js. For additional optimization:

```bash
# Install sharp for better image optimization
npm install sharp
```

### Font Optimization

Fonts are already optimized using `next/font/google`. No additional configuration needed.

### Bundle Analysis

Analyze your bundle size:

```bash
# Install bundle analyzer
npm install @next/bundle-analyzer

# Add to next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

## Domain Configuration

### Custom Domain on Vercel

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### SSL Certificate

SSL is automatically provided by Vercel, Netlify, and most other platforms.

## Post-Deployment Tasks

### 1. Test the Site
- Test all sections and navigation
- Verify form submission works
- Check mobile responsiveness
- Test on different browsers
- Verify analytics tracking

### 2. SEO Setup
- Submit sitemap to Google Search Console
- Add site to Google Analytics
- Configure social media preview cards
- Add structured data if needed

### 3. Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error tracking (Sentry)
- Monitor Core Web Vitals in Google Search Console

### 4. Performance Testing
- Run Lighthouse audit
- Test page speed on PageSpeed Insights
- Verify Core Web Vitals scores

## Continuous Integration

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

## Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Issues

If port 3000 is in use:

```bash
# Specify different port
PORT=3001 npm run dev
```

### Image Not Loading

Verify the image path is correct:
- Development: `/assets/lumi1.png`
- Must be in `public` folder

## Support

For issues or questions:
- Email: hello@simplara.com
- Documentation: Next.js docs at [nextjs.org/docs](https://nextjs.org/docs)

## Version Control

Recommended `.gitignore` additions:

```
# Environment
.env.local
.env.production

# Vercel
.vercel

# Testing
coverage/

# IDE
.vscode/
.idea/
```

---

**Last Updated**: June 2026  
**Next.js Version**: 15.5.19  
**Node Version**: 18+

# Cloudflare Pages Deployment

## Build Settings
- Framework preset: None
- Build command: npm run check && npm run build
- Build output directory: out
- Node.js version: 20

## Custom Domain
- site.agnxxt.com

## Recommended Cloudflare Features
- Automatic HTTPS
- Brotli compression
- Early Hints
- Web Analytics

## Cache Rules
- HTML: no-cache
- Static assets: cache aggressively

## Deploy Command (local)

```bash
npm install
npm run check
npm run build
npx wrangler pages deploy out
```

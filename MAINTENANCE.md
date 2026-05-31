# drhaowu.com Maintenance & Archive Guide

## Runtime Baseline

- Node.js: `20.x` (required)
- npm: `10.x` (recommended)
- Framework: Astro `4.x`

This project is not stable on Node `22.x` with the current Astro dependency set.

## Quick Start

1. Use Node 20:
   - `nvm use` (reads `.nvmrc`)
2. Install dependencies:
   - `npm install`
3. Run locally:
   - `npm run dev`
4. Build for production:
   - `npm run build`

## Deployment Baseline

- Domain: `https://drhaowu.com/`
- `site` is configured in `astro.config.mjs`
- Static output can be published from `dist/`

## Archive Checklist

For each maintenance cycle (monthly/quarterly), archive:

1. Source snapshot:
   - Git tag (example): `archive-YYYYMMDD`
2. Dependency lock:
   - Commit `package-lock.json`
3. Production artifact:
   - Keep one `dist/` export in your release storage
4. Ops notes:
   - Record date, Node version, and deployment target

## Recovery Procedure

If local startup fails:

1. Confirm Node version is `20.x`
2. Remove old dependency folder:
   - `rm -rf node_modules`
3. Reinstall dependencies:
   - `npm install`
4. Rebuild:
   - `npm run build`


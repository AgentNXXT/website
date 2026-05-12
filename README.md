# AGenNext Website

Official website for the AGenNext ecosystem.

## Overview

This repository contains the public-facing landing page and documentation for:

- Platform
- Agents
- Protocols
- Skills
- Multimodal AI
- Enterprise
- Research
- Monetization

The site presents AGenNext as a unified, cloud-native, framework-agnostic AI agent operating system.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Local Development

Install dependencies:
```bash
npm install
```
Run development server:
```bash
npm run dev
```

## Build & Export

Build production app:
```bash
npm run build
```
Export static site for GitHub Pages:
```bash
NEXT_PUBLIC_BASE_PATH=/website npm run export
```
Start local preview:
```bash
npx serve out
```

## Deployment to GitHub Pages

1. Ensure `next.config.js` sets `output: 'export'` and `basePath: '/website'`.
2. The workflow `.github/workflows/ci-cd-ghpages.yml` builds and publishes `out/` to `gh-pages` automatically on push.
3. Go to **Settings → Pages**, select branch `gh-pages` and folder `/ (root)`.
4. Your site will be live at:
```
https://<username>.github.io/website/
```

## CI/CD

- Workflow runs on push to `main`.
- Builds Next.js site, exports static HTML, and deploys to GitHub Pages.

## Repository Links

- [Platform](https://github.com/AGenNext/Platform)
- [Protocols](https://github.com/AGenNext/AGenNext-Protocols)
- [Skill Registry](https://github.com/AGenNext/AGenNext-SkillRegistry)
- [AgentCode](https://github.com/AGenNext/AgentCode)
- [CodeAssist](https://github.com/AGenNext/CodeAssist)
- [CodeReview](https://github.com/AGenNext/AGenNext-CodeReview)
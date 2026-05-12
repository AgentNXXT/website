# AGenNext Website

Official Next.js + Tailwind website for the AGenNext ecosystem.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run export
```

## GitHub Pages Deployment

1. Configure `NEXT_PUBLIC_BASE_PATH` environment variable (optional for Pages):

```bash
export NEXT_PUBLIC_BASE_PATH=/website
```

2. Push to `main` branch.
3. GitHub Actions workflow `ci-cd-ghpages.yml` will automatically build and export the site.
4. Workflow publishes the `out/` folder to the `gh-pages` branch.
5. Go to **Settings → Pages** and select branch: `gh-pages`, folder: `/ (root)`.
6. Access your site at:
```
https://<username>.github.io/<repository-name>/
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
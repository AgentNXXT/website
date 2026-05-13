# AGenNext Website

Official website for the AGenNext ecosystem.

> Build governed AI agent systems for production.

The AGenNext website presents the platform as enterprise-grade infrastructure for building, governing, and operating AI agent systems. The design language is inspired by IBM's enterprise aesthetic: clean typography, structured layouts, and high-contrast messaging.

## Positioning

AGenNext is a composable open-source platform for:

- Agent protocols (MCP, A2A, AG-UI)
- Skill registries and reusable capabilities
- Workflow orchestration
- Runtime governance and policy enforcement
- Identity, authorization, and auditability
- Enterprise deployment and hardening

## Website Sections

- Hero
- Why AGenNext
- Architecture
- Open-Source Modules
- Enterprise CTA

## Design System

- IBM Blue (`#0f62fe`)
- Light neutral backgrounds
- Large, confident typography
- Grid-based layouts
- Minimal motion and high readability

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## GitHub Pages Deployment

```bash
NEXT_PUBLIC_BASE_PATH=/website npm run export
npx serve out
```

Deployment is automated through `.github/workflows/ci-cd-ghpages.yml`.

## Repository Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
public/
```

## Key Repositories

- https://github.com/AGenNext/Platform
- https://github.com/AGenNext/AGenNext-Protocols
- https://github.com/AGenNext/AGenNext-SkillRegistry
- https://github.com/AGenNext/AgentCode
- https://github.com/AGenNext/CodeAssist
- https://github.com/AGenNext/AGenNext-CodeReview
- https://github.com/AGenNext/AGenNext-Enterprise

## Repository

https://github.com/AGenNext/website

## License

MIT License.

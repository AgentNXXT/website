# AGenNext Agent Site

Official website for the AGenNext ecosystem and trusted AI agent marketplace.

> Discover, verify, and run governed AI agents.

AGenNext combines a DID-first agent marketplace catalog with a model-agnostic AgentGraph platform for composing agents, tools, skills, protocols, and enterprise governance into production-ready workflows.

## Live Site

- Production site: https://site.agnxxt.com/
- Catalog route: https://site.agnxxt.com/catalog/

If deploying through GitHub Pages without a custom domain, the site may also be available at:

```text
https://agennext.github.io/Agent-Site/
```

## What This Site Includes

- Homepage for AGenNext positioning
- Searchable and filterable agent catalog
- Official-source agent references
- DID-based canonical identifiers
- Publisher and capability metadata
- GitHub Pages deployment workflow
- Static Next.js export support

## Agent Marketplace Catalog

The catalog lives at:

```text
app/catalog/
  agents.ts              # Agent catalog data
  CatalogExplorer.tsx    # Client-side search and filters
  page.tsx               # Catalog route
```

Each agent listing includes:

- `canonical_id` — canonical DID for the agent
- `did` — agent decentralized identifier
- `publisher_did` — publisher decentralized identifier
- `source_repository` — official project source
- `categories`
- `capabilities`
- `verification_status`
- `lifecycle_state`

## Current Catalog Sources

The starter catalog references official sources from:

- Docker cagent
- Google ADK
- LangGraph
- CrewAI
- Microsoft AutoGen
- Agno
- DSPy
- Langflow
- Dify
- LlamaIndex

## Search and Filters

The catalog supports client-side search by:

- Agent name
- DID
- Publisher
- Capability
- Category
- Repository URL

It also supports filters for:

- Category
- Capability
- Publisher
- Verification status

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
```

The site is configured for static export through `next.config.js`.

## GitHub Pages Deployment

Deployment is configured through GitHub Actions.

- Workflow: `.github/workflows/deploy.yml`
- Static output directory: `out/`
- Custom domain: `site.agnxxt.com`

To activate or verify deployment:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open **Actions** and run the deployment workflow if needed.

## Repository Structure

```text
app/
  catalog/
    agents.ts
    CatalogExplorer.tsx
    page.tsx
  globals.css
  layout.tsx
  page.tsx
public/
  CNAME
.github/workflows/
  deploy.yml
```

## Related Repositories

- https://github.com/AGenNext/Platform
- https://github.com/AGenNext/AGenNext-Protocols
- https://github.com/AGenNext/AGenNext-SkillRegistry
- https://github.com/AGenNext/AgentCode
- https://github.com/AGenNext/CodeAssist
- https://github.com/AGenNext/AGenNext-CodeReview
- https://github.com/AGenNext/AGenNext-Enterprise
- https://github.com/AGenNext/agent-regitsry

## Roadmap

- Add registry-backed catalog API
- Add SurrealDB-backed search
- Add DID document resolution
- Add verifiable credential display
- Add publisher pages
- Add individual agent detail pages
- Add deployment and install actions

## License

MIT License.

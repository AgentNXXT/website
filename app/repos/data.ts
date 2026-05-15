export const repoPages = [
  {
    slug: 'agent-marketplace-catalog',
    name: 'Agent Marketplace Catalog',
    repo: 'Agent-Site',
    summary: 'Search verified AI agents by DID, publisher, category, capability, and official source repository.',
    focus: 'Discovery, trust, and canonical identity for agent ecosystems.',
    outcomes: ['Verified agent discovery', 'DID-based identity', 'Publisher and capability metadata'],
    href: '/catalog',
  },
  {
    slug: 'platform',
    name: 'Platform',
    repo: 'Platform',
    summary: 'Control plane for orchestration, authentication, policies, traces, usage, and runner handoff.',
    focus: 'The operating layer for production agent workflows.',
    outcomes: ['Workflow orchestration', 'Policy and governance controls', 'Runtime handoff and observability'],
    href: 'https://github.com/AGenNext/Platform',
  },
  {
    slug: 'protocols',
    name: 'AGenNext Protocols',
    repo: 'AGenNext-Protocols',
    summary: 'Protocols for MCP, A2A, AG-UI, commerce, payments, authorization, identity, decentralized identity, and discovery.',
    focus: 'Interoperability primitives for the Agent World.',
    outcomes: ['Agent communication', 'Identity and authorization', 'Protocol-level interoperability'],
    href: 'https://github.com/AGenNext/AGenNext-Protocols',
  },
  {
    slug: 'skill-registry',
    name: 'Skill Registry',
    repo: 'AGenNext-SkillRegistry',
    summary: 'Reusable skills packaged as portable building blocks across agent runtimes.',
    focus: 'A shared capability layer for composable agents.',
    outcomes: ['Reusable skills', 'Portable capabilities', 'Runtime-agnostic building blocks'],
    href: 'https://github.com/AGenNext/AGenNext-SkillRegistry',
  },
  {
    slug: 'agentcode',
    name: 'AgentCode',
    repo: 'AgentCode',
    summary: 'Coding agents powered by OpenHands, LangGraph, and decision intelligence loops.',
    focus: 'Agentic software engineering and assisted code workflows.',
    outcomes: ['Coding automation', 'Decision loops', 'Developer workflow support'],
    href: 'https://github.com/AGenNext/AgentCode',
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    repo: 'AGenNext-Enterprise',
    summary: 'Governance, deployment hardening, controls, and production adoption patterns.',
    focus: 'Enterprise readiness for agent systems.',
    outcomes: ['Governance patterns', 'Production hardening', 'Adoption guidance'],
    href: 'https://github.com/AGenNext/AGenNext-Enterprise',
  },
]

export function getRepoPage(slug: string) {
  return repoPages.find((repo) => repo.slug === slug)
}

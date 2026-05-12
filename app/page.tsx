const config = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // configurable base path
};

const repos = [
  ['Platform', 'SDK/model agnostic control plane for visual workflow configuration, catalogs, auth, policies, traces, usage, and Runner handoff.', 'https://github.com/AGenNext/Platform'],
  ['AGenNext Protocols', 'Protocol library covering MCP, A2A, AG-UI, commerce, payments, authorization, identity, decentralized identity, and discovery.', 'https://github.com/AGenNext/AGenNext-Protocols'],
  ['Skill Registry', 'Reusable agent skill catalog for packaging capabilities as portable building blocks across agent runtimes.', 'https://github.com/AGenNext/AGenNext-SkillRegistry'],
  ['AgentCode', 'OpenHands SDK and LangGraph runtime for coding agents with decision intelligence and self-improvement loops.', 'https://github.com/AGenNext/AgentCode'],
  ['CodeAssist', 'Developer assistance and coding workflow automation for AI-assisted software delivery.', 'https://github.com/AGenNext/CodeAssist'],
  ['CodeReview', 'AI-assisted code review workflows for quality, security, maintainability, and delivery confidence.', 'https://github.com/AGenNext/AGenNext-CodeReview'],
  ['DocOcr', 'Document OCR agent capability for extracting structured knowledge from files and scanned content.', 'https://github.com/AGenNext/AGenNext-DocOcr'],
  ['WebCrawl', 'Web crawling agent capability for collecting, transforming, and grounding external knowledge.', 'https://github.com/AGenNext/AGenNext-WebCrawl'],
  ['Enterprise', 'Enterprise packaging for governance, controls, deployment hardening, and production adoption.', 'https://github.com/AGenNext/AGenNext-Enterprise'],
  ['Professional', 'Professional templates and workflows for teams building practical agent applications.', 'https://github.com/AGenNext/AGenNext-Professional'],
];

// Example of using config.basePath in links:
// <a href={`${config.basePath}/platform`}>Platform</a>

export default config;
import type { Metadata } from 'next'
import SiteHeader from './components/SiteHeader'

export const metadata: Metadata = {
  title: 'Enterprise Agent Lifecycle Governance Platform | AGenNext',
  description:
  'An Open Source Code First Unified Agent Platform to Build, Test, Deploy, Eval, Secure & Govern Production Grade Enterprise Autonomous Agents & AI Native Applications & Artifacts.',
}

const siteUrl = 'https://site.agnxxt.com'

const whyUs = [
  {
    id: 'cloud-native',
    label: 'Cloud Native',
    title: 'Cloud native foundations for production agent systems',
    description:
      'Deploy, observe, govern, and operate agent systems with infrastructure patterns designed for scale, reliability, and control.',
    href: `${siteUrl}/cloud-native/`,
  },
  {
    id: 'composable',
    label: 'Composable',
    title: 'Composable building blocks for the Agent World',
    description:
      'Connect agents, tools, models, memory, protocols, prompts, and skills as reusable modules that can evolve independently.',
    href: `${siteUrl}/composable/`,
  },
  {
    id: 'full-stack',
    label: 'Full Stack',
    title: 'Full stack infrastructure from research to operations',
    description:
      'Support the agent lifecycle across discovery, orchestration, evaluation, governance, deployment, monitoring, and user experience.',
    href: `${siteUrl}/full-stack/`,
  },
  {
    id: 'frontier-research',
    label: 'Frontier Research',
    title: 'Frontier research grounded in real workflows',
    description:
      'Translate research in autonomy, context, reliability, governance, and trust into practical platform capabilities.',
    href: `${siteUrl}/frontier-research/`,
  },
  {
    id: 'human-first',
    label: 'Human First',
    title: 'Human-first autonomy for accountable systems',
    description:
      'Keep people, teams, trust, governance, and practical outcomes at the center of every agent workflow.',
    href: `${siteUrl}/human-first/`,
  },
]

const concepts = [
  ['Frontier AI Which Puts Humans First', 'Research notes on designing frontier AI systems around human needs, trust, and outcomes.'],
  ['Reliable AI', 'Ideas on dependable AI systems, production quality, evaluation, monitoring, and failure handling.'],
  ['Contextual AI', 'Perspectives on AI systems that understand context, memory, workflow state, and user intent.'],
  ['Construction AI', 'How agentic AI can support construction planning, site intelligence, documentation, safety, and delivery workflows.'],
]

const offerings = [
  ['Agent Marketplace Catalog', 'App', 'Search verified AI agents by DID, publisher, category, capability, and official source repository.', `${siteUrl}/catalog/`],
  ['Platform', 'Runtime', 'Control plane for orchestration, authentication, policies, traces, usage, and runner handoff.', `${siteUrl}/repos/`],
  ['AGenNext Protocols', 'Protocol Specific Agent', 'MCP, A2A, AG-UI, commerce, payments, authorization, identity, decentralized identity, and discovery.', `${siteUrl}/repos/agent-protocols/`],
  ['Skill Registry', 'Skill', 'Reusable skills packaged as portable building blocks across agent runtimes.', `${siteUrl}/repos/agent-skills/`],
  ['AgentCode', 'Agent', 'Coding agents powered by OpenHands, LangGraph, and decision intelligence loops.', `${siteUrl}/repos/agent-builder/`],
  ['Enterprise', 'Multi Team', 'Governance, deployment hardening, controls, and production adoption patterns.', `${siteUrl}/repos/agent-ops/`],
]

const trending = [
  ['Perspective', 'From agent experiments to intelligent enterprise systems', 'How teams can move from isolated prototypes to governed, reusable agent platforms.', '#why-us', 'light'],
  ['Announcement', 'Offerings catalog for apps, agents, APIs, prompts, and skills', 'Explore platform building blocks across App, Agent, API, SDK, Runtime, CLI, MCP, Prompt, and Skill categories.', '#offerings', 'accent'],
  ['Research Report', 'Reliable AI for production agent workflows', 'Evaluation, observability, governance, and lifecycle management for dependable autonomous systems.', '#concepts', 'dark'],
  ['Research Report', 'Human-first autonomous agent systems', 'A practical framing for trust, governance, and human oversight in the Agent World.', '#why-us', 'image'],
]

const faqs = [
  ['What is AGenNext?', 'AGenNext is an Open Source Code First Unified Agent Platform to Build, Test, Deploy, Eval, Secure & Govern Production Grade Enterprise Autonomous Agents & AI Native Applications & Artifacts.'],
  ['Who is AGenNext for?', 'AGenNext serves developers building AI agents, enterprises needing governance, researchers exploring autonomous systems, and teams deploying production-grade agent solutions.'],
  ['What are the main differentiators?', 'Our differentiators include Cloud Native architecture, Composable design, Full Stack capabilities, Frontier Research, and Human First approach.'],
  ['What are offerings?', 'Offerings include apps, agents, APIs, SDKs, runtimes, CLIs, MCP components, prompts, skills, and task or industry-specific agents.'],
  ['Is the platform open source?', 'Yes, AGenNext is open source. Many repositories are public and available for community contribution.'],
  ['How do I get started?', 'Start with the Offerings catalog or repository pages, then follow the GitHub README links for implementation details.'],
  ['What is Agent Lifecycle Governance?', 'Agent Lifecycle Governance covers the complete lifecycle - from building, testing, deployment, evaluation, security, and ongoing governance of production-grade autonomous agents.'],
  ['What AI Native Applications can I build?', 'You can build AI agents, automation solutions, MCP-powered tools, and enterprise-grade autonomous systems tailored to your business needs.'],
  ['For Enterprises', 'A governance-ready platform with security, compliance, and enterprise-grade agent management capabilities.'],
  ['For Developers', 'Open source SDKs, APIs, and tools to build, test and deploy autonomous agents.'],
  ['For Researchers', 'Frontier research capabilities and platform for experimenting with agent behaviors.'],
  ['Familiarity — We Speak Your Language', 'We teach AI in a way that is clear, practical, and easy to understand for business owners, creators, working professionals, students, and non-technical beginners.'],
  ['Relevance — We Teach What Actually Works', 'We focus on real-world application - how AI is used in actual business environments, which tools are dependable, and where AI systems commonly fail.'],
  ['Practical — No Jargon. No Fluff. Just Action', 'Every lesson is designed to help you do something useful right away. No textbook-heavy theory or buzzwords - just implementation.'],
  ['Useful — Turn AI Skills Into Income', 'We show you what clients and employers are paying for, which AI services are in highest demand, and how to package skills into sellable solutions.'],
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section id="top" className="border-b border-white/15 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:px-8 lg:py-32">
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Enterprise Agent Lifecycle Governance Platform.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-300">
              An Open Source Code First Unified Agent Platform to Build, Test, Deploy, Eval, Secure & Govern Production Grade Enterprise Autonomous Agents & AI Native Applications & Artifacts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#offerings" className="bg-black border border-white/30 px-8 py-4 text-base font-semibold text-white rounded transition hover:bg-white hover:text-black hover:scale-105">Get Started</a>
              <a href="#trending" className="bg-black border border-white/30 px-8 py-4 text-base font-medium text-white rounded transition hover:bg-white hover:text-black hover:scale-105">View Documentation</a>
            </div>
        </div>
      </section>

      <section id="trending" className="border-b border-white/15 bg-black px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">Trending</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">What’s trending in the Agent World</h2>
            </div>
            <a href="#offerings" className="inline-flex items-center gap-3 font-medium text-white">View all work <span className="bg-[#a100ff] px-2 py-1">›</span></a>
          </div>

          <div className="mt-14 flex gap-8 overflow-x-auto pb-6">
            {trending.map(([type, title, description, href, variant]) => (
              <a
                key={title}
                href={href}
                className={`group flex h-[360px] w-[330px] shrink-0 flex-col justify-between p-7 ${
                  variant === 'light'
                    ? 'bg-white text-black'
                    : variant === 'accent'
                      ? 'bg-[#4b006e] text-white'
                      : variant === 'image'
                        ? 'bg-[linear-gradient(135deg,#ffffff_0%,#d7c2ff_40%,#2a0044_100%)] text-black'
                        : 'border border-white/15 bg-[#050505] text-white'
                }`}
              >
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${variant === 'light' || variant === 'image' ? 'text-neutral-700' : 'text-zinc-300'}`}>{type}</p>
                  <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-tight">{title}</h3>
                  <p className={`mt-6 leading-7 ${variant === 'light' || variant === 'image' ? 'text-neutral-700' : 'text-zinc-200'}`}>{description}</p>
                </div>
                <p className="text-sm font-semibold group-hover:underline">Expand →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="border-b border-white/15 bg-black px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">Blog</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">Latest Updates</h2>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <a href="#" className="group block">
              <div className="aspect-video overflow-hidden rounded-lg bg-zinc-900">
                <div className="h-full w-full bg-zinc-800 group-hover:bg-zinc-700 transition" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Getting Started with Agent Governance</h3>
              <p className="mt-2 text-zinc-400">Learn the fundamentals of building and managing autonomous agents in production.</p>
            </a>
            <a href="#" className="group block">
              <div className="aspect-video overflow-hidden rounded-lg bg-zinc-900">
                <div className="h-full w-full bg-zinc-800 group-hover:bg-zinc-700 transition" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">MCP Integration Best Practices</h3>
              <p className="mt-2 text-zinc-400">How to integrate Model Context Protocol into your agent workflows.</p>
            </a>
            <a href="#" className="group block">
              <div className="aspect-video overflow-hidden rounded-lg bg-zinc-900">
                <div className="h-full w-full bg-zinc-800 group-hover:bg-zinc-700 transition" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Building Enterprise Agents</h3>
              <p className="mt-2 text-zinc-400">A comprehensive guide to building production-grade autonomous agents.</p>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white text-neutral-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-semibold tracking-[-0.03em]">AGenNext for Businesses</h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mt-6 text-lg text-zinc-600">
                If your business is looking for AI automation, custom AI agents, internal knowledge assistants, website chatbots, or workflow optimization — we design and implement practical AI solutions.
              </p>
              <ul className="mt-8 space-y-4 text-zinc-600">
                <li>✦ Custom GPT-powered assistants</li>
                <li>✦ Internal knowledge bots for teams</li>
                <li>✦ CRM and workflow automations</li>
                <li>✦ Customer support chatbots</li>
                <li>✦ Lead qualification systems</li>
                <li>✦ AI-powered reporting and insights</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Why Work With Us?</h3>
              <ul className="mt-6 space-y-4 text-zinc-600">
                <li>✓ Built for your specific business processes</li>
                <li>✓ Delivered by vetted AI specialists</li>
                <li>✓ Focused on measurable business outcomes</li>
                <li>✓ Scalable from prototype to production</li>
              </ul>
              <div className="mt-10 rounded-lg bg-zinc-50 p-6">
                <p className="font-medium">AGenNext for Businesses</p>
                <p className="mt-2 text-zinc-600">Whether you're exploring your first AI use case or scaling existing automation, we can help you build solutions that create real operational value.</p>
                <a href="https://github.com/AGenNext/Agent-Commerce" className="mt-4 inline-block text-sm text-[#a100ff] hover:underline">Explore Agent-Commerce →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offerings" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div className="border-t border-white pt-5">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-400">Offerings</p>
          </div>
          <div>
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">Searchable building blocks for agent systems.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">Offerings include apps, agents, APIs, SDKs, runtimes, CLIs, MCP components, prompts, skills, and role, task, industry, or protocol-specific agents.</p>
            <div className="mt-10 grid border-l border-t border-white/15 md:grid-cols-2 xl:grid-cols-3">
              {offerings.map(([title, type, description, href]) => (
                <a key={title} href={href} className="group min-h-[280px] border-b border-r border-white/15 p-7 transition hover:bg-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{type}</p>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight group-hover:underline">{title}</h3>
                  <p className="mt-4 leading-7 text-zinc-400">{description}</p>
                  <p className="mt-8 text-sm text-zinc-500">View offering →</p>
                </a>
              ))}
            </div>
            <a href={`${siteUrl}/repos/`} className="mt-10 inline-flex border border-white/20 px-6 py-3 font-medium transition hover:bg-white hover:text-black">Explore all offerings</a>
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-white text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div className="border-t border-neutral-950 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">Why Us</p>
            </div>
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">Five differentiators for enterprise agent systems.</h2>
              <div className="mt-10 grid border-l border-t border-neutral-300 md:grid-cols-2 xl:grid-cols-3">
                {whyUs.map((item, index) => (
                  <a key={item.id} id={item.id} href={item.href} className="group min-h-[260px] border-b border-r border-neutral-300 p-7 transition hover:bg-neutral-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-8 text-2xl font-semibold tracking-tight group-hover:underline">{item.label}</h3>
                    <p className="mt-4 leading-7 text-neutral-700">{item.description}</p>
                    <p className="mt-8 text-sm text-neutral-500">Read editorial →</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="concepts" className="bg-white text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div className="border-t border-neutral-950 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">Concepts</p>
            </div>
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">Ideas shaping the Agent World.</h2>
              <div className="mt-10 grid border-l border-t border-neutral-300 md:grid-cols-2">
                {concepts.map(([title, description]) => (
                  <article key={title} className="border-b border-r border-neutral-300 p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Concept</p>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h3>
                    <p className="mt-4 leading-7 text-neutral-700">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div className="border-t border-neutral-950 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">FAQ</p>
            </div>
            <div>
              <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl">Questions before you explore.</h2>
              <div className="mt-10 border-t border-neutral-300">
                {faqs.map(([question, answer]) => (
                  <details key={question} className="group border-b border-neutral-300 py-6">
                    <summary className="cursor-pointer list-none text-xl font-semibold tracking-tight">{question}</summary>
                    <p className="mt-4 max-w-3xl leading-7 text-neutral-700">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

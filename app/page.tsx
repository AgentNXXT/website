const pillars = [
  {
    id: 'cloud-native',
    label: 'Cloud Native',
    title: 'Cloud Native Agent Platform',
    description:
      'Build and deploy agent systems with infrastructure patterns designed for modern cloud environments, automation, observability, and scalable operations.',
  },
  {
    id: 'composable',
    label: 'Composable',
    title: 'Composable Agent Architecture',
    description:
      'Connect agents, tools, models, memory, protocols, and workflows as modular building blocks that can evolve independently.',
  },
  {
    id: 'full-stack',
    label: 'Full Stack',
    title: 'Full Stack Agent Infrastructure',
    description:
      'Support the full agent lifecycle from discovery and orchestration to governance, deployment, monitoring, and production readiness.',
  },
  {
    id: 'frontier-agent-platform',
    label: 'Frontier Agent Platform',
    title: 'Frontier Agent Platform',
    description:
      'Create advanced agent systems for real-world workflows, enterprise use cases, and human-centered AI applications.',
  },
  {
    id: 'human-first-world',
    label: 'Human First World',
    title: 'Built For A Human First World',
    description:
      'Design AI systems that keep people, teams, trust, and practical outcomes at the center of every agent workflow.',
  },
]

const modules = [
  ['Agent Marketplace Catalog', 'Search verified AI agents by DID, publisher, category, capability, and official source repository.', '/catalog'],
  ['Platform', 'Control plane for orchestration, auth, policies, traces, usage, and runner handoff.', 'https://github.com/AGenNext/Platform'],
  ['AGenNext Protocols', 'MCP, A2A, AG-UI, commerce, payments, authorization, identity, decentralized identity, and discovery.', 'https://github.com/AGenNext/AGenNext-Protocols'],
  ['Skill Registry', 'Reusable skills packaged as portable building blocks across agent runtimes.', 'https://github.com/AGenNext/AGenNext-SkillRegistry'],
  ['AgentCode', 'Coding agents powered by OpenHands, LangGraph, and decision intelligence loops.', 'https://github.com/AGenNext/AgentCode'],
  ['Enterprise', 'Governance, deployment hardening, controls, and production adoption patterns.', 'https://github.com/AGenNext/AGenNext-Enterprise'],
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="AGenNext home">
            <span className="grid h-8 w-8 place-items-center rounded-md border border-white/15 bg-white text-sm font-semibold text-black">AG</span>
            <span className="text-lg font-semibold tracking-tight">AGenNext</span>
          </a>
          <nav className="hidden items-center gap-5 text-sm text-zinc-400 lg:flex">
            {pillars.map((pillar) => (
              <a key={pillar.id} href={`#${pillar.id}`} className="transition hover:text-white">
                {pillar.label}
              </a>
            ))}
            <a href="#modules" className="transition hover:text-white">Modules</a>
            <a href="https://github.com/AGenNext" className="rounded-lg border border-white/10 px-4 py-2 text-white transition hover:bg-white hover:text-black">GitHub</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
              Cloud Native · Composable · Full Stack
            </div>
            <h1 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Frontier Agent Platform For Human First World.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              AGenNext is a cloud native, composable, full stack frontier agent platform for building human-first AI systems.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#cloud-native" className="rounded-lg bg-white px-6 py-3 text-center font-medium text-black transition hover:bg-zinc-200">
                Explore Platform
              </a>
              <a href="#modules" className="rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3 text-center font-medium transition hover:bg-white/10">
                View Modules
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-12 md:grid-cols-5 lg:px-8">
        {pillars.map((pillar) => (
          <a key={pillar.id} href={`#${pillar.id}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]">
            <div className="text-lg font-semibold tracking-tight">{pillar.label}</div>
            <div className="mt-2 text-sm text-zinc-400">#{pillar.id}</div>
          </a>
        ))}
      </section>

      {pillars.map((pillar, index) => (
        <section key={pillar.id} id={pillar.id} className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">{String(index + 1).padStart(2, '0')} · {pillar.label}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{pillar.title}</h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-lg leading-8 text-zinc-300">{pillar.description}</p>
            </div>
          </div>
        </section>
      ))}

      <section id="modules" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 pt-12 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Open source</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Core Modules</h2>
          </div>
          <a href="https://github.com/AGenNext" className="text-sm font-medium text-zinc-400 transition hover:text-white">View organization →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map(([title, description, href]) => (
            <a
              key={title}
              href={href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <span className="text-zinc-600 transition group-hover:translate-x-1 group-hover:text-white">→</span>
              </div>
              <p className="mt-4 leading-7 text-zinc-400">{description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

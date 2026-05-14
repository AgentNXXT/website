const repos = [
  ['Agent Marketplace Catalog', 'Search verified AI agents by DID, publisher, category, capability, and official source repository.', '/catalog'],
  ['Platform', 'Model-agnostic control plane for AgentNXT workflows, auth, policies, traces, usage, and runner handoff.', 'https://github.com/AGenNext/Platform'],
  ['AgentNXT Protocols', 'MCP, A2A, AG-UI, commerce, payments, authorization, identity, decentralized identity, and discovery.', 'https://github.com/AGenNext/AGenNext-Protocols'],
  ['Skill Registry', 'Reusable skills packaged as portable building blocks across AgentNXT runtimes.', 'https://github.com/AGenNext/AGenNext-SkillRegistry'],
  ['AgentCode', 'Coding agents powered by OpenHands, LangGraph, and decision intelligence loops.', 'https://github.com/AGenNext/AgentCode'],
  ['Enterprise', 'Governance, deployment hardening, controls, and production adoption patterns.', 'https://github.com/AGenNext/AGenNext-Enterprise'],
]

const stats = [
  ['AgentNXT', 'Human-machine coexistence'],
  ['Physical + Digital', 'Shared context layer'],
  ['Open Source', 'Inspectable stack'],
]

const features = [
  ['Human-machine coexistence', 'A shared operating layer where humans and machines learn from each other and improve together.'],
  ['Physical + digital context', 'Connect browsers, devices, sensors, apps, files, tools, and enterprise workflows into one AgentNXT environment.'],
  ['Governed evolution', 'Use memory, verification, policy, observability, and approval paths so collaboration becomes safer over time.'],
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="AgentNXT home">
            <span className="grid h-8 w-8 place-items-center rounded-md border border-white/15 bg-white text-sm font-semibold text-black">NX</span>
            <span className="text-lg font-semibold tracking-tight">AgentNXT</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a href="/features" className="transition hover:text-white">AgentNXT</a>
            <a href="/catalog" className="transition hover:text-white">Catalog</a>
            <a href="#platform" className="transition hover:text-white">Platform</a>
            <a href="#modules" className="transition hover:text-white">Modules</a>
            <a href="https://github.com/AGenNext" className="rounded-lg border border-white/10 px-4 py-2 text-white transition hover:bg-white hover:text-black">GitHub</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white/10 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-32">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
              AgentNXT
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              The platform where humans and machines coexist and make each other better.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              AgentNXT is building a unified physical and digital environment where humans, agents, devices, browsers, tools, memory, and decisions work together.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/features" className="rounded-lg bg-white px-6 py-3 text-center font-medium text-black transition hover:bg-zinc-200">
                Explore AgentNXT
              </a>
              <a href="/catalog" className="rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3 text-center font-medium transition hover:bg-white/10">
                Browse Agents
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-white/5 backdrop-blur-xl">
            <div className="rounded-xl border border-white/10 bg-black p-6">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-sm font-medium text-zinc-300">AgentNXT layer</p>
                <span className="rounded-full border border-white/10 px-2 py-1 text-xs text-zinc-500">Unified</span>
              </div>
              {['Humans teach machines', 'Machines improve human decisions', 'Physical + digital context', 'Governed shared memory'].map((item) => (
                <div key={item} className="mb-3 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 last:mb-0">
                  <span className="text-sm text-zinc-300">{item}</span>
                  <span className="text-xs text-zinc-500">✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-3xl font-semibold tracking-tight">{value}</div>
              <div className="mt-2 text-sm text-zinc-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Platform</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">AgentNXT is the shared layer for physical and digital collaboration.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="mb-8 h-9 w-9 rounded-lg border border-white/10 bg-white text-black" />
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Open source</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Core Modules</h2>
          </div>
          <a href="https://github.com/AGenNext" className="text-sm font-medium text-zinc-400 transition hover:text-white">View organization →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map(([title, description, href]) => (
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

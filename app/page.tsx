const repos = [
  ['Platform', 'SDK and model-agnostic control plane for workflow configuration, catalogs, auth, policies, traces, usage, and runner handoff.', 'https://github.com/AGenNext/Platform'],
  ['AGenNext Protocols', 'Protocol library covering MCP, A2A, AG-UI, commerce, payments, authorization, identity, decentralized identity, and discovery.', 'https://github.com/AGenNext/AGenNext-Protocols'],
  ['Skill Registry', 'Reusable agent skill catalog for packaging capabilities as portable building blocks across agent runtimes.', 'https://github.com/AGenNext/AGenNext-SkillRegistry'],
  ['AgentCode', 'OpenHands SDK and LangGraph runtime for coding agents with decision intelligence and self-improvement loops.', 'https://github.com/AGenNext/AgentCode'],
  ['CodeAssist', 'Developer assistance and coding workflow automation for AI-assisted software delivery.', 'https://github.com/AGenNext/CodeAssist'],
  ['CodeReview', 'AI-assisted code review workflows for quality, security, maintainability, and delivery confidence.', 'https://github.com/AGenNext/AGenNext-CodeReview'],
  ['DocOcr', 'Document OCR agent capability for extracting structured knowledge from files and scanned content.', 'https://github.com/AGenNext/AGenNext-DocOcr'],
  ['WebCrawl', 'Web crawling agent capability for collecting, transforming, and grounding external knowledge.', 'https://github.com/AGenNext/AGenNext-WebCrawl'],
  ['Enterprise', 'Enterprise packaging for governance, controls, deployment hardening, and production adoption.', 'https://github.com/AGenNext/AGenNext-Enterprise'],
  ['Professional', 'Professional templates and workflows for teams building practical agent applications.', 'https://github.com/AGenNext/AGenNext-Professional'],
]

const pillars = [
  ['Governed by design', 'Policy, identity, observability, usage controls, and traceability built into the agent runtime layer.'],
  ['Protocol native', 'Composable support for modern agent protocols, discovery, commerce, payments, MCP, A2A, and AG-UI.'],
  ['Cloud-ready delivery', 'Portable building blocks for teams moving from prototypes to hardened production workflows.'],
]

const metrics = [
  ['10+', 'Open-source modules'],
  ['100%', 'Composable architecture'],
  ['24/7', 'Enterprise runtime posture'],
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-[#161616]">
      <section className="border-b border-[#c6c6c6] bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="AGenNext home">
            <span className="grid h-9 w-9 place-items-center bg-[#0f62fe] text-sm font-semibold text-white">AG</span>
            <span className="text-lg font-semibold tracking-[-0.02em]">AGenNext</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-[#525252] md:flex">
            <a href="#platform" className="hover:text-[#0f62fe]">Platform</a>
            <a href="#architecture" className="hover:text-[#0f62fe]">Architecture</a>
            <a href="#repositories" className="hover:text-[#0f62fe]">Repositories</a>
          </div>
          <a
            href="https://github.com/AGenNext"
            className="border border-[#161616] px-4 py-2 text-sm font-medium transition hover:bg-[#161616] hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </section>

      <section id="top" className="relative overflow-hidden bg-[#0f62fe] text-white">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[length:28px_28px] lg:block" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
          <div className="relative z-10 max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#d0e2ff]">Enterprise agent infrastructure</p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Build governed AI agent systems for production.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[#edf5ff]">
              AGenNext is an open-source platform for composing agent protocols, skills, orchestration, runtime governance, and enterprise controls.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#repositories" className="bg-white px-6 py-4 text-base font-semibold text-[#0f62fe] transition hover:bg-[#edf5ff]">
                Explore modules
              </a>
              <a href="#platform" className="border border-white px-6 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-[#0f62fe]">
                View architecture
              </a>
            </div>
          </div>

          <div className="relative z-10 grid content-end gap-4">
            <div className="border border-white/35 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.22em] text-[#d0e2ff]">Control plane</p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">Policies, catalogs, traces, usage, identity, and runner handoff in one enterprise layer.</p>
            </div>
            <div className="grid grid-cols-3 border border-white/35 bg-white text-[#161616]">
              {metrics.map(([value, label]) => (
                <div key={value} className="border-r border-[#c6c6c6] p-5 last:border-r-0">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-[#0f62fe]">{value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#525252]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0f62fe]">Why AGenNext</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] lg:text-5xl">Designed for enterprise adoption, not demo-day theater.</h2>
          </div>
          <div className="grid gap-px bg-[#c6c6c6] md:grid-cols-3">
            {pillars.map(([title, copy]) => (
              <article key={title} className="bg-white p-8">
                <div className="mb-12 h-1 w-12 bg-[#0f62fe]" />
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-5 leading-7 text-[#525252]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="border-y border-[#c6c6c6] bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-[#c6c6c6] px-6 lg:grid-cols-4 lg:px-8">
          {['Applications', 'Protocols', 'Skills', 'Runtime governance'].map((item, index) => (
            <div key={item} className="bg-white py-12 pr-8">
              <p className="text-sm font-semibold text-[#0f62fe]">0{index + 1}</p>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{item}</h3>
              <p className="mt-4 text-[#525252]">
                {index === 0 && 'Business workflows and developer tools built on composable agent capabilities.'}
                {index === 1 && 'MCP, A2A, AG-UI, identity, discovery, commerce, and payment interfaces.'}
                {index === 2 && 'Reusable packaged skills for code, review, OCR, crawling, and knowledge workflows.'}
                {index === 3 && 'Policies, auditability, deployment hardening, usage tracking, and enterprise controls.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="repositories" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0f62fe]">Open-source modules</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] lg:text-5xl">A modular foundation for agent-native software.</h2>
          </div>
          <a href="https://github.com/AGenNext" className="text-sm font-semibold text-[#0f62fe] hover:underline">View organization →</a>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#c6c6c6] bg-[#c6c6c6] md:grid-cols-2">
          {repos.map(([name, description, href]) => (
            <a key={name} href={href} className="group bg-white p-8 transition hover:bg-[#edf5ff]">
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] group-hover:text-[#0f62fe]">{name}</h3>
                <span className="text-2xl text-[#0f62fe] transition group-hover:translate-x-1">→</span>
              </div>
              <p className="mt-5 max-w-xl leading-7 text-[#525252]">{description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[#262626] text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#78a9ff]">Production-ready agent systems</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em]">Move from scattered agent experiments to governed enterprise infrastructure.</h2>
          </div>
          <a href="https://github.com/AGenNext/AGenNext-Enterprise" className="bg-[#0f62fe] px-6 py-4 font-semibold text-white transition hover:bg-[#0043ce]">
            Explore Enterprise
          </a>
        </div>
      </section>
    </main>
  )
}

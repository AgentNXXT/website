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
  ['Model-agnostic orchestration', 'Connect models, tools, skills, and protocols without locking teams into one runtime or provider.'],
  ['Governed execution', 'Control identity, policies, approvals, observability, usage, and auditability across every agent workflow.'],
  ['GitOps delivery', 'Ship repeatable agent systems through versioned, reviewable, environment-aware deployment workflows.'],
]

const metrics = [
  ['Any', 'Model'],
  ['Every', 'Agent workflow'],
  ['100%', 'GitOps ready'],
]

const architecture = [
  ['Applications', 'Business workflows, copilots, automations, and developer tools built on governed agent capabilities.'],
  ['AgentGraph', 'Composable graph orchestration for routing, planning, tool use, memory, skills, and runtime handoff.'],
  ['Protocols + Skills', 'MCP, A2A, AG-UI, discovery, identity, reusable skills, and enterprise integration points.'],
  ['Governance', 'Policy enforcement, observability, usage controls, approvals, security, and deployment hardening.'],
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white">
      <section className="border-b border-white/10 bg-[#0B1020]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="AGenNext home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#7C3AED] text-sm font-semibold text-white">AG</span>
            <span className="text-lg font-semibold tracking-[-0.02em]">AGenNext</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#platform" className="hover:text-[#06B6D4]">Platform</a>
            <a href="#architecture" className="hover:text-[#06B6D4]">AgentGraph</a>
            <a href="#repositories" className="hover:text-[#06B6D4]">Modules</a>
          </div>
          <a href="https://github.com/AGenNext" className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-[#0B1020]">GitHub</a>
        </nav>
      </section>

      <section id="top" className="relative overflow-hidden bg-[#0B1020] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.18),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
          <div className="relative z-10 max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#06B6D4]">AgentGraph Platform</p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Build governed agent systems that run anywhere.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-300">
              AGenNext is a model-agnostic AgentGraph platform for composing agents, tools, skills, protocols, and enterprise governance into production-ready workflows.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
              Deploy through GitOps-controlled workflows across cloud, on-premises, and air-gapped environments.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#architecture" className="rounded-xl bg-[#7C3AED] px-6 py-4 text-base font-semibold text-white transition hover:opacity-90">
                Explore AgentGraph
              </a>
              <a href="#repositories" className="rounded-xl border border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-[#0B1020]">
                View Modules
              </a>
            </div>
          </div>

          <div className="relative z-10 grid content-end gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.22em] text-[#06B6D4]">Enterprise agent control plane</p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.03em]">Orchestrate agents, govern execution, and publish reusable capabilities without provider lock-in.</p>
            </div>
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {metrics.map(([value, label]) => (
                <div key={value} className="border-r border-white/10 p-5 last:border-r-0">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-[#F59E0B]">{value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#06B6D4]">Why AGenNext</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] lg:text-5xl">Designed for production agents, not disconnected demos.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(([title, copy]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="mb-8 h-1 w-12 bg-[#7C3AED]" />
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-5 leading-7 text-slate-400">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#06B6D4]">AgentGraph architecture</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] lg:text-5xl">A graph-native foundation for enterprise AI workflows.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {architecture.map(([title, copy], index) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-[#0B1020] p-8">
                <p className="text-sm font-semibold text-[#F59E0B]">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-5 leading-7 text-slate-400">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="repositories" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#06B6D4]">Open-source modules</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] lg:text-5xl">Composable building blocks for AgentGraph systems.</h2>
          </div>
          <a href="https://github.com/AGenNext" className="text-sm font-semibold text-[#06B6D4] hover:underline">View organization →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {repos.map(([name, description, href]) => (
            <a key={name} href={href} className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-[#06B6D4]/50 hover:bg-white/10">
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] group-hover:text-[#06B6D4]">{name}</h3>
                <span className="text-2xl text-[#F59E0B] transition group-hover:translate-x-1">→</span>
              </div>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">{description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[#7C3AED] text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Production-ready AgentGraph</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em]">Move from fragmented AI experiments to governed agent infrastructure.</h2>
          </div>
          <a href="https://github.com/AGenNext/AGenNext-Enterprise" className="rounded-xl bg-white px-6 py-4 font-semibold text-[#7C3AED] transition hover:bg-slate-100">
            Explore Enterprise
          </a>
        </div>
      </section>
    </main>
  )
}

import type { Metadata } from 'next'

const features = [
  {
    title: 'Memory',
    eyebrow: 'Context that compounds',
    description:
      'Memory helps humans and machines build shared history across preferences, decisions, task outcomes, device state, and domain context.',
    reliability:
      'When memory compounds, machines understand humans better over time, and humans get partners that can learn from feedback, corrections, and lived context.',
    agents: ['Personal assistants', 'Customer support agents', 'Research agents', 'Healthcare agents'],
  },
  {
    title: 'Decision Intelligence',
    eyebrow: 'Better choices together',
    description:
      'Decision intelligence helps humans and machines compare options, score risks, reason through trade-offs, and choose the next best action together.',
    reliability:
      'The machine brings structure and speed. The human brings judgment, values, and context. Together they make better decisions than either side alone.',
    agents: ['Strategy agents', 'Finance agents', 'Sales agents', 'Operations agents'],
  },
  {
    title: 'Verification',
    eyebrow: 'Correctness before execution',
    description:
      'Verification checks plans, constraints, permissions, expected outputs, and unsafe actions before a machine executes a workflow.',
    reliability:
      'Coexistence needs trust. Verification lets humans delegate more confidently because machine actions can be checked before they affect code, devices, data, or operations.',
    agents: ['Coding agents', 'Infrastructure agents', 'Robotics agents', 'Enterprise workflow agents'],
  },
  {
    title: 'Governance',
    eyebrow: 'Trust for shared work',
    description:
      'Governance brings policy, approvals, auditability, lifecycle controls, and organizational rules into human-machine workflows.',
    reliability:
      'Machines become safer collaborators when boundaries are explicit, approval paths are clear, and every action can be reviewed by people.',
    agents: ['Enterprise copilots', 'Legal agents', 'HR agents', 'Procurement agents'],
  },
  {
    title: 'Physical + Digital Context',
    eyebrow: 'One world of action',
    description:
      'Physical and digital context connects humans and machines across IoT devices, edge hardware, Android apps, browsers, sensors, cameras, gateways, robotics systems, APIs, files, and enterprise workflows.',
    reliability:
      'Machines become more useful when they understand where humans are acting, what device or software state changed, which session is active, and what local context matters now.',
    agents: ['IoT agents', 'Browser agents', 'Android agents', 'Vision agents'],
  },
  {
    title: 'Human-Centered UX',
    eyebrow: 'People stay in the loop',
    description:
      'Human-centered UX makes machine plans visible, editable, explainable, and easy to approve, correct, or teach.',
    reliability:
      'The goal is not replacement. The goal is a shared interface where humans improve machines, and machines help humans think, decide, create, and act better.',
    agents: ['Executive assistants', 'Support copilots', 'Workflow agents', 'Analyst agents'],
  },
]

const agentTypes = [
  'Research agents',
  'Coding agents',
  'Customer support agents',
  'Sales agents',
  'Marketing agents',
  'Legal agents',
  'Finance agents',
  'Healthcare agents',
  'Data analysis agents',
  'Executive assistants',
  'IoT agents',
  'Edge agents',
  'Browser agents',
  'Android agents',
  'Vision agents',
  'Robotics agents',
  'Multi-agent teams',
]

const researchAreas = [
  ['Human-machine co-evolution', 'How people teach machines, and how machines help people improve decisions, creativity, learning, and action over time.'],
  ['Context engineering', 'How memory, task state, physical signals, browser state, and enterprise data become shared context.'],
  ['Verification and reliability', 'How plans, constraints, code, tool calls, and machine actions can be checked before execution.'],
  ['Embodied and edge intelligence', 'How machines operate across devices, sensors, cameras, robotics, browsers, and edge hardware.'],
]

const openSourceModules = [
  ['Platform', 'Control plane for workflows, governance, traces, usage, and runtime handoff.', 'https://github.com/AGenNext/Platform'],
  ['Protocols', 'Open protocols for tools, agents, identity, discovery, commerce, and UI.', 'https://github.com/AGenNext/AGenNext-Protocols'],
  ['Skill Registry', 'Reusable skills that let agents share capabilities across runtimes.', 'https://github.com/AGenNext/AGenNext-SkillRegistry'],
  ['AgentCode', 'Coding agents with decision intelligence and self-improvement loops.', 'https://github.com/AGenNext/AgentCode'],
]

export const metadata: Metadata = {
  title: 'Features | AGenNext',
  description: 'AGenNext is the platform where humans and machines coexist and make each other better across the physical and digital world.',
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Human-Machine Coexistence
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            The platform where humans and machines coexist and make each other better.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
            AGenNext connects memory, decision intelligence, verification, governance, physical-digital context, and human-centered UX into one shared operating layer for people and machines.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">{feature.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">{feature.title}</h2>
              <p className="mt-4 leading-7 text-zinc-400">{feature.description}</p>
              <div className="mt-6 rounded-xl border border-white/10 bg-black p-5">
                <h3 className="font-medium">How humans and machines improve each other</h3>
                <p className="mt-3 leading-7 text-zinc-400">{feature.reliability}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {feature.agents.map((agent) => (
                  <span key={agent} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    {agent}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Research</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Research directions for human-machine coexistence.</h2>
            <p className="mt-5 leading-8 text-zinc-400">
              AGenNext treats coexistence as a research and engineering problem across memory, context, verification, edge intelligence, and human-machine collaboration.
            </p>
          </div>
          <div className="grid gap-4">
            {researchAreas.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-black p-6">
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Open source</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Open modules for building the human-machine stack.</h2>
            <p className="mt-5 leading-8 text-zinc-400">
              The platform is organized as open-source building blocks so developers can inspect, extend, and compose the systems that let humans and machines work together safely.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {openSourceModules.map(([title, description, href]) => (
              <a key={title} href={href} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Types of agents</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Different machines need different collaboration patterns.</h2>
            <p className="mt-5 leading-8 text-zinc-400">
              AGenNext supports copilots, workflow agents, physical-device agents, browser agents, edge agents, robotics agents, and multi-agent systems that coexist with people across digital and physical work.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {agentTypes.map((type) => (
              <div key={type} className="rounded-xl border border-white/10 bg-black px-4 py-3 text-zinc-300">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

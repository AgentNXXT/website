import type { Metadata } from 'next'

const features = [
  {
    title: 'Memory',
    eyebrow: 'Context that compounds',
    description:
      'Memory helps agents keep track of user preferences, prior decisions, task history, and domain context across sessions.',
    reliability:
      'Reliable agents need continuity. Memory reduces repeated questions, prevents lost context, and lets an agent compare today’s action against what already happened.',
    agents: ['Personal assistants', 'Customer support agents', 'Research agents', 'Healthcare agents'],
  },
  {
    title: 'Decision Intelligence',
    eyebrow: 'Better choices before actions',
    description:
      'Decision intelligence gives agents a structured way to compare options, score risks, reason through trade-offs, and choose the next best action.',
    reliability:
      'It makes agents more dependable because every tool call, recommendation, and workflow step can be evaluated against goals, constraints, and confidence.',
    agents: ['Strategy agents', 'Finance agents', 'Sales agents', 'Operations agents'],
  },
  {
    title: 'Governance',
    eyebrow: 'Control for production use',
    description:
      'Governance brings policy, approvals, auditability, lifecycle controls, and organizational rules into agent workflows.',
    reliability:
      'Agents become safer when they know what they are allowed to do, when they need approval, and how every action will be reviewed later.',
    agents: ['Enterprise copilots', 'Legal agents', 'HR agents', 'Procurement agents'],
  },
  {
    title: 'Security',
    eyebrow: 'Protect tools, data, and identity',
    description:
      'Security protects agent access to credentials, private data, external APIs, tools, repositories, and enterprise systems.',
    reliability:
      'A reliable agent must not leak data, overreach permissions, or call tools it should not use. Security creates safe execution boundaries.',
    agents: ['DevOps agents', 'Coding agents', 'Data agents', 'Enterprise agents'],
  },
  {
    title: 'Human-Centered UX',
    eyebrow: 'Humans stay in control',
    description:
      'Human-centered UX makes agent plans visible, editable, explainable, and easy to approve or correct.',
    reliability:
      'When humans can inspect intent before execution, agents recover faster from ambiguity and teams build trust in automated workflows.',
    agents: ['Executive assistants', 'Support copilots', 'Workflow agents', 'Analyst agents'],
  },
  {
    title: 'Empathy',
    eyebrow: 'Better user understanding',
    description:
      'Empathy helps agents adapt tone, urgency, and support style based on user intent and emotional context.',
    reliability:
      'Reliable agents do not just answer correctly. They respond appropriately, reduce friction, and escalate sensitive situations when needed.',
    agents: ['Customer support agents', 'Education agents', 'Healthcare assistants', 'HR agents'],
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
  'Multi-agent teams',
]

export const metadata: Metadata = {
  title: 'Features | AGenNext',
  description: 'Explore AGenNext features for building more reliable AI agents with memory, governance, security, decision intelligence, and human-centered UX.',
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Agent Reliability Features
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Features that make AI agents more reliable.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
            AGenNext combines memory, decision intelligence, governance, security, human-centered UX, and empathy so agents can act with more context, control, and trust.
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
                <h3 className="font-medium">How it makes agents reliable</h3>
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
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Types of agents</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Different agents need different reliability controls.</h2>
            <p className="mt-5 leading-8 text-zinc-400">
              AGenNext is designed for many agent categories, from copilots and workflow agents to multi-agent systems that need memory, policy, security, and decision quality.
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

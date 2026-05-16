import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'

export const metadata: Metadata = {
  title: 'Agent Trust Protocol Dashboard | AGenNext',
  description:
    'A dashboard MVP for monitoring agent trust scores, policies, audit events, and evidence streams across autonomous agent systems.',
}

const agents = [
  { name: 'Procurement Agent', id: 'agt-procure-01', owner: 'Operations', status: 'Verified', score: 94, risk: 'Low', trend: '+4.8%' },
  { name: 'Research Agent', id: 'agt-research-07', owner: 'Strategy', status: 'Observed', score: 87, risk: 'Low', trend: '+1.6%' },
  { name: 'Code Review Agent', id: 'agt-code-12', owner: 'Engineering', status: 'Guarded', score: 76, risk: 'Medium', trend: '-3.2%' },
  { name: 'Vendor Intake Agent', id: 'agt-vendor-04', owner: 'Security', status: 'Escalated', score: 61, risk: 'High', trend: '-8.9%' },
]

const metrics = [
  ['Fleet Trust', '86.4', '+2.1%', 'Average trust score across active agents'],
  ['Policy Pass Rate', '97.8%', '+0.8%', 'Requests allowed after identity, policy, and risk checks'],
  ['Open Escalations', '7', '-3', 'Human review items waiting on owner response'],
  ['Audit Events', '18.2k', '+14%', 'Signed events recorded in the current window'],
]

const auditEvents = [
  ['12:42:18', 'Procurement Agent', 'Tool call approved', 'purchase_order.create', 'Trust 94 · policy finance-low-risk'],
  ['12:39:03', 'Vendor Intake Agent', 'Human review required', 'vendor_profile.enrich', 'Trust 61 · missing provenance'],
  ['12:35:51', 'Code Review Agent', 'Scope reduced', 'repo.write', 'Trust 76 · least privilege applied'],
  ['12:31:26', 'Research Agent', 'Evidence attached', 'web.search', 'Trust 87 · source confidence high'],
  ['12:28:44', 'Vendor Intake Agent', 'Action blocked', 'external_payment.initiate', 'Trust 58 · risk threshold exceeded'],
]

const policies = [
  ['Identity binding', 'Require agent DID, publisher signature, and environment claim before accepting events.', 'Enabled'],
  ['Risk threshold', 'Block sensitive tools when trust score is below 70 unless human approval is present.', 'Enabled'],
  ['Evidence retention', 'Retain signed audit records, policy decisions, and score explanations for 90 days.', 'Enabled'],
  ['Step-up review', 'Escalate unusual tool access, source mismatch, and rapid score drops to owners.', 'Draft'],
]

const evidence = [
  ['Positive signals', ['Publisher signature verified', 'Recent successful completions', 'No blocked actions in 24h']],
  ['Risk signals', ['Unusual external API scope', 'Missing source provenance', 'Score dropped more than 5% in one hour']],
  ['Recommended actions', ['Request owner approval', 'Reduce tool permissions', 'Attach stronger evidence before retry']],
]

function RiskBadge({ value }: { value: string }) {
  const className =
    value === 'Low'
      ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200'
      : value === 'Medium'
        ? 'border-amber-400/40 bg-amber-400/10 text-amber-200'
        : 'border-red-400/40 bg-red-400/10 text-red-200'

  return <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${className}`}>{value}</span>
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      <section className="border-b border-white/15 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">Agent Trust Protocol</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Trust operations for autonomous agents.
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-300">
                Monitor trust scores, policy decisions, evidence signals, and signed audit events from one operating console.
              </p>
            </div>
            <div className="border border-white/15 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Current posture</p>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-6xl font-semibold tracking-[-0.04em]">86</p>
                  <p className="mt-2 text-zinc-400">Fleet trust score</p>
                </div>
                <span className="bg-white px-3 py-2 text-sm font-semibold text-black">Healthy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid border-l border-t border-white/15 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map(([label, value, delta, description]) => (
            <article key={label} className="border-b border-r border-white/15 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{label}</p>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <p className="text-4xl font-semibold tracking-[-0.03em]">{value}</p>
                <p className="text-sm text-zinc-400">{delta}</p>
              </div>
              <p className="mt-4 leading-6 text-zinc-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-8">
          <section className="border border-white/15 bg-white/[0.03]">
            <div className="border-b border-white/15 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">Agent Registry</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Active agents</h2>
            </div>
            <div className="divide-y divide-white/10">
              {agents.map((agent) => (
                <article key={agent.id} className="grid gap-5 p-6 md:grid-cols-[1fr_90px_90px_90px] md:items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{agent.name}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{agent.id} · {agent.owner} · {agent.status}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Score</p>
                    <p className="mt-1 text-2xl font-semibold">{agent.score}</p>
                  </div>
                  <RiskBadge value={agent.risk} />
                  <p className="text-sm text-zinc-400">{agent.trend}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="border border-white/15 bg-white/[0.03]">
            <div className="border-b border-white/15 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">Audit Stream</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Signed trust events</h2>
            </div>
            <div className="divide-y divide-white/10">
              {auditEvents.map(([time, agent, action, resource, note]) => (
                <article key={`${time}-${resource}`} className="grid gap-4 p-6 md:grid-cols-[90px_1fr_1fr]">
                  <p className="font-mono text-sm text-zinc-500">{time}</p>
                  <div>
                    <h3 className="font-semibold">{action}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{agent}</p>
                  </div>
                  <div>
                    <p className="font-mono text-sm text-zinc-300">{resource}</p>
                    <p className="mt-1 text-sm text-zinc-500">{note}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <section className="border border-white/15 bg-white/[0.03] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">Policies</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Control rules</h2>
            <div className="mt-6 space-y-5">
              {policies.map(([title, description, status]) => (
                <article key={title} className="border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold">{title}</h3>
                    <span className="text-xs uppercase tracking-[0.16em] text-zinc-500">{status}</span>
                  </div>
                  <p className="mt-2 leading-6 text-zinc-400">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="border border-white/15 bg-white/[0.03] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">Evidence</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Score explanation</h2>
            <div className="mt-6 space-y-6">
              {evidence.map(([title, items]) => (
                <div key={title as string} className="border-t border-white/10 pt-5">
                  <h3 className="font-semibold">{title}</h3>
                  <ul className="mt-3 space-y-2 text-zinc-400">
                    {(items as string[]).map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  )
}

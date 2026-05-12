const features = [
  'Policy-bound execution',
  'Open Policy Agent integration',
  'OpenFGA and Zanzibar-style authorization',
  'Cryptographically signed skills and prompts',
  'Immutable audit trails',
  'Continuous autonomous governance',
  'Air-gapped deployments',
  'Enterprise compliance workflows',
  'Tenant-aware isolation',
  'Agent identity and lifecycle management',
]

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-cyan-300">← AGenNext</a>
        <p className="mt-12 font-semibold text-cyan-300">Enterprise Security</p>
        <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">Governable AI infrastructure for enterprise agents.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">AGenNext is designed for reliable, secure, local, air-gapped, auditable, and policy-bound AI systems with enterprise-grade governance controls.</p>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature} className="rounded-3xl border border-white/10 bg-white/[.04] p-6 text-slate-200">
              {feature}
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-4">
          <a href="/docs/security" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950">Security docs</a>
        </div>
      </section>
    </main>
  )
}

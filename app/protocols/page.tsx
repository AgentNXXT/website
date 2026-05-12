const protocols = ['MCP', 'A2A', 'ACP', 'AG-UI', 'AuthZen', 'Agent ID', 'Agent DID', 'Registry', 'OPA', 'FGA', 'UCP', 'ATP']

export default function ProtocolsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-950 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <a href="/" className="text-sm text-cyan-700">← AGenNext</a>
        <p className="mt-12 font-semibold text-cyan-700">AGenNext Protocols</p>
        <h1 className="mt-4 max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">Open protocols for interoperable AI agents.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Connect agents to tools, workflows, identity providers, authorization systems, commerce, discovery layers, audit systems, and other agents through a protocol-first architecture.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {protocols.map((item) => <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold">{item}</span>)}
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="https://github.com/AGenNext/AGenNext-Protocols" className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white">GitHub repo</a>
          <a href="/docs/protocols" className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold">Read docs</a>
        </div>
      </section>
    </main>
  )
}

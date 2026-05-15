export default function QASummary() {
  return (
    <main className="min-h-screen bg-primary text-white px-6 py-16 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-black tracking-tight">AGenNext Website QA Summary</h1>
        <p className="mt-6 text-lg">This page provides a summary checklist for validating the production deployment of the AGenNext website.</p>
        <ul className="mt-8 list-disc pl-6 space-y-3">
          <li>Verify all landing pages load correctly: Platform, Agents, Security, Runtime, Protocols, Skills, Multimodal, Enterprise, Research, Monetization.</li>
          <li>Confirm all internal navigation links respect `config.basePath` and point correctly under `/website`.</li>
          <li>Ensure CI/CD workflow (`ci-cd-ghpages.yml`) successfully builds, exports, and deploys to `gh-pages` branch.</li>
          <li>Check the enterprise classy theme is consistent (dark navy background, silver/gray accents, gold/teal highlights, surface cards, white text).</li>
          <li>Verify security headers: CSP, X-Frame-Options, HSTS.</li>
          <li>Ensure no console logs or development-only scripts remain.</li>
          <li>Validate the site is accessible at `https://&lt;username&gt;.github.io/website/` and all internal links work.</li>
          <li>Check all GitHub repository links for accuracy.</li>
          <li>Perform visual QA for responsiveness and enterprise aesthetic.</li>
        </ul>
      </section>
    </main>
  )
}
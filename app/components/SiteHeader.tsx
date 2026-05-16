const siteUrl = 'https://site.agnxxt.com'

const navItems = [
  ['Research Resources', `${siteUrl}/#blog`],
  ['Concepts', `${siteUrl}/#human-first-world`],
  ['Solutions', `${siteUrl}/repos/`],
  ['Platform', `${siteUrl}/#frontier-agent-platform`],
  ['Learning', `${siteUrl}/#blog`],
  ['Playgrounds', `${siteUrl}/catalog/`],
  ['Contact', 'mailto:thefractionalpm@gmail.com'],
]

export default function SiteHeader() {
  return (
    <header className="border-b border-white/15 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5 lg:px-8">
        <a href={`${siteUrl}/`} className="text-xl font-bold tracking-widest text-white">
          AGenNext
        </a>
      </div>
    </header>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteHeader from '../../components/SiteHeader'
import {
  ContentGrid,
  PageShell,
  PrimaryLink,
  ReportHero,
  ReportList,
  ReportSection,
  SidebarBox,
  WhitePanel,
} from '../../components/design-system'
import { getRepoPage, getRepoReadmeUrl, platformCapabilities, repoPages } from '../data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return repoPages.map((repo) => ({ slug: repo.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const repo = getRepoPage(slug)

  if (!repo) return {}

  return {
    title: `${repo.name} | Autonomyx`,
    description: repo.centralBenefit,
  }
}

export default async function RepoPage({ params }: Props) {
  const { slug } = await params
  const repo = getRepoPage(slug)

  if (!repo) notFound()

  const readmeUrl = getRepoReadmeUrl(repo)

  return (
    <PageShell>
      <SiteHeader />
      <ReportHero eyebrow="AGenNext Repository" label={repo.name} title={repo.centralBenefit} />

      <WhitePanel>
        <ContentGrid
          aside={
            <>
              <SidebarBox title="Platform Capabilities">
                <ul className="grid gap-3 text-sm text-neutral-700">
                  {platformCapabilities.map((item) => (
                    <li key={item} className="border-t border-neutral-200 pt-3">{item}</li>
                  ))}
                </ul>
              </SidebarBox>

              <SidebarBox title="How to Get Started">
                <p className="text-sm leading-7 text-neutral-600">
                  {repo.isPrivate
                    ? 'This repository is private. Public documentation remains high-level.'
                    : 'Explore the repository README, architecture, and implementation details on GitHub.'}
                </p>
                <div className="mt-6">
                  <PrimaryLink href={readmeUrl}>{repo.isPrivate ? 'Private Repository' : 'Get Started on GitHub'}</PrimaryLink>
                </div>
              </SidebarBox>
            </>
          }
        >
          <section className="border-y border-neutral-300 py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Problem vs How We Solve It</p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Problem</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-600">{repo.whyImportant}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">How we solve it</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-600">{repo.centralBenefit} {repo.whatItIs}</p>
              </div>
            </div>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">Comparison</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Common approach vs Autonomyx approach</h2>
            <div className="mt-8 grid border-l border-t border-neutral-300 md:grid-cols-2">
              <div className="border-b border-r border-neutral-300 p-7">
                <h3 className="text-xl font-semibold tracking-tight">Common approach</h3>
                <p className="mt-4 leading-7 text-neutral-600">Many teams begin with project-specific scripts, separate tools, manual review, or custom workflows. That can work early, but it often becomes harder to search, reuse, govern, and operate as more agents and teams are added.</p>
              </div>
              <div className="border-b border-r border-neutral-300 p-7">
                <h3 className="text-xl font-semibold tracking-tight">Autonomyx approach</h3>
                <p className="mt-4 leading-7 text-neutral-600">{repo.centralBenefit} The repository connects that benefit to reusable platform capabilities, source documentation, and a clearer path from concept to implementation.</p>
              </div>
            </div>
          </section>

          <ReportSection number="01" title="What it is"><p>{repo.whatItIs}</p></ReportSection>
          <ReportSection number="02" title="Why it is important"><p>{repo.whyImportant}</p></ReportSection>
          <ReportSection number="03" title="Use Cases"><ReportList items={repo.useCases} /></ReportSection>
          <ReportSection number="04" title="Benefits"><ReportList items={repo.benefits} /></ReportSection>
          <ReportSection number="05" title="Sources for review">
            <ul className="border-t border-neutral-300 text-base leading-7 text-neutral-700">
              <li className="border-b border-neutral-300 py-4">Repository README: <a href={readmeUrl} target="_blank" rel="noreferrer" className="underline">{readmeUrl}</a></li>
              <li className="border-b border-neutral-300 py-4">Approved landing page draft: content reviewed before publishing.</li>
            </ul>
          </ReportSection>
        </ContentGrid>
      </WhitePanel>
    </PageShell>
  )
}

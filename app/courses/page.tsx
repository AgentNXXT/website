import SiteHeader from '../components/SiteHeader'

export const metadata = {
  title: 'Courses | AGenNext',
  description: 'Learn to build, deploy, and manage autonomous AI agents with AGenNext courses.',
}

const courses = [
  {
    id: 'cs146s',
    code: 'CS146S',
    title: 'The Modern Software Developer',
    description: 'Master AI-powered software development with LLMs, coding agents, MCP, and modern toolchains.',
    duration: '10 weeks',
    level: 'Intermediate',
    topics: [
      'LLMs & Prompting',
      'Coding Agents & MCP',
      'AI IDEs',
      'Claude Code Patterns',
      'Modern Terminals',
      'AI Testing & Security',
      'Code Review',
      'UI Building',
      'Deployment',
      'Final Project',
    ],
  },
  {
    id: 'ai-foundations',
    code: 'AI101',
    title: 'AI Foundations',
    description: 'Learn the fundamentals of AI, machine learning, and how to build AI-powered applications.',
    duration: '6 weeks',
    level: 'Beginner',
    topics: [
      'Introduction to AI',
      'Machine Learning Basics',
      'Neural Networks',
      'Prompt Engineering',
      'AI Applications',
      'Ethics & Safety',
    ],
  },
  {
    id: 'agent-security',
    code: 'SEC201',
    title: 'AI Security & Governance',
    description: 'Learn to secure and govern AI agents in production environments.',
    duration: '4 weeks',
    level: 'Advanced',
    topics: [
      'AI Security Principles',
      'Threat Modeling',
      'Governance Frameworks',
      'Production Best Practices',
    ],
  },
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h1 className="text-5xl font-semibold tracking-[-0.03em] md:text-7xl">
          Courses
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-zinc-400">
          Learn to build, deploy, and manage autonomous AI agents with hands-on courses.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="rounded-lg border border-white/15 bg-zinc-900/50 p-6">
              <p className="text-sm font-medium text-[#a100ff]">{course.code}</p>
              <h2 className="mt-2 text-xl font-semibold">{course.title}</h2>
              <p className="mt-3 text-zinc-400">{course.description}</p>
              <div className="mt-4 flex gap-4 text-sm text-zinc-500">
                <span>{course.duration}</span>
                <span>•</span>
                <span>{course.level}</span>
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium">Topics</h3>
                <ul className="mt-3 space-y-2">
                  {course.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="h-1 w-1 rounded-full bg-[#a100ff]" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 w-full rounded bg-white px-4 py-3 text-center font-medium text-black transition hover:bg-zinc-200">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
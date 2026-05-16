import SiteHeader from '../components/SiteHeader'

export const metadata = {
  title: 'Blog | AGenNext - Articles on AI Agent Development',
  description: 'Articles on AI agent development, database technology, and modern software.',
}

const articles = [
  {
    slug: 'spectron-unified-agent-memory',
    title: 'Spectron: AI Agent Memory That Actually Works',
    excerpt: 'How unified agent memory provides a single persistent source of context, state, and history for AI agents.',
    category: 'AI Memory',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Database'],
    date: '2025-01-16',
  },
  {
    slug: 'model-context-protocol',
    title: 'Model Context Protocol: Connect AI Tools Directly to Data',
    excerpt: 'Connect AI tools like Cursor, VS Code, and Claude directly to your database.',
    category: 'AI Tools',
    tags: ['Artificial Intelligence', 'Software Development', 'API'],
    date: '2025-01-15',
  },
  {
    slug: 'rag-graph-retrieval',
    title: 'RAG and Graph RAG: Combine Vectors with Relationships',
    excerpt: 'Combine vector similarity, graph traversal, and document retrieval in a single query.',
    category: 'AI RAG',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing'],
    date: '2025-01-14',
  },
  {
    slug: 'real-time-agent-reactivity',
    title: 'Real-time Agent Reactivity',
    excerpt: 'Live queries and event triggers let agents react instantly to changing data.',
    category: 'AI Reactivity',
    tags: ['Artificial Intelligence', 'Real-time Computing', 'Event-driven'],
    date: '2025-01-13',
  },
  {
    slug: 'ai-model-integration',
    title: 'AI Model Integration: Call LLMs Directly from Database',
    excerpt: 'Call LLMs, embedding models, or GPU inference directly from within the database.',
    category: 'AI Integration',
    tags: ['Artificial Intelligence', 'Machine Learning', 'WebAssembly'],
    date: '2025-01-12',
  },
  {
    slug: 'agent-governance',
    title: 'Agent Governance: Fine-grained Permissions for AI',
    excerpt: 'Fine-grained permissions, access control, and audit trails for safe AI workflows.',
    category: 'AI Governance',
    tags: ['Artificial Intelligence', 'Security', 'Compliance'],
    date: '2025-01-11',
  },
  {
    slug: 'prompt-response-session',
    title: 'Prompt-Response Session Storage',
    excerpt: 'Store conversation history and context for AI apps with automatic session management.',
    category: 'AI Sessions',
    tags: ['Artificial Intelligence', 'Chatbot', 'Conversation'],
    date: '2025-01-10',
  },
  {
    slug: 'langchain-integration',
    title: 'LangChain Integration',
    excerpt: 'Seamlessly integrate with LangChain for building AI apps with vector search and LLMs.',
    category: 'AI Integration',
    tags: ['Artificial Intelligence', 'LangChain', 'Vector Search'],
    date: '2025-01-09',
  },
  {
    slug: 'json-unstructured-data',
    title: 'JSON-Native Unstructured Data Storage',
    excerpt: 'Store and query unstructured data in its native JSON format without schema constraints.',
    category: 'Data Storage',
    tags: ['JSON', 'NoSQL', 'Unstructured Data'],
    date: '2025-01-08',
  },
  {
    slug: 'hybrid-document-graph',
    title: 'Hybrid Document-Graph Modelling',
    excerpt: 'Combine document and graph data models for flexible, relational data.',
    category: 'Data Modeling',
    tags: ['Graph Database', 'Document Database', 'Data Model'],
    date: '2025-01-07',
  },
  {
    slug: 'distributed-storage',
    title: 'Distributed Storage for Global Scale',
    excerpt: 'Scale horizontally across multiple nodes with distributed storage.',
    category: 'Infrastructure',
    tags: ['Distributed Computing', 'Scalability', 'Database'],
    date: '2025-01-06',
  },
  {
    slug: 'cloud-native',
    title: 'Cloud Native Architecture',
    excerpt: 'Deploy on any cloud with Kubernetes support and managed services.',
    category: 'Infrastructure',
    tags: ['Cloud Computing', 'Kubernetes', 'DevOps'],
    date: '2025-01-05',
  },
  {
    slug: 'embeddings-semantic-search',
    title: 'Embeddings and Semantic Search',
    excerpt: 'Generate embeddings and perform semantic similarity search.',
    category: 'AI Search',
    tags: ['Artificial Intelligence', 'Embeddings', 'Semantic Search'],
    date: '2025-01-04',
  },
  {
    slug: 'acid-transactions',
    title: 'ACID Transactions for Data Integrity',
    excerpt: 'Guarantee data integrity with ACID transactions across the database.',
    category: 'Data Integrity',
    tags: ['ACID', 'Database', 'Transactions'],
    date: '2025-01-03',
  },
  {
    slug: 'schema-evolution',
    title: 'Schema Evolution: Flexible Without Migration',
    excerpt: 'Evolve your schema without expensive migrations.',
    category: 'Data Modeling',
    tags: ['Database Schema', 'Migration', 'Schema'],
    date: '2025-01-02',
  },
  {
    slug: 'full-text-search',
    title: 'Full-Text Search at Scale',
    excerpt: 'Performant full-text search with language-specific analyzers and ranking.',
    category: 'AI Search',
    tags: ['Information Retrieval', 'Search Engine', 'Text Mining'],
    date: '2025-01-01',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h1 className="text-5xl font-semibold tracking-[-0.03em] md:text-7xl">
          Blog
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-zinc-400">
          Articles on AI agent development, database technology, and modern software.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a 
              key={article.slug} 
              href={`/blog/${article.slug}`}
              className="group block rounded-lg border border-white/15 bg-zinc-900/50 p-6"
            >
              <div className="flex items-center gap-3">
                <p className="text-sm text-zinc-500">{article.date}</p>
                <span className="text-xs text-[#a100ff]">{article.category}</span>
              </div>
              <h2 className="mt-2 text-xl font-semibold group-hover:text-[#a100ff] transition">
                {article.title}
              </h2>
              <p className="mt-3 text-zinc-400">{article.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-xs text-zinc-500">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
import SiteHeader from '../components/SiteHeader'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | AGenNext - Articles on AI Agent Development',
  description: 'Articles on AI agent development, database technology, and agent governance.',
}

export default function BlogPage() {
  const articles = [
    {
      slug: 'spectron-unified-agent-memory',
      title: 'Spectron: AI Agent Memory That Actually Works',
      excerpt: 'How unified agent memory provides a single persistent source of context, state, and history for AI agents.',
      category: 'AI Memory',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Database'],
      content: `Spectron is SurrealDB's approach to unified agent memory - giving AI agents a single persistent source of context, state, and history.

## Why Agent Memory Matters

Traditional AI agents struggle with fragmented memory across different systems. Context gets lost, state becomes inconsistent, and agents can't maintain coherent conversations over time.

## How Spectron Helps

Spectron provides:
- **Single source of truth** - All agent data in one database
- **Persistent context** - Conversations, history, and state maintained
- **Structured + unstructured** - Documents, vectors, and graphs together
- **Real-time access** - Instant data retrieval for agent decisions

## Use Cases

1. **Conversation Memory** - Store chat history with automatic session management
2. **User Preferences** - Remember user preferences across sessions
3. **Agent State** - Maintain workflow state between agent turns
4. **Knowledge Context** - Give agents access to relevant domain knowledge

## Implementation

\`\`\`sql
-- Store agent session
CREATE session:user123 SET 
  context = {
    history: [...],
    preferences: {...},
    state: {}
  },
  updated_at = time::now();
\`\`\`

## Benefits for AI Development

- Build more context-aware agents
- Maintain coherent conversations
- Enable long-running agent workflows
- Provide personalized user experiences`,
      date: '2025-01-15',
    },
    {
      slug: 'model-context-protocol',
      title: 'Model Context Protocol: Connect AI Tools Directly to Data',
      excerpt: 'Connect AI tools like Cursor, VS Code, and Claude directly to your database for context-aware interactions.',
      category: 'AI Tools',
      tags: ['Artificial Intelligence', 'Software Development', 'API'],
      content: `Model Context Protocol (MCP) enables AI tools to connect directly to SurrealDB for seamless data access.

## The Problem

AI coding tools work in isolation - they can't access your actual data and context. This limits their effectiveness.

## How MCP Works

MCP connects AI tools directly to your database:
- **Cursor** - Access data while coding
- **VS Code** - Real-time database context
- **Claude** - Direct data queries
- **Any MCP client** - Standardized access

## Use Cases

1. **AI-Assisted Coding** - Query database schema while writing code
2. **Context-Aware Completion** - Get relevant data suggestions
3. **Real-time Debugging** - Access live data during development
4. **Documentation Generation** - Auto-generate API docs from schema

## Benefits

- Reduced context switching
- More informed AI assistance
- Better developer experience
- Seamless data access`,
      date: '2025-01-14',
    },
    {
      slug: 'rag-graph-retrieval',
      title: 'RAG and Graph RAG: Combine Vectors with Relationships',
      excerpt: 'Combine vector similarity, graph traversal, and document retrieval in a single query for retrieval-augmented generation.',
      category: 'AI RAG',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing'],
      content: `Graph RAG combines vector search, graph traversal, and document retrieval for more accurate AI responses.

## Traditional RAG Limitations

Standard RAG only looks at semantic similarity - it misses relationships and structured data connections.

## How Graph RAG Works

SurrealQL queries blend:
- **Vector similarity** - Find semantically similar content
- **Graph traversal** - Follow relationships and connections
- **Document retrieval** - Get full context
- **Hybrid queries** - All in one query

## Use Cases

1. **Knowledge Bases** - Answer questions with context
2. **Recommendation Systems** - Combine user preferences with similar items
3. **Research Discovery** - Find related papers and citations
4. **Customer Support** - Link issues to solutions

## Example Query

\`\`\`sql
SELECT * FROM knowledge 
WHERE vector::similarity(embedding, $query) > 0.8
FETCH author, related_articles
ORDER BY vector::distance(embedding, $query);
\`\`\`

## Benefits

- More accurate responses
- Richer context
- Fewer hallucinations
- Better user experiences`,
      date: '2025-01-13',
    },
    {
      slug: 'real-time-agent-reactivity',
      title: 'Real-time Agent Reactivity',
      excerpt: 'Live queries and event triggers let agents react instantly to changing data for more adaptive behavior.',
      category: 'AI Reactivity',
      tags: ['Artificial Intelligence', 'Real-time Computing', 'Event-driven'],
      content: `Real-time agent reactivity enables AI agents to respond instantly to data changes.

## Why Real-time Matters

Static queries can't handle dynamic data. Agents need to react to changes as they happen.

## How It Works

- **Live queries** - Auto-update on data changes
- **Event triggers** - Run agent logic on specific events
- **WebSocket subscriptions** - Real-time push updates
- **Change streams** - Track all data modifications

## Use Cases

1. **Monitoring Systems** - Alert on anomalies
2. **Workflow Automation** - Trigger agents on events
3. **Collaborative Apps** - Sync real-time updates
4. **Trading Systems** - React to market changes

## Example

\`\`\`sql
-- Live query
LIVE SELECT * FROM metrics 
WHERE anomaly_score > 0.9;

-- Event trigger
DEFINE EVENT on_anomaly ON metrics 
WHEN anomaly_score > 0.9 
THEN (CREATE alert { ... });
\`\`\`

## Benefits

- Instant responses to changes
- More adaptive agents
- Better automation
- Improved user experiences`,
      date: '2025-01-12',
    },
    {
      slug: 'ai-model-integration',
      title: 'AI Model Integration: Call LLMs Directly from Database',
      excerpt: 'Call LLMs, embedding models, or GPU inference directly from within the database via WebAssembly plugins.',
      category: 'AI Integration',
      tags: ['Artificial Intelligence', 'Machine Learning', 'WebAssembly'],
      content: `AI model integration brings LLMs directly into your database queries.

## The Challenge

Moving data between database and AI models adds complexity and latency.

## How Integration Works

Call AI models directly:
- **WebAssembly plugins** - Run AI code in database
- **Vector embeddings** - Generate within queries
- **LLM calls** - Use models from SQL
- **GPU acceleration** - Fast inference

## Use Cases

1. **Embedding Generation** - Auto-embed on insert
2. **Text Analysis** - Sentiment, classification within DB
3. **Summarization** - Auto-summarize content
4. **Query Enhancement** - Improve search with AI

## Example

\`\`\`sql
-- Generate embeddings on insert
DEFINE FIELD embedding ON documents 
SET $.embedding = ai::embed($.content);

-- Semantic search
SELECT * FROM docs 
WHERE vector::similarity(embedding, $query) > 0.7;
\`\`\`

## Benefits

- Reduced complexity
- Lower latency
- Better performance
- Simplified architecture`,
      date: '2025-01-11',
    },
    {
      slug: 'agent-governance',
      title: 'Agent Governance: Fine-grained Permissions for AI',
      excerpt: 'Fine-grained permissions, access control, and audit trails for safe, compliant AI workflows.',
      category: 'AI Governance',
      tags: ['Artificial Intelligence', 'Security', 'Compliance'],
      content: `Agent governance provides security and compliance for AI agent systems.

## Why Governance Matters

AI agents need proper guardrails:
- Data access control
- Audit trails
- Compliance requirements
- Safety mechanisms

## Governance Features

- **Fine-grained permissions** - Row-level access control
- **Audit logging** - Track all agent actions
- **Role-based access** - Define agent permissions
- **Data masking** - Protect sensitive data

## Use Cases

1. **Enterprise agents** - Comply with regulations
2. **Customer service** - Control data access
3. **Financial agents** - Audit transactions
4. **Healthcare** - Protect patient data

## Example

\`\`\`sql
-- Define agent role
DEFINE ROLE agent {
 Permissions: {
    SELECT: "customer = $auth.id",
    UPDATE: "status = 'pending'"
  }
};

-- Audit log
CREATE audit:agent123 SET 
  action: "read",
  data: "customer:456",
  timestamp: time::now();
\`\`\`

## Benefits

- Compliance ready
- Secure operations
- Full auditability
- Safe agent behavior`,
      date: '2025-01-10',
    },
  ]

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
                {article.tags.map((tag: string) => (
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
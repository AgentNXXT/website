import SiteHeader from '../components/SiteHeader'

export const metadata = {
  title: 'Blog | AGenNext - Articles on AI Agent Development',
  description: 'Articles on AI agent development, database technology, and modern software.',
}

// Spectron: AI Agent Memory That Actually Works
const articles = [
  {
    slug: 'spectron-unified-agent-memory',
    title: 'Spectron: AI Agent Memory That Actually Works',
    excerpt: 'How unified agent memory provides a single persistent source of context, state, and history for AI agents.',
    category: 'AI Memory',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Database'],
    content: `# Spectron: AI Agent Memory That Actually Works

Traditional AI agents struggle with fragmented memory. Context gets lost between sessions, state becomes inconsistent, and maintaining coherent conversations over time is a challenge. Spectron changes this by providing unified agent memory.

## Why Agent Memory Matters

AI agents need memory for:
- **Context preservation** - Remember conversation history
- **State tracking** - Maintain workflow state
- **User preferences** - Personalize interactions
- **Knowledge access** - Retrieve relevant information

## How Spectron Works

Spectron provides a single persistent source of truth:

\`\`\`sql
CREATE session:user123 SET 
  context = { history: [...], preferences: {...}, state: {} },
  updated_at = time::now();
\`\`\`

## Benefits for AI

- Build more context-aware agents
- Maintain coherent conversations  
- Enable long-running workflows
- Provide personalized experiences`,
    date: '2025-01-16',
  },
  {
    slug: 'model-context-protocol',
    title: 'Model Context Protocol: Connect AI Tools Directly to Data',
    excerpt: 'Connect AI tools like Cursor, VS Code, and Claude directly to your database.',
    category: 'AI Tools',
    tags: ['Artificial Intelligence', 'Software Development', 'API'],
    content: `# Model Context Protocol: Connect AI Tools Directly to Data

AI coding tools work in isolation. They can't access your actual data and context, limiting their effectiveness. MCP fixes this.

## What is MCP?

Model Context Protocol connects AI tools directly to your database:
- **Cursor** - Access data while coding
- **VS Code** - Real-time database context
- **Claude** - Direct data queries
- **Any MCP client** - Standardized access

## Use Cases

1. **AI-Assisted Coding** - Query schema while writing code
2. **Context-Aware Completion** - Get relevant suggestions
3. **Real-time Debugging** - Access live data
4. **Documentation** - Auto-generate from schema

## Benefits

- Reduced context switching
- More informed AI assistance
- Better developer experience`,
    date: '2025-01-15',
  },
  {
    slug: 'rag-graph-retrieval',
    title: 'RAG and Graph RAG: Combine Vectors with Relationships',
    excerpt: 'Combine vector similarity, graph traversal, and document retrieval in a single query.',
    category: 'AI RAG',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing'],
    content: `# RAG and Graph RAG: Combine Vectors with Relationships

Standard RAG only looks at semantic similarity—it misses relationships and structured data connections.

## How Graph RAG Works

SurrealQL blends multiple retrieval methods:

\`\`\`sql
SELECT * FROM knowledge 
WHERE vector::similarity(embedding, $query) > 0.8
FETCH author, related_articles
ORDER BY vector::distance(embedding, $query);
\`\`\`

## Components

- **Vector similarity** - Find semantically similar content
- **Graph traversal** - Follow relationships
- **Document retrieval** - Get full context
- **Hybrid queries** - All in one query

## Use Cases

1. **Knowledge bases** - Answer with context
2. **Recommendations** - Combine preferences with similarity
3. **Research** - Find related papers
4. **Support** - Link issues to solutions`,
    date: '2025-01-14',
  },
  {
    slug: 'real-time-agent-reactivity',
    title: 'Real-time Agent Reactivity',
    excerpt: 'Live queries and event triggers let agents react instantly to changing data.',
    category: 'AI Reactivity',
    tags: ['Artificial Intelligence', 'Real-time Computing', 'Event-driven'],
    content: `# Real-time Agent Reactivity

Static queries can't handle dynamic data. Agents need to react to changes as they happen.

## How It Works

- **Live queries** - Auto-update on data changes
- **Event triggers** - Run logic on specific events
- **WebSocket subscriptions** - Real-time push
- **Change streams** - Track modifications

## Example

\`\`\`sql
LIVE SELECT * FROM metrics WHERE anomaly_score > 0.9;

DEFINE EVENT on_anomaly ON metrics 
WHEN anomaly_score > 0.9 
THEN (CREATE alert { ... });
\`\`\`

## Use Cases

1. **Monitoring** - Alert on anomalies
2. **Automation** - Trigger agents on events
3. **Collaborative apps** - Sync real-time updates
4. **Trading** - React to market changes`,
    date: '2025-01-13',
  },
  {
    slug: 'ai-model-integration',
    title: 'AI Model Integration: Call LLMs Directly from Database',
    excerpt: 'Call LLMs, embedding models, or GPU inference directly from within the database.',
    category: 'AI Integration',
    tags: ['Artificial Intelligence', 'Machine Learning', 'WebAssembly'],
    content: `# AI Model Integration: Call LLMs Directly from Database

Moving data between database and AI models adds complexity and latency. Integration brings AI directly into your database.

## How It Works

- **WebAssembly plugins** - Run AI code in database
- **Vector embeddings** - Generate within queries
- **LLM calls** - Use models from SQL
- **GPU acceleration** - Fast inference

## Example

\`\`\`sql
DEFINE FIELD embedding ON documents 
SET $.embedding = ai::embed($.content);

SELECT * FROM docs 
WHERE vector::similarity(embedding, $query) > 0.7;
\`\`\`

## Use Cases

1. **Embedding generation** - Auto-embed on insert
2. **Text analysis** - Sentiment within DB
3. **Summarization** - Auto-summarize content
4. **Query enhancement** - Improve search`,
    date: '2025-01-12',
  },
  {
    slug: 'agent-governance',
    title: 'Agent Governance: Fine-grained Permissions for AI',
    excerpt: 'Fine-grained permissions, access control, and audit trails for safe AI workflows.',
    category: 'AI Governance',
    tags: ['Artificial Intelligence', 'Security', 'Compliance'],
    content: `# Agent Governance: Fine-grained Permissions for AI

AI agents need proper guardrails. Governance provides security and compliance.

## Why Governance Matters

- Data access control
- Audit trails
- Compliance requirements
- Safety mechanisms

## Features

- **Fine-grained permissions** - Row-level access
- **Audit logging** - Track all actions
- **Role-based access** - Define permissions
- **Data masking** - Protect sensitive data

## Example

\`\`\`sql
DEFINE ROLE agent {
  Permissions: {
    SELECT: "customer = $auth.id",
    UPDATE: "status = 'pending'"
  }
};
\`\`\`

## Use Cases

1. **Enterprise** - Comply with regulations
2. **Customer service** - Control data access
3. **Financial** - Audit transactions
4. **Healthcare** - Protect patient data`,
    date: '2025-01-11',
  },
  {
    slug: 'prompt-response-session',
    title: 'Prompt-Response Session Storage',
    excerpt: 'Store conversation history and context for AI apps with automatic session management.',
    category: 'AI Sessions',
    tags: ['Artificial Intelligence', 'Chatbot', 'Conversation'],
    content: `# Prompt-Response Session Storage

AI chatbots need to remember conversation context across multiple turns. Session storage enables this.

## Why Sessions Matter

- **Conversation history** - Store all prompts/responses
- **Context preservation** - Maintain state between turns
- **Automatic management** - Create/manage sessions
- **Analytics** - Track conversation patterns

## Use Cases

1. **Chatbots** - Maintain conversation context
2. **Customer support** - Track issue resolution
3. **Virtual assistants** - Personalized interactions
4. **Code assistants** - Multi-file context

## Features

- Automatic session creation
- Conversation history storage
- Context persistence
- Session analytics`,
    date: '2025-01-10',
  },
  {
    slug: 'langchain-integration',
    title: 'LangChain Integration',
    excerpt: 'Seamlessly integrate with LangChain for building AI apps with vector search and LLMs.',
    category: 'AI Integration',
    tags: ['Artificial Intelligence', 'LangChain', 'Vector Search'],
    content: `# LangChain Integration

LangChain is the leading framework for building LLM applications. Integration makes it easy.

## Why LangChain?

- **Vector search** - Native embedding support
- **LLM connectors** - OpenAI, Anthropic, and more
- **Chain builder** - Create workflows
- **Retrieval** - RAG pipeline integration

## Use Cases

1. **RAG applications** - Document Q&A
2. **Chatbots** - Knowledge-based conversations
3. **Agents** - Tool-using agents
4. **Extraction** - Structured data extraction

## Features

- Vector search integration
- LLM connectors
- Chain builder
- RAG pipeline`,
    date: '2025-01-09',
  },
  {
    slug: 'json-unstructured-data',
    title: 'JSON-Native Unstructured Data Storage',
    excerpt: 'Store and query unstructured data in its native JSON format without schema constraints.',
    category: 'Data Storage',
    tags: ['JSON', 'NoSQL', 'Unstructured Data'],
    content: `# JSON-Native Unstructured Data Storage

Modern applications use flexible data structures. Native JSON storage handles this without constraints.

## Why JSON?

- **Native JSON** - Store as-is
- **Schema-less** - No predefined schema
- **Flexible queries** - Query any field
- **Nested data** - Complex hierarchies

## Use Cases

1. **User profiles** - Variable attributes
2. **Event logs** - Flexible event structures
3. **API responses** - Variable payloads
4. **Documents** - Complex nested content

## Features

- Store JSON natively
- Query any field
- Support nesting
- Flexible schema`,
    date: '2025-01-08',
  },
  {
    slug: 'hybrid-document-graph',
    title: 'Hybrid Document-Graph Modelling',
    excerpt: 'Combine document and graph data models for flexible, relational data.',
    category: 'Data Modeling',
    tags: ['Graph Database', 'Document Database', 'Data Model'],
    content: `# Hybrid Document-Graph Modelling

Documents and graphs each have strengths. Hybrid modeling combines both worlds.

## Why Hybrid?

- **Document storage** - Flexible JSON
- **Graph relationships** - Connected data
- **Single query** - Both in SurrealQL
- **Flexible schema** - Evolving structures

## Use Cases

1. **Organization data** - Documents with relationships
2. **Product catalogs** - Items with connections
3. **Content management** - Articles with links
4. **User systems** - Profiles with social graphs

## Features

- Documents + graphs
- Single query language
- Flexible schema
- Relationship traversal`,
    date: '2025-01-07',
  },
  {
    slug: 'distributed-storage',
    title: 'Distributed Storage for Global Scale',
    excerpt: 'Scale horizontally across multiple nodes with distributed storage.',
    category: 'Infrastructure',
    tags: ['Distributed Computing', 'Scalability', 'Database'],
    content: `# Distributed Storage for Global Scale

Modern applications need to scale globally. Distributed storage enables horizontal scaling.

## Why Distributed?

- **Horizontal scaling** - Add nodes easily
- **Data distribution** - Automatic sharding
- **Replication** - High availability
- **Multi-region** - Global deployment

## Use Cases

1. **Global apps** - Worldwide users
2. **Microservices** - Distributed architecture
3. **High traffic** - Scale under load
4. **Disaster recovery** - Multi-region redundancy

## Features

- Horizontal scaling
- Auto-sharding
- Replication
- Multi-region`,
    date: '2025-01-06',
  },
  {
    slug: 'cloud-native',
    title: 'Cloud Native Architecture',
    excerpt: 'Deploy on any cloud with Kubernetes support and managed services.',
    category: 'Infrastructure',
    tags: ['Cloud Computing', 'Kubernetes', 'DevOps'],
    content: `# Cloud Native Architecture

Modern applications run in the cloud. Cloud native architecture enables deployment anywhere.

## Why Cloud Native?

- **Kubernetes** - Native K8s support
- **Docker** - Container deployment
- **Managed services** - Cloud DBaaS
- **Multi-cloud** - Deploy anywhere

## Use Cases

1. **Cloud migrations** - Move to cloud
2. **Microservices** - Containerized apps
3. **Hybrid deployment** - On-prem + cloud
4. **Edge computing** - Distributed locations

## Features

- Kubernetes support
- Docker containers
- Managed services
- Multi-cloud deployment`,
    date: '2025-01-05',
  },
  {
    slug: 'embeddings-semantic-search',
    title: 'Embeddings and Semantic Search',
    excerpt: 'Generate embeddings and perform semantic similarity search.',
    category: 'AI Search',
    tags: ['Artificial Intelligence', 'Embeddings', 'Semantic Search'],
    content: `# Embeddings and Semantic Search

AI understands vector representations. Embeddings enable semantic search.

## Why Embeddings?

- **Embedding generation** - Built-in AI integration
- **Similarity search** - Vector operations
- **Hybrid search** - Vector + keyword
- **Ranking** - Relevance scoring

## Use Cases

1. **Semantic search** - Natural language queries
2. **Recommendations** - Similar items
3. **Deduplication** - Find duplicates
4. **Clustering** - Group similar content

## Features

- Generate embeddings
- Vector similarity
- Hybrid search
- Relevance ranking`,
    date: '2025-01-04',
  },
  {
    slug: 'acid-transactions',
    title: 'ACID Transactions for Data Integrity',
    excerpt: 'Guarantee data integrity with ACID transactions across the database.',
    category: 'Data Integrity',
    tags: ['ACID', 'Database', 'Transactions'],
    content: `# ACID Transactions for Data Integrity

ACID transactions guarantee data integrity—critical for financial and enterprise applications.

## Why ACID?

- **Atomicity** - All-or-nothing operations
- **Consistency** - Valid state transitions
- **Isolation** - Concurrent operations
- **Durability** - Persistent commit

## Use Cases

1. **Financial systems** - Account operations
2. **Inventory** - Stock management
3. **Bookings** - Reservation systems
4. **Auditing** - Complete records

## Features

- Atomic transactions
- Consistency guarantees
- Isolation levels
- Durability`,
    date: '2025-01-03',
  },
  {
    slug: 'schema-evolution',
    title: 'Schema Evolution: Flexible Without Migration',
    excerpt: 'Evolve your schema without expensive migrations.',
    category: 'Data Modeling',
    tags: ['Database Schema', 'Migration', 'Schema'],
    content: `# Schema Evolution: Flexible Without Migration

Traditional databases require expensive migrations. Schema evolution enables flexible changes.

## Why No Migrations?

- **Schema-less** - Add fields freely
- **Type coercion** - Automatic handling
- **Default values** - Define fallbacks
- **Optional fields** - Evolving structures

## Use Cases

1. **Rapid prototyping** - Quick iteration
2. **Legacy integration** - Migrate gradually
3. **Feature flags** - Selective rollout
4. **A/B testing** - New fields

## Features

- Add fields freely
- Type coercion
- Default values
- Optional fields`,
    date: '2025-01-02',
  },
  {
    slug: 'full-text-search',
    title: 'Full-Text Search at Scale',
    excerpt: 'Performant full-text search with language-specific analyzers and ranking.',
    category: 'AI Search',
    tags: ['Information Retrieval', 'Search Engine', 'Text Mining'],
    content: `# Full-Text Search at Scale

Search is fundamental to AI applications. Full-text search provides performant, relevant results.

## Why Full-Text Search?

- **Language analyzers** - Language-specific processing
- **Ranking** - Relevance scoring
- **Performance** - Fast at scale
- **Flexibility** - Query options

## Use Cases

1. **Document search** - Find relevant documents
2. **Content discovery** - Explore knowledge bases
3. **Log analysis** - Search through logs
4. **Customer support** - Find answers

## Features

- Language analyzers
- Relevance ranking
- Fast performance
- Flexible queries`,
    date: '2025-01-01',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h1 className="text-5xl font-semibold tracking-[-0.03e] md:text-7xl">
          Blog
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-zinc-400">
          Articles on AI agent development, database technology, and modern software.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a 
              key={article.slug} 
              href={article.slug}
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
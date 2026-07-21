type JsonSchema = Record<string, unknown>;

interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: JsonSchema;
  execute: (input: Record<string, unknown>) => Promise<string>;
  annotations: {
    readOnlyHint: boolean;
    untrustedContentHint: boolean;
  };
}

interface ModernModelContext {
  registerTool: (tool: WebMcpTool, options?: { signal?: AbortSignal }) => Promise<unknown> | unknown;
}

interface LegacyModelContext {
  provideContext: (context: { tools: WebMcpTool[] }) => Promise<unknown> | unknown;
}

type FetchLike = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

async function fetchJson(fetchImpl: FetchLike, url: string): Promise<Record<string, unknown>> {
  const response = await fetchImpl(url);
  if (!response.ok) throw new Error(`DocIngest request failed with HTTP ${response.status}`);
  return response.json();
}

export function createDocIngestWebMcpTools(apiUrl = '/api', fetchImpl: FetchLike = fetch): WebMcpTool[] {
  return [
    {
      name: 'find_docingest_library',
      description: 'Find an indexed documentation source by library, framework, product, or domain name.',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string', minLength: 2, description: 'Library or documentation source to find.' },
          limit: { type: 'integer', minimum: 1, maximum: 10, default: 5 },
        },
        required: ['query'],
      },
      execute: async ({ query, limit = 5 }) => {
        const safeQuery = String(query || '').trim();
        if (safeQuery.length < 2) throw new Error('query must contain at least two characters');
        const safeLimit = Math.min(10, Math.max(1, Number(limit) || 5));
        const data = await fetchJson(fetchImpl, `${apiUrl}/docs/autocomplete?q=${encodeURIComponent(safeQuery)}&limit=${safeLimit}`);
        return JSON.stringify(data);
      },
      annotations: { readOnlyHint: true, untrustedContentHint: true },
    },
    {
      name: 'search_docingest',
      description: 'Search approved sections across the DocIngest documentation corpus with snapshot provenance.',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string', minLength: 2, description: 'Documentation question or keywords.' },
          limit: { type: 'integer', minimum: 1, maximum: 10, default: 5 },
        },
        required: ['query'],
      },
      execute: async ({ query, limit = 5 }) => {
        const safeQuery = String(query || '').trim();
        if (safeQuery.length < 2) throw new Error('query must contain at least two characters');
        const safeLimit = Math.min(10, Math.max(1, Number(limit) || 5));
        const data = await fetchJson(fetchImpl, `${apiUrl}/docs/sections/search?q=${encodeURIComponent(safeQuery)}&limit=${safeLimit}`);
        return JSON.stringify(data);
      },
      annotations: { readOnlyHint: true, untrustedContentHint: true },
    },
  ];
}

export function registerDocIngestWebMcp(apiUrl = '/api'): () => void {
  const controller = new AbortController();
  const tools = createDocIngestWebMcpTools(apiUrl);
  const modernContext = (document as Document & { modelContext?: ModernModelContext }).modelContext;

  if (modernContext?.registerTool) {
    try {
      Promise.all(tools.map(tool => modernContext.registerTool(tool, { signal: controller.signal })))
        .catch(error => console.warn('WebMCP tool registration failed:', error));
    } catch (error) {
      console.warn('WebMCP tool registration failed:', error);
    }
    return () => controller.abort();
  }

  const legacyContext = (navigator as Navigator & { modelContext?: LegacyModelContext }).modelContext;
  if (legacyContext?.provideContext) {
    try {
      Promise.resolve(legacyContext.provideContext({ tools }))
        .catch(error => console.warn('Legacy WebMCP tool registration failed:', error));
    } catch (error) {
      console.warn('Legacy WebMCP tool registration failed:', error);
    }
  }

  return () => controller.abort();
}

import crypto from 'node:crypto';
import mcpPackage from '../mcp-server/package.json';

export const PUBLIC_BASE_URL = 'https://docingest.com';
export const API_CATALOG_PROFILE = 'https://www.rfc-editor.org/info/rfc9727';
export const AGENT_SKILLS_SCHEMA = 'https://schemas.agentskills.io/discovery/0.2.0/schema.json';

export const HOMEPAGE_LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</.well-known/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json;version=3.1"',
  '</mcp-guide>; rel="service-doc"; type="text/html"',
].join(', ');

export const HOMEPAGE_MARKDOWN = `# DocIngest

DocIngest turns documentation sites into searchable context for humans and coding agents.

## What you can do

- [Browse indexed documentation](/view)
- [Add a documentation source](/add)
- [Set up the DocIngest MCP server](/mcp-guide)
- [Read the API catalog](/.well-known/api-catalog)
- [Discover DocIngest agent skills](/.well-known/agent-skills/index.json)

## MCP setup

Run the local stdio MCP server from npm:

\`\`\`sh
claude mcp add docingest -- npx -y @docingest/mcp-server
\`\`\`

The same package works with Cursor, Windsurf, Codex, and other MCP clients that support stdio servers.

## Public API

The public read API supports library resolution, approved documentation reads, and cross-corpus section search. See [the OpenAPI document](/.well-known/openapi.json) for the machine-readable contract.
`;

export function acceptsMarkdown(acceptHeader: string | string[] | undefined): boolean {
  if (!acceptHeader) return false;
  const values = Array.isArray(acceptHeader) ? acceptHeader : [acceptHeader];

  return values.some(value => value.split(',').some(range => {
    const [mediaType, ...parameters] = range.trim().toLowerCase().split(';');
    if (mediaType !== 'text/markdown') return false;

    const quality = parameters
      .map(parameter => parameter.trim())
      .find(parameter => parameter.startsWith('q='));
    return quality ? Number.parseFloat(quality.slice(2)) > 0 : true;
  }));
}

export function createApiCatalog(baseUrl = PUBLIC_BASE_URL) {
  return {
    linkset: [
      {
        anchor: `${baseUrl}/api`,
        'service-desc': [
          {
            href: `${baseUrl}/.well-known/openapi.json`,
            type: 'application/vnd.oai.openapi+json;version=3.1',
          },
        ],
        'service-doc': [
          {
            href: `${baseUrl}/mcp-guide`,
            type: 'text/html',
          },
        ],
        status: [
          {
            href: `${baseUrl}/health`,
            type: 'text/plain',
          },
        ],
      },
    ],
  };
}

export function createOpenApiDocument(baseUrl = PUBLIC_BASE_URL) {
  return {
    openapi: '3.1.0',
    info: {
      title: 'DocIngest public read API',
      version: '1.0.0',
      description: 'Resolve, read, and search approved documentation snapshots indexed by DocIngest.',
    },
    servers: [{ url: `${baseUrl}/api` }],
    paths: {
      '/docs/autocomplete': {
        get: {
          operationId: 'findDocumentationSources',
          summary: 'Find indexed documentation sources by name',
          parameters: [
            { name: 'q', in: 'query', required: true, schema: { type: 'string', minLength: 2 } },
            { name: 'limit', in: 'query', schema: { type: 'integer', minimum: 1, maximum: 20, default: 5 } },
          ],
          responses: { '200': { description: 'Matching documentation sources' } },
        },
      },
      '/docs/domain/{domain}': {
        get: {
          operationId: 'readDocumentationSource',
          summary: 'Read an approved documentation snapshot',
          parameters: [
            { name: 'domain', in: 'path', required: true, schema: { type: 'string' } },
            { name: 'topic', in: 'query', schema: { type: 'string' } },
            { name: 'maxTokens', in: 'query', schema: { type: 'integer', minimum: 500, maximum: 20000, default: 5000 } },
            { name: 'snapshotId', in: 'query', schema: { type: 'string' } },
          ],
          responses: {
            '200': { description: 'Approved documentation content with snapshot provenance' },
            '404': { description: 'Documentation source or approved snapshot not found' },
          },
        },
      },
      '/docs/sections/search': {
        get: {
          operationId: 'searchDocumentationSections',
          summary: 'Search approved documentation sections',
          parameters: [
            { name: 'q', in: 'query', required: true, schema: { type: 'string', minLength: 2 } },
            { name: 'limit', in: 'query', schema: { type: 'integer', minimum: 1, maximum: 20, default: 5 } },
          ],
          responses: { '200': { description: 'Ranked documentation sections with snapshot provenance' } },
        },
      },
    },
  };
}

export function createMcpPackageManifest() {
  return {
    $schema: 'https://static.modelcontextprotocol.io/schemas/2025-10-17/server.schema.json',
    name: mcpPackage.mcpName,
    description: 'Search and read approved documentation snapshots from the DocIngest corpus.',
    repository: {
      url: 'https://github.com/Amal-David/docingest',
      source: 'github',
    },
    version: mcpPackage.version,
    packages: [
      {
        registryType: 'npm',
        identifier: mcpPackage.name,
        version: mcpPackage.version,
        transport: { type: 'stdio' },
      },
    ],
  };
}

export function createAgentSkillsIndex(skillBytes: string | Buffer, baseUrl = PUBLIC_BASE_URL) {
  const digest = crypto.createHash('sha256').update(skillBytes).digest('hex');
  return {
    $schema: AGENT_SKILLS_SCHEMA,
    skills: [
      {
        name: 'docingest-docs',
        type: 'skill-md',
        description: 'Find, search, and read approved documentation snapshots through DocIngest.',
        url: `${baseUrl}/.well-known/agent-skills/docingest-docs/SKILL.md`,
        digest: `sha256:${digest}`,
      },
    ],
  };
}

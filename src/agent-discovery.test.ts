import assert from 'node:assert/strict';
import test from 'node:test';
import {
  AGENT_SKILLS_SCHEMA,
  API_CATALOG_PROFILE,
  HOMEPAGE_LINK_HEADER,
  acceptsMarkdown,
  createAgentSkillsIndex,
  createApiCatalog,
  createMcpPackageManifest,
  createOpenApiDocument,
} from './agent-discovery';

test('negotiates Markdown only when the client accepts it', () => {
  assert.equal(acceptsMarkdown(undefined), false);
  assert.equal(acceptsMarkdown('text/html,application/xhtml+xml'), false);
  assert.equal(acceptsMarkdown('text/markdown'), true);
  assert.equal(acceptsMarkdown('text/html, text/markdown; q=0.8'), true);
  assert.equal(acceptsMarkdown('text/markdown; q=0'), false);
});

test('advertises registered discovery relations from the homepage', () => {
  assert.match(HOMEPAGE_LINK_HEADER, /rel="api-catalog"/);
  assert.match(HOMEPAGE_LINK_HEADER, /rel="service-desc"/);
  assert.match(HOMEPAGE_LINK_HEADER, /rel="service-doc"/);
});

test('builds an RFC 9727 JSON linkset catalog', () => {
  const catalog = createApiCatalog('https://example.test');
  assert.equal(catalog.linkset[0].anchor, 'https://example.test/api');
  assert.equal(catalog.linkset[0]['service-desc'][0].href, 'https://example.test/.well-known/openapi.json');
  assert.equal(API_CATALOG_PROFILE, 'https://www.rfc-editor.org/info/rfc9727');
});

test('describes only the real public read APIs', () => {
  const document = createOpenApiDocument('https://example.test');
  assert.equal(document.openapi, '3.1.0');
  assert.deepEqual(Object.keys(document.paths).sort(), [
    '/docs/autocomplete',
    '/docs/domain/{domain}',
    '/docs/sections/search',
  ]);
});

test('publishes the existing npm stdio MCP package without claiming a remote transport', () => {
  const manifest = createMcpPackageManifest();
  assert.equal(manifest.packages[0].identifier, '@docingest/mcp-server');
  assert.equal(manifest.packages[0].transport.type, 'stdio');
  assert.equal('remotes' in manifest, false);
});

test('binds the skills index to the exact skill bytes', () => {
  const skill = Buffer.from('skill contents\n');
  const index = createAgentSkillsIndex(skill, 'https://example.test');
  assert.equal(index.$schema, AGENT_SKILLS_SCHEMA);
  assert.equal(index.skills[0].url, 'https://example.test/.well-known/agent-skills/docingest-docs/SKILL.md');
  assert.match(index.skills[0].digest, /^sha256:[a-f0-9]{64}$/);
  assert.equal(index.skills[0].digest, 'sha256:5e2f14836484378e362bbad6652173a61c140ded4de35abee9123213469b2343');
});

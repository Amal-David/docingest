import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import test from 'node:test';
import request from 'supertest';

test('serves agent discovery contracts before the SPA fallback', async () => {
  process.env.NODE_ENV = 'test';
  const { app } = await import('./frontend-static-server');

  const markdownResponse = await request(app).get('/').set('Accept', 'text/markdown');
  assert.equal(markdownResponse.status, 200);
  assert.match(markdownResponse.headers['content-type'] || '', /^text\/markdown/);
  assert.match(markdownResponse.headers.vary || '', /Accept/i);
  assert.match(markdownResponse.headers.link || '', /rel="api-catalog"/);
  assert.match(markdownResponse.text, /^# DocIngest/m);

  const htmlResponse = await request(app).get('/').set('Accept', 'text/html');
  assert.match(htmlResponse.headers['content-type'] || '', /^text\/html/);
  assert.match(htmlResponse.headers.link || '', /rel="api-catalog"/);

  const catalogResponse = await request(app).get('/.well-known/api-catalog');
  assert.match(catalogResponse.headers['content-type'] || '', /^application\/linkset\+json/);
  const catalog = catalogResponse.body as { linkset: Array<{ anchor: string }> };
  assert.equal(catalog.linkset[0].anchor, 'https://docingest.com/api');

  const openApiResponse = await request(app).get('/.well-known/openapi.json');
  assert.match(openApiResponse.headers['content-type'] || '', /^application\/vnd\.oai\.openapi\+json/);
  assert.equal(openApiResponse.body.openapi, '3.1.0');

  const skillsResponse = await request(app).get('/.well-known/agent-skills/index.json');
  assert.equal(skillsResponse.headers['access-control-allow-origin'], '*');
  const skills = skillsResponse.body as { skills: Array<{ url: string; digest: string }> };
  const skillResponse = await request(app).get(new URL(skills.skills[0].url).pathname).buffer(true);
  assert.match(skillResponse.headers['content-type'] || '', /^text\/markdown/);
  const skillBytes = Buffer.from(skillResponse.text);
  assert.equal(skills.skills[0].digest, `sha256:${crypto.createHash('sha256').update(skillBytes).digest('hex')}`);

  const mcpResponse = await request(app).get('/.well-known/mcp.json');
  const mcp = mcpResponse.body as { packages: Array<{ transport: { type: string } }> };
  assert.equal(mcp.packages[0].transport.type, 'stdio');

  const robotsResponse = await request(app).get('/robots.txt');
  assert.match(robotsResponse.headers['content-type'] || '', /^text\/plain/);
  assert.match(robotsResponse.text, /Content-Signal: ai-train=no, search=yes, ai-input=yes/);

  const missingAuthResponse = await request(app).get('/.well-known/openid-configuration');
  assert.equal(missingAuthResponse.status, 404);
  assert.match(missingAuthResponse.headers['content-type'] || '', /^application\/json/);

  const authInstructionsResponse = await request(app).get('/auth.md');
  assert.equal(authInstructionsResponse.status, 404);
  assert.match(authInstructionsResponse.headers['content-type'] || '', /^text\/plain/);

  const catalogHeadResponse = await request(app).head('/.well-known/api-catalog');
  assert.equal(catalogHeadResponse.status, 200);
  assert.match(catalogHeadResponse.headers.link || '', /rel="api-catalog"/);
});

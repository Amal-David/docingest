import assert from 'node:assert/strict';
import test from 'node:test';
import { createDocIngestWebMcpTools, registerDocIngestWebMcp } from './webmcp';

test('WebMCP exposes read-only find and search tools backed by public APIs', async () => {
  const requests: string[] = [];
  const fetchImpl = async (input: RequestInfo | URL) => {
    requests.push(String(input));
    return new Response(JSON.stringify({ results: [{ domain: 'react.dev' }] }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  };
  const tools = createDocIngestWebMcpTools('/api', fetchImpl);

  assert.deepEqual(tools.map(tool => tool.name), ['find_docingest_library', 'search_docingest']);
  assert.ok(tools.every(tool => tool.annotations.readOnlyHint));
  assert.match(await tools[0].execute({ query: 'react', limit: 3 }), /react\.dev/);
  assert.equal(requests[0], '/api/docs/autocomplete?q=react&limit=3');
  await assert.rejects(() => tools[1].execute({ query: 'x' }), /at least two characters/);
});

test('registers both tools with the current document.modelContext API', () => {
  const registered: Array<{ name: string; signal?: AbortSignal }> = [];
  const originalDocument = globalThis.document;
  Object.defineProperty(globalThis, 'document', {
    configurable: true,
    value: {
      modelContext: {
        registerTool: (tool: { name: string }, options?: { signal?: AbortSignal }) => {
          registered.push({ name: tool.name, signal: options?.signal });
        },
      },
    },
  });

  try {
    const cleanup = registerDocIngestWebMcp('/api');
    assert.deepEqual(registered.map(tool => tool.name), ['find_docingest_library', 'search_docingest']);
    assert.ok(registered.every(tool => tool.signal && !tool.signal.aborted));
    cleanup();
    assert.ok(registered.every(tool => tool.signal?.aborted));
  } finally {
    Object.defineProperty(globalThis, 'document', { configurable: true, value: originalDocument });
  }
});

test('logs synchronous errors from the current document.modelContext API', () => {
  const originalDocument = globalThis.document;
  const originalWarn = console.warn;
  const warnings: unknown[][] = [];
  Object.defineProperty(globalThis, 'document', {
    configurable: true,
    value: {
      modelContext: {
        registerTool: () => {
          throw new Error('registration failed');
        },
      },
    },
  });
  console.warn = (...args: unknown[]) => warnings.push(args);

  try {
    assert.doesNotThrow(() => registerDocIngestWebMcp('/api'));
    assert.equal(warnings.length, 1);
    assert.equal(warnings[0][0], 'WebMCP tool registration failed:');
  } finally {
    console.warn = originalWarn;
    Object.defineProperty(globalThis, 'document', { configurable: true, value: originalDocument });
  }
});

test('logs synchronous errors from the legacy navigator.modelContext API', () => {
  const originalDocument = globalThis.document;
  const originalNavigator = globalThis.navigator;
  const originalWarn = console.warn;
  const warnings: unknown[][] = [];
  Object.defineProperty(globalThis, 'document', { configurable: true, value: {} });
  Object.defineProperty(globalThis, 'navigator', {
    configurable: true,
    value: {
      modelContext: {
        provideContext: () => {
          throw new Error('legacy registration failed');
        },
      },
    },
  });
  console.warn = (...args: unknown[]) => warnings.push(args);

  try {
    assert.doesNotThrow(() => registerDocIngestWebMcp('/api'));
    assert.equal(warnings.length, 1);
    assert.equal(warnings[0][0], 'Legacy WebMCP tool registration failed:');
  } finally {
    console.warn = originalWarn;
    Object.defineProperty(globalThis, 'document', { configurable: true, value: originalDocument });
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: originalNavigator });
  }
});

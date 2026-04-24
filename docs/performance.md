# DocIngest Performance Notes

DocIngest has two latency-sensitive paths: the web app for humans and the MCP server for agents. The biggest wins usually come from returning less data, keeping Redis warm, and avoiding filesystem scans on hot routes.

## What Is Faster Now

- `GET /api/docs/list` returns metadata only, so `/view` does not download every markdown file just to render the index.
- `GET /api/docs/domain/:domain` accepts `topic` and `maxTokens`, allowing MCP clients to fetch scoped docs instead of the full markdown blob.
- The MCP server applies request timeouts, clamps large responses, and caches repeated API calls in-process.
- The MCP package includes a CLI mode for quick testing without setting up an editor.

## MCP Path

The recommended agent flow is:

1. `find-docs` to resolve a library name to a domain.
2. `read-docs` with `topic` and `maxTokens` when the agent needs focused context.
3. `query-docs` when the agent needs cross-library examples or snippets.

Useful environment variables:

```bash
DOCINGEST_API_URL=https://docingest.com/api
DOCINGEST_TIMEOUT_MS=10000
DOCINGEST_CACHE_TTL_MS=300000
```

## Redis Fast Path

Redis is the recommended self-hosted search/cache layer. The included `docker-compose.yml` runs Redis locally on host port `6380`:

```bash
docker compose up -d redis
cd server
npm run build-index
```

Use `REDIS_HOST`, `REDIS_PORT`, and optionally `REDIS_PASSWORD` to point the backend at local, remote, or production Redis. See [Redis setup](./setup/redis.md) for the full guide.

If you want the full local crawl/search stack, start the Firecrawl Compose profile instead:

```bash
docker compose --profile firecrawl up -d
```

## High-Impact Next Wins

- Keep Redis enabled in production and rebuild the search index after new crawls with `npm run build-index` from `server/`.
- Cache `GET /api/docs/domain/:domain` responses in Redis with ETags, keyed by domain, version, topic, and token limit.
- Replace filesystem scans on list/search fallback paths with a small generated manifest of domains and metadata.
- Add a domain-level search endpoint so agents can ask for matching sections inside one docs site instead of reading large files.
- Lazy-load heavy frontend markdown/rendering dependencies on docs pages, especially syntax highlighting.
- Virtualize long docs pages and large result lists so the browser only renders visible content.
- Add CDN or reverse-proxy caching for stable read-only endpoints such as docs metadata, screenshots, and MCP package docs.

## Production Checks

- Confirm `/api/docs/fast-search` returns `source: "redis"` for common searches.
- Confirm `/api/docs/list` stays metadata-only and does not include raw markdown content.
- Check browser Web Vitals on `/view` and `/docs/:domain` after large corpus imports.
- Track API response sizes for `/api/docs/domain/:domain`; large responses usually mean callers should pass `topic` or `maxTokens`.

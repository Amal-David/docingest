# Redis Setup

DocIngest uses Redis for the fast path: autocomplete, full-text search, popular searches, and cached documentation content. The app can still run without Redis, but search falls back to filesystem scans and will feel slower as the corpus grows.

## Local Self-Hosted Redis

The root `docker-compose.yml` includes a Redis service configured for local development:

```bash
docker compose up -d redis
```

That starts Redis with:

- Container name: `docingest-redis`
- Container port: `6379`
- Host port: `6380`
- Persistent Docker volume: `redis_data`
- Eviction policy: `allkeys-lru`
- Append-only persistence enabled

Use these backend environment variables for the included local Redis:

```bash
REDIS_HOST=localhost
REDIS_PORT=6380
```

The optional Redis UI is also available:

```bash
docker compose up -d redis-commander
```

Then open `http://localhost:8082`.

If you also want a local Firecrawl stack, use the Firecrawl profile:

```bash
docker compose --profile firecrawl up -d
```

That command starts Redis plus Firecrawl API, Playwright, RabbitMQ, and Firecrawl Postgres. See [Firecrawl setup](./firecrawl.md) for the crawl-provider configuration.

## Remote Or Separately Hosted Redis

For production or a standalone Redis host, point the backend at your Redis endpoint:

```bash
REDIS_HOST=your-redis-host
REDIS_PORT=6379
REDIS_PASSWORD=your-password
```

Keep Redis private to your app network. Do not expose Redis directly to the public internet.

## Build The Search Index

After Redis is running and you have documentation under `server/storage/docs`, build the search index:

```bash
cd server
npm run build-index
```

If you want to clear and rebuild the index:

```bash
cd server
npm run build-index:clear
```

Run this after large imports, re-crawls, or production corpus updates.

## Verify Redis Is Being Used

Start the backend and check the logs for:

```text
Redis connected - fast search enabled
```

You can also verify search responses:

```bash
curl "http://localhost:8001/api/docs/fast-search?q=react&limit=5"
curl "http://localhost:8001/api/admin/index/stats"
```

Fast-search responses should include `source: "redis"` when Redis is connected and indexed.

## What Happens Without Redis

If Redis is not available, DocIngest keeps running with filesystem fallbacks. That is fine for small local tests, but it is not the recommended setup for a public or large self-hosted corpus.

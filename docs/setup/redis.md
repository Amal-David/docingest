# Redis Setup

DocIngest uses Redis for the fast path: autocomplete, full-text search, popular searches, and cached documentation content. The app can still run without Redis, but search falls back to filesystem scans and will feel slower as the corpus grows.

## Choose A Docker Mode

Use the [Docker run modes](./docker.md) guide if you want the full menu:

- Run everything local
- Run only Redis
- Run Redis with UI
- Run Redis and Firecrawl without UI
- Use hosted or external services

## Run Only Redis

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

## Run Redis With UI

The optional Redis UI is available behind the `tools` profile:

```bash
docker compose --profile tools up -d
```

Then open `http://localhost:8082`.

## Run Redis With Firecrawl

If you also want a local Firecrawl stack, use the Firecrawl profile:

```bash
docker compose --profile firecrawl up -d
```

That command starts DocIngest Redis plus Firecrawl API, Firecrawl Redis, Playwright, RabbitMQ, and Firecrawl Postgres. See [Firecrawl setup](./firecrawl.md) for the crawl-provider configuration.

If you want Redis, Firecrawl, and Redis Commander together:

```bash
docker compose --profile firecrawl --profile tools up -d
```

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

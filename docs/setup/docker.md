# Docker Run Modes

DocIngest uses Docker Compose for local infrastructure. Pick the mode that matches what you want to run.

## Run Everything Local

Use this when you want the local crawl/search stack in one command:

```bash
docker compose --profile firecrawl --profile tools up -d
```

This starts:

- Redis for DocIngest search/cache
- Redis Commander at `http://localhost:8082`
- Firecrawl API at `http://localhost:3002`
- Firecrawl Playwright service
- Firecrawl RabbitMQ
- Firecrawl Postgres

Use these backend env vars:

```bash
CRAWL_PROVIDER=firecrawl
FIRECRAWL_API_URL=http://localhost:3002/v1
REDIS_HOST=localhost
REDIS_PORT=6380
```

Then run the DocIngest app:

```bash
cd server
npm start
```

```bash
npm run dev-start
```

## Run Only Redis

Use this when you are using hosted Firecrawl or another crawl provider, but still want local fast search/cache:

```bash
docker compose up -d redis
```

Use these backend env vars:

```bash
REDIS_HOST=localhost
REDIS_PORT=6380
```

## Run Redis With UI

Use this when you want to inspect Redis locally:

```bash
docker compose --profile tools up -d
```

Open:

```text
http://localhost:8082
```

## Run Redis And Firecrawl Without UI

Use this when you want the full crawl/search stack but do not need Redis Commander:

```bash
docker compose --profile firecrawl up -d
```

## Hosted Or External Services

Use this when Redis and Firecrawl are already running somewhere else:

```bash
REDIS_HOST=your-redis-host
REDIS_PORT=6379
REDIS_PASSWORD=your-password
CRAWL_PROVIDER=firecrawl
FIRECRAWL_API_URL=https://api.firecrawl.dev/v1
FIRECRAWL_API_KEY=fc-your-api-key
```

## Stop Services

```bash
docker compose --profile firecrawl --profile tools down
```

Add `-v` only when you intentionally want to remove local Redis and Firecrawl Postgres data:

```bash
docker compose --profile firecrawl --profile tools down -v
```

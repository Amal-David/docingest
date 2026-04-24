# DocIngest Reference

This page holds the details that are useful once you already know what DocIngest is and want to operate, extend, or deploy it.

## Product Shape

DocIngest has three connected layers:

1. Ingestion engine
   Crawls documentation sites, extracts content, and stores it locally.
2. Searchable index
   Lets people browse and search indexed documentation from the web UI.
3. MCP server
   Lets coding agents query the same docs corpus directly from AI tools.

That means you can treat DocIngest as:

- A self-hosted docs ingestion pipeline
- A searchable internal or public documentation index
- An MCP-ready context layer for coding agents

## Web App Usage

### Add Documentation

1. Open the app.
2. Paste a documentation URL.
3. Set crawl options such as page limits or include/exclude patterns.
4. Start the crawl.
5. Save the extracted pages into the local docs index.

### Browse Indexed Docs

- Search from the homepage.
- Browse the indexed corpus from `/view`.
- Open a specific docs domain from `/docs/:domain`.
- Re-sync an indexed docs source when upstream content changes.

## Storage Model

Indexed documentation is stored on disk:

```text
docingest/
├── server/storage/docs/
│   ├── example.com/
│   │   ├── documentation_2025-01-15T10:30:00.000Z.md
│   │   └── metadata.json
│   └── another-site.com/
│       ├── documentation_2025-01-16T14:20:00.000Z.md
│       └── metadata.json
```

This makes the corpus easy to inspect, back up, diff, and reuse.

The hosted `docingest.com` corpus is not fully committed to Git. The repository keeps the app and storage structure; the deployed service holds the live indexed docs data.

## API Surface

Common routes:

- `GET /api/docs/list`
- `GET /api/docs/content`
- `GET /api/docs/domain/:domain?topic=hooks&maxTokens=5000`
- `GET /api/docs/download`
- `POST /api/docs/save`

The app also exposes crawl and admin endpoints used by the UI.

## Deployment Shape

Typical production setup:

- React frontend build served behind Nginx
- Node/Express backend managed by PM2
- Firecrawl for external crawling
- Redis for fast search and cached docs
- Local markdown storage for the indexed corpus

Production setup guides:

- [Firecrawl setup](./setup/firecrawl.md)
- [Redis setup](./setup/redis.md)
- [Nginx setup](./setup/nginx.md)

## Open Source Direction

DocIngest is best understood as infrastructure for documentation retrieval:

- Useful on its own for humans
- More valuable when paired with coding agents
- Flexible enough for public indexes, internal corpora, and experiments

The hosted site at [docingest.com](https://docingest.com) can act as a public demo and discovery layer, while this repository remains the open-source engine underneath it.

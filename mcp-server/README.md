# DocIngest MCP Server

Up-to-date documentation for LLMs and AI code editors.

## Installation

### Option 1: npx (Recommended)

```bash
# Claude Code
claude mcp add docingest -- npx -y @docingest/mcp-server

# Or run directly
npx @docingest/mcp-server
```

### Option 2: Global Install

```bash
npm install -g @docingest/mcp-server
docingest-mcp
```

## Configure Your AI Tool

#### Claude Code

```bash
claude mcp add docingest -- npx -y @docingest/mcp-server
```

#### Cursor

Add to `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "docingest": {
      "command": "npx",
      "args": ["-y", "@docingest/mcp-server"]
    }
  }
}
```

#### Windsurf

Add to your Windsurf MCP configuration:

```json
{
  "mcpServers": {
    "docingest": {
      "command": "npx",
      "args": ["-y", "@docingest/mcp-server"]
    }
  }
}
```

#### Codex

Add to your Codex MCP configuration:

```json
{
  "mcpServers": {
    "docingest": {
      "command": "npx",
      "args": ["-y", "@docingest/mcp-server"]
    }
  }
}
```

## Usage

Once installed, you can use DocIngest in your prompts:

```
use docingest to find React hooks documentation
```

Or explicitly call the tools:

```
First, resolve the library ID for "nextjs", then get the routing documentation
```

## CLI Access

The same package also works as a small CLI for quick testing or scripts:

```bash
# Find matching docs domains
npx @docingest/mcp-server find react

# Read scoped docs without configuring an MCP client
npx @docingest/mcp-server read react.dev --topic hooks --max-tokens 5000

# Search across the indexed corpus
npx @docingest/mcp-server search "server components" --limit 5
```

## Available Tools

### `find-docs`

Find documentation sources by library name.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `libraryName` | Yes | Name of the library (e.g., "react", "nextjs") |

### `read-docs`

Fetch full documentation content for a library.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `domain` | Yes | Domain from find-docs (e.g., "react.dev") |
| `topic` | No | Filter to specific topic (e.g., "hooks") |
| `maxTokens` | No | Maximum tokens to return (default: 5000) |
| `snapshotId` | No | Immutable snapshot ID for an exact historical read |
| `version` | No | Compatibility selector for an older version/upstream label; prefer `snapshotId` |

Every successful snapshot-backed read includes its snapshot ID, content hash,
source URL, capture time, quality verdict, and any upstream version/channel.
Legacy records remain readable through the compatibility path and are labelled
`legacy-unverified` rather than being assigned a fabricated release version.

### `query-docs`

Search approved documentation sections using deterministic lexical ranking.
Results contain bounded content plus the snapshot ID, hash, canonical URL,
freshness, quality status, and optional upstream version.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `query` | Yes | Search query |
| `limit` | No | Maximum results (default: 5) |

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DOCINGEST_API_URL` | `https://docingest.com/api` | DocIngest API endpoint |
| `DOCINGEST_TIMEOUT_MS` | `10000` | Request timeout for MCP and CLI calls |
| `DOCINGEST_CACHE_TTL_MS` | `300000` | In-process API response cache TTL |
| `DOCINGEST_CACHE_MAX_ENTRIES` | `100` | Maximum in-process API responses kept before pruning |

## Performance Notes

- `read-docs` sends `topic` and `maxTokens` to the API so large docs can be filtered server-side before they cross stdio.
- Repeated lookups are cached in-process for five minutes by default.
- Search uses the Redis-backed `fast-search` endpoint first and falls back to the filesystem search endpoint if needed.

## License

MIT

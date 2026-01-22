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

### Option 3: Build from Source

```bash
git clone https://github.com/Amal-David/docingest
cd docingest/mcp-server
npm install && npm run build
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

### `query-docs`

Full-text search across all indexed documentation.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `query` | Yes | Search query |
| `limit` | No | Maximum results (default: 5) |

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DOCINGEST_API_URL` | `https://docingest.com/api` | DocIngest API endpoint |

## Self-Hosting

If you're running your own DocIngest instance:

```bash
DOCINGEST_API_URL=http://localhost:8001/api npx @docingest/mcp-server
```

## Development

```bash
# Clone the repository
git clone https://github.com/Amal-David/docingest
cd docingest/mcp-server

# Install dependencies
npm install

# Build
npm run build

# Run locally
npm start
```

## License

MIT

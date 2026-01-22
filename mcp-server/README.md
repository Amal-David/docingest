# DocIngest MCP Server

Up-to-date documentation for LLMs and AI code editors.

## Installation

### Step 1: Clone and Build

```bash
git clone https://github.com/Amal-David/docingest
cd docingest/mcp-server
npm install
npm run build
```

### Step 2: Configure Your AI Tool

#### Claude Code

```bash
claude mcp add docingest -- node /path/to/docingest/mcp-server/dist/index.js
```

Or add to `~/.claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "docingest": {
      "command": "node",
      "args": ["/path/to/docingest/mcp-server/dist/index.js"],
      "env": {
        "DOCINGEST_API_URL": "https://docingest.com/api"
      }
    }
  }
}
```

#### Cursor

Add to `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "docingest": {
      "command": "node",
      "args": ["/path/to/docingest/mcp-server/dist/index.js"],
      "env": {
        "DOCINGEST_API_URL": "https://docingest.com/api"
      }
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
      "command": "node",
      "args": ["/path/to/docingest/mcp-server/dist/index.js"],
      "env": {
        "DOCINGEST_API_URL": "https://docingest.com/api"
      }
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
      "command": "node",
      "args": ["/path/to/docingest/mcp-server/dist/index.js"],
      "env": {
        "DOCINGEST_API_URL": "https://docingest.com/api"
      }
    }
  }
}
```

> **Note:** Replace `/path/to/docingest` with the actual path where you cloned the repository.

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

**Parameters:**
- `libraryName` (required): Name of the library (e.g., "react", "nextjs", "tailwind")

**Example:**
```json
{
  "libraryName": "react"
}
```

### `read-docs`

Fetch full documentation content for a library.

**Parameters:**
- `domain` (required): Domain from find-docs (e.g., "react.dev")
- `topic` (optional): Filter to specific topic (e.g., "hooks", "routing")
- `maxTokens` (optional): Maximum tokens to return (default: 5000)

**Example:**
```json
{
  "domain": "react.dev",
  "topic": "hooks",
  "maxTokens": 3000
}
```

### `query-docs`

Full-text search across all indexed documentation.

**Parameters:**
- `query` (required): Search query
- `limit` (optional): Maximum results (default: 5)

**Example:**
```json
{
  "query": "authentication middleware",
  "limit": 3
}
```

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

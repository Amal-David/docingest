# DocIngest MCP Server

Up-to-date documentation for LLMs and AI code editors.

## Installation

### Claude Code

```bash
claude mcp add docingest -- npx -y @docingest/mcp-server@latest
```

### Cursor

Add to your `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "docingest": {
      "command": "npx",
      "args": ["-y", "@docingest/mcp-server@latest"],
      "env": {
        "DOCINGEST_API_URL": "https://docingest.com/api"
      }
    }
  }
}
```

### VS Code (Copilot)

Add to your MCP settings:

```json
{
  "mcp.servers": {
    "docingest": {
      "command": "npx",
      "args": ["-y", "@docingest/mcp-server@latest"]
    }
  }
}
```

### Windsurf

Add to your Windsurf MCP configuration:

```json
{
  "mcpServers": {
    "docingest": {
      "command": "npx",
      "args": ["-y", "@docingest/mcp-server@latest"]
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

### `resolve-library-id`

Finds documentation sources by library name.

**Parameters:**
- `libraryName` (required): Name of the library (e.g., "react", "nextjs", "tailwind")

**Example:**
```json
{
  "libraryName": "react"
}
```

### `get-library-docs`

Fetches full documentation for a library.

**Parameters:**
- `domain` (required): Domain ID from resolve-library-id (e.g., "react.dev")
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

### `search-docs`

Full-text search across all documentation.

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
git clone https://github.com/yourusername/docingest
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

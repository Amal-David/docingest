import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

type Tab = 'claude-code' | 'cursor' | 'windsurf' | 'codex';

const MCPGuidePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('claude-code');

  const claudeCodeConfig = `# One-line setup
claude mcp add docingest -- npx -y @docingest/mcp-server

# Or add manually to ~/.claude/claude_desktop_config.json:
{
  "mcpServers": {
    "docingest": {
      "command": "npx",
      "args": ["-y", "@docingest/mcp-server"]
    }
  }
}`;

  const cursorConfig = `// Add to ~/.cursor/mcp.json
{
  "mcpServers": {
    "docingest": {
      "command": "npx",
      "args": ["-y", "@docingest/mcp-server"]
    }
  }
}`;

  const windsurfConfig = `// Add to Windsurf MCP configuration
{
  "mcpServers": {
    "docingest": {
      "command": "npx",
      "args": ["-y", "@docingest/mcp-server"]
    }
  }
}`;

  const codexConfig = `// Add to Codex MCP configuration
{
  "mcpServers": {
    "docingest": {
      "command": "npx",
      "args": ["-y", "@docingest/mcp-server"]
    }
  }
}`;

  const getConfig = () => {
    switch (activeTab) {
      case 'claude-code': return claudeCodeConfig;
      case 'cursor': return cursorConfig;
      case 'windsurf': return windsurfConfig;
      case 'codex': return codexConfig;
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getConfig());
  };

  return (
    <>
      <Helmet>
        <title>MCP Setup Guide | DocIngest</title>
        <meta name="description" content="Learn how to set up DocIngest MCP server with Claude Code, Cursor, Windsurf, and Codex" />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            MCP <span className="text-primary">Setup Guide</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Use DocIngest documentation directly in your AI coding tools
          </p>
        </div>

        {/* What is MCP */}
        <div className="relative">
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
          <div className="rounded-xl relative z-20 p-6 border-[3px] border-gray-900 bg-blue-50">
            <h2 className="text-xl font-bold mb-3">What is MCP?</h2>
            <p className="text-gray-700 mb-4">
              The <strong>Model Context Protocol (MCP)</strong> allows AI assistants to access external tools and data sources.
              With DocIngest MCP, your AI can search and retrieve documentation directly while coding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border-2 border-gray-900">
                <div className="text-2xl mb-2">1.</div>
                <div className="font-semibold">Search Docs</div>
                <div className="text-sm text-gray-600">Find relevant documentation by keyword</div>
              </div>
              <div className="bg-white p-4 rounded border-2 border-gray-900">
                <div className="text-2xl mb-2">2.</div>
                <div className="font-semibold">Get Context</div>
                <div className="text-sm text-gray-600">Retrieve full documentation content</div>
              </div>
              <div className="bg-white p-4 rounded border-2 border-gray-900">
                <div className="text-2xl mb-2">3.</div>
                <div className="font-semibold">Code Better</div>
                <div className="text-sm text-gray-600">AI uses docs to write accurate code</div>
              </div>
            </div>
          </div>
        </div>

        {/* Setup Instructions */}
        <div className="relative">
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
          <div className="rounded-xl relative z-20 p-6 border-[3px] border-gray-900 bg-card">
            <h2 className="text-xl font-bold mb-4">Setup Instructions</h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(['claude-code', 'cursor', 'windsurf', 'codex'] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 border-[3px] border-gray-900 rounded font-medium transition-transform hover:-translate-y-0.5 ${
                    activeTab === tab
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-900'
                  }`}
                >
                  {tab === 'claude-code' ? 'Claude Code' : tab === 'cursor' ? 'Cursor' : tab === 'windsurf' ? 'Windsurf' : 'Codex'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === 'claude-code' && (
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Run the command below to add DocIngest to Claude Code. It uses npx so no installation needed.
                  </p>
                </div>
              )}
              {activeTab === 'cursor' && (
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Add to your Cursor MCP configuration file:
                  </p>
                </div>
              )}
              {activeTab === 'windsurf' && (
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Add to your Windsurf MCP configuration:
                  </p>
                </div>
              )}
              {activeTab === 'codex' && (
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Add to your Codex MCP configuration:
                  </p>
                </div>
              )}

              {/* Code Block */}
              <div className="relative">
                <div className="w-full h-full rounded bg-gray-900 translate-y-1 translate-x-1 absolute inset-0"></div>
                <div className="relative z-10 bg-gray-800 rounded p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Configuration</span>
                    <button
                      onClick={copyToClipboard}
                      className="px-3 py-1 bg-gray-700 text-white text-sm rounded hover:bg-gray-600 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{getConfig()}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Available Tools */}
        <div className="relative">
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
          <div className="rounded-xl relative z-20 p-6 border-[3px] border-gray-900 bg-card">
            <h2 className="text-xl font-bold mb-4">Available MCP Tools</h2>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded border-2 border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">find-docs</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Find a library or framework in DocIngest by name. Returns matching domains with metadata.
                </p>
                <pre className="mt-2 text-xs bg-gray-100 p-2 rounded">
                  {`// Example: Find React documentation
find-docs("react")`}
                </pre>
              </div>

              <div className="bg-gray-50 p-4 rounded border-2 border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">read-docs</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Fetches full documentation content for a domain. Optionally filter by topic or section.
                </p>
                <pre className="mt-2 text-xs bg-gray-100 p-2 rounded">
                  {`// Example: Get React hooks documentation
read-docs("react.dev", topic: "hooks")`}
                </pre>
              </div>

              <div className="bg-gray-50 p-4 rounded border-2 border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded">query-docs</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Full-text search across all indexed documentation. Great for finding examples and patterns.
                </p>
                <pre className="mt-2 text-xs bg-gray-100 p-2 rounded">
                  {`// Example: Search for authentication patterns
query-docs("JWT authentication")`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="relative">
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
          <div className="rounded-xl relative z-20 p-6 border-[3px] border-gray-900 bg-secondary">
            <h2 className="text-xl font-bold mb-4">Usage Examples</h2>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-2 border-gray-900">
                <div className="font-semibold mb-2">Ask Claude/Cursor about a library:</div>
                <p className="text-gray-600 italic">
                  "How do I use React Query to fetch data? Check the documentation."
                </p>
              </div>

              <div className="bg-white p-4 rounded border-2 border-gray-900">
                <div className="font-semibold mb-2">Search for specific patterns:</div>
                <p className="text-gray-600 italic">
                  "Find examples of Stripe webhook handling in the docs."
                </p>
              </div>

              <div className="bg-white p-4 rounded border-2 border-gray-900">
                <div className="font-semibold mb-2">Get API reference:</div>
                <p className="text-gray-600 italic">
                  "What parameters does the Figma Variables API accept? Check DocIngest."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="relative">
          <div className="w-full h-full absolute inset-0 bg-gray-900 rounded-xl translate-y-2 translate-x-2"></div>
          <div className="rounded-xl relative z-20 p-6 border-[3px] border-gray-900 bg-card">
            <h2 className="text-xl font-bold mb-4">Troubleshooting</h2>

            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-primary font-bold">Q:</span>
                <div>
                  <span className="font-semibold">MCP server not connecting?</span>
                  <p className="text-gray-600 text-sm">Make sure you have Node.js 18+ installed and restart your AI tool after adding the configuration.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-primary font-bold">Q:</span>
                <div>
                  <span className="font-semibold">Documentation not found?</span>
                  <p className="text-gray-600 text-sm">The library may not be indexed yet. Visit the Add Docs page to index new documentation.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-primary font-bold">Q:</span>
                <div>
                  <span className="font-semibold">Slow responses?</span>
                  <p className="text-gray-600 text-sm">Search queries are cached. Subsequent searches for similar topics will be faster.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MCPGuidePage;

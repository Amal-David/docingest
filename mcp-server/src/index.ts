#!/usr/bin/env node

/**
 * DocIngest MCP Server
 *
 * Provides up-to-date documentation for LLMs and AI code editors.
 *
 * Usage:
 *   npx @docingest/mcp-server
 *
 * Tools:
 *   - find-docs: Find documentation sources by library name
 *   - read-docs: Fetch full documentation content
 *   - query-docs: Full-text search across all documentation
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ErrorCode,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

// Configuration
const DOCINGEST_API_URL = process.env.DOCINGEST_API_URL || "https://docingest.com/api";
const DEFAULT_MAX_TOKENS = 5000;
const MAX_MAX_TOKENS = 20000;
const DEFAULT_TIMEOUT_MS = parseEnvNumber(process.env.DOCINGEST_TIMEOUT_MS, 10000);
const DEFAULT_CACHE_TTL_MS = parseEnvNumber(process.env.DOCINGEST_CACHE_TTL_MS, 300000);
const MAX_SNIPPET_LENGTH = 500;
const MAX_SEARCH_LIMIT = 20;

type ApiCacheEntry = {
  data: any;
  expiresAt: number;
};

const apiCache = new Map<string, ApiCacheEntry>();

// Tool input schemas
const ResolveLibrarySchema = z.object({
  libraryName: z.string().min(1).describe("Name of the library or framework (e.g., 'react', 'nextjs', 'tailwind')"),
});

const GetLibraryDocsSchema = z.object({
  domain: z.string().min(1).describe("Domain ID from find-docs (e.g., 'react.dev', 'nextjs.org')"),
  topic: z.string().optional().describe("Optional topic to filter documentation (e.g., 'hooks', 'routing', 'api')"),
  maxTokens: z.number().optional().default(DEFAULT_MAX_TOKENS).describe("Maximum tokens to return (default: 5000)"),
});

const SearchDocsSchema = z.object({
  query: z.string().min(1).describe("Search query to find across all documentation"),
  limit: z.number().optional().default(5).describe("Maximum number of results (default: 5)"),
});

function parseEnvNumber(value: string | undefined, fallback: number): number {
  if (!value) return fallback;

  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function clampNumber(value: number | undefined, fallback: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return fallback;

  return Math.min(Math.max(Math.floor(value ?? fallback), min), max);
}

// Helper: Fetch from DocIngest API
async function fetchFromAPI(endpoint: string): Promise<any> {
  const url = `${DOCINGEST_API_URL}${endpoint}`;
  const cacheKey = url;
  const cached = apiCache.get(cacheKey);

  if (cached && cached.expiresAt > Date.now()) {
    return cached.data;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/json",
        "User-Agent": "DocIngest-MCP-Server/1.0",
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    if (DEFAULT_CACHE_TTL_MS > 0) {
      apiCache.set(cacheKey, {
        data,
        expiresAt: Date.now() + DEFAULT_CACHE_TTL_MS,
      });
    }

    return data;
  } catch (error) {
    console.error(`[DocIngest MCP] API error for ${endpoint}:`, error);
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

// Helper: Truncate content to approximate token count
function truncateToTokens(content: string, maxTokens: number): string {
  // Rough approximation: 1 token ≈ 4 characters
  const maxChars = maxTokens * 4;

  if (content.length <= maxChars) {
    return content;
  }

  // Find a good break point (paragraph or sentence)
  let truncated = content.slice(0, maxChars);
  const lastParagraph = truncated.lastIndexOf("\n\n");
  const lastSentence = truncated.lastIndexOf(". ");

  if (lastParagraph > maxChars * 0.8) {
    truncated = truncated.slice(0, lastParagraph);
  } else if (lastSentence > maxChars * 0.8) {
    truncated = truncated.slice(0, lastSentence + 1);
  }

  return truncated + "\n\n[Content truncated to fit token limit]";
}

// Helper: Filter content by topic
function filterByTopic(content: string, topic: string): string {
  const topicLower = topic.toLowerCase();
  const lines = content.split("\n");
  const relevantSections: string[] = [];
  let inRelevantSection = false;
  let currentSection: string[] = [];
  let currentHeadingLevel = 0;

  for (const line of lines) {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);

    if (headingMatch) {
      const level = headingMatch[1].length;
      const heading = headingMatch[2].toLowerCase();

      // If we were in a relevant section, save it
      if (inRelevantSection && currentSection.length > 0) {
        relevantSections.push(currentSection.join("\n"));
        currentSection = [];
      }

      // Check if this heading matches the topic
      if (heading.includes(topicLower)) {
        inRelevantSection = true;
        currentHeadingLevel = level;
        currentSection.push(line);
      } else if (inRelevantSection && level <= currentHeadingLevel) {
        // We've moved past the relevant section
        inRelevantSection = false;
      } else if (inRelevantSection) {
        currentSection.push(line);
      }
    } else if (inRelevantSection) {
      currentSection.push(line);
    }
  }

  // Don't forget the last section
  if (currentSection.length > 0) {
    relevantSections.push(currentSection.join("\n"));
  }

  if (relevantSections.length > 0) {
    return relevantSections.join("\n\n---\n\n");
  }

  // If no sections match, return a message
  return `No sections specifically about "${topic}" found. Try a different topic or omit the topic parameter to get full documentation.`;
}

// Create MCP Server
const server = new Server(
  {
    name: "docingest",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "find-docs",
      description:
        "Find documentation sources by library name. " +
        "Returns matching domains with metadata and snippets. " +
        "Call this first to get the domain ID for read-docs.",
      inputSchema: {
        type: "object",
        properties: {
          libraryName: {
            type: "string",
            description: "Name of the library (e.g., 'react', 'nextjs', 'tailwind', 'express')",
          },
        },
        required: ["libraryName"],
      },
    },
    {
      name: "read-docs",
      description:
        "Fetch full documentation content for a library. " +
        "Returns the documentation text, optionally filtered by topic. " +
        "Use the domain from find-docs.",
      inputSchema: {
        type: "object",
        properties: {
          domain: {
            type: "string",
            description: "Domain from find-docs (e.g., 'react.dev')",
          },
          topic: {
            type: "string",
            description: "Optional topic to filter (e.g., 'hooks', 'routing', 'api')",
          },
          maxTokens: {
            type: "number",
            description: "Maximum tokens to return (default: 5000)",
          },
        },
        required: ["domain"],
      },
    },
    {
      name: "query-docs",
      description:
        "Full-text search across all indexed documentation. " +
        "Returns matching snippets from multiple libraries. " +
        "Great for finding examples and patterns across frameworks.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Search query",
          },
          limit: {
            type: "number",
            description: "Maximum results (default: 5)",
          },
        },
        required: ["query"],
      },
    },
  ],
}));

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "find-docs": {
        const { libraryName } = ResolveLibrarySchema.parse(args);

        console.error(`[DocIngest MCP] Resolving library: ${libraryName}`);

        const data = await fetchFromAPI(
          `/docs/autocomplete?q=${encodeURIComponent(libraryName)}&limit=5`
        );

        if (!data.suggestions || data.suggestions.length === 0) {
          return {
            content: [
              {
                type: "text",
                text: `No documentation found for "${libraryName}". Try a different name or check if the library is indexed on DocIngest.`,
              },
            ],
          };
        }

        const results = data.suggestions.map((s: any) => ({
          domain: s.domain,
          title: s.title,
          snippet: s.snippet?.slice(0, MAX_SNIPPET_LENGTH) || "",
          url: s.url,
          matchType: s.matchType,
        }));

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  message: `Found ${results.length} matching documentation source(s) for "${libraryName}"`,
                  results,
                  hint: "Use the 'domain' value with read-docs to fetch full documentation",
                },
                null,
                2
              ),
            },
          ],
        };
      }

      case "read-docs": {
        const { domain, topic, maxTokens } = GetLibraryDocsSchema.parse(args);
        const safeMaxTokens = clampNumber(maxTokens, DEFAULT_MAX_TOKENS, 500, MAX_MAX_TOKENS);

        console.error(`[DocIngest MCP] Fetching docs for: ${domain}${topic ? ` (topic: ${topic})` : ""}`);

        const params = new URLSearchParams();
        params.set("maxTokens", String(safeMaxTokens));
        if (topic) params.set("topic", topic);

        const data = await fetchFromAPI(
          `/docs/domain/${encodeURIComponent(domain)}?${params.toString()}`
        );

        if (!data.content) {
          return {
            content: [
              {
                type: "text",
                text: `Documentation for "${domain}" not found. Use find-docs to find the correct domain.`,
              },
            ],
          };
        }

        let content = data.content;

        // Filter by topic if provided
        if (topic) {
          content = filterByTopic(content, topic);
        }

        // Truncate to token limit
        content = truncateToTokens(content, safeMaxTokens);

        return {
          content: [
            {
              type: "text",
              text: `# ${data.domain} Documentation\n\nSource: ${data.url || domain}\nLast Updated: ${data.lastUpdated || "Unknown"}\n\n---\n\n${content}`,
            },
          ],
        };
      }

      case "query-docs": {
        const { query, limit } = SearchDocsSchema.parse(args);
        const safeLimit = clampNumber(limit, 5, 1, MAX_SEARCH_LIMIT);

        console.error(`[DocIngest MCP] Searching: ${query}`);

        // Try fast-search first, fall back to fullsearch
        let data;
        try {
          data = await fetchFromAPI(
            `/docs/fast-search?q=${encodeURIComponent(query)}&limit=${safeLimit}`
          );
        } catch {
          data = await fetchFromAPI(
            `/docs/fullsearch?q=${encodeURIComponent(query)}&limit=${safeLimit}`
          );
        }

        const results = (data.results || data.docs || []).map((doc: any) => ({
          domain: doc.domain,
          title: doc.title || doc.domain,
          snippet: (doc.snippet || doc.content || "").slice(0, MAX_SNIPPET_LENGTH),
          url: doc.url,
        }));

        if (results.length === 0) {
          return {
            content: [
              {
                type: "text",
                text: `No documentation found for "${query}". Try different keywords.`,
              },
            ],
          };
        }

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  message: `Found ${results.length} result(s) for "${query}"`,
                  results,
                  hint: "Use read-docs with a domain to fetch full documentation",
                },
                null,
                2
              ),
            },
          ],
        };
      }

      default:
        throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${name}`);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new McpError(
        ErrorCode.InvalidParams,
        `Invalid parameters: ${error.errors.map((e) => e.message).join(", ")}`
      );
    }

    if (error instanceof McpError) {
      throw error;
    }

    console.error(`[DocIngest MCP] Error in ${name}:`, error);
    throw new McpError(
      ErrorCode.InternalError,
      `Failed to execute ${name}: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
});

function printCliHelp(): void {
  console.log(`DocIngest access

MCP server:
  npx @docingest/mcp-server

CLI:
  npx @docingest/mcp-server find react
  npx @docingest/mcp-server read react.dev --topic hooks --max-tokens 5000
  npx @docingest/mcp-server search "server components" --limit 5

Environment:
  DOCINGEST_API_URL       API base URL, defaults to https://docingest.com/api
  DOCINGEST_TIMEOUT_MS    Request timeout, defaults to 10000
  DOCINGEST_CACHE_TTL_MS  In-process cache TTL, defaults to 300000`);
}

function takeOption(args: string[], optionName: string, fallback?: string): string | undefined {
  const index = args.indexOf(optionName);
  if (index === -1) return fallback;

  const value = args[index + 1];
  args.splice(index, value ? 2 : 1);
  return value ?? fallback;
}

function requireCliValue(value: string | undefined, message: string): string {
  if (!value) {
    throw new Error(message);
  }

  return value;
}

async function runCli(args: string[]): Promise<void> {
  const command = args.shift();

  if (!command || command === "help" || command === "--help" || command === "-h") {
    printCliHelp();
    return;
  }

  switch (command) {
    case "find": {
      const libraryName = requireCliValue(args.join(" ").trim(), "Usage: docingest find <library>");
      const data = await fetchFromAPI(
        `/docs/autocomplete?q=${encodeURIComponent(libraryName)}&limit=5`
      );

      console.log(JSON.stringify(data.suggestions || [], null, 2));
      return;
    }

    case "read": {
      const domain = requireCliValue(args.shift(), "Usage: docingest read <domain> [--topic topic] [--max-tokens 5000]");
      const topic = takeOption(args, "--topic");
      const safeMaxTokens = clampNumber(Number(takeOption(args, "--max-tokens")), DEFAULT_MAX_TOKENS, 500, MAX_MAX_TOKENS);
      const params = new URLSearchParams({ maxTokens: String(safeMaxTokens) });
      if (topic) params.set("topic", topic);

      const data = await fetchFromAPI(
        `/docs/domain/${encodeURIComponent(domain)}?${params.toString()}`
      );

      if (!data.content) {
        throw new Error(`Documentation for "${domain}" was not found.`);
      }

      let content = data.content;
      if (topic) {
        content = filterByTopic(content, topic);
      }
      content = truncateToTokens(content, safeMaxTokens);

      console.log(`# ${data.domain} Documentation`);
      console.log(`\nSource: ${data.url || domain}`);
      console.log(`Last Updated: ${data.lastUpdated || "Unknown"}\n`);
      console.log("---\n");
      console.log(content);
      return;
    }

    case "search": {
      const limit = clampNumber(Number(takeOption(args, "--limit")), 5, 1, MAX_SEARCH_LIMIT);
      const query = requireCliValue(args.join(" ").trim(), "Usage: docingest search <query> [--limit 5]");
      let data;

      try {
        data = await fetchFromAPI(
          `/docs/fast-search?q=${encodeURIComponent(query)}&limit=${limit}`
        );
      } catch {
        data = await fetchFromAPI(
          `/docs/fullsearch?q=${encodeURIComponent(query)}&limit=${limit}`
        );
      }

      console.log(JSON.stringify(data.results || data.docs || [], null, 2));
      return;
    }

    default:
      throw new Error(`Unknown command "${command}". Run "docingest help" for usage.`);
  }
}

// Start the server
async function main() {
  const cliCommands = new Set(["find", "read", "search", "help", "--help", "-h"]);
  const firstArg = process.argv[2];

  if (firstArg && cliCommands.has(firstArg)) {
    await runCli(process.argv.slice(2));
    return;
  }

  console.error("[DocIngest MCP] Starting server...");
  console.error(`[DocIngest MCP] API URL: ${DOCINGEST_API_URL}`);

  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error("[DocIngest MCP] Server running on stdio");
}

main().catch((error) => {
  console.error("[DocIngest MCP] Fatal error:", error);
  process.exit(1);
});

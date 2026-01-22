# Table of Contents

- [Welcome to Composio | Composio Docs](#welcome-to-composio-composio-docs)
- [Quickstart | Composio Docs](#quickstart-composio-docs)
- [IDE and Agent Setup | Composio Docs](#ide-and-agent-setup-composio-docs)
- [December 10, 2025 | Composio Docs](#december-10-2025-composio-docs)
- [Providers | Composio Docs](#providers-composio-docs)

---

# Welcome to Composio | Composio Docs

[Managed authentication\
\
Handle OAuth, API keys, and custom auth flows automatically](https://docs.composio.dev/docs/authenticating-tools)
[Tool execution\
\
Execute actions across 500+ toolkits with support for most AI frameworks](https://docs.composio.dev/docs/executing-tools)
[MCP server\
\
Hosted MCP servers for all 500+ toolkits.](https://docs.composio.dev/docs/mcp-quickstart)
[Triggers\
\
Subscribe to external events and trigger workflows automatically](https://docs.composio.dev/docs/using-triggers)

* * *

Get started
-----------

[Quickstart\
\
Build your first agent](https://docs.composio.dev/docs/quickstart)
[Providers\
\
Integrate with OpenAI, Anthropic, Vercel AI SDK, and more](https://docs.composio.dev/docs/providers)

###### Python

###### TypeScript

* * *

Why Composio?
-------------

Composio is the fastest way to enable your AI agents to take real-world actions—without dealing with individual API integrations, authentication flows, or complex tool formatting.

*   **Access 500+ toolkits** out of the box across popular apps like Slack, GitHub, Notion, and more. [Browse toolkits →](https://docs.composio.dev/toolkits/introduction)
    
*   **Enforce strict access and data controls** with [fine-grained permissions](https://docs.composio.dev/docs/authenticating-tools)
     for each tool and user.
*   **Trigger agents and workflows** using [external events](https://docs.composio.dev/docs/using-triggers)
     (e.g., new message in Slack, new issue in GitHub).
*   **Use MCP servers** for all 500+ toolkits, compatible with any [MCP client](https://docs.composio.dev/docs/mcp-quickstart)
    .
*   **Search, plan and authenticate** across all tools with [Tool Router](https://docs.composio.dev/docs/tool-router/quick-start)
    .
*   **Integrate seamlessly** with frameworks like [OpenAI](https://docs.composio.dev/providers/openai)
    , [Anthropic](https://docs.composio.dev/providers/anthropic)
    , [LangChain](https://docs.composio.dev/providers/langchain)
    , [Vercel AI SDK](https://docs.composio.dev/providers/vercel)
    , and more.

[Tool Router (Beta)\
\
Search, plan, and handle authentication across all the tools.](https://docs.composio.dev/docs/tool-router/quick-start)

* * *

Community
---------

Join our [Discord](https://discord.gg/composio)
 community!

[![Logo](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/f73ac7a3c4e9f6da62452aa8f21265ae8f5e27374ce0e82664d4ed67d198fcb2/assets/logo.svg)![Logo](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/47578bf83992a848aab3058db4cba1b065d24c22667a0107f90027cfe5939bf0/assets/logo-dark.svg)](https://docs.composio.dev/)

[Status](https://status.composio.dev/)
[Dashboard](https://platform.composio.dev/auth)

---

# Quickstart | Composio Docs

This guide walks you through **authenticated tool calling**—the foundation of how Composio connects your AI agents to real-world actions.

You’ll learn how to:

1.  **Discover and add tools** relevant to your use case (e.g., Slack, GitHub, Notion) to your AI agent
2.  **Authenticate tools** securely on behalf of a specific user, with fine-grained access control
3.  **Enable your LLM** (like OpenAI, Claude, or LangChain) to invoke these tools reliably using structured tool call formats

Prerequisites
-------------

Before you begin, ensure you have:

1.  **A Composio account** - [Sign up here](https://platform.composio.dev/)
     if you haven’t already
2.  **Python 3.10+** or **Node.js 18+** installed on your system
3.  **Your API key** - Get it from the [developer dashboard](https://platform.composio.dev/?next_page=/settings)
     and set it as an environment variable:

`   |     |     | | --- | --- | | $   | export COMPOSIO_API_KEY=your_api_key |     `

Install the SDK
---------------

First, install the Composio SDK for your preferred language:

PythonTypeScript

`   |     |     | | --- | --- | | $   | pip install composio |     `

Authorize Tools & Run Them with an Agent
----------------------------------------

Composio supports multiple LLM providers. Here’s how to use Composio with some of the most popular ones:

###### OpenAI Agent(Python)

###### Anthropic (TypeScript)

###### Vercel AI SDK (Typescript)

Install the OpenAI Agents provider!

**Installation**

`   |     |     | | --- | --- | | $   | pip install composio openai-agents composio-openai-agents |     `

Python

`   |     |     | | --- | --- | | 1   | import asyncio | | 2   | from composio import Composio | | 3   | from agents import Agent, Runner | | 4   | from composio_openai_agents import OpenAIAgentsProvider | | 5   |     | | 6   | composio = Composio(api_key="your-api-key", provider=OpenAIAgentsProvider()) | | 7   |     | | 8   | # Id of the user in your system | | 9   | externalUserId = "pg-test-6dadae77-9ae1-40ca-8e2e-ba2d1ad9ebc4" | | 10  |     | | 11  | # Create an auth config for gmail from the dashboard or programmatically | | 12  | auth_config_id = "your-auth-config-id" | | 13  | connection_request = composio.connected_accounts.link( | | 14  | user_id=externalUserId, | | 15  | auth_config_id=auth_config_id, | | 16  | )   | | 17  |     | | 18  | # Redirect user to the OAuth flow | | 19  | redirect_url = connection_request.redirect_url | | 20  |     | | 21  | print( | | 22  | f"Please authorize the app by visiting this URL: {redirect_url}" | | 23  | )  # Print the redirect url to the user | | 24  |     | | 25  | # Wait for the connection to be established | | 26  | connected_account = connection_request.wait_for_connection() | | 27  | print( | | 28  | f"Connection established successfully! Connected account id: {connected_account.id}" | | 29  | )   | | 30  |     | | 31  | # Get Gmail tools that are pre-configured | | 32  | tools = composio.tools.get(user_id=externalUserId, tools=["GMAIL_SEND_EMAIL"]) | | 33  |     | | 34  | agent = Agent( | | 35  | name="Email Manager", instructions="You are a helpful assistant", tools=tools | | 36  | )   | | 37  |     | | 38  | # Run the agent | | 39  | async def main(): | | 40  | result = await Runner.run( | | 41  | starting_agent=agent, | | 42  | input="Send an email to soham.g@composio.dev with the subject 'Hello from composio 👋🏻' and the body 'Congratulations on sending your first email using AI Agents and Composio!'", | | 43  | )   | | 44  | print(result.final_output) | | 45  |     | | 46  | asyncio.run(main()) |     `

##### What just happened?

You just:

1.  Authorized a user account with Composio
2.  Passed those tool permissions into an LLM framework
3.  Let the LLM securely call real tools on the user’s behalf

All OAuth flows and tool execution were automatically handled by Composio.

Next steps
----------

[Use Providers\
\
Learn how to use Composio with various agent SDK and frameworks.](https://docs.composio.dev/providers/openai)
[Work with tools\
\
Learn how to work with tools and tool calling on a deeper level with Composio.](https://docs.composio.dev/docs/executing-tools)
[Manage authentication\
\
Authorize tools for multiple users.](https://docs.composio.dev/docs/custom-auth-configs)
[Triggers\
\
Listen for external events to trigger actions in your agents](https://docs.composio.dev/docs/using-triggers)

[![Logo](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/f73ac7a3c4e9f6da62452aa8f21265ae8f5e27374ce0e82664d4ed67d198fcb2/assets/logo.svg)![Logo](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/47578bf83992a848aab3058db4cba1b065d24c22667a0107f90027cfe5939bf0/assets/logo-dark.svg)](https://docs.composio.dev/)

[Status](https://status.composio.dev/)
[Dashboard](https://platform.composio.dev/auth)

---

# IDE and Agent Setup | Composio Docs

This comprehensive guide explains how to set up your IDE and coding agents to help you ship faster with Composio. We’ll cover optimal configurations for popular editors and AI coding assistants.

For LLMs: Use [llms.txt](https://docs.composio.dev/llms.txt)
 to index our documentation

Cursor
------

Cursor is an AI-powered code editor that can significantly accelerate your development with Composio. Here’s how to set it up optimally.

### Index Documentation

Cursor can index documentation, making it easy to ask questions about Composio and get contextual answers while coding.

![Index docs](https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fv3composio.docs.buildwithfern.com%2F9522c46a76f30018d0069a789763106fe47ce81ba5a9ee6bb47fc3d1bee598d2%2Fassets%2Fimages%2Findex-docs.png&w=3840&q=75)

### To index Composio documentation:

1.  Open Cursor Settings (Shift + Cmd/Ctrl + J)
2.  Navigate to “Features” → “Codebase indexing”
3.  Add the Composio documentation URLs:

*   [https://docs.composio.dev](https://docs.composio.dev/)
    
*   [https://github.com/ComposioHQ/composio](https://github.com/ComposioHQ/composio)
     (for source code reference)

Once indexed, you can ask questions directly in the chat!

![Index docs question](https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fv3composio.docs.buildwithfern.com%2Fd499183fff89e8215af77f35390668de8606a63ed263edb50756b4dd0e514fe1%2Fassets%2Fimages%2Fask-index-docs.png&w=2048&q=75)

### Optimize Cursor with Custom Rules

To get the best experience building with Composio, add custom instructions to Cursor’s AI system. This helps the AI understand Composio’s patterns and best practices.

![Cursor settings](https://app.buildwithfern.com/_next/image?url=https%3A%2F%2Ffiles.buildwithfern.com%2Fv3composio.docs.buildwithfern.com%2Fc75c9a116186171d5bbd76941dafe987b610a9b5f88b0a55cb5a41720a944f34%2Fassets%2Fimages%2Fcursor-settings.png&w=3840&q=75)

**To add custom rules:**

1.  Open Cursor Settings (Shift + Cmd/Ctrl + J)
2.  Go to “General” → “Rules for AI”
3.  Add the appropriate prompt below based on your language

`   |     |     | | --- | --- | | 1   | Below is a list of Composio documentation. Use your web and fetch capabilities to read the documentation you need. | | 2   | [Composio Documentation](https://docs.composio.dev) | | 3   |     | | 4   | For AI agents and LLMs, we also provide a structured documentation index at: | | 5   | [LLMs Text Documentation](https://docs.composio.dev/llms.txt) | | 6   |     | | 7   | - [Quickstart](https://docs.composio.dev/docs/quickstart.mdx): Add authenticated tool-calling to any LLM agent in three steps. | | 8   | - [Configuration](https://docs.composio.dev/docs/configuration.mdx) | | 9   | - [Providers](https://docs.composio.dev/docs/providers.mdx) | | 10  | - [Executing Tools](https://docs.composio.dev/docs/executing-tools.mdx): Learn how to execute Composio's tools with different providers and frameworks | | 11  | - [Authenticating Tools](https://docs.composio.dev/docs/authenticating-tools.mdx): Learn how to authenticate tools | | 12  | - [Fetching and Filtering Tools](https://docs.composio.dev/docs/fetching-tools.mdx): Learn how to fetch and filter Composio's tools and toolkits | | 13  | - [Modifying tool schemas](https://docs.composio.dev/docs/modifying-tool-schemas): Learn how to use schema modifiers to transform tool schemas before they are seen by agents. | | 14  | - [Modifying tool inputs](https://docs.composio.dev/docs/modifying-tool-inputs): Learn how to use before execution modifiers to modify tool arguments before execution. | | 15  | - [Modifying tool outputs](https://docs.composio.dev/docs/modifying-tool-outputs): Learn how to use after execution modifiers to transform tool results after execution. | | 16  | - [Creating custom tools](https://docs.composio.dev/docs/custom-tools.mdx): Learn how to extend Composio's toolkits with your own tools | | 17  | - [Custom Auth Configs](https://docs.composio.dev/docs/custom-auth-configs.mdx): Guide to using customizing auth configs for a toolkit | | 18  | - [Programmatic Auth Configs](https://docs.composio.dev/docs/programmatic-auth-configs.mdx): Guide to creating auth configs programmatically | | 19  | - [Custom Auth Parameters](https://docs.composio.dev/docs/custom-auth-params.mdx): Guide to injecting custom credentials in headers or parameters for a toolkit | | 20  | - [Using Triggers](https://docs.composio.dev/docs/using-triggers.mdx): Send payloads to your system based on external events | | 21  | - [OpenAI Providers](https://docs.composio.dev/providers/openai.mdx) | | 22  | - [Anthropic Provider](https://docs.composio.dev/providers/anthropic.mdx) | | 23  | - [LangGraph Provider](https://docs.composio.dev/providers/langgraph.mdx) | | 24  | - [CrewAI Provider](https://docs.composio.dev/providers/crewai.mdx) | | 25  | - [Vercel AI SDK Provider](https://docs.composio.dev/providers/vercel.mdx) | | 26  | - [Google ADK Provider](https://docs.composio.dev/providers/google-adk.mdx) | | 27  | - [OpenAI Agents Provider](https://docs.composio.dev/providers/openai-agents.mdx) | | 28  | - [Mastra Provider](https://docs.composio.dev/providers/mastra.mdx) | | 29  | - [Custom Providers](https://docs.composio.dev/toolsets/custom.mdx) |     `

[![Logo](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/f73ac7a3c4e9f6da62452aa8f21265ae8f5e27374ce0e82664d4ed67d198fcb2/assets/logo.svg)![Logo](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/47578bf83992a848aab3058db4cba1b065d24c22667a0107f90027cfe5939bf0/assets/logo-dark.svg)](https://docs.composio.dev/)

[Status](https://status.composio.dev/)
[Dashboard](https://platform.composio.dev/auth)

---

# December 10, 2025 | Composio Docs

[December 10, 2025](https://docs.composio.dev/docs/changelog/2025/12/10)

[Removal of label query parameter from connected accounts API](https://docs.composio.dev/docs/changelog/2025/12/10)

--------------------------------------------------------------------------------------------------------------------

The `label` query parameter has been removed from the `GET /api/v3/connected_accounts` endpoint.

What’s changing?
----------------

The `label` query parameter is no longer supported when listing connected accounts. This parameter was previously accepted but had no functional behavior since label ingestion was removed in an earlier update.

Impact
------

**None** - This is a cleanup change. The `label` query parameter was not performing any filtering since the underlying label ingestion functionality was already removed. If your code was passing this parameter, it was being silently ignored.

Migration
---------

No action required. If your code was passing the `label` query parameter, you can safely remove it from your API calls.

[![Logo](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/f73ac7a3c4e9f6da62452aa8f21265ae8f5e27374ce0e82664d4ed67d198fcb2/assets/logo.svg)![Logo](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/47578bf83992a848aab3058db4cba1b065d24c22667a0107f90027cfe5939bf0/assets/logo-dark.svg)](https://docs.composio.dev/)

[Status](https://status.composio.dev/)
[Dashboard](https://platform.composio.dev/auth)

---

# Providers | Composio Docs

Providers in Composio act as bridges between your AI models and external tools. They transform Composio’s tools into formats that different AI frameworks can understand and use, making it possible to integrate with any AI framework seamlessly.

What are Providers?
-------------------

Think of providers as translators. Different AI frameworks (like OpenAI, Anthropic Claude, or LangChain) expect tools to be formatted in their specific way. Instead of manually converting Composio tools for each framework, providers handle this transformation automatically.

For example:

*   OpenAI expects tools in a specific JSON schema format with type: “function”
*   Anthropic Claude expects tools with an input\_schema structure
*   LangChain expects tools as callable functions with specific parameters

Providers ensure that Composio tools work correctly with your chosen AI platform without you having to worry about the technical details.

Using Providers
---------------

Here’s how you can generate text with various providers using Composio SDK:

### Default Provider (OpenAI)

If you don’t specify a provider, Composio uses the OpenAI provider by default:

PythonTypeScript

`   |     |     | | --- | --- | | 1   | from openai import OpenAI | | 2   | from composio import Composio | | 3   |     | | 4   | # Initialize tools. | | 5   | openai_client = OpenAI() | | 6   | composio = Composio(api_key="your-composio-api-key") | | 7   |     | | 8   | # Define task. | | 9   | task = "Star a repo composiohq/composio on GitHub" | | 10  |     | | 11  | # Get GitHub tools that are pre-configured | | 12  | tools = composio.tools.get(user_id="default", toolkits=["GITHUB"]) | | 13  |     | | 14  | # Get response from the LLM | | 15  | response = openai_client.chat.completions.create( | | 16  | model="gpt-4o-mini", | | 17  | tools=tools, | | 18  | messages=[ | | 19  | {"role": "system", "content": "You are a helpful assistant."}, | | 20  | {"role": "user", "content": task}, | | 21  | ],  | | 22  | )   | | 23  | print(response) | | 24  |     | | 25  | # Execute the function calls. | | 26  | result = composio.provider.handle_tool_calls(response=response, user_id="default") | | 27  | print(result) |     `

### Using a Different Provider

Different providers may require additional packages:

PythonTypescript

`   |     |     | | --- | --- | | $   | # Core SDK (includes OpenAI provider) | | >   | pip install composio==0.8.0 | | >   |     | | >   | # Additional providers | | >   | pip install composio_anthropic==0.8.0 | | >   | pip install composio_google==0.8.0 | | >   | pip install composio_langchain==0.8.0 | | >   | pip install composio_crewai==0.8.0 |     `

To use a different provider, specify it when initializing Composio:

###### OpenAI (Default)

###### Anthropic

###### Vercel AI SDK

###### Mastra

###### OpenAI Agents

OpenAI is a completion provider. You can use it to generate text, function calls.

PythonTypeScript

`   |     |     | | --- | --- | | 1   | from composio import Composio | | 2   | from composio_openai import OpenAIProvider | | 3   |     | | 4   | composio = Composio(provider=OpenAIProvider()) |     `

Supported Providers
-------------------

Composio supports two different types of providers based on the type of AI framework you are using:

### Non-Agentic Providers

These providers work with AI platforms that use chat completion APIs, where you control the tool execution flow. The AI model analyzes your conversation and suggests which tools to use, but your code decides when and how to execute them. With chat completion APIs, the typical flow is:

1.  You send a message to the AI model along with available tools
2.  The AI responds with either a text message or a request to use specific tools
3.  If tools are requested, you execute them and send the results back to continue the conversation

[![](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/315abac224108e6effe9f1bc491c2b242ce5ad97060c8d51f4b7489397b0fc56/assets/images/openai-logo.svg)\
\
OpenAI Provider\
\
Integrate with OpenAI’s tool calling and agents.](https://docs.composio.dev/providers/openai)
[![](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/9daeccd8167231e35a98b5056d696dcde70d433c3fb704826e9a320aaef8165e/assets/images/anthropic-logo.svg)\
\
Anthropic Provider\
\
Use Anthropic’s Claude models with Composio tools.](https://docs.composio.dev/providers/anthropic)
[![](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/759c2948e3b58efc3fd3fa3307995e4ff04c6add032fa3f13be1f47df35a97de/assets/images/google-logo.svg)\
\
Gemini Provider\
\
Integrate with Google’s Gemini models.](https://docs.composio.dev/providers/google)

### Agentic Providers

These providers work with AI frameworks that can execute tools autonomously. The AI agent can decide to run tools on its own without your direct intervention.

[![](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/5c6c3e88698de7f46bc4a45a55e53b878a1d15b0fd849202a6773ccef577e594/assets/images/langgraph-logo.svg)\
\
LangChain Provider\
\
Add tools to LangChain agent flows.](https://docs.composio.dev/providers/langchain)
[CrewAI Provider\
\
Enable tool calling in CrewAI multi-agent systems.](https://docs.composio.dev/providers/crewai)
[![](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/427fff9ec6981f49a71db942f6d4ed8b7ed297b890b9be38d150c5a8e89a8b1c/assets/images/vercel-logo.svg)\
\
Vercel AI SDK Provider\
\
Use Composio tools with Vercel’s AI SDK.](https://docs.composio.dev/providers/vercel)
[OpenAI Agents Provider\
\
Add tools to OpenAI’s new Agents API.](https://docs.composio.dev/providers/openai-agents)
[Mastra Provider\
\
Use Composio tools with Mastra agent framework.](https://docs.composio.dev/providers/mastra)

##### Custom Providers

Using a framework not yet supported by Composio? Create a custom provider in [TypeScript](https://docs.composio.dev/providers/custom/typescript)
 or [Python](https://docs.composio.dev/providers/custom/python)
!

[![Logo](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/f73ac7a3c4e9f6da62452aa8f21265ae8f5e27374ce0e82664d4ed67d198fcb2/assets/logo.svg)![Logo](https://files.buildwithfern.com/v3composio.docs.buildwithfern.com/47578bf83992a848aab3058db4cba1b065d24c22667a0107f90027cfe5939bf0/assets/logo-dark.svg)](https://docs.composio.dev/)

[Status](https://status.composio.dev/)
[Dashboard](https://platform.composio.dev/auth)

---


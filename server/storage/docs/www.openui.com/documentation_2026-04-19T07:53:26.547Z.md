# Table of Contents

- [Introduction | OpenUI - The Open Standard for Generative UI](#introduction-openui-the-open-standard-for-generative-ui)
- [The API Contract | OpenUI - The Open Standard for Generative UI](#the-api-contract-openui-the-open-standard-for-generative-ui)
- [Artifacts | OpenUI - The Open Standard for Generative UI](#artifacts-openui-the-open-standard-for-generative-ui)
- [Connecting to LLM | OpenUI - The Open Standard for Generative UI](#connecting-to-llm-openui-the-open-standard-for-generative-ui)
- [BottomTray | OpenUI - The Open Standard for Generative UI](#bottomtray-openui-the-open-standard-for-generative-ui)
- [Custom Chat Components | OpenUI - The Open Standard for Generative UI](#custom-chat-components-openui-the-open-standard-for-generative-ui)
- [Custom UI Guide | OpenUI - The Open Standard for Generative UI](#custom-ui-guide-openui-the-open-standard-for-generative-ui)
- [Copilot | OpenUI - The Open Standard for Generative UI](#copilot-openui-the-open-standard-for-generative-ui)
- [Hooks & State | OpenUI - The Open Standard for Generative UI](#hooks-state-openui-the-open-standard-for-generative-ui)
- [Headless Introduction | OpenUI - The Open Standard for Generative UI](#headless-introduction-openui-the-open-standard-for-generative-ui)
- [End-to-End Guide | OpenUI - The Open Standard for Generative UI](#end-to-end-guide-openui-the-open-standard-for-generative-ui)
- [Next.js Implementation | OpenUI - The Open Standard for Generative UI](#next-js-implementation-openui-the-open-standard-for-generative-ui)
- [FullScreen | OpenUI - The Open Standard for Generative UI](#fullscreen-openui-the-open-standard-for-generative-ui)
- [GenUI | OpenUI - The Open Standard for Generative UI](#genui-openui-the-open-standard-for-generative-ui)
- [Connect Thread History | OpenUI - The Open Standard for Generative UI](#connect-thread-history-openui-the-open-standard-for-generative-ui)
- [Providers | OpenUI - The Open Standard for Generative UI](#providers-openui-the-open-standard-for-generative-ui)
- [@openuidev/cli | OpenUI - The Open Standard for Generative UI](#-openuidev-cli-openui-the-open-standard-for-generative-ui)
- [Quick Start | OpenUI - The Open Standard for Generative UI](#quick-start-openui-the-open-standard-for-generative-ui)
- [OpenUI Chat SDK | OpenUI - The Open Standard for Generative UI](#openui-chat-sdk-openui-the-open-standard-for-generative-ui)
- [Installation | OpenUI - The Open Standard for Generative UI](#installation-openui-the-open-standard-for-generative-ui)
- [@openuidev/react-email | OpenUI - The Open Standard for Generative UI](#-openuidev-react-email-openui-the-open-standard-for-generative-ui)
- [AI-Assisted Development | OpenUI - The Open Standard for Generative UI](#ai-assisted-development-openui-the-open-standard-for-generative-ui)
- [OpenUI SDK | OpenUI - The Open Standard for Generative UI](#openui-sdk-openui-the-open-standard-for-generative-ui)
- [@openuidev/react-headless | OpenUI - The Open Standard for Generative UI](#-openuidev-react-headless-openui-the-open-standard-for-generative-ui)
- [@openuidev/react-ui | OpenUI - The Open Standard for Generative UI](#-openuidev-react-ui-openui-the-open-standard-for-generative-ui)
- [Benchmarks | OpenUI - The Open Standard for Generative UI](#benchmarks-openui-the-open-standard-for-generative-ui)
- [Theming | OpenUI - The Open Standard for Generative UI](#theming-openui-the-open-standard-for-generative-ui)
- [Welcome & Starters | OpenUI - The Open Standard for Generative UI](#welcome-starters-openui-the-open-standard-for-generative-ui)
- [Built-in Functions | OpenUI - The Open Standard for Generative UI](#built-in-functions-openui-the-open-standard-for-generative-ui)
- [Evolution Guide | OpenUI - The Open Standard for Generative UI](#evolution-guide-openui-the-open-standard-for-generative-ui)
- [Introduction | OpenUI - The Open Standard for Generative UI](#introduction-openui-the-open-standard-for-generative-ui)
- [Prompts | OpenUI - The Open Standard for Generative UI](#prompts-openui-the-open-standard-for-generative-ui)
- [@openuidev/react-lang | OpenUI - The Open Standard for Generative UI](#-openuidev-react-lang-openui-the-open-standard-for-generative-ui)
- [Overview | OpenUI - The Open Standard for Generative UI](#overview-openui-the-open-standard-for-generative-ui)
- [Interactivity | OpenUI - The Open Standard for Generative UI](#interactivity-openui-the-open-standard-for-generative-ui)
- [Defining Components | OpenUI - The Open Standard for Generative UI](#defining-components-openui-the-open-standard-for-generative-ui)
- [Queries & Mutations | OpenUI - The Open Standard for Generative UI](#queries-mutations-openui-the-open-standard-for-generative-ui)
- [Patterns | OpenUI - The Open Standard for Generative UI](#patterns-openui-the-open-standard-for-generative-ui)
- [Incremental Editing | OpenUI - The Open Standard for Generative UI](#incremental-editing-openui-the-open-standard-for-generative-ui)
- [Quick Start | OpenUI - The Open Standard for Generative UI](#quick-start-openui-the-open-standard-for-generative-ui)
- [Architecture | OpenUI - The Open Standard for Generative UI](#architecture-openui-the-open-standard-for-generative-ui)
- [Reactive State | OpenUI - The Open Standard for Generative UI](#reactive-state-openui-the-open-standard-for-generative-ui)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)
- [Vercel Security Checkpoint](#vercel-security-checkpoint)

---

# Introduction | OpenUI - The Open Standard for Generative UI

Introduction
============

Copy MarkdownOpen

OpenUI is a full-stack Generative UI framework (a compact streaming-first language, a React runtime with built-in component libraries, and ready-to-use chat interfaces) that is up to **[67% more token-efficient](https://www.openui.com/docs/openui-lang/benchmarks)
** than JSON. Generate anything from rich chat responses to [fully interactive dashboards](https://www.openui.com/docs/openui-lang/how-it-works)
.

[What is Generative UI?](https://www.openui.com/docs#what-is-generative-ui)

----------------------------------------------------------------------------

Most AI applications are limited to returning text (as markdown) or rendering pre-built UI responses. Markdown isn't interactive, and pre-built responses are rigid (they don't adapt to the context of the conversation).

Generative UI fundamentally changes this relationship. Instead of merely providing content, the AI composes the interface itself. It dynamically selects, configures, and composes components from a predefined library to create a purpose-built interface tailored to the user's immediate request, be it an interactive chart, a complex form, or a multi-tab dashboard.

![OpenUI Chat Demo - Click to try it live](https://www.openui.com/_next/image?url=%2Fimages%2Fopenui-lang%2Fcompare.png&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

### Try it out live

Live interactive demo of OpenUI Chat in action

[Architecture at a Glance](https://www.openui.com/docs#architecture-at-a-glance)

---------------------------------------------------------------------------------

![Architecture diagram](https://www.openui.com/images/openui-lang/openui-chart-flow.png)

1.  **System prompt includes OpenUI Lang spec**: Your backend appends the generated component library prompt alongside your system prompt, instructing the LLM to respond in OpenUI Lang instead of plain text or JSON.
    
2.  **LLM generates OpenUI Lang**: Instead of returning markdown, the model outputs a compact, line-oriented syntax (e.g., `root = Stack([chart])`) constrained to your component library.
    
3.  **Streaming render**: On the client, the `<Renderer />` component parses each line as it arrives and maps it to your React components in real-time. Structure renders first, then data fills in progressively.
    

The result is a native UI dynamically composed by the AI, streamed efficiently, and rendered safely from your own components. For data-driven apps with live tools and reactive state, see [Architecture](https://www.openui.com/docs/openui-lang/how-it-works)
.

[OpenUI Lang](https://www.openui.com/docs#openui-lang)

-------------------------------------------------------

OpenUI Lang is a compact, line-oriented language designed specifically for Large Language Models (LLMs) to generate user interfaces. It serves as a more efficient, predictable, and stream-friendly alternative to verbose formats like JSON. For the complete syntax reference, see the [Language Specification](https://www.openui.com/docs/openui-lang/specification-v05)
.

### [Why a New Language?](https://www.openui.com/docs#why-a-new-language)

While JSON is a common data interchange format, it has significant drawbacks when streamed directly from an LLM for UI generation. And there are multiple implementations around it, like Vercel [JSON-Render](https://json-render.dev/)
 and [A2UI](https://a2ui.org/)
.

OpenUI Lang was created to solve these core issues:

*   **Token Efficiency:** JSON is extremely verbose. Keys like `"component"`, `"props"`, and `"children"` are repeated for every single element, consuming a large number of tokens. This directly increases API costs and latency. OpenUI Lang uses a concise, positional syntax that drastically reduces the token count. Benchmarks show it is up to **[67% more token-efficient](https://www.openui.com/docs/openui-lang/benchmarks)
    ** than JSON.
    
*   **Streaming-First Design:** The language is line-oriented (`identifier = Expression`), making it trivial to parse and render progressively. As each line arrives from the model, a new piece of the UI can be rendered immediately. This provides a superior user experience with much better perceived performance compared to waiting for a complete JSON object to download and parse.
    
*   **Robustness:** LLMs are unpredictable. They can hallucinate component names or produce invalid structures. OpenUI Lang validates output and drops invalid portions, rendering only what's valid.
    

Same UI component, both streaming at 60 tokens/sec. OpenUI Lang finishes in **4.9s** vs JSON's **14.2s** — **65% fewer tokens**.

### JSON Format

849 tokens

### OpenUI Lang

294 tokens

[What can you build?](https://www.openui.com/docs#what-can-you-build)

----------------------------------------------------------------------

[### Chat\
\
Conversational AI with generative UI responses, thread history, and prebuilt layouts.](https://www.openui.com/docs/chat)
[### Dashboards & Apps\
\
Data-driven dashboards, CRUD interfaces, and monitoring tools, powered by live data from your tools.](https://www.openui.com/docs/openui-lang/how-it-works)

Want to try it? [Open the Playground](https://www.openui.com/playground)
 or follow the [Quick Start](https://www.openui.com/docs/openui-lang/quickstart)
.

[Quick Start\
\
Bootstrap a GenUI chat app in under a minute.](https://www.openui.com/docs/openui-lang/quickstart)

### On this page

[What is Generative UI?](https://www.openui.com/docs#what-is-generative-ui)
[Architecture at a Glance](https://www.openui.com/docs#architecture-at-a-glance)
[OpenUI Lang](https://www.openui.com/docs#openui-lang)
[Why a New Language?](https://www.openui.com/docs#why-a-new-language)
[What can you build?](https://www.openui.com/docs#what-can-you-build)

---

# The API Contract | OpenUI - The Open Standard for Generative UI

The API Contract
================

JSON contract for threads, messages, and streaming.

Copy MarkdownOpen

OpenUI Chat can work with any backend stack as long as the API contract is respected.

This page is the reference source for request and response shapes. Use [Connecting to LLM](https://www.openui.com/docs/chat/connecting)
 for decision guidance and [Connect Thread History](https://www.openui.com/docs/chat/persistence)
 for the setup flow.

[Chat endpoint contract](https://www.openui.com/docs/chat/api-contract#chat-endpoint-contract)

-----------------------------------------------------------------------------------------------

When you pass `apiUrl`, OpenUI sends a `POST` request with this shape:

    {
      "threadId": "thread_123",
      "messages": [{ "id": "msg_1", "role": "user", "content": "Hello" }]
    }

*   `threadId` is the selected thread ID when persistence is enabled, or `"ephemeral"` when no thread storage is configured.
*   `messages` is converted through `messageFormat.toApi(messages)` before the request is sent.

If your backend already accepts the default AG-UI message shape, each message can stay in this form:

    { "id": "msg_1", "role": "user", "content": "Hello" }

### [Stream response](https://www.openui.com/docs/chat/api-contract#stream-response)

Your response stream must match one of these cases:

| Backend response shape | Frontend config |
| --- | --- |
| OpenUI Protocol | No `streamProtocol` needed |
| Raw OpenAI Chat Completions SSE | `streamProtocol={openAIAdapter()}` |
| OpenAI SDK `toReadableStream()` / NDJSON | `streamProtocol={openAIReadableStreamAdapter()}` |
| OpenAI Responses API | `streamProtocol={openAIResponsesAdapter()}` |

[Default thread API contract](https://www.openui.com/docs/chat/api-contract#default-thread-api-contract)

---------------------------------------------------------------------------------------------------------

When using `threadApiUrl="/api/threads"`, OpenUI expects the base URL plus these default path segments:

| Action | Method | URL | Request body | Response |
| --- | --- | --- | --- | --- |
| List threads | `GET` | `/api/threads/get` | —   | `{ threads: Thread[], nextCursor?: any }` |
| Create thread | `POST` | `/api/threads/create` | `{ messages }` | `Thread` |
| Update thread | `PATCH` | `/api/threads/update/:id` | `Thread` | `Thread` |
| Delete thread | `DELETE` | `/api/threads/delete/:id` | —   | empty response is fine |
| Load messages | `GET` | `/api/threads/get/:id` | —   | message array in your backend format |

`messages` in the create request is the first user message, already converted through `messageFormat.toApi([firstMessage])`.

[Thread shape](https://www.openui.com/docs/chat/api-contract#thread-shape)

---------------------------------------------------------------------------

    type Thread = {
      id: string;
      title: string;
      createdAt: string | number;
    };

[Message format contract](https://www.openui.com/docs/chat/api-contract#message-format-contract)

-------------------------------------------------------------------------------------------------

`messageFormat` controls both directions:

*   `toApi()` shapes the `messages` array sent to `apiUrl` and `threadApiUrl/create`
*   `fromApi()` shapes the array returned from `threadApiUrl/get/:id`

OpenUI ships with these built-in message converters:

| Converter | Use when your backend expects or returns... |
| --- | --- |
| Default | AG-UI message objects |
| `openAIMessageFormat` | OpenAI chat completion messages |
| `openAIConversationMessageFormat` | OpenAI Responses conversation items |

Every persisted message should include a unique `id`. Without stable message IDs, history hydration and message updates become unreliable.

[Example custom converter](https://www.openui.com/docs/chat/api-contract#example-custom-converter)

---------------------------------------------------------------------------------------------------

    const myCustomFormat = {
      toApi(messages) {
        return messages.map((message) => ({
          speaker: message.role,
          text: message.content,
        }));
      },
      fromApi(items) {
        return items.map((item) => ({
          id: item.id,
          role: item.speaker,
          content: item.text,
        }));
      },
    };

[Related guides](https://www.openui.com/docs/chat/api-contract#related-guides)

-------------------------------------------------------------------------------

*   [Next.js Implementation](https://www.openui.com/docs/chat/nextjs)
    
*   [Connect Thread History](https://www.openui.com/docs/chat/persistence)
    
*   [Providers](https://www.openui.com/docs/chat/providers)
    

[Custom UI Guide\
\
Build a chat interface from scratch using headless hooks.](https://www.openui.com/docs/chat/custom-ui-guide)
[Next.js Implementation\
\
Build a Route Handler for streaming chat responses.](https://www.openui.com/docs/chat/nextjs)

### On this page

[Chat endpoint contract](https://www.openui.com/docs/chat/api-contract#chat-endpoint-contract)
[Stream response](https://www.openui.com/docs/chat/api-contract#stream-response)
[Default thread API contract](https://www.openui.com/docs/chat/api-contract#default-thread-api-contract)
[Thread shape](https://www.openui.com/docs/chat/api-contract#thread-shape)
[Message format contract](https://www.openui.com/docs/chat/api-contract#message-format-contract)
[Example custom converter](https://www.openui.com/docs/chat/api-contract#example-custom-converter)
[Related guides](https://www.openui.com/docs/chat/api-contract#related-guides)

---

# Artifacts | OpenUI - The Open Standard for Generative UI

Artifacts
=========

Add side-panel content that opens from inline previews in chat.

Copy MarkdownOpen

Artifacts let a component render a compact inline preview inside the chat message and expand into a full side panel when clicked. Use them for code viewers, document previews, embedded frames, or any content that benefits from a larger canvas.

    import { defineComponent } from "@openuidev/react-lang";
    import { Artifact } from "@openuidev/react-ui";
    import { z } from "zod";
    
    const ArtifactCodeBlock = defineComponent({
      name: "ArtifactCodeBlock",
      props: z.object({
        language: z.string(),
        title: z.string(),
        codeString: z.string(),
      }),
      description: "Code block that opens in the artifact side panel",
      component: Artifact({
        title: (props) => props.title,
        preview: (props, { open, isActive }) => (
          <CodeChip title={props.title} language={props.language} onClick={open} isActive={isActive} />
        ),
        panel: (props) => (
          <SyntaxHighlighter language={props.language}>{props.codeString}</SyntaxHighlighter>
        ),
      }),
    });

[How it works](https://www.openui.com/docs/chat/artifacts#how-it-works)

------------------------------------------------------------------------

An artifact component has two parts:

*   **Preview** — a compact element rendered inline in the chat message. It receives an `open` callback to activate the side panel.
*   **Panel** — the full content rendered inside `ArtifactPanel`, portaled into the `ArtifactPortalTarget` in your layout. Only one panel is visible at a time.

`Artifact()` is a factory function that wires these together. It generates a `ComponentRenderer` that handles ID generation, artifact state, and panel portaling internally. Pass the result as the `component` field of `defineComponent`.

[`Artifact()` config](https://www.openui.com/docs/chat/artifacts#artifact-config)

----------------------------------------------------------------------------------

    import { Artifact } from "@openuidev/react-ui";
    
    Artifact({
      title, // string | (props) => string
      preview, // (props, controls) => ReactNode
      panel, // (props, controls) => ReactNode
      panelProps, // optional — className, errorFallback, header
    });

| Option | Type | Description |
| --- | --- | --- |
| `title` | `string \| (props: P) => string` | Panel header title. Static string or derived from props. |
| `preview` | `(props: P, controls: ArtifactControls) => ReactNode` | Inline preview rendered in the chat message. |
| `panel` | `(props: P, controls: ArtifactControls) => ReactNode` | Content rendered inside the side panel. |
| `panelProps` | `{ className?, errorFallback?, header? }` | Optional overrides forwarded to `ArtifactPanel`. |

Both `preview` and `panel` receive the full Zod-inferred props as the first argument and `ArtifactControls` as the second.

[`ArtifactControls`](https://www.openui.com/docs/chat/artifacts#artifactcontrols)

----------------------------------------------------------------------------------

The controls object passed to `preview` and `panel` render functions.

    interface ArtifactControls {
      isActive: boolean; // whether this artifact's panel is currently open
      open: () => void; // activate this artifact
      close: () => void; // deactivate this artifact
      toggle: () => void; // toggle open/close
    }

The preview typically uses `open` and `isActive` to show a click-to-expand button. The panel can use `close` to render a dismiss button inside the panel body.

[Layout setup](https://www.openui.com/docs/chat/artifacts#layout-setup)

------------------------------------------------------------------------

Built-in layouts (`FullScreen`, `Copilot`, `BottomTray`) mount `ArtifactPortalTarget` automatically. Artifact panels render into this target with no extra setup.

If you build a custom layout with the headless hooks, mount one `ArtifactPortalTarget` in your layout where the panel should appear.

    import { ArtifactPortalTarget } from "@openuidev/react-ui";
    
    function Layout() {
      return (
        <div className="flex h-screen">
          <main className="flex-1">{/* chat area */}</main>
          <ArtifactPortalTarget className="w-[480px]" />
        </div>
      );
    }

Only one `ArtifactPortalTarget` should be mounted at a time. All artifact panels portal into this single element.

[Headless hooks](https://www.openui.com/docs/chat/artifacts#headless-hooks)

----------------------------------------------------------------------------

For custom layouts or advanced control, use the artifact hooks from `@openuidev/react-headless`.

### [`useArtifact(id)`](https://www.openui.com/docs/chat/artifacts#useartifactid)

Binds a component to a specific artifact by ID. Returns activation state and actions.

    import { useArtifact } from "@openuidev/react-headless";
    
    const { isActive, open, close, toggle } = useArtifact(artifactId);

### [`useActiveArtifact()`](https://www.openui.com/docs/chat/artifacts#useactiveartifact)

Returns global artifact state — whether any artifact is open, and a close action. Use this in layout components that resize or show overlays when any artifact is active.

    import { useActiveArtifact } from "@openuidev/react-headless";
    
    const { isArtifactActive, activeArtifactId, closeArtifact } = useActiveArtifact();

Both hooks require a `ChatProvider` ancestor in the component tree.

[Manual wiring](https://www.openui.com/docs/chat/artifacts#manual-wiring)

--------------------------------------------------------------------------

If `Artifact()` does not fit your use case, wire the pieces directly. This is the escape hatch for full control.

    import { defineComponent } from "@openuidev/react-lang";
    import { ArtifactPanel } from "@openuidev/react-ui";
    import { useArtifact } from "@openuidev/react-headless";
    import { useId } from "react";
    
    const CustomArtifact = defineComponent({
      name: "CustomArtifact",
      props: CustomSchema,
      description: "Artifact with full manual control",
      component: ({ props }) => {
        const artifactId = useId();
        const { isActive, open, close } = useArtifact(artifactId);
    
        return (
          <>
            <button onClick={open}>{isActive ? "Viewing" : "Open"}</button>
            <ArtifactPanel artifactId={artifactId} title="Custom">
              <div>{/* panel content */}</div>
            </ArtifactPanel>
          </>
        );
      },
    });

`ArtifactPanel` accepts `artifactId`, `title`, `children`, `className`, `errorFallback`, and `header` (boolean or custom ReactNode). It renders nothing when the artifact is inactive.

[Related guides](https://www.openui.com/docs/chat/artifacts#related-guides)

----------------------------------------------------------------------------

[### Defining Components\
\
Create custom openui-lang components with `defineComponent`.](https://www.openui.com/docs/openui-lang/defining-components)
[### Custom UI Guide\
\
Build a fully custom chat UI with headless hooks.](https://www.openui.com/docs/chat/custom-ui-guide)
[### Headless Hooks\
\
Full reference for all headless hooks.](https://www.openui.com/docs/chat/hooks)
[### Theming\
\
Adjust colors, mode, and theme overrides.](https://www.openui.com/docs/chat/theming)

[BottomTray\
\
A floating support-style chat widget.](https://www.openui.com/docs/chat/bottom-tray)
[Connecting to LLM\
\
Configure apiUrl, streamProtocol adapters, and authentication.](https://www.openui.com/docs/chat/connecting)

### On this page

[How it works](https://www.openui.com/docs/chat/artifacts#how-it-works)
[`Artifact()` config](https://www.openui.com/docs/chat/artifacts#artifact-config)
[`ArtifactControls`](https://www.openui.com/docs/chat/artifacts#artifactcontrols)
[Layout setup](https://www.openui.com/docs/chat/artifacts#layout-setup)
[Headless hooks](https://www.openui.com/docs/chat/artifacts#headless-hooks)
[`useArtifact(id)`](https://www.openui.com/docs/chat/artifacts#useartifactid)
[`useActiveArtifact()`](https://www.openui.com/docs/chat/artifacts#useactiveartifact)
[Manual wiring](https://www.openui.com/docs/chat/artifacts#manual-wiring)
[Related guides](https://www.openui.com/docs/chat/artifacts#related-guides)

---

# Connecting to LLM | OpenUI - The Open Standard for Generative UI

Connecting to LLM
=================

Configure apiUrl, streamProtocol adapters, and authentication.

Copy MarkdownOpen

Every chat layout needs a backend connection, but there are a few separate pieces involved:

*   how the frontend sends the request
*   how the backend streams the response
*   what message shape the backend expects

This page introduces each one first, then shows how to choose the right combination for your backend.

[`apiUrl`](https://www.openui.com/docs/chat/connecting#apiurl)

---------------------------------------------------------------

`apiUrl` is the simplest connection option. Use it when your frontend can call one backend endpoint directly and you do not need custom request logic on the client.

    import { FullScreen } from "@openuidev/react-ui";
    
    <FullScreen apiUrl="/api/chat" agentName="Assistant" />;

With `apiUrl`, OpenUI sends the message history to your endpoint for you. If your backend expects a different message format, configure `messageFormat`. If you need custom headers, extra fields, or a different request body, use `processMessage` instead.

[`processMessage`](https://www.openui.com/docs/chat/connecting#processmessage)

-------------------------------------------------------------------------------

`processMessage` gives you full control over the request. Use it when you need to:

*   add auth headers
*   build a dynamic URL
*   include extra request fields
*   convert `messages` before sending them

    import { openAIMessageFormat, openAIReadableStreamAdapter } from "@openuidev/react-headless";
    import { FullScreen } from "@openuidev/react-ui";
    import { openuiLibrary } from "@openuidev/react-ui/genui-lib";
    
    <FullScreen
      processMessage={async ({ messages, abortController }) => {
        return fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify({
            messages: openAIMessageFormat.toApi(messages),
          }),
          signal: abortController.signal,
        });
      }}
      streamProtocol={openAIReadableStreamAdapter()}
      componentLibrary={openuiLibrary}
      agentName="Assistant"
    />;

`processMessage` receives `threadId`, `messages`, and `abortController`, and must return a standard `Response` from your backend call.

[`streamProtocol`](https://www.openui.com/docs/chat/connecting#streamprotocol)

-------------------------------------------------------------------------------

`streamProtocol` tells OpenUI how to parse the response stream. By default, OpenUI expects the OpenUI Protocol, so only set this when your backend streams a different format.

| Backend output | Frontend config |
| --- | --- |
| OpenUI Protocol | No adapter required |
| Raw OpenAI Chat Completions SSE | `streamProtocol={openAIAdapter()}` |
| OpenAI SDK `toReadableStream()` / NDJSON | `streamProtocol={openAIReadableStreamAdapter()}` |
| OpenAI Responses API | `streamProtocol={openAIResponsesAdapter()}` |

    import { openAIReadableStreamAdapter } from "@openuidev/react-headless";
    
    <FullScreen
      apiUrl="/api/chat"
      streamProtocol={openAIReadableStreamAdapter()}
      agentName="Assistant"
    />;

[`messageFormat`](https://www.openui.com/docs/chat/connecting#messageformat)

-----------------------------------------------------------------------------

`messageFormat` controls the shape of the `messages` array sent to your backend and the shape expected when loading thread history.

| Backend message shape | Frontend config |
| --- | --- |
| AG-UI message shape | No converter required |
| OpenAI chat completions messages | `messageFormat={openAIMessageFormat}` |
| OpenAI Responses conversation items | `messageFormat={openAIConversationMessageFormat}` |

    import { openAIMessageFormat, openAIReadableStreamAdapter } from "@openuidev/react-headless";
    import { FullScreen } from "@openuidev/react-ui";
    
    <FullScreen
      apiUrl="/api/chat"
      streamProtocol={openAIReadableStreamAdapter()}
      messageFormat={openAIMessageFormat}
      agentName="Assistant"
    />;

Use `messageFormat` whenever your backend expects or returns a non-default message shape. This is especially important if you store messages for thread history.

[How to choose](https://www.openui.com/docs/chat/connecting#how-to-choose)

---------------------------------------------------------------------------

Once you know what each prop does, the decision becomes:

1.  Start with `apiUrl`.
2.  Switch to `processMessage` only if you need auth, extra fields, dynamic URLs, or request conversion.
3.  Add `streamProtocol` only if your backend does not stream the default OpenUI Protocol.
4.  Add `messageFormat` only if your backend expects or returns a non-default message shape.

[Rules summary](https://www.openui.com/docs/chat/connecting#rules-summary)

---------------------------------------------------------------------------

*   `apiUrl` is the simplest path when one endpoint can handle the request as-is.
*   `processMessage` is the right choice when you need auth, extra fields, or payload conversion.
*   `streamProtocol` parses the response stream.
*   `messageFormat` converts request messages and loaded thread history.

[Related guides](https://www.openui.com/docs/chat/connecting#related-guides)

-----------------------------------------------------------------------------

*   [Next.js Implementation](https://www.openui.com/docs/chat/nextjs)
    
*   [The API Contract](https://www.openui.com/docs/chat/api-contract)
    
*   [Providers](https://www.openui.com/docs/chat/providers)
    
*   [Connect Thread History](https://www.openui.com/docs/chat/persistence)
    

[Artifacts\
\
Add side-panel content that opens from inline previews in chat.](https://www.openui.com/docs/chat/artifacts)
[Connect Thread History\
\
Configure threadApiUrl and load thread lists and message history.](https://www.openui.com/docs/chat/persistence)

### On this page

[`apiUrl`](https://www.openui.com/docs/chat/connecting#apiurl)
[`processMessage`](https://www.openui.com/docs/chat/connecting#processmessage)
[`streamProtocol`](https://www.openui.com/docs/chat/connecting#streamprotocol)
[`messageFormat`](https://www.openui.com/docs/chat/connecting#messageformat)
[How to choose](https://www.openui.com/docs/chat/connecting#how-to-choose)
[Rules summary](https://www.openui.com/docs/chat/connecting#rules-summary)
[Related guides](https://www.openui.com/docs/chat/connecting#related-guides)

---

# BottomTray | OpenUI - The Open Standard for Generative UI

BottomTray
==========

A floating support-style chat widget.

Copy MarkdownOpen

`BottomTray` provides a floating chat widget instead of a full-page chat surface.

This page covers the widget-style layout for support flows, product assistants, and experiences where chat stays collapsed until a user opens it.

    import { BottomTray } from "@openuidev/react-ui";
    
    export function App() {
      return (
        <>
          <main>{/* Your app */}</main>
          <BottomTray apiUrl="/api/chat" agentName="Support" />
        </>
      );
    }

![BottomTray widget in collapsed and expanded states](https://www.openui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom-tray.665329fb.gif&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

[Controlled open state](https://www.openui.com/docs/chat/bottom-tray#controlled-open-state)

--------------------------------------------------------------------------------------------

    <BottomTray apiUrl="/api/chat" isOpen={isOpen} onOpenChange={setIsOpen} />

Use the same backend configuration props as the other layouts. The only layout-specific props are the open-state controls.

That means you can start with `BottomTray` for the UI and still reuse the same `apiUrl`, `processMessage`, `streamProtocol`, and `threadApiUrl` setup from the other layouts.

[Related guides](https://www.openui.com/docs/chat/bottom-tray#related-guides)

------------------------------------------------------------------------------

[### Connecting to LLM\
\
Configure endpoint, adapters, and auth headers.](https://www.openui.com/docs/chat/connecting)
[### Connect Thread History\
\
Load saved threads and previous messages into the widget.](https://www.openui.com/docs/chat/persistence)
[### Welcome & Starters\
\
Configure the empty-state content and starter prompts.](https://www.openui.com/docs/chat/welcome)
[### Theming\
\
Adjust mode and theme overrides.](https://www.openui.com/docs/chat/theming)

[FullScreen\
\
The full-page, ChatGPT-style chat layout.](https://www.openui.com/docs/chat/fullscreen)
[Artifacts\
\
Add side-panel content that opens from inline previews in chat.](https://www.openui.com/docs/chat/artifacts)

### On this page

[Controlled open state](https://www.openui.com/docs/chat/bottom-tray#controlled-open-state)
[Related guides](https://www.openui.com/docs/chat/bottom-tray#related-guides)

---

# Custom Chat Components | OpenUI - The Open Standard for Generative UI

Custom Chat Components
======================

Override the composer, assistant messages, and user messages.

Copy MarkdownOpen

You can customize specific UI surfaces without rebuilding the full chat stack:

*   `composer`
*   `assistantMessage`
*   `userMessage`

These props replace the built-in UI entirely for that surface. If you override them, your component becomes responsible for rendering the message or composer state correctly.

Use these props when you want to swap a specific surface while keeping the built-in layout and state model. If you need to redesign the whole chat shell, use the headless APIs instead.

[Custom composer](https://www.openui.com/docs/chat/custom-chat-components#custom-composer)

-------------------------------------------------------------------------------------------

    function MyComposer({ onSend, onCancel, isRunning }) {
      // your UI
    }
    
    <Copilot apiUrl="/api/chat" composer={MyComposer} />;

### [`ComposerProps`](https://www.openui.com/docs/chat/custom-chat-components#composerprops)

    type ComposerProps = {
      onSend: (message: string) => void;
      onCancel: () => void;
      isRunning: boolean;
      isLoadingMessages: boolean;
    };

Call `onSend(text)` when the user submits. Use `onCancel()` to stop a running response.

Even a simple custom composer should still account for both `isRunning` and `isLoadingMessages`, because the composer may need to disable input while streaming or while history is still loading.

[Custom assistant and user messages](https://www.openui.com/docs/chat/custom-chat-components#custom-assistant-and-user-messages)

---------------------------------------------------------------------------------------------------------------------------------

    function AssistantBubble({ message }) {
      return <div>{message.content}</div>;
    }
    
    function UserBubble({ message }) {
      return <div>{String(message.content)}</div>;
    }
    
    <Copilot apiUrl="/api/chat" assistantMessage={AssistantBubble} userMessage={UserBubble} />;

The `message` prop is the full `AssistantMessage` or `UserMessage` object from `@openuidev/react-headless`.

[Important behavior notes](https://www.openui.com/docs/chat/custom-chat-components#important-behavior-notes)

-------------------------------------------------------------------------------------------------------------

*   `assistantMessage` replaces the default assistant wrapper, including the avatar/container UI.
*   `userMessage` replaces the default user bubble wrapper.
*   If you pass `componentLibrary` and also pass `assistantMessage`, your custom component takes priority. That means you are responsible for rendering any structured assistant content yourself.
*   `composer` should handle both `isRunning` and `isLoadingMessages` so the input behaves correctly while streaming or loading history.
*   If your custom assistant renderer only handles plain text, document that constraint in your app and avoid assuming `message.content` is always a simple string.

[Related guides](https://www.openui.com/docs/chat/custom-chat-components#related-guides)

-----------------------------------------------------------------------------------------

*   [Headless Intro](https://www.openui.com/docs/chat/headless-intro)
    
*   [Custom UI Guide](https://www.openui.com/docs/chat/custom-ui-guide)
    
*   [GenUI](https://www.openui.com/docs/chat/genui)
    

[Theming\
\
Customize colors, typography, and branding for Chat components.](https://www.openui.com/docs/chat/theming)
[Headless Introduction\
\
Why and when to use headless mode with ChatProvider.](https://www.openui.com/docs/chat/headless-intro)

### On this page

[Custom composer](https://www.openui.com/docs/chat/custom-chat-components#custom-composer)
[`ComposerProps`](https://www.openui.com/docs/chat/custom-chat-components#composerprops)
[Custom assistant and user messages](https://www.openui.com/docs/chat/custom-chat-components#custom-assistant-and-user-messages)
[Important behavior notes](https://www.openui.com/docs/chat/custom-chat-components#important-behavior-notes)
[Related guides](https://www.openui.com/docs/chat/custom-chat-components#related-guides)

---

# Custom UI Guide | OpenUI - The Open Standard for Generative UI

Custom UI Guide
===============

Build a chat interface from scratch using headless hooks.

Copy MarkdownOpen

This guide shows a complete headless composition with:

1.  `ChatProvider` for backend configuration
2.  `useThreadList()` for the sidebar
3.  `useThread()` for messages and the composer

The goal is to show how those pieces fit together in one working example, not to prescribe a specific visual design.

    import { useState } from "react";
    import {
      ChatProvider,
      openAIMessageFormat,
      openAIReadableStreamAdapter,
      useThread,
      useThreadList,
    } from "@openuidev/react-headless";
    
    function ThreadSidebar() {
      const { threads, selectedThreadId, isLoadingThreads, selectThread, switchToNewThread } =
        useThreadList();
    
      return (
        <aside>
          <button onClick={switchToNewThread}>New chat</button>
          {isLoadingThreads ? <p>Loading threads...</p> : null}
          {threads.map((thread) => (
            <button
              key={thread.id}
              onClick={() => selectThread(thread.id)}
              aria-pressed={thread.id === selectedThreadId}
            >
              {thread.title}
            </button>
          ))}
        </aside>
      );
    }
    
    function MessageList() {
      const { messages, isRunning } = useThread();
    
      return (
        <div>
          {messages.map((message) => (
            <div key={message.id}>
              <strong>{message.role}:</strong> {String(message.content ?? "")}
            </div>
          ))}
          {isRunning ? <p>Thinking...</p> : null}
        </div>
      );
    }
    
    function Composer() {
      const { processMessage, cancelMessage, isRunning } = useThread();
      const [input, setInput] = useState("");
    
      return (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!input.trim() || isRunning) return;
            processMessage({ role: "user", content: input });
            setInput("");
          }}
        >
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask anything..."
          />
          {isRunning ? (
            <button type="button" onClick={cancelMessage}>
              Stop
            </button>
          ) : (
            <button type="submit">Send</button>
          )}
        </form>
      );
    }
    
    function CustomChat() {
      return (
        <div className="chat-app">
          <ThreadSidebar />
          <main>
            <MessageList />
            <Composer />
          </main>
        </div>
      );
    }
    
    export default function App() {
      return (
        <ChatProvider
          processMessage={async ({ messages, abortController }) => {
            return fetch("/api/chat", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                messages: openAIMessageFormat.toApi(messages),
              }),
              signal: abortController.signal,
            });
          }}
          threadApiUrl="/api/threads"
          streamProtocol={openAIReadableStreamAdapter()}
          messageFormat={openAIMessageFormat}
        >
          <CustomChat />
        </ChatProvider>
      );
    }

This example uses the same backend assumptions as the built-in layouts:

*   `openAIMessageFormat.toApi(messages)` is called explicitly in `processMessage` to convert messages to OpenAI format — the `messageFormat` prop does not transform messages for `processMessage`
*   `messageFormat={openAIMessageFormat}` is still needed here because `threadApiUrl` is set — it tells the UI how to convert messages when loading saved thread history
*   `openAIReadableStreamAdapter()` matches `response.toReadableStream()`
*   `threadApiUrl` enables saved thread history

If you want Generative UI in a headless build, you also need to render structured assistant content yourself instead of relying on the built-in `componentLibrary` behavior from the layout components.

[Related guides](https://www.openui.com/docs/chat/custom-ui-guide#related-guides)

----------------------------------------------------------------------------------

*   [Headless Intro](https://www.openui.com/docs/chat/headless-intro)
    
*   [Hooks & State](https://www.openui.com/docs/chat/hooks)
    
*   [Connecting to LLM](https://www.openui.com/docs/chat/connecting)
    

[Hooks & State\
\
Deep dive into useThread, useThreadList, and related headless state hooks.](https://www.openui.com/docs/chat/hooks)
[The API Contract\
\
JSON contract for threads, messages, and streaming.](https://www.openui.com/docs/chat/api-contract)

### On this page

[Related guides](https://www.openui.com/docs/chat/custom-ui-guide#related-guides)

---

# Copilot | OpenUI - The Open Standard for Generative UI

Copilot
=======

The sidebar assistant layout for in-app chat experiences.

Copy MarkdownOpen

`Copilot` provides a sidebar assistant layout that stays visible alongside the rest of your application.

This layout keeps the main app screen in view while chat stays available at the side. For a full-page chat surface, see [FullScreen](https://www.openui.com/docs/chat/fullscreen)
. For a floating widget, see [BottomTray](https://www.openui.com/docs/chat/bottom-tray)
.

    import { Copilot } from "@openuidev/react-ui";
    
    export function App() {
      return (
        <div className="flex h-screen w-full">
          <main className="flex-1">{/* Your app */}</main>
          <Copilot apiUrl="/api/chat" agentName="Assistant" />
        </div>
      );
    }

![Copilot sidebar layout example](https://www.openui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvideo2.0a7e1dba.gif&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

[Common configuration](https://www.openui.com/docs/chat/copilot#common-configuration)

--------------------------------------------------------------------------------------

    <Copilot
      apiUrl="/api/chat"
      threadApiUrl="/api/threads"
      agentName="Support Assistant"
      logoUrl="/logo.png"
    />

`Copilot` only handles the UI layer. It is a good fit for support panels, assistant sidebars, and workflows where users need to keep the main screen visible while chatting.

Set up your backend connection in [Connecting to LLM](https://www.openui.com/docs/chat/connecting)
, connect thread history in [Connect Thread History](https://www.openui.com/docs/chat/persistence)
, and customize the empty state in [Welcome & Starters](https://www.openui.com/docs/chat/welcome)
.

[Related guides](https://www.openui.com/docs/chat/copilot#related-guides)

--------------------------------------------------------------------------

[### Connecting to LLM\
\
Configure `apiUrl`, adapters, and auth.](https://www.openui.com/docs/chat/connecting)
[### Connect Thread History\
\
Load thread lists and previous messages from your backend.](https://www.openui.com/docs/chat/persistence)
[### Welcome & Starters\
\
Configure the empty-state experience.](https://www.openui.com/docs/chat/welcome)
[### Theming\
\
Adjust colors, mode, and theme overrides.](https://www.openui.com/docs/chat/theming)
[### Custom Chat Components\
\
Override assistant, user, and composer UI.](https://www.openui.com/docs/chat/custom-chat-components)

[End-to-End Guide\
\
Build a complete OpenUI Chat setup from an existing app.](https://www.openui.com/docs/chat/from-scratch)
[FullScreen\
\
The full-page, ChatGPT-style chat layout.](https://www.openui.com/docs/chat/fullscreen)

### On this page

[Common configuration](https://www.openui.com/docs/chat/copilot#common-configuration)
[Related guides](https://www.openui.com/docs/chat/copilot#related-guides)

---

# Hooks & State | OpenUI - The Open Standard for Generative UI

Hooks & State
=============

Deep dive into useThread, useThreadList, and related headless state hooks.

Copy MarkdownOpen

All headless hooks must run inside `ChatProvider`.

Use `useThread()` for the active conversation and `useThreadList()` for thread navigation. Most custom UIs need both.

[Start with `ChatProvider`](https://www.openui.com/docs/chat/hooks#start-with-chatprovider)

--------------------------------------------------------------------------------------------

    import {
      ChatProvider,
      openAIMessageFormat,
      openAIReadableStreamAdapter,
    } from "@openuidev/react-headless";
    
    export function App() {
      return (
        <ChatProvider
          apiUrl="/api/chat"
          threadApiUrl="/api/threads"
          streamProtocol={openAIReadableStreamAdapter()}
          messageFormat={openAIMessageFormat}
        >
          <MyCustomChat />
        </ChatProvider>
      );
    }

That provider owns the shared state. The hooks below read from and write to that state.

[`useThread()`](https://www.openui.com/docs/chat/hooks#usethread)

------------------------------------------------------------------

Use `useThread()` for the currently selected conversation: messages, send state, loading state, and message mutations.

    const {
      messages,
      isRunning,
      isLoadingMessages,
      threadError,
      processMessage,
      cancelMessage,
      appendMessages,
      updateMessage,
      setMessages,
      deleteMessage,
    } = useThread();

### [Common send flow](https://www.openui.com/docs/chat/hooks#common-send-flow)

    function Composer() {
      const { processMessage, cancelMessage, isRunning } = useThread();
      const [input, setInput] = useState("");
    
      return (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!input.trim() || isRunning) return;
            processMessage({ role: "user", content: input });
            setInput("");
          }}
        >
          <input value={input} onChange={(event) => setInput(event.target.value)} />
          {isRunning ? (
            <button type="button" onClick={cancelMessage}>
              Stop
            </button>
          ) : (
            <button type="submit">Send</button>
          )}
        </form>
      );
    }

Use `isLoadingMessages` to show a loading state when a saved thread is being hydrated, and use `threadError` to render request or load failures near the conversation surface.

[`useThreadList()`](https://www.openui.com/docs/chat/hooks#usethreadlist)

--------------------------------------------------------------------------

Use `useThreadList()` for the sidebar: thread loading, selection, creation, pagination, and thread-level mutations.

    const {
      threads,
      isLoadingThreads,
      threadListError,
      selectedThreadId,
      hasMoreThreads,
      loadThreads,
      loadMoreThreads,
      switchToNewThread,
      createThread,
      selectThread,
      updateThread,
      deleteThread,
    } = useThreadList();

### [Common sidebar flow](https://www.openui.com/docs/chat/hooks#common-sidebar-flow)

    function ThreadSidebar() {
      const {
        threads,
        selectedThreadId,
        hasMoreThreads,
        isLoadingThreads,
        loadMoreThreads,
        switchToNewThread,
        selectThread,
        deleteThread,
      } = useThreadList();
    
      return (
        <aside>
          <button onClick={switchToNewThread}>New chat</button>
    
          {threads.map((thread) => (
            <div key={thread.id}>
              <button
                onClick={() => selectThread(thread.id)}
                aria-pressed={thread.id === selectedThreadId}
              >
                {thread.title}
              </button>
              <button onClick={() => deleteThread(thread.id)}>Delete</button>
            </div>
          ))}
    
          {hasMoreThreads ? (
            <button onClick={() => loadMoreThreads()} disabled={isLoadingThreads}>
              Load more
            </button>
          ) : null}
        </aside>
      );
    }

`switchToNewThread()` clears the current selection so the next user message starts a new conversation. `updateThread()` is useful when you want to rename or otherwise patch thread metadata after creation.

[Selectors](https://www.openui.com/docs/chat/hooks#selectors)

--------------------------------------------------------------

Use selectors to minimize re-renders when you only need a small part of the store.

    const messages = useThread((state) => state.messages);
    const selectedThreadId = useThreadList((state) => state.selectedThreadId);

This is especially useful when your sidebar and message list are separate components and you do not want unrelated state updates to rerender both.

[Related guides](https://www.openui.com/docs/chat/hooks#related-guides)

------------------------------------------------------------------------

*   [Headless Intro](https://www.openui.com/docs/chat/headless-intro)
    
*   [Custom UI Guide](https://www.openui.com/docs/chat/custom-ui-guide)
    
*   [Connect Thread History](https://www.openui.com/docs/chat/persistence)
    

[Headless Introduction\
\
Why and when to use headless mode with ChatProvider.](https://www.openui.com/docs/chat/headless-intro)
[Custom UI Guide\
\
Build a chat interface from scratch using headless hooks.](https://www.openui.com/docs/chat/custom-ui-guide)

### On this page

[Start with `ChatProvider`](https://www.openui.com/docs/chat/hooks#start-with-chatprovider)
[`useThread()`](https://www.openui.com/docs/chat/hooks#usethread)
[Common send flow](https://www.openui.com/docs/chat/hooks#common-send-flow)
[`useThreadList()`](https://www.openui.com/docs/chat/hooks#usethreadlist)
[Common sidebar flow](https://www.openui.com/docs/chat/hooks#common-sidebar-flow)
[Selectors](https://www.openui.com/docs/chat/hooks#selectors)
[Related guides](https://www.openui.com/docs/chat/hooks#related-guides)

---

# Headless Introduction | OpenUI - The Open Standard for Generative UI

Headless Introduction
=====================

Why and when to use headless mode with ChatProvider.

Copy MarkdownOpen

This page introduces headless mode and the role of `ChatProvider` in a custom chat UI.

The trade-off is simple: you get full control over rendering, but you become responsible for composing the sidebar, message list, and composer yourself.

At the center is `ChatProvider`, which manages:

*   streaming state
*   thread list and selection
*   message sending/cancelation
*   thread-history hooks

    import { ChatProvider } from "@openuidev/react-headless";
    
    export function App() {
      return (
        <ChatProvider apiUrl="/api/chat" threadApiUrl="/api/threads">
          <MyCustomChat />
        </ChatProvider>
      );
    }

`ChatProvider` accepts the same backend props as the built-in layouts:

*   `apiUrl` or `processMessage`
*   `streamProtocol`
*   `messageFormat`
*   `threadApiUrl` or custom thread functions

Thread history is not automatic. To load and save threads, you still need `threadApiUrl` or the custom thread handlers.

The usual build order is:

1.  configure `ChatProvider` with your backend connection
2.  read state with `useThread()` and `useThreadList()`
3.  render your own sidebar, messages, and composer components

[Related guides](https://www.openui.com/docs/chat/headless-intro#related-guides)

---------------------------------------------------------------------------------

*   [Hooks & State](https://www.openui.com/docs/chat/hooks)
    
*   [Custom UI Guide](https://www.openui.com/docs/chat/custom-ui-guide)
    
*   [Connecting to LLM](https://www.openui.com/docs/chat/connecting)
    
*   [Connect Thread History](https://www.openui.com/docs/chat/persistence)
    

[Custom Chat Components\
\
Override the composer, assistant messages, and user messages.](https://www.openui.com/docs/chat/custom-chat-components)
[Hooks & State\
\
Deep dive into useThread, useThreadList, and related headless state hooks.](https://www.openui.com/docs/chat/hooks)

### On this page

[Related guides](https://www.openui.com/docs/chat/headless-intro#related-guides)

---

# End-to-End Guide | OpenUI - The Open Standard for Generative UI

End-to-End Guide
================

Build a complete OpenUI Chat setup from an existing app.

Copy MarkdownOpen

This guide shows a complete OpenUI Chat setup in an existing Next.js App Router project.

This path covers:

*   a built-in chat layout
*   an OpenAI-backed route handler
*   frontend request wiring with `processMessage`
*   the correct stream adapter and message format
*   optional thread history
*   optional headless customization

[Prerequisites](https://www.openui.com/docs/chat/from-scratch#prerequisites)

-----------------------------------------------------------------------------

Complete [Installation](https://www.openui.com/docs/chat/installation)
 first, then return here to wire the chat flow.

[1\. Generate the system prompt](https://www.openui.com/docs/chat/from-scratch#1-generate-the-system-prompt)

-------------------------------------------------------------------------------------------------------------

If you want Generative UI, generate a system prompt from the component library. The backend loads this prompt and sends it to the model with each request.

If you only want plain text chat, you can skip this step and omit `componentLibrary` in the next examples.

    npx @openuidev/cli@latest generate ./src/library.ts --out src/generated/system-prompt.txt

Where `src/library.ts` exports your library:

    export {
      openuiLibrary as library,
      openuiPromptOptions as promptOptions,
    } from "@openuidev/react-ui/genui-lib";

Add this as a prebuild step in `package.json`:

    "scripts": {
      "generate:prompt": "openui generate src/library.ts --out src/generated/system-prompt.txt",
      "dev": "pnpm generate:prompt && next dev",
      "build": "pnpm generate:prompt && next build"
    }

This prompt tells the model which UI components it is allowed to emit.

[2\. Create the streaming backend route](https://www.openui.com/docs/chat/from-scratch#2-create-the-streaming-backend-route)

-----------------------------------------------------------------------------------------------------------------------------

Create `app/api/chat/route.ts`:

    import { readFileSync } from "fs";
    import { join } from "path";
    import { NextRequest } from "next/server";
    import OpenAI from "openai";
    
    const client = new OpenAI();
    const systemPrompt = readFileSync(join(process.cwd(), "src/generated/system-prompt.txt"), "utf-8");
    
    export async function POST(req: NextRequest) {
      try {
        const { messages } = await req.json();
    
        const response = await client.chat.completions.create({
          model: "gpt-5.2",
          messages: [{ role: "system", content: systemPrompt }, ...messages],
          stream: true,
        });
    
        return new Response(response.toReadableStream(), {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            Connection: "keep-alive",
          },
        });
      } catch (err) {
        console.error(err);
        const message = err instanceof Error ? err.message : "Unknown error";
        return new Response(JSON.stringify({ error: message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

The system prompt is loaded from the file generated by the CLI. The route only receives messages from the frontend — the prompt never leaves the server.

[3\. Render a layout and connect it to the route](https://www.openui.com/docs/chat/from-scratch#3-render-a-layout-and-connect-it-to-the-route)

-----------------------------------------------------------------------------------------------------------------------------------------------

`FullScreen` is a good baseline because it includes both the thread list and the main chat surface.

This guide uses `processMessage` instead of `apiUrl` so the request body stays explicit.

    import { openAIMessageFormat, openAIReadableStreamAdapter } from "@openuidev/react-headless";
    import { FullScreen } from "@openuidev/react-ui";
    import { openuiLibrary } from "@openuidev/react-ui/genui-lib";
    
    export default function Page() {
      return (
        <div className="h-screen">
          <FullScreen
            processMessage={async ({ messages, abortController }) => {
              return fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  messages: openAIMessageFormat.toApi(messages),
                }),
                signal: abortController.signal,
              });
            }}
            streamProtocol={openAIReadableStreamAdapter()}
            componentLibrary={openuiLibrary}
            agentName="Assistant"
          />
        </div>
      );
    }

Why this setup matters:

*   `processMessage` gives you control over the request body
*   `openAIMessageFormat.toApi(messages)` converts messages to OpenAI format before sending
*   `openAIReadableStreamAdapter()` matches `response.toReadableStream()`
*   `componentLibrary={openuiLibrary}` lets the UI render structured responses

### [Checkpoint](https://www.openui.com/docs/chat/from-scratch#checkpoint)

At this point, you should be able to send a message and receive streamed responses in the UI.

Guides: [Connecting to LLM](https://www.openui.com/docs/chat/connecting)
, [Next.js Implementation](https://www.openui.com/docs/chat/nextjs)
, [Providers](https://www.openui.com/docs/chat/providers)

[4\. Connect Thread History (optional)](https://www.openui.com/docs/chat/from-scratch#4-connect-thread-history-optional)

-------------------------------------------------------------------------------------------------------------------------

Stop here if you only need a working streamed chat UI.

Continue with this section only if your app also needs saved threads and message history from the backend.

If you want the UI to load saved threads and previous messages, add `threadApiUrl` and implement the default thread contract described in [Connect Thread History](https://www.openui.com/docs/chat/persistence)
.

    <FullScreen
      processMessage={async ({ messages, abortController }) => {
        return fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: openAIMessageFormat.toApi(messages),
          }),
          signal: abortController.signal,
        });
      }}
      threadApiUrl="/api/threads"
      streamProtocol={openAIReadableStreamAdapter()}
      messageFormat={openAIMessageFormat}
      componentLibrary={openuiLibrary}
      agentName="Assistant"
    />

When using `processMessage`, you must call `openAIMessageFormat.toApi(messages)` explicitly in the request body — the `messageFormat` prop does not transform messages for `processMessage`. The `messageFormat={openAIMessageFormat}` prop here is for `threadApiUrl`: it tells the UI how to convert messages when loading saved thread history from the backend.

[5\. Switch layouts or go headless (optional)](https://www.openui.com/docs/chat/from-scratch#5-switch-layouts-or-go-headless-optional)

---------------------------------------------------------------------------------------------------------------------------------------

This step does not change your backend contract. It only changes the UI layer that sits on top of the same chat and thread wiring.

Once the backend contract is working, you can keep the same chat wiring and swap the UI layer.

*   Use [Copilot](https://www.openui.com/docs/chat/copilot)
     for a sidebar layout
*   Use [BottomTray](https://www.openui.com/docs/chat/bottom-tray)
     for a floating widget
*   Use [Headless Intro](https://www.openui.com/docs/chat/headless-intro)
     and [Custom UI Guide](https://www.openui.com/docs/chat/custom-ui-guide)
     for full UI control

[You now have](https://www.openui.com/docs/chat/from-scratch#you-now-have)

---------------------------------------------------------------------------

*   a streaming `/api/chat` route
*   a connected chat layout
*   the correct OpenAI message conversion and stream adapter
*   optional GenUI support
*   a clear path to thread history and headless customization

[Next steps](https://www.openui.com/docs/chat/from-scratch#next-steps)

-----------------------------------------------------------------------

*   [Connect Thread History](https://www.openui.com/docs/chat/persistence)
    
*   [GenUI](https://www.openui.com/docs/chat/genui)
    
*   [Custom UI Guide](https://www.openui.com/docs/chat/custom-ui-guide)
    

[GenUI\
\
Use Generative UI with Chat components.](https://www.openui.com/docs/chat/genui)
[Copilot\
\
The sidebar assistant layout for in-app chat experiences.](https://www.openui.com/docs/chat/copilot)

### On this page

[Prerequisites](https://www.openui.com/docs/chat/from-scratch#prerequisites)
[1\. Generate the system prompt](https://www.openui.com/docs/chat/from-scratch#1-generate-the-system-prompt)
[2\. Create the streaming backend route](https://www.openui.com/docs/chat/from-scratch#2-create-the-streaming-backend-route)
[3\. Render a layout and connect it to the route](https://www.openui.com/docs/chat/from-scratch#3-render-a-layout-and-connect-it-to-the-route)
[Checkpoint](https://www.openui.com/docs/chat/from-scratch#checkpoint)
[4\. Connect Thread History (optional)](https://www.openui.com/docs/chat/from-scratch#4-connect-thread-history-optional)
[5\. Switch layouts or go headless (optional)](https://www.openui.com/docs/chat/from-scratch#5-switch-layouts-or-go-headless-optional)
[You now have](https://www.openui.com/docs/chat/from-scratch#you-now-have)
[Next steps](https://www.openui.com/docs/chat/from-scratch#next-steps)

---

# Next.js Implementation | OpenUI - The Open Standard for Generative UI

Next.js Implementation
======================

Build a Route Handler for streaming chat responses.

Copy MarkdownOpen

This page covers the Route Handler pattern and matching frontend configuration for a Next.js App Router setup.

If you want the full install-and-render walkthrough, use the [End-to-End Guide](https://www.openui.com/docs/chat/from-scratch)
 instead.

This page focuses on one specific backend pattern:

*   `processMessage` on the frontend to send messages
*   `openAIMessageFormat` to send OpenAI chat messages
*   `openAIReadableStreamAdapter()` because `response.toReadableStream()` emits NDJSON, not raw SSE
*   the system prompt stays on the server, generated at build time by the CLI

[Route handler](https://www.openui.com/docs/chat/nextjs#route-handler)

-----------------------------------------------------------------------

Generate the system prompt at build time:

    npx @openuidev/cli@latest generate ./src/library.ts --out src/generated/system-prompt.txt

Create `app/api/chat/route.ts`:

    import { readFileSync } from "fs";
    import { join } from "path";
    import { NextRequest } from "next/server";
    import OpenAI from "openai";
    
    const client = new OpenAI();
    const systemPrompt = readFileSync(join(process.cwd(), "src/generated/system-prompt.txt"), "utf-8");
    
    export async function POST(req: NextRequest) {
      try {
        const { messages } = await req.json();
    
        const response = await client.chat.completions.create({
          model: "gpt-5.2",
          messages: [{ role: "system", content: systemPrompt }, ...messages],
          stream: true,
        });
    
        return new Response(response.toReadableStream(), {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            Connection: "keep-alive",
          },
        });
      } catch (err) {
        console.error(err);
        const message = err instanceof Error ? err.message : "Unknown error";
        return new Response(JSON.stringify({ error: message }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

The system prompt is loaded from the file generated by the CLI. It never leaves the server.

[Matching frontend configuration](https://www.openui.com/docs/chat/nextjs#matching-frontend-configuration)

-----------------------------------------------------------------------------------------------------------

Because `toReadableStream()` produces newline-delimited JSON, pair it with `openAIReadableStreamAdapter()` on the frontend.

When using `processMessage`, you must convert messages yourself with `openAIMessageFormat.toApi(messages)` before sending. The `messageFormat` prop only applies automatically for the `apiUrl` flow.

    import { openAIMessageFormat, openAIReadableStreamAdapter } from "@openuidev/react-headless";
    import { FullScreen } from "@openuidev/react-ui";
    import { openuiLibrary } from "@openuidev/react-ui/genui-lib";
    
    <FullScreen
      processMessage={async ({ messages, abortController }) => {
        return fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: openAIMessageFormat.toApi(messages),
          }),
          signal: abortController.signal,
        });
      }}
      streamProtocol={openAIReadableStreamAdapter()}
      componentLibrary={openuiLibrary}
      agentName="Assistant"
    />;

Use `openAIAdapter()` only if your backend emits raw SSE chunks instead of the OpenAI SDK readable stream.

[Related guides](https://www.openui.com/docs/chat/nextjs#related-guides)

-------------------------------------------------------------------------

*   [Connecting to LLM](https://www.openui.com/docs/chat/connecting)
    
*   [Providers](https://www.openui.com/docs/chat/providers)
    
*   [End-to-End Guide](https://www.openui.com/docs/chat/from-scratch)
    

[The API Contract\
\
JSON contract for threads, messages, and streaming.](https://www.openui.com/docs/chat/api-contract)
[Providers\
\
Provider-specific setup for OpenAI, Vercel AI SDK, and LangGraph.](https://www.openui.com/docs/chat/providers)

### On this page

[Route handler](https://www.openui.com/docs/chat/nextjs#route-handler)
[Matching frontend configuration](https://www.openui.com/docs/chat/nextjs#matching-frontend-configuration)
[Related guides](https://www.openui.com/docs/chat/nextjs#related-guides)

---

# FullScreen | OpenUI - The Open Standard for Generative UI

FullScreen
==========

The full-page, ChatGPT-style chat layout.

Copy MarkdownOpen

`FullScreen` provides a full-page chat layout with the built-in thread list and main conversation area.

This page covers the complete built-in layout. For a sidebar inside an existing app screen, see [Copilot](https://www.openui.com/docs/chat/copilot)
. For a floating widget, see [BottomTray](https://www.openui.com/docs/chat/bottom-tray)
.

    import { FullScreen } from "@openuidev/react-ui";
    
    export function App() {
      return (
        <div className="h-screen">
          <FullScreen apiUrl="/api/chat" agentName="Assistant" />
        </div>
      );
    }

![FullScreen layout example](https://www.openui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvideo1.9931fcfa.gif&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

[Common configuration](https://www.openui.com/docs/chat/fullscreen#common-configuration)

-----------------------------------------------------------------------------------------

    <FullScreen
      apiUrl="/api/chat"
      threadApiUrl="/api/threads"
      agentName="Data Assistant"
      logoUrl="/logo.png"
    />

`FullScreen` is the best starting point for end-to-end setup because it exercises both the message surface and thread UI. See the [End-to-End Guide](https://www.openui.com/docs/chat/from-scratch)
 if you want to wire the whole flow manually.

[Related guides](https://www.openui.com/docs/chat/fullscreen#related-guides)

-----------------------------------------------------------------------------

[### Connecting to LLM\
\
Configure endpoint, streaming adapters, and auth.](https://www.openui.com/docs/chat/connecting)
[### Connect Thread History\
\
Load thread lists and message history from your backend.](https://www.openui.com/docs/chat/persistence)
[### Welcome & Starters\
\
Customize the empty-state experience.](https://www.openui.com/docs/chat/welcome)
[### Theming\
\
Control colors, mode, and theme overrides.](https://www.openui.com/docs/chat/theming)
[### Custom Chat Components\
\
Override the built-in composer and message rendering.](https://www.openui.com/docs/chat/custom-chat-components)

[Copilot\
\
The sidebar assistant layout for in-app chat experiences.](https://www.openui.com/docs/chat/copilot)
[BottomTray\
\
A floating support-style chat widget.](https://www.openui.com/docs/chat/bottom-tray)

### On this page

[Common configuration](https://www.openui.com/docs/chat/fullscreen#common-configuration)
[Related guides](https://www.openui.com/docs/chat/fullscreen#related-guides)

---

# GenUI | OpenUI - The Open Standard for Generative UI

GenUI
=====

Use Generative UI with Chat components.

Copy MarkdownOpen

GenUI lets assistant messages render structured UI instead of plain text. To make it work, you need both sides of the setup:

*   `componentLibrary` on the frontend so OpenUI knows how to render components
*   a generated system prompt on the backend so the model knows what it is allowed to emit

Passing `componentLibrary` alone is not enough.

The frontend and backend have different jobs here:

*   the frontend renders structured responses through `componentLibrary`
*   the backend loads the generated system prompt and sends it to the model with each request

If either side is missing, the model falls back to plain text or emits components the UI cannot render.

Generate the system prompt with the CLI:

    npx @openuidev/cli@latest generate ./src/library.ts --out src/generated/system-prompt.txt

The CLI auto-detects exported `PromptOptions` alongside your library, so examples and rules are included automatically. See [System Prompts](https://www.openui.com/docs/openui-lang/system-prompts)
 for details.

[Use the chat library](https://www.openui.com/docs/chat/genui#use-the-chat-library)

------------------------------------------------------------------------------------

`openuiChatLibrary` is optimised for conversational chat: every response is wrapped in a `Card`, and it includes chat-specific components like `FollowUpBlock`, `ListBlock`, and `SectionBlock`.

    import { openAIAdapter, openAIMessageFormat } from "@openuidev/react-headless";
    import { FullScreen } from "@openuidev/react-ui";
    import { openuiChatLibrary } from "@openuidev/react-ui/genui-lib";
    
    export default function Page() {
      return (
        <FullScreen
          processMessage={async ({ messages, abortController }) => {
            return fetch("/api/chat", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                messages: openAIMessageFormat.toApi(messages),
              }),
              signal: abortController.signal,
            });
          }}
          streamProtocol={openAIAdapter()}
          componentLibrary={openuiChatLibrary}
          agentName="Assistant"
        />
      );
    }

In this setup:

*   The system prompt is generated at build time via the CLI and loaded by the backend
*   `openAIMessageFormat.toApi(messages)` converts messages before sending
*   `componentLibrary={openuiChatLibrary}` tells the UI how to render the model output
*   `openAIAdapter()` parses raw SSE chunks from the backend

This is the minimal complete pattern for GenUI in a chat interface. For a non-chat renderer or custom layout, use `openuiLibrary` and `openuiPromptOptions` from the same import path.

Plain text response

![Plain text response](https://www.openui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgenui-text-response.663d246a.png&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

GenUI response

![GenUI rendered response](https://www.openui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgenui-response.fa60f56c.png&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

[Use your own library](https://www.openui.com/docs/chat/genui#use-your-own-library)

------------------------------------------------------------------------------------

If you need domain-specific components, keep the same request flow and swap in your own library definition:

First, generate the system prompt from your custom library:

    npx @openuidev/cli@latest generate ./src/lib/my-library.ts --out src/generated/system-prompt.txt

Then wire up the frontend — it only needs the component library for rendering:

    import { openAIMessageFormat, openAIReadableStreamAdapter } from "@openuidev/react-headless";
    import { FullScreen } from "@openuidev/react-ui";
    import { myLibrary } from "@/lib/my-library";
    
    <FullScreen
      processMessage={async ({ messages, abortController }) => {
        return fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: openAIMessageFormat.toApi(messages),
          }),
          signal: abortController.signal,
        });
      }}
      streamProtocol={openAIReadableStreamAdapter()}
      componentLibrary={myLibrary}
      agentName="Assistant"
    />;

Your custom library needs two things:

*   a `createLibrary()` result, so the CLI can generate the system prompt and the frontend can render components
*   optional `PromptOptions` export for examples and rules (auto-detected by the CLI)

Your backend loads the generated prompt file and sends it to the model alongside the message history.

[Related guides](https://www.openui.com/docs/chat/genui#related-guides)

------------------------------------------------------------------------

*   [End-to-End Guide](https://www.openui.com/docs/chat/from-scratch)
    
*   [Connecting to LLM](https://www.openui.com/docs/chat/connecting)
    
*   [Define Components](https://www.openui.com/docs/openui-lang/defining-components)
    

[Installation\
\
Add OpenUI Chat to an existing Next.js App Router application.](https://www.openui.com/docs/chat/installation)
[End-to-End Guide\
\
Build a complete OpenUI Chat setup from an existing app.](https://www.openui.com/docs/chat/from-scratch)

### On this page

[Use the chat library](https://www.openui.com/docs/chat/genui#use-the-chat-library)
[Use your own library](https://www.openui.com/docs/chat/genui#use-your-own-library)
[Related guides](https://www.openui.com/docs/chat/genui#related-guides)

---

# Connect Thread History | OpenUI - The Open Standard for Generative UI

Connect Thread History
======================

Configure threadApiUrl and load thread lists and message history.

Copy MarkdownOpen

This page explains how to connect thread lists and previous messages from a backend.

To connect thread history, either:

*   pass `threadApiUrl` and implement the default endpoint contract used by OpenUI
*   provide custom thread functions if your API shape is different

This config only affects thread history. Your live chat request still comes from `apiUrl` or `processMessage`.

[Default `threadApiUrl` contract](https://www.openui.com/docs/chat/persistence#default-threadapiurl-contract)

--------------------------------------------------------------------------------------------------------------

When you pass `threadApiUrl="/api/threads"`, OpenUI appends its own path segments. The default requests look like this:

| Action | Method | URL | Request body | Expected response |
| --- | --- | --- | --- | --- |
| List threads | `GET` | `/api/threads/get` | —   | `{ threads: Thread[], nextCursor?: any }` |
| Create thread | `POST` | `/api/threads/create` | `{ messages }` | `Thread` |
| Update thread | `PATCH` | `/api/threads/update/:id` | `Thread` | `Thread` |
| Delete thread | `DELETE` | `/api/threads/delete/:id` | —   | empty response is fine |
| Load messages | `GET` | `/api/threads/get/:id` | —   | message array in your backend format |

    import { FullScreen } from "@openuidev/react-ui";
    
    <FullScreen apiUrl="/api/chat" threadApiUrl="/api/threads" agentName="Assistant" />;

`createThread` sends the first user message as `messages`, already converted through your current `messageFormat`. `loadThread` expects the response body to be something `messageFormat.fromApi()` can read.

[When to add `messageFormat`](https://www.openui.com/docs/chat/persistence#when-to-add-messageformat)

------------------------------------------------------------------------------------------------------

If your thread API stores messages in OpenUI's default shape, you do not need any extra config.

If your thread API stores messages in OpenAI chat format, add `messageFormat={openAIMessageFormat}` so both chat requests and thread loading stay aligned.

In other words:

*   `apiUrl` or `processMessage` handles sending new chat requests
*   `threadApiUrl` handles listing threads and loading saved messages
*   `messageFormat` keeps both paths aligned when your backend does not use the default AG-UI message shape

    import { openAIMessageFormat, openAIReadableStreamAdapter } from "@openuidev/react-headless";
    import { FullScreen } from "@openuidev/react-ui";
    
    <FullScreen
      apiUrl="/api/chat"
      threadApiUrl="/api/threads"
      streamProtocol={openAIReadableStreamAdapter()}
      messageFormat={openAIMessageFormat}
      agentName="Assistant"
    />;

[Use custom thread functions when your API differs](https://www.openui.com/docs/chat/persistence#use-custom-thread-functions-when-your-api-differs)

----------------------------------------------------------------------------------------------------------------------------------------------------

If your backend already uses a different shape, such as:

*   REST routes like `/api/threads/:id/messages`
*   GraphQL
*   auth-protected endpoints with custom headers
*   a different request body for creating threads

then provide the individual thread functions instead of relying on the default `threadApiUrl` behavior.

    <FullScreen
      apiUrl="/api/chat"
      fetchThreadList={async (cursor) => {
        const res = await fetch(`/api/conversations?cursor=${cursor ?? ""}`);
        return res.json();
      }}
      createThread={async (firstMessage) => {
        const res = await fetch("/api/conversations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstMessage }),
        });
        return res.json();
      }}
      updateThread={async (thread) => {
        const res = await fetch(`/api/conversations/${thread.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(thread),
        });
        return res.json();
      }}
      deleteThread={async (id) => {
        await fetch(`/api/conversations/${id}`, { method: "DELETE" });
      }}
      loadThread={async (threadId) => {
        const res = await fetch(`/api/conversations/${threadId}/messages`);
        return res.json();
      }}
      agentName="Assistant"
    />

[Related guides](https://www.openui.com/docs/chat/persistence#related-guides)

------------------------------------------------------------------------------

*   [The API Contract](https://www.openui.com/docs/chat/api-contract)
    
*   [Connecting to LLM](https://www.openui.com/docs/chat/connecting)
    
*   [End-to-End Guide](https://www.openui.com/docs/chat/from-scratch)
    

[Connecting to LLM\
\
Configure apiUrl, streamProtocol adapters, and authentication.](https://www.openui.com/docs/chat/connecting)
[Welcome & Starters\
\
Configure the empty-state welcome message and conversation starters.](https://www.openui.com/docs/chat/welcome)

### On this page

[Default `threadApiUrl` contract](https://www.openui.com/docs/chat/persistence#default-threadapiurl-contract)
[When to add `messageFormat`](https://www.openui.com/docs/chat/persistence#when-to-add-messageformat)
[Use custom thread functions when your API differs](https://www.openui.com/docs/chat/persistence#use-custom-thread-functions-when-your-api-differs)
[Related guides](https://www.openui.com/docs/chat/persistence#related-guides)

---

# Providers | OpenUI - The Open Standard for Generative UI

Providers
=========

Provider-specific setup for OpenAI, Vercel AI SDK, and LangGraph.

Copy MarkdownOpen

Choose config based on the stream format and message shape your backend emits, not just the provider name.

This page maps common provider and backend patterns to the matching `streamProtocol` and `messageFormat` configuration.

For the core connection concepts, see [Connecting to LLM](https://www.openui.com/docs/chat/connecting)
.

[Common mappings](https://www.openui.com/docs/chat/providers#common-mappings)

------------------------------------------------------------------------------

| Backend pattern | `streamProtocol` | `messageFormat` | Use this when... |
| --- | --- | --- | --- |
| OpenUI Protocol | none | none | Your backend already emits the default OpenUI stream and accepts OpenUI messages |
| Raw OpenAI Chat Completions SSE | `openAIAdapter()` | `openAIMessageFormat` when needed | You forward raw `data:` SSE chunks from Chat Completions |
| OpenAI SDK `toReadableStream()` / NDJSON | `openAIReadableStreamAdapter()` | `openAIMessageFormat` when needed | You return `response.toReadableStream()` from the OpenAI SDK |
| OpenAI Responses API | `openAIResponsesAdapter()` | `openAIConversationMessageFormat` when needed | Your backend uses `openai.responses.create()` |

Start with the backend output format. Then add `messageFormat` only if the request or stored-history message shape also differs from the OpenUI default.

[OpenAI Chat Completions](https://www.openui.com/docs/chat/providers#openai-chat-completions)

----------------------------------------------------------------------------------------------

There are two common OpenAI Chat Completions patterns.

### [Raw SSE](https://www.openui.com/docs/chat/providers#raw-sse)

Use `openAIAdapter()` if your server forwards raw Chat Completions SSE events.

    import { openAIAdapter, openAIMessageFormat } from "@openuidev/react-headless";
    import { FullScreen } from "@openuidev/react-ui";
    
    <FullScreen
      apiUrl="/api/chat"
      streamProtocol={openAIAdapter()}
      messageFormat={openAIMessageFormat}
      agentName="Assistant"
    />;

### [OpenAI SDK `toReadableStream()`](https://www.openui.com/docs/chat/providers#openai-sdk-toreadablestream)

Use `openAIReadableStreamAdapter()` if your route returns `response.toReadableStream()`.

    import { openAIMessageFormat, openAIReadableStreamAdapter } from "@openuidev/react-headless";
    import { FullScreen } from "@openuidev/react-ui";
    
    <FullScreen
      apiUrl="/api/chat"
      streamProtocol={openAIReadableStreamAdapter()}
      messageFormat={openAIMessageFormat}
      agentName="Assistant"
    />;

[OpenAI Responses API](https://www.openui.com/docs/chat/providers#openai-responses-api)

----------------------------------------------------------------------------------------

Use `openAIResponsesAdapter()` for the Responses API event stream.

Add `openAIConversationMessageFormat` only if your backend also expects or stores Responses conversation items instead of the default AG-UI message shape.

    import { openAIConversationMessageFormat, openAIResponsesAdapter } from "@openuidev/react-headless";
    import { FullScreen } from "@openuidev/react-ui";
    
    <FullScreen
      apiUrl="/api/chat"
      streamProtocol={openAIResponsesAdapter()}
      messageFormat={openAIConversationMessageFormat}
      agentName="Assistant"
    />;

[Vercel AI SDK](https://www.openui.com/docs/chat/providers#vercel-ai-sdk)

--------------------------------------------------------------------------

Ignore the SDK name at first and inspect what your route actually returns.

*   If the route already speaks the OpenUI Protocol, `apiUrl` is usually enough.
*   If it returns a different stream format, keep `apiUrl` or switch to `processMessage`, then add the matching `streamProtocol`.
*   If the route expects a custom request body, use `processMessage`.

[LangGraph](https://www.openui.com/docs/chat/providers#langgraph)

------------------------------------------------------------------

Use the same decision rules:

*   start with `apiUrl` when the endpoint already matches the request and stream shape your frontend expects
*   switch to `processMessage` when you need auth headers, a custom body, dynamic routing, or provider-specific metadata

[Related guides](https://www.openui.com/docs/chat/providers#related-guides)

----------------------------------------------------------------------------

*   [Connecting to LLM](https://www.openui.com/docs/chat/connecting)
    
*   [Next.js Implementation](https://www.openui.com/docs/chat/nextjs)
    
*   [The API Contract](https://www.openui.com/docs/chat/api-contract)
    

[Next.js Implementation\
\
Build a Route Handler for streaming chat responses.](https://www.openui.com/docs/chat/nextjs)

### On this page

[Common mappings](https://www.openui.com/docs/chat/providers#common-mappings)
[OpenAI Chat Completions](https://www.openui.com/docs/chat/providers#openai-chat-completions)
[Raw SSE](https://www.openui.com/docs/chat/providers#raw-sse)
[OpenAI SDK `toReadableStream()`](https://www.openui.com/docs/chat/providers#openai-sdk-toreadablestream)
[OpenAI Responses API](https://www.openui.com/docs/chat/providers#openai-responses-api)
[Vercel AI SDK](https://www.openui.com/docs/chat/providers#vercel-ai-sdk)
[LangGraph](https://www.openui.com/docs/chat/providers#langgraph)
[Related guides](https://www.openui.com/docs/chat/providers#related-guides)

---

# @openuidev/cli | OpenUI - The Open Standard for Generative UI

@openuidev/cli
==============

API reference for the OpenUI CLI to scaffold apps and generate system prompts.

Copy MarkdownOpen

A command-line tool for scaffolding OpenUI chat apps and generating system prompts or JSON schemas from library definitions.

[Installation](https://www.openui.com/docs/api-reference/cli#installation)

---------------------------------------------------------------------------

    # Run without installing
    npx @openuidev/cli@latest <command>
    
    # Or install globally
    npm install -g @openuidev/cli
    pnpm add -g @openuidev/cli
    yarn global add @openuidev/cli
    bun add -g @openuidev/cli

[`openui create`](https://www.openui.com/docs/api-reference/cli#openui-create)

-------------------------------------------------------------------------------

Scaffolds a new Next.js app pre-configured with OpenUI Chat.

    openui create [options]

**Options**

| Flag | Description |
| --- | --- |
| `-n, --name <string>` | Project name (directory to create) |
| `--skill` | Install the OpenUI agent skill for AI coding assistants |
| `--no-skill` | Skip installing the OpenUI agent skill |
| `--no-interactive` | Fail instead of prompting for missing input |

When run interactively (default), the CLI prompts for any missing options. Pass `--no-interactive` in CI or scripted environments to surface missing required flags as errors instead.

**What it does**

1.  Copies the bundled `openui-chat` Next.js template into `<name>/`
2.  Rewrites `workspace:*` dependency versions to `latest`
3.  Auto-detects your package manager (npm, pnpm, yarn, bun)
4.  Installs dependencies
5.  Optionally installs the [OpenUI agent skill](https://www.openui.com/docs/openui-lang/agent-skill)
     for AI coding assistants (e.g. Claude, Cursor, Copilot)

The generated project includes a `generate:prompt` script that runs `openui generate` as part of `dev` and `build`.

**Agent skill**

When run interactively, `openui create` asks whether to install the OpenUI agent skill. The skill teaches AI coding assistants how to build with OpenUI Lang — covering component definitions, system prompts, the Renderer, and debugging.

Pass `--skill` or `--no-skill` to skip the prompt. In `--no-interactive` mode the skill is skipped unless `--skill` is explicitly passed.

**Examples**

    # Interactive — prompts for project name and skill installation
    openui create
    
    # Non-interactive
    openui create --name my-app
    openui create --no-interactive --name my-app
    
    # Explicitly install or skip the agent skill
    openui create --name my-app --skill
    openui create --name my-app --no-skill

[`openui generate`](https://www.openui.com/docs/api-reference/cli#openui-generate)

-----------------------------------------------------------------------------------

Generates a system prompt or JSON schema from a file that exports a `createLibrary()` result.

    openui generate [entry] [options]

**Arguments**

| Argument | Description |
| --- | --- |
| `[entry]` | Path to a `.ts`, `.tsx`, `.js`, or `.jsx` file that exports a `Library` |

**Options**

| Flag | Description |
| --- | --- |
| `-o, --out <file>` | Write output to a file instead of stdout |
| `--json-schema` | Output JSON schema instead of a system prompt |
| `--export <name>` | Name of the export to use (auto-detected by default) |
| `--prompt-options <name>` | Name of the `PromptOptions` export to use (auto-detected by default) |
| `--no-interactive` | Fail instead of prompting for missing `entry` |

**Examples**

    # Print system prompt to stdout
    openui generate ./src/library.ts
    
    # Write system prompt to a file
    openui generate ./src/library.ts --out ./src/generated/system-prompt.txt
    
    # Output JSON schema instead
    openui generate ./src/library.ts --json-schema
    
    # Explicit export names
    openui generate ./src/library.ts --export myLibrary --prompt-options myOptions

### [Export auto-detection](https://www.openui.com/docs/api-reference/cli#export-auto-detection)

The CLI bundles the entry file with esbuild before evaluating it. CSS, SVG, image, and font imports are stubbed automatically.

If `--export` is not provided, the CLI searches the module's exports in this order:

1.  An export named `library`
2.  The `default` export
3.  Any export whose value has both a `.prompt()` method and a `.toJSONSchema()` method

If `--prompt-options` is not provided, the CLI looks for:

1.  An export named `promptOptions`
2.  An export named `options`
3.  Any export whose name ends with `PromptOptions` (case-insensitive)

A valid `PromptOptions` value has at least one of: `examples` (string array), `additionalRules` (string array), or `preamble` (string).

### [`PromptOptions` type](https://www.openui.com/docs/api-reference/cli#promptoptions-type)

    interface PromptOptions {
      preamble?: string;
      additionalRules?: string[];
      examples?: string[];
      toolExamples?: string[];
      editMode?: boolean;
      inlineMode?: boolean;
      /** Enable Query(), Mutation(), @Run, built-in functions. Default: true if tools provided. */
      toolCalls?: boolean;
      /** Enable $variables, @Set, @Reset, built-in functions. Default: true if toolCalls. */
      bindings?: boolean;
    }

Built-in functions (`@Count`, `@Filter`, `@Sort`, `@Each`, etc.) are included in the prompt only when `toolCalls` or `bindings` is enabled. For static UI examples without data fetching, they are omitted to keep the prompt focused.

Pass this as a named export alongside your library to customise the generated system prompt without hard-coding it into `createLibrary`.

    // src/library.ts
    import { createLibrary } from "@openuidev/react-lang";
    import type { PromptOptions } from "@openuidev/react-lang";
    
    export const library = createLibrary({ components: [...] });
    
    export const promptOptions: PromptOptions = {
      preamble: "You are a dashboard builder...",
      additionalRules: ["Always use compact variants for table cells."],
    };

    openui generate ./src/library.ts --out src/generated/system-prompt.txt

[See also](https://www.openui.com/docs/api-reference/cli#see-also)

-------------------------------------------------------------------

[### Quick Start\
\
Scaffold and run a new OpenUI chat app with `openui create` in under 5 minutes.](https://www.openui.com/docs/chat/quick-start)
[### @openuidev/react-lang\
\
`createLibrary`, `PromptOptions`, and the `Library` interface that `openui generate` reads.](https://www.openui.com/docs/api-reference/react-lang)

[@openuidev/react-email\
\
API reference for the pre-built email templates library and prompt options.](https://www.openui.com/docs/api-reference/react-email)

### On this page

[Installation](https://www.openui.com/docs/api-reference/cli#installation)
[`openui create`](https://www.openui.com/docs/api-reference/cli#openui-create)
[`openui generate`](https://www.openui.com/docs/api-reference/cli#openui-generate)
[Export auto-detection](https://www.openui.com/docs/api-reference/cli#export-auto-detection)
[`PromptOptions` type](https://www.openui.com/docs/api-reference/cli#promptoptions-type)
[See also](https://www.openui.com/docs/api-reference/cli#see-also)

---

# Quick Start | OpenUI - The Open Standard for Generative UI

Quick Start
===========

Get a working chat UI running in under 5 minutes.

Copy MarkdownOpen

This page shows the scaffolded setup for getting a working chat app running quickly.

If you already have an existing Next.js app, use [Installation](https://www.openui.com/docs/chat/installation)
 or the [End-to-End Guide](https://www.openui.com/docs/chat/from-scratch)
 instead.

[1\. Create your app](https://www.openui.com/docs/chat/quick-start#1-create-your-app)

--------------------------------------------------------------------------------------

Run the create command. This scaffolds a Next.js app with OpenUI Chat already wired to an OpenAI-backed route.

npxpnpmyarnbun

`bash npx @openuidev/cli@latest create cd genui-chat-app`

`bash pnpm dlx @openuidev/cli@latest create cd genui-chat-app`

`bash yarn dlx @openuidev/cli@latest create cd genui-chat-app`

`bash bunx @openuidev/cli@latest create cd genui-chat-app`

[2\. Add your API key](https://www.openui.com/docs/chat/quick-start#2-add-your-api-key)

----------------------------------------------------------------------------------------

Create a `.env.local` file in the project root:

    OPENAI_API_KEY=sk-your-key-here

[3\. Start the dev server](https://www.openui.com/docs/chat/quick-start#3-start-the-dev-server)

------------------------------------------------------------------------------------------------

npxpnpmyarnbun

`bash npm run dev`

`bash pnpm dev`

`bash yarn dev`

`bash bun dev`

Open [http://localhost:3000](http://localhost:3000/)
 in your browser. You should see the default **FullScreen** chat. Try sending a message.

You should see a full-page chat experience with streaming responses enabled.

[What you just built](https://www.openui.com/docs/chat/quick-start#what-you-just-built)

----------------------------------------------------------------------------------------

The scaffold generates both the frontend and backend for you.

You do not need to recreate these files during quick start. This section is here so you know what the scaffold already configured.

### [The Frontend (`app/page.tsx`)](https://www.openui.com/docs/chat/quick-start#the-frontend-apppagetsx)

**The** frontend renders `FullScreen`, sends requests with `processMessage`, converts messages explicitly with `openAIMessageFormat.toApi(messages)`, and parses the OpenAI SDK readable stream correctly.

    import { openAIMessageFormat, openAIReadableStreamAdapter } from "@openuidev/react-headless";
    import { FullScreen } from "@openuidev/react-ui";
    import { openuiLibrary } from "@openuidev/react-ui/genui-lib";
    
    export default function Page() {
      return (
        <FullScreen
          processMessage={async ({ messages, abortController }) => {
            return fetch("/api/chat", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                messages: openAIMessageFormat.toApi(messages),
              }),
              signal: abortController.signal,
            });
          }}
          streamProtocol={openAIReadableStreamAdapter()}
          componentLibrary={openuiLibrary}
          agentName="OpenUI Chat"
        />
      );
    }

### [The Backend (`app/api/chat/route.ts`)](https://www.openui.com/docs/chat/quick-start#the-backend-appapichatroutets)

The scaffold also creates a Next.js route handler at `app/api/chat/route.ts`.

That route:

*   loads the system prompt generated by the CLI at build time
*   receives OpenAI-format messages
*   prepends the system prompt
*   calls OpenAI Chat Completions with streaming enabled
*   returns `response.toReadableStream()`

The scaffold includes a prebuild step (`openui generate`) that creates the system prompt from your component library. This keeps the prompt on the server — it is never sent from the frontend.

[Next steps](https://www.openui.com/docs/chat/quick-start#next-steps)

----------------------------------------------------------------------

Now that the app is running, choose the next path based on what you want to change.

[### End-to-End Guide\
\
Recreate the same flow in your own existing app.](https://www.openui.com/docs/chat/from-scratch)
[### Understand GenUI\
\
Learn how the component library and system prompt work together.](https://www.openui.com/docs/chat/genui)
[### Go Headless\
\
Build your own UI with `ChatProvider` and hooks.](https://www.openui.com/docs/chat/headless-intro)

[Chat\
\
Production-ready chat UI for AI agents. Drop-in layouts, streaming from any LLM provider, and Generative UI — all in a few lines of code.](https://www.openui.com/docs/chat)
[Installation\
\
Add OpenUI Chat to an existing Next.js App Router application.](https://www.openui.com/docs/chat/installation)

### On this page

[1\. Create your app](https://www.openui.com/docs/chat/quick-start#1-create-your-app)
[2\. Add your API key](https://www.openui.com/docs/chat/quick-start#2-add-your-api-key)
[3\. Start the dev server](https://www.openui.com/docs/chat/quick-start#3-start-the-dev-server)
[What you just built](https://www.openui.com/docs/chat/quick-start#what-you-just-built)
[The Frontend (`app/page.tsx`)](https://www.openui.com/docs/chat/quick-start#the-frontend-apppagetsx)
[The Backend (`app/api/chat/route.ts`)](https://www.openui.com/docs/chat/quick-start#the-backend-appapichatroutets)
[Next steps](https://www.openui.com/docs/chat/quick-start#next-steps)

---

# OpenUI Chat SDK | OpenUI - The Open Standard for Generative UI

OpenUI Chat SDK
===============

Production-ready chat UI for AI agents. Start with prebuilt layouts for fast integration, then drop down to headless hooks when you need full control over behavior and rendering.

[Installation](https://www.openui.com/docs/chat/installation)
[Explore Layouts](https://www.openui.com/docs/chat/copilot)

* * *

Batteries-Included Layouts
--------------------------

Choose the surface that matches your product and customize from there.

[### Copilot\
\
A sidebar assistant that lives alongside your main application content.](https://www.openui.com/docs/chat/copilot)
[### Full Screen\
\
A standalone, immersive chat page similar to ChatGPT or Claude.](https://www.openui.com/docs/chat/fullscreen)
[### Bottom Tray\
\
A floating support-style widget that expands from the bottom corner.](https://www.openui.com/docs/chat/bottom-tray)

* * *

Core Capabilities
-----------------

The SDK handles the stateful parts so you can focus on UX, product logic, and polish.

### Streaming Native

Handles text deltas, optimistic updates, loading states, and partial responses.

### Thread Persistence

Save and restore conversation history with straightforward API contracts.

### Composable State

Use the same primitives across prebuilt layouts and fully custom chat surfaces.

Go Headless
-----------

Use the same chat primitives without the prebuilt layouts when you need a fully custom surface.

The \`useChat\` hook gives you message state, append helpers, and loading semantics without locking you into a specific UI.

CustomChat.tsxCopy

    import { useChat } from '@openuidev/react';
    
    function CustomChat() {
      const { messages, append, isLoading } = useChat();
    
      return (
        <div>
          {messages.map(m => (
            <div key={m.id}>
              {m.content}
            </div>
          ))}
    
          <input
            onChange={e => append(e.target.value)}
          />
        </div>
      );
    }

[Read the Headless Guide](https://www.openui.com/docs/chat/headless-intro)

---

# Installation | OpenUI - The Open Standard for Generative UI

Installation
============

Add OpenUI Chat to an existing Next.js App Router application.

Copy MarkdownOpen

This page covers package installation, style imports, and a basic render check for an existing Next.js App Router app.

**Starting a new project?** Skip this guide and use our scaffold command instead: `npx @openuidev/cli@latest create --name my-app`

[Prerequisites](https://www.openui.com/docs/chat/installation#prerequisites)

-----------------------------------------------------------------------------

This guide assumes:

*   Next.js App Router
*   React 18 or newer
*   a page where you can mount a chat layout

[1\. Install dependencies](https://www.openui.com/docs/chat/installation#1-install-dependencies)

-------------------------------------------------------------------------------------------------

Install the UI package, the headless core, and the icons package used by the built-in layouts.

npmpnpmyarnbun

`bash npm install @openuidev/react-ui @openuidev/react-headless lucide-react`

`bash pnpm add @openuidev/react-ui @openuidev/react-headless lucide-react`

`bash yarn add @openuidev/react-ui @openuidev/react-headless lucide-react`

`bash bun add @openuidev/react-ui @openuidev/react-headless lucide-react`

[2\. Import the styles](https://www.openui.com/docs/chat/installation#2-import-the-styles)

-------------------------------------------------------------------------------------------

Import the component and theme styles in your root layout.

    import "@openuidev/react-ui/components.css";
    import "@openuidev/react-ui/styles/index.css";
    import "./globals.css";
    
    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <body>{children}</body>
        </html>
      );
    }

These imports give you the default chat layout styling and theme tokens.

[3\. Render a layout to verify setup](https://www.openui.com/docs/chat/installation#3-render-a-layout-to-verify-setup)

-----------------------------------------------------------------------------------------------------------------------

Render one of the built-in layouts on a page to confirm the package is installed correctly.

    // app/page.tsx
    import { FullScreen } from "@openuidev/react-ui";
    
    export default function Page() {
      return (
        <div className="h-screen">
          <FullScreen apiUrl="/api/chat" agentName="Assistant" />
        </div>
      );
    }

At this stage, the page should render the layout shell. It will not send working chat requests until you add a backend.

![Expected baseline render after styles are imported](https://www.openui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffullscreen.be1ca51f.png&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

[Related guides](https://www.openui.com/docs/chat/installation#related-guides)

-------------------------------------------------------------------------------

[### End-to-End Guide\
\
Add the backend route, message conversion, stream adapter, and optional persistence.](https://www.openui.com/docs/chat/from-scratch)
[### Explore Layouts\
\
Compare the built-in layouts and choose the one you want to ship.](https://www.openui.com/docs/chat/fullscreen)
[### Quick Start\
\
Prefer a generated app instead of wiring everything manually.](https://www.openui.com/docs/chat/quick-start)

[Quick Start\
\
Get a working chat UI running in under 5 minutes.](https://www.openui.com/docs/chat/quick-start)
[GenUI\
\
Use Generative UI with Chat components.](https://www.openui.com/docs/chat/genui)

### On this page

[Prerequisites](https://www.openui.com/docs/chat/installation#prerequisites)
[1\. Install dependencies](https://www.openui.com/docs/chat/installation#1-install-dependencies)
[2\. Import the styles](https://www.openui.com/docs/chat/installation#2-import-the-styles)
[3\. Render a layout to verify setup](https://www.openui.com/docs/chat/installation#3-render-a-layout-to-verify-setup)
[Related guides](https://www.openui.com/docs/chat/installation#related-guides)

---

# @openuidev/react-email | OpenUI - The Open Standard for Generative UI

@openuidev/react-email
======================

API reference for the pre-built email templates library and prompt options.

Copy MarkdownOpen

Use this package for LLM-driven email template generation with 44 email building blocks.

[Install](https://www.openui.com/docs/api-reference/react-email#install)

-------------------------------------------------------------------------

npm

pnpm

    npm install @openuidev/react-email @openuidev/react-lang @react-email/render

[`emailLibrary`](https://www.openui.com/docs/api-reference/react-email#emaillibrary)

-------------------------------------------------------------------------------------

Pre-configured `Library` instance with all 44 email components registered. Root component is `EmailTemplate`.

Use `emailLibrary.prompt()` to generate a system prompt for your LLM:

    import { emailLibrary, emailPromptOptions } from "@openuidev/react-email";
    
    // With examples and rules (recommended)
    const systemPrompt = emailLibrary.prompt(emailPromptOptions);
    
    // Without — schema only, no examples or rules
    const minimalPrompt = emailLibrary.prompt();

[`emailPromptOptions`](https://www.openui.com/docs/api-reference/react-email#emailpromptoptions)

-------------------------------------------------------------------------------------------------

Pre-built `PromptOptions` containing 10 complete email template examples and 30+ rules for high-quality email generation. Passing it to `emailLibrary.prompt()` includes these in the system prompt. Without it, the prompt contains only the component schema.

[Generating HTML](https://www.openui.com/docs/api-reference/react-email#generating-html)

-----------------------------------------------------------------------------------------

Convert the rendered output to an email-safe HTML string with [`@react-email/render`](https://www.npmjs.com/package/@react-email/render)
:

    import { Renderer } from "@openuidev/react-lang";
    import { emailLibrary } from "@openuidev/react-email";
    import { render } from "@react-email/render";
    
    const html = await render(
      <Renderer response={llmResponse} library={emailLibrary} isStreaming={false} />,
      { pretty: true },
    );

[Exports](https://www.openui.com/docs/api-reference/react-email#exports)

-------------------------------------------------------------------------

| Export | Type | Description |
| --- | --- | --- |
| `emailLibrary` | `Library` | Ready-to-use library with all 44 email components |
| `emailPromptOptions` | `PromptOptions` | Examples + rules for `emailLibrary.prompt()` |

[@openuidev/react-ui\
\
API reference for prebuilt chat layouts and default component library exports.](https://www.openui.com/docs/api-reference/react-ui)
[@openuidev/cli\
\
API reference for the OpenUI CLI to scaffold apps and generate system prompts.](https://www.openui.com/docs/api-reference/cli)

### On this page

[Install](https://www.openui.com/docs/api-reference/react-email#install)
[`emailLibrary`](https://www.openui.com/docs/api-reference/react-email#emaillibrary)
[`emailPromptOptions`](https://www.openui.com/docs/api-reference/react-email#emailpromptoptions)
[Generating HTML](https://www.openui.com/docs/api-reference/react-email#generating-html)
[Exports](https://www.openui.com/docs/api-reference/react-email#exports)

---

# AI-Assisted Development | OpenUI - The Open Standard for Generative UI

AI-Assisted Development
=======================

Connect OpenUI documentation to your AI coding tools via MCP, agent skills, or LLM-friendly doc formats.

Copy MarkdownOpen

[MCP Server](https://www.openui.com/docs/mcp#mcp-server)

---------------------------------------------------------

OpenUI docs are available through [Context7](https://context7.com/)
, which provides a Model Context Protocol (MCP) server that AI coding tools can query directly.

Add `use context7` to any prompt, or reference the library explicitly:

    use library /thesysdev/openui

### [Quick setup](https://www.openui.com/docs/mcp#quick-setup)

The fastest way to get started — authenticates via OAuth, generates an API key, and installs the appropriate skill:

    npx ctx7 setup

Use `--cursor`, `--claude`, or `--opencode` to target a specific agent.

### [Manual setup](https://www.openui.com/docs/mcp#manual-setup)

For manual installation instructions for 30+ clients (Cursor, VS Code, Claude Desktop, Windsurf, ChatGPT, Lovable, Replit, JetBrains, and more), see the [Context7 MCP Clients](https://context7.com/docs/resources/all-clients)
 page.

[Agent Skill](https://www.openui.com/docs/mcp#agent-skill)

-----------------------------------------------------------

OpenUI ships an [Agent Skill](https://agentskills.io/)
 that teaches AI coding assistants how to build Generative UI apps with OpenUI Lang. Once installed, your AI assistant can scaffold projects, define components, generate system prompts, wire up the `Renderer`, and debug malformed LLM output.

Works with Claude Code, Cursor, GitHub Copilot, Codex, and any agent that supports the [agentskills.io](https://agentskills.io/)
 standard.

### [Install via the skills CLI (recommended)](https://www.openui.com/docs/mcp#install-via-the-skills-cli-recommended)

    npx skills add thesysdev/openui --skill openui

### [Manual copy](https://www.openui.com/docs/mcp#manual-copy)

If you already have the OpenUI repo cloned:

    mkdir -p .claude/skills
    cp -r /path/to/openui/skills/openui .claude/skills/openui

### [What the skill covers](https://www.openui.com/docs/mcp#what-the-skill-covers)

| Area | Details |
| --- | --- |
| Component design | `defineComponent`, `createLibrary`, `.ref` composition, schema ordering |
| OpenUI Lang syntax | Expression types, positional args, forward references, streaming rules |
| System prompts | `library.prompt()`, `preamble`, `additionalRules`, `examples`, CLI generation |
| Rendering | `<Renderer />`, progressive rendering, `onAction`, `onParseResult` |
| SDK packages | `react-lang`, `react-headless`, `react-ui` — when to use each |
| Debugging | Diagnosing malformed output, validation errors, unresolved forward refs |

[LLM-friendly docs](https://www.openui.com/docs/mcp#llm-friendly-docs)

-----------------------------------------------------------------------

For tools that support `llms.txt`, or if you want to load docs directly into context:

*   [`/llms.txt`](https://www.openui.com/llms.txt)
     — index of all doc pages
*   [`/llms-full.txt`](https://www.openui.com/llms-full.txt)
     — full documentation in a single file

### On this page

[MCP Server](https://www.openui.com/docs/mcp#mcp-server)
[Quick setup](https://www.openui.com/docs/mcp#quick-setup)
[Manual setup](https://www.openui.com/docs/mcp#manual-setup)
[Agent Skill](https://www.openui.com/docs/mcp#agent-skill)
[Install via the skills CLI (recommended)](https://www.openui.com/docs/mcp#install-via-the-skills-cli-recommended)
[Manual copy](https://www.openui.com/docs/mcp#manual-copy)
[What the skill covers](https://www.openui.com/docs/mcp#what-the-skill-covers)
[LLM-friendly docs](https://www.openui.com/docs/mcp#llm-friendly-docs)

---

# OpenUI SDK | OpenUI - The Open Standard for Generative UI

OpenUI SDK
==========

API reference for the documented surfaces of @openuidev/react-lang, @openuidev/react-headless, @openuidev/react-ui, and @openuidev/react-email.

Copy MarkdownOpen

The OpenUI SDK is split into packages that build on each other:

*   **`@openuidev/react-lang`** — Core runtime. Define component libraries with Zod schemas, generate system prompts, parse OpenUI Lang, and render streamed output to React. This is the foundation — you need it for any OpenUI integration.
    
*   **`@openuidev/react-headless`** — Headless chat state management. Provides `ChatProvider`, thread/message hooks, streaming protocol adapters (OpenAI, AG-UI), and message format converters. Use this when you want full control over your chat UI.
    
*   **`@openuidev/react-ui`** — Prebuilt chat layouts (`Copilot`, `FullScreen`, `BottomTray`) and two ready-to-use component libraries (general-purpose and chat-optimized). Depends on both packages above. Use this for the fastest path to a working chat interface.
    
*   **`@openuidev/react-email`** — API reference for the pre-built email templates library and prompt options.
    
*   **`@openuidev/cli`** — Command-line tool for scaffolding new OpenUI chat apps and generating system prompts or JSON schemas from library definitions.
    

[Packages](https://www.openui.com/docs/api-reference#packages)

---------------------------------------------------------------

[### @openuidev/react-lang\
\
defineComponent, createLibrary, Renderer, parser APIs, action types, context hooks, and form validation.](https://www.openui.com/docs/api-reference/react-lang)
[### @openuidev/react-headless\
\
ChatProvider, useThread/useThreadList, stream protocol adapters (OpenAI, AG-UI), and message format converters.](https://www.openui.com/docs/api-reference/react-headless)
[### @openuidev/react-ui\
\
Copilot, FullScreen, BottomTray chat layouts, and two built-in component libraries (general-purpose and chat-optimized).](https://www.openui.com/docs/api-reference/react-ui)
[### @openuidev/react-email\
\
API reference for the pre-built email templates library and prompt options.](https://www.openui.com/docs/api-reference/react-email)
[### @openuidev/cli\
\
openui create (scaffold a Next.js app) and openui generate (system prompt / JSON schema from a library definition).](https://www.openui.com/docs/api-reference/cli)

[@openuidev/react-lang\
\
API reference for the OpenUI Lang runtime, library, parser, and renderer.](https://www.openui.com/docs/api-reference/react-lang)

### On this page

[Packages](https://www.openui.com/docs/api-reference#packages)

---

# @openuidev/react-headless | OpenUI - The Open Standard for Generative UI

@openuidev/react-headless
=========================

API reference for chat state, hooks, streaming adapters, and message types.

Copy MarkdownOpen

Use this package when you want headless chat state + streaming, with or without prebuilt UI.

[Import](https://www.openui.com/docs/api-reference/react-headless#import)

--------------------------------------------------------------------------

    import {
      ChatProvider,
      useThread,
      useThreadList,
      openAIAdapter,
      openAIResponsesAdapter,
      openAIReadableStreamAdapter,
      agUIAdapter,
      openAIMessageFormat,
      openAIConversationMessageFormat,
      identityMessageFormat,
      processStreamedMessage,
      MessageProvider,
      useMessage,
      EventType,
    } from "@openuidev/react-headless";

[`ChatProvider`](https://www.openui.com/docs/api-reference/react-headless#chatprovider)

----------------------------------------------------------------------------------------

Provides chat/thread state to UI components.

    type ChatProviderProps = ThreadApiConfig &
      ChatApiConfig & {
        streamProtocol?: StreamProtocolAdapter;
        messageFormat?: MessageFormat;
        children: React.ReactNode;
      };

`ThreadApiConfig`:

*   Provide `threadApiUrl`, **or**
*   Provide custom handlers: `fetchThreadList`, `createThread`, `deleteThread`, `updateThread`, `loadThread`

`ChatApiConfig`:

*   Provide `apiUrl`, **or**
*   Provide `processMessage({ threadId, messages, abortController })`

[`useThread()`](https://www.openui.com/docs/api-reference/react-headless#usethread)

------------------------------------------------------------------------------------

Thread-level state/actions used throughout chat docs.

    function useThread(): ThreadState & ThreadActions;
    function useThread<T>(selector: (state: ThreadState & ThreadActions) => T): T;

Shape:

    type ThreadState = {
      messages: Message[];
      isRunning: boolean;
      isLoadingMessages: boolean;
      threadError: Error | null;
    };
    
    type ThreadActions = {
      processMessage: (message: CreateMessage) => Promise<void>;
      appendMessages: (...messages: Message[]) => void;
      updateMessage: (message: Message) => void;
      setMessages: (messages: Message[]) => void;
      deleteMessage: (messageId: string) => void;
      cancelMessage: () => void;
    };

[`useThreadList()`](https://www.openui.com/docs/api-reference/react-headless#usethreadlist)

--------------------------------------------------------------------------------------------

Thread list state/actions for sidebars and history.

    function useThreadList(): ThreadListState & ThreadListActions;
    function useThreadList<T>(selector: (state: ThreadListState & ThreadListActions) => T): T;

[`useMessage()`](https://www.openui.com/docs/api-reference/react-headless#usemessage)

--------------------------------------------------------------------------------------

Access the current message inside a message component.

    function useMessage(): Message;

Provided via `MessageProvider` / `MessageContext`.

[Stream adapters](https://www.openui.com/docs/api-reference/react-headless#stream-adapters)

--------------------------------------------------------------------------------------------

Adapters referenced in integration guides:

    function openAIAdapter(): StreamProtocolAdapter; // OpenAI Chat Completions stream
    function openAIResponsesAdapter(): StreamProtocolAdapter; // OpenAI Responses stream
    function openAIReadableStreamAdapter(): StreamProtocolAdapter; // OpenAI ReadableStream
    function agUIAdapter(): StreamProtocolAdapter; // AG-UI protocol stream

Related type:

    interface StreamProtocolAdapter {
      parse(response: Response): AsyncIterable<AGUIEvent>;
    }

[Message format adapters](https://www.openui.com/docs/api-reference/react-headless#message-format-adapters)

------------------------------------------------------------------------------------------------------------

Converters referenced in integration guides:

    const openAIMessageFormat: MessageFormat; // Chat Completions format
    const openAIConversationMessageFormat: MessageFormat; // Responses/Conversations item format
    const identityMessageFormat: MessageFormat; // Pass-through (no conversion)

Base type:

    interface MessageFormat {
      toApi(messages: Message[]): unknown;
      fromApi(data: unknown): Message[];
    }

[Message types](https://www.openui.com/docs/api-reference/react-headless#message-types)

----------------------------------------------------------------------------------------

    type Message =
      | UserMessage
      | AssistantMessage
      | SystemMessage
      | DeveloperMessage
      | ToolMessage
      | ActivityMessage
      | ReasoningMessage;

Key message shapes:

    interface UserMessage {
      role: "user";
      id: string;
      content: InputContent[];
    }
    
    interface AssistantMessage {
      role: "assistant";
      id: string;
      content: string | null;
      toolCalls?: ToolCall[];
    }

[Streaming utilities](https://www.openui.com/docs/api-reference/react-headless#streaming-utilities)

----------------------------------------------------------------------------------------------------

    function processStreamedMessage(/* ... */): Promise<void>;

Low-level utility for processing a streamed response outside of `ChatProvider`.

[@openuidev/react-lang\
\
API reference for the OpenUI Lang runtime, library, parser, and renderer.](https://www.openui.com/docs/api-reference/react-lang)
[@openuidev/react-ui\
\
API reference for prebuilt chat layouts and default component library exports.](https://www.openui.com/docs/api-reference/react-ui)

### On this page

[Import](https://www.openui.com/docs/api-reference/react-headless#import)
[`ChatProvider`](https://www.openui.com/docs/api-reference/react-headless#chatprovider)
[`useThread()`](https://www.openui.com/docs/api-reference/react-headless#usethread)
[`useThreadList()`](https://www.openui.com/docs/api-reference/react-headless#usethreadlist)
[`useMessage()`](https://www.openui.com/docs/api-reference/react-headless#usemessage)
[Stream adapters](https://www.openui.com/docs/api-reference/react-headless#stream-adapters)
[Message format adapters](https://www.openui.com/docs/api-reference/react-headless#message-format-adapters)
[Message types](https://www.openui.com/docs/api-reference/react-headless#message-types)
[Streaming utilities](https://www.openui.com/docs/api-reference/react-headless#streaming-utilities)

---

# @openuidev/react-ui | OpenUI - The Open Standard for Generative UI

@openuidev/react-ui
===================

API reference for prebuilt chat layouts and default component library exports.

Copy MarkdownOpen

Use this package for prebuilt chat UIs and default component library primitives.

[Import](https://www.openui.com/docs/api-reference/react-ui#import)

--------------------------------------------------------------------

    import { Copilot, FullScreen, BottomTray } from "@openuidev/react-ui";

[Layout components](https://www.openui.com/docs/api-reference/react-ui#layout-components)

------------------------------------------------------------------------------------------

These layouts are documented in Chat UI guides and are all wrapped with `ChatProvider`.

### [`Copilot`](https://www.openui.com/docs/api-reference/react-ui#copilot)

Sidebar chat layout.

    type CopilotProps = ChatLayoutProps;

### [`FullScreen`](https://www.openui.com/docs/api-reference/react-ui#fullscreen)

Full-page chat layout with thread sidebar.

    type FullScreenProps = ChatLayoutProps;

### [`BottomTray`](https://www.openui.com/docs/api-reference/react-ui#bottomtray)

Floating/collapsible tray layout.

    type BottomTrayProps = ChatLayoutProps & {
      isOpen?: boolean;
      onOpenChange?: (isOpen: boolean) => void;
      defaultOpen?: boolean;
    };

[Shared layout props (`ChatLayoutProps`)](https://www.openui.com/docs/api-reference/react-ui#shared-layout-props-chatlayoutprops)

----------------------------------------------------------------------------------------------------------------------------------

All three layouts accept:

*   Chat provider props: `apiUrl`/`processMessage`, thread APIs, `streamProtocol`, `messageFormat`
*   Shared UI props:
    *   `logoUrl?: string`
    *   `agentName?: string`
    *   `messageLoading?: React.ComponentType`
    *   `scrollVariant?: ScrollVariant`
    *   `isArtifactActive?: boolean`
    *   `renderArtifact?: () => React.ReactNode`
    *   `welcomeMessage?: WelcomeMessageConfig`
    *   `conversationStarters?: ConversationStartersConfig`
    *   `assistantMessage?: AssistantMessageComponent`
    *   `userMessage?: UserMessageComponent`
    *   `composer?: ComposerComponent`
    *   `componentLibrary?: Library` (from `@openuidev/react-lang`)
*   Theme wrapper props:
    *   `theme?: ThemeProps`
    *   `disableThemeProvider?: boolean`

[UI customization types](https://www.openui.com/docs/api-reference/react-ui#ui-customization-types)

----------------------------------------------------------------------------------------------------

Types used by customization docs:

    type AssistantMessageComponent = React.ComponentType<{ message: AssistantMessage }>;
    type UserMessageComponent = React.ComponentType<{ message: UserMessage }>;
    
    type ComposerProps = {
      onSend: (message: string) => void;
      onCancel: () => void;
      isRunning: boolean;
      isLoadingMessages: boolean;
    };
    type ComposerComponent = React.ComponentType<ComposerProps>;
    
    type WelcomeMessageConfig =
      | React.ComponentType<any>
      | {
          title?: string;
          description?: string;
          image?: { url: string } | React.ReactNode;
        };
    
    interface ConversationStartersConfig {
      variant?: "short" | "long";
      options: ConversationStarterProps[];
    }

[Component library exports](https://www.openui.com/docs/api-reference/react-ui#component-library-exports)

----------------------------------------------------------------------------------------------------------

Two ready-to-use libraries ship with `@openuidev/react-ui`. Import from the `genui-lib` subpath:

    import {
      // Chat-optimised (root = Card, includes FollowUpBlock, ListBlock, SectionBlock)
      openuiChatLibrary,
      openuiChatPromptOptions,
      openuiChatExamples,
      openuiChatAdditionalRules,
      openuiChatComponentGroups,
    
      // General-purpose (root = Stack, full component suite)
      openuiLibrary,
      openuiPromptOptions,
      openuiExamples,
      openuiAdditionalRules,
      openuiComponentGroups,
    } from "@openuidev/react-ui/genui-lib";

**`openuiChatLibrary`** — Root is `Card` (vertical, no layout params). Includes chat-specific components: `FollowUpBlock`, `ListBlock`, `SectionBlock`. Does not include `Stack`. Use with `FullScreen` / `BottomTray` / `Copilot` chat interfaces.

**`openuiLibrary`** — Root is `Stack`. Full layout suite with `Stack`, `Tabs`, `Carousel`, `Accordion`, `Modal`, etc. Use with the standalone `Renderer` or any non-chat layout (e.g., playground, embedded widgets, dashboards).

**`openuiPromptOptions`** — includes examples and additional rules for the general-purpose library. Does not include `toolExamples` — pass those in your app-level `PromptSpec` alongside tool descriptions.

Generate the system prompt at build time with the CLI:

    npx @openuidev/cli@latest generate ./src/library.ts --out src/generated/system-prompt.txt

    // Chat interface — system prompt stays on the server
    <FullScreen componentLibrary={openuiChatLibrary} ... />
    
    // Standalone renderer
    <Renderer response={message} library={openuiLibrary} />

[@openuidev/react-headless\
\
API reference for chat state, hooks, streaming adapters, and message types.](https://www.openui.com/docs/api-reference/react-headless)
[@openuidev/react-email\
\
API reference for the pre-built email templates library and prompt options.](https://www.openui.com/docs/api-reference/react-email)

### On this page

[Import](https://www.openui.com/docs/api-reference/react-ui#import)
[Layout components](https://www.openui.com/docs/api-reference/react-ui#layout-components)
[`Copilot`](https://www.openui.com/docs/api-reference/react-ui#copilot)
[`FullScreen`](https://www.openui.com/docs/api-reference/react-ui#fullscreen)
[`BottomTray`](https://www.openui.com/docs/api-reference/react-ui#bottomtray)
[Shared layout props (`ChatLayoutProps`)](https://www.openui.com/docs/api-reference/react-ui#shared-layout-props-chatlayoutprops)
[UI customization types](https://www.openui.com/docs/api-reference/react-ui#ui-customization-types)
[Component library exports](https://www.openui.com/docs/api-reference/react-ui#component-library-exports)

---

# Benchmarks | OpenUI - The Open Standard for Generative UI

Benchmarks
==========

Token efficiency and latency comparison of OpenUI Lang vs YAML, Vercel JSON-Render, and Thesys C1 JSON.

Copy MarkdownOpen

OpenUI Lang is designed to be token-efficient and streaming-first. This page presents a reproducible benchmark comparing it against three structured alternatives across seven real-world UI scenarios: YAML, Vercel JSON-Render, and Thesys C1 JSON.

[Formats Compared](https://www.openui.com/docs/openui-lang/benchmarks#formats-compared)

----------------------------------------------------------------------------------------

| Format | Description |
| --- | --- |
| **OpenUI Lang** | Line-oriented DSL streamed directly by the LLM |
| **YAML** | YAML `root` / `elements` spec payload |
| **Vercel JSON-Render** | JSONL stream of [JSON Patch (RFC 6902)](https://jsonpatch.com/)<br> operations |
| **Thesys C1 JSON** | Normalized component tree JSON (`component` + `props`) |

### [Same output, different representations](https://www.openui.com/docs/openui-lang/benchmarks#same-output-different-representations)

All four formats encode exactly the same UI. Here is the same simple table in each:

**OpenUI Lang** (148 tokens)

    root = Stack([title, tbl])
    title = TextContent("Employees (Sample)", "large-heavy")
    tbl = Table(cols, rows)
    cols = [Col("Name", "string"), Col("Department", "string"), Col("Salary", "number"), Col("YoY change (%)", "number")]
    rows = [["Ava Patel", "Engineering", 132000, 6.5], ["Marcus Lee", "Sales", 98000, 4.2], ["Sofia Ramirez", "Marketing", 105000, 3.1], ["Ethan Brooks", "Finance", 118500, 5.0], ["Nina Chen", "HR", 89000, 2.4]]

**YAML** (316 tokens)

    root: stack-1
    elements:
      textcontent-2:
        type: TextContent
        props:
          text: Employees (Sample)
          size: large-heavy
      table-3:
        type: Table
        props:
          rows:
            - [...]
        children:
          - col-4
          - col-5
          - col-6
          - col-7
      stack-1:
        type: Stack
        props: {}
        children:
          - textcontent-2
          - table-3

**Vercel JSON-Render** (340 tokens)

    {"op":"add","path":"/root","value":"stack-1"}
    {"op":"add","path":"/elements/textcontent-2","value":{"type":"TextContent","props":{"text":"Employees (Sample)","size":"large-heavy"},"children":[]}}
    {"op":"add","path":"/elements/col-4","value":{"type":"Col","props":{"label":"Name","type":"string"},"children":[]}}
    {"op":"add","path":"/elements/col-5","value":{"type":"Col","props":{"label":"Department","type":"string"},"children":[]}}
    {"op":"add","path":"/elements/col-6","value":{"type":"Col","props":{"label":"Salary","type":"number"},"children":[]}}
    {"op":"add","path":"/elements/col-7","value":{"type":"Col","props":{"label":"YoY change (%)","type":"number"},"children":[]}}
    {"op":"add","path":"/elements/table-3","value":{"type":"Table","props":{"rows":[...]},"children":["col-4","col-5","col-6","col-7"]}}
    {"op":"add","path":"/elements/stack-1","value":{"type":"Stack","props":{},"children":["textcontent-2","table-3"]}}

**Thesys C1 JSON** (357 tokens)

    {
      "component": {
        "component": "Stack",
        "props": {
          "children": [\
            { "component": "TextContent", "props": { "text": "Employees (Sample)", "size": "large-heavy" } },\
            { "component": "Table", "props": { "columns": [...], "rows": [...] } }\
          ]
        }
      },
      "error": null
    }

* * *

[Token Count Results](https://www.openui.com/docs/openui-lang/benchmarks#token-count-results)

----------------------------------------------------------------------------------------------

Generated by GPT-5.2 at temperature 0. Token counts measured with `tiktoken` using the `gpt-5` model encoder.

| Scenario | YAML | Vercel JSON-Render | Thesys C1 JSON | OpenUI Lang | vs YAML | vs Vercel | vs C1 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| simple-table | 316 | 340 | 357 | 148 | \-53.2% | \-56.5% | \-58.5% |
| chart-with-data | 464 | 520 | 516 | 231 | \-50.2% | \-55.6% | \-55.2% |
| contact-form | 762 | 893 | 849 | 294 | \-61.4% | \-67.1% | \-65.4% |
| dashboard | 2,128 | 2,247 | 2,261 | 1,226 | \-42.4% | \-45.4% | \-45.8% |
| pricing-page | 2,230 | 2,487 | 2,379 | 1,195 | \-46.4% | \-52.0% | \-49.8% |
| settings-panel | 1,077 | 1,244 | 1,205 | 540 | \-49.9% | \-56.6% | \-55.2% |
| e-commerce-product | 2,145 | 2,449 | 2,381 | 1,166 | \-45.6% | \-52.4% | \-51.0% |
| **TOTAL** | **9,122** | **10,180** | **9,948** | **4,800** | **\-47.4%** | **\-52.8%** | **\-51.7%** |

OpenUI Lang uses up to **61.4% fewer tokens** than YAML, **67.1% fewer** than Vercel JSON-Render, and **65.4% fewer** than Thesys C1 JSON.

* * *

[Estimated Latency](https://www.openui.com/docs/openui-lang/benchmarks#estimated-latency)

------------------------------------------------------------------------------------------

Latency scales linearly with output token count at a given generation speed. At **60 tokens/second** (typical for hosted frontier models):

| Scenario | YAML | Vercel JSON-Render | Thesys C1 JSON | OpenUI Lang | Speedup vs YAML | Speedup vs Vercel |
| --- | --- | --- | --- | --- | --- | --- |
| simple-table | 5.27s | 5.67s | 5.95s | 2.47s | **2.14x faster** | **2.30x faster** |
| chart-with-data | 7.73s | 8.67s | 8.60s | 3.85s | **2.01x faster** | **2.25x faster** |
| contact-form | 12.70s | 14.88s | 14.15s | 4.90s | **2.59x faster** | **3.04x faster** |
| dashboard | 35.47s | 37.45s | 37.68s | 20.43s | **1.74x faster** | **1.83x faster** |
| pricing-page | 37.17s | 41.45s | 39.65s | 19.92s | **1.87x faster** | **2.08x faster** |
| settings-panel | 17.95s | 20.73s | 20.08s | 9.00s | **1.99x faster** | **2.30x faster** |
| e-commerce-product | 35.75s | 40.82s | 39.68s | 19.43s | **1.84x faster** | **2.10x faster** |

The latency advantage compounds with UI complexity. A contact form renders **up to 3.0× faster**, and even complex dashboards and pricing pages — the kinds of UIs where Generative UI delivers the most value — render **2–3× faster** with OpenUI Lang.

* * *

[Methodology](https://www.openui.com/docs/openui-lang/benchmarks#methodology)

------------------------------------------------------------------------------

Model

GPT-5.2, temperature 0. Same system prompt and user prompt for every scenario. Each format is derived from the same LLM output, not independently generated.

Conversion

The LLM generates OpenUI Lang. Thesys C1 JSON is a normalized AST projection (`component` + `props`) that drops parser metadata (`type`, `typeName`, `partial`, `__typename`). The YAML payload and Vercel JSON-Render output are two serializations of the same json-render spec projection (`root`, `elements`, optional `state`): JSONL emits RFC 6902 patches, while YAML is serialized with `yaml.stringify(..., { indent: 2 })`.

Token Counting

All formats measured with `tiktoken` using the `gpt-5` model encoder — the same tokenizer family as GPT-5.2. Whitespace and formatting is included as-is in the count. For YAML, the benchmark counts the document payload only and excludes the outer `yaml-spec` fence.

Latency Model

Assumes constant throughput (60 tok/s). Real latency also depends on TTFT and network. Streaming advantage is most visible for the _last element to render_, not just overall time.

### [Why is JSON-Render heavier than expected?](https://www.openui.com/docs/openui-lang/benchmarks#why-is-json-render-heavier-than-expected)

Vercel JSON-Render encodes each element as a separate `{"op":"add","path":"/elements/id","value":{...}}` line. The `op`, `path`, `value`, `type`, `props`, and `children` keys repeat for every node. For deeply nested UIs (dashboards, pricing pages), the structural repetition accumulates significantly — up to **3.0× the tokens** of OpenUI Lang across our scenarios.

* * *

[Reproducing the Benchmark](https://www.openui.com/docs/openui-lang/benchmarks#reproducing-the-benchmark)

----------------------------------------------------------------------------------------------------------

The benchmark scripts live in `benchmarks/`. To regenerate:

    # 1. Generate samples (calls OpenAI — requires OPENAI_API_KEY in your shell)
    cd benchmarks
    pnpm generate
    
    # 2. Run the token/latency report (offline, no API calls)
    pnpm bench

Source files:

*   `generate-samples.ts` — calls OpenAI, converts output to all four formats, saves to `samples/`
*   `run-benchmark.ts` — reads saved samples, counts tokens, prints the tables
*   `thesys-c1-converter.ts` — AST → normalized Thesys C1 JSON converter
*   `vercel-spec-converter.ts` — AST → shared json-render spec projection (`root` / `elements`)
*   `vercel-jsonl-converter.ts` — shared spec → RFC 6902 JSONL converter
*   `yaml-converter.ts` — shared spec → YAML document converter
*   `schema.json` — full JSON Schema for the default component library (auto-generated by `library.toJSONSchema()`)
*   `system-prompt.txt` — system prompt for the default component library (auto-generated by `library.prompt()`)

[Evolution Guide\
\
How OpenUI Lang evolved from static UI generation to interactive, data-driven apps.](https://www.openui.com/docs/openui-lang/evolution-guide)
[Troubleshooting\
\
Common issues and fixes when working with OpenUI Lang and the Renderer.](https://www.openui.com/docs/openui-lang/troubleshooting)

### On this page

[Formats Compared](https://www.openui.com/docs/openui-lang/benchmarks#formats-compared)
[Same output, different representations](https://www.openui.com/docs/openui-lang/benchmarks#same-output-different-representations)
[Token Count Results](https://www.openui.com/docs/openui-lang/benchmarks#token-count-results)
[Estimated Latency](https://www.openui.com/docs/openui-lang/benchmarks#estimated-latency)
[Methodology](https://www.openui.com/docs/openui-lang/benchmarks#methodology)
[Why is JSON-Render heavier than expected?](https://www.openui.com/docs/openui-lang/benchmarks#why-is-json-render-heavier-than-expected)
[Reproducing the Benchmark](https://www.openui.com/docs/openui-lang/benchmarks#reproducing-the-benchmark)

---

# Theming | OpenUI - The Open Standard for Generative UI

Theming
=======

Customize colors, typography, and branding for Chat components.

Copy MarkdownOpen

Built-in chat layouts mount their own `ThemeProvider` by default. Use the `theme` prop to control mode and token overrides, or disable the built-in provider if your app already wraps the UI in its own theme scope.

There are two common theming paths:

*   set `theme.mode` when you only need light or dark mode
*   pass `lightTheme` and `darkTheme` when you need token-level visual customization

[Set the mode](https://www.openui.com/docs/chat/theming#set-the-mode)

----------------------------------------------------------------------

    import { FullScreen } from "@openuidev/react-ui";
    
    <FullScreen apiUrl="/api/chat" theme={{ mode: "dark" }} agentName="Assistant" />;

[Override theme tokens](https://www.openui.com/docs/chat/theming#override-theme-tokens)

----------------------------------------------------------------------------------------

Use `lightTheme` and `darkTheme` inside the `theme` prop to override the built-in token sets.

    import { FullScreen, createTheme } from "@openuidev/react-ui";
    
    <FullScreen
      apiUrl="/api/chat"
      theme={{
        mode: "dark",
        lightTheme: createTheme({
          interactiveAccentDefault: "oklch(0.62 0.22 260)",
        }),
        darkTheme: createTheme({
          interactiveAccentDefault: "oklch(0.72 0.18 260)",
        }),
      }}
      agentName="Assistant"
    />;

If you only pass `lightTheme`, those overrides are also used as the fallback for dark mode.

[Use your own app-level theme provider](https://www.openui.com/docs/chat/theming#use-your-own-app-level-theme-provider)

------------------------------------------------------------------------------------------------------------------------

If your app already wraps the page in `ThemeProvider`, disable the built-in wrapper on the chat layout.

    import { FullScreen } from "@openuidev/react-ui";
    
    <FullScreen apiUrl="/api/chat" disableThemeProvider agentName="Assistant" />;

`disableThemeProvider` only skips the wrapper. It does not remove any chat functionality.

Light (default)

![FullScreen light theme](https://www.openui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffullscreen.be1ca51f.png&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

Dark

![FullScreen dark theme](https://www.openui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffullscreen-dark.6086b463.png&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

[Related guides](https://www.openui.com/docs/chat/theming#related-guides)

--------------------------------------------------------------------------

*   [FullScreen](https://www.openui.com/docs/chat/fullscreen)
    
*   [Copilot](https://www.openui.com/docs/chat/copilot)
    
*   [BottomTray](https://www.openui.com/docs/chat/bottom-tray)
    

[Welcome & Starters\
\
Configure the empty-state welcome message and conversation starters.](https://www.openui.com/docs/chat/welcome)
[Custom Chat Components\
\
Override the composer, assistant messages, and user messages.](https://www.openui.com/docs/chat/custom-chat-components)

### On this page

[Set the mode](https://www.openui.com/docs/chat/theming#set-the-mode)
[Override theme tokens](https://www.openui.com/docs/chat/theming#override-theme-tokens)
[Use your own app-level theme provider](https://www.openui.com/docs/chat/theming#use-your-own-app-level-theme-provider)
[Related guides](https://www.openui.com/docs/chat/theming#related-guides)

---

# Welcome & Starters | OpenUI - The Open Standard for Generative UI

Welcome & Starters
==================

Configure the empty-state welcome message and conversation starters.

Copy MarkdownOpen

When there are no messages yet, OpenUI Chat shows a welcome state. The same props work across the built-in layouts, including `Copilot`, `FullScreen`, and `BottomTray`.

You can customize that empty state with:

*   `welcomeMessage`
*   `conversationStarters`

[Basic welcome state](https://www.openui.com/docs/chat/welcome#basic-welcome-state)

------------------------------------------------------------------------------------

    import { Copilot } from "@openuidev/react-ui";
    
    <Copilot
      apiUrl="/api/chat"
      welcomeMessage={{
        title: "Hi there! 👋",
        description: "How can I help today?",
      }}
      conversationStarters={{
        options: [\
          { displayText: "Track my order", prompt: "Where is my latest order?" },\
          { displayText: "Billing help", prompt: "I have a billing question." },\
        ],
      }}
    />;

`displayText` is what users click. `prompt` is what gets sent to the model.

[Custom welcome component](https://www.openui.com/docs/chat/welcome#custom-welcome-component)

----------------------------------------------------------------------------------------------

If you want full control over the empty state, pass a React component instead of a config object.

    function CustomWelcome() {
      return (
        <div>
          <h2>Welcome back</h2>
          <p>Ask about orders, billing, or product recommendations.</p>
        </div>
      );
    }
    
    <Copilot apiUrl="/api/chat" welcomeMessage={CustomWelcome} agentName="Assistant" />;

[Conversation starter variants](https://www.openui.com/docs/chat/welcome#conversation-starter-variants)

--------------------------------------------------------------------------------------------------------

Use `variant="short"` for compact pill buttons or `variant="long"` for more descriptive list-style starters.

    <Copilot
      apiUrl="/api/chat"
      conversationStarters={{
        variant: "long",
        options: [\
          {\
            displayText: "Track my order",\
            prompt: "Where is my latest order?",\
          },\
          {\
            displayText: "Return an item",\
            prompt: "How do I return a product?",\
          },\
        ],
      }}
      agentName="Assistant"
    />

`"short"` variant

![Short conversation starters](https://www.openui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstarters-short.e58eb246.png&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

`"long"` variant

![Long conversation starters](https://www.openui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstarters-long.c23c8e11.png&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

[Related guides](https://www.openui.com/docs/chat/welcome#related-guides)

--------------------------------------------------------------------------

*   [Copilot](https://www.openui.com/docs/chat/copilot)
    
*   [FullScreen](https://www.openui.com/docs/chat/fullscreen)
    
*   [BottomTray](https://www.openui.com/docs/chat/bottom-tray)
    

[Connect Thread History\
\
Configure threadApiUrl and load thread lists and message history.](https://www.openui.com/docs/chat/persistence)
[Theming\
\
Customize colors, typography, and branding for Chat components.](https://www.openui.com/docs/chat/theming)

### On this page

[Basic welcome state](https://www.openui.com/docs/chat/welcome#basic-welcome-state)
[Custom welcome component](https://www.openui.com/docs/chat/welcome#custom-welcome-component)
[Conversation starter variants](https://www.openui.com/docs/chat/welcome#conversation-starter-variants)
[Related guides](https://www.openui.com/docs/chat/welcome#related-guides)

---

# Built-in Functions | OpenUI - The Open Standard for Generative UI

Built-in Functions
==================

Transform, filter, and aggregate data with @-prefixed built-in functions.

Copy MarkdownOpen

Built-in functions start with `@` - this tells the LLM "this is a function, not a component."

Built-ins are included in the system prompt when `toolCalls` or `bindings` is enabled. They are primarily used with `Query` results for data transformation, filtering, and aggregation.

[Aggregation](https://www.openui.com/docs/openui-lang/builtins#aggregation)

----------------------------------------------------------------------------

| Function | What it does | Example |
| --- | --- | --- |
| `@Count(array)` | Length of array | `@Count(tickets.rows)` → `42` |
| `@Sum(array)` | Sum of numbers | `@Sum(data.rows.amount)` → `1250` |
| `@Avg(array)` | Average | `@Avg(data.rows.score)` → `4.2` |
| `@Min(array)` | Smallest value | `@Min(data.rows.price)` → `9.99` |
| `@Max(array)` | Largest value | `@Max(data.rows.price)` → `99.99` |
| `@First(array)` | First element | `@First(data.rows)` |
| `@Last(array)` | Last element | `@Last(data.rows)` |

[Filtering & Sorting](https://www.openui.com/docs/openui-lang/builtins#filtering--sorting)

-------------------------------------------------------------------------------------------

| Function | What it does |
| --- | --- |
| `@Filter(array, field, op, value)` | Keep items where field matches. Ops: `==`, `!=`, `>`, `<`, `>=`, `<=`, `contains` |
| `@Sort(array, field, direction?)` | Sort by field. Direction: `"asc"` (default) or `"desc"` |

Examples:

    openTickets = @Filter(tickets.rows, "status", "==", "open")
    sorted = @Sort(tickets.rows, "created", "desc")

[Composing functions](https://www.openui.com/docs/openui-lang/builtins#composing-functions)

--------------------------------------------------------------------------------------------

Functions can be nested:

    openCount = @Count(@Filter(tickets.rows, "status", "==", "open"))

This is the main pattern for KPI cards:

    kpi = Card([\
      TextContent("Open Tickets", "small"),\
      TextContent("" + @Count(@Filter(data.rows, "status", "==", "open")), "large-heavy")\
    ])

[Math](https://www.openui.com/docs/openui-lang/builtins#math)

--------------------------------------------------------------

| Function | What it does |
| --- | --- |
| `@Round(number, decimals?)` | Round to N decimal places |
| `@Abs(number)` | Absolute value |
| `@Floor(number)` | Round down |
| `@Ceil(number)` | Round up |

[Iteration with @Each](https://www.openui.com/docs/openui-lang/builtins#iteration-with-each)

---------------------------------------------------------------------------------------------

Render a template for every item in an array:

    @Each(tickets.rows, "t", Tag(t.priority, null, "sm"))

The second argument (`"t"`) is the loop variable name. Use it inside the template.

[Action steps](https://www.openui.com/docs/openui-lang/builtins#action-steps)

------------------------------------------------------------------------------

These are used inside `Action([...])` to wire button clicks:

| Step | What it does |
| --- | --- |
| `@Run(ref)` | Execute a Mutation or re-fetch a Query |
| `@Set($var, value)` | Change a `$variable` |
| `@Reset($var1, $var2)` | Restore `$variables` to defaults |
| `@ToAssistant("msg")` | Send a message to the LLM |
| `@OpenUrl("url")` | Open a URL in a new tab |

    submitBtn = Button("Create", Action([@Run(mutation), @Run(query), @Reset($title)]))

[Incremental Editing\
\
Edit existing UIs efficiently - the LLM patches only what changed, the parser merges it.](https://www.openui.com/docs/openui-lang/incremental-editing)
[Patterns\
\
Complete examples showing how Query, $variables, @builtins, and actions compose together.](https://www.openui.com/docs/openui-lang/patterns)

### On this page

[Aggregation](https://www.openui.com/docs/openui-lang/builtins#aggregation)
[Filtering & Sorting](https://www.openui.com/docs/openui-lang/builtins#filtering--sorting)
[Composing functions](https://www.openui.com/docs/openui-lang/builtins#composing-functions)
[Math](https://www.openui.com/docs/openui-lang/builtins#math)
[Iteration with @Each](https://www.openui.com/docs/openui-lang/builtins#iteration-with-each)
[Action steps](https://www.openui.com/docs/openui-lang/builtins#action-steps)

---

# Evolution Guide | OpenUI - The Open Standard for Generative UI

Evolution Guide
===============

How OpenUI Lang evolved from static UI generation to interactive, data-driven apps.

Copy MarkdownOpen

[v0.1 → v0.5](https://www.openui.com/docs/openui-lang/evolution-guide#v01--v05)

--------------------------------------------------------------------------------

OpenUI Lang started as a way to generate static UI from LLM output, a token-efficient alternative to JSON for rendering chat responses. v0.5 turns it into a language for building **standalone interactive apps** that run independently of the LLM.

[The shift](https://www.openui.com/docs/openui-lang/evolution-guide#the-shift)

-------------------------------------------------------------------------------

|     | v0.1 | v0.5 |
| --- | --- | --- |
| **Purpose** | Generate UI responses in chat | Build interactive apps with live data |
| **Data** | Hardcoded in the output | Fetched from your tools via `Query` / `Mutation` |
| **State** | None - static render | Reactive `$variables` with two-way binding |
| **Interactivity** | Send message back to LLM | Buttons call tools directly via `@Run`, update state via `@Set` |
| **LLM role** | Generates UI on every turn | Generates UI once, then gets out of the way |
| **Data transforms** | None | `@Count`, `@Filter`, `@Sort`, `@Each`, `@Sum`, etc. |
| **Components** | Layout + content | \+ `Modal`, auto-dismiss `Callout` |

[From chat response to standalone app](https://www.openui.com/docs/openui-lang/evolution-guide#from-chat-response-to-standalone-app)

-------------------------------------------------------------------------------------------------------------------------------------

### [v0.1: Static UI generation](https://www.openui.com/docs/openui-lang/evolution-guide#v01-static-ui-generation)

The LLM generates a component tree. It renders once. User wants changes? Ask the LLM again.

    root = Stack([header, chart])
    header = CardHeader("Q4 Revenue")
    chart = BarChart(["Oct", "Nov", "Dec"], [Series("Revenue", [120, 150, 180])])

Data is hardcoded. No interactivity beyond clicking a button to send a message back to the LLM.

### [v0.5: Interactive app with live data](https://www.openui.com/docs/openui-lang/evolution-guide#v05-interactive-app-with-live-data)

The LLM generates code that **connects to your tools**. The runtime fetches data, handles user interactions, and updates the UI - all without going back to the LLM.

    $days = "7"
    filter = Select("days", $days, [SelectItem("7", "7 days"), SelectItem("30", "30 days")])
    data = Query("analytics", {days: $days}, {rows: []})
    chart = LineChart(data.rows.day, [Series("Revenue", data.rows.revenue)])
    kpi = Card([TextContent("Total", "small"), TextContent("" + @Sum(data.rows.revenue), "large-heavy")])
    root = Stack([CardHeader("Revenue Dashboard"), filter, Stack([kpi], "row"), chart])

What's different:

*   `$days` is reactive state - user changes the Select, chart updates
*   `Query("analytics", {days: $days})` fetches live data from your MCP tools
*   `@Sum(data.rows.revenue)` computes the KPI from live data
*   No LLM roundtrip when the user changes the filter

[What v0.5 adds](https://www.openui.com/docs/openui-lang/evolution-guide#what-v05-adds)

----------------------------------------------------------------------------------------

### [Reactive state](https://www.openui.com/docs/openui-lang/evolution-guide#reactive-state)

Declare variables, bind them to inputs, reference them in expressions. Everything updates automatically.

    $search = ""
    searchBox = Input("search", $search, "Search...")
    filtered = @Filter(data.rows, "title", "contains", $search)

See [Reactive State](https://www.openui.com/docs/openui-lang/reactive-state)
.

### [Data fetching](https://www.openui.com/docs/openui-lang/evolution-guide#data-fetching)

`Query` reads data from your tools. `Mutation` writes. The runtime calls your MCP endpoint directly - no LLM involved.

    tickets = Query("list_tickets", {}, {rows: []})
    createResult = Mutation("create_ticket", {title: $title})

See [Queries & Mutations](https://www.openui.com/docs/openui-lang/queries-mutations)
.

### [Built-in functions](https://www.openui.com/docs/openui-lang/evolution-guide#built-in-functions)

`@`\-prefixed functions for transforming data inline: `@Count`, `@Filter`, `@Sort`, `@Sum`, `@Each`, `@Round`, and more.

    openCount = @Count(@Filter(tickets.rows, "status", "==", "open"))
    sorted = @Sort(tickets.rows, "created", "desc")

See [Built-in Functions](https://www.openui.com/docs/openui-lang/builtins)
.

### [Action composition](https://www.openui.com/docs/openui-lang/evolution-guide#action-composition)

Buttons can run mutations, refresh queries, set state, and reset forms - all in a single action.

    submitBtn = Button("Create", Action([@Run(createResult), @Run(tickets), @Set($success, true), @Reset($title)]))

### [Reactive component props (`$binding`)](https://www.openui.com/docs/openui-lang/evolution-guide#reactive-component-props-binding)

Components can accept `$variables` as props for reactive binding. For example, a Modal's `open` prop or a Callout's `visible` prop can be bound to a `$variable`, and the component reads and writes the variable directly.

This is a library-level feature (component authors use `useStateField`), not a language change. The language just passes the `$variable` as a positional argument.

### [Incremental editing](https://www.openui.com/docs/openui-lang/evolution-guide#incremental-editing)

LLM outputs only changed statements. The parser merges by name - existing code stays intact.

See [Incremental Editing](https://www.openui.com/docs/openui-lang/incremental-editing)
.

[What stayed the same](https://www.openui.com/docs/openui-lang/evolution-guide#what-stayed-the-same)

-----------------------------------------------------------------------------------------------------

The core language is unchanged:

*   Line-oriented assignment syntax: `identifier = Expression`
*   Positional arguments mapped by Zod schema key order
*   Forward references and streaming-first rendering
*   Component resolution and validation

v0.5 is a superset - all v0.1 code is valid v0.5 code.

[v0.5 (Latest)\
\
Full language specification for OpenUI Lang v0.5 - reactive state, queries, mutations, and built-in functions.](https://www.openui.com/docs/openui-lang/specification-v05)
[Benchmarks\
\
Token efficiency and latency comparison of OpenUI Lang vs YAML, Vercel JSON-Render, and Thesys C1 JSON.](https://www.openui.com/docs/openui-lang/benchmarks)

### On this page

[v0.1 → v0.5](https://www.openui.com/docs/openui-lang/evolution-guide#v01--v05)
[The shift](https://www.openui.com/docs/openui-lang/evolution-guide#the-shift)
[From chat response to standalone app](https://www.openui.com/docs/openui-lang/evolution-guide#from-chat-response-to-standalone-app)
[v0.1: Static UI generation](https://www.openui.com/docs/openui-lang/evolution-guide#v01-static-ui-generation)
[v0.5: Interactive app with live data](https://www.openui.com/docs/openui-lang/evolution-guide#v05-interactive-app-with-live-data)
[What v0.5 adds](https://www.openui.com/docs/openui-lang/evolution-guide#what-v05-adds)
[Reactive state](https://www.openui.com/docs/openui-lang/evolution-guide#reactive-state)
[Data fetching](https://www.openui.com/docs/openui-lang/evolution-guide#data-fetching)
[Built-in functions](https://www.openui.com/docs/openui-lang/evolution-guide#built-in-functions)
[Action composition](https://www.openui.com/docs/openui-lang/evolution-guide#action-composition)
[Reactive component props (`$binding`)](https://www.openui.com/docs/openui-lang/evolution-guide#reactive-component-props-binding)
[Incremental editing](https://www.openui.com/docs/openui-lang/evolution-guide#incremental-editing)
[What stayed the same](https://www.openui.com/docs/openui-lang/evolution-guide#what-stayed-the-same)

---

# Introduction | OpenUI - The Open Standard for Generative UI

Introduction
============

Copy MarkdownOpen

OpenUI is a full-stack Generative UI framework (a compact streaming-first language, a React runtime with built-in component libraries, and ready-to-use chat interfaces) that is up to **[67% more token-efficient](https://www.openui.com/docs/openui-lang/benchmarks)
** than JSON. Generate anything from rich chat responses to [fully interactive dashboards](https://www.openui.com/docs/openui-lang/how-it-works)
.

[What is Generative UI?](https://www.openui.com/docs/openui-lang#what-is-generative-ui)

----------------------------------------------------------------------------------------

Most AI applications are limited to returning text (as markdown) or rendering pre-built UI responses. Markdown isn't interactive, and pre-built responses are rigid (they don't adapt to the context of the conversation).

Generative UI fundamentally changes this relationship. Instead of merely providing content, the AI composes the interface itself. It dynamically selects, configures, and composes components from a predefined library to create a purpose-built interface tailored to the user's immediate request, be it an interactive chart, a complex form, or a multi-tab dashboard.

![OpenUI Chat Demo - Click to try it live](https://www.openui.com/_next/image?url=%2Fimages%2Fopenui-lang%2Fcompare.png&w=3840&q=75&dpl=dpl_DLHT83bUWkApM6KBcbnjwEEUJkSJ)

### Try it out live

Live interactive demo of OpenUI Chat in action

[Architecture at a Glance](https://www.openui.com/docs/openui-lang#architecture-at-a-glance)

---------------------------------------------------------------------------------------------

![Architecture diagram](https://www.openui.com/images/openui-lang/openui-chart-flow.png)

1.  **System prompt includes OpenUI Lang spec**: Your backend appends the generated component library prompt alongside your system prompt, instructing the LLM to respond in OpenUI Lang instead of plain text or JSON.
    
2.  **LLM generates OpenUI Lang**: Instead of returning markdown, the model outputs a compact, line-oriented syntax (e.g., `root = Stack([chart])`) constrained to your component library.
    
3.  **Streaming render**: On the client, the `<Renderer />` component parses each line as it arrives and maps it to your React components in real-time. Structure renders first, then data fills in progressively.
    

The result is a native UI dynamically composed by the AI, streamed efficiently, and rendered safely from your own components. For data-driven apps with live tools and reactive state, see [Architecture](https://www.openui.com/docs/openui-lang/how-it-works)
.

[OpenUI Lang](https://www.openui.com/docs/openui-lang#openui-lang)

-------------------------------------------------------------------

OpenUI Lang is a compact, line-oriented language designed specifically for Large Language Models (LLMs) to generate user interfaces. It serves as a more efficient, predictable, and stream-friendly alternative to verbose formats like JSON. For the complete syntax reference, see the [Language Specification](https://www.openui.com/docs/openui-lang/specification-v05)
.

### [Why a New Language?](https://www.openui.com/docs/openui-lang#why-a-new-language)

While JSON is a common data interchange format, it has significant drawbacks when streamed directly from an LLM for UI generation. And there are multiple implementations around it, like Vercel [JSON-Render](https://json-render.dev/)
 and [A2UI](https://a2ui.org/)
.

OpenUI Lang was created to solve these core issues:

*   **Token Efficiency:** JSON is extremely verbose. Keys like `"component"`, `"props"`, and `"children"` are repeated for every single element, consuming a large number of tokens. This directly increases API costs and latency. OpenUI Lang uses a concise, positional syntax that drastically reduces the token count. Benchmarks show it is up to **[67% more token-efficient](https://www.openui.com/docs/openui-lang/benchmarks)
    ** than JSON.
    
*   **Streaming-First Design:** The language is line-oriented (`identifier = Expression`), making it trivial to parse and render progressively. As each line arrives from the model, a new piece of the UI can be rendered immediately. This provides a superior user experience with much better perceived performance compared to waiting for a complete JSON object to download and parse.
    
*   **Robustness:** LLMs are unpredictable. They can hallucinate component names or produce invalid structures. OpenUI Lang validates output and drops invalid portions, rendering only what's valid.
    

Same UI component, both streaming at 60 tokens/sec. OpenUI Lang finishes in **4.9s** vs JSON's **14.2s** — **65% fewer tokens**.

### JSON Format

849 tokens

### OpenUI Lang

294 tokens

[What can you build?](https://www.openui.com/docs/openui-lang#what-can-you-build)

----------------------------------------------------------------------------------

[### Chat\
\
Conversational AI with generative UI responses, thread history, and prebuilt layouts.](https://www.openui.com/docs/chat)
[### Dashboards & Apps\
\
Data-driven dashboards, CRUD interfaces, and monitoring tools, powered by live data from your tools.](https://www.openui.com/docs/openui-lang/how-it-works)

Want to try it? [Open the Playground](https://www.openui.com/playground)
 or follow the [Quick Start](https://www.openui.com/docs/openui-lang/quickstart)
.

[Quick Start\
\
Bootstrap a GenUI chat app in under a minute.](https://www.openui.com/docs/openui-lang/quickstart)

### On this page

[What is Generative UI?](https://www.openui.com/docs/openui-lang#what-is-generative-ui)
[Architecture at a Glance](https://www.openui.com/docs/openui-lang#architecture-at-a-glance)
[OpenUI Lang](https://www.openui.com/docs/openui-lang#openui-lang)
[Why a New Language?](https://www.openui.com/docs/openui-lang#why-a-new-language)
[What can you build?](https://www.openui.com/docs/openui-lang#what-can-you-build)

---

# Prompts | OpenUI - The Open Standard for Generative UI

Openui lang

Prompts
=======

Legacy prompt page kept for compatibility; use System Prompts.

Copy MarkdownOpen

This page is maintained for older links.

The canonical prompt documentation is:

*   [System Prompts](https://www.openui.com/docs/openui-lang/system-prompts)
    

Quick example:

    import { openuiLibrary, openuiPromptOptions } from "@openuidev/react-ui";
    
    const systemPrompt = openuiLibrary.prompt(openuiPromptOptions);

Prompt generation behavior is documented in detail on the System Prompts page.

---

# @openuidev/react-lang | OpenUI - The Open Standard for Generative UI

@openuidev/react-lang
=====================

API reference for the OpenUI Lang runtime, library, parser, and renderer.

Copy MarkdownOpen

Use this package for OpenUI Lang authoring and rendering.

[Import](https://www.openui.com/docs/api-reference/react-lang#import)

----------------------------------------------------------------------

    import {
      defineComponent,
      createLibrary,
      Renderer,
      BuiltinActionType,
      createParser,
      createStreamingParser,
    } from "@openuidev/react-lang";

[`defineComponent(config)`](https://www.openui.com/docs/api-reference/react-lang#definecomponentconfig)

--------------------------------------------------------------------------------------------------------

Defines a single component with name, Zod schema, description, and React renderer. Returns a `DefinedComponent` with a `.ref` for cross-referencing in parent schemas.

    function defineComponent<T extends z.ZodObject<any>>(config: {
      name: string;
      props: T;
      description: string;
      component: ComponentRenderer<z.infer<T>>;
    }): DefinedComponent<T>;

    interface DefinedComponent<T extends z.ZodObject<any> = z.ZodObject<any>> {
      name: string;
      props: T;
      description: string;
      component: ComponentRenderer<z.infer<T>>;
      /** Use in parent schemas: `z.array(ChildComponent.ref)` */
      ref: z.ZodType<SubComponentOf<z.infer<T>>>;
    }

[`createLibrary(input)`](https://www.openui.com/docs/api-reference/react-lang#createlibraryinput)

--------------------------------------------------------------------------------------------------

Creates a `Library` from an array of defined components.

    function createLibrary(input: LibraryDefinition): Library;

Core types:

    interface LibraryDefinition {
      components: DefinedComponent[];
      componentGroups?: ComponentGroup[];
      root?: string;
    }
    
    interface ComponentGroup {
      name: string;
      components: string[];
      notes?: string[];
    }
    
    interface Library {
      readonly components: Record<string, DefinedComponent>;
      readonly componentGroups: ComponentGroup[] | undefined;
      readonly root: string | undefined;
    
      prompt(options?: PromptOptions): string;
      toJSONSchema(): object;
      toSpec(): PromptSpec;
    }
    
    interface PromptOptions {
      preamble?: string;
      additionalRules?: string[];
      examples?: string[];
      toolExamples?: string[];
      editMode?: boolean;
      inlineMode?: boolean;
      /** Enable Query(), Mutation(), @Run, built-in functions. Default: true if tools provided. */
      toolCalls?: boolean;
      /** Enable $variables, @Set, @Reset, built-in functions. Default: true if toolCalls. */
      bindings?: boolean;
    }

[`<Renderer />`](https://www.openui.com/docs/api-reference/react-lang#renderer-)

---------------------------------------------------------------------------------

Parses OpenUI Lang text and renders nodes with your `Library`.

    interface RendererProps {
      response: string | null;
      library: Library;
      isStreaming?: boolean;
      onAction?: (event: ActionEvent) => void;
      onStateUpdate?: (state: Record<string, unknown>) => void;
      initialState?: Record<string, any>;
      onParseResult?: (result: ParseResult | null) => void;
      toolProvider?:
        | Record<string, (args: Record<string, unknown>) => Promise<unknown>>
        | McpClientLike
        | null;
      queryLoader?: React.ReactNode;
      onError?: (errors: OpenUIError[]) => void;
    }

[Tool Provider](https://www.openui.com/docs/api-reference/react-lang#tool-provider)

------------------------------------------------------------------------------------

Handles `Query()` and `Mutation()` tool calls at runtime. The `toolProvider` prop accepts two forms:

*   **Function map** — `Record<string, (args) => Promise<unknown>>` — the simplest option
*   **MCP client** — any object implementing `callTool({ name, arguments })` (e.g. from `@modelcontextprotocol/sdk`)

The Renderer detects which form was passed and normalizes internally.

[Error types](https://www.openui.com/docs/api-reference/react-lang#error-types)

--------------------------------------------------------------------------------

    type OpenUIErrorSource = "parser" | "runtime" | "query" | "mutation";
    
    interface OpenUIError {
      source: OpenUIErrorSource;
      code: string;
      message: string;
      statementId?: string;
      component?: string;
      path?: string;
      hint?: string;
    }
    
    class ToolNotFoundError extends Error {
      toolName: string;
      availableTools: string[];
    }

Error codes: `unknown-component`, `missing-required`, `null-required`, `inline-reserved`, `tool-not-found`, `parse-failed`, `parse-exception`, `runtime-error`, `render-error`.

[Actions](https://www.openui.com/docs/api-reference/react-lang#actions)

------------------------------------------------------------------------

    enum BuiltinActionType {
      ContinueConversation = "continue_conversation",
      OpenUrl = "open_url",
    }
    
    interface ActionEvent {
      type: string;
      params: Record<string, any>;
      humanFriendlyMessage: string;
      formState?: Record<string, any>;
      formName?: string;
    }

Action steps (runtime types from the evaluator):

    type ActionStep =
      | { type: "run"; statementId: string; refType: "query" | "mutation" }
      | { type: "continue_conversation"; message: string; context?: string }
      | { type: "open_url"; url: string }
      | { type: "set"; target: string; valueAST: ASTNode }
      | { type: "reset"; targets: string[] };

| Step type | Triggered by | Description |
| --- | --- | --- |
| `"run"` | `@Run(ref)` | Execute a Mutation or re-fetch a Query. `refType` indicates which. |
| `"set"` | `@Set($var, val)` | Change a `$variable`. `valueAST` is evaluated at click time. |
| `"reset"` | `@Reset($a, $b)` | Restore `$variables` to declared defaults. |
| `"continue_conversation"` | `@ToAssistant("msg")` | Send message to LLM. Optional `context`. |
| `"open_url"` | `@OpenUrl("url")` | Open URL in new tab. |

[Parser APIs](https://www.openui.com/docs/api-reference/react-lang#parser-apis)

--------------------------------------------------------------------------------

Both `createParser` and `createStreamingParser` accept a `LibraryJSONSchema` (from `library.toJSONSchema()`).

    interface LibraryJSONSchema {
      $defs?: Record<
        string,
        {
          properties?: Record<string, unknown>;
          required?: string[];
        }
      >;
    }
    
    function createParser(schema: LibraryJSONSchema): Parser;
    function createStreamingParser(schema: LibraryJSONSchema): StreamParser;
    
    interface Parser {
      parse(input: string): ParseResult;
    }
    
    interface StreamParser {
      push(chunk: string): ParseResult;
      getResult(): ParseResult;
    }

Core parsed types:

    interface ElementNode {
      type: "element";
      typeName: string;
      props: Record<string, unknown>;
      partial: boolean;
    }
    
    /**
     * Parser-level validation errors (schema mismatches).
     */
    type ValidationErrorCode =
      | "missing-required"
      | "null-required"
      | "unknown-component"
      | "inline-reserved";
    
    interface ValidationError {
      code: ValidationErrorCode;
      component: string;
      path: string;
      message: string;
      statementId?: string;
    }
    
    interface ParseResult {
      root: ElementNode | null;
      meta: {
        incomplete: boolean;
        /** References used but not yet defined (dropped as null in output). */
        unresolved: string[];
        /** Value statements defined but not reachable from root. Excludes $state, Query, and Mutation. */
        orphaned: string[];
        statementCount: number;
        /**
         * Validation errors:
         * - "missing-required" — required prop not provided
         * - "null-required" — required prop explicitly null
         * - "unknown-component" — component not in library schema
         * - "inline-reserved" — Query/Mutation used inline instead of top-level
         * - "excess-args" — more positional args than schema params (extras dropped, component still renders)
         */
        errors: ValidationError[];
      };
      /** Extracted Query() statements with tool name, args AST, defaults AST */
      queryStatements: QueryStatementInfo[];
      /** Extracted Mutation() statements with tool name, args AST */
      mutationStatements: MutationStatementInfo[];
      /** Declared $variables with their default values */
      stateDeclarations: Record<string, unknown>;
    }

[Context hooks (inside renderer components)](https://www.openui.com/docs/api-reference/react-lang#context-hooks-inside-renderer-components)

--------------------------------------------------------------------------------------------------------------------------------------------

    // Reactive state binding — preferred for form inputs and $variable-bound components
    function useStateField(
      name: string,
      value?: unknown,
    ): {
      value: unknown;
      setValue: (value: unknown) => void;
    };
    
    function useRenderNode(): (value: unknown) => React.ReactNode;
    function useTriggerAction(): (
      userMessage: string,
      formName?: string,
      action?: { type?: string; params?: Record<string, any> },
    ) => void;
    function useIsStreaming(): boolean;
    function useGetFieldValue(): (formName: string | undefined, name: string) => any;
    function useSetFieldValue(): (
      formName: string | undefined,
      componentType: string | undefined,
      name: string,
      value: any,
      shouldTriggerSaveCallback?: boolean,
    ) => void;
    function useFormName(): string | undefined;
    function useSetDefaultValue(options: {
      formName?: string;
      componentType: string;
      name: string;
      existingValue: any;
      defaultValue: any;
      shouldTriggerSaveCallback?: boolean;
    }): void;

[Form validation APIs](https://www.openui.com/docs/api-reference/react-lang#form-validation-apis)

--------------------------------------------------------------------------------------------------

    interface FormValidationContextValue {
      errors: Record<string, string | undefined>;
      validateField: (name: string, value: unknown, rules: ParsedRule[]) => boolean;
      registerField: (name: string, rules: ParsedRule[], getValue: () => unknown) => void;
      unregisterField: (name: string) => void;
      validateForm: () => boolean;
      clearFieldError: (name: string) => void;
    }
    
    function useFormValidation(): FormValidationContextValue | null;
    function useCreateFormValidation(): FormValidationContextValue;
    function validate(
      value: unknown,
      rules: ParsedRule[],
      customValidators?: Record<string, ValidatorFn>,
    ): string | undefined;
    function parseRules(rules: unknown): ParsedRule[];
    function parseStructuredRules(rules: unknown): ParsedRule[];
    const builtInValidators: Record<string, ValidatorFn>;

Context providers for advanced usage:

    const FormValidationContext: React.Context<FormValidationContextValue | null>;
    const FormNameContext: React.Context<string | undefined>;

[OpenUI SDK\
\
API reference for the documented surfaces of @openuidev/react-lang, @openuidev/react-headless, @openuidev/react-ui, and @openuidev/react-email.](https://www.openui.com/docs/api-reference)
[@openuidev/react-headless\
\
API reference for chat state, hooks, streaming adapters, and message types.](https://www.openui.com/docs/api-reference/react-headless)

### On this page

[Import](https://www.openui.com/docs/api-reference/react-lang#import)
[`defineComponent(config)`](https://www.openui.com/docs/api-reference/react-lang#definecomponentconfig)
[`createLibrary(input)`](https://www.openui.com/docs/api-reference/react-lang#createlibraryinput)
[`<Renderer />`](https://www.openui.com/docs/api-reference/react-lang#renderer-)
[Tool Provider](https://www.openui.com/docs/api-reference/react-lang#tool-provider)
[Error types](https://www.openui.com/docs/api-reference/react-lang#error-types)
[Actions](https://www.openui.com/docs/api-reference/react-lang#actions)
[Parser APIs](https://www.openui.com/docs/api-reference/react-lang#parser-apis)
[Context hooks (inside renderer components)](https://www.openui.com/docs/api-reference/react-lang#context-hooks-inside-renderer-components)
[Form validation APIs](https://www.openui.com/docs/api-reference/react-lang#form-validation-apis)

---

# Overview | OpenUI - The Open Standard for Generative UI

Overview
========

Key building blocks of the OpenUI framework and the built-in component libraries.

Copy MarkdownOpen

OpenUI is built around four core building blocks that work together to turn LLM output into rendered UI:

*   **Library**: A collection of components defined with Zod schemas and React renderers. The library is the contract between your app and the AI, defining what components the LLM can use and how they render.
    
*   **Prompt Generator**: Converts your library into a system prompt that instructs the LLM to output valid OpenUI Lang. Includes syntax rules, component signatures, streaming guidelines, and your custom examples/rules.
    
*   **Parser**: Parses OpenUI Lang text (line-by-line, streaming-compatible) into a typed element tree. Validates against your library's JSON Schema and gracefully handles partial/invalid output.
    
*   **Renderer**: The `<Renderer />` React component takes parsed output and maps each element to your library's React components, rendering the UI progressively as the stream arrives.
    

[Built-in Component Libraries](https://www.openui.com/docs/openui-lang/overview#built-in-component-libraries)

--------------------------------------------------------------------------------------------------------------

OpenUI ships with two ready-to-use libraries via `@openuidev/react-ui`. Both include layouts, content blocks, charts, forms, tables, and more.

### [General-purpose library (`openuiLibrary`)](https://www.openui.com/docs/openui-lang/overview#general-purpose-library-openuilibrary)

Root component is `Stack`. Includes the full component suite with flexible layout primitives. Use this for standalone rendering, playgrounds, and non-chat interfaces.

    import { openuiLibrary, openuiPromptOptions } from "@openuidev/react-ui/genui-lib";
    import { Renderer } from "@openuidev/react-lang";
    
    // Generate system prompt
    const systemPrompt = openuiLibrary.prompt(openuiPromptOptions);
    
    // Render streamed output
    <Renderer library={openuiLibrary} response={streamedText} isStreaming={isStreaming} />

### [Chat-optimized library (`openuiChatLibrary`)](https://www.openui.com/docs/openui-lang/overview#chat-optimized-library-openuichatlibrary)

Root component is `Card` (vertical container, no layout params). Adds chat-specific components like `FollowUpBlock`, `ListBlock`, and `SectionBlock`. Does not include `Stack`; responses are always single-card, vertically stacked.

    import { openuiChatLibrary, openuiChatPromptOptions } from "@openuidev/react-ui/genui-lib";
    import { FullScreen } from "@openuidev/react-ui";
    
    // Use with a chat layout
    <FullScreen
      componentLibrary={openuiChatLibrary}
      processMessage={...}
      streamProtocol={openAIAdapter()}
    />

Both libraries expose a `.prompt()` method to generate the system prompt your LLM needs. See [System Prompts](https://www.openui.com/docs/openui-lang/system-prompts)
 for CLI and programmatic generation options.

### [Extend a built-in library](https://www.openui.com/docs/openui-lang/overview#extend-a-built-in-library)

    import { createLibrary, defineComponent } from "@openuidev/react-lang";
    import { openuiLibrary } from "@openuidev/react-ui/genui-lib";
    import { z } from "zod";
    
    const ProductCard = defineComponent({
      name: "ProductCard",
      description: "Product tile",
      props: z.object({
        name: z.string(),
        price: z.number(),
      }),
      component: ({ props }) => <div>{props.name}: ${props.price}</div>,
    });
    
    const myLibrary = createLibrary({
      root: openuiLibrary.root ?? "Stack",
      componentGroups: openuiLibrary.componentGroups,
      components: [...Object.values(openuiLibrary.components), ProductCard],
    });

[Usage Example](https://www.openui.com/docs/openui-lang/overview#usage-example)

--------------------------------------------------------------------------------

Define LibRender CodeSystem PromptLLM Output

OpenUI Lang (Token Efficient)Copy

    root = Stack([welcomeCard])
    welcomeCard = MyCard([welcomeHeader, welcomeBody])
    welcomeHeader = CardHeader("Welcome", "Get started with our platform")
    welcomeBody = Stack([signupForm], "column", "m")
    signupForm = Form("signup", [nameField, emailField], actions)
    nameField = FormControl("Name", Input("name", "Your name", "text", ["required", "minLength:2"]))
    emailField = FormControl("Email", Input("email", "you@example.com", "email", ["required", "email"]))
    actions = Buttons([signUpBtn, learnMoreBtn], "row")
    signUpBtn = Button("Sign up", "submit:signup", "primary")
    learnMoreBtn = Button("Learn more", "action:learn_more", "secondary")

Output Preview

Welcome

Get started with our platform

Name\*

Email\*

Sign upLearn more

[Quick Start\
\
Bootstrap a GenUI chat app in under a minute.](https://www.openui.com/docs/openui-lang/quickstart)
[Defining Components\
\
Define OpenUI components with Zod and React renderers.](https://www.openui.com/docs/openui-lang/defining-components)

### On this page

[Built-in Component Libraries](https://www.openui.com/docs/openui-lang/overview#built-in-component-libraries)
[General-purpose library (`openuiLibrary`)](https://www.openui.com/docs/openui-lang/overview#general-purpose-library-openuilibrary)
[Chat-optimized library (`openuiChatLibrary`)](https://www.openui.com/docs/openui-lang/overview#chat-optimized-library-openuichatlibrary)
[Extend a built-in library](https://www.openui.com/docs/openui-lang/overview#extend-a-built-in-library)
[Usage Example](https://www.openui.com/docs/openui-lang/overview#usage-example)

---

# Interactivity | OpenUI - The Open Standard for Generative UI

Interactivity
=============

Handle actions, forms, and state in OpenUI components.

Copy MarkdownOpen

OpenUI components can be interactive. The `Renderer` manages form state automatically and exposes callbacks for actions and persistence.

[Actions](https://www.openui.com/docs/openui-lang/interactivity#actions)

-------------------------------------------------------------------------

When a user clicks a button or follow-up, the component calls `triggerAction`. The `Renderer` wraps this into an `ActionEvent` and fires `onAction`.

    <Renderer
      library={myLibrary}
      response={content}
      onAction={(event) => {
        if (event.type === "continue_conversation") {
          // event.humanFriendlyMessage — button label or follow-up text
          // event.formState — field values at time of click
          // event.formName — scoping form name, if any
        }
      }}
    />

### [`ActionEvent`](https://www.openui.com/docs/openui-lang/interactivity#actionevent)

| Field | Type | Description |
| --- | --- | --- |
| `type` | `string` | Action type (see built-in types below). |
| `params` | `Record<string, any>` | Extra parameters from the component. |
| `humanFriendlyMessage` | `string` | Display label for the action. |
| `formState` | `Record<string, any> \| undefined` | Raw field state at time of action. |
| `formName` | `string \| undefined` | Form that scoped the action, if any. |

### [Built-in action types](https://www.openui.com/docs/openui-lang/interactivity#built-in-action-types)

    // Dispatched via onAction callback
    enum BuiltinActionType {
      ContinueConversation = "continue_conversation",
      OpenUrl = "open_url",
    }

*   `ContinueConversation`: sends the user's intent back to the LLM (`@ToAssistant`).
*   `OpenUrl`: opens a URL in a new tab (`@OpenUrl`).

The following action steps are handled internally by the runtime (not dispatched to `onAction`):

*   `@Run(ref)`: executes a Mutation or re-fetches a Query
*   `@Set($var, value)`: changes a reactive `$variable`
*   `@Reset($var1, $var2)`: restores `$variables` to their declared defaults

In openui-lang, actions are composed with `Action([...])`:

    submitBtn = Button("Create", Action([@Run(createResult), @Run(tickets), @Reset($title)]))

See [Reactive State](https://www.openui.com/docs/openui-lang/reactive-state)
 for `$variables` and [Queries & Mutations](https://www.openui.com/docs/openui-lang/queries-mutations)
 for `@Run`.

### [Inline mode](https://www.openui.com/docs/openui-lang/interactivity#inline-mode)

When `inlineMode` is enabled in the prompt config, the LLM can respond with either:

*   **Code** (fenced in triple backticks), for creating or changing the UI
*   **Text only**, for answering questions without modifying the UI

The parser extracts code from fences automatically. Text outside fences is shown as chat.

### [Using `triggerAction` in components](https://www.openui.com/docs/openui-lang/interactivity#using-triggeraction-in-components)

Inside `defineComponent`, use the `useTriggerAction` hook:

    const MyButton = defineComponent({
      name: "MyButton",
      description: "A clickable button.",
      props: z.object({ label: z.string() }),
      component: ({ props }) => {
        const triggerAction = useTriggerAction();
        return <button onClick={() => triggerAction(props.label)}>{props.label}</button>;
      },
    });

`triggerAction(userMessage, formName?, action?)` accepts optional second and third arguments.

* * *

[Reactive state (`$variables`)](https://www.openui.com/docs/openui-lang/interactivity#reactive-state-variables)

----------------------------------------------------------------------------------------------------------------

In openui-lang, `$variables` create reactive state that components can read and write. When the LLM generates `$days = "7"` and passes it to a Select, the runtime creates a two-way binding automatically.

For component authors building custom libraries, the `useStateField` hook provides this binding:

    import { useStateField, reactive } from "@openuidev/react-lang";
    
    const MySelect = defineComponent({
      name: "MySelect",
      props: z.object({
        name: z.string(),
        value: reactive(z.string().optional()), // reactive() marks this prop as accepting $variable binding
        items: z.array(SelectItem.ref),
      }),
      component: ({ props }) => {
        const field = useStateField(props.name, props.value);
        // field.value — current value (reads from $variable or form state)
        // field.setValue(val) — updates the $variable and triggers re-evaluation
        return (
          <select value={field.value ?? ""} onChange={(e) => field.setValue(e.target.value)}>
            {/* ... */}
          </select>
        );
      },
    });

`useStateField` unifies form state and reactive `$variable` binding. When the prop is a `$variable`, `setValue` updates the store and triggers all dependent queries and expressions to re-evaluate.

See [Reactive State](https://www.openui.com/docs/openui-lang/reactive-state)
 for the language-level documentation.

* * *

[Form state](https://www.openui.com/docs/openui-lang/interactivity#form-state)

-------------------------------------------------------------------------------

The `Renderer` tracks field values automatically. Components use `useStateField` (preferred) or the lower-level `useSetFieldValue` and `useGetFieldValue` to read and write state.

### [Persistence](https://www.openui.com/docs/openui-lang/interactivity#persistence)

Use `onStateUpdate` to persist field state (e.g. to a message in your thread store) and `initialState` to hydrate it on load.

    <Renderer
      library={myLibrary}
      response={content}
      onStateUpdate={(state) => {
        // state is a raw Record<string, any> of all field values
        saveToBackend(state);
      }}
      initialState={loadedState}
    />

`onStateUpdate` fires on every field change. The state format is opaque, so persist and hydrate it as-is.

### [Field hooks](https://www.openui.com/docs/openui-lang/interactivity#field-hooks)

Use these inside `defineComponent` renderers:

| Hook | Signature | Description |
| --- | --- | --- |
| `useStateField` | `(name: string, value?: unknown) => { value: unknown, setValue: (v: unknown) => void }` | **Preferred.** Unified form state + reactive `$variable` binding. |
| `useGetFieldValue` | `(formName: string \| undefined, name: string) => any` | Read a field's current value. |
| `useSetFieldValue` | `(formName: string \| undefined, componentType: string \| undefined, name: string, value: any, shouldTriggerSaveCallback?: boolean) => void` | Write a field value. |
| `useFormName` | `() => string \| undefined` | Get the enclosing form's name. |
| `useSetDefaultValue` | `(options: { formName?, componentType, name, existingValue, defaultValue, shouldTriggerSaveCallback? }) => void` | Set a default if no value exists. |

* * *

[Validation](https://www.openui.com/docs/openui-lang/interactivity#validation)

-------------------------------------------------------------------------------

Form fields can declare validation rules. The `Form` component provides a validation context via `useFormValidation`.

    interface FormValidationContextValue {
      errors: Record<string, string | undefined>;
      validateField: (name: string, value: unknown, rules: ParsedRule[]) => boolean;
      registerField: (name: string, rules: ParsedRule[], getValue: () => unknown) => void;
      unregisterField: (name: string) => void;
      validateForm: () => boolean;
      clearFieldError: (name: string) => void;
    }

Built-in validators include `required`, `minLength`, `maxLength`, `min`, `max`, `pattern`, and `email`. Custom validators can be added via `builtInValidators`.

* * *

[The Renderer\
\
Parse and render OpenUI Lang streams in React.](https://www.openui.com/docs/openui-lang/renderer)
[Architecture\
\
Build dashboards, CRUD interfaces, and monitoring tools. The LLM generates the UI once, then your app runs independently.](https://www.openui.com/docs/openui-lang/how-it-works)

### On this page

[Actions](https://www.openui.com/docs/openui-lang/interactivity#actions)
[`ActionEvent`](https://www.openui.com/docs/openui-lang/interactivity#actionevent)
[Built-in action types](https://www.openui.com/docs/openui-lang/interactivity#built-in-action-types)
[Inline mode](https://www.openui.com/docs/openui-lang/interactivity#inline-mode)
[Using `triggerAction` in components](https://www.openui.com/docs/openui-lang/interactivity#using-triggeraction-in-components)
[Reactive state (`$variables`)](https://www.openui.com/docs/openui-lang/interactivity#reactive-state-variables)
[Form state](https://www.openui.com/docs/openui-lang/interactivity#form-state)
[Persistence](https://www.openui.com/docs/openui-lang/interactivity#persistence)
[Field hooks](https://www.openui.com/docs/openui-lang/interactivity#field-hooks)
[Validation](https://www.openui.com/docs/openui-lang/interactivity#validation)

---

# Defining Components | OpenUI - The Open Standard for Generative UI

Defining Components
===================

Define OpenUI components with Zod and React renderers.

Copy MarkdownOpen

Use `defineComponent(...)` to register each component and `createLibrary(...)` to assemble the library.

[Core API](https://www.openui.com/docs/openui-lang/defining-components#core-api)

---------------------------------------------------------------------------------

    import { defineComponent, createLibrary } from "@openuidev/react-lang";
    import { z } from "zod/v4";
    
    const StatCard = defineComponent({
      name: "StatCard",
      description: "Displays a metric label and value.",
      props: z.object({
        label: z.string(),
        value: z.string(),
      }),
      component: ({ props }) => (
        <div>
          <strong>{props.label}</strong>
          <div>{props.value}</div>
        </div>
      ),
    });
    
    export const myLibrary = createLibrary({
      root: "StatCard",
      components: [StatCard],
    });

If you want one import path that works with both `zod@3.25.x` and `zod@4`, use `import { z } from "zod/v4"` for OpenUI component schemas.

[Required fields in `defineComponent`](https://www.openui.com/docs/openui-lang/defining-components#required-fields-in-definecomponent)

---------------------------------------------------------------------------------------------------------------------------------------

1.  `name`: component call name in OpenUI Lang.
2.  `props`: `z.object(...)` schema. Key order defines positional argument order.
3.  `description`: used in prompt component signature lines.
4.  `component`: React renderer receiving `{ props, renderNode }`.

[Nesting pattern with `.ref`](https://www.openui.com/docs/openui-lang/defining-components#nesting-pattern-with-ref)

--------------------------------------------------------------------------------------------------------------------

    import { defineComponent } from "@openuidev/react-lang";
    import { z } from "zod/v4";
    
    const Item = defineComponent({
      name: "Item",
      description: "Simple item",
      props: z.object({ label: z.string() }),
      component: ({ props }) => <div>{props.label}</div>,
    });
    
    const List = defineComponent({
      name: "List",
      description: "List of items",
      props: z.object({
        items: z.array(Item.ref),
      }),
      component: ({ props, renderNode }) => <div>{renderNode(props.items)}</div>,
    });

[Union multiple component types pattern](https://www.openui.com/docs/openui-lang/defining-components#union-multiple-component-types-pattern)

---------------------------------------------------------------------------------------------------------------------------------------------

To define container components that accepts multiple child components, you can use the `z.union` function to define the child components.

    import { defineComponent } from "@openuidev/react-lang";
    import { z } from "zod/v4";
    
    const TextBlock = defineComponent({
      /* ... */
    });
    const CalloutBlock = defineComponent({
      /* ... */
    });
    
    const TabItemSchema = z.object({
      value: z.string(),
      trigger: z.string(),
      content: z.array(z.union([TextBlock.ref, CalloutBlock.ref])),
    });

[Naming reusable helper schemas](https://www.openui.com/docs/openui-lang/defining-components#naming-reusable-helper-schemas)

-----------------------------------------------------------------------------------------------------------------------------

Use `tagSchemaId(...)` when a prop uses a standalone helper schema and you want a readable name in generated prompt signatures instead of `any`.

    import { defineComponent, tagSchemaId } from "@openuidev/react-lang";
    import { z } from "zod/v4";
    
    const ActionExpression = z.any();
    tagSchemaId(ActionExpression, "ActionExpression");
    
    const Button = defineComponent({
      name: "Button",
      description: "Triggers an action",
      props: z.object({
        label: z.string(),
        action: ActionExpression.optional(),
      }),
      component: ({ props }) => <button>{props.label}</button>,
    });

Without `tagSchemaId(...)`, the generated prompt would fall back to `action?: any`. Components already get their names automatically through `defineComponent(...)`, so this is only needed for non-component helper schemas.

[The `root` field](https://www.openui.com/docs/openui-lang/defining-components#the-root-field)

-----------------------------------------------------------------------------------------------

The `root` option in `createLibrary` specifies which component the LLM must use as the entry point. The generated system prompt instructs the model to always start with `root = <RootName>(...)`.

    const library = createLibrary({
      root: "Stack", // → prompt tells LLM: "every program must define root = Stack(...)"
      components: [Stack, Card, TextContent],
    });

This serves two purposes:

1.  **Constrains the LLM**: the model always wraps its output in a known top-level component, making output predictable.
2.  **Enables streaming**: because the root statement comes first, the UI shell renders immediately while child components stream in.

The `root` must match the `name` of one of the components in your library. If omitted, the prompt uses "Root" as a placeholder.

For the built-in libraries: `openuiLibrary` uses `Stack` (flexible layout container), while `openuiChatLibrary` uses `Card` (vertical container optimized for chat responses).

[Notes on schema metadata](https://www.openui.com/docs/openui-lang/defining-components#notes-on-schema-metadata)

-----------------------------------------------------------------------------------------------------------------

*   Positional mapping is driven by Zod object key order.
*   Required/optional state is used by parser validation.

[Grouping components in prompt output](https://www.openui.com/docs/openui-lang/defining-components#grouping-components-in-prompt-output)

-----------------------------------------------------------------------------------------------------------------------------------------

    const library = createLibrary({
      root: "Stack",
      components: [\
        /* ... */\
      ],
      componentGroups: [\
        { name: "Forms", components: ["Form", "FormControl", "Input", "Button", "Buttons"] },\
      ],
    });

### [Why group components?](https://www.openui.com/docs/openui-lang/defining-components#why-group-components)

`componentGroups` organize the generated system prompt into named sections (e.g., Layout, Forms, Charts). This helps the LLM locate relevant components quickly instead of scanning a flat list. Without groups, all component signatures appear under a single "Ungrouped" heading.

Groups also let you co-locate related components so the LLM understands which components work together (e.g., `Form` with `FormControl`, `Input`, `Select`).

### [Adding group notes](https://www.openui.com/docs/openui-lang/defining-components#adding-group-notes)

Each group can include a `notes` array. These strings are appended directly after the group's component signatures in the generated prompt. Use notes to give the LLM usage hints and constraints:

    componentGroups: [\
      {\
        name: "Forms",\
        components: ["Form", "FormControl", "Input", "TextArea", "Select"],\
        notes: [\
          "- Define EACH FormControl as its own reference for progressive streaming.",\
          "- NEVER nest Form inside Form.",\
          "- Form requires explicit buttons: Form(name, buttons, fields).",\
        ],\
      },\
      {\
        name: "Layout",\
        components: ["Stack", "Tabs", "TabItem", "Accordion", "AccordionItem"],\
        notes: [\
          '- For grid-like layouts, use Stack with direction "row" and wrap=true.',\
        ],\
      },\
    ],

Notes appear in the prompt output like this:

    ### Forms
    Form(id: string, buttons: Buttons, controls: FormControl[]) — Form container
    FormControl(label: string, field: Input | TextArea | Select) — Single field
    ...
    - Define EACH FormControl as its own reference for progressive streaming.
    - NEVER nest Form inside Form.
    - Form requires explicit buttons: Form(name, buttons, fields).

### [Prompt options](https://www.openui.com/docs/openui-lang/defining-components#prompt-options)

When generating the system prompt, you can pass `PromptOptions` to customize the output further:

    import type { PromptOptions } from "@openuidev/react-lang";
    
    const options: PromptOptions = {
      preamble: "You are an assistant that outputs only OpenUI Lang.",
      additionalRules: ["Always use Card as the root for chat responses."],
      examples: [`root = Stack([title])\ntitle = TextContent("Hello", "large-heavy")`],
    };
    
    const prompt = library.prompt(options);

See [System Prompts](https://www.openui.com/docs/openui-lang/system-prompts)
 for full details on prompt generation.

[Best practices for LLM generation](https://www.openui.com/docs/openui-lang/defining-components#best-practices-for-llm-generation)

-----------------------------------------------------------------------------------------------------------------------------------

Since LLMs are the ones writing OpenUI Lang, component design choices directly affect generation quality.

### [Keep schemas flat](https://www.openui.com/docs/openui-lang/defining-components#keep-schemas-flat)

Deeply nested object props burn tokens and increase error rates. Prefer multiple simple components over one deeply nested one.

### [Order Zod keys deliberately](https://www.openui.com/docs/openui-lang/defining-components#order-zod-keys-deliberately)

Required props first, optional props last. The most important or distinctive prop should be position 0, since the LLM sees it first during generation.

### [Use descriptive component names](https://www.openui.com/docs/openui-lang/defining-components#use-descriptive-component-names)

The LLM picks components by name. `PricingTable` is clearer than `Table3`. The `description` field reinforces this.

### [Limit library size](https://www.openui.com/docs/openui-lang/defining-components#limit-library-size)

Every component adds to the system prompt. Include only components the LLM actually needs for the use case. Fewer components means less confusion and better output.

### [Use `.ref` for composition, not deep nesting](https://www.openui.com/docs/openui-lang/defining-components#use-ref-for-composition-not-deep-nesting)

`z.array(ChildComponent.ref)` is the idiomatic way to compose. The LLM generates each child as a separate line, which streams and validates independently.

### [Provide examples in `PromptOptions`](https://www.openui.com/docs/openui-lang/defining-components#provide-examples-in-promptoptions)

One or two concrete examples dramatically improve output quality, especially for complex or unusual component shapes. See [System Prompts](https://www.openui.com/docs/openui-lang/system-prompts)
 for details.

### [Use `componentGroups` with notes](https://www.openui.com/docs/openui-lang/defining-components#use-componentgroups-with-notes)

Group related components and add notes like "Use BarChart for comparisons, LineChart for trends" to guide the LLM's choices. See [Grouping components](https://www.openui.com/docs/openui-lang/defining-components#grouping-components-in-prompt-output)
 above.

[Overview\
\
Key building blocks of the OpenUI framework and the built-in component libraries.](https://www.openui.com/docs/openui-lang/overview)
[System Prompts\
\
Generate and customize prompt instructions from your OpenUI library.](https://www.openui.com/docs/openui-lang/system-prompts)

### On this page

[Core API](https://www.openui.com/docs/openui-lang/defining-components#core-api)
[Required fields in `defineComponent`](https://www.openui.com/docs/openui-lang/defining-components#required-fields-in-definecomponent)
[Nesting pattern with `.ref`](https://www.openui.com/docs/openui-lang/defining-components#nesting-pattern-with-ref)
[Union multiple component types pattern](https://www.openui.com/docs/openui-lang/defining-components#union-multiple-component-types-pattern)
[Naming reusable helper schemas](https://www.openui.com/docs/openui-lang/defining-components#naming-reusable-helper-schemas)
[The `root` field](https://www.openui.com/docs/openui-lang/defining-components#the-root-field)
[Notes on schema metadata](https://www.openui.com/docs/openui-lang/defining-components#notes-on-schema-metadata)
[Grouping components in prompt output](https://www.openui.com/docs/openui-lang/defining-components#grouping-components-in-prompt-output)
[Why group components?](https://www.openui.com/docs/openui-lang/defining-components#why-group-components)
[Adding group notes](https://www.openui.com/docs/openui-lang/defining-components#adding-group-notes)
[Prompt options](https://www.openui.com/docs/openui-lang/defining-components#prompt-options)
[Best practices for LLM generation](https://www.openui.com/docs/openui-lang/defining-components#best-practices-for-llm-generation)
[Keep schemas flat](https://www.openui.com/docs/openui-lang/defining-components#keep-schemas-flat)
[Order Zod keys deliberately](https://www.openui.com/docs/openui-lang/defining-components#order-zod-keys-deliberately)
[Use descriptive component names](https://www.openui.com/docs/openui-lang/defining-components#use-descriptive-component-names)
[Limit library size](https://www.openui.com/docs/openui-lang/defining-components#limit-library-size)
[Use `.ref` for composition, not deep nesting](https://www.openui.com/docs/openui-lang/defining-components#use-ref-for-composition-not-deep-nesting)
[Provide examples in `PromptOptions`](https://www.openui.com/docs/openui-lang/defining-components#provide-examples-in-promptoptions)
[Use `componentGroups` with notes](https://www.openui.com/docs/openui-lang/defining-components#use-componentgroups-with-notes)

---

# Queries & Mutations | OpenUI - The Open Standard for Generative UI

Queries & Mutations
===================

Fetch and write data from your tools - the LLM generates the wiring, the runtime executes it.

Copy MarkdownOpen

![Data flow: openui-lang code → Runtime → Your Tools → Live data back to components](https://www.openui.com/images/openui-lang/query-flow.png)

OpenUI Lang connects to your backend through **tools**. A tool is any function your server exposes (a database query, an API call, a calculation). The LLM generates `Query` and `Mutation` statements that call these tools. The runtime executes them directly and feeds the results into your UI.

[Reading data with Query](https://www.openui.com/docs/openui-lang/queries-mutations#reading-data-with-query)

-------------------------------------------------------------------------------------------------------------

    data = Query("list_tickets", {}, {rows: []})

What each argument means:

1.  `"list_tickets"` - the tool name (matches what your server exposes)
2.  `{}` - arguments to pass to the tool
3.  `{rows: []}` - default value (what renders before the tool responds)

The default value is important - it lets the UI render immediately while data loads.

[Using Query results](https://www.openui.com/docs/openui-lang/queries-mutations#using-query-results)

-----------------------------------------------------------------------------------------------------

Query results are just data. Access fields with dot notation:

    tbl = Table([Col("Title", data.rows.title), Col("Status", data.rows.status)])
    chart = LineChart(data.rows.day, [Series("Views", data.rows.views)])

`data.rows.title` extracts the `title` field from every row - like a column pluck.

### [Reactive queries](https://www.openui.com/docs/openui-lang/queries-mutations#reactive-queries)

Pass a `$variable` in the query args - the query re-runs when the variable changes:

    $days = "7"
    data = Query("analytics", {days: $days}, {rows: []})
    filter = Select("days", $days, [SelectItem("7", "7 days"), SelectItem("30", "30 days")])

User picks "30" → `$days` updates → Query re-fetches with `{days: "30"}` → chart updates.

### [Auto-refresh](https://www.openui.com/docs/openui-lang/queries-mutations#auto-refresh)

Add a fourth argument for periodic refresh (in seconds):

    health = Query("get_server_health", {}, {cpu: 0, memory: 0}, 30)

This re-fetches every 30 seconds - great for monitoring dashboards.

[Writing data with Mutation](https://www.openui.com/docs/openui-lang/queries-mutations#writing-data-with-mutation)

-------------------------------------------------------------------------------------------------------------------

    createResult = Mutation("create_ticket", {title: $title, priority: $priority})

Mutations are NOT executed on page load. They only run when triggered by `@Run`:

    submitBtn = Button("Create", Action([@Run(createResult), @Run(tickets), @Reset($title)]))

This button does three things in order:

1.  `@Run(createResult)` - executes the mutation (creates the ticket)
2.  `@Run(tickets)` - re-fetches the tickets query (refreshes the table)
3.  `@Reset($title)` - clears the form

### [Error handling](https://www.openui.com/docs/openui-lang/queries-mutations#error-handling)

Check `result.status` for mutation feedback:

    createResult.status == "error" ? Callout("error", "Failed", createResult.error) : null
    createResult.status == "success" ? Callout("success", "Created", "Ticket added.") : null

[How tools connect to the runtime](https://www.openui.com/docs/openui-lang/queries-mutations#how-tools-connect-to-the-runtime)

-------------------------------------------------------------------------------------------------------------------------------

The Renderer accepts a `toolProvider` prop that handles tool execution. Pass a function map or an [MCP](https://modelcontextprotocol.io/docs/getting-started/intro)
 client:

    // Function map
    <Renderer toolProvider={{
      list_tickets: async (args) => fetch('/api/tickets').then(r => r.json()),
    }} response={code} library={library} />
    
    // Or an MCP client
    <Renderer toolProvider={mcpClient} response={code} library={library} />

[Reactive State\
\
Make your UI interactive with $variables that update automatically.](https://www.openui.com/docs/openui-lang/reactive-state)
[Incremental Editing\
\
Edit existing UIs efficiently - the LLM patches only what changed, the parser merges it.](https://www.openui.com/docs/openui-lang/incremental-editing)

### On this page

[Reading data with Query](https://www.openui.com/docs/openui-lang/queries-mutations#reading-data-with-query)
[Using Query results](https://www.openui.com/docs/openui-lang/queries-mutations#using-query-results)
[Reactive queries](https://www.openui.com/docs/openui-lang/queries-mutations#reactive-queries)
[Auto-refresh](https://www.openui.com/docs/openui-lang/queries-mutations#auto-refresh)
[Writing data with Mutation](https://www.openui.com/docs/openui-lang/queries-mutations#writing-data-with-mutation)
[Error handling](https://www.openui.com/docs/openui-lang/queries-mutations#error-handling)
[How tools connect to the runtime](https://www.openui.com/docs/openui-lang/queries-mutations#how-tools-connect-to-the-runtime)

---

# Patterns | OpenUI - The Open Standard for Generative UI

Patterns
========

Complete examples showing how Query, $variables, @builtins, and actions compose together.

Copy MarkdownOpen

Real dashboards combine multiple features. These patterns show complete, copy-paste-ready openui-lang snippets using the built-in `openuiLibrary` components (Stack, Card, Table, etc.). The openui-lang code works the same with any custom library, just swap the component names to match your own definitions.

[Searchable, sortable table](https://www.openui.com/docs/openui-lang/patterns#searchable-sortable-table)

---------------------------------------------------------------------------------------------------------

A text input filters rows, a dropdown sorts them. Both are reactive.

    $search = ""
    $sortBy = "stars"
    data = Query("get_repos", {}, {rows: []})
    filtered = @Filter(data.rows, "name", "contains", $search)
    sorted = @Sort(filtered, $sortBy, "desc")
    searchBox = FormControl("Search", Input("search", "Filter repos...", "text", null, $search))
    sortSelect = FormControl("Sort by", Select("sortBy", [SelectItem("stars", "Stars"), SelectItem("forks", "Forks"), SelectItem("updated", "Recent")], null, null, $sortBy))
    controls = Stack([searchBox, sortSelect], "row", "m")
    tbl = Table([Col("Name", sorted.name), Col("Stars", sorted.stars, "number"), Col("Forks", sorted.forks, "number")])
    emptyState = @Count(filtered) > 0 ? tbl : TextContent("No results match your search.")
    root = Stack([CardHeader("Repositories"), controls, emptyState])

What's happening:

*   `$search` binds to the Input. User types, `@Filter` re-evaluates, table updates.
*   `$sortBy` binds to the Select. User picks a field, `@Sort` re-evaluates.
*   `@Count(filtered) > 0` shows an empty state when nothing matches.

[CRUD with edit modal](https://www.openui.com/docs/openui-lang/patterns#crud-with-edit-modal)

----------------------------------------------------------------------------------------------

Create tickets with a form, edit them in a modal, refresh the table after each action.

    $title = ""
    $priority = "medium"
    $showEdit = false
    $editId = ""
    $editTitle = ""
    $editPriority = "medium"
    createResult = Mutation("create_ticket", {title: $title, priority: $priority})
    updateResult = Mutation("update_ticket", {id: $editId, title: $editTitle, priority: $editPriority})
    tickets = Query("list_tickets", {}, {rows: []})
    createBtn = Button("Create", Action([@Run(createResult), @Run(tickets), @Reset($title, $priority)]))
    createForm = Form("create", createBtn, [\
      FormControl("Title", Input("title", "Ticket title", "text", {required: true}, $title)),\
      FormControl("Priority", Select("priority", [SelectItem("low", "Low"), SelectItem("medium", "Medium"), SelectItem("high", "High")], null, null, $priority))\
    ])
    tbl = Table([\
      Col("Title", tickets.rows.title),\
      Col("Priority", @Each(tickets.rows, "t", Tag(t.priority, null, "sm", t.priority == "high" ? "danger" : "neutral"))),\
      Col("Edit", @Each(tickets.rows, "t", Button("Edit", Action([@Set($editId, t.id), @Set($editTitle, t.title), @Set($editPriority, t.priority), @Set($showEdit, true)]), "secondary", "normal", "small")))\
    ])
    saveBtn = Button("Save", Action([@Run(updateResult), @Run(tickets), @Set($showEdit, false)]), "primary")
    cancelBtn = Button("Cancel", Action([@Set($showEdit, false)]), "secondary")
    editForm = Form("edit", Buttons([saveBtn, cancelBtn]), [\
      FormControl("Title", Input("editTitle", "", "text", {required: true}, $editTitle)),\
      FormControl("Priority", Select("editPriority", [SelectItem("low", "Low"), SelectItem("medium", "Medium"), SelectItem("high", "High")], null, null, $editPriority))\
    ])
    editModal = Modal("Edit Ticket", $showEdit, [editForm])
    root = Stack([CardHeader("Tickets"), createForm, tbl, editModal])

What's happening:

*   Create form uses `Mutation` + `@Run` + `@Reset` to create and clear.
*   Edit button uses `@Set` to populate modal fields and open it.
*   Save button runs the update mutation, refreshes the query, and closes the modal.
*   `@Each` renders per-row Tag colors and Edit buttons.

[Dashboard with KPI cards](https://www.openui.com/docs/openui-lang/patterns#dashboard-with-kpi-cards)

------------------------------------------------------------------------------------------------------

Aggregate query results into KPI cards using `@Count`, `@Sum`, and `@Filter`.

    $days = "7"
    data = Query("get_usage_metrics", {days: $days}, {totalEvents: 0, totalUsers: 0, data: []})
    filter = FormControl("Date Range", Select("days", [SelectItem("7", "7 days"), SelectItem("14", "14 days"), SelectItem("30", "30 days")], null, null, $days))
    kpiRow = Stack([\
      Card([TextContent("Events", "small"), TextContent("" + data.totalEvents, "large-heavy")]),\
      Card([TextContent("Users", "small"), TextContent("" + data.totalUsers, "large-heavy")]),\
      Card([TextContent("Avg/Day", "small"), TextContent("" + @Round(@Avg(data.data.events), 0), "large-heavy")])\
    ], "row", "m", "stretch", "start", true)
    chart = Card([CardHeader("Daily Trend"), LineChart(data.data.day, [Series("Events", data.data.events), Series("Users", data.data.users)])])
    root = Stack([CardHeader("Analytics"), filter, kpiRow, chart])

What's happening:

*   One `$days` variable drives the Query args. Changing the Select re-fetches everything.
*   KPIs use direct field access (`data.totalEvents`) and computed values (`@Round(@Avg(...))`).
*   The chart uses array pluck (`data.data.day`) to extract columns from the query result.

[Auto-refresh monitoring](https://www.openui.com/docs/openui-lang/patterns#auto-refresh-monitoring)

----------------------------------------------------------------------------------------------------

The 4th argument to `Query` sets a refresh interval in seconds.

    health = Query("get_server_health", {}, {cpu: 0, memory: 0, latencyP95: 0, errorRate: 0, timeseries: []}, 30)
    kpiRow = Stack([\
      Card([TextContent("CPU", "small"), TextContent("" + @Round(health.cpu, 1) + "%", "large-heavy")]),\
      Card([TextContent("Memory", "small"), TextContent("" + @Round(health.memory, 1) + "%", "large-heavy")]),\
      Card([TextContent("P95 Latency", "small"), TextContent("" + health.latencyP95 + "ms", "large-heavy")]),\
      Card([TextContent("Error Rate", "small"), TextContent("" + @Round(health.errorRate, 2) + "%", "large-heavy")])\
    ], "row", "m", "stretch", "start", true)
    chart = Card([CardHeader("24h Trend"), LineChart(health.timeseries.time, [Series("CPU", health.timeseries.cpu), Series("Memory", health.timeseries.memory)])])
    refreshBtn = Button("Refresh Now", Action([@Run(health)]), "secondary")
    root = Stack([CardHeader("Server Health"), refreshBtn, kpiRow, chart])

What's happening:

*   `Query(..., 30)` re-fetches every 30 seconds automatically.
*   `@Run(health)` on the button triggers an immediate manual refresh.
*   KPIs use `@Round` for clean number formatting.

[Shared filter across tabs](https://www.openui.com/docs/openui-lang/patterns#shared-filter-across-tabs)

--------------------------------------------------------------------------------------------------------

One `$days` variable works across all tab content because tabs share the same reactive scope.

    $days = "7"
    filter = FormControl("Date Range", Select("days", [SelectItem("7", "7 days"), SelectItem("14", "14 days"), SelectItem("30", "30 days")], null, null, $days))
    usage = Query("get_usage_metrics", {days: $days}, {data: []})
    endpoints = Query("get_top_endpoints", {days: $days}, {endpoints: []})
    overviewTab = TabItem("overview", "Overview", [\
      LineChart(usage.data.day, [Series("Events", usage.data.events)])\
    ])
    endpointsTab = TabItem("endpoints", "Top Endpoints", [\
      Table([Col("Path", endpoints.endpoints.path), Col("Requests", endpoints.endpoints.requests, "number"), Col("Latency", endpoints.endpoints.avgLatency, "number")])\
    ])
    tabs = Tabs([overviewTab, endpointsTab])
    root = Stack([CardHeader("Dashboard"), filter, tabs])

What's happening:

*   Both `usage` and `endpoints` queries reference `$days` in their args.
*   Changing the filter re-fetches both queries, updating both tabs.
*   Each tab renders different data but shares the same reactive variable.

[Built-in Functions\
\
Transform, filter, and aggregate data with @-prefixed built-in functions.](https://www.openui.com/docs/openui-lang/builtins)
[v0.1\
\
The original OpenUI Lang specification for declarative UI generation in chat responses.](https://www.openui.com/docs/openui-lang/specification-v01)

### On this page

[Searchable, sortable table](https://www.openui.com/docs/openui-lang/patterns#searchable-sortable-table)
[CRUD with edit modal](https://www.openui.com/docs/openui-lang/patterns#crud-with-edit-modal)
[Dashboard with KPI cards](https://www.openui.com/docs/openui-lang/patterns#dashboard-with-kpi-cards)
[Auto-refresh monitoring](https://www.openui.com/docs/openui-lang/patterns#auto-refresh-monitoring)
[Shared filter across tabs](https://www.openui.com/docs/openui-lang/patterns#shared-filter-across-tabs)

---

# Incremental Editing | OpenUI - The Open Standard for Generative UI

Incremental Editing
===================

Edit existing UIs efficiently - the LLM patches only what changed, the parser merges it.

Copy MarkdownOpen

When a user says "add a pie chart" to an existing dashboard, the LLM doesn't regenerate everything. It outputs only the changed and new statements. The parser merges them into the existing code.

[How it works](https://www.openui.com/docs/openui-lang/incremental-editing#how-it-works)

-----------------------------------------------------------------------------------------

     Before (4 statements):                After merge (5 statements):
    
     root = Stack([header, tbl])           root = Stack([header, chart, tbl])  ← replaced
     header = CardHeader("Tickets")        header = CardHeader("Tickets")      ← kept
     tickets = Query("list_tickets",...)   tickets = Query("list_tickets",...) ← kept
     tbl = Table([...])                    tbl = Table([...])                  ← kept
                                           chart = PieChart(...)               ← added
    
     LLM only output 2 lines (root + chart). Parser merged by name.

**Initial generation** - LLM outputs full code:

    root = Stack([header, tbl])
    header = CardHeader("Tickets")
    tickets = Query("list_tickets", {}, {rows: []})
    tbl = Table([Col("Title", tickets.rows.title), Col("Status", tickets.rows.status)])

**User says:** _"add a pie chart showing ticket status breakdown"_

**LLM outputs only the patch:**

    root = Stack([header, chart, tbl])
    chart = PieChart(["Open", "Closed"], [\
      @Count(@Filter(tickets.rows, "status", "==", "open")),\
      @Count(@Filter(tickets.rows, "status", "==", "closed"))\
    ], "donut")

The parser merges by statement name:

*   `root` is redefined → new definition wins (now includes `chart`)
*   `chart` is new → added
*   `header`, `tickets`, `tbl` → kept from original (not in the patch, so unchanged)

[Merge rules](https://www.openui.com/docs/openui-lang/incremental-editing#merge-rules)

---------------------------------------------------------------------------------------

*   **Same name** → new definition replaces old
*   **New name** → added to the program
*   **Missing from patch** → kept from original (not deleted)
*   **Explicit deletion** → remove a statement from the `root` children list, it becomes unreachable and gets garbage-collected

[Why this matters](https://www.openui.com/docs/openui-lang/incremental-editing#why-this-matters)

-------------------------------------------------------------------------------------------------

*   **Fewer tokens** - LLM outputs 2-3 lines instead of regenerating 20+
*   **Faster** - less to stream, less to parse
*   **Preserves context** - existing queries, state, and bindings stay intact
*   **Works with streaming** - each patched line renders as it arrives

Full regeneration: 20 statements, ~400 tokens, ~2s streaming. Incremental patch: 2 statements, ~60 tokens, ~0.3s streaming. Same result, up to **85% fewer tokens**.

[Enabling edit mode](https://www.openui.com/docs/openui-lang/incremental-editing#enabling-edit-mode)

-----------------------------------------------------------------------------------------------------

Two flags control this behavior in your prompt config:

    const config: PromptSpec = {
      ...componentSpec,
      editMode: true, // LLM outputs patches instead of full regenerations
      inlineMode: true, // LLM can mix text and code in the same response
    };

**`editMode`** tells the LLM it can output partial patches. Without it, the LLM regenerates the entire UI on every turn, even for small changes. With it enabled, the LLM only outputs the statements that changed or were added.

**`inlineMode`** lets the LLM respond with explanation text alongside the code. The parser extracts code from fenced blocks (` ```openui-lang `) and ignores everything else. This way the LLM can say "I added a pie chart for the status breakdown" before the patch, which gives the user context about what changed.

Both flags are passed to `generatePrompt()` via your `PromptSpec`. See [System Prompts](https://www.openui.com/docs/openui-lang/system-prompts)
 for the full reference.

[Queries & Mutations\
\
Fetch and write data from your tools - the LLM generates the wiring, the runtime executes it.](https://www.openui.com/docs/openui-lang/queries-mutations)
[Built-in Functions\
\
Transform, filter, and aggregate data with @-prefixed built-in functions.](https://www.openui.com/docs/openui-lang/builtins)

### On this page

[How it works](https://www.openui.com/docs/openui-lang/incremental-editing#how-it-works)
[Merge rules](https://www.openui.com/docs/openui-lang/incremental-editing#merge-rules)
[Why this matters](https://www.openui.com/docs/openui-lang/incremental-editing#why-this-matters)
[Enabling edit mode](https://www.openui.com/docs/openui-lang/incremental-editing#enabling-edit-mode)

---

# Quick Start | OpenUI - The Open Standard for Generative UI

Quick Start
===========

Bootstrap a GenUI chat app in under a minute.

Copy MarkdownOpen

[Create the app](https://www.openui.com/docs/openui-lang/quickstart#create-the-app)

------------------------------------------------------------------------------------

    npx @openuidev/cli@latest create --name genui-chat-app
    cd genui-chat-app

[Add your API key](https://www.openui.com/docs/openui-lang/quickstart#add-your-api-key)

----------------------------------------------------------------------------------------

The generated app uses OpenAI by default, but works with any OpenAI-compatible provider (e.g., OpenRouter, Azure OpenAI, Anthropic via proxy).

    echo "OPENAI_API_KEY=sk-your-key-here" > .env

[Start the dev server](https://www.openui.com/docs/openui-lang/quickstart#start-the-dev-server)

------------------------------------------------------------------------------------------------

    npm run dev

[What's included](https://www.openui.com/docs/openui-lang/quickstart#whats-included)

-------------------------------------------------------------------------------------

The CLI generates a Next.js app with everything wired up:

    src/
      app/
        page.tsx          # FullScreen chat layout with the built-in component library
        api/chat/
          route.ts        # Backend route with OpenAI streaming + example tools
      library.ts          # Re-exports openuiChatLibrary and openuiChatPromptOptions
      generated/
        system-prompt.txt  # Auto-generated at build time via `openui generate`

*   **`page.tsx`**: Renders the `FullScreen` chat layout with `openuiChatLibrary` for Generative UI rendering and `openAIAdapter()` for streaming.
*   **`route.ts`**: A backend API route that sends the system prompt to the LLM and streams the response back.
*   **`library.ts`**: Your component library entrypoint. The `openui generate` CLI reads this file to produce the system prompt.

The `dev` and `build` scripts automatically regenerate the system prompt before starting:

    "generate:prompt": "openui generate src/library.ts --out src/generated/system-prompt.txt",
    "dev": "pnpm generate:prompt && next dev"

[Introduction\
\
Previous Page](https://www.openui.com/docs/openui-lang)
[Overview\
\
Key building blocks of the OpenUI framework and the built-in component libraries.](https://www.openui.com/docs/openui-lang/overview)

### On this page

[Create the app](https://www.openui.com/docs/openui-lang/quickstart#create-the-app)
[Add your API key](https://www.openui.com/docs/openui-lang/quickstart#add-your-api-key)
[Start the dev server](https://www.openui.com/docs/openui-lang/quickstart#start-the-dev-server)
[What's included](https://www.openui.com/docs/openui-lang/quickstart#whats-included)

---

# Architecture | OpenUI - The Open Standard for Generative UI

Architecture
============

Build dashboards, CRUD interfaces, and monitoring tools. The LLM generates the UI once, then your app runs independently.

Copy MarkdownOpen

[The problem today](https://www.openui.com/docs/openui-lang/how-it-works#the-problem-today)

--------------------------------------------------------------------------------------------

In most AI-powered applications, when a user interacts with a generated UI (filtering data, submitting a form, refreshing a view), the request goes back through the LLM. The model re-processes the context, calls tools, and regenerates the response. Every click costs tokens. Every interaction adds latency.

[How OpenUI changes this](https://www.openui.com/docs/openui-lang/how-it-works#how-openui-changes-this)

--------------------------------------------------------------------------------------------------------

OpenUI separates **generation** from **execution**. The LLM generates the interface once. After that, the UI runs on its own: fetching data, handling state, and responding to user actions without any LLM involvement.

![Architecture diagram showing two phases: GENERATE (one-time) and EXECUTE (ongoing, no LLM)](https://www.openui.com/images/openui-lang/architecture.png)

### [Generate](https://www.openui.com/docs/openui-lang/how-it-works#generate)

The user describes what they want. Your backend sends the request to an LLM along with a system prompt that includes your component library and tool descriptions. The LLM responds with openui-lang code, a compact declarative format that describes the UI layout, data sources, and interactions.

### [Execute](https://www.openui.com/docs/openui-lang/how-it-works#execute)

The Renderer parses the generated code. When it encounters a `Query("list_tickets")`, the runtime calls your tool directly, no LLM roundtrip. When the user clicks a button that triggers `@Run(createResult)`, the runtime executes the mutation against your tool. When a `$variable` changes from a dropdown, all dependent queries re-fetch automatically.

The LLM generated the wiring. The runtime executes it.

[What this enables](https://www.openui.com/docs/openui-lang/how-it-works#what-this-enables)

--------------------------------------------------------------------------------------------

*   **Reactive dashboards** with date range filters, auto-refresh, and live KPIs computed from query results
*   **CRUD interfaces** with create forms, edit modals, tables with search and sort
*   **Monitoring tools** with periodic refresh, server health metrics, and error rate tracking
*   **Any tool-connected UI.** If you can expose it as a tool (via [MCP](https://modelcontextprotocol.io/docs/getting-started/intro)
     or function map), the LLM can wire it into a UI

Try it live: [Open the GitHub Demo](https://www.openui.com/demo/github)

[Iterate and refine](https://www.openui.com/docs/openui-lang/how-it-works#iterate-and-refine)

----------------------------------------------------------------------------------------------

The LLM doesn't have to get it right the first time. With [incremental editing](https://www.openui.com/docs/openui-lang/incremental-editing)
, the user says "add a pie chart" and the LLM outputs only the 2-3 changed statements and the parser merges them into the existing code. Existing queries, state, and bindings stay intact.

    Turn 1:                              Turn 2 (patch only):
    
    root = Stack([header, tbl])          root = Stack([header, chart, tbl])  ← updated
    header = CardHeader("Tickets")       chart = PieChart(["Open","Closed"], ← new
    tickets = Query(...)                   [@Count(@Filter(..., "open")),\
    tbl = Table([...])                      @Count(@Filter(..., "closed"))\
                                           ], "donut")
      20 lines, ~400 tokens               3 lines, ~60 tokens (85% fewer)

[Connecting tools](https://www.openui.com/docs/openui-lang/how-it-works#connecting-tools)

------------------------------------------------------------------------------------------

The Renderer accepts a `toolProvider` prop that tells the runtime how to call your tools. Two options:

**Function map**, a plain object of async functions:

    <Renderer
      toolProvider={{
        list_tickets: async (args) => fetch("/api/tickets").then((r) => r.json()),
        create_ticket: async (args) =>
          fetch("/api/tickets", { method: "POST", body: JSON.stringify(args) }).then((r) => r.json()),
      }}
      response={code}
      library={library}
    />

**[MCP](https://modelcontextprotocol.io/docs/getting-started/intro)
 client** for server-side tools:

    import { Client } from "@modelcontextprotocol/sdk/client/index.js";
    import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
    
    const client = new Client({ name: "my-app", version: "1.0.0" });
    await client.connect(new StreamableHTTPClientTransport(new URL("/api/mcp")));
    <Renderer toolProvider={client} response={code} library={library} />;

These examples are simplified for demonstration. In production, you'll need to handle authentication, error boundaries, and connection lifecycle.

The [GitHub Demo](https://www.openui.com/demo/github)
 uses a function map where tools run entirely client-side, calling the GitHub API directly from the browser. The [Dashboard example](https://github.com/thesysdev/openui/tree/main/examples/openui-dashboard)
 uses MCP with server-side tools.

[A concrete example](https://www.openui.com/docs/openui-lang/how-it-works#a-concrete-example)

----------------------------------------------------------------------------------------------

Here's the full flow for a ticket tracker: define tools, generate the prompt, render the output.

### [1\. Define your tools](https://www.openui.com/docs/openui-lang/how-it-works#1-define-your-tools)

    // tools.ts
    const tools: ToolSpec[] = [\
      {\
        name: "list_tickets",\
        description: "List all tickets",\
        inputSchema: { type: "object", properties: {} },\
        outputSchema: {\
          type: "object",\
          properties: {\
            rows: {\
              type: "array",\
              items: {\
                type: "object",\
                properties: { title: { type: "string" }, priority: { type: "string" } },\
              },\
            },\
          },\
        },\
      },\
      {\
        name: "create_ticket",\
        description: "Create a new ticket",\
        inputSchema: {\
          type: "object",\
          properties: {\
            title: { type: "string" },\
            priority: { type: "string" },\
          },\
        },\
        outputSchema: { type: "object", properties: { success: { type: "boolean" } } },\
      },\
    ];

### [2\. Generate the prompt and call the LLM](https://www.openui.com/docs/openui-lang/how-it-works#2-generate-the-prompt-and-call-the-llm)

    // route.ts
    import { generatePrompt } from "@openuidev/lang-core";
    import componentSpec from "./generated/component-spec.json";
    
    const systemPrompt = generatePrompt({
      ...componentSpec,
      tools,
      toolCalls: true,
      bindings: true,
    });
    
    const completion = await openai.chat.completions.create({
      model: "gpt-5.4-mini",
      stream: true,
      messages: [\
        { role: "system", content: systemPrompt },\
        { role: "user", content: "Build a ticket tracker with a create form and table" },\
      ],
    });

### [3\. Render the response](https://www.openui.com/docs/openui-lang/how-it-works#3-render-the-response)

    // page.tsx
    <Renderer
      library={library}
      response={streamedText}
      isStreaming={isStreaming}
      toolProvider={{
        list_tickets: async () => db.query("SELECT * FROM tickets"),
        create_ticket: async (args) => db.query("INSERT INTO tickets ...", args),
      }}
    />

### [What the LLM generates](https://www.openui.com/docs/openui-lang/how-it-works#what-the-llm-generates)

    $title = ""
    $priority = "medium"
    createResult = Mutation("create_ticket", {title: $title, priority: $priority})
    tickets = Query("list_tickets", {}, {rows: []})
    submitBtn = Button("Create", Action([@Run(createResult), @Run(tickets), @Reset($title, $priority)]))
    form = Form("create", submitBtn, [\
      FormControl("Title", Input("title", $title)),\
      FormControl("Priority", Select("priority", $priority, [\
        SelectItem("low", "Low"), SelectItem("medium", "Medium"), SelectItem("high", "High")\
      ]))\
    ])
    tbl = Table([Col("Title", tickets.rows.title), Col("Priority", tickets.rows.priority)])
    root = Stack([CardHeader("Ticket Tracker"), form, tbl])

### [What happens at runtime](https://www.openui.com/docs/openui-lang/how-it-works#what-happens-at-runtime)

1.  `Query("list_tickets")` → runtime calls your tool → table fills with data
2.  User types a title, picks a priority, clicks "Create"
3.  `@Run(createResult)` → runtime calls `create_ticket` directly
4.  `@Run(tickets)` → runtime re-fetches `list_tickets` → table updates
5.  `@Reset($title, $priority)` → form clears

All without the LLM.

[Interactivity\
\
Handle actions, forms, and state in OpenUI components.](https://www.openui.com/docs/openui-lang/interactivity)
[Reactive State\
\
Make your UI interactive with $variables that update automatically.](https://www.openui.com/docs/openui-lang/reactive-state)

### On this page

[The problem today](https://www.openui.com/docs/openui-lang/how-it-works#the-problem-today)
[How OpenUI changes this](https://www.openui.com/docs/openui-lang/how-it-works#how-openui-changes-this)
[Generate](https://www.openui.com/docs/openui-lang/how-it-works#generate)
[Execute](https://www.openui.com/docs/openui-lang/how-it-works#execute)
[What this enables](https://www.openui.com/docs/openui-lang/how-it-works#what-this-enables)
[Iterate and refine](https://www.openui.com/docs/openui-lang/how-it-works#iterate-and-refine)
[Connecting tools](https://www.openui.com/docs/openui-lang/how-it-works#connecting-tools)
[A concrete example](https://www.openui.com/docs/openui-lang/how-it-works#a-concrete-example)
[1\. Define your tools](https://www.openui.com/docs/openui-lang/how-it-works#1-define-your-tools)
[2\. Generate the prompt and call the LLM](https://www.openui.com/docs/openui-lang/how-it-works#2-generate-the-prompt-and-call-the-llm)
[3\. Render the response](https://www.openui.com/docs/openui-lang/how-it-works#3-render-the-response)
[What the LLM generates](https://www.openui.com/docs/openui-lang/how-it-works#what-the-llm-generates)
[What happens at runtime](https://www.openui.com/docs/openui-lang/how-it-works#what-happens-at-runtime)

---

# Reactive State | OpenUI - The Open Standard for Generative UI

Reactive State
==============

Make your UI interactive with $variables that update automatically.

Copy MarkdownOpen

Every UI needs state: which tab is selected, what the user typed, whether a modal is open. In OpenUI Lang, state is declared with `$variables`.

[Declaring a variable](https://www.openui.com/docs/openui-lang/reactive-state#declaring-a-variable)

----------------------------------------------------------------------------------------------------

A `$variable` is a line that starts with `$`:

    $days = "7"
    $title = ""
    $showEdit = false

That's it. The value on the right is the default.

[Binding to inputs](https://www.openui.com/docs/openui-lang/reactive-state#binding-to-inputs)

----------------------------------------------------------------------------------------------

When you pass a `$variable` to an input component, it creates a two-way binding. The user changes the input, the variable updates. The variable changes, the input updates.

    $days = "7"
    filter = Select("days", $days, [SelectItem("7", "7 days"), SelectItem("30", "30 days")])

[Using variables in expressions](https://www.openui.com/docs/openui-lang/reactive-state#using-variables-in-expressions)

------------------------------------------------------------------------------------------------------------------------

Any expression can read a `$variable`:

    title = TextContent("Showing last " + $days + " days")
    data = Query("analytics", {days: $days}, {rows: []})

When `$days` changes (user picks "30" in the Select), the title updates and the Query re-fetches with the new value. This happens automatically - no wiring needed.

[Changing state from buttons](https://www.openui.com/docs/openui-lang/reactive-state#changing-state-from-buttons)

------------------------------------------------------------------------------------------------------------------

Use `@Set` inside an `Action` to change a variable when a button is clicked:

    btn = Button("Show 30 days", Action([@Set($days, "30")]))

You can set multiple variables at once:

    saveBtn = Button("Save", Action([@Set($showEdit, false), @Set($saved, true)]))

[Resetting to defaults](https://www.openui.com/docs/openui-lang/reactive-state#resetting-to-defaults)

------------------------------------------------------------------------------------------------------

`@Reset` restores variables to their declared defaults:

    $title = ""
    $priority = "medium"
    resetBtn = Button("Clear", Action([@Reset($title, $priority)]))

After click: `$title` goes back to `""`, `$priority` goes back to `"medium"`.

[Conditional rendering](https://www.openui.com/docs/openui-lang/reactive-state#conditional-rendering)

------------------------------------------------------------------------------------------------------

Use ternary expressions to show/hide UI based on state:

    $showEdit ? editForm : null
    status == "error" ? Callout("error", "Failed", errorMsg) : null

[How reactivity works](https://www.openui.com/docs/openui-lang/reactive-state#how-reactivity-works)

----------------------------------------------------------------------------------------------------

![Reactivity chain: $days changes, Query re-fetches, TextContent re-evaluates, Chart re-renders](https://www.openui.com/images/openui-lang/reactive.png)

When a `$variable` changes:

1.  All inputs bound to it update their display
2.  All `Query` calls that reference it in their args re-fetch
3.  All expressions that reference it re-evaluate
4.  The UI re-renders with new values

No event listeners. No useEffect. No wiring. Just declare and reference.

[Architecture\
\
Build dashboards, CRUD interfaces, and monitoring tools. The LLM generates the UI once, then your app runs independently.](https://www.openui.com/docs/openui-lang/how-it-works)
[Queries & Mutations\
\
Fetch and write data from your tools - the LLM generates the wiring, the runtime executes it.](https://www.openui.com/docs/openui-lang/queries-mutations)

### On this page

[Declaring a variable](https://www.openui.com/docs/openui-lang/reactive-state#declaring-a-variable)
[Binding to inputs](https://www.openui.com/docs/openui-lang/reactive-state#binding-to-inputs)
[Using variables in expressions](https://www.openui.com/docs/openui-lang/reactive-state#using-variables-in-expressions)
[Changing state from buttons](https://www.openui.com/docs/openui-lang/reactive-state#changing-state-from-buttons)
[Resetting to defaults](https://www.openui.com/docs/openui-lang/reactive-state#resetting-to-defaults)
[Conditional rendering](https://www.openui.com/docs/openui-lang/reactive-state#conditional-rendering)
[How reactivity works](https://www.openui.com/docs/openui-lang/reactive-state#how-reactivity-works)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---

# Vercel Security Checkpoint

We're verifying your browser

[Website owner? Click here to fix](https://vercel.link/security-checkpoint)

---


# Table of Contents

- [Requesty Router | Requesty Docs](#requesty-router-requesty-docs)
- [Chatlogs | Requesty Docs](#chatlogs-requesty-docs)
- [Analytics-only | Requesty Docs](#analytics-only-requesty-docs)
- [Cline application | Requesty Docs](#cline-application-requesty-docs)
- [Supported models | Requesty Docs](#supported-models-requesty-docs)
- [LLM Insights API | Requesty Docs](#llm-insights-api-requesty-docs)
- [LLM Insights Python client | Requesty Docs](#llm-insights-python-client-requesty-docs)
- [Get started with Requesty | Requesty Docs](#get-started-with-requesty-requesty-docs)
- [Prompt playground | Requesty Docs](#prompt-playground-requesty-docs)
- [Reports | Requesty Docs](#reports-requesty-docs)
- [Insight Explorer | Requesty Docs](#insight-explorer-requesty-docs)
- [Data processor | Requesty Docs](#data-processor-requesty-docs)
- [Custom data upload | Requesty Docs](#custom-data-upload-requesty-docs)

---

# Requesty Router | Requesty Docs

[PreviousGet started with Requesty](/)
[NextSupported models](/router/requesty-router/supported-models)

Last updated 11 days ago

Was this helpful?

Requesty Router acts as a universal interface to multiple LLM providers, similar to [](https://openrouter.ai/)
to traditional LLM routers, but comes with a lot of additional value:

*   **Analytics & Logging:** Every request and response is tracked, and insights can be sent to a dedicated endpoint for usage analytics, latency measurements, and performance tuning.
    
*   **Auto-Tagging:** Automatically tags requests with metadata (like function calls used, latencies, topics, tone of voice and much more.) to help with observability and future optimization.
    
*   **Function Calling & Tool Use:** Similar to OpenAI’s function calling and OpenRouter’s tool interface, our router supports tool invocation to augment LLM capabilities.
    

All of this is done through a simple, OpenAI-compatible API structure. If you’re already using the OpenAI Python SDK or curl, you can integrate our router by just changing the base\_url and providing our API key.

[](#getting-started)

Getting Started


-----------------------------------------

### 

[](#prerequisites)

Prerequisites

1.  API Key: You need to login at [https://app.requesty.ai/sign-up](https://app.requesty.ai/sign-up)
     and setup an API-key at [https://app.requesty.ai/insight-api](https://app.requesty.ai/insight-api)
    .
    
2.  Once you have your API-key you will need to change the `base_url` of your Openai Client and change it to `https://router.requesty.ai/v1`
    
3.  This endpoint adheres to a request structure similar to the OpenAI Chat Completion API ([link](https://platform.openai.com/docs/guides/text-generation)
    , but with extended features.
    

### 

[](#example-simple-python-client-setup)

Example: Simple Python Client Setup

You can use the standard OpenAI Python client by simply changing `openai.api_base` and using our API key header:

Copy

    import os
    import openai
    from dotenv import load_dotenv
    
    # Load API key from environment variables
    load_dotenv()
    ROUTER_API_KEY = os.getenv("ROUTER_API_KEY")
    
    if ROUTER_API_KEY is None:
        raise ValueError("ROUTER_API_KEY not found. Please check your .env file.")
    
    try:
        # Initialize OpenAI client
        client = openai.OpenAI(
            api_key=ROUTER_API_KEY,
            base_url="https://router.requesty.ai/v1",
            default_headers={"Authorization": f"Bearer {ROUTER_API_KEY}"}
        )
    
        # Example request
        response = client.chat.completions.create(
            model="openai/gpt-4o",
            messages=[{"role": "user", "content": "Hello, who are you?"}]
        )
    
        # Check if the response is successful
        if not response.choices:
            raise Exception("No response choices found.")
    
        # Print the result
        print(response.choices[0].message.content)
    
    except openai.OpenAIError as e:
        print(f"OpenAI API error: {e}")
    
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    

This makes a request to the local router which proxies it to the appropriate model provider, returning a completion response in OpenAI format. Additionally you can add additional information to the `headers` you can specify (like `HTTP-Referer` and `X-Title`) which can help with analytics and app discoverability.

[](#request-structure)

Request Structure


---------------------------------------------

Your request body to `/v1/chat/completions` closely follows the OpenAI Chat Completion schema:

*   **Required Fields:**
    
    *   `messages`: An array of message objects with `role` and `content`. Roles can be `user`, `assistant`, `system`, or `tool`.
        
    *   `model`: The model name. If omitted, defaults to the user’s or payer’s default model. Here is a [full list of the supported models](/router/requesty-router/supported-models)
        .
        
    
*   **Optional Fields:**
    
    *   `prompt`: Alternative to `messages` for some providers.
        
    *   `stream`: A boolean to enable Server-Sent Events (SSE) streaming responses.
        
    *   `max_tokens`, `temperature`, `top_p`, etc.: Standard language model parameters.
        
    *   `tools / functions`: Allows function calling with a schema defined. See OpenAI's [function calling documentation](https://platform.openai.com/docs/guides/structured-outputs)
         for the structure of these requests.
        
    *   `tool_choice`: Specifies how tool calling should be handled.
        
    *   `response_format`: For structured responses (some models only).
        
    
*   **Security Level (optional):**
    
    *   You can include a custom header `X-Security-Level` to enforce content security validation. Levels range from `none`, `basic`, `advanced`, `enterprise`, etc. This ensures that your prompts and responses adhere to domain-specific compliance and security checks. More information about security at the end of this document
        
    

### 

[](#example-request-body)

Example Request Body

Copy

    {
      "model": "openai/gpt-4o-mini",
      "messages": [\
        {"role": "system", "content": "You are a helpful assistant."},\
        {"role": "user", "content": "What is the capital of France?"}\
      ],
      "max_tokens": 200,
      "temperature": 0.7,
      "stream": true,
      "tools": [\
        {\
          "type": "function",\
          "function": {\
            "name": "get_current_weather",\
            "description": "Get the current weather in a given location",\
            "parameters": {\
              "type": "object",\
              "properties": {\
                "location": {"type": "string", "description": "City and state"},\
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}\
              },\
              "required": ["location"]\
            }\
          }\
        }\
      ]
    }

Here, we also provide a tool (`get_current_weather`) that the model can call if it decides the user request involves weather data.

Some request fields require a different function, for example if you use `response_format` you'll need to update the request to `client.beta.chat.completions.parse` and you may want to use the Pydantic or Zod format for your structure.

[](#response-structure)

Response Structure


-----------------------------------------------

The response is normalized to an OpenAI-style `ChatCompletion` object:

*   **Streaming**: If `stream: true`, responses arrive incrementally as SSE events with data: lines.
    
*   **Function Calls (Tool Calls)**: If the model decides to call a tool, it will return a `function_call` in the assistant message. You then execute the tool, append the tool’s result as a `role: "tool"` message, and send a follow-up request. The LLM will then integrate the tool output into its final answer.
    

### 

[](#non-streaming-full-response-example)

Non-Streaming (full) Response Example:

Copy

    {
      "id": "chatcmpl-xyz123",
      "object": "chat.completion",
      "created": 1687623702,
      "model": "openai/gpt-4o",
      "usage": {
        "prompt_tokens": 10,
        "completion_tokens": 50,
        "total_tokens": 60
      },
      "choices": [\
        {\
          "index": 0,\
          "message": {\
            "role": "assistant",\
            "content": "The capital of France is Paris."\
          },\
          "finish_reason": "stop"\
        }\
      ]
    }

### 

[](#function-call-example)

Function Call Example:

If the model decides it needs the weather tool:

Copy

    {
      "id": "chatcmpl-abc456",
      "object": "chat.completion",
      "created": 1687623800,
      "model": "openai/gpt-4o",
      "choices": [\
        {\
          "index": 0,\
          "message": {\
            "role": "assistant",\
            "content": null,\
            "function_call": {\
              "name": "get_current_weather",\
              "arguments": "{ "location": "Boston, MA"}"\
            }\
          },\
          "finish_reason": "function_call"\
        }\
      ]
    }

You would then call the `get_current_weather` function externally, get the result, and send it back as:

Copy

    {
      "model": "openai/gpt-4o",
      "messages": [\
        {"role": "user", "content": "What is the weather in Boston?"},\
        {\
          "role": "assistant",\
          "content": null,\
          "function_call": {\
            "name": "get_current_weather",\
            "arguments": "{ "location": "Boston, MA" }"\
          }\
        },\
        {\
          "role": "tool",\
          "name": "get_current_weather",\
          "content": "{"temperature": "22", "unit": "celsius", "description": "Sunny"}"\
        }\
      ]
    }

The next completion will return a final answer integrating the tool’s response.

[](#streaming-responses)

Streaming Responses


-------------------------------------------------

The router supports streaming responses from all providers (OpenAI, Anthropic, Mistral) using Server-Sent Events (SSE). Streaming allows you to receive and process the response token by token instead of waiting for the complete response.

### 

[](#how-to-use-streaming)

How to Use Streaming

1.  Enable streaming by setting `stream=True` in your request
    
2.  The response will be a stream of chunks that you need to iterate over
    
3.  Each chunk contains a delta of the response in the same format as the OpenAI API
    

### 

[](#python-example-with-streaming)

Python Example with Streaming:

Copy

    import openai
    client = openai.OpenAI(
        api_key=ROUTER_API_KEY,
        base_url="https://router.requesty.ai/v1",
        default_headers={"Authorization": f"Bearer {ROUTER_API_KEY}"}
    )
    response = client.chat.completions.create(
        model="openai/gpt-4",
        messages=[{"role": "user", "content": "Write a poem about the stars."}],
        stream=True
    )
    # Iterate over the stream and handle chunks
    for chunk in response:
        # Access content from the chunk (if present)
        if chunk.choices[0].delta.content is not None:
            content = chunk.choices[0].delta.content
            print(content, end="", flush=True)  # Print content as it arrives
        # Handle function calls in streaming (if present)
        if hasattr(chunk.choices[0].delta, 'function_call'):
            fc = chunk.choices[0].delta.function_call
            if hasattr(fc, 'name') and fc.name:
                print(f"\nFunction Call: {fc.name}")
            if hasattr(fc, 'arguments') and fc.arguments:
                print(f"Arguments: {fc.arguments}")

**Important Notes**

1.  Content Access:
    
    *   Always check if `delta.content` is not None before using it
        
    *   Content comes in small chunks that you may want to collect into a full response
        
    
2.  Function Calls:
    
    *   Function calls are also streamed and come through the `delta.function_call` property
        
    *   Check for both name and arguments as they might come in separate chunks
        
    
3.  Error Handling:
    
    *   Wrap streaming code in try/except to handle potential connection issues
        
    *   The stream might end early if there are errors
        
    
4.  Best Practices:
    
    *   Use `flush=True` when printing to see output immediately
        
    *   Consider collecting chunks if you need the complete response
        
    *   For production, implement proper error handling and retry logic
        
    

### 

[](#example-collecting-complete-response)

Example: Collecting Complete Response

Copy

    collected_messages = []
    for chunk in response:
        if chunk.choices[0].delta.content is not None:
            content = chunk.choices[0].delta.content
            collected_messages.append(content)
    
    full_response = "".join(collected_messages)

### 

[](#supported-features-in-streaming)

Supported Features in Streaming

*   Text completion streaming
    
*   Function calling streaming
    
*   Tool calls streaming
    
*   System messages
    
*   Temperature and other parameters
    

[](#analytics-and-logging)

Analytics & Logging


---------------------------------------------------

Every request and response is logged. Additional metadata like latencies you can add additional information such as user\_id or location or any metadata sending it in the `meta` field , enabling you to:

*   Measure end-to-end latency.
    
*   Track usage and cost.
    
*   Inspect tool calls and security violations.
    
*   Optimize prompt design based on user behavior.
    

No additional configuration is needed if you’re okay with default behavior.

[](#router-summary)

Router Summary


---------------------------------------

Our router provides a familiar, OpenAI-like interface enriched with analytics, safety, and advanced routing. With minimal changes (just switch `base_url` and provide the right API keys and headers), you can leverage multiple LLM providers, function calling, logging, auto-tagging, and security checks.

**Key Points:**

*   Drop-in replacement for OpenAI endpoints.
    
*   Integrate tool calls easily.
    
*   Receive detailed analytics for every request.
    
*   Use streaming SSE responses for real-time token generation.
    
*   Enjoy multimodal and structured response format support.
    

Try it out, explore advanced settings, and build secure, observable, and powerful LLM-driven applications with ease!

---

# Chatlogs | Requesty Docs

[PreviousCline application](/router/requesty-router/cline-application)
[NextPrompt playground](/platform/prompt-playground)

Last updated 2 months ago

Was this helpful?

The **Chatlogs** feature provides a comprehensive view of detailed chat logs, enabling real-time analysis of conversations between users and agents (human or AI). This feature is designed to streamline conversation analysis by offering search, filtering and organization capabilities.

[](#overview)

Overview


---------------------------

The Chatlogs panel allows you to:

*   View detailed logs of user-agent conversations.
    
*   Analyze interactions in real-time or retrospectively.
    
*   Filter, search, and organize conversations for deeper insights.
    

[](#key-features)

Key Features


-----------------------------------

#### 

[](#search-conversation-history)

**Search Conversation History**

*   Search for specific terms within conversation logs to identify relevant messages quickly.
    

#### 

[](#detailed-message-timestamps-and-metadata)

**Detailed Message Timestamps and Metadata**

*   Access precise timestamps for each message.
    
*   Review metadata associated with conversations, such as user ID, agent type, or conversation context.
    

#### 

[](#load-saved-conversation-lists)

**Load Saved Conversation Lists**

*   Quickly access pre-saved lists of conversations for targeted analysis.
    
*   Manage and customize saved lists to organize related conversations into easily accessible groups.
    

#### 

[](#apply-label-filters)

**Apply Label Filters**

*   Use labels to categorize and identify different conversation types.
    
*   Select multiple labels to refine searches and find specific conversations based on their content or metadata.
    

The **Search** feature helps you locate specific messages:

*   Enter keywords in the search bar and click **Search**.
    
*   Matching terms within conversation logs are highlighted in yellow for easy identification.
    

[](#labels)

Labels


-----------------------

Labels are a powerful way to categorize conversations:

*   Add or assign labels to conversations for easy filtering and organization.
    
*   Combine multiple labels to narrow down search results and focus on specific conversation types or themes.
    

[](#saved-lists)

Saved Lists


---------------------------------

Saved Lists allow you to organize and revisit specific conversations:

*   Create customized lists of conversations for future reference.
    
*   Access saved lists directly from the Chatlogs panel to streamline your workflow.
    

[](#tips-for-effective-use)

Tips for Effective Use


-------------------------------------------------------

*   Use **Label Filters** to categorize and analyze conversations efficiently.
    
*   Save frequently accessed conversation groups as **Saved Lists** for quicker analysis.
    
*   Combine **Search** and **Labels** to pinpoint relevant conversations and insights.
    

With its intuitive tools and organized interface, the Chatlogs panel makes conversation analysis straightforward and efficient.

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FLr8CWIAjymN52fKOgYFl%252Fimage.png%3Falt%3Dmedia%26token%3D28b563ce-3e78-4a85-8a80-61ec758749a2&width=768&dpr=4&quality=100&sign=1932911d&sv=2)

---

# Analytics-only | Requesty Docs

Integrating your data sources with Requesty makes it quick and easy to analyze and derive insights from customer interactions. We offer several integration methods to accommodate diverse platforms and data formats:

*   **LLM Insights Client**: Connect your Large Language Model applications to Requesty via webhooks, enabling real-time data ingestion and analysis.
    
*   **Customer Support Platforms**: Seamlessly integrate with popular support tools such as Intercom, Front, and Crisp to analyze customer conversations and extract valuable insights.
    
*   **Voice Insights API**: Utilize our API to process and analyze voice interactions, transforming audio data into actionable information.
    
*   [**Custom Data Upload**](/integrating-with-requesty/integrations/custom-data-upload)
    : Upload data in various formats directly to Requesty, allowing for flexible integration of unique datasets.
    
*   **Model-as-a-Service**: Leverage our end-to-end solution where Requesty manages the entire process, from data ingestion to analysis, providing a comprehensive service tailored to your needs.
    

Each integration method is designed to facilitate seamless data flow into Requesty, empowering you to make informed, data-driven decisions.

### 

[](#types-of-integrations)

Types of integrations

**LLM integration client**

Monitor your LLM application through a client that provides Requesty insights without interfering with your product

**Support platform integrations**

Connect your support app to discover trends, insights and user behaviour from support conversations

[**Custom data upload**\
\
Is your data in another format, or does it have a unique structure? Analyse feedback forms, Reddit posts, and other sources](/integrating-with-requesty/integrations/custom-data-upload)

**Voice Insights API**

Process and analyze voice recordings, just send them to our ingestion endpoint

**Model-as-a-Service**

Let us set up your entire system, from prompt experiments to running your model, and monitoring interactions & performance

[PreviousData processor](/platform/data-processor)
[NextLLM Insights Python client](/integrating-with-requesty/integrations/llm-insights-python-client)

Last updated 2 months ago

Was this helpful?

---

# Cline application | Requesty Docs

[PreviousSupported models](/router/requesty-router/supported-models)
[NextChatlogs](/platform/chatlogs)

Last updated 19 days ago

Was this helpful?

[](#setup-instructions)

Setup Instructions


-----------------------------------------------

1.  Go to Settings in Cline and choose OpenAI Compatible
    
2.  Change the Base URL to https://router.requesty.ai/v1
    
3.  Create and input your API Key
    
4.  Copy the Model ID for your selected model
    

You can select any of our [supported models](/router/requesty-router/supported-models)
.

How to set up Requesty router for Cline

---

# Supported models | Requesty Docs

Requesty Router supports many different models, below is the most up-to-date list of model providers and model types that it supports:

OpenAI models:

Copy

    "openai/gpt-4o",
    "openai/gpt-4o-2024-11-20",
    "openai/gpt-4o-2024-08-06",
    "openai/gpt-4o-2024-05-13",
    "openai/chatgpt-4o-latest",
    "openai/gpt-4o-mini",
    "openai/gpt-4o-mini-2024-07-18",
    "openai/o1-preview",
    "openai/o1-preview-2024-09-12",
    "openai/o1-mini",
    "openai/o1-mini-2024-09-12",
    "openai/gpt-4-turbo",
    "openai/gpt-4-turbo-2024-04-09",
    "openai/gpt-4-turbo-preview",
    "openai/gpt-4-0125-preview",
    "openai/gpt-4-1106-preview",
    "openai/gpt-4",
    "openai/gpt-4-0613",
    "openai/gpt-4-0314",
    "openai/gpt-3.5-turbo-0125",
    "openai/gpt-3.5-turbo",
    "openai/gpt-3.5-turbo-1106",
    "openai/gpt-3.5-turbo-instruct"

Anthropic models:

Copy

    "anthropic/claude-3-5-sonnet-20241022",
    "anthropic/claude-3-5-sonnet-latest",
    "anthropic/claude-3-5-haiku-20241022",
    "anthropic/claude-3-5-haiku-latest",
    "anthropic/claude-3-opus-20240229",
    "anthropic/claude-3-opus-latest",
    "anthropic/claude-3-sonnet-20240229",
    "anthropic/claude-3-haiku-20240307"

Together AI models:

Copy

    "together_ai/meta-llama/7B",
    "together_ai/mistralai/llama-7b",
    "together_ai/Qwen/llama-7b",
    "together_ai/google/flan-t5-xl",
    "together_ai/deepseek-ai/llama-7b",
    "together_ai/Gryphe/llama-7b",
    "together_ai/NousResearch/llama-7b",
    "together_ai/upstage/llama-7b",
    "together_ai/meta-llama/Llama-3.3-70B-Instruct-Turbo",
    "together_ai/meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
    "together_ai/meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
    "together_ai/meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
    "together_ai/meta-llama/Meta-Llama-3-8B-Instruct-Turbo",
    "together_ai/meta-llama/Meta-Llama-3-70B-Instruct-Turbo",
    "together_ai/meta-llama/Llama-3.2-3B-Instruct-Turbo",
    "together_ai/meta-llama/Meta-Llama-3-8B-Instruct-Lite",
    "together_ai/meta-llama/Meta-Llama-3-70B-Instruct-Lite",
    "together_ai/meta-llama/Llama-3-8b-chat-hf",
    "together_ai/meta-llama/Llama-3-70b-chat-hf",
    "together_ai/meta-llama/Llama-2-13b-chat-hf",
    "together_ai/nvidia/Llama-3.1-Nemotron-70B-Instruct-HF",
    "together_ai/Qwen/Qwen2.5-Coder-32B-Instruct",
    "together_ai/Qwen/QwQ-32B-Preview",
    "together_ai/Qwen/Qwen2.5-7B-Instruct-Turbo",
    "together_ai/Qwen/Qwen2.5-72B-Instruct-Turbo",
    "together_ai/Qwen/Qwen2-72B-Instruct",
    "together_ai/microsoft/WizardLM-2-8x22B",
    "together_ai/google/gemma-2-27b-it",
    "together_ai/google/gemma-2-9b-it",
    "together_ai/google/gemma-2b-it",
    "together_ai/databricks/dbrx-instruct",
    "together_ai/deepseek-ai/deepseek-llm-67b-chat",
    "together_ai/Gryphe/MythoMax-L2-13b",
    "together_ai/mistralai/Mistral-7B-Instruct-v0.1",
    "together_ai/mistralai/Mistral-7B-Instruct-v0.2",
    "together_ai/mistralai/Mistral-7B-Instruct-v0.3",
    "together_ai/mistralai/Mixtral-8x7B-Instruct-v0.1",
    "together_ai/mistralai/Mixtral-8x22B-Instruct-v0.1",
    "together_ai/NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO",
    "together_ai/upstage/SOLAR-10.7B-Instruct-v1.0"

Mistral models:

Copy

    "mistral/mistral-large-latest",
    "mistral/mistral-small-latest",
    "mistral/codestral-latest",
    "mistral/ministral-8b-latest",
    "mistral/ministral-3b-latest",
    "mistral/pixtral-12b-2409",
    "mistral/mixtral-8x22b-latest",
    "mistral/open-mistral-nemo"

Gemini models:

Copy

    "gemini/gemini-1.5-flash",
    "gemini/gemini-1.5-flash-8b",
    "gemini/gemini-1.5-pro",
    "gemini/gemini-2.0-flash-exp"

[PreviousRequesty Router](/router/requesty-router)
[NextCline application](/router/requesty-router/cline-application)

Last updated 26 days ago

Was this helpful?

---

# LLM Insights API | Requesty Docs

[PreviousLLM Insights Python client](/integrating-with-requesty/integrations/llm-insights-python-client)
[NextCustom data upload](/integrating-with-requesty/integrations/custom-data-upload)

Last updated 2 months ago

Was this helpful?

The OpenAPI integration provides a direct way to ingest and manage insight data, enabling seamless integration for developers looking to analyze interactions and capture insights directly. This API supports the ingestion of OpenAI ChatCompletion responses and other metadata, empowering you with real-time analytics and insights.

[](#id-1.-register-on-the-platform)

Getting started


--------------------------------------------------------

### 

[](#id-1.-register-on-the-platform-1)

1\. Register on the Platform

*   Visit the platform and register for an account.
    
*   After registration, create an organization in the dashboard.
    

### 

[](#id-2.-create-an-api-key)

2\. Create an API Key

*   Navigate to the [Insights API page](https://app.requesty.ai/insight-api)
     in your account.
    
*   Generate an API key. This API key will be used to authenticate your requests.
    
*   Note: The same API key can be used for both Client Insights and Voice Insights. The only difference is the ingestion endpoint.
    

### 

[](#id-3.-set-up-the-api-integration)

3\. Set up the API integration

#### 

[](#base-url)

Base URL

All API requests should be made to the following base URL:

Copy

    https://ingestion.requesty.ai/

#### 

[](#authentication)

Authentication

The AInsight API requires **Bearer Token Authentication** for secure access. Include your API key in the `Authorization` header:

Copy

    Authorization: Bearer YOUR_API_KEY

* * *

#### 

[](#examples)

Examples

### 

[](#send-to-requesty-example)

Send to Requesty example

Copy

    const response = { choices: [{ message: { content: 'Hello world!' } }] };
    const messages = [{ role: 'user', content: 'Say hello!' }];
    const meta = { timestamp: new Date().toISOString() };
    
    sendToRequesty(chatResponse, messages, meta).then(() => {
      console.log('Data successfully sent to Requesty Insights!');
    });

### 

[](#curl-example)

cURL example

Copy

    curl -X PUT https://ingestion.requesty.ai/insight \
      -H "Authorization: Bearer your-requesty-api-key" \
      -H "Content-Type: application/json" \
      -d '{
        "response": {
          "choices": [\
            {\
              "message": {\
                "content": "This is a test response"\
              }\
            }\
          ]
        },
        "messages": [\
          { "role": "user", "content": "Say this is a test" }\
        ],
        "args": { "model": "gpt-4o-mini" },
        "meta": {
          "user_id": "user-12345"
        }
      }'

### 

[](#openai-requesty-combination-example)

OpenAI-Requesty combination example

Copy

    import { OpenAI } from 'openai';
    
    const openai = new OpenAI({
      apiKey: 'your-openai-api-key',
    });
    
    const REQUESTY_API_URL = 'https://ingestion.requesty.ai/insight';
    const REQUESTY_API_KEY = 'your-requesty-api-key';
    
    interface InsightPayload {
      response: object;
      messages: { role: string; content: string }[];
      args: { model: string };
      meta: { user_id: string };
    }
    
    async function sendInsight(payload: InsightPayload): Promise<void> {
      const response = await fetch(REQUESTY_API_URL, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${REQUESTY_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    
      if (!response.ok) {
        throw new Error(`Error capturing insight: ${response.statusText}`);
      }
    
      console.log('Insight captured:', await response.json());
    }
    
    async function main() {
      const messages = [{ role: 'user', content: 'Say this is a test' }];
    
      const chatResponse = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: messages,
      });
    
      const payload: InsightPayload = {
        response: chatResponse,
        messages: messages,
        args: { model: 'gpt-4o-mini' },
        meta: { user_id: 'user-12345' },
      };
    
      try {
        await sendInsight(payload);
      } catch (error) {
        console.error(error);
      }
    }
    
    main();

* * *

#### 

[](#use-cases)

Use Cases

*   **Real-Time Insights**: Capture and analyze AI interactions in real-time.
    
*   **Auditing and Compliance**: Log requests and responses for compliance needs.
    
*   **Analytics and Trends**: Identify patterns and optimize your AI workflows using the ingested data.
    

* * *

#### 

[](#error-handling)

Error Handling

Ensure proper error handling in your integration:

*   `401 Unauthorized`: Verify your API key is correct and has access.
    
*   `404 Not Found`: Check if the endpoint URL is correct.
    
*   `422 Unprocessable Entity`: Validate the request body for missing or invalid fields.
    
*   `500 Internal Server Error`: Retry or contact support if the issue persists.
    

* * *

#### 

[](#next-steps)

Next Steps

Get into advanced analytics with Requesty’s [Insight Explorer](/platform/insight-explorer)
.

Send logs to Requesty
---------------------

Send chat messages, responses, and meta data to Requesty.

PUThttps://ingestion.requesty.ai/insight

Authorization

bearerAuth

Body

application/json

response\*object

OpenAI ChatCompletion response

messages\*one of

The actual messages passed to the OpenAI client

stringarray of stringarray of object

templateone of

Optional prompt template pre-formatting

stringarray of stringarray of object

inputsobject

Optional input variables for the template

argsobject

Optional model arguments for tracking

user\_idnullable string

Optional user identifier

metaobject

Optional metadata for tracking

Response

200400401404500

Success

Body

application/json

successboolean

Example: `true`

Request

JavaScriptcURL

Copy

    const REQUESTY_API_KEY = 'your-requesty-api-key';
    const REQUESTY_API_URL = 'https://ingestion.requesty.ai/insight';
    
    const sendToRequesty = async (chatResponse, messages, meta) => {
      await fetch(REQUESTY_API_URL, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${REQUESTY_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          response: response,
          messages: messages,
          meta: meta,
        }),
      });
    };
    

Test it

Response

200

Copy

    {
      "success": true
    }

*   [PUTSend logs to Requesty](#insight)
    
*   [Getting started](#id-1.-register-on-the-platform)
    
*   [1\. Register on the Platform](#id-1.-register-on-the-platform-1)
    
*   [2\. Create an API Key](#id-2.-create-an-api-key)
    
*   [3\. Set up the API integration](#id-3.-set-up-the-api-integration)
    
*   [Send to Requesty example](#send-to-requesty-example)
    
*   [cURL example](#curl-example)
    
*   [OpenAI-Requesty combination example](#openai-requesty-combination-example)

---

# LLM Insights Python client | Requesty Docs

[](#installation)

Installation


-----------------------------------

Copy

    pip install requestyai

[](#ainsights)

AInsights


-----------------------------

A client library to effortlessly integrate powerful insights into your AI flows.

Create a client with minimal configuration and capture and request/response pair for future analysis.

### 

[](#notes)

Notes

#### 

[](#thread-safety)

**Thread-safety**

The insights client is thread-safe. You can safely use a single client from multiple threads.

#### 

[](#asynchronous)

**Asynchronous**

The insights client is asynchronous. `capture()`\-ing requests/responses is a non-blocking operation, and it will not interrupt the flow of your application.

[](#getting-started)

Getting Started


-----------------------------------------

### 

[](#id-1.-register-on-the-platform)

1\. Register on the Platform

*   Visit the platform and register for an account.
    
*   After registration, create an organization in the dashboard.
    

### 

[](#id-2.-create-an-api-key)

2\. Create an API Key

*   Navigate to the [Insights API page](https://app.requesty.ai/insight-api)
     in your account.
    
*   Generate an API key. This API key will be used to authenticate your requests.
    
*   Note: The same API key can be used for both Client Insights and Voice Insights. The only difference is the ingestion endpoint.
    

### 

[](#usage-pattern-1-create-client-instance)

Usage pattern #1: Create client instance

If you prefer creating and using client instance, just add an `AInsights` instance next to your `OpenAI` one, and capture every interaction by adding a single call.

It doesn't matter if you're using simple free-text outputs, JSON outputs or tools, the insights client will capture everything.

> Check out this [working sample](https://github.com/requestyai/requestyai-python/blob/main/samples/openai/client_instance.py)

Copy

    from openai import OpenAI
    from requestyai import AInsights
    
    
    class OpenAIWrapper:
        def __init__(self, openai_api_key, requesty_api_key):
            self.model = OpenAI(api_key=openai_api_key)
            self.args = {
                model="gpt-4o",
                temperature=0.7,
                max_tokens=150
            }
    
            self.insights = AInsights.new_client(api_key=requesty_api_key)
    
        def chat(self, user_id: str, user_input: str):
            messages = [\
                { "role": "system", "content": "You are a helpful assistant." },\
                { "role": "user", "content": user_input }\
            ]
    
            class Response(BaseModel):
                answer: str
    
            response = self.model.beta.chat.completions.parse(messages=messages,
                                                              response_format=Response,
                                                              **self.args)
    
            self.insights.capture(messages=messages,
                                  response=response,
                                  args=self.args,
                                  user_id=user_id)
    
            return Response.model_validate_json(response.choices[0].message.content)
    
    
    if __name__ == "__main__":
        requesty_api_key = os.environ["REQUESTY_API_KEY"]
        openai_api_key = os.environ["OPENAI_API_KEY"]
    
        wrapper = OpenAIWrapper(openai_api_key, requesty_api_key)
    
        # Dummy loggin to capture the user's ID
        user_id = input("User ID: ")
    
        while True:
            user_input = input("Ask any question?")
            response = wrapper.chat(user_id, user_input)
            print(response.answer)

### 

[](#usage-pattern-2-use-a-global-instance)

Usage pattern #2: Use a global instance

You like it simple. You just want to call OpenAI from anywhere in your code, and the insights should be no different.

Just create a simple file (`ainsights_instance.py` is a reasonable name) in your project, and import it everywhere. The client is thread-safe.

> Check out this [working sample](https://github.com/requestyai/requestyai-python/blob/main/samples/openai/client_global.py)

Copy

    import os
    from requestyai import AInsights
    
    
    requesty_key = os.environ["REQUESTY_KEY"]
    ainsights = AInsights.new_client(api_key=requesty_key)

Then, calling OpenAI and capturing is as easy as:

It doesn't matter if you're using simple free-text outputs, JSON outputs or tools, the insights client will capture everything.

Copy

    from openai import OpenAI
    from ainsights_instance import ainsights
    
    
    if __name__ == '__main__':
        openai.api_key = os.environ["OPENAI_API_KEY"]
    
        messages = [{ "role": "user", "content": user_input }]
        args = {
            model="gpt-4o-mini",
            temperature=0.7,
            max_tokens=150
        }
        response = openai.chat.completions.create(messages=messages, **args)
    
        ainsights.capture(messages=messages, response=response, args=args)
    
        print(response.choices[0].message.content)

### 

[](#user-tracking)

User tracking

If you want your insights to be tied to a specific user, you can specify the `user_id` argument when calling `capture(...)`.

See "Usage pattern #1" above for specific details.

### 

[](#sample-applications)

Sample applications

Check out the [samples](https://github.com/requestyai/requestyai-python/blob/main/samples/)
 directory for working examples you can try out in no time.

[PreviousAnalytics-only](/integrating-with-requesty/integrations)
[NextLLM Insights API](/integrating-with-requesty/integrations/llm-insights-api)

Last updated 2 months ago

Was this helpful?

---

# Get started with Requesty | Requesty Docs

Welcome to the **Requesty** documentation! This guide is designed to help you navigate and make the most of our platform's features, from setting up integrations to leveraging advanced analytics tools.

Whether you're new to Requesty or looking to deepen your understanding, we've got you covered.

[](#how-can-you-use-requesty)

**How can you use Requesty?**


----------------------------------------------------------------

### 

[](#test-your-first-llm-powered-application)

**Test your first LLM-powered application**

Begin by creating and deploying your initial application utilizing Large Language Models (LLMs).

### 

[](#evaluate-the-performance-of-your-llm-application)

**Evaluate the performance of your LLM application**

Use our analytics tools to assess how effectively your application meets user needs.

### 

[](#monitor-usage-of-your-llm-application)

**Monitor usage of your LLM application**

Keep track of user interactions and engagement to ensure optimal performance.

[](#lets-set-you-up)

Let's set you up


------------------------------------------

You can start analysing in just 5 minutes:

1.  Create your account at [https://app.requesty.ai](https://app.requesty.ai)
    
2.  Start sending interaction data to Requesty through our [Integration options](/integrating-with-requesty/integrations)
    
3.  Once you're integrated, your logs and analytics are available in the Platform within minutes
    

[**Integration options**\
\
Integrate your system: LLM, chat, voice, or custom data source](/integrating-with-requesty/integrations)
[**Platform features**\
\
Explore our platform features, from analytics to annotation](/platform/chatlogs)

[NextRequesty Router](/router/requesty-router)

Last updated 2 months ago

Was this helpful?

![Page cover image](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252Frvs59GiSQMWPMcLxSWHN%252FRequesty_MaaS.png%3Falt%3Dmedia%26token%3Db6a78567-861c-4c7a-aeff-c15079d007f8&width=1248&dpr=4&quality=100&sign=db02b6ea&sv=2)

---

# Prompt playground | Requesty Docs

[PreviousChatlogs](/platform/chatlogs)
[NextInsight Explorer](/platform/insight-explorer)

Last updated 2 months ago

Was this helpful?

Whether you're fine-tuning prompt phrasing, benchmarking model responses, or automating prompt improvement, the Prompt Playground provides powerful features to refine your interactions with language models.

Key capabilities include running multiple prompts simultaneously, storing and versioning prompts, and evaluating their performance through automated metrics. This feature is designed to support both novice and expert users in creating, testing, and perfecting prompt strategies for diverse applications.

[](#overview)

Overview


---------------------------

The Prompt Playground empowers you to:

*   Optimize prompts by running and comparing multiple versions simultaneously.
    
*   Store and version prompts automatically for future reference and iteration.
    
*   Use existing datasets on the platform or upload your own CSV datasets for testing.
    
*   Switch between a **Standard View** for an overview of prompts, datasets, and outputs, and a **Detailed View** to examine individual dataset entries and their corresponding model outputs.
    
*   Automatically improve prompts using AI-driven methods, including:
    
    *   **Regular Improvement:** Provide inputs and expected outputs to refine performance.
        
    *   **AI Optimization:** Let an AI model generate improved prompts.
        
    *   **Edge Case Handling:** Define specific scenarios to address unique challenges.
        
    *   **Input-output prompting:** Just set the input and expected output to generate a prompt
        
    
*   Evaluate prompt performance with built-in tools and metrics.
    
*   Create benchmarks to compare model outputs against accurate annotations, including manual validation of annotations.
    

[](#supported-data-sources)

Supported Data Sources


-------------------------------------------------------

Prompt Playground supports multiple data sources for testing and optimization:

*   **Platform Datasets:** Use datasets already available within the platform.
    
*   **Uploaded CSV Datasets:** Upload custom datasets to simulate real-world scenarios for prompts.
    

[](#automated-prompt-improvement)

Automated Prompt Improvement


-------------------------------------------------------------------

The Prompt Playground includes tools for automatically refining prompts:

1.  **Regular Improvement:**
    
    *   Let the system iterate on your prompts for improved performance.
        
    
2.  **Edge Case Handling:**
    
    *   Specify edge cases to improve prompt coverage for unique scenarios.
        
    
3.  **Input-output prompting:**
    
    *   Just set the input and expected output to generate a prompt
        
    
4.  **AI Optimization:**
    
    *   Enable an AI model to suggest improvements to your prompts.
        
    

[](#performance-evaluation)

Performance Evaluation


-------------------------------------------------------

The Playground provides detailed metrics for assessing prompt effectiveness:

*   **Evaluation Tools:** Run evaluators to judge model performance on prompts.
    
*   **Benchmark Creation:** Compare model outputs to accurate annotations.
    
*   **Manual Validation:** Validate annotations manually for additional precision.
    

### 

[](#metrics-and-insights)

Metrics and Insights

Prompt performance is automatically recorded and analyzed, providing the following metrics:

*   **Prompt Name:** Identifier for each tested prompt.
    
*   **Evaluation Method:** Method used for evaluating the prompt.
    
*   **Success Rate:** Percentage of successful outputs based on benchmarks.
    
*   **Time per Request:** Average time taken for the model to respond.
    
*   **Input Tokens:** Number of tokens in the input prompt.
    
*   **Output Tokens:** Number of tokens in the model's response.
    
*   **Rows:** Number of dataset rows processed.
    

[](#how-to-use-the-prompt-playground)

How to Use the Prompt Playground


---------------------------------------------------------------------------

#### 

[](#accessing-the-prompt-playground)

Accessing the Prompt Playground

1.  **Login:** Sign in to your account.
    
2.  **Navigate:** Click on the [**Prompt Playground**](https://app.requesty.ai/prompt-playground)
     tab from the main menu.
    

#### 

[](#running-and-comparing-prompts)

Running and Comparing Prompts

1.  **Select Dataset:** Choose a dataset from the platform or upload your own CSV file.
    
2.  **Enter Prompts:** Add prompts to test.
    
3.  **Run Simultaneously:** Execute multiple prompts at once to compare their outputs.
    
4.  **View Results:** Switch between the Standard View for an overview and the Detailed View for entry-level analysis.
    

#### 

[](#improving-prompts)

Improving Prompts

1.  **Select Improvement Type:** Choose Regular Improvement, Edge Case Handling, Input-output prompt generation, or AI Optimization.
    
2.  **Set Parameters:** Describt the improvement you're looking for, set the input and expected output, or edge cases.
    
3.  **Run Improvement:** Let the Playground refine the prompts automatically.
    
4.  **Run the updated prompt**
    
5.  **Evaluate Results:** Review the optimized prompts and outputs.
    

#### 

[](#evaluating-prompt-performance)

Evaluating Prompt Performance

1.  **Run Evaluators:** Write an evaluator prompt, and run it over the dataset to measure its performance.
    
2.  **Create Benchmarks:** Compare model outputs against already annotated data in the dataset.
    
3.  **Validate Annotations:** Manually validate or refine annotations for accuracy.
    

[](#use-cases)

Use Cases


-----------------------------

### 

[](#prompt-optimization)

Prompt Optimization

*   Test multiple prompt variations to determine which yields the best performance.
    
*   Refine prompts to handle complex user inputs and edge cases effectively.
    

### 

[](#model-evaluation)

Model Evaluation

*   Use evaluators to assess the success rate and efficiency of prompts.
    
*   Benchmark prompts against annotated datasets for objective performance metrics.
    

### 

[](#dataset-testing)

Dataset Testing

*   Upload real-world datasets to test prompt performance in practical scenarios.
    
*   Use the Detailed View to examine the impact of prompts on specific data entries.
    

### 

[](#collaborative-workflow)

Collaborative Workflow

*   Store and version prompts automatically, enabling teams to collaborate and track changes.
    
*   Share prompt configurations and benchmarks with team members for joint analysis.
    

[](#tips-for-effective-use)

Tips for Effective Use


-------------------------------------------------------

*   **Leverage Views:** Use the Standard View for high-level comparisons and the Detailed View for deeper analysis.
    
*   **Automate Improvements:** Save time by using AI-driven prompt optimization tools.
    
*   **Validate Regularly:** Periodically validate annotations and benchmarks to ensure the highest accuracy.
    
*   **Experiment Freely:** Run multiple prompts simultaneously to explore new ideas and strategies.
    
*   **Save Configurations:** Keep track of successful configurations by saving them for future use.
    

The Prompt Playground is your all-in-one solution for testing, optimizing, and perfecting prompts for any application. With these powerful tools and detailed analytics, you can refine your prompt strategies and achieve continuous performance, quickly.

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FGaqAttZwr5YjPCuUi88s%252Fimage.png%3Falt%3Dmedia%26token%3D6e4c9865-2f28-4b10-8080-ab1f8ed48e96&width=768&dpr=4&quality=100&sign=a5e45f6a&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FIy8poKneMl3kXfZxXBUg%252Fimage.png%3Falt%3Dmedia%26token%3D97e5c51a-fcee-4569-aba8-1b55979b6a09&width=768&dpr=4&quality=100&sign=6b541c83&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FERFe2lzYzaQWfUsivVug%252Fimage.png%3Falt%3Dmedia%26token%3D47d95fdd-675a-4278-b13b-eb9ae2b785a7&width=768&dpr=4&quality=100&sign=eae13b52&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FiX623DFLNDKSWbSHAbZb%252Fimage.png%3Falt%3Dmedia%26token%3D61200b38-196e-4bdc-ae1d-ce6cb258bac6&width=768&dpr=4&quality=100&sign=5d7dd59c&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252F0S4EDJvaICa7M81n6lpN%252Fimage.png%3Falt%3Dmedia%26token%3D68ce1dfc-443f-42ec-b16f-ef9c430cb5b0&width=768&dpr=4&quality=100&sign=257c28df&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252Fnk9SzzTE7xFhia80pVbH%252Fimage.png%3Falt%3Dmedia%26token%3Da4e0f44d-be6f-4ce3-9949-5d22ca82ddfd&width=768&dpr=4&quality=100&sign=1078c86b&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FwU1YIHt2xzsxoZgKgiaE%252Fimage.png%3Falt%3Dmedia%26token%3D36fcbbb4-06bf-4f1d-b631-497c33c2432b&width=768&dpr=4&quality=100&sign=203e7991&sv=2)

---

# Reports | Requesty Docs

[PreviousInsight Explorer](/platform/insight-explorer)
[NextData processor](/platform/data-processor)

Last updated 2 months ago

Was this helpful?

The Reports feature simplifies the process of building narratives around your data insights and facilitates seamless sharing with your team. Whether you aim to create compelling data story to analyze model usage, track user behavior, or identify trends over time, the Reports function provides functionality for informed decision-making.

[](#data-selection-and-categories)

Data Selection and Categories


---------------------------------------------------------------------

Before creating a report, you need to select the data you wish to analyze. This source can be a dataset that you've uploaded, a segment of data that you selected from the [Insight Explorer](/platform/insight-explorer)
, or one you uploaded in the Data Processor. This data should be categorized based on specific attributes, which is either automatically attached to the data you send into Requesty or manually annotated by you in the Data Processor. These categories enable you to filter and group your data effectively, ensuring that your reports focus on the most relevant information.

[](#key-features)

Key Features


-----------------------------------

### 

[](#block-types)

Block Types

The Reports function offers a variety of blocks that you can add to customize your report. Each block serves a specific purpose and allows for detailed data representation. Below is a clear separation of the different blocks you can create:

#### 

[](#id-1.-group-by-chart)

**1\. Group By Chart**

*   **Purpose**: Generate bar charts based on your data categories.
    
*   **Functionality**:
    
    *   Visualize categorical data distribution.
        
    *   Group data based on specific attributes.
        
    *   Customize the display to show absolute amounts or percentages.
        
    *   Limit the display to the top N categories (e.g., top 5 or top 10).
        
    

#### 

[](#id-2.-line-chart)

**2\. Line Chart**

*   **Purpose**: Display how categories develop over time to illustrate trends.
    
*   **Functionality**:
    
    *   Plot data points over a selected date range.
        
    *   Analyze trends and patterns in your data.
        
    *   Customize time intervals (e.g., daily, weekly, monthly).
        
    

#### 

[](#id-3.-exploration-chart)

**3\. Exploration Chart**

*   **Purpose**: Compare different data segments and filters side by side.
    
*   **Functionality**:
    
    *   Combine multiple data segments for comparative analysis.
        
    *   Display data as grouped bars or stacked bar charts.
        
    *   Order and arrange data to highlight key comparisons.
        
    

#### 

[](#id-4.-number-block)

**4\. Number Block**

*   **Purpose**: Display key metrics such as totals, averages, or percentage growth.
    
*   **Functionality**:
    
    *   Select specific data segments to highlight important figures.
        
    *   Customize the metric type (e.g., sum, average, growth rate).
        
    *   Emphasize critical data points in your report.
        
    

#### 

[](#id-5.-text-block)

**5\. Text Block**

*   **Purpose**: Add explanatory text to your report.
    
*   **Functionality**:
    
    *   Insert free-form text anywhere in your report.
        
    *   Provide context, explanations, or insights between charts.
        
    *   Enhance the narrative flow of your data story.
        
    

### 

[](#advanced-data-filtering)

Advanced Data Filtering

Within each block, you can build filters to determine the data you want to show and how it should be presented. Filters allow you to include or exclude categories, set date ranges, and group data according to your needs.

*   **Filter by Categories**: Include or exclude specific data categories.
    
*   **Date Range Selection**: Focus on data within a particular time frame.
    
*   **Grouping Options**: Group data by various attributes for detailed analysis.
    

### 

[](#interactive-data-exploration)

Interactive Data Exploration

*   **Chart Interactivity**: Click on chart elements to access additional options.
    
    *   **Show Conversations**: View the underlying data within a segment.
        
    *   **Remove from Chart**: Exclude specific data from the chart.
        
    *   **Create New Chart**: Generate a new chart based on a selected data segment.
        
    
*   **Conversation View**:
    

*   Navigate through entries in a data segment intuitively.
    
*   Save interesting data examples directly into the report.
    
*   Edit conversation titles to clarify their relevance.
    

### 

[](#collaboration-and-sharing)

Collaboration and Sharing

*   **Report Saving**: Save your report with a custom name for future access.
    
*   **Loading Reports**: Colleagues can load saved reports by clicking 'Load Report'.
    
*   **Comments and Tagging**:
    
    *   Add comments to report components.
        
    *   Tag team members to highlight specific insights or request feedback.
        
    

[](#how-to-use-the-reports-function)

How to Use the Reports Function


-------------------------------------------------------------------------

### 

[](#accessing-the-reports-function)

Accessing the Reports Function

1.  **Login**: Sign in to your Requesty account.
    
2.  **Navigate**: From the dashboard, click on the **Reports** tab in the main menu.
    

### 

[](#building-your-report)

Building Your Report

#### 

[](#step-1-select-data)

**Step 1: Select Data**

*   When you're creating a new report (rather than [loading an existing report](/platform/reports#load-an-existing-report)
    ), you first need to select a context. This **context** is a source of data that you want to analyse.
    

#### 

[](#step-2-add-blocks-to-your-report)

**Step 2: Add Blocks to Your Report**

*   Click on **Add Block** and select the desired block type:
    
    *   **Group By Chart**
        
    *   **Line Chart**
        
    *   **Exploration Chart**
        
    *   **Text Block**
        
    *   **Number Block**
        
    

#### 

[](#step-3-configure-block-settings)

**Step 3: Configure Block Settings**

*   **Filters**:
    
    *   Build filters within each block to refine your data.
        
    *   Include or exclude categories (e.g., user location, spam labels).
        
    *   Set the date range relevant to your analysis.
        
    
*   **Grouping and Display Options**:
    
    *   Determine how to group your data (e.g., by category, time).
        
    *   Choose between absolute amounts or percentage displays.
        
    *   Limit data display to top N categories if needed.
        
    

#### 

[](#step-4-customize-and-interact-with-charts)

**Step 4: Customize and Interact with Charts**

*   **Add Chart Explanation**:
    
    *   Click on **Add Chart Explanation** to provide context below the chart.
        
    
*   **Chart Interaction**:
    
    *   Click on chart elements to access options like **Show Conversations**, **Remove from Chart**, or **Create New Chart**.
        
    
*   **Save Conversations in Report**:
    
    *   While viewing conversations, click **Save Conversations in Report** to include specific data examples.
        
    *   Edit titles to clarify their relevance to your report.
        
    

#### 

[](#step-5-organize-your-report)

**Step 5: Organize Your Report**

*   **Edit Block Titles**:
    
    *   Click on the block title to rename it, clarifying the content.
        
    
*   **Arrange Blocks**:
    
    *   Move blocks up or down to structure your data story logically.
        
    
*   **Add Text Blocks**:
    
    *   Insert text blocks between charts to enhance narrative flow.
        
    

### 

[](#saving-and-sharing-your-report)

Saving and Sharing Your Report

*   **Save Report**:
    
    *   Click **Save** after changing the title to save your report.
        
    *   Alternatively, use **Save As** to create a new version.
        
    
*   **Load Report**:
    
    *   Team members can access your report by clicking **Load Report**.
        
    

*   **Collaboration**:
    
    *   Add comments to report components.
        
    *   Tag colleagues to share insights or request input.
        
    

[](#use-cases)

Use Cases


-----------------------------

### 

[](#analyzing-llm-model-usage)

Analyzing LLM Model Usage

*   **Filter by User Location**:
    
    *   Include users from specific regions (e.g., the US).
        
    
*   **Exclude Specific Categories**:
    
    *   Exclude data labeled as 'spam' or other irrelevant categories.
        
    
*   **Visualize Usage Patterns**:
    
    *   Use line charts to track usage trends over time.
        
    *   Employ group by charts to see distribution across different categories.
        
    

### 

[](#comparing-data-segments)

Comparing Data Segments

*   **Exploration Chart**:
    
    *   Compare user locations of all users who sent spam to your LLM application.
        
    
*   **Visualization Options**:
    
    *   Choose between grouped or stacked bar charts.
        
    *   Order data to highlight significant differences.
        
    

### 

[](#highlighting-key-metrics)

Highlighting Key Metrics

*   **Number Block**:
    
    *   Display total usage numbers, average session lengths, or percentage growth.
        
    
*   **Contextual Analysis**:
    
    *   Place number blocks alongside charts to emphasize critical data points.
        
    

### 

[](#building-a-data-narrative)

Building a Data Narrative

*   **Text Blocks**:
    
    *   Provide introductions, explanations, or conclusions between data visualizations.
        
    
*   **Data Storytelling**:
    
    *   Arrange blocks to guide the reader through your insights logically.
        
    

[](#tips-for-effective-use)

Tips for Effective Use


-------------------------------------------------------

#### 

[](#combine-filters-for-deeper-insights)

Combine Filters for Deeper Insights

*   Use multiple filters to narrow down your data to highly specific segments.
    
*   Combine category inclusions and exclusions for precise control.
    

#### 

[](#regularly-update-your-reports)

Regularly Update Your Reports

*   Refresh your data selections and filters to keep reports up-to-date.
    
*   Monitor trends by adjusting date ranges as new data comes in.
    

#### 

[](#utilize-interactive-features)

Utilize Interactive Features

*   Engage with charts by clicking on data segments for more options.
    
*   Explore conversations within data segments to uncover qualitative insights.
    

#### 

[](#collaborate-with-your-team)

Collaborate with Your Team

*   Use comments and tagging to involve colleagues in your analysis.
    
*   Share reports by saving them with clear names and instructing team members to load them.
    

#### 

[](#save-and-reuse-report-templates)

Save and Reuse Report Templates

*   Create report templates for recurring analyses.
    
*   Use **Save As** to build new reports based on existing ones.
    

The Reports function is a powerful tool for transforming raw data into actionable insights. By leveraging various block types, advanced filtering, and interactive features, you can build comprehensive reports that tell a compelling data story.

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FLU7TJmJpPirbP7VP89tc%252Fimage.png%3Falt%3Dmedia%26token%3D756691fc-222c-49ad-a39e-61f89abfaab7&width=768&dpr=4&quality=100&sign=f346d7eb&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FUVgKPVf5lamTJ4VZh2s2%252Fimage.png%3Falt%3Dmedia%26token%3D4c230c7f-808d-4cad-91bc-bf6630cfe532&width=768&dpr=4&quality=100&sign=c2514507&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FNnW3BMq7sSfbPxnny1s3%252Fimage.png%3Falt%3Dmedia%26token%3D553a0213-ec83-4e61-81a1-847552401135&width=768&dpr=4&quality=100&sign=864ba474&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FnN4ST17zFej3D8T3vlFf%252Fimage.png%3Falt%3Dmedia%26token%3D81378b79-50f3-447e-9bec-90b638827ba9&width=768&dpr=4&quality=100&sign=3d1a3e7d&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252F2JvFi24C9DqQ9xtkFdCh%252Fimage.png%3Falt%3Dmedia%26token%3De9f97cba-27f3-47c7-a203-f040a7ccd50a&width=768&dpr=4&quality=100&sign=536726c1&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252F25WT7K1rE9gcrEgVxUpR%252FScreenshot%25202024-11-21%2520at%252010.32.34.png%3Falt%3Dmedia%26token%3D14961201-ac19-4397-b13e-723a3e01c0ba&width=768&dpr=4&quality=100&sign=36f6f00f&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FjZDbugYOhgO98JEoKqoX%252Fimage.png%3Falt%3Dmedia%26token%3D5d912fac-3c01-4f88-9048-4a8707b0a4e2&width=768&dpr=4&quality=100&sign=f8bc70a8&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FPSwibvpELRXUtgwpIwdU%252FScreenshot%25202024-11-21%2520at%252009.26.40.png%3Falt%3Dmedia%26token%3Deaeba073-2594-427a-a371-c2c581c5ef22&width=768&dpr=4&quality=100&sign=adc44cbe&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FEGpf85uSxJFax1VmQUVS%252FScreenshot%25202024-11-21%2520at%252009.30.24.png%3Falt%3Dmedia%26token%3D0c1a226a-ff5c-48a9-a472-4e300f362674&width=768&dpr=4&quality=100&sign=a3a1f59f&sv=2)

---

# Insight Explorer | Requesty Docs

[PreviousPrompt playground](/platform/prompt-playground)
[NextReports](/platform/reports)

Last updated 2 months ago

Was this helpful?

The Insight Explorer is a powerful feature that enables you to explore your data, uncover patterns, and gain highly specific insights.

You can build complex, custom filters using a variety of attributes, visualize data through interactive charts, and explore individual conversations. Whether you're looking to analyze user behavior, track conversation topics, explore customer feedback, or identify trends over time, the Insight Explorer provides all the tools you need for informed decision-making.

The Insight Explorer lets you analyze diverse types of conversational and interaction data, sourced from various channels and formats:

1.  **Language Model Interactions**:
    
    *   Chat-Based Sessions: Ongoing, conversational interactions between users and a language model, similar to chatbots like ChatGPT, covering multiple topics.
        
    *   Prompt-Response Exchanges: Specific prompts from users for targeted responses, such as data analytics requests or content generation, where the model provides a single, structured reply.
        
    
2.  **Customer Support Conversations**:
    
    *   Human Agent: Text-based interactions where users communicate with live customer support representatives.
        
    *   AI Agent: Automated customer service conversations with an AI-powered agent that provides support, answers questions, and addresses user concerns.
        
    
3.  **Uploaded Data**:
    
    *   **Survey Data**: Results from customer or market research surveys that offer insights into user preferences, opinions, and demographics.
        
    *   **Feedback Forms**: Direct feedback collected from customers about their experiences, preferences, or requests.
        
    *   **Logs from LLM Features**: Records of interactions with language models, capturing usage patterns, prompts, and responses for analytics or monitoring.
        
    *   **Community Forum Data**: Discussions from online communities, such as support forums or customer groups, providing authentic, community-driven insights.
        
    *   **Scraped Data**: Data collected from external sources like Reddit, Trustpilot or other public websites, often providing informal customer sentiment, trends, or user-generated insights.
        
    
    Users can upload this data themselves via the CSV uploader in the platform, enabling you to seamlessly integrate external datasets and enrich their analysis within the Insight Explorer.
    

[](#key-data-attributes)

Key Data Attributes


-------------------------------------------------

Insight Explorer supports filtering and grouping based on a range of attributes, enabling a tailored view of the data. Key attributes include:

*   **User Attributes**: Demographic or user profile data, such as location, subscription type, and other characteristics.
    
*   **Conversation/Interaction Attributes**: Conversation-specific elements, including keywords, topics, query types, and whether the interaction types.
    
*   **Upload Source**: The origin of uploaded data, such as survey results, feedback forms, forum posts, or LLM logs, providing context for deeper analysis.
    

With these filtering capabilities, the Insight Explorer offers flexibility to analyze conversational data, LLM interactions, and external datasets to uncover patterns, trends, and actionable insights across multiple sources.

[](#key-features)

Key Features


-----------------------------------

### 

[](#advanced-data-filtering)

Advanced Data Filtering

*   **User Attributes**: Filter data based on user-specific information such as location, subscription type, demographics, or other profile details.
    
*   **Conversation Attributes**: Refine data using keywords, conversation topics, or the type of query, whether from customer support, an AI model, or uploaded interactions.
    
*   **Uploaded Data Sources**: Combine filters for data you’ve uploaded yourself—such as surveys, feedback forms, LLM logs, community forum posts, or scraped web data (e.g. Reddit or Trustpilot)—to uncover insights from various channels.
    

With **multi-layered filtering**, you can combine user, conversation, and source attributes to create intricate queries that surface precise insights. For instance, you can identify common customer issues by location and subscription type across different channels or pinpoint the most frequently mentioned topics in user-uploaded feedback forms and support logs.

### 

[](#data-vizualisation)

Data Vizualisation

*   **Interactive Charts**: Display your structured data using bar charts and line graphs to see patterns visually.
    
*   **Grouping and Aggregation**: Group data by user, conversation, or other attributes to see totals, averages, or percentages.
    
*   **Percentage Toggle**: Switch between absolute numbers and percentage views for context on relative frequencies.
    
*   **Trend Analysis**: Visualize data over time to detect emerging patterns, spikes, or trends in customer feedback, conversation topics, or other key indicators.
    

### 

[](#in-depth-conversation-exploration)

In-depth conversation exploration

*   **Detailed Interaction Viewing**: Access individual interactions to examine user messages/prompts and LLM/agent responses.
    
*   **Save to Collections**: Save relevant interactions into collections to easily share examples of interesting prompts, responses, or conversation patterns.
    
*   **Analyze Content**:
    
    *   **Word Cloud**: View a word cloud for prominent themes and frequently used words.
        
    *   **Frequent Questions**: Review the list of the most common questions users ask.
        
    *   **Recurring Messages**: Identify messages that appear frequently, providing insight into user concerns.
        
    *   **URLs Mentioned**: See which URLs are often included in responses, identifying frequently referenced resources.
        
    *   **Category Comparison**: Analyze and compare different data categories side by side to identify differences, similarities, or anomalies.
        
    

[](#how-to-use-the-insight-explorer)

How to use the Insight Explorer


-------------------------------------------------------------------------

### 

[](#accessing-the-insight-explorer)

Accessing the Insight Explorer

1.  Login: Sign in to your Requesty account.
    
2.  Navigate: From the dashboard, click on the Insight Explorer tab in the main menu.
    

### 

[](#building-complex-filters)

Building Complex Filters

1.  Select Filters:
    
    *   User Attributes: Choose attributes such as location, subscription type, or other demographic details.
        
    *   Conversation Attributes: Input specific keywords or select conversation topics to narrow down results.
        
    
2.  Combine Filters: Mix multiple attributes across user profiles, conversation details, and data sources to build a comprehensive view.
    
3.  Apply Filters: Click Apply to filter your data based on the selected criteria.
    

### 

[](#visualizing-data)

Visualizing Data

1.  Group Data: Decide how to group your data (e.g., by user, conversation, topic) for meaningful aggregation.
    
2.  Choose Chart Type: Select a chart type (e.g., totals in a bar chart or trends on a line graph) that best represents your filtered data.
    
3.  Toggle Percentage View: Switch between absolute numbers and percentage views for context.
    
4.  Additional filtering: Click on the chart to add additional filters to your data segment.
    

### 

[](#exploring-conversations)

Exploring Conversations

1.  View Conversations: After applying filters, click on individual conversations to view the whole interaction.
    
2.  Analyze Content:
    
    *   Word Cloud: View a word cloud for prominent themes and frequently used words.
        
    *   Frequent Questions: Review the list of the most common questions users ask.
        
    *   Recurring Messages: Identify messages that appear frequently, providing insight into user concerns.
        
    *   URLs Mentioned: See which URLs are often included in responses, identifying frequently referenced resources.
        
    
3.  Save to Collections: Select relevant conversations or interactions and save them to collections for easy sharing and further analysis. This feature is especially useful for building examples of common user requests, interesting prompts, or specific conversation patterns.
    
4.  Compare Categories: Use category comparisons to analyze data segments side by side, enabling insights into different user behaviors, regions, or channels.
    

[](#use-cases)

Use Cases


-----------------------------

### 

[](#discovering-user-interactions-with-your-llm)

Discovering User Interactions with Your LLM

*   Task Analysis: Identify the types of tasks users are submitting to your language model, such as data analytics, information requests, content generation, or customer support inquiries.
    
*   Domain Exploration: Understand the domains of knowledge users are querying, such as finance, healthcare, education, or general information.
    
*   Prompt Patterns: Discover common prompt structures or phrasings that users employ, helping you improve prompt guidance or optimize the model’s responses for typical user needs.
    

### 

[](#product-development)

Product Development

*   Feature Requests: Identify recurring suggestions or feedback, especially from surveys and community forums, to guide product improvements.
    
*   Trend Spotting: Detect emerging topics or keywords across various channels, signalling new user needs or interests.
    

### 

[](#customer-support)

Customer Support

*   Common Issues: Identify frequent user questions or pain points across multiple channels.
    
*   Agent Performance: Evaluate human or AI agent responses for effectiveness and consistency.
    

### 

[](#marketing-insights)

Marketing Insights

*   Geographic Analysis: Determine which locations show the highest engagement and specific conversation topics of interest.
    
*   Subscription Trends: Analyze data based on subscription types to refine marketing and retention strategies.
    

[](#tips-for-effective-use)

Tips for Effective Use


-------------------------------------------------------

*   **Combine Filters**: For highly specific insights, use multiple filters simultaneously to pinpoint trends across different data types.
    
*   **Regular Updates**: Regularly refresh filters and data for up-to-date insights as new data streams in.
    
*   **Save Configurations**: Save filter configurations to quickly revisit complex views and share them with your team.
    
*   **Leverage Collections**: Use Collections to save, share, and revisit specific conversations or data segments for ongoing analysis and reference.
    

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2Flh7-rt.googleusercontent.com%2Fdocsz%2FAD_4nXfwfEfo1nGUUcnKqN04NwjYRZvRJC63cZQH8EbH10HfgAwE-b7jd3c_3bt1o1AWuSvtJcSJpdTk-F5Kr2s1hnNuiyLIgYI8uh4JVMAMn4Fi_MZZPc8hoqKoNMW9mSIO3NqyAIc_Iw%3Fkey%3D44z-qtrmATtef1x1GScFqbU3&width=768&dpr=4&quality=100&sign=9a1238&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2Flh7-rt.googleusercontent.com%2Fdocsz%2FAD_4nXcCbikjWwsyHiaHob4AmcbryZBLUFXwXbEpFe0oslaMymyEq970AtcJoCKYpqG_-GxvnuenpURYn3KDs2e5tavKMc8DPm_Eo1XVCSYbocJ8-95NWsozwZrAJRFehAAaR_TBZUYi%3Fkey%3D44z-qtrmATtef1x1GScFqbU3&width=768&dpr=4&quality=100&sign=272d0f4&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2Flh7-rt.googleusercontent.com%2Fdocsz%2FAD_4nXdWAn7IDt9HmXrjaKtsojKmf8xdtAMoDM9cM44Pr2Rz44k4oddjA2am2Qhf65DchA_j4Eha6WeSgVfyVhtaCu2KqFKY1BdKkcO4skdj3AMgtEC2WPpei40HAb7id197UHtEZYez%3Fkey%3D44z-qtrmATtef1x1GScFqbU3&width=768&dpr=4&quality=100&sign=ffdad12d&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2Flh7-rt.googleusercontent.com%2Fdocsz%2FAD_4nXcIkjr6G6e2Gqd8nNKVZNPvLzRcaDxHLP-K1PWBSBeykGqIBRCut2zGdrERvWy4RzFytTQdYZgERKgxvyAz_LcEaoPX0zO7jTfNBwVYhKajqWTrj744L1exPori7v9ITHgf_uhEvg%3Fkey%3D44z-qtrmATtef1x1GScFqbU3&width=768&dpr=4&quality=100&sign=64618462&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2Flh7-rt.googleusercontent.com%2Fdocsz%2FAD_4nXfrqDTIlf427egwDREyONxNL3D-IYfKZDskTdijSHyT9McFvDUnbUvwSLX4P7_4kwC6_bpRfcGfSLvkwhE9e2Joc7aFg8aPxuf5eCc0jHa8GytkXSnUQbSJIBeZuOdCNA-X1Yq2%3Fkey%3D44z-qtrmATtef1x1GScFqbU3&width=768&dpr=4&quality=100&sign=e6c2d935&sv=2)

---

# Data processor | Requesty Docs

[PreviousReports](/platform/reports)
[NextAnalytics-only](/integrating-with-requesty/integrations)

Last updated 2 months ago

Was this helpful?

The Data Processor is a powerful feature that allows you to enhance and enrich your datasets within the platform. It offers capabilities such as adding manual annotations quickly, and utilizing AI annotations to automate and scale your data enhancement efforts. Whether you're preparing data for analysis, training models, or generating insights, the Data Processor provides all the functionality you need for efficient data management and augmentation.

[](#data-upload-and-manual-annotation)

Data Upload and Manual Annotation


-----------------------------------------------------------------------------

Before you begin enhancing your dataset, you need to upload your data into the platform. The Data Processor supports CSV files, making it easy to import data from various sources.

### 

[](#uploading-a-csv-file)

Uploading a CSV File

*   **Step 1**: Navigate to the Data Processor section in the platform.
    
*   **Step 2**: Click on the **Upload CSV** button.
    
*   **Step 3**: Select the CSV file from your local machine and upload it.
    
*   **Step 4**: Once uploaded, the data will be displayed in a spreadsheet format within the platform.
    

### 

[](#manual-annotation)

Manual Annotation

The Data Processor allows for quick manual annotation directly within the spreadsheet or through a modal that presents data entries more intuitively. You can set keys that assign a label to an entry with a single keystroke.

*   **Spreadsheet Annotation**:
    
    *   Edit cells directly in the spreadsheet view.
        
    *   Add new columns for annotations or additional data.
        
    *   Use copy-paste functions for rapid data entry.
        
    
*   **Modal Annotation**:
    
    *   Click on a row to open the data entry in a modal window.
        
    *   View data in a more readable format, especially for lengthy text entries.
        
    *   Add annotations or comments within the modal for better context.
        
    

[](#key-features)

Key Features


-----------------------------------

### 

[](#ai-annotations)

AI Annotations

AI Annotations enable you to automate the process of annotating your data using artificial intelligence. This feature considers the data from selected columns and provides annotations based on your configuration.

### 

[](#configuring-ai-annotations)

**Configuring AI Annotations**

*   **Benchmark Column**: Optionally select a benchmark column to compare AI outputs against existing data.
    
*   **Data Selection**: Choose the columns that the AI assistant will consider for generating annotations.
    
*   **Annotation Requirements**: Define what annotations you need based on your data and objectives.
    

### 

[](#ai-annotation-methods)

**AI Annotation Methods**

The Data Processor offers several AI annotation methods to suit different data enhancement needs:

#### 

[](#id-1.-freeform)

**1\. Freeform**

*   **Purpose**: Generate open-ended annotations based on your prompt.
    
*   **Functionality**:
    
    *   Write a custom prompt to guide the AI in generating annotations.
        
    *   Useful for extracting insights or summaries from data.
        
    

#### 

[](#id-2.-infer-and-group)

**2\. Infer and Group**

*   **Purpose**: Infer themes or categories from data and group them accordingly.
    
*   **Functionality**:
    
    *   The AI identifies underlying patterns or topics.
        
    *   Groups data entries into inferred categories.
        
    

#### 

[](#id-3.-single-choice)

**3\. Single Choice**

*   **Purpose**: Classify data into predefined categories with a single selection.
    
*   **Functionality**:
    
    *   Define a list of possible categories.
        
    *   The AI assigns each data entry to one category.
        
    

#### 

[](#id-4.-multiple-values)

**4\. Multiple Values**

*   **Purpose**: Assign multiple applicable categories to each data entry.
    
*   **Functionality**:
    
    *   Define a list of possible categories.
        
    *   The AI selects all relevant categories for each entry.
        
    

#### 

[](#id-5.-classify-and-infer)

**5\. Classify and Infer**

*   **Purpose**: Combine classification with inference for more nuanced annotations.
    
*   **Functionality**:
    
    *   The AI classifies data based on predefined categories.
        
    *   Additionally, infers sub-categories or attributes within those classifications.
        
    

### 

[](#using-saved-prompts-and-prompt-improvement)

**Using Saved Prompts and Prompt Improvement**

*   **Saved Prompts**:
    
    *   Utilize prompts you've previously created in the [Prompt Playground](/platform/prompt-playground)
        .
        
    *   Save time by reusing effective prompts across different datasets.
        
    
*   **Prompt Improvement**:
    

*   Leverage AI assistance to refine and enhance your prompts.
    
*   Ensure that prompts are optimized for the desired annotation outcomes.
    

### 

[](#data-filtering)

Data Filtering

*   **Purpose**: Focus the Data Processor on a subset of the dataset for targeted enhancement.
    
*   **Functionality**:
    
    *   Apply filters based on specific criteria (e.g., include or exclude entries containing certain parameters).
        
    *   Streamline the annotation process by working only with relevant data.
        
    

### 

[](#calculation-feature)

Calculation Feature

*   **Purpose**: Generate insights on character and word lengths of data entries.
    
*   **Functionality**:
    
    *   Calculate the length of text in selected columns.
        
    *   Useful for estimating costs and complexities in prompt-response scenarios.
        
    

### 

[](#data-visualization-and-analysis)

Data Visualization and Analysis

*   **In-Processor Charting**:
    
    *   Create charts within the Data Processor for immediate quantitative insights.
        
    *   Compare different data columns and visualize distributions.
        
    
*   **Box Plots**:
    
    *   Generate box plots to display the mean and standard deviation of data segments.
        
    *   Analyze data variability and identify outliers.
        
    

### 

[](#iterative-processing-and-final-annotation)

Iterative Processing and Final Annotation

*   **Initial Processing**:
    
    *   Run analyses on a subset of the data (default is 50 entries).
        
    *   Allows for quick iteration and validation of your processing configuration.
        
    
*   **Final Annotation**:
    
    *   Once satisfied with the initial results, run the AI annotation on the full dataset.
        
    *   The processed data becomes accessible in the [Insight Explorer](/platform/insight-explorer)
         and [Reports](/platform/reports)
         function.
        
    

[](#how-to-use-the-data-processor)

How to Use the Data Processor


---------------------------------------------------------------------

### 

[](#accessing-the-data-processor)

Accessing the Data Processor

1.  **Login**: Sign in to your Requesty account.
    
2.  **Navigate**: From the dashboard, click on the [**Data Processor**](https://app.requesty.ai/dataprocessor)
     tab in the main menu.
    

### 

[](#enhancing-your-dataset)

Enhancing Your Dataset

#### 

[](#step-1-upload-your-data)

**Step 1: Upload Your Data**

*   Click on **Upload CSV** and select your file.
    
*   Wait for the data to load into the spreadsheet view.
    

#### 

[](#step-2-manual-annotations-optional)

**Step 2: Manual Annotations (Optional)**

*   **Spreadsheet View**:
    
    *   Edit or add data directly in the cells.
        
    *   Use spreadsheet functions for quick data manipulation.
        
    
*   **Modal View**:
    
    *   Click on a row to open the modal.
        
    *   Add annotations or comments in a more readable format.
        
    

#### 

[](#step-3-configure-ai-annotations)

**Step 3: Configure AI Annotations**

*   Click on **AI Annotations** to open the configuration panel.
    
*   **Select Annotation Method**:
    
    *   Choose from [Freeform](/platform/data-processor#id-1.-freeform)
        , [Infer](/platform/data-processor#id-2.-infer-and-group)
         [and Group](/platform/data-processor#id-2.-infer-and-group)
        , [Single Choice](/platform/data-processor#id-3.-single-choice)
        , [Multiple Values](/platform/data-processor#id-4.-multiple-values)
        , or [Classify and Infer](/platform/data-processor#id-5.-classify-and-infer)
        .
        
    
*   **Set Up Your Prompt**:
    
    *   Write a custom prompt or select a saved prompt.
        
    *   Use the AI prompt improvement feature if needed.
        
    
*   **Select Data Columns**:
    
    *   Choose which columns the AI should consider.
        
    
*   **Benchmark Column (Optional)**:
    
    *   Select a column to compare the AI output against existing annotations.
        
    

#### 

[](#step-4-apply-data-filters-optional)

**Step 4: Apply Data Filters (Optional)**

*   Click on **Filters** to narrow down the dataset.
    
*   Set criteria to include or exclude certain data entries.
    
*   Apply filters to focus on relevant data for annotation.
    

#### 

[](#step-5-use-the-calculation-feature)

**Step 5: Use the Calculation Feature**

*   Navigate to **Calculations**.
    
*   Select the columns for which you want to calculate character and word lengths.
    
*   View the results in new columns added to your dataset.
    

#### 

[](#step-6-chart-your-results)

**Step 6: Chart Your Results**

*   Click on **Chart Data** within the Data Processor.
    
*   Choose the columns you want to visualize.
    
*   Select the type of chart (e.g., bar chart, box plot).
    
*   Analyze the quantitative insights from your dataset.
    

#### 

[](#step-7-run-initial-processing)

**Step 7: Run Initial Processing**

*   Initially, run the AI annotations on a subset of the data (default is 50 entries).
    
*   Review the annotations and make adjustments to the configuration if necessary.
    

#### 

[](#step-8-perform-final-annotation)

**Step 8: Perform Final Annotation**

*   Once satisfied with the initial results, click on **Final Annotation**.
    
*   The AI will process the entire dataset based on your configuration.
    
*   Upon completion, the enhanced data is accessible in the [Insight Explorer](/platform/insight-explorer)
     and [Reports](/platform/reports)
     function.
    

[](#use-cases)

Use Cases


-----------------------------

### 

[](#data-preparation-for-model-training)

Data Preparation for Model Training

*   **Objective**: Annotate datasets with labels required for training machine learning models.
    
*   **Actions**:
    
    *   Use **Single Choice** or **Multiple Values** annotation methods to label data.
        
    *   Employ **Classify and Infer** to add nuanced annotations.
        
    

### 

[](#text-analysis-and-summarization)

Text Analysis and Summarization

*   **Objective**: Extract key themes or summaries from text data.
    
*   **Actions**:
    
    *   Utilize the **Freeform** method with prompts to generate summaries.
        
    *   Apply **Infer and Group** to categorize text entries based on inferred topics.
        
    

### 

[](#cost-estimation-for-prompt-response-use-cases)

Cost Estimation for Prompt-Response Use Cases

*   **Objective**: Estimate the cost and complexity of processing text data.
    
*   **Actions**:
    
    *   Use the **Calculation Feature** to determine character and word counts.
        
    *   Analyze the data to predict processing time and resources needed.
        
    

### 

[](#data-cleaning-and-standardization)

Data Cleaning and Standardization

*   **Objective**: Standardize data formats and correct inconsistencies.
    
*   **Actions**:
    
    *   Apply AI annotations to reformat data entries.
        
    *   Use **Freeform** prompts to instruct the AI on the desired data format.
        
    

### 

[](#rapid-data-insight-generation)

Rapid Data Insight Generation

*   **Objective**: Quickly generate insights and identify patterns in data.
    
*   **Actions**:
    
    *   Use in-processor charting to visualize data distributions.
        
    *   Generate box plots to understand data variability.
        
    

[](#tips-for-effective-use)

Tips for Effective Use


-------------------------------------------------------

### 

[](#start-with-a-subset)

Start with a Subset

*   Begin processing with a small subset to validate your configuration.
    
*   Adjust prompts and settings based on initial results before scaling up.
    

### 

[](#leverage-saved-prompts)

Leverage Saved Prompts

*   Reuse effective prompts from the Prompt Playground to save time.
    
*   Maintain a library of prompts for different annotation tasks.
    

### 

[](#utilize-data-filtering)

Utilize Data Filtering

*   Apply filters to focus on the most relevant data.
    
*   This improves processing speed and annotation quality.
    

### 

[](#refine-prompts-with-ai-assistance)

Refine Prompts with AI Assistance

*   Use the prompt improvement feature to enhance your prompts.
    
*   Clear and precise prompts yield better AI annotations.
    

### 

[](#regularly-review-annotations)

Regularly Review Annotations

*   Manually check a sample of AI annotations for accuracy.
    
*   Adjust configurations as needed to improve results.
    

### 

[](#combine-manual-and-ai-annotations)

Combine Manual and AI Annotations

*   Use manual annotations for complex cases where AI may struggle.
    
*   Combine both methods for comprehensive data enhancement.
    

The [Data Processor](https://requesty.ai/dataprocessor)
 is an essential feature for enhancing and managing your datasets efficiently. By offering a combination of manual and AI-powered annotation tools, it allows you to tailor your data precisely to your needs. Whether you're preparing data for analysis, modeling, or reporting, the Data Processor equips you with the capabilities to enrich your data, generate insights, and ensure that your datasets are ready for any downstream application. Utilize its powerful features like AI Annotations, data filtering, calculation tools, and in-processor charting to streamline your data enhancement workflows.

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FY6RtrrMvNQ18gy6smZ9Y%252Fimage.png%3Falt%3Dmedia%26token%3D2d294efd-bb72-4e11-b5cd-0721fdb50820&width=768&dpr=4&quality=100&sign=50af9e93&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FdA2EG4x1Zuz5WVRzUT9g%252Fimage.png%3Falt%3Dmedia%26token%3D5edbe03c-ff31-48a0-99ce-d6054619acf7&width=768&dpr=4&quality=100&sign=91a16618&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252Ffe5PGlLIvlGhBOb3Eqz1%252Fimage.png%3Falt%3Dmedia%26token%3D49fc274f-c7e6-4834-80e2-0f8aeddd8b37&width=768&dpr=4&quality=100&sign=f21efe02&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252Fppp1M7PfDIkaGWmVdY3J%252Fimage.png%3Falt%3Dmedia%26token%3Dbc4f48da-eda6-423d-9ec1-f58a4967e360&width=768&dpr=4&quality=100&sign=496bddbc&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FHvoba0FsnoY9jmMpPOLY%252Fimage.png%3Falt%3Dmedia%26token%3D8a6e7b4b-450c-4323-876b-47bfbaf8e82f&width=768&dpr=4&quality=100&sign=76b3ba53&sv=2)

![](https://docs.requesty.ai/~gitbook/image?url=https%3A%2F%2F380068880-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FlYeVFwyqYpwXifWW3m3c%252Fuploads%252FNurGSoKLlpUuQVFnGE4T%252Fimage.png%3Falt%3Dmedia%26token%3Df90c288a-b800-45f3-bb05-b1a0dc5126bc&width=768&dpr=4&quality=100&sign=9b4c8c88&sv=2)

---

# Custom data upload | Requesty Docs

Is your data in another format, or does it have a unique structure?

We're happy to work with you, to help you extract your insights. Just [contact us](https://requesty.ai/contact)
.

[PreviousLLM Insights API](/integrating-with-requesty/integrations/llm-insights-api)

Last updated 2 months ago

Was this helpful?

---


# Table of Contents

- [OpenRouter Quickstart Guide | Developer Documentation | OpenRouter | Documentation](#openrouter-quickstart-guide-developer-documentation-openrouter-documentation)
- [Principles | OpenRouter's Core Values and Mission | OpenRouter | Documentation](#principles-openrouter-s-core-values-and-mission-openrouter-documentation)
- [OpenRouter Models | Access 400+ AI Models Through One API | OpenRouter | Documentation](#openrouter-models-access-400-ai-models-through-one-api-openrouter-documentation)
- [OpenRouter Multimodal | Complete Documentation | OpenRouter | Documentation](#openrouter-multimodal-complete-documentation-openrouter-documentation)
- [OpenRouter PDF Inputs | Complete Documentation | OpenRouter | Documentation](#openrouter-pdf-inputs-complete-documentation-openrouter-documentation)
- [OpenRouter Image Inputs | Complete Documentation | OpenRouter | Documentation](#openrouter-image-inputs-complete-documentation-openrouter-documentation)
- [OpenRouter Image Generation | Complete Documentation | OpenRouter | Documentation](#openrouter-image-generation-complete-documentation-openrouter-documentation)
- [ChainID | OpenRouter Python SDK | OpenRouter | Documentation](#chainid-openrouter-python-sdk-openrouter-documentation)
- [CreateEmbeddingsResponse | OpenRouter Python SDK | OpenRouter | Documentation](#createembeddingsresponse-openrouter-python-sdk-openrouter-documentation)
- [ModelsListResponse | OpenRouter Python SDK | OpenRouter | Documentation](#modelslistresponse-openrouter-python-sdk-openrouter-documentation)
- [CreateCoinbaseChargeResponse | OpenRouter Python SDK | OpenRouter | Documentation](#createcoinbasechargeresponse-openrouter-python-sdk-openrouter-documentation)
- [CompletionResponse | OpenRouter TypeScript SDK | OpenRouter | Documentation](#completionresponse-openrouter-typescript-sdk-openrouter-documentation)
- [ListProvidersData | OpenRouter TypeScript SDK | OpenRouter | Documentation](#listprovidersdata-openrouter-typescript-sdk-openrouter-documentation)
- [CompletionUsage | OpenRouter TypeScript SDK | OpenRouter | Documentation](#completionusage-openrouter-typescript-sdk-openrouter-documentation)
- [CompletionChoice | OpenRouter TypeScript SDK | OpenRouter | Documentation](#completionchoice-openrouter-typescript-sdk-openrouter-documentation)
- [ActivityItem | OpenRouter TypeScript SDK | OpenRouter | Documentation](#activityitem-openrouter-typescript-sdk-openrouter-documentation)
- [CompletionFinishReason | OpenRouter TypeScript SDK | OpenRouter | Documentation](#completionfinishreason-openrouter-typescript-sdk-openrouter-documentation)
- [CompletionLogprobs | OpenRouter TypeScript SDK | OpenRouter | Documentation](#completionlogprobs-openrouter-typescript-sdk-openrouter-documentation)

---

# OpenRouter Quickstart Guide | Developer Documentation | OpenRouter | Documentation

OpenRouter provides a unified API that gives you access to hundreds of AI models through a single endpoint, while automatically handling fallbacks and selecting the most cost-effective options. Get started with just a few lines of code using your preferred SDK or framework.

Looking for information about free models and rate limits? Please see the [FAQ](https://openrouter.ai/docs/faq#how-are-rate-limits-calculated)

In the examples below, the OpenRouter-specific headers are optional. Setting them allows your app to appear on the OpenRouter leaderboards. For detailed information about app attribution, see our [App Attribution guide](https://openrouter.ai/docs/app-attribution)
.

Using the OpenRouter SDK (Beta)
-------------------------------

First, install the SDK:

npmyarnpnpm

`   |     |     | | --- | --- | | $   | npm install @openrouter/sdk |     `

Then use it in your code:

TypeScript SDK

`   |     |     | | --- | --- | | 1   | import { OpenRouter } from '@openrouter/sdk'; | | 2   |     | | 3   | const openRouter = new OpenRouter({ | | 4   | apiKey: '<OPENROUTER_API_KEY>', | | 5   | defaultHeaders: { | | 6   | 'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai. | | 7   | 'X-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai. | | 8   | },  | | 9   | }); | | 10  |     | | 11  | const completion = await openRouter.chat.send({ | | 12  | model: 'openai/gpt-4o', | | 13  | messages: [ | | 14  | {   | | 15  | role: 'user', | | 16  | content: 'What is the meaning of life?', | | 17  | },  | | 18  | ],  | | 19  | stream: false, | | 20  | }); | | 21  |     | | 22  | console.log(completion.choices[0].message.content); |     `

Using the OpenRouter API directly
---------------------------------

You can use the interactive [Request Builder](https://openrouter.ai/request-builder)
 to generate OpenRouter API requests in the language of your choice.

PythonTypeScript (fetch)Shell

`   |     |     | | --- | --- | | 1   | import requests | | 2   | import json | | 3   |     | | 4   | response = requests.post( | | 5   | url="https://openrouter.ai/api/v1/chat/completions", | | 6   | headers={ | | 7   | "Authorization": "Bearer <OPENROUTER_API_KEY>", | | 8   | "HTTP-Referer": "<YOUR_SITE_URL>", # Optional. Site URL for rankings on openrouter.ai. | | 9   | "X-Title": "<YOUR_SITE_NAME>", # Optional. Site title for rankings on openrouter.ai. | | 10  | },  | | 11  | data=json.dumps({ | | 12  | "model": "openai/gpt-4o", # Optional | | 13  | "messages": [ | | 14  | {   | | 15  | "role": "user", | | 16  | "content": "What is the meaning of life?" | | 17  | }   | | 18  | ]   | | 19  | })  | | 20  | )   |     `

Using the OpenAI SDK
--------------------

TypescriptPython

`   |     |     | | --- | --- | | 1   | import OpenAI from 'openai'; | | 2   |     | | 3   | const openai = new OpenAI({ | | 4   | baseURL: 'https://openrouter.ai/api/v1', | | 5   | apiKey: '<OPENROUTER_API_KEY>', | | 6   | defaultHeaders: { | | 7   | 'HTTP-Referer': '<YOUR_SITE_URL>', // Optional. Site URL for rankings on openrouter.ai. | | 8   | 'X-Title': '<YOUR_SITE_NAME>', // Optional. Site title for rankings on openrouter.ai. | | 9   | },  | | 10  | }); | | 11  |     | | 12  | async function main() { | | 13  | const completion = await openai.chat.completions.create({ | | 14  | model: 'openai/gpt-4o', | | 15  | messages: [ | | 16  | {   | | 17  | role: 'user', | | 18  | content: 'What is the meaning of life?', | | 19  | },  | | 20  | ],  | | 21  | }); | | 22  |     | | 23  | console.log(completion.choices[0].message); | | 24  | }   | | 25  |     | | 26  | main(); |     `

The API also supports [streaming](https://openrouter.ai/docs/api/reference/streaming)
.

Using third-party SDKs
----------------------

For information about using third-party SDKs and frameworks with OpenRouter, please [see our frameworks documentation.](https://openrouter.ai/docs/guides/community/frameworks-and-integrations-overview)

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# Principles | OpenRouter's Core Values and Mission | OpenRouter | Documentation

OpenRouter helps developers source and optimize AI usage. We believe the future is multi-model and multi-provider.

Why OpenRouter?
---------------

**Price and Performance**. OpenRouter scouts for the best prices, the lowest latencies, and the highest throughput across dozens of providers, and lets you choose how to [prioritize](https://openrouter.ai/docs/features/provider-routing)
 them.

**Standardized API**. No need to change code when switching between models or providers. You can even let your users [choose and pay for their own](https://openrouter.ai/docs/guides/overview/auth/oauth)
.

**Real-World Insights**. Be the first to take advantage of new models. See real-world data of [how often models are used](https://openrouter.ai/rankings)
 for different purposes. Keep up to date in our [Discord channel](https://discord.com/channels/1091220969173028894/1094454198688546826)
.

**Consolidated Billing**. Simple and transparent billing, regardless of how many providers you use.

**Higher Availability**. Fallback providers, and automatic, smart routing means your requests still work even when providers go down.

**Higher Rate Limits**. OpenRouter works directly with providers to provide better rate limits and more throughput.

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# OpenRouter Models | Access 400+ AI Models Through One API | OpenRouter | Documentation

Explore and browse 400+ models and providers [on our website](https://openrouter.ai/models)
, or [with our API](https://openrouter.ai/docs/api-reference/models/get-models)
. You can also subscribe to our [RSS feed](https://openrouter.ai/api/v1/models?use_rss=true)
 to stay updated on new models.

Models API Standard
-------------------

Our [Models API](https://openrouter.ai/docs/api-reference/models/get-models)
 makes the most important information about all LLMs freely available as soon as we confirm it.

### API Response Schema

The Models API returns a standardized JSON response format that provides comprehensive metadata for each available model. This schema is cached at the edge and designed for reliable integration for production applications.

#### Root Response Object

`   |     |     | | --- | --- | | 1   | {   | | 2   | "data": [ | | 3   | /* Array of Model objects */ | | 4   | ]   | | 5   | }   |     `

#### Model Object Schema

Each model in the `data` array contains the following standardized fields:

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique model identifier used in API requests (e.g., `"google/gemini-2.5-pro-preview"`) |
| `canonical_slug` | `string` | Permanent slug for the model that never changes |
| `name` | `string` | Human-readable display name for the model |
| `created` | `number` | Unix timestamp of when the model was added to OpenRouter |
| `description` | `string` | Detailed description of the model’s capabilities and characteristics |
| `context_length` | `number` | Maximum context window size in tokens |
| `architecture` | `Architecture` | Object describing the model’s technical capabilities |
| `pricing` | `Pricing` | Lowest price structure for using this model |
| `top_provider` | `TopProvider` | Configuration details for the primary provider |
| `per_request_limits` | Rate limiting information (null if no limits) |     |
| `supported_parameters` | `string[]` | Array of supported API parameters for this model |

#### Architecture Object

`   |     |     | | --- | --- | | 1   | {   | | 2   | "input_modalities": string[], // Supported input types: ["file", "image", "text"] | | 3   | "output_modalities": string[], // Supported output types: ["text"] | | 4   | "tokenizer": string,          // Tokenization method used | | 5   | "instruct_type": string \| null // Instruction format type (null if not applicable) | | 6   | }   |     `

#### Pricing Object

All pricing values are in USD per token/request/unit. A value of `"0"` indicates the feature is free.

`   |     |     | | --- | --- | | 1   | {   | | 2   | "prompt": string,           // Cost per input token | | 3   | "completion": string,       // Cost per output token | | 4   | "request": string,          // Fixed cost per API request | | 5   | "image": string,           // Cost per image input | | 6   | "web_search": string,      // Cost per web search operation | | 7   | "internal_reasoning": string, // Cost for internal reasoning tokens | | 8   | "input_cache_read": string,   // Cost per cached input token read | | 9   | "input_cache_write": string   // Cost per cached input token write | | 10  | }   |     `

#### Top Provider Object

`   |     |     | | --- | --- | | 1   | {   | | 2   | "context_length": number,        // Provider-specific context limit | | 3   | "max_completion_tokens": number, // Maximum tokens in response | | 4   | "is_moderated": boolean         // Whether content moderation is applied | | 5   | }   |     `

#### Supported Parameters

The `supported_parameters` array indicates which OpenAI-compatible parameters work with each model:

*   `tools` - Function calling capabilities
*   `tool_choice` - Tool selection control
*   `max_tokens` - Response length limiting
*   `temperature` - Randomness control
*   `top_p` - Nucleus sampling
*   `reasoning` - Internal reasoning mode
*   `include_reasoning` - Include reasoning in response
*   `structured_outputs` - JSON schema enforcement
*   `response_format` - Output format specification
*   `stop` - Custom stop sequences
*   `frequency_penalty` - Repetition reduction
*   `presence_penalty` - Topic diversity
*   `seed` - Deterministic outputs

##### Different models tokenize text in different ways

Some models break up text into chunks of multiple characters (GPT, Claude, Llama, etc), while others tokenize by character (PaLM). This means that token counts (and therefore costs) will vary between models, even when inputs and outputs are the same. Costs are displayed and billed according to the tokenizer for the model in use. You can use the `usage` field in the response to get the token counts for the input and output.

If there are models or providers you are interested in that OpenRouter doesn’t have, please tell us about them in our [Discord channel](https://openrouter.ai/discord)
.

For Providers
-------------

If you’re interested in working with OpenRouter, you can learn more on our [providers page](https://openrouter.ai/docs/use-cases/for-providers)
.

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# OpenRouter Multimodal | Complete Documentation | OpenRouter | Documentation

OpenRouter supports multiple input modalities beyond text, allowing you to send images, PDFs, audio, and video files to compatible models through our unified API. This enables rich multimodal interactions for a wide variety of use cases.

Supported Modalities
--------------------

### Images

Send images to vision-capable models for analysis, description, OCR, and more. OpenRouter supports multiple image formats and both URL-based and base64-encoded images.

[Learn more about image inputs →](https://openrouter.ai/docs/features/multimodal/images)

### Image Generation

Generate images from text prompts using AI models with image output capabilities. OpenRouter supports various image generation models that can create high-quality images based on your descriptions.

[Learn more about image generation →](https://openrouter.ai/docs/features/multimodal/image-generation)

### PDFs

Process PDF documents with any model on OpenRouter. Our intelligent PDF parsing system extracts text and handles both text-based and scanned documents.

[Learn more about PDF processing →](https://openrouter.ai/docs/features/multimodal/pdfs)

### Audio

Send audio files to speech-capable models for transcription, analysis, and processing. OpenRouter supports common audio formats with automatic routing to compatible models.

[Learn more about audio inputs →](https://openrouter.ai/docs/features/multimodal/audio)

### Video

Send video files to video-capable models for analysis, description, object detection, and action recognition. OpenRouter supports multiple video formats for comprehensive video understanding tasks.

[Learn more about video inputs →](https://openrouter.ai/docs/features/multimodal/videos)

Getting Started
---------------

All multimodal inputs use the same `/api/v1/chat/completions` endpoint with the `messages` parameter. Different content types are specified in the message content array:

*   **Images**: Use `image_url` content type
*   **PDFs**: Use `file` content type with PDF data
*   **Audio**: Use `input_audio` content type
*   **Video**: Use `video_url` content type

You can combine multiple modalities in a single request, and the number of files you can send varies by provider and model.

Model Compatibility
-------------------

Not all models support every modality. OpenRouter automatically filters available models based on your request content:

*   **Vision models**: Required for image processing
*   **File-compatible models**: Can process PDFs natively or through our parsing system
*   **Audio-capable models**: Required for audio input processing
*   **Video-capable models**: Required for video input processing

Use our [Models page](https://openrouter.ai/models)
 to find models that support your desired input modalities.

Input Format Support
--------------------

OpenRouter supports both **direct URLs** and **base64-encoded data** for multimodal inputs:

### URLs (Recommended for public content)

*   **Images**: `https://example.com/image.jpg`
*   **PDFs**: `https://example.com/document.pdf`
*   **Audio**: Not supported via URL (base64 only)
*   **Video**: Provider-specific (e.g., YouTube links for Gemini on AI Studio)

### Base64 Encoding (Required for local files)

*   **Images**: `data:image/jpeg;base64,{base64_data}`
*   **PDFs**: `data:application/pdf;base64,{base64_data}`
*   **Audio**: Raw base64 string with format specification
*   **Video**: `data:video/mp4;base64,{base64_data}`

URLs are more efficient for large files as they don’t require local encoding and reduce request payload size. Base64 encoding is required for local files or when the content is not publicly accessible.

**Note for video URLs**: Video URL support varies by provider. For example, Google Gemini on AI Studio only supports YouTube links. See the [video inputs documentation](https://openrouter.ai/docs/features/multimodal/videos)
 for provider-specific details.

Frequently Asked Questions
--------------------------

###### Can I mix different modalities in one request?

Yes! You can send text, images, PDFs, audio, and video in the same request. The model will process all inputs together.

###### How is multimodal content priced?

*   **Images**: Typically priced per image or as input tokens
*   **PDFs**: Free text extraction, paid OCR processing, or native model pricing
*   **Audio**: Priced as input tokens based on duration
*   **Video**: Priced as input tokens based on duration and resolution

###### Which models support video input?

Video support varies by model. Use the [Models page](https://openrouter.ai/models?fmt=cards&input_modalities=video)
 to filter for video-capable models. Check each model’s documentation for specific video format and duration limits.

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# OpenRouter PDF Inputs | Complete Documentation | OpenRouter | Documentation

OpenRouter supports PDF processing through the `/api/v1/chat/completions` API. PDFs can be sent as **direct URLs** or **base64-encoded data URLs** in the messages array, via the file content type. This feature works on **any** model on OpenRouter.

**URL support**: Send publicly accessible PDFs directly without downloading or encoding **Base64 support**: Required for local files or private documents that aren’t publicly accessible

PDFs also work in the chat room for interactive testing.

When a model supports file input natively, the PDF is passed directly to the model. When the model does not support file input natively, OpenRouter will parse the file and pass the parsed results to the requested model.

You can send both PDFs and other file types in the same request.

Plugin Configuration
--------------------

To configure PDF processing, use the `plugins` parameter in your request. OpenRouter provides several PDF processing engines with different capabilities and pricing:

`   |     |     | | --- | --- | | 1   | {   | | 2   | plugins: [ | | 3   | {   | | 4   | id: 'file-parser', | | 5   | pdf: { | | 6   | engine: 'pdf-text', // or 'mistral-ocr' or 'native' | | 7   | },  | | 8   | },  | | 9   | ],  | | 10  | }   |     `

Pricing
-------

OpenRouter provides several PDF processing engines:

1.  `"mistral-ocr"`: Best for scanned documents or PDFs with images ($2 per 1,000 pages).
2.  `"pdf-text"`: Best for well-structured PDFs with clear text content (Free).
3.  `"native"`: Only available for models that support file input natively (charged as input tokens).

If you don’t explicitly specify an engine, OpenRouter will default first to the model’s native file processing capabilities, and if that’s not available, we will use the `"mistral-ocr"` engine.

Using PDF URLs
--------------

For publicly accessible PDFs, you can send the URL directly without needing to download and encode the file:

TypeScript SDKPythonTypeScript (fetch)

`   |     |     | | --- | --- | | 1   | import { OpenRouter } from '@openrouter/sdk'; | | 2   |     | | 3   | const openRouter = new OpenRouter({ | | 4   | apiKey: '{{API_KEY_REF}}', | | 5   | }); | | 6   |     | | 7   | const result = await openRouter.chat.send({ | | 8   | model: '{{MODEL}}', | | 9   | messages: [ | | 10  | {   | | 11  | role: 'user', | | 12  | content: [ | | 13  | {   | | 14  | type: 'text', | | 15  | text: 'What are the main points in this document?', | | 16  | },  | | 17  | {   | | 18  | type: 'file', | | 19  | file: { | | 20  | filename: 'document.pdf', | | 21  | fileData: 'https://bitcoin.org/bitcoin.pdf', | | 22  | },  | | 23  | },  | | 24  | ],  | | 25  | },  | | 26  | ],  | | 27  | // Optional: Configure PDF processing engine | | 28  | plugins: [ | | 29  | {   | | 30  | id: 'file-parser', | | 31  | pdf: { | | 32  | engine: '{{ENGINE}}', | | 33  | },  | | 34  | },  | | 35  | ],  | | 36  | stream: false, | | 37  | }); | | 38  |     | | 39  | console.log(result); |     `

PDF URLs work with all processing engines. For Mistral OCR, the URL is passed directly to the service. For other engines, OpenRouter fetches the PDF and processes it internally.

Using Base64 Encoded PDFs
-------------------------

For local PDF files or when you need to send PDF content directly, you can base64 encode the file:

PythonTypeScript

`   |     |     | | --- | --- | | 1   | import requests | | 2   | import json | | 3   | import base64 | | 4   | from pathlib import Path | | 5   |     | | 6   | def encode_pdf_to_base64(pdf_path): | | 7   | with open(pdf_path, "rb") as pdf_file: | | 8   | return base64.b64encode(pdf_file.read()).decode('utf-8') | | 9   |     | | 10  | url = "https://openrouter.ai/api/v1/chat/completions" | | 11  | headers = { | | 12  | "Authorization": f"Bearer {API_KEY_REF}", | | 13  | "Content-Type": "application/json" | | 14  | }   | | 15  |     | | 16  | # Read and encode the PDF | | 17  | pdf_path = "path/to/your/document.pdf" | | 18  | base64_pdf = encode_pdf_to_base64(pdf_path) | | 19  | data_url = f"data:application/pdf;base64,{base64_pdf}" | | 20  |     | | 21  | messages = [ | | 22  | {   | | 23  | "role": "user", | | 24  | "content": [ | | 25  | {   | | 26  | "type": "text", | | 27  | "text": "What are the main points in this document?" | | 28  | },  | | 29  | {   | | 30  | "type": "file", | | 31  | "file": { | | 32  | "filename": "document.pdf", | | 33  | "file_data": data_url | | 34  | }   | | 35  | },  | | 36  | ]   | | 37  | }   | | 38  | ]   | | 39  |     | | 40  | # Optional: Configure PDF processing engine | | 41  | # PDF parsing will still work even if the plugin is not explicitly set | | 42  | plugins = [ | | 43  | {   | | 44  | "id": "file-parser", | | 45  | "pdf": { | | 46  | "engine": "{{ENGINE}}"  # defaults to "{{DEFAULT_PDF_ENGINE}}". See Pricing above | | 47  | }   | | 48  | }   | | 49  | ]   | | 50  |     | | 51  | payload = { | | 52  | "model": "{{MODEL}}", | | 53  | "messages": messages, | | 54  | "plugins": plugins | | 55  | }   | | 56  |     | | 57  | response = requests.post(url, headers=headers, json=payload) | | 58  | print(response.json()) |     `

Skip Parsing Costs
------------------

When you send a PDF to the API, the response may include file annotations in the assistant’s message. These annotations contain structured information about the PDF document that was parsed. By sending these annotations back in subsequent requests, you can avoid re-parsing the same PDF document multiple times, which saves both processing time and costs.

Here’s how to reuse file annotations:

PythonTypeScript

`   |     |     | | --- | --- | | 1   | import requests | | 2   | import json | | 3   | import base64 | | 4   | from pathlib import Path | | 5   |     | | 6   | # First, encode and send the PDF | | 7   | def encode_pdf_to_base64(pdf_path): | | 8   | with open(pdf_path, "rb") as pdf_file: | | 9   | return base64.b64encode(pdf_file.read()).decode('utf-8') | | 10  |     | | 11  | url = "https://openrouter.ai/api/v1/chat/completions" | | 12  | headers = { | | 13  | "Authorization": f"Bearer {API_KEY_REF}", | | 14  | "Content-Type": "application/json" | | 15  | }   | | 16  |     | | 17  | # Read and encode the PDF | | 18  | pdf_path = "path/to/your/document.pdf" | | 19  | base64_pdf = encode_pdf_to_base64(pdf_path) | | 20  | data_url = f"data:application/pdf;base64,{base64_pdf}" | | 21  |     | | 22  | # Initial request with the PDF | | 23  | messages = [ | | 24  | {   | | 25  | "role": "user", | | 26  | "content": [ | | 27  | {   | | 28  | "type": "text", | | 29  | "text": "What are the main points in this document?" | | 30  | },  | | 31  | {   | | 32  | "type": "file", | | 33  | "file": { | | 34  | "filename": "document.pdf", | | 35  | "file_data": data_url | | 36  | }   | | 37  | },  | | 38  | ]   | | 39  | }   | | 40  | ]   | | 41  |     | | 42  | payload = { | | 43  | "model": "{{MODEL}}", | | 44  | "messages": messages | | 45  | }   | | 46  |     | | 47  | response = requests.post(url, headers=headers, json=payload) | | 48  | response_data = response.json() | | 49  |     | | 50  | # Store the annotations from the response | | 51  | file_annotations = None | | 52  | if response_data.get("choices") and len(response_data["choices"]) > 0: | | 53  | if "annotations" in response_data["choices"][0]["message"]: | | 54  | file_annotations = response_data["choices"][0]["message"]["annotations"] | | 55  |     | | 56  | # Follow-up request using the annotations (without sending the PDF again) | | 57  | if file_annotations: | | 58  | follow_up_messages = [ | | 59  | {   | | 60  | "role": "user", | | 61  | "content": [ | | 62  | {   | | 63  | "type": "text", | | 64  | "text": "What are the main points in this document?" | | 65  | },  | | 66  | {   | | 67  | "type": "file", | | 68  | "file": { | | 69  | "filename": "document.pdf", | | 70  | "file_data": data_url | | 71  | }   | | 72  | }   | | 73  | ]   | | 74  | },  | | 75  | {   | | 76  | "role": "assistant", | | 77  | "content": "The document contains information about...", | | 78  | "annotations": file_annotations | | 79  | },  | | 80  | {   | | 81  | "role": "user", | | 82  | "content": "Can you elaborate on the second point?" | | 83  | }   | | 84  | ]   | | 85  |     | | 86  | follow_up_payload = { | | 87  | "model": "{{MODEL}}", | | 88  | "messages": follow_up_messages | | 89  | }   | | 90  |     | | 91  | follow_up_response = requests.post(url, headers=headers, json=follow_up_payload) | | 92  | print(follow_up_response.json()) |     `

When you include the file annotations from a previous response in your subsequent requests, OpenRouter will use this pre-parsed information instead of re-parsing the PDF, which saves processing time and costs. This is especially beneficial for large documents or when using the `mistral-ocr` engine which incurs additional costs.

Response Format
---------------

The API will return a response in the following format:

`   |     |     | | --- | --- | | 1   | {   | | 2   | "id": "gen-1234567890", | | 3   | "provider": "DeepInfra", | | 4   | "model": "google/gemma-3-27b-it", | | 5   | "object": "chat.completion", | | 6   | "created": 1234567890, | | 7   | "choices": [ | | 8   | {   | | 9   | "message": { | | 10  | "role": "assistant", | | 11  | "content": "The document discusses..." | | 12  | }   | | 13  | }   | | 14  | ],  | | 15  | "usage": { | | 16  | "prompt_tokens": 1000, | | 17  | "completion_tokens": 100, | | 18  | "total_tokens": 1100 | | 19  | }   | | 20  | }   |     `

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# OpenRouter Image Inputs | Complete Documentation | OpenRouter | Documentation

Requests with images, to multimodel models, are available via the `/api/v1/chat/completions` API with a multi-part `messages` parameter. The `image_url` can either be a URL or a base64-encoded image. Note that multiple images can be sent in separate content array entries. The number of images you can send in a single request varies per provider and per model. Due to how the content is parsed, we recommend sending the text prompt first, then the images. If the images must come first, we recommend putting it in the system prompt.

OpenRouter supports both **direct URLs** and **base64-encoded data** for images:

*   **URLs**: More efficient for publicly accessible images as they don’t require local encoding
*   **Base64**: Required for local files or private images that aren’t publicly accessible

### Using Image URLs

Here’s how to send an image using a URL:

TypeScript SDKPythonTypeScript (fetch)

`   |     |     | | --- | --- | | 1   | import { OpenRouter } from '@openrouter/sdk'; | | 2   |     | | 3   | const openRouter = new OpenRouter({ | | 4   | apiKey: '{{API_KEY_REF}}', | | 5   | }); | | 6   |     | | 7   | const result = await openRouter.chat.send({ | | 8   | model: '{{MODEL}}', | | 9   | messages: [ | | 10  | {   | | 11  | role: 'user', | | 12  | content: [ | | 13  | {   | | 14  | type: 'text', | | 15  | text: "What's in this image?", | | 16  | },  | | 17  | {   | | 18  | type: 'image_url', | | 19  | imageUrl: { | | 20  | url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg', | | 21  | },  | | 22  | },  | | 23  | ],  | | 24  | },  | | 25  | ],  | | 26  | stream: false, | | 27  | }); | | 28  |     | | 29  | console.log(result); |     `

### Using Base64 Encoded Images

For locally stored images, you can send them using base64 encoding. Here’s how to do it:

TypeScript SDKPythonTypeScript (fetch)

``   |     |     | | --- | --- | | 1   | import { OpenRouter } from '@openrouter/sdk'; | | 2   | import * as fs from 'fs'; | | 3   |     | | 4   | const openRouter = new OpenRouter({ | | 5   | apiKey: '{{API_KEY_REF}}', | | 6   | }); | | 7   |     | | 8   | async function encodeImageToBase64(imagePath: string): Promise<string> { | | 9   | const imageBuffer = await fs.promises.readFile(imagePath); | | 10  | const base64Image = imageBuffer.toString('base64'); | | 11  | return `data:image/jpeg;base64,${base64Image}`; | | 12  | }   | | 13  |     | | 14  | // Read and encode the image | | 15  | const imagePath = 'path/to/your/image.jpg'; | | 16  | const base64Image = await encodeImageToBase64(imagePath); | | 17  |     | | 18  | const result = await openRouter.chat.send({ | | 19  | model: '{{MODEL}}', | | 20  | messages: [ | | 21  | {   | | 22  | role: 'user', | | 23  | content: [ | | 24  | {   | | 25  | type: 'text', | | 26  | text: "What's in this image?", | | 27  | },  | | 28  | {   | | 29  | type: 'image_url', | | 30  | imageUrl: { | | 31  | url: base64Image, | | 32  | },  | | 33  | },  | | 34  | ],  | | 35  | },  | | 36  | ],  | | 37  | stream: false, | | 38  | }); | | 39  |     | | 40  | console.log(result); |     ``

Supported image content types are:

*   `image/png`
*   `image/jpeg`
*   `image/webp`
*   `image/gif`

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# OpenRouter Image Generation | Complete Documentation | OpenRouter | Documentation

OpenRouter supports image generation through models that have `"image"` in their `output_modalities`. These models can create images from text prompts when you specify the appropriate modalities in your request.

Model Discovery
---------------

You can find image generation models in several ways:

### On the Models Page

Visit the [Models page](https://openrouter.ai/models)
 and filter by output modalities to find models capable of image generation. Look for models that list `"image"` in their output modalities.

### In the Chatroom

When using the [Chatroom](https://openrouter.ai/chat)
, click the **Image** button to automatically filter and select models with image generation capabilities. If no image-capable model is active, you’ll be prompted to add one.

API Usage
---------

To generate images, send a request to the `/api/v1/chat/completions` endpoint with the `modalities` parameter set to include both `"image"` and `"text"`.

### Basic Image Generation

TypeScript SDKPythonTypeScript (fetch)

``   |     |     | | --- | --- | | 1   | import { OpenRouter } from '@openrouter/sdk'; | | 2   |     | | 3   | const openRouter = new OpenRouter({ | | 4   | apiKey: '{{API_KEY_REF}}', | | 5   | }); | | 6   |     | | 7   | const result = await openRouter.chat.send({ | | 8   | model: '{{MODEL}}', | | 9   | messages: [ | | 10  | {   | | 11  | role: 'user', | | 12  | content: 'Generate a beautiful sunset over mountains', | | 13  | },  | | 14  | ],  | | 15  | modalities: ['image', 'text'], | | 16  | stream: false, | | 17  | }); | | 18  |     | | 19  | // The generated image will be in the assistant message | | 20  | if (result.choices) { | | 21  | const message = result.choices[0].message; | | 22  | if (message.images) { | | 23  | message.images.forEach((image, index) => { | | 24  | const imageUrl = image.imageUrl.url; // Base64 data URL | | 25  | console.log(`Generated image ${index + 1}: ${imageUrl.substring(0, 50)}...`); | | 26  | }); | | 27  | }   | | 28  | }   |     ``

### Image Aspect Ratio Configuration

Gemini image-generation models let you request specific aspect ratios by setting `image_config.aspect_ratio`. Read more about using Gemini Image Gen models here: [https://ai.google.dev/gemini-api/docs/image-generation](https://ai.google.dev/gemini-api/docs/image-generation)

**Supported aspect ratios:**

*   `1:1` → 1024×1024 (default)
*   `2:3` → 832×1248
*   `3:2` → 1248×832
*   `3:4` → 864×1184
*   `4:3` → 1184×864
*   `4:5` → 896×1152
*   `5:4` → 1152×896
*   `9:16` → 768×1344
*   `16:9` → 1344×768
*   `21:9` → 1536×672

PythonTypeScript

`   |     |     | | --- | --- | | 1   | import requests | | 2   | import json | | 3   |     | | 4   | url = "https://openrouter.ai/api/v1/chat/completions" | | 5   | headers = { | | 6   | "Authorization": f"Bearer {API_KEY_REF}", | | 7   | "Content-Type": "application/json" | | 8   | }   | | 9   |     | | 10  | payload = { | | 11  | "model": "{{MODEL}}", | | 12  | "messages": [ | | 13  | {   | | 14  | "role": "user", | | 15  | "content": "Create a picture of a nano banana dish in a fancy restaurant with a Gemini theme" | | 16  | }   | | 17  | ],  | | 18  | "modalities": ["image", "text"], | | 19  | "image_config": { | | 20  | "aspect_ratio": "16:9" | | 21  | }   | | 22  | }   | | 23  |     | | 24  | response = requests.post(url, headers=headers, json=payload) | | 25  | result = response.json() | | 26  |     | | 27  | if result.get("choices"): | | 28  | message = result["choices"][0]["message"] | | 29  | if message.get("images"): | | 30  | for image in message["images"]: | | 31  | image_url = image["image_url"]["url"] | | 32  | print(f"Generated image: {image_url[:50]}...") |     `

### Streaming Image Generation

Image generation also works with streaming responses:

PythonTypeScript

`   |     |     | | --- | --- | | 1   | import requests | | 2   | import json | | 3   |     | | 4   | url = "https://openrouter.ai/api/v1/chat/completions" | | 5   | headers = { | | 6   | "Authorization": f"Bearer {API_KEY_REF}", | | 7   | "Content-Type": "application/json" | | 8   | }   | | 9   |     | | 10  | payload = { | | 11  | "model": "{{MODEL}}", | | 12  | "messages": [ | | 13  | {   | | 14  | "role": "user", | | 15  | "content": "Create an image of a futuristic city" | | 16  | }   | | 17  | ],  | | 18  | "modalities": ["image", "text"], | | 19  | "stream": True | | 20  | }   | | 21  |     | | 22  | response = requests.post(url, headers=headers, json=payload, stream=True) | | 23  |     | | 24  | for line in response.iter_lines(): | | 25  | if line: | | 26  | line = line.decode('utf-8') | | 27  | if line.startswith('data: '): | | 28  | data = line[6:] | | 29  | if data != '[DONE]': | | 30  | try: | | 31  | chunk = json.loads(data) | | 32  | if chunk.get("choices"): | | 33  | delta = chunk["choices"][0].get("delta", {}) | | 34  | if delta.get("images"): | | 35  | for image in delta["images"]: | | 36  | print(f"Generated image: {image['image_url']['url'][:50]}...") | | 37  | except json.JSONDecodeError: | | 38  | continue |     `

Response Format
---------------

When generating images, the assistant message includes an `images` field containing the generated images:

`   |     |     | | --- | --- | | 1   | {   | | 2   | "choices": [ | | 3   | {   | | 4   | "message": { | | 5   | "role": "assistant", | | 6   | "content": "I've generated a beautiful sunset image for you.", | | 7   | "images": [ | | 8   | {   | | 9   | "type": "image_url", | | 10  | "image_url": { | | 11  | "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." | | 12  | }   | | 13  | }   | | 14  | ]   | | 15  | }   | | 16  | }   | | 17  | ]   | | 18  | }   |     `

### Image Format

*   **Format**: Images are returned as base64-encoded data URLs
*   **Types**: Typically PNG format (`data:image/png;base64,`)
*   **Multiple Images**: Some models can generate multiple images in a single response
*   **Size**: Image dimensions vary by model capabilities

Model Compatibility
-------------------

Not all models support image generation. To use this feature:

1.  **Check Output Modalities**: Ensure the model has `"image"` in its `output_modalities`
2.  **Set Modalities Parameter**: Include `"modalities": ["image", "text"]` in your request
3.  **Use Compatible Models**: Examples include:
    *   `google/gemini-2.5-flash-image-preview`
    *   `black-forest-labs/flux.2-pro`
    *   `black-forest-labs/flux.2-flex`
    *   `sourceful/riverflow-v2-standard-preview`
    *   Other models with image generation capabilities

Best Practices
--------------

*   **Clear Prompts**: Provide detailed descriptions for better image quality
*   **Model Selection**: Choose models specifically designed for image generation
*   **Error Handling**: Check for the `images` field in responses before processing
*   **Rate Limits**: Image generation may have different rate limits than text generation
*   **Storage**: Consider how you’ll handle and store the base64 image data

Troubleshooting
---------------

**No images in response?**

*   Verify the model supports image generation (`output_modalities` includes `"image"`)
*   Ensure you’ve included `"modalities": ["image", "text"]` in your request
*   Check that your prompt is requesting image generation

**Model not found?**

*   Use the [Models page](https://openrouter.ai/models)
     to find available image generation models
*   Filter by output modalities to see compatible models

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# ChainID | OpenRouter Python SDK | OpenRouter | Documentation

The Python SDK and docs are currently in beta. Report issues on [GitHub](https://github.com/OpenRouterTeam/python-sdk/issues)
.

Values
------

| Name | Value |
| --- | --- |
| `ONE` | 1   |
| `ONE_HUNDRED_AND_THIRTY_SEVEN` | 137 |
| `EIGHT_THOUSAND_FOUR_HUNDRED_AND_FIFTY_THREE` | 8453 |

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# CreateEmbeddingsResponse | OpenRouter Python SDK | OpenRouter | Documentation

The Python SDK and docs are currently in beta. Report issues on [GitHub](https://github.com/OpenRouterTeam/python-sdk/issues)
.

Supported Types
---------------

### `operations.CreateEmbeddingsResponseBody`

`   |     |     | | --- | --- | | 1   | value: operations.CreateEmbeddingsResponseBody = /* values here */ |     `

### `str`

`   |     |     | | --- | --- | | 1   | value: str = /* values here */ |     `

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# ModelsListResponse | OpenRouter Python SDK | OpenRouter | Documentation

The Python SDK and docs are currently in beta. Report issues on [GitHub](https://github.com/OpenRouterTeam/python-sdk/issues)
.

List of available models

Fields
------

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | List\[[components.Model](https://openrouter.ai/docs/sdks/components/components/model)<br>\] | ✔️  | List of available models |

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# CreateCoinbaseChargeResponse | OpenRouter Python SDK | OpenRouter | Documentation

The Python SDK and docs are currently in beta. Report issues on [GitHub](https://github.com/OpenRouterTeam/python-sdk/issues)
.

Returns the calldata to fulfill the transaction

Fields
------

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | [operations.CreateCoinbaseChargeData](https://openrouter.ai/docs/sdks/operations/operations/createcoinbasechargedata) | ✔️  | N/A |

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# CompletionResponse | OpenRouter TypeScript SDK | OpenRouter | Documentation

The TypeScript SDK and docs are currently in beta. Report issues on [GitHub](https://github.com/OpenRouterTeam/typescript-sdk/issues)
.

Example Usage
-------------

`   |     |     | | --- | --- | | 1   | import { CompletionResponse } from "@openrouter/sdk/models"; | | 2   |     | | 3   | let value: CompletionResponse = { | | 4   | id: "<id>", | | 5   | object: "text_completion", | | 6   | created: 7985.17, | | 7   | model: "Taurus", | | 8   | choices: [], | | 9   | };  |     `

Fields
------

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | _string_ | ✔️  | N/A |
| `object` | _”text\_completion”_ | ✔️  | N/A |
| `created` | _number_ | ✔️  | N/A |
| `model` | _string_ | ✔️  | N/A |
| `provider` | _string_ | ➖   | N/A |
| `systemFingerprint` | _string_ | ➖   | N/A |
| `choices` | [models.CompletionChoice](https://openrouter.ai/docs/sdks/typescript/models/completionchoice)<br>\[\] | ✔️  | N/A |
| `usage` | [models.CompletionUsage](https://openrouter.ai/docs/sdks/typescript/models/completionusage) | ➖   | N/A |

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# ListProvidersData | OpenRouter TypeScript SDK | OpenRouter | Documentation

The TypeScript SDK and docs are currently in beta. Report issues on [GitHub](https://github.com/OpenRouterTeam/typescript-sdk/issues)
.

Example Usage
-------------

`   |     |     | | --- | --- | | 1   | import { ListProvidersData } from "@openrouter/sdk/models/operations"; | | 2   |     | | 3   | let value: ListProvidersData = { | | 4   | name: "OpenAI", | | 5   | slug: "openai", | | 6   | privacyPolicyUrl: "https://openai.com/privacy", | | 7   | };  |     `

Fields
------

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `name` | _string_ | ✔️  | Display name of the provider | OpenAI |
| `slug` | _string_ | ✔️  | URL-friendly identifier for the provider | openai |
| `privacyPolicyUrl` | _string_ | ✔️  | URL to the provider’s privacy policy | [https://openai.com/privacy](https://openai.com/privacy) |
| `termsOfServiceUrl` | _string_ | ➖   | URL to the provider’s terms of service | [https://openai.com/terms](https://openai.com/terms) |
| `statusPageUrl` | _string_ | ➖   | URL to the provider’s status page | [https://status.openai.com](https://status.openai.com/) |

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# CompletionUsage | OpenRouter TypeScript SDK | OpenRouter | Documentation

The TypeScript SDK and docs are currently in beta. Report issues on [GitHub](https://github.com/OpenRouterTeam/typescript-sdk/issues)
.

Example Usage
-------------

`   |     |     | | --- | --- | | 1   | import { CompletionUsage } from "@openrouter/sdk/models"; | | 2   |     | | 3   | let value: CompletionUsage = { | | 4   | promptTokens: 3945.12, | | 5   | completionTokens: 7037.32, | | 6   | totalTokens: 1194.53, | | 7   | };  |     `

Fields
------

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `promptTokens` | _number_ | ✔️  | N/A |
| `completionTokens` | _number_ | ✔️  | N/A |
| `totalTokens` | _number_ | ✔️  | N/A |

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# CompletionChoice | OpenRouter TypeScript SDK | OpenRouter | Documentation

The TypeScript SDK and docs are currently in beta. Report issues on [GitHub](https://github.com/OpenRouterTeam/typescript-sdk/issues)
.

Example Usage
-------------

`   |     |     | | --- | --- | | 1   | import { CompletionChoice } from "@openrouter/sdk/models"; | | 2   |     | | 3   | let value: CompletionChoice = { | | 4   | text: "<value>", | | 5   | index: 7493.1, | | 6   | logprobs: { | | 7   | tokens: [ | | 8   | "<value 1>", | | 9   | ],  | | 10  | tokenLogprobs: [ | | 11  | 7640.5, | | 12  | 1771.28, | | 13  | ],  | | 14  | topLogprobs: [], | | 15  | textOffset: [ | | 16  | 3937.38, | | 17  | 9605.77, | | 18  | ],  | | 19  | },  | | 20  | finishReason: "length", | | 21  | };  |     `

Fields
------

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | _string_ | ✔️  | N/A |
| `index` | _number_ | ✔️  | N/A |
| `logprobs` | [models.CompletionLogprobs](https://openrouter.ai/docs/sdks/typescript/models/completionlogprobs) | ✔️  | N/A |
| `finishReason` | [models.CompletionFinishReason](https://openrouter.ai/docs/sdks/typescript/models/completionfinishreason) | ✔️  | N/A |
| `nativeFinishReason` | _string_ | ➖   | N/A |
| `reasoning` | _string_ | ➖   | N/A |

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# ActivityItem | OpenRouter TypeScript SDK | OpenRouter | Documentation

The TypeScript SDK and docs are currently in beta. Report issues on [GitHub](https://github.com/OpenRouterTeam/typescript-sdk/issues)
.

Example Usage
-------------

`   |     |     | | --- | --- | | 1   | import { ActivityItem } from "@openrouter/sdk/models"; | | 2   |     | | 3   | let value: ActivityItem = { | | 4   | date: "2025-08-24", | | 5   | model: "openai/gpt-4.1", | | 6   | modelPermaslug: "openai/gpt-4.1-2025-04-14", | | 7   | endpointId: "550e8400-e29b-41d4-a716-446655440000", | | 8   | providerName: "OpenAI", | | 9   | usage: 0.015, | | 10  | byokUsageInference: 0.012, | | 11  | requests: 5, | | 12  | promptTokens: 50, | | 13  | completionTokens: 125, | | 14  | reasoningTokens: 25, | | 15  | };  |     `

Fields
------

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `date` | _string_ | ✔️  | Date of the activity (YYYY-MM-DD format) | 2025-08-24 |
| `model` | _string_ | ✔️  | Model slug (e.g., “openai/gpt-4.1”) | openai/gpt-4.1 |
| `modelPermaslug` | _string_ | ✔️  | Model permaslug (e.g., “openai/gpt-4.1-2025-04-14”) | openai/gpt-4.1-2025-04-14 |
| `endpointId` | _string_ | ✔️  | Unique identifier for the endpoint | 550e8400-e29b-41d4-a716-446655440000 |
| `providerName` | _string_ | ✔️  | Name of the provider serving this endpoint | OpenAI |
| `usage` | _number_ | ✔️  | Total cost in USD (OpenRouter credits spent) | 0.015 |
| `byokUsageInference` | _number_ | ✔️  | BYOK inference cost in USD (external credits spent) | 0.012 |
| `requests` | _number_ | ✔️  | Number of requests made | 5   |
| `promptTokens` | _number_ | ✔️  | Total prompt tokens used | 50  |
| `completionTokens` | _number_ | ✔️  | Total completion tokens generated | 125 |
| `reasoningTokens` | _number_ | ✔️  | Total reasoning tokens used | 25  |

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# CompletionFinishReason | OpenRouter TypeScript SDK | OpenRouter | Documentation

The TypeScript SDK and docs are currently in beta. Report issues on [GitHub](https://github.com/OpenRouterTeam/typescript-sdk/issues)
.

Example Usage
-------------

`   |     |     | | --- | --- | | 1   | import { CompletionFinishReason } from "@openrouter/sdk/models"; | | 2   |     | | 3   | let value: CompletionFinishReason = "length"; |     `

Values
------

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

`   |     |     | | --- | --- | | 1   | "stop" \| "length" \| "content_filter" \| Unrecognized<string> |     `

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---

# CompletionLogprobs | OpenRouter TypeScript SDK | OpenRouter | Documentation

The TypeScript SDK and docs are currently in beta. Report issues on [GitHub](https://github.com/OpenRouterTeam/typescript-sdk/issues)
.

Example Usage
-------------

`   |     |     | | --- | --- | | 1   | import { CompletionLogprobs } from "@openrouter/sdk/models"; | | 2   |     | | 3   | let value: CompletionLogprobs = { | | 4   | tokens: [ | | 5   | "<value 1>", | | 6   | "<value 2>", | | 7   | "<value 3>", | | 8   | ],  | | 9   | tokenLogprobs: [ | | 10  | 2988.44, | | 11  | 7128.75, | | 12  | 8377.63, | | 13  | ],  | | 14  | topLogprobs: null, | | 15  | textOffset: [ | | 16  | 1144.74, | | 17  | 3297.78, | | 18  | ],  | | 19  | };  |     `

Fields
------

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tokens` | _string_\[\] | ✔️  | N/A |
| `tokenLogprobs` | _number_\[\] | ✔️  | N/A |
| `topLogprobs` | `Record<string, *number*>`\[\] | ✔️  | N/A |
| `textOffset` | _number_\[\] | ✔️  | N/A |

[![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/5a7e2b0bd58241d151e9e352d7a4f898df12c062576c0ce0184da76c3635c5d3/content/assets/logo.svg)![Logo](https://files.buildwithfern.com/openrouter.docs.buildwithfern.com/docs/6f95fbca823560084c5593ea2aa4073f00710020e6a78f8a3f54e835d97a8a0b/content/assets/logo-white.svg)](https://openrouter.ai/)

[Models](https://openrouter.ai/models)
[Chat](https://openrouter.ai/chat)
[Ranking](https://openrouter.ai/rankings)
[Docs](https://openrouter.ai/docs/api-reference/overview)

---


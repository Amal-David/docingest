# Table of Contents

- [Introduction | fal.ai Docs](#introduction-fal-ai-docs)
- [Quickstart with fal | fal.ai Docs](#quickstart-with-fal-fal-ai-docs)
- [Documentation | fal.ai Docs](#documentation-fal-ai-docs)
- [Generating Images from Text | fal.ai Docs](#generating-images-from-text-fal-ai-docs)
- [Convert Speech to Text | fal.ai Docs](#convert-speech-to-text-fal-ai-docs)
- [How to use LLMs | fal.ai Docs](#how-to-use-llms-fal-ai-docs)
- [Generating Videos from Image | fal.ai Docs](#generating-videos-from-image-fal-ai-docs)
- [Model Endpoints | fal.ai Docs](#model-endpoints-fal-ai-docs)
- [Queue | fal.ai Docs](#queue-fal-ai-docs)
- [HTTP over WebSockets | fal.ai Docs](#http-over-websockets-fal-ai-docs)
- [Webhooks | fal.ai Docs](#webhooks-fal-ai-docs)
- [Server-side integration | fal.ai Docs](#server-side-integration-fal-ai-docs)
- [Workflow endpoints | fal.ai Docs](#workflow-endpoints-fal-ai-docs)
- [Client Library for JavaScript / TypeScript | fal.ai Docs](#client-library-for-javascript-typescript-fal-ai-docs)
- [Client Library for Python | fal.ai Docs](#client-library-for-python-fal-ai-docs)
- [Client Library for Java | fal.ai Docs](#client-library-for-java-fal-ai-docs)
- [Client Library for Swift (iOS) | fal.ai Docs](#client-library-for-swift-ios-fal-ai-docs)
- [Client Library for Kotlin | fal.ai Docs](#client-library-for-kotlin-fal-ai-docs)
- [Client libraries | fal.ai Docs](#client-libraries-fal-ai-docs)
- [Client Library for Dart (Flutter) | fal.ai Docs](#client-library-for-dart-flutter-fal-ai-docs)
- [Key-Based Authentication | fal.ai Docs](#key-based-authentication-fal-ai-docs)
- [GitHub Authentication | fal.ai Docs](#github-authentication-fal-ai-docs)
- [Add fal.ai to your Next.js app | fal.ai Docs](#add-fal-ai-to-your-next-js-app-fal-ai-docs)
- [Real-Time Models | fal.ai Docs](#real-time-models-fal-ai-docs)
- [Add fal.ai to your Next.js app | fal.ai Docs](#add-fal-ai-to-your-next-js-app-fal-ai-docs)
- [Keeping fal API Secrets Safe | fal.ai Docs](#keeping-fal-api-secrets-safe-fal-ai-docs)
- [Real Time Models Quickstart | fal.ai Docs](#real-time-models-quickstart-fal-ai-docs)
- [Introduction to Private Serverless Models | fal.ai Docs](#introduction-to-private-serverless-models-fal-ai-docs)
- [Setting secrets | fal.ai Docs](#setting-secrets-fal-ai-docs)
- [Passing arguments and leveraging Pydantic | fal.ai Docs](#passing-arguments-and-leveraging-pydantic-fal-ai-docs)
- [Introduction to Private Serverless Models | fal.ai Docs](#introduction-to-private-serverless-models-fal-ai-docs)
- [Returning files and images from functions | fal.ai Docs](#returning-files-and-images-from-functions-fal-ai-docs)
- [Real-time endpoints & WebSockets | fal.ai Docs](#real-time-endpoints-websockets-fal-ai-docs)
- [Runtime Model Optimizations | fal.ai Docs](#runtime-model-optimizations-fal-ai-docs)
- [Optimizing Routing Behavior | fal.ai Docs](#optimizing-routing-behavior-fal-ai-docs)
- [Running a containerized application | fal.ai Docs](#running-a-containerized-application-fal-ai-docs)
- [Fastest FLUX Endpoint | fal.ai Docs](#fastest-flux-endpoint-fal-ai-docs)
- [Supported Machines | fal.ai Docs](#supported-machines-fal-ai-docs)
- [Frequently Asked Questions | fal.ai Docs](#frequently-asked-questions-fal-ai-docs)
- [Cache-Efficient Dockerfile Guidelines with docker buildx (or buildKit) | fal.ai Docs](#cache-efficient-dockerfile-guidelines-with-docker-buildx-or-buildkit-fal-ai-docs)
- [404 | fal.ai Docs](#404-fal-ai-docs)
- [Container Support with fal | fal.ai Docs](#container-support-with-fal-fal-ai-docs)

---

# Introduction | fal.ai Docs



Introduction
============

fal.ai is a generative media platform designed for developers, offering high-performance AI model inference and training capabilities. The platform specializes in running diffusion models with production-ready APIs and interactive UI playgrounds.

### Key features:

*   Ready-to-use AI inference APIs optimized for speed and scalability
*   Serverless deployment options for custom AI models
*   Interactive UI playgrounds for model experimentation
*   Specialized in image generation through the Flux API
*   Enterprise features including private models and preference fine-tuning capabilities

The platform aims to provide developers with the fastest and most reliable infrastructure for integrating AI-powered media generation into their applications, with a focus on real-time user experiences.

---

# Quickstart with fal | fal.ai Docs



Quickstart with fal
===================

In this example, we’ll be using one of our most popular model [endpoints](https://fal.ai/models/fal-ai/flux/dev)
.

Before we proceed, you need to create an [API key](https://fal.ai/dashboard/keys)
.

This key will be used to authenticate your requests to the fal API.

*   [Javascript](#tab-panel-31)
    
*   [Python](#tab-panel-32)
    

    npm install --save @fal-ai/client

    pip install fal-client

*   [Javascript](#tab-panel-33)
    
*   [Python](#tab-panel-34)
    

    fal.config({  credentials: "PASTE_YOUR_FAL_KEY_HERE",});

    export FAL_KEY="PASTE_YOUR_FAL_KEY_HERE"

Now you can call our Model API endpoint using the fal [client](/model-endpoints#the-fal-client)
:

*   [Javascript](#tab-panel-35)
    
*   [Python](#tab-panel-36)
    

    import { fal } from "@fal-ai/client";
    const result = await fal.subscribe("fal-ai/flux/dev", {  input: {    prompt:      "Photo of a rhino dressed suit and tie sitting at a table in a bar with a bar stools, award winning photography, Elke vogelsang",  },});

    import fal_client
    handler = fal_client.submit(  "fal-ai/flux/dev",  arguments={      "prompt": "photo of a rhino dressed suit and tie sitting at a table in a bar with a bar stools, award winning photography, Elke vogelsang"  },)
    result = handler.get()print(result)

We have made other popular models such as Flux Realism, Flux Lora Training SDXL Finetunes, Stable Video Diffusion, ControlNets, Whisper and more available as ready-to-use APIs so that you can easily integrate them into your applications.

[fal-ai/ flux/schnell\
\
text-to-image\
\
FLUX.1 \[schnell\] is a 12 billion parameter flow transformer that generates high-quality images from text in 1 to 4 steps, suitable for personal and commercial use.\
\
optimized](https://fal.ai/models/fal-ai/flux/schnell)
[fal-ai/ flux-pro/v1.1-ultra\
\
text-to-image\
\
FLUX1.1 \[pro\] ultra is the newest version of FLUX1.1 \[pro\], maintaining professional-grade image quality while delivering up to 2K resolution with improved photo realism.\
\
flux 2k realism](https://fal.ai/models/fal-ai/flux-pro/v1.1-ultra)

Check out our [Model Playgrounds](https://fal.ai/models)
 to tinker with these models and let us know on our [Discord](https://discord.gg/fal-ai)
 if you want to see other ones listed.

Once you find a model that you want to use, you can grab its URL from the “API” tab. The API tab provides some important information about the model including its source code and examples of how you can call it.

---

# Documentation | fal.ai Docs



Documentation
=============

Comprehensive documentation, examples, and guides for using fal.ai's AI infrastructure and client libraries.

[Get started](/introduction)
 [Go to fal.ai](https://fal.ai)

---

# Generating Images from Text | fal.ai Docs



Generating Images from Text
===========================

How to Generate Images using the fal API
----------------------------------------

To generate images using the fal API, you need to send a request to the appropriate endpoint with the desired input parameters. The API uses pre-trained models to generate images based on the provided text prompt. This allows you to create images by simply describing what you want in natural language.

Here’s an example of how to generate an image using the fal API from text:

    import { fal } from "@fal-ai/client";
    const result = await fal.subscribe("fal-ai/flux/dev", {  input: {    prompt: "a face of a cute puppy, in the style of pixar animation",  },});

How to select the model to use
------------------------------

fal offers a variety of image generation models. You can select the model that best fits your needs based on the style and quality of the images you want to generate. Here are some of the available models:

*   [fal-ai/flux/dev](https://fal.ai/models/fal-ai/flux/dev)
    : FLUX.1 \[dev\] is a 12 billion parameter flow transformer that generates high-quality images from text. It is suitable for personal and commercial use.
*   [fal-ai/recraft-v3](https://fal.ai/models/fal-ai/recraft-v3)
    : Recraft V3 is a text-to-image model with the ability to generate long texts, vector art, images in brand style, and much more. As of today, it is SOTA in image generation, proven by Hugging Face’s industry-leading Text-to-Image Benchmark by Artificial Analysis.
*   [fal-ai/stable-diffusion-v35-large](https://fal.ai/models/fal-ai/stable-diffusion-v35-large)
    : Stable Diffusion 3.5 Large is a Multimodal Diffusion Transformer (MMDiT) text-to-image model that features improved performance in image quality, typography, complex prompt understanding, and resource-efficiency.

To select a model, simply specify the model ID in the subscribe method as shown in the example above. You can find more models and their descriptions in the [Text to Image Models](https://fal.ai/models?categories=text-to-image)
 page.

---

# Convert Speech to Text | fal.ai Docs



Convert Speech to Text
======================

How to Convert Speeches using the fal API
-----------------------------------------

To convert speeches to text using the fal API, you need to send a request to the appropriate endpoint with the desired input parameters. The API uses pre-trained models to convert speeches to text based on the provided audio file. This allows you to convert speeches to text by simply providing the audio file.

Here is an example of how to convert speeches to text using the fal API:

    import { fal } from "@fal-ai/client";
    const result = await fal.subscribe("fal-ai/whisper", {  input: {    audio_url: "https://storage.googleapis.com/falserverless/model_tests/whisper/dinner_conversation.mp3"  },});

How to select the model to use
------------------------------

fal offers a variety of speech-to-text models. You can select the model that best fits your needs based on the quality and accuracy of the speech-to-text conversion. Here are some of the available models:

*   [fal-ai/whisper](https://fal.ai/models/fal-ai/whisper)
    : Whisper is a model for speech transcription and translation.
*   [fal-ai/wizper](https://fal.ai/models/fal-ai/wizper)
    : Wizper is Whisper v3 Large — but optimized by our inference wizards. Same WER, double the performance!

To select a model, simply specify the model ID in the subscribe method as shown in the example above. You can find more models and their descriptions in the [Text to Image Models](https://fal.ai/models?categories=text-to-image)
 page.

---

# How to use LLMs | fal.ai Docs



How to use LLMs
===============

fal provides an easy-to-use API for generating text using Language Models (LLMs). You can use the `fal-ai/any-llm` endpoint to generate text based on a given prompt and model.

Here’s an example of how to use the `fal-ai/any-llm` endpoint to generate text using the `anthropic/claude-3.5-sonnet` model:

    import { fal } from "@fal-ai/client";
    const result = await fal.subscribe("fal-ai/any-llm", {  input: {    model: "anthropic/claude-3.5-sonnet",    prompt: "What is the meaning of life?"  },});

How to select LLM model to use
------------------------------

fal offers a variety of LLM models. You can select the model that best fits your needs based on the style and quality of the text you want to generate. Here are some of the available models:

*   `anthropic/claude-3.5-sonnet`: Claude 3.5 Sonnet
*   `google/gemini-pro-1.5`: Gemini Pro 1.5
*   `meta-llama/llama-3.2-3b-instruct`: Llama 3.2 3B Instruct
*   `openai/gpt-4o`: GPT-4o

To select a model, simply specify the model ID in the `model` field as shown in the example above. You can find more LLMs in the [Any LLM](https://fal.ai/models/fal-ai/any-llm)
 page.

---

# Generating Videos from Image | fal.ai Docs



Generating Videos from Image
============================

How to Generate Videos using the fal API
----------------------------------------

fal offers a simple and easy-to-use API that allows you to generate videos from your images using pre-trained models. This endpoint is perfect for creating video clips from your images for various use cases such as social media, marketing, and more.

Here is an example of how to generate videos using the fal API:

    import { fal } from "@fal-ai/client";
    const result = await fal.subscribe("fal-ai/minimax-video/image-to-video", {  input: {    prompt: "A stylish woman walks down a Tokyo street filled with warm glowing neon and animated city signage.",    image_url: "https://fal.media/files/elephant/8kkhB12hEZI2kkbU8pZPA_test.jpeg"  },});

How to select the model to use
------------------------------

fal offers a variety of video generation models. You can select the model that best fits your needs based on the style and quality of the images you want to generate. Here are some of the available models:

*   [fal-ai/minimax-video](https://fal.ai/models/fal-ai/minimax-video/image-to-video)
    : Generate video clips from your images using MiniMax Video model.
*   [fal-ai/luma-dream-machine](https://fal.ai/models/fal-ai/luma-dream-machine/image-to-video)
    : Generate video clips from your images using Luma Dream Machine v1.5
*   [fal-ai/kling-video/v1/standard](https://fal.ai/models/fal-ai/kling-video/v1/standard/image-to-video)
    : Generate video clips from your images using Kling 1.0

To select a model, simply specify the model ID in the subscribe method as shown in the example above. You can find more models and their descriptions in the [Image to Video Models](https://fal.ai/models?categories=image-to-video)
 page.

---

# Model Endpoints | fal.ai Docs



Model Endpoints
===============

Model endpoints are the entry point to interact with the fal API. They are exposed through simple HTTP APIs that can be called from any programming language.

In the next sections you will learn how to call these endpoints through our Queue system and how to get the results.

We also offer [clients](/clients)
 for some of the popular programming languages used by our community.

---

# Queue | fal.ai Docs



Queue
=====

For requests that take longer than several seconds, as it is usually the case with AI applications, we have built a queue system.

Utilizing our queue system offers you a more granulated control to handle unexpected surges in traffic. It further provides you with the capability to cancel requests if needed and grants you the observability to monitor your current position within the queue. Besides that using the queue system spares you from the headache of keeping around long running https requests.

### Queue endpoints

You can interact with all queue features through a set of endpoints added to you function URL via the `queue` subdomain. The endpoints are as follows:

| Endpoint | Method | Description |
| --- | --- | --- |
| **`queue.fal.run/{appId}`** | POST | Adds a request to the queue |
| **`queue.fal.run/{appId}/requests/{request_id}/status`** | GET | Gets the status of a request |
| **`queue.fal.run/{appId}/requests/{request_id}/status/stream`** | GET | Streams the status of a request until it’s completed |
| **`queue.fal.run/{appId}/requests/{request_id}`** | GET | Gets the response of a request |
| **`queue.fal.run/{appId}/requests/{request_id}/cancel`** | PUT | Cancels a request |

For instance, should you want to use the curl command to submit a request to the aforementioned endpoint and add it to the queue, your command would appear as follows:

    curl -X POST https://queue.fal.run/fal-ai/fast-sdxl \  -H "Authorization: Key $FAL_KEY" \  -d '{"prompt": "a cat"}'

Here’s an example of a response with the `request_id`:

    {  "request_id": "80e732af-660e-45cd-bd63-580e4f2a94cc",  "response_url": "https://queue.fal.run/fal-ai/fast-sdxl/requests/80e732af-660e-45cd-bd63-580e4f2a94cc",  "status_url": "https://queue.fal.run/fal-ai/fast-sdxl/requests/80e732af-660e-45cd-bd63-580e4f2a94cc/status",  "cancel_url": "https://queue.fal.run/fal-ai/fast-sdxl/requests/80e732af-660e-45cd-bd63-580e4f2a94cc/cancel"}

The payload helps you to keep track of your request with the `request_id`, and provides you with the necessary information to get the status of your request, cancel it or get the response once it’s ready, so you don’t have to build these endpoints yourself.

### Request status

Once you have the request id you may use this request id to get the status of the request. This endpoint will give you information about your request’s status, it’s position in the queue or the response itself if the response is ready.

    curl -X GET https://queue.fal.run/fal-ai/fast-sdxl/requests/{request_id}/status

Here’s an example of a response with the `IN_QUEUE` status:

    {  "status": "IN_QUEUE",  "queue_position": 0,  "response_url": "https://queue.fal.run/fal-ai/fast-sdxl/requests/80e732af-660e-45cd-bd63-580e4f2a94cc"}

#### Status types

Queue `status` can have one of the following types and their respective properties:

*   **`IN_QUEUE`**:
    
    *   `queue_position`: The current position of the task in the queue.
    *   `response_url`: The URL where the response will be available once the task is processed.
*   **`IN_PROGRESS`**:
    
    *   `logs`: An array of logs related to the request. Note that it needs to be enabled, as explained in the next section.
    *   `response_url`: The URL where the response will be available.
*   **`COMPLETED`**:
    
    *   `logs`: An array of logs related to the request. Note that it needs to be enabled, as explained in the next section.
    *   `response_url`: The URL where the response is available.

#### Logs

Logs are disabled by default. In order to enable logs for your request, you need to send the `logs=1` query parameter when getting the status of your request. For example:

    curl -X GET https://queue.fal.run/fal-ai/fast-sdxl/requests/{request_id}/status?logs=1

When enabled, the `logs` attribute in the queue status contains an array of log entries, each represented by the `RequestLog` type. A `RequestLog` object has the following attributes:

*   `message`: a string containing the log message.
*   `level`: the severity of the log, it can be one of the following:
    *   `STDERR` | `STDOUT` | `ERROR` | `INFO` | `WARN` | `DEBUG`
*   `source`: indicates the source of the log.
*   `timestamp`: a string representing the time when the log was generated.

These logs offer valuable insights into the status and progress of your queued tasks, facilitating effective monitoring and debugging.

#### Streaming status

If you want to keep track of the status of your request in real-time, you can use the streaming endpoint. The response is `text/event-stream` and each event is a JSON object with the status of the request exactly as the non-stream endpoint.

This endpoint will keep the connection open until the status of the request changes to `COMPLETED`.

It supports the same `logs` query parameter as the status.

    curl -X GET https://queue.fal.run/fal-ai/fast-sdxl/requests/{request_id}/status/stream

Here is an example of a stream of status updates:

    $ curl https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf/status/stream?logs=1 --header "Authorization: Key $FAL_KEY"
    data: {"status": "IN_PROGRESS", "request_id": "3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf", "response_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf", "status_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf/status", "cancel_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf/cancel", "logs": [], "metrics": {}}
    data: {"status": "IN_PROGRESS", "request_id": "3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf", "response_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf", "status_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf/status", "cancel_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf/cancel", "logs": [{"timestamp": "2024-12-20T15:37:17.120314", "message": "INFO:TRYON:Preprocessing images...", "labels": {}}, {"timestamp": "2024-12-20T15:37:17.286519", "message": "INFO:TRYON:Running try-on model...", "labels": {}}], "metrics": {}}
    data: {"status": "IN_PROGRESS", "request_id": "3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf", "response_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf", "status_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf/status", "cancel_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf/cancel", "logs": [], "metrics": {}}
    : ping
    data: {"status": "IN_PROGRESS", "request_id": "3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf", "response_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf", "status_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf/status", "cancel_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf/cancel", "logs": [], "metrics": {}}
    data: {"status": "COMPLETED", "request_id": "3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf", "response_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf", "status_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf/status", "cancel_url": "https://queue.fal.run/fashn/tryon/requests/3e3e5b55-45fb-4e5c-b4d1-05702dffc8bf/cancel", "logs": [{"timestamp": "2024-12-20T15:37:32.161184", "message": "INFO:TRYON:Finished running try-on model.", "labels": {}}], "metrics": {"inference_time": 17.795265674591064}}

### Cancelling a request

If your request is still in the queue and not already being processed you may still cancel it.

    curl -X PUT https://queue.fal.run/fal-ai/fast-sdxl/requests/{request_id}/cancel

### Getting the response

Once you get the `COMPLETED` status, the `response` will be available along with its `logs`.

    curl -X GET https://queue.fal.run/fal-ai/fast-sdxl/requests/{request_id}

Here’s an example of a response with the `COMPLETED` status:

    {  "status": "COMPLETED",  "logs": [    {      "message": "2020-05-04 14:00:00.000000",      "level": "INFO",      "source": "stdout",      "timestamp": "2020-05-04T14:00:00.000000Z"    }  ],  "response": {    "message": "Hello World!"  }}

---

# HTTP over WebSockets | fal.ai Docs



HTTP over WebSockets
====================

For applications that require real-time interaction or handle streaming, fal offers a WebSocket-based integration. This allows you to establish a persistent connection and stream data back and forth between your client and the fal API. Using the same API as the HTTP apps.

### WebSocket Endpoint

To utilize the WebSocket functionality, connect to the HTTP app you want to use but using the new `ws.fal.run` solution:

    wss://ws.fal.run/{appId}

### Communication Protocol

Once connected, the communication follows a specific protocol with JSON messages for control flow and raw data for the actual response stream:

1.  **Payload Message:** Send a JSON message containing the payload for your application. This is equivalent to the request body you would send to the HTTP endpoint.
    
2.  **Start Metadata:** Receive a JSON message containing the HTTP response headers from your application. This allows you to understand the type and structure of the incoming response stream.
    
3.  **Response Stream:** Receive the actual response data as a sequence of messages. These can be binary chunks for media content or a JSON object for structured data, depending on the `Content-Type` header.
    
4.  **End Metadata:** Receive a final JSON message indicating the end of the response stream. This signals that the request has been fully processed and the next payload will be processed.
    

### Example Interaction

Here’s an example of a typical interaction with the WebSocket API:

**Client Sends (Payload Message):**

    {"prompt": "generate a 10-second audio clip of a cat purring"}

**Server Responds (Start Metadata):**

    {  "type": "start",  "request_id": "5d76da89-5d75-4887-a715-4302bf435614",  "status": 200,  "headers": {    "Content-Type": "text/event-stream; charset=utf-8",    "Transfer-Encoding": "chunked",    // ...  }}

**Server Sends (Response Stream):**

    <binary audio data chunk 1><binary audio data chunk 2>...<binary audio data chunk N>

**Server Sends (Completion Message):**

    {  "type": "end",  "request_id": "5d76da89-5d75-4887-a715-4302bf435614",  "status": 200,  "time_to_first_byte_seconds": 0.577083}

This WebSocket integration provides a powerful mechanism for building dynamic and responsive AI applications on the fal platform. By leveraging the streaming capabilities, you can unlock new possibilities for creative and interactive user experiences.

### Example Program

For instance, should you want to make fast prompts to any LLM, you can use `fal-ai/any-llm`.

    import fal.apps
    with fal.apps.ws("fal-ai/any-llm") as connection:    for i in range(3):        connection.send(            {                "model": "google/gemini-flash-1.5",                "prompt": f"What is the meaning of life? Respond in {i} words.",            }        )
        # they should be in order    for i in range(3):        import json
            response = json.loads(connection.recv())        print(response)

And running this program would output:

    {'output': '(Silence)\n', 'partial': False, 'error': None}{'output': 'Growth\n', 'partial': False, 'error': None}{'output': 'Personal fulfillment.\n', 'partial': False, 'error': None}

### Example Program with Stream

The `fal-ai/any-llm/stream` model is a streaming model that can generate text in real-time. Here’s an example of how you can use it:

    with fal.apps.ws("fal-ai/any-llm/stream") as connection:    # NOTE: this app responds in 'text/event-stream' format    # For example:    #    #    event: event    #    data: {"output": "Growth", "partial": true, "error": null}
        for i in range(3):        connection.send(            {                "model": "google/gemini-flash-1.5",                "prompt": f"What is the meaning of life? Respond in {i+1} words.",            }        )
        for i in range(3):        for bs in connection.stream():            lines = bs.decode().replace("\r\n", "\n").split("\n")
                event = {}            for line in lines:                if not line:                    continue                key, value = line.split(":", 1)                event[key] = value.strip()
                print(event["data"])
            print("----")

And running this program would output:

    {"output": "Perspective", "partial": true, "error": null}{"output": "Perspective.\n", "partial": true, "error": null}{"output": "Perspective.\n", "partial": true, "error": null}{"output": "Perspective.\n", "partial": false, "error": null}----{"output": "Find", "partial": true, "error": null}{"output": "Find meaning.\n", "partial": true, "error": null}{"output": "Find meaning.\n", "partial": true, "error": null}{"output": "Find meaning.\n", "partial": false, "error": null}----{"output": "Be", "partial": true, "error": null}{"output": "Be, love, grow.\n", "partial": true, "error": null}{"output": "Be, love, grow.\n", "partial": true, "error": null}{"output": "Be, love, grow.\n", "partial": false, "error": null}----

---

# Webhooks | fal.ai Docs



Webhooks
========

Webhooks work in tandem with the queue system explained above, it is another way to interact with our queue. By providing us a webhook endpoint you get notified when the request is done as opposed to polling it.

Here is how this works in practice, it is very similar to submitting something to the queue but we require you to pass an extra `fal_webhook` query parameter.

To utilize webhooks, your requests should be directed to the `queue.fal.run` endpoint, instead of the standard `fal.run`. This distinction is crucial for enabling webhook functionality, as it ensures your request is handled by the queue system designed to support asynchronous operations and notifications.

    curl --request POST \  --url 'https://queue.fal.run/fal-ai/flux/dev?fal_webhook=https://url.to.your.app/api/fal/webhook' \  --header "Authorization: Key $FAL_KEY" \  --header 'Content-Type: application/json' \  --data '{  "prompt": "Photo of a cute dog"}'

The request will be queued and you will get a response with the `request_id` and `gateway_request_id`:

    {  "request_id": "024ca5b1-45d3-4afd-883e-ad3abe2a1c4d",  "gateway_request_id": "024ca5b1-45d3-4afd-883e-ad3abe2a1c4d"}

These two will be mostly the same, but if the request failed and was retried, `gateway_request_id` will have the value of the last tried request, while `request_id` will be the value used in the queue API.

Once the request is done processing in the queue, a `POST` request is made to the webhook URL, passing the request info and the resulting `payload`. The `status` indicates whether the request was successful or not.

### Successful result

The following is an example of a successful request:

    {  "request_id": "123e4567-e89b-12d3-a456-426614174000",  "gateway_request_id": "123e4567-e89b-12d3-a456-426614174000",  "status": "OK",  "payload": {    "images": [      {        "url": "https://url.to/image.png",        "content_type": "image/png",        "file_name": "image.png",        "file_size": 1824075,        "width": 1024,        "height": 1024      }    ],    "seed": 196619188014358660  }}

### Response errors

When an error happens, the `status` will be `ERROR`. The `error` property will contain a message and the `payload` will provide the error details. For example, if you forget to pass the required `model_name` parameter, you will get the following response:

    {  "request_id": "123e4567-e89b-12d3-a456-426614174000",  "gateway_request_id": "123e4567-e89b-12d3-a456-426614174000",  "status": "ERROR",  "error": "Invalid status code: 422",  "payload": {    "detail": [      {        "loc": ["body", "prompt"],        "msg": "field required",        "type": "value_error.missing"      }    ]  }}

### Payload errors

For the webhook to include the payload, it must be valid JSON. So if there is an error serializing it, `payload` is set to `null` and a `payload_error` will include details about the error.

    {  "request_id": "123e4567-e89b-12d3-a456-426614174000",  "gateway_request_id": "123e4567-e89b-12d3-a456-426614174000",  "status": "OK",  "payload": null,  "payload_error": "Response payload is not JSON serializable. Either return a JSON serializable object or use the queue endpoint to retrieve the response."}

### Retry policy

If the webhook fails to deliver the payload, it will retry 10 times in the span of 2 hours.

---

# Server-side integration | fal.ai Docs



Server-side integration
=======================

Although the endpoints are designed to be called directly from the client, it is not safe to keep API Keys in client side code. Most use cases require developers to create their own server-side APIs, that call a 3rd party service, fal, and then return the result to the client. It is a straightforward process, but always get in the way of developers and teams trying to focus on their own business, their own idea.

Therefore, we implemented the client libraries to support a proxy mode, which allows you to use the client libraries in the client, while keeping the API Keys in your own server-side code.

### Ready-to-use proxy implementations

We provide ready-to-use proxy implementations for the following languages/frameworks:

*   [Node.js with Next.js](/integrations/nextjs)
    : a Next.js API route handler that can be used in any Next.js app. It supports both Page and App routers. We use it ourselves in all of our apps in production.
*   [Node.js with Express](https://github.com/fal-ai/serverless-js/tree/main/apps/demo-express-app)
    : an Express route handler that can be used in any Express app. You can also implement custom logic and compose together with your own handlers.

That’s it for now, but we are looking out for our community needs and will add more implementations in the future. If you have any requests, join our community in our [Discord server](https://discord.gg/fal-ai)
.

### The proxy formula

In case fal doesn’t provide a plug-and-play proxy implementation for your language/framework, you can use the following formula to implement your own proxy:

1.  Provide a single endpoint that will ingest all requests from the client (e.g. `/api/fal/proxy` is commonly used as the default route path).
2.  The endpoint must support both `GET` and `POST` requests. When an unsupported HTTP method is used, the proxy must return status code `405`, Method Not Allowed.
3.  The URL the proxy needs to call is provided by the `x-fal-target-url` header. If the header is missing, the proxy must return status code `400`, Bad Request. In case it doesn’t point to a valid URL, or the URL’s domain is not `*.fal.ai` or `*.fal.run`, the proxy must return status code `412`, Precondition Failed.
4.  The request body, when present, is always in the JSON format - i.e. `content-type` header is `application/json`. Any other type of content must be rejected with status code `415`, Unsupported Media Type.
5.  The proxy must add the `authorization` header in the format of `Key <your-api-key>` to the request it sends to the target URL. Your API key should be resolved from the environment variable `FAL_KEY`.
6.  The response from the target URL will always be in the JSON format, the proxy must return the same response to the client.
7.  The proxy must return the same HTTP status code as the target URL.
8.  The proxy must return the same headers as the target URL, except for the `content-length` and `content-encoding` headers, which should be set by the your own server/framework automatically.

### Configure the client

To use the proxy, you need to configure the client to use the proxy endpoint. You can do that by setting the `proxyUrl` option in the client configuration:

    import { fal } from "@fal-ai/client";
    fal.config({  proxyUrl: "/api/fal/proxy",});

### Example implementation

You can find a reference implementation of the proxy formula using TypeScript, which supports both Express and Next.js, in [serverless-js/libs/proxy/src/index.ts](https://github.com/fal-ai/serverless-js/blob/main/libs/proxy/src/index.ts)
.

---

# Workflow endpoints | fal.ai Docs



Workflow endpoints
==================

Workflows are a way to chain multiple models together to create a more complex pipeline. This allows you to create a single endpoint that can take an input and pass it through multiple models in sequence. This is useful for creating more complex models that require multiple steps, or for creating a single endpoint that can handle multiple tasks.

### Workflow as an API

Workflow APIs work the same way as other model endpoints, you can simply send a request and get a response back. However, it is common for workflows to contain multiple steps and produce intermediate results, as each step contains their own response that could be relevant in your use-case.

Therefore, workflows benefit from the **streaming** feature, which allows you to get partial results as they are being generated.

### Workflow events

The workflow API will trigger a few events during its execution, these events can be used to monitor the progress of the workflow and get intermediate results. Below are the events that you can expect from a workflow stream:

#### The `submit` event

This events is triggered every time a new step has been submitted to execution. It contains the `app_id`, `request_id` and the `node_id`.

    {  "type": "submit",  "node_id": "stable_diffusion_xl",  "app_id": "fal-ai/fast-sdxl",  "request_id": "d778bdf4-0275-47c2-9f23-16c27041cbeb"}

#### The `completion` event

This event is triggered upon the completion of a specific step.

    {  "type": "completion",  "node_id": "stable_diffusion_xl",  "output": {    "images": [      {        "url": "https://fal.media/result.jpeg",        "width": 1024,        "height": 1024,        "content_type": "image/jpeg"      }    ],    "timings": { "inference": 2.1733 },    "seed": 6252023,    "has_nsfw_concepts": [false],    "prompt": "a cute puppy"  }}

#### The `output` event

The `output` event means that the workflow has completed and the final result is ready.

    {  "type": "output",  "output": {    "images": [      {        "url": "https://fal.media/result.jpeg",        "width": 1024,        "height": 1024,        "content_type": "image/jpeg"      }    ]  }}

#### The `error` event

The `error` event is triggered when an error occurs during the execution of a step. The `error` object contains the `error.status` with the HTTP status code, an error `message` as well as `error.body` with the underlying error serialized.

    {  "type": "error",  "node_id": "stable_diffusion_xl",  "message": "Error while fetching the result of the request d778bdf4-0275-47c2-9f23-16c27041cbeb",  "error": {    "status": 422,    "body": {      "detail": [        {          "loc": ["body", "num_images"],          "msg": "ensure this value is less than or equal to 8",          "type": "value_error.number.not_le",          "ctx": { "limit_value": 8 }        }      ]    }  }}

### Example

A cool and simple example of the power of workflows is `workflows/fal-ai/sdxl-sticker`, which consists of three steps:

1.  Generates an image using `fal-ai/fast-sdxl`.
2.  Remove the background of the image using `fal-ai/imageutils/rembg`.
3.  Converts the image to a sticker using `fal-ai/face-to-sticker`.

What could be a tedious process of running and coordinating three different models is now a single endpoint that you can call with a single request.

*   [Javascript](#tab-panel-27)
    
*   [python](#tab-panel-28)
    
*   [python (async)](#tab-panel-29)
    
*   [Swift](#tab-panel-30)
    

    import { fal } from "@fal-ai/client";
    const stream = await fal.stream("workflows/fal-ai/sdxl-sticker", {input: {  prompt: "a face of a cute puppy, in the style of pixar animation",},});
    for await (const event of stream) {console.log("partial", event);}
    const result = await stream.done();
    console.log("final result", result);

    import fal_client
    stream = fal_client.stream(    "workflows/fal-ai/sdxl-sticker",    arguments={        "prompt": "a face of a cute puppy, in the style of pixar animation",    },)for event in stream:    print(event)

    import asyncioimport fal_client
    async def main():    stream = await fal_client.stream_async(        "workflows/fal-ai/sdxl-sticker",        arguments={            "prompt": "a face of a cute puppy, in the style of pixar animation",        },    )
        async for event in stream:        print(event)
    
    if __name__ == "__main__":    asyncio.run(main())

### Type definitions

Below are the type definition in TypeScript of events that you can expect from a workflow stream:

    type WorkflowBaseEvent = {  type: "submit" | "completion" | "error" | "output";  node_id: string;};
    export type WorkflowSubmitEvent = WorkflowBaseEvent & {  type: "submit";  app_id: string;  request_id: string;};
    export type WorkflowCompletionEvent<Output = any> = WorkflowBaseEvent & {  type: "completion";  app_id: string;  output: Output;};
    export type WorkflowDoneEvent<Output = any> = WorkflowBaseEvent & {  type: "output";  output: Output;};
    export type WorkflowErrorEvent = WorkflowBaseEvent & {  type: "error";  message: string;  error: any;};

---

# Client Library for JavaScript / TypeScript | fal.ai Docs



Client Library for JavaScript / TypeScript
==========================================

Introduction
------------

The client for JavaScript / TypeScript provides a seamless interface to interact with fal.

Installation
------------

First, add the client as a dependency in your project:

*   [npm](#tab-panel-2)
    
*   [yarn](#tab-panel-3)
    
*   [pnpm](#tab-panel-4)
    
*   [bun](#tab-panel-5)
    

    npm install --save @fal-ai/client

    yarn add @fal-ai/client

    pnpm add @fal-ai/client

    bun add @fal-ai/client

Features
--------

### 1\. Call an endpoint

Endpoints requests are managed by a queue system. This allows fal to provide a reliable and scalable service.

The `subscribe` method allows you to submit a request to the queue and wait for the result.

    import { fal } from "@fal-ai/client";
    const result = await fal.subscribe("fal-ai/flux/dev", {  input: {    prompt: "a cat",    seed: 6252023,    image_size: "landscape_4_3",    num_images: 4,  },  logs: true,  onQueueUpdate: (update) => {    if (update.status === "IN_PROGRESS") {      update.logs.map((log) => log.message).forEach(console.log);    }  },});
    console.log(result.data);console.log(result.requestId);

### 2\. Queue Management

You can manage the queue using the following methods:

#### Submit a Request

Submit a request to the queue using the `queue.submit` method.

    import { fal } from "@fal-ai/client";
    const { request_id } = await fal.queue.submit("fal-ai/flux/dev", {  input: {    prompt: "a cat",    seed: 6252023,    image_size: "landscape_4_3",    num_images: 4,  },  webhookUrl: "https://optional.webhook.url/for/results",});

This is useful when you want to submit a request to the queue and retrieve the result later. You can save the `request_id` and use it to retrieve the result later.

#### Check Request Status

Retrieve the status of a specific request in the queue:

    import { fal } from "@fal-ai/client";
    const status = await fal.queue.status("fal-ai/flux/dev", {  requestId: "764cabcf-b745-4b3e-ae38-1200304cf45b",  logs: true,});

#### Retrieve Request Result

Get the result of a specific request from the queue:

    import { fal } from "@fal-ai/client";
    const result = await fal.queue.result("fal-ai/flux/dev", {  requestId: "764cabcf-b745-4b3e-ae38-1200304cf45b",});
    console.log(result.data);console.log(result.requestId);

### 3\. File Uploads

Some endpoints require files as input. However, since the endpoints run asynchronously, processed by the queue, you will need to provide URLs to the files instead of the actual file content.

Luckily, the client library provides a way to upload files to the server and get a URL to use in the request.

    import { fal } from "@fal-ai/client";
    const file = new File(["Hello, World!"], "hello.txt", { type: "text/plain" });const url = await fal.storage.upload(file);

### 4\. Streaming

Some endpoints support streaming:

    import { fal } from "@fal-ai/client";
    const stream = await fal.stream("fal-ai/flux/dev", {  input: {    prompt: "a cat",    seed: 6252023,    image_size: "landscape_4_3",    num_images: 4,  },});
    for await (const event of stream) {  console.log(event);}
    const result = await stream.done();

### 5\. Realtime Communication

For the endpoints that support real-time inference via WebSockets, you can use the realtime client that abstracts the WebSocket connection, re-connection, serialization, and provides a simple interface to interact with the endpoint:

    import { fal } from "@fal-ai/client";
    const connection = fal.realtime.connect("fal-ai/flux/dev", {  onResult: (result) => {    console.log(result);  },  onError: (error) => {    console.error(error);  },});
    connection.send({  prompt: "a cat",  seed: 6252023,  image_size: "landscape_4_3",  num_images: 4,});

### 6\. Run

The endpoints can also be called directly instead of using the queue system.

    import { fal } from "@fal-ai/client";
    const result = await fal.run("fal-ai/flux/dev", {  input: {    prompt: "a cat",    seed: 6252023,    image_size: "landscape_4_3",    num_images: 4,  },});
    console.log(result.data);console.log(result.requestId);

API Reference
-------------

For a complete list of available methods and their parameters, please refer to [JavaScript / TypeScript API Reference documentation](https://fal-ai.github.io/fal-js/reference)
.

Examples
--------

Check out some of the examples below to see real-world use cases of the client library:

*   See `fal.realtime` in action with SDXL Lightning: [https://github.com/fal-ai/sdxl-lightning-demo-app](https://github.com/fal-ai/sdxl-lightning-demo-app)
    

Support
-------

If you encounter any issues or have questions, please visit the [GitHub repository](https://github.com/fal-ai/fal-js)
 or join our [Discord Community](https://discord.gg/fal-ai)
.

Migration from `serverless-client` to `client`
----------------------------------------------

As fal no longer uses “serverless” as part of the AI provider branding, we also made sure that’s reflected in our libraries. However, that’s not the only thing that changed in the new client. There was lot’s of improvements that happened thanks to our community feedback.

So, if you were using the `@fal-ai/serverless-client` package, you can upgrade to the new `@fal-ai/client` package by following these steps:

1.  Remove the `@fal-ai/serverless-client` package from your project:
    
        npm uninstall @fal-ai/serverless-client
    
2.  Install the new `@fal-ai/client` package:
    
        npm install --save @fal-ai/client
    
3.  Update your imports:
    
        import * as fal from "@fal-ai/serverless-client";import { fal } from "@fal-ai/client";
    
4.  Now APIs return a `Result<Output>` type that contains the `data` which is the API output and the `requestId`. This is a breaking change from the previous version, that allows us to return extra data to the caller without future breaking changes.
    
        const data = fal.subscribe(endpointId, { input });const { data, requestId } = fal.subscribe(endpointId, { input });

---

# Client Library for Python | fal.ai Docs



Client Library for Python
=========================

Introduction
------------

The client for Python provides a seamless interface to interact with fal.

Installation
------------

First, add the client as a dependency in your project:

    pip install fal-client

Features
--------

### 1\. Call an endpoint

Endpoints requests are managed by a queue system. This allows fal to provide a reliable and scalable service.

The `subscribe` method allows you to submit a request to the queue and wait for the result.

*   [Python](#tab-panel-8)
    
*   [Python (async)](#tab-panel-9)
    

    import fal_client
    def on_queue_update(update):    if isinstance(update, fal_client.InProgress):        for log in update.logs:           print(log["message"])
    result = fal_client.subscribe(    "fal-ai/flux/dev",    arguments={        "prompt": "a cat",        "seed": 6252023,        "image_size": "landscape_4_3",        "num_images": 4    },    with_logs=True,    on_queue_update=on_queue_update,)
    print(result)

    import asyncioimport fal_client
    async def subscribe():    def on_queue_update(update):        if isinstance(update, fal_client.InProgress):            for log in update.logs:                print(log["message"])
        result = await fal_client.subscribe_async(        "fal-ai/flux/dev",        arguments={            "prompt": "a cat",            "seed": 6252023,            "image_size": "landscape_4_3",            "num_images": 4        },        on_queue_update=on_queue_update,    )
        print(result)
    
    if __name__ == "__main__":    asyncio.run(subscribe())

### 2\. Queue Management

You can manage the queue using the following methods:

#### Submit a Request

Submit a request to the queue using the `queue.submit` method.

*   [Python](#tab-panel-10)
    
*   [Python (async)](#tab-panel-11)
    

    import fal_client
    handler = fal_client.submit(    "fal-ai/flux/dev",    arguments={        "prompt": "a cat",        "seed": 6252023,        "image_size": "landscape_4_3",        "num_images": 4    },)
    request_id = handler.request_id

    import asyncioimport fal_client
    async def submit():    handler = await fal_client.submit_async(        "fal-ai/flux/dev",        arguments={            "prompt": "a cat",            "seed": 6252023,            "image_size": "landscape_4_3",            "num_images": 4        },    )
        request_id = handler.request_id    print(request_id)

This is useful when you want to submit a request to the queue and retrieve the result later. You can save the `request_id` and use it to retrieve the result later.

#### Check Request Status

Retrieve the status of a specific request in the queue:

*   [Python](#tab-panel-12)
    
*   [Python (async)](#tab-panel-13)
    

    status = fal_client.status("fal-ai/flux/dev", request_id, with_logs=True)

    status = await fal_client.status_async("fal-ai/flux/dev", request_id, with_logs=True)

#### Retrieve Request Result

Get the result of a specific request from the queue:

*   [Python](#tab-panel-14)
    
*   [Python (async)](#tab-panel-15)
    

    result = fal_client.result("fal-ai/flux/dev", request_id)

    result = await fal_client.result_async("fal-ai/flux/dev", request_id)

### 3\. File Uploads

Some endpoints require files as input. However, since the endpoints run asynchronously, processed by the queue, you will need to provide URLs to the files instead of the actual file content.

Luckily, the client library provides a way to upload files to the server and get a URL to use in the request.

*   [Python](#tab-panel-16)
    
*   [Python (async)](#tab-panel-17)
    

    url = fal_client.upload_file("path/to/file")

    url = fal_client.upload_file_async("path/to/file")

### 4\. Streaming

Some endpoints support streaming:

*   [Python](#tab-panel-18)
    
*   [Python (async)](#tab-panel-19)
    

    import fal_client
    def stream():    stream = fal_client.stream(        "fal-ai/flux/dev",        arguments={            "prompt": "a cat",            "seed": 6252023,            "image_size": "landscape_4_3",            "num_images": 4        },    )    for event in stream:        print(event)
    
    if __name__ == "__main__":    stream()

    import asyncioimport fal_client
    async def stream():    stream = fal_client.stream_async(        "fal-ai/flux/dev",        arguments={            "prompt": "a cat",            "seed": 6252023,            "image_size": "landscape_4_3",            "num_images": 4        },    )    async for event in stream:        print(event)
    
    if __name__ == "__main__":    asyncio.run(stream())

### 5\. Realtime Communication

For the endpoints that support real-time inference via WebSockets, you can use the realtime client that abstracts the WebSocket connection, re-connection, serialization, and provides a simple interface to interact with the endpoint:

*   [Python](#tab-panel-22)
    
*   [Python (async)](#tab-panel-23)
    

### 6\. Run

The endpoints can also be called directly instead of using the queue system.

*   [Python](#tab-panel-20)
    
*   [Python (async)](#tab-panel-21)
    

    import fal_client
    result = fal_client.run(    "fal-ai/flux/dev",    arguments={        "prompt": "a cat",        "seed": 6252023,        "image_size": "landscape_4_3",        "num_images": 4    },)
    print(result)

    import asyncioimport fal_client
    async def submit():    result = await fal_client.run_async(        "fal-ai/flux/dev",        arguments={            "prompt": "a cat",            "seed": 6252023,            "image_size": "landscape_4_3",            "num_images": 4        },    )
        print(result)
    
    if __name__ == "__main__":    asyncio.run(submit())

API Reference
-------------

For a complete list of available methods and their parameters, please refer to [Python API Reference documentation](https://fal-ai.github.io/fal/client)
.

Support
-------

If you encounter any issues or have questions, please visit the [GitHub repository](https://github.com/fal-ai/fal)
 or join our [Discord Community](https://discord.gg/fal-ai)
.

---

# Client Library for Java | fal.ai Docs



Client Library for Java
=======================

Introduction
------------

The client for Java provides a seamless interface to interact with fal.

Installation
------------

First, add the client as a dependency in your project:

*   [Gradle](#tab-panel-0)
    
*   [Maven](#tab-panel-1)
    

    implementation 'ai.fal.client:fal-client:0.7.1'

    <dependency>  <groupId>ai.fal.client</groupId>  <artifactId>fal-client</artifactId>  <version>0.7.1</version></dependency>

Features
--------

### 1\. Call an endpoint

Endpoints requests are managed by a queue system. This allows fal to provide a reliable and scalable service.

The `subscribe` method allows you to submit a request to the queue and wait for the result.

    import ai.fal.client.*;import ai.fal.client.queue.*;
    var fal = FalClient.withEnvCredentials();
    var input = Map.of(    "prompt", "a cat",    "seed", 6252023,    "image_size", "landscape_4_3",    "num_images", 4);var result = fal.subscribe("fal-ai/flux/dev",    SubscribeOptions.<JsonObject>builder()        .input(input)        .logs(true)        .resultType(JsonObject.class)        .onQueueUpdate(update -> {            if (update instanceof QueueStatus.InProgress) {                System.out.println(((QueueStatus.InProgress) update).getLogs());            }        })        .build());

### 2\. Queue Management

You can manage the queue using the following methods:

#### Submit a Request

Submit a request to the queue using the `queue.submit` method.

    import ai.fal.client.*;import ai.fal.client.queue.*;
    var fal = FalClient.withEnvCredentials();
    var input = Map.of(    "prompt", "a cat",    "seed", 6252023,    "image_size", "landscape_4_3",    "num_images", 4);var job = fal.queue().submit("fal-ai/flux/dev",    SubmitOptions.<JsonObject>builder()        .input(input)        .webhookUrl("https://optional.webhook.url/for/results")        .resultType(JsonObject.class)        .build());

This is useful when you want to submit a request to the queue and retrieve the result later. You can save the `request_id` and use it to retrieve the result later.

#### Check Request Status

Retrieve the status of a specific request in the queue:

    import ai.fal.client.*;import ai.fal.client.queue.*;
    var fal = FalClient.withEnvCredentials();
    var job = fal.queue().status("fal-ai/flux/dev", QueueStatusOptions    .withRequestId("764cabcf-b745-4b3e-ae38-1200304cf45b"));

#### Retrieve Request Result

Get the result of a specific request from the queue:

    import ai.fal.client.*;import ai.fal.client.queue.*;
    var fal = FalClient.withEnvCredentials();
    var result = fal.queue().result("fal-ai/flux/dev", QueueResultOptions    .withRequestId("764cabcf-b745-4b3e-ae38-1200304cf45b"));

### 3\. File Uploads

Some endpoints require files as input. However, since the endpoints run asynchronously, processed by the queue, you will need to provide URLs to the files instead of the actual file content.

Luckily, the client library provides a way to upload files to the server and get a URL to use in the request.

### 4\. Streaming

Some endpoints support streaming:

### 5\. Realtime Communication

For the endpoints that support real-time inference via WebSockets, you can use the realtime client that abstracts the WebSocket connection, re-connection, serialization, and provides a simple interface to interact with the endpoint:

### 6\. Run

The endpoints can also be called directly instead of using the queue system.

    import ai.fal.client.*;
    var fal = FalClient.withEnvCredentials();
    var input = Map.of(    "prompt", "a cat",    "seed", 6252023,    "image_size", "landscape_4_3",    "num_images", 4);
    var result = fal.run("fal-ai/flux/dev", RunOptions.withInput(input));

API Reference
-------------

For a complete list of available methods and their parameters, please refer to [Java API Reference documentation](https://fal-ai.github.io/fal-java/fal-client/index.html)
.

Support
-------

If you encounter any issues or have questions, please visit the [GitHub repository](https://github.com/fal-ai/fal-java)
 or join our [Discord Community](https://discord.gg/fal-ai)
.

---

# Client Library for Swift (iOS) | fal.ai Docs



Client Library for Swift (iOS)
==============================

Introduction
------------

The client for Swift (iOS) provides a seamless interface to interact with fal.

Installation
------------

First, add the client as a dependency in your project:

    .package(url: "https://github.com/fal-ai/fal-swift.git", from: "0.5.6")

Features
--------

### 1\. Call an endpoint

Endpoints requests are managed by a queue system. This allows fal to provide a reliable and scalable service.

The `subscribe` method allows you to submit a request to the queue and wait for the result.

    import FalClient
    let result = try await fal.subscribe(    to: "fal-ai/flux/dev",    input: [        "prompt": "a cat",        "seed": 6252023,        "image_size": "landscape_4_3",        "num_images": 4    ],    includeLogs: true) { update in    if case let .inProgress(logs) = update {        print(logs)    }}

### 2\. Queue Management

You can manage the queue using the following methods:

#### Submit a Request

Submit a request to the queue using the `queue.submit` method.

    import FalClient
    let job = try await fal.queue.submit(    "fal-ai/flux/dev",    input: [        "prompt": "a cat",        "seed": 6252023,        "image_size": "landscape_4_3",        "num_images": 4    ],    webhookUrl: "https://optional.webhook.url/for/results")

This is useful when you want to submit a request to the queue and retrieve the result later. You can save the `request_id` and use it to retrieve the result later.

#### Check Request Status

Retrieve the status of a specific request in the queue:

    import FalClient
    let status = try await fal.queue.status(    "fal-ai/flux/dev",    of: "764cabcf-b745-4b3e-ae38-1200304cf45b",    includeLogs: true)

#### Retrieve Request Result

Get the result of a specific request from the queue:

    import FalClient
    let result = try await fal.queue.response(    "fal-ai/flux/dev",    of: "764cabcf-b745-4b3e-ae38-1200304cf45b")

### 3\. File Uploads

Some endpoints require files as input. However, since the endpoints run asynchronously, processed by the queue, you will need to provide URLs to the files instead of the actual file content.

Luckily, the client library provides a way to upload files to the server and get a URL to use in the request.

    import FalClient
    let data = try await Data(contentsOf: URL(fileURLWithPath: "/path/to/file"))let url = try await fal.storage.upload(data)

### 4\. Streaming

Some endpoints support streaming:

### 5\. Realtime Communication

For the endpoints that support real-time inference via WebSockets, you can use the realtime client that abstracts the WebSocket connection, re-connection, serialization, and provides a simple interface to interact with the endpoint:

    import FalClient
    let connection = try fal.realtime.connect(to: "fal-ai/flux/dev") { result in    switch result {    case let .success(data):        print(data)    case let .failure(error):        print(error)    }}
    connection.send([    "prompt": "a cat",    "seed": 6252023,    "image_size": "landscape_4_3",    "num_images": 4])

### 6\. Run

The endpoints can also be called directly instead of using the queue system.

    import FalClient
    let result = try await fal.run(    "fal-ai/flux/dev",    input: [        "prompt": "a cat",        "seed": 6252023,        "image_size": "landscape_4_3",        "num_images": 4    ])

API Reference
-------------

For a complete list of available methods and their parameters, please refer to [Swift (iOS) API Reference documentation](https://swiftpackageindex.com/fal-ai/fal-swift/documentation/falclient)
.

Support
-------

If you encounter any issues or have questions, please visit the [GitHub repository](https://github.com/fal-ai/fal-swift)
 or join our [Discord Community](https://discord.gg/fal-ai)
.

---

# Client Library for Kotlin | fal.ai Docs



Client Library for Kotlin
=========================

Introduction
------------

The client for Kotlin provides a seamless interface to interact with fal.

Installation
------------

First, add the client as a dependency in your project:

*   [Gradle](#tab-panel-6)
    
*   [Maven](#tab-panel-7)
    

    implementation 'ai.fal.client:fal-client-kotlin:0.7.1'

    <dependency>  <groupId>ai.fal.client</groupId>  <artifactId>fal-client-kotlin</artifactId>  <version>0.7.1</version></dependency>

Features
--------

### 1\. Call an endpoint

Endpoints requests are managed by a queue system. This allows fal to provide a reliable and scalable service.

The `subscribe` method allows you to submit a request to the queue and wait for the result.

    import ai.fal.client.kt
    val fal = createFalClient()
    val input = mapOf<String, Any>(    "prompt" to "a cat",    "seed" to 6252023,    "image_size" to "landscape_4_3",    "num_images" to 4)val result = fal.subscribe("fal-ai/flux/dev", input, options = SubscribeOptions(    logs = true)) { update ->    if (update is QueueStatus.InProgress) {      println(update.logs)    }}

### 2\. Queue Management

You can manage the queue using the following methods:

#### Submit a Request

Submit a request to the queue using the `queue.submit` method.

    import ai.fal.client.kt
    val fal = createFalClient()
    val input = mapOf<String, Any>(    "prompt" to "a cat",    "seed" to 6252023,    "image_size" to "landscape_4_3",    "num_images" to 4)
    val job = fal.queue.submit("fal-ai/flux/dev", input, options = SubmitOptions(    webhookUrl = "https://optional.webhook.url/for/results"))

This is useful when you want to submit a request to the queue and retrieve the result later. You can save the `request_id` and use it to retrieve the result later.

#### Check Request Status

Retrieve the status of a specific request in the queue:

    import ai.fal.client.kt
    val fal = createFalClient()
    val job = fal.queue.status("fal-ai/flux/dev",    requestId = "764cabcf-b745-4b3e-ae38-1200304cf45b",    options = StatusOptions(        logs = true    ))

#### Retrieve Request Result

Get the result of a specific request from the queue:

    import ai.fal.client.kt
    val fal = createFalClient()
    val result = fal.queue.result("fal-ai/flux/dev",    requestId = "764cabcf-b745-4b3e-ae38-1200304cf45b")

### 3\. File Uploads

Some endpoints require files as input. However, since the endpoints run asynchronously, processed by the queue, you will need to provide URLs to the files instead of the actual file content.

Luckily, the client library provides a way to upload files to the server and get a URL to use in the request.

### 4\. Streaming

Some endpoints support streaming:

### 5\. Realtime Communication

For the endpoints that support real-time inference via WebSockets, you can use the realtime client that abstracts the WebSocket connection, re-connection, serialization, and provides a simple interface to interact with the endpoint:

### 6\. Run

The endpoints can also be called directly instead of using the queue system.

    import ai.fal.client.kt
    val fal = createFalClient()
    val input = mapOf<String, Any>(    "prompt" to "a cat",    "seed" to 6252023,    "image_size" to "landscape_4_3",    "num_images" to 4)
    val result = fal.run("fal-ai/flux/dev", input)

API Reference
-------------

For a complete list of available methods and their parameters, please refer to [Kotlin API Reference documentation](https://fal-ai.github.io/fal-java/fal-client-kotlin/fal-client-kotlin/ai.fal.client.kt/index.html)
.

Support
-------

If you encounter any issues or have questions, please visit the [GitHub repository](https://github.com/fal-ai/fal-java)
 or join our [Discord Community](https://discord.gg/fal-ai)
.

---

# Client libraries | fal.ai Docs



Client libraries
================

We have support via official client libraries for the following languages:

*   [JavaScript](/clients/javascript)
    
*   [Python](/clients/python)
    
*   [Swift](/clients/swift)
    
*   [Java](/clients/java)
    
*   [Kotlin](/clients/kotlin)
    
*   [Dart (Flutter)](/clients/dart)

---

# Client Library for Dart (Flutter) | fal.ai Docs



Client Library for Dart (Flutter)
=================================

Introduction
------------

The client for Dart (Flutter) provides a seamless interface to interact with fal.

Installation
------------

First, add the client as a dependency in your project:

    flutter pub add fal_client

Features
--------

### 1\. Call an endpoint

Endpoints requests are managed by a queue system. This allows fal to provide a reliable and scalable service.

The `subscribe` method allows you to submit a request to the queue and wait for the result.

    import 'package:fal_client/fal_client.dart';
    final fal = FalClient.withCredentials("FAL_KEY");
    final output = await fal.subscribe("fal-ai/flux/dev",  input: {    "prompt": "a cat",    "seed": 6252023,    "image_size": "landscape_4_3",    "num_images": 4  },  logs: true,  webhookUrl: "https://optional.webhook.url/for/results",  onQueueUpdate: (update) { print(update); });print(output.requestId);print(output.data);

### 2\. Queue Management

You can manage the queue using the following methods:

#### Submit a Request

Submit a request to the queue using the `queue.submit` method.

    import 'package:fal_client/fal_client.dart';
    final fal = FalClient.withCredentials("FAL_KEY");
    final job = await fal.queue.submit("fal-ai/flux/dev",  input: {    "prompt": "a cat",    "seed": 6252023,    "image_size": "landscape_4_3",    "num_images": 4  },  webhookUrl: "https://optional.webhook.url/for/results");print(job.requestId);

This is useful when you want to submit a request to the queue and retrieve the result later. You can save the `request_id` and use it to retrieve the result later.

#### Check Request Status

Retrieve the status of a specific request in the queue:

    import 'package:fal_client/fal_client.dart';
    final fal = FalClient.withCredentials("FAL_KEY");
    final job = await fal.queue.status("fal-ai/flux/dev",  requestId: "764cabcf-b745-4b3e-ae38-1200304cf45b",  logs: true);
    print(job.requestId);print(job.status);

#### Retrieve Request Result

Get the result of a specific request from the queue:

    import 'package:fal_client/fal_client.dart';
    final fal = FalClient.withCredentials("FAL_KEY");
    final output = await fal.queue.result("fal-ai/flux/dev",  requestId: "764cabcf-b745-4b3e-ae38-1200304cf45b");
    print(output.requestId);print(output.data);

### 3\. File Uploads

Some endpoints require files as input. However, since the endpoints run asynchronously, processed by the queue, you will need to provide URLs to the files instead of the actual file content.

Luckily, the client library provides a way to upload files to the server and get a URL to use in the request.

    import 'package:cross_file/cross_file.dart';import 'package:fal_client/fal_client.dart';
    final fal = FalClient.withCredentials("FAL_KEY");
    final file = XFile("path/to/file");final url = await fal.storage.upload(file);

### 4\. Streaming

Some endpoints support streaming:

### 5\. Realtime Communication

For the endpoints that support real-time inference via WebSockets, you can use the realtime client that abstracts the WebSocket connection, re-connection, serialization, and provides a simple interface to interact with the endpoint:

### 6\. Run

The endpoints can also be called directly instead of using the queue system.

    import 'package:fal_client/fal_client.dart';
    final fal = FalClient.withCredentials("FAL_KEY");
    final output = await fal.run("fal-ai/flux/dev",  input: {    "prompt": "a cat",    "seed": 6252023,    "image_size": "landscape_4_3",    "num_images": 4  });
    print(output.requestId);print(output.data);

API Reference
-------------

For a complete list of available methods and their parameters, please refer to [Dart (Flutter) API Reference documentation](https://pub.dev/documentation/fal_client/latest)
.

Examples
--------

Check out some of the examples below to see real-world use cases of the client library:

*   Simple Flutter app using fal image inference: [https://pub.dev/packages/fal\_client/example](https://pub.dev/packages/fal_client/example)
    

Support
-------

If you encounter any issues or have questions, please visit the [GitHub repository](https://github.com/fal-ai/fal-dart)
 or join our [Discord Community](https://discord.gg/fal-ai)
.

---

# Key-Based Authentication | fal.ai Docs



Key-Based Authentication
========================

There are two main reasons to use key-based authentication:

1.  When calling [ready-to-use models](https://fal.ai/models)
    
2.  In headless remote environments or CI/CD (where GitHub authentication is not available)

### Generating the keys

Navigate to our dashboard keys page and generate a key from the UI [fal.ai/dashboard/keys](https://fal.ai/dashboard/keys)

### Scopes

Scopes provide a way to control the permissions and access level of a given key. By assigning scopes to keys, you can limit the operations that each key can perform. Currently there are only two scopes, `ADMIN` and `API`. If you are just consuming [ready-to-use models](https://fal.ai/models)
, we recommend that you use the `API` scope.

#### API scope

*   Grants access to ready-to-use models.

#### ADMIN scope

*   Grants full access to private models.
*   Grants full access to CLI operations.
*   Grants access to ready-to-use models.

---

# GitHub Authentication | fal.ai Docs



GitHub Authentication
=====================

`fal` uses GitHub authentication by default which means that you need to have a [GitHub account](https://github.com/login)
 to use it.

### Logging in

[Installing fal](/quick-start)
 Python library lets you use the `fal` CLI, which you can use to authenticate. In your terminal, you can run the following command:

    fal auth login

Follow the instructions on your terminal to confirm your credentials. Once you’re done, you should get a success message in your terminal.

Now you’re ready to write your first fal function!

**Note:** Your login credentials are persisted on your local machine and cannot be transferred to another machine. If you want to use fal in your CI/CD, you will need to use [key-based credentials](/authentication/key-based)
.

---

# Add fal.ai to your Next.js app | fal.ai Docs



Add fal.ai to your Next.js app
==============================

### You will learn how to:

*   Connect a Next.js app deployed on Vercel to fal.ai

### Prerequisites

1.  A [fal.ai](https://fal.ai)
     account
2.  A [Vercel account](https://vercel.com)
    
3.  A Next.js app. Check the [Next.js guide](/integrations/nextjs)
     if you don’t have one yet.
4.  App deployed on Vercel. Run `npx vercel` in your app directory to deploy it in case you haven’t done it yet.

### Vercel official integration

The recommended way to add fal.ai to your app deployed on Vercel is to use the official integration. You can find it in the [Vercel marketplace](https://vercel.com/integrations/fal)
.

Click on **Add integration** and follow the steps. After you’re done, re-deploy your app and you’re good to go!

![Vercel integration](https://integrations-og-image.vercel.sh/api/og/fal?42673700034a7509d66487f3ed68a2bd)

### Manual setup

You can also manually add fal credentials to your Vercel environment manually.

1.  Go to your [fal.ai dashboard](https://fal.ai/dashboard/keys)
    , create an **API-scoped** key and copy it. Make sure you create an alias do identify which app is using it.
2.  Go to your app settings in Vercel and add a new environment variable called `FAL_KEY` with the value of the key you just copied. You can choose other names, but keep in mind that the default convention of fal-provided libraries is `FAL_KEY`.
3.  Re-deploy your app and you’re good to go!

---

# Real-Time Models | fal.ai Docs



Real-Time Models
================

Real-time AI is here! With the recent introduction of Latent Consistency Models (LCM) and distilled models like Stability’s SDXL Turbo and SD Turbo, it is now possible to generate images in under 100ms.

This fast inference capability opens up new possibilities for application types that were previously not feasible, such as real-time creativity tools and using the camera as a real-time model input.

You can find the fastest real time models in fal’s [Model Registry](https://fal.ai/models)
.

[fal-ai/ fast-lcm-diffusion\
\
text-to-image\
\
Run SDXL at the speed of light\
\
real-time lcm](https://fal.ai/models/fal-ai/fast-lcm-diffusion)
[fal-ai/ fast-turbo-diffusion\
\
text-to-image\
\
Run SDXL at the speed of light\
\
real-time optimized](https://fal.ai/models/fal-ai/fast-turbo-diffusion)

**How does fal provide the fastest real-time inference?**

We did all the optimizations in the book.

*   fal has built custom infrastructure and optimized the model inference to make sure these models are served to the end user as fast as possible.
*   fal has a globally distributed network of GPUs to make sure the inference happens as close to the user as possible.
*   We do very few hops between the user and the GPU. Our authentication service is written in Rust and deployed on the edge as close to the user and the GPUs as possible.
*   Our websocket and streaming clients provide the most efficient client/server communication possible.
*   We only authenticate through a jwt token, from the client directly to our services, we have built integrations to popular backend frameworks to facilitate token refreshes.

**Is fal’s real time AI inference ready for prime time?**

Several amazing demos and products were built using fal’s real time inference infrastructure. These demos went viral on social media and are still used by thousands of people every day.

You can see an example at [https://fal.ai/camera](https://fal.ai/camera)
.

---

# Add fal.ai to your Next.js app | fal.ai Docs



Add fal.ai to your Next.js app
==============================

### You will learn how to:

1.  Install the fal.ai libraries
2.  Add a server proxy to protect your credentials
3.  Generate an image using SDXL

### Prerequisites

1.  Have an existing Next.js app or create a new one using `npx create-next-app`
2.  Have a [fal.ai](https://fal.ai)
     account
3.  Have an API Key. You can [create one here](https://fal.ai/dashboard/keys)
    

### 1\. Install the fal.ai libraries

Using your favorite package manager, install both the `@fal-ai/client` and `@fal-ai/server-proxy` libraries.

*   [npm](#tab-panel-24)
    
*   [yarn](#tab-panel-25)
    
*   [pnpm](#tab-panel-26)
    

    npm install @fal-ai/client @fal-ai/server-proxy

    yarn add @fal-ai/client @fal-ai/server-proxy

    pnpm add @fal-ai/client @fal-ai/server-proxy

### 2\. Setup the proxy

The proxy will protect your API Key and prevent it from being exposed to the client. Usually app implementation have to handle that integration themselves, but in order to make the integration as smooth as possible, we provide a drop-in proxy implementation that can be integrated with either the **Page Router** or the **App Router**.

#### 2.1. Page Router

If you are using the **Page Router** (i.e. `src/pages/_app.js`), create an API handler in `src/pages/api/fal/proxy.js` (or `.ts` in case of TypeScript), and re-export the built-in proxy handler:

    export { handler as default } from "@fal-ai/server-proxy/nextjs";

#### 2.2. App Router

If you are using the **App Router** (i.e. `src/app/page.jsx`) create a route handler in `src/app/api/fal/proxy/route.js` (or `.ts` in case of TypeScript), and re-export the route handler:

    import { route } from "@fal-ai/server-proxy/nextjs";
    export const { GET, POST } = route;

#### 2.3. Setup the API Key

Make sure you have your API Key available as an environment variable. You can setup in your `.env.local` file for development and also in your hosting provider for production, such as [Vercel](https://vercel.com/docs/projects/environment-variables)
.

    FAL_KEY="key_id:key_secret"

#### 2.4. Custom proxy logic

It’s common for applications to execute custom logic before or after the proxy handler. For example, you may want to add a custom header to the request, or log the request and response, or apply some rate limit. The good news is that the proxy implementation is simply a standard Next.js API/route handler function, which means you can compose it with other handlers.

For example, let’s assume you want to add some analytics and apply some rate limit to the proxy handler:

    import { route } from "@fal-ai/server-proxy/nextjs";
    // Let's add some custom logic to POST requests - i.e. when the request is// submitted for processingexport const POST = (req) => {  // Add some analytics  analytics.track("fal.ai request", {    targetUrl: req.headers["x-fal-target-url"],    userId: req.user.id,  });
      // Apply some rate limit  if (rateLimiter.shouldLimit(req)) {    res.status(429).json({ error: "Too many requests" });  }
      // If everything passed your custom logic, now execute the proxy handler  return route.POST(req);};
    // For GET requests we will just use the built-in proxy handler// But you could also add some custom logic here if you needexport const GET = route.GET;

Note that the URL that will be forwarded to server is available as a header named `x-fal-target-url`. Also, keep in mind the example above is just an example, `rateLimiter` and `analytics` are just placeholders.

The example above used the app router, but the same logic can be applied to the page router and its `handler` function.

### 3\. Configure the client

On your main file (i.e. `src/pages/_app.jsx` or `src/app/page.jsx`), configure the client to use the proxy:

    import { fal } from "@fal-ai/client";
    fal.config({  proxyUrl: "/api/fal/proxy",});

### 4\. Generate an image

Now that the client is configured, you can generate an image using `fal.subscribe` and pass the model id and the input parameters:

    const result = await fal.subscribe("fal-ai/flux/dev", {  input: {    prompt,    image_size: "square_hd",  },  pollInterval: 5000,  logs: true,  onQueueUpdate(update) {    console.log("queue update", update);  },});
    const imageUrl = result.images[0].url;

See more about Flux Dev used in this example on [fal.ai/models/fal-ai/flux/dev](https://fal.ai/models/fal-ai/flux/dev)
.

### What’s next?

Image generation is just one of the many cool things you can do with fal. Make sure you:

*   Check our demo application at [github.com/fal-ai/serverless-js/apps/demo-nextjs-app-router](https://github.com/fal-ai/fal-js/tree/main/apps/demo-nextjs-app-router)
    
*   Check all the available [Model APIs](https://fal.ai/models)
    
*   Learn how to write your own model APIs on [Introduction to serverless functions](/private-serverless-models)
    
*   Read more about function endpoints on [private serverless models](/private-serverless-models)
    
*   Check the next page to learn how to [deploy your app to Vercel](/integrations/vercel)

---

# Keeping fal API Secrets Safe | fal.ai Docs



Keeping fal API Secrets Safe
============================

Real-time models using WebSockets present challenges in ensuring the security of API secrets.

The WebSocket connection is established directly from the browser or native mobile application, making it unsafe to embed API keys and secrets directly into the client. To address this, we have developed additional tools to enable secure authentication with our servers without introducing unnecessary intermediaries between the client and our GPU servers. Instead of using traditional API keys, we recommend utilizing short-lived [JWT](https://jwt.io/)
 tokens for authentication.

Easiest way to communicate with fal using websockets is through our [javascript](https://github.com/fal-ai/fal-js)
 and [swift](https://github.com/fal-ai/fal-swift)
 clients and a [server proxy](/model-endpoints/server-side.mdx)
.

When `fal.realtime.connect` is invoked the fal client gets a short lived [JWT](https://jwt.io/)
 token through a server proxy to authenticate with fal services. This token is refreshed automatically by the client when it is needed.

*   [Javascript](#tab-panel-37)
    
*   [SWIFT](#tab-panel-38)
    

    import { fal } from "@fal-ai/client";
    fal.config({  proxyUrl: "/api/fal/proxy",});
    const { send } = fal.realtime.connect("fal-ai/fast-lcm-diffusion", {  connectionKey: "realtime-demo",  throttleInterval: 128,  onResult(result) {    // display  },});

    import FalClientlet fal = FalClient.withProxy("http://localhost:3333/api/fal/proxy")
    let connection = try fal.realtime.connect(    to: OptimizedLatentConsistency,    connectionKey: "PencilKitDemo",    throttleInterval: .milliseconds(128)) { (result: Result<LcmResponse, Error>)  in    if case let .success(data) = result,        let image = data.images.first {        let data = try? Data(contentsOf: URL(string: image.url)!)        DispatchQueue.main.async {            self.currentImage = data        }    }}

Checkout the [FalRealtimeSampleApp (swift)](https://github.com/fal-ai/fal-swift/tree/main/Sources/Samples/FalRealtimeSampleApp)
 and [realtime demo (js)](https://github.com/fal-ai/fal-js/blob/main/apps/demo-nextjs-app-router/app/realtime/page.tsx)
 for more details.

---

# Real Time Models Quickstart | fal.ai Docs



Real Time Models Quickstart
===========================

In this example, we’ll be using our most popular [optimized ultra fast latent consistency model](https://fal.ai/models/fast-lcm-diffusion-turbo/api)
.

All our Model Endpoint’s support HTTP/REST. Additionally our real-time models support WebSockets. You can use the HTTP/REST endpoint for any real time model but if you are sending back to back requests using websockets gives the best results.

[fal-ai/ fast-lcm-diffusion\
\
text-to-image\
\
Run SDXL at the speed of light\
\
real-time lcm](https://fal.ai/models/fal-ai/fast-lcm-diffusion)
[fal-ai/ fast-turbo-diffusion\
\
text-to-image\
\
Run SDXL at the speed of light\
\
real-time optimized](https://fal.ai/models/fal-ai/fast-turbo-diffusion)

Before we proceed, you need to create your [API key](https://fal.ai/dashboard/keys)
.

    import { fal } from "@fal-ai/client";
    fal.config({  credentials: "PASTE_YOUR_FAL_KEY_HERE",});
    const connection = fal.realtime.connect("fal-ai/fast-lcm-diffusion", {  onResult: (result) => {    console.log(result);  },  onError: (error) => {    console.error(error);  },});
    connection.send({  prompt:    "an island near sea, with seagulls, moon shining over the sea, light house, boats int he background, fish flying over the sea",  sync_mode: true,  image_url:    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",});

You can read more about the real time clients in our [real time client docs](/model-endpoints#the-fal-client)
 section.

**To get the best performance from this model:**

*   Make sure the image is provided as a base64 encoded data url.
*   Make sure the image\_url is exactly **512x512**.
*   Make sure sync\_mode is true, this will make sure you also get a base64 encoded data url back from our API.

You can also use **768x768** or **1024x1024** as your image dimensions, the inference will be faster for this configuration compared to random dimensions but wont be as fast as **512x512**.

**Video Tutorial:** _Latent Consistency - Build a Real-Time AI Image App with WebSockets, Next.js, and fal.ai by [Nader Dabit](https://twitter.com/dabit3)
_

---

# Introduction to Private Serverless Models | fal.ai Docs



Introduction to Private Serverless Models
=========================================

In addition to using our blazing-fast public API endpoints you can also take advantage of fal’s infrastructure for your private AI models. This section explains how to deploy a custom private AI model to fal’s infrastructure.

#### Install the fal sdk python package

    pip install fal

### Speed run Stable Diffusion

The example below uses the `diffusers` library to run a simple stable diffusion pipeline.

    import falfrom pydantic import BaseModelfrom fal.toolkit import Image
    
    class Input(BaseModel):    prompt: str
    
    class Output(BaseModel):    image: Image
    
    class MyApp(fal.App, keep_alive=300):    machine_type = "GPU-A100"    requirements = [        "diffusers==0.29.0",        "torch==2.3.0",        "accelerate",        "transformers",    ]
        def setup(self):        import torch        from diffusers import StableDiffusionXLPipeline, DPMSolverSinglestepScheduler
            self.pipe = StableDiffusionXLPipeline.from_pretrained(            "sd-community/sdxl-flash",            torch_dtype=torch.float16,        ).to("cuda")        self.pipe.scheduler = DPMSolverSinglestepScheduler.from_config(            self.pipe.scheduler.config,            timestep_spacing="trailing",        )
        @fal.endpoint("/")    def run(self, request: Input) -> Output:        result = self.pipe(request.prompt, num_inference_steps=7, guidance_scale=3)        image = Image.from_pil(result.images[0])        return Output(image=image)

    fal run example.py::MyApp

First time you run this application, `fal` will create a virtual environment that satisfies the requirements specified in the `requirements` variable. This environment will be cached and used for each subsequent invocation of the API.

    Access your exposed service at https://fal.run/1714827/4c5223d8-6943-47cb-8401-76c031ea222e

Once you see the message above, your application is ready to accept requests!

    curl -X POST https://fal.run/1714827/4c5223d8-6943-47cb-8401-76c031ea222e -H "Content-Type: application/json" -d '{"prompt":"rhino"}'

In this code:

*   `MyApp` is a class that inherits from `fal.App`. This structure allows the creation of a complex application with multiple endpoints, which are defined using the `@fal.endpoint` decorator.
    
*   `machine_type` is a class attribute that specifies the type of machine on which this application will run. Here, `"GPU-A100"` is specified.
    
*   `requirements` is another class attribute that lists the dependencies needed for the application to run. In this case, `"my_requirements"` is a placeholder for actual dependencies.
    
*   The `setup()` method is overridden to initialize the models used in the application. This method is executed once when the application is started.
    
*   The `@fal.endpoint` decorator is used to define the routes or endpoints of the application. In this example, only one endpoint is defined: `"/"`.
    

### Deploying your application

Once your application is ready for deployment, you can use the fal CLI to deploy it:

    fal deploy example.py::MyApp

In this command, we instruct fal to deploy the `MyApp` class from example.py as an application.

Upon successful deployment, fal will provide a URL, for example, `https://fal.run/777/my_app`. This URL is the public access point to your deployed application, allowing you to interact with the API endpoints defined within your `MyApp` class.

### Setup Functions and `keep_alive`

#### `keep_alive`

“keep\_alive” is a configuration setting that enables the server to continue running even when there are no active requests. By setting `keep_alive`, you can ensure that if you hit the same application within the specified time frame, you can avoid incurring any overhead at all. “keep\_alive” is measured in seconds, in the example below the application will keep running for at least 300 seconds after the last request.

    class MyApp(fal.App, keep_alive=300):   ...

#### setup()

When managing AI workloads, it’s vital to prevent the same model from being reloaded into memory each time the serverless application is invoked. Each application can define a setup() function. This function is invoked once during application startup, and its result is cached in memory for the entire server lifecycle.

    class MyApp(fal.App, keep_alive=300):    machine_type = "GPU-A100"    requirements = [        "diffusers==0.29.0",        "torch==2.3.0",        "accelerate",        "transformers",    ]
        def setup(self):        import torch        from diffusers import StableDiffusionXLPipeline, DPMSolverSinglestepScheduler
            self.pipe = StableDiffusionXLPipeline.from_pretrained(            "sd-community/sdxl-flash",            torch_dtype=torch.float16,        ).to("cuda")        self.pipe.scheduler = DPMSolverSinglestepScheduler.from_config(            self.pipe.scheduler.config,            timestep_spacing="trailing",        )

### Min/Max Concurrency

fal applications have a simple managed autoscaling system. You can configure the autoscaling behavior through `min_concurrency` and `max_concurrency`.

    class MyApp(fal.App, keep_alive=300, min_concurrency=1, max_concurrency=5):   ...

`min_concurrency` - indicated the number of replicas the system should maintain when there are no requests. `max_concurrency` - indicates the maximum number of replicas the system should have. Once this limit is reached, all subsequent requests are placed in a managed queue.

---

# Setting secrets | fal.ai Docs



Setting secrets
===============

For setting sensitive information (such as API keys or database credentials) to be accessed within your fal functions you can use the `fal secrets` CLI interface.

    $ fal secrets set MY_API_TOKEN=token MY_IDENTITY_KEY=identity

Any secret that is set will be exposed to all functions running from your user, and can be accessible as if they are regular environment variables.

    import osimport fal
    @fal.function()def print_secrets():    print(os.getenv("MY_API_TOKEN"))    print(os.getenv("MY_IDENTITY_KEY"))
    if __name__ == "__main__":    print_secrets()

You can also list the secrets you have through the CLI, but the values will be hidden for security reasons.

    $ fal secrets list┏━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓┃ Secret Name             ┃ Created At                 ┃┡━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩│ MY_API_TOKEN            │ 2023-09-05 15:17:39.279347 ││ MY_IDENTITY_KEY         │ 2023-09-05 15:17:41.444478 │└─────────────────────────┴────────────────────────────┘

To omit a secret from being present in new runs, you can simply delete it through the CLI:

    $ fal secrets unset MY_API_TOKEN

---

# Passing arguments and leveraging Pydantic | fal.ai Docs



Passing arguments and leveraging Pydantic
=========================================

fal Applications and FAST API are fully compatible with Pydantic. Any features of Pydantic used in fal endpoint arguments will also work.

Pydantic features can be used for data validation in your endpoint. In the example below, you can set some of the parameters as optional, set default values, and apply other types of validation such as constraints and types.

    import falfrom pydantic import BaseModelfrom fal.toolkit import Image
    class ImageModelInput(BaseModel):    seed: int | None = Field(        default=None,        description="""            The same seed and the same prompt given to the same version of Stable Diffusion            will output the same image every time.        """,        examples=[176400],    )    num_inference_steps: int = Field(        default=25,        description="""            Increasing the amount of steps tell the model that it should take more steps            to generate your final result which can increase the amount of detail in your image.        """,        gt=0,        le=100,    )
    class MyApp(fal.App(keep_alive=300)):    machine_type = "GPU-A100"    requirements = [        "diffusers==0.29.0",        "torch==2.3.0",        "accelerate",        "transformers",    ]
        def setup(self):        import torch        from diffusers import StableDiffusionXLPipeline, DPMSolverSinglestepScheduler
            self.pipe = StableDiffusionXLPipeline.from_pretrained(            "sd-community/sdxl-flash",            torch_dtype=torch.float16,        ).to("cuda")        self.pipe.scheduler = DPMSolverSinglestepScheduler.from_config(            self.pipe.scheduler.config,            timestep_spacing="trailing",        )
        @fal.endpoint("/")    def generate_image(self, request: ImageModelInput) -> Image:        result = self.pipe(request.prompt, num_inference_steps=7, guidance_scale=3)        image = Image.from_pil(result.images[0])        return image

---

# Introduction to Private Serverless Models | fal.ai Docs



Introduction to Private Serverless Models
=========================================

As mentioned earlier, each fal function runs in an isolated environment that gets voided right after their invocation (unless `keep_alive` is set). But for certain use cases, it may be important to persist certain results after the run is over. In such scenarios, you can use the `/data` volume, which is mounted on each machine and is shared across all your functions running at any point in time linked to your FAL account.

    import falfrom pathlib import Path
    DATA_DIR = Path("/data/mnist")
    @fal.function(    "virtualenv",    requirements=["torch>=2.0.0", "torchvision"],    machine_type="M",)def train_fashion_model():    import torch    from torchvision import datasets
        already_present = DATA_DIR.exists()    if already_present:        print("Test data is already downloaded, skipping download!")
        test_data = datasets.FashionMNIST(        root=DATA_DIR,        train=False,        download=not already_present,    )    ...
    if __name__ == "__main__":    train_fashion_model()

When you invoke this function for the first time, you will notice that Torch downloads the test dataset. However, subsequent invocations - even those not covered by the invocation’s `keep_alive` - will skip the download and proceed directly to your logic.

---

# Returning files and images from functions | fal.ai Docs



Returning files and images from functions
=========================================

Saving images to your persistent directory is not always a convenient way to access them (you can use the File Explorer provided by the fal Web UI.) Alternatively, when dealing with image inputs and outputs, you can use fal’s file and image classes to simplify the process.

    import falfrom fal.toolkit import Image
    MODEL_NAME = "google/ddpm-cat-256"
    
    @fal.function(    requirements=[        "diffusers[torch]",        "transformers",        "pydantic",    ],    machine_type="GPU-A100",)def generate_image():    from diffusers import DDPMPipeline
        pipe = DDPMPipeline.from_pretrained(MODEL_NAME, use_safetensors=True)    pipe = pipe.to("cuda")    result = pipe(num_inference_steps=25)    return Image.from_pil(result.images[0])
    
    if __name__ == "__main__":    cat_image = generate_image()    print(f"Here is your cat: {cat_image.url}")

Constructing an `Image` object on a serverless function automatically uploads it to fal’s block storage system and gives you a signed link for 2 days in which you can view or download it securely to have a copy of it as long as you need.

---

# Real-time endpoints & WebSockets | fal.ai Docs



Real-time endpoints & WebSockets
================================

For applications deployed on fal runtime; in addition to regular HTTP endpoints, developers might choose to implement auxiliary interfaces on top of raw WebSockets or fal’s (stateless) real-time application framework.

Under a `fal.App`, for any endpoint that deal with real-time connectivity, `@fal.realtime()` decorator can be used instead of `@fal.endpoint` to automatically make the interface compatible with [fal’s real-time clients](/real-time#real-time-models)
. The functions do not provide any session state, and are meant to be used for reducing the overall latency (with fal’s binary protocol) and eliminating fixed connection establishing overheads.

For power users who want to build stateful applications with their own real-time protocol, a `@fal.endpoint` can be initialized with `is_websocket=True` flag and the underlying function will receive the raw WebSocket connection and can choose to use it however it wants.

    import falfrom pydantic import BaseModel
    class Input(BaseModel):    prompt: str = Field()
    
    class Output(BaseModel):    output: str = Field()
    
    class RealtimeApp(fal.App):    @fal.endpoint("/")    def generate(self, input: Input) -> Output:        return Output(output=input.prompt)
        @fal.endpoint("/ws", is_websocket=True)    async def generate_ws(self, websocket: WebSocket) -> None:        await websocket.accept()        for _ in range(3):            await websocket.send_json({"message": "Hello world!"})        await websocket.close()
        @fal.realtime("/realtime")    def generate_rt(self, input: Input) -> Output:        return Output(output=input.prompt)

---

# Runtime Model Optimizations | fal.ai Docs



Runtime Model Optimizations
===========================

fal’s inference engine bindings takes a torch module and applies all relevant dynamic compilation and quantization techniques to make it faster out of the box without leaking any of the complexity to the user.

This API is currently experimental, and might be subject to change in the future.

Example usage:

    import falimport fal.toolkitfrom fal.toolkit import Imagefrom pydantic import BaseModel, Field
    
    class Input(BaseModel):    prompt: str = Field(        description="The prompt to generate an image from.",        examples=[            "A cinematic shot of a baby racoon wearing an intricate italian priest robe.",        ],    )
    
    class Output(BaseModel):    image: Image = Field(        description="The generated image.",    )
    
    class FalModel(fal.App):    machine_type = "GPU"    requirements = [        "accelerate",        "transformers>=4.30.2",        "diffusers>=0.26",        "torch>=2.2.0",    ]
        def setup(self) -> None:        import torch        from diffusers import AutoPipelineForText2Image
            # Load SDXL        self.pipeline = AutoPipelineForText2Image.from_pretrained(            "stabilityai/stable-diffusion-xl-base-1.0",            torch_dtype=torch.float16,            variant="fp16",        )        self.pipeline.to("cuda")
            # Apply fal's spatial optimizer to the pipeline.        self.pipeline.unet = fal.toolkit.optimize(self.pipeline.unet)        self.pipeline.vae = fal.toolkit.optimize(self.pipeline.vae)
            # Warm up the model.        self.pipeline(            prompt="a cat",            num_inference_steps=30,        )
        @fal.endpoint("/")    def text_to_image(self, input: Input) -> Output:        result = self.pipeline(            prompt=input.prompt,            num_inference_steps=30,        )        [image] = result.images        return Output(image=Image.from_pil(image))

---

# Optimizing Routing Behavior | fal.ai Docs



Optimizing Routing Behavior
===========================

When there are multiple available replicas of the same application, there isn’t a defined behavior for picking which one to use for a particular request with the assumption that all replicas would behave identically for the given set of inputs.

This might not be true for applications which hold state and might include an in-memory cache for certain sets of parameters. For example, if you are serving an application that can run any diffusion model but only can keep 3 distinct models in memory, you want to minimize the number of cache misses (because loading that model from scratch incurs a significant performance penalty) depending on a user provided input.

This is where the semantically-aware routing hints come into play. Instead of treating each replica equally, applications can provide hints for specialization and allow fal’s router to select the appropriate replica for a specific request. For this logic to work as efficiently, the user needs to provide a `X-Fal-Runner-Hint` header with a semantically identifying string hint and the application should implement a `provide_hints()` method that returns a list of hints. If there is a match in any of the replicas, fal’s router will send the request to that replica. However, if there is no match, it will fall back to the standard routing algorithm.

    from typing import Any
    import falfrom fal.toolkit import Imagefrom pydantic import BaseModel
    class Input(BaseModel):    model: str = Field()    prompt: str = Field()
    
    class Output(BaseModel):    image: Image = Field()
    
    class AnyModelRunner(fal.App):    def setup(self) -> None:        self.models = {}
        def provide_hints(self) -> list[str]:        # Choose to specialize on already loaded models; at first this will be empty        # so we'll be picked for any request, but as slowly the cache builds up, the        # replica will be more preferable compared to others.        return self.models.keys()
        def load_model(self, name: str) -> Any:        from diffusers import DiffusionPipeline
            if name in self.models:            return self.models[name]
            pipeline = DiffusionPipeline.from_pretrained(name)        pipeline.to("cuda")
            self.models[name] = pipeline        return pipeline
        @fal.endpoint("/")    def run_model(self, input: Input) -> Output:        model = self.load_model(input.model)        result = model(input.prompt)        return Output(image=Image.from_pil(result.images[0]))

---

# Running a containerized application | fal.ai Docs



Running a containerized application
===================================

The easiest way to understand how to run a containerized application is to see an example. Let’s convert the example from the [previous section](/private-serverless-models/runtime-optimization)
 into a containerized application.

    import falimport fal.toolkitfrom fal.container import ContainerImagefrom fal.toolkit import Image
    from pydantic import BaseModel, Field
    dockerfile_str = """FROM python:3.11
    RUN apt-get update && apt-get install -y ffmpegRUN pip install "accelerate" "transformers>=4.30.2" "diffusers>=0.26" "torch>=2.2.0""""
    
    class Input(BaseModel):    prompt: str = Field(        description="The prompt to generate an image from.",        examples=[            "A cinematic shot of a baby racoon wearing an intricate italian priest robe.",        ],    )
    
    class Output(BaseModel):    image: Image = Field(        description="The generated image.",    )
    
    class FalModel(    fal.App,    image=ContainerImage.from_dockerfile_str(dockerfile_str),    kind="container",  ):    machine_type = "GPU"
        def setup(self) -> None:        import torch        from diffusers import AutoPipelineForText2Image
            # Load SDXL        self.pipeline = AutoPipelineForText2Image.from_pretrained(            "stabilityai/stable-diffusion-xl-base-1.0",            torch_dtype=torch.float16,            variant="fp16",        )        self.pipeline.to("cuda")
            # Apply fal's spatial optimizer to the pipeline.        self.pipeline.unet = fal.toolkit.optimize(self.pipeline.unet)        self.pipeline.vae = fal.toolkit.optimize(self.pipeline.vae)
            # Warm up the model.        self.pipeline(            prompt="a cat",            num_inference_steps=30,        )
        @fal.endpoint("/")    def text_to_image(self, input: Input) -> Output:        result = self.pipeline(            prompt=input.prompt,            num_inference_steps=30,        )        [image] = result.images        return Output(image=Image.from_pil(image))

Voila! 🎉 The highlighted changes are the only modifications you need to make; the rest remains your familiar fal application.

---

# Fastest FLUX Endpoint | fal.ai Docs



Fastest FLUX Endpoint
=====================

We believe fal has the fastest FLUX endpoint in the planet. If you can find a faster one, we guarantee to beat it within one week. 🤝

[fal-ai/ flux/schnell\
\
text-to-image\
\
FLUX.1 \[schnell\] is a 12 billion parameter flow transformer that generates high-quality images from text in 1 to 4 steps, suitable for personal and commercial use.\
\
optimized](https://fal.ai/models/fal-ai/flux/schnell)
[fal-ai/ flux/dev\
\
text-to-image\
\
FLUX.1 \[dev\] is a 12 billion parameter flow transformer that generates high-quality images from text. It is suitable for personal and commercial use.\
\
flux](https://fal.ai/models/fal-ai/flux/dev)

Here is a quick guide on how to use this model from an API in less than 1 minute.

Before we proceed, you need to create an [API key](https://fal.ai/dashboard/keys)
.

This key secret will be used to authenticate your requests to the fal API.

    fal.config({  credentials: "PASTE_YOUR_FAL_KEY_HERE",});

Now you can call our Model API endpoint using the [fal js client](/model-endpoints#the-fal-client)
:

    import { fal } from "@fal-ai/client";
    const result = await fal.subscribe("fal-ai/flux/dev", {  input: {    prompt:      "photo of a rhino dressed suit and tie sitting at a table in a bar with a bar stools, award winning photography, Elke vogelsang",  },});

---

# Supported Machines | fal.ai Docs



Supported Machines
==================

The fal runtime lets you specify the size of the machine that your fal functions run on. This is done using the `machine_type` argument in the `fal.function` decorator. Currently, the following following options are available:

| Value | Description |
| --- | --- |
| XS  | 0.25 CPU cores, 256MB RAM (default) |
| S   | 0.50 CPU cores, 1GB RAM |
| M   | 2 CPU cores, 8GB RAM |
| L   | 4 CPU cores, 32GB RAM |
| GPU | 8 CPU cores, 64GB RAM, 1 GPU core (A100, 40GB VRAM) |

For example:

    @fal.function(machine_type="GPU")def my_function():  ...
    @fal.function(machine_type="L")def my_other_function():  ...

By default, the `machine_type` is set to `XS`.

You can also switch the machine type of an existing fal function by using the `on` method.

    my_function_S = my_function.on(machine_type="S")

In the above example, `my_function_S` is a new fal function that has the same contents as `my_function`, but it will run on a machine type `S`.

Both functions can be called:

    my_function() # executed on machine type `GPU`my_function_S() # same as my_function but executed on machine type `S`

`my_function` is executed on machine type `GPU`. And `my_function_S`, which has the same logic as `my_function`, is now executed on machine type `S`.

---

# Frequently Asked Questions | fal.ai Docs



Frequently Asked Questions
==========================

### What is the retention policy for the files generated by fal.ai?

The files generated by fal.ai are guaranteed to be available for at least **7 days**. After that, they may be deleted at any time. We recommend that you download and store on your own storage any files that you want to keep for longer.

### Can I use the generated files for commercial purposes?

Each model has its own license. Most of the endpoints available at fal are available for commercial use. Check for the label on each model page:

*   Commercial use : Commercial use is allowed. Even when the underlying model is not open-source, if it’s marked with this badge it means that fal has the necessary rights to provide the service for commercial use.
*   Research only : This model is available for research purposes only. You can use the API to generate images for research purposes, but you cannot use them for commercial purposes.

### What is the Partner API?

*   Partner API : Partner APIs are hosted by our partners. Therefore, we cannot offer percentage discount on them and cannot guarantee their availability.

### Is there a rate limit?

The rate limit for the API is **10 requests per second** per user, across all endpoints.

Note that we reserve the right to prioritize API requests over requests made through our Playground UI.

### Do you charge for failed requests?

Failures originated from our side, such as server errors or any HTTP status 5xx, are not charged. However, if the failure is due to an error in the request, such as an invalid input, which can result in HTTP status 422, the request will be charged.

### Do my credits expire?

Yes, the credits you purchase expire in 365 days. Free credits or credits from coupons expire in 90 days.

### Can I switch to an invoice-based payment?

Yes, we offer invoice-based payments for customers with higher volumes. Please [contact us](/cdn-cgi/l/email-protection#5a292f2a2a35282e1a3c3b36743b33)
 with information about your expected load.

### Do I pay for cold starts?

No, although cold start for our main endpoints is very rare, you will not be charged for them when they happen.

### Can I deploy my own models?

If you want access to deploy your a model for your private use to fal you need to [contact us](/cdn-cgi/l/email-protection#e4979194948b9690a4828588ca858d)
 with information about the expected load for said model.

### Do you offer discounts?

Yes, we offer discounts for customers with higher volumes. Please [contact us](/cdn-cgi/l/email-protection#2f5c5a5f5f405d5b6f494e43014e46)
 with information about your expected load.

---

# Cache-Efficient Dockerfile Guidelines with docker buildx (or buildKit) | fal.ai Docs



Cache-Efficient Dockerfile Guidelines with docker buildx (or buildKit)
======================================================================

Under the hood, we use [buildkit](https://docs.docker.com/build/buildkit)
 (or [docker buildx](https://docs.docker.com/reference/cli/docker/buildx)
) to build docker images. This allows us to take advantage of advanced caching mechanisms to improve build times and reduce resource consumption. In this guide, we’ll provide some guidelines for creating cache-efficient Dockerfiles.

### Introduction

Building a cache-efficient Dockerfile is crucial for improving the build time and reducing resource consumption. Docker Buildx and BuildKit provide advanced features that enhance caching mechanisms. This document provides guidelines for creating such Dockerfiles.

Check out the [Docker buildx documentation](https://github.com/docker/buildx)
 for more information.

### General Guidelines

#### 1\. Minimize Layers

Each `RUN`, `COPY`, or `ADD` instruction creates a new layer. Minimize the number of layers by combining commands.

**Bad Example:**

    RUN apt-get updateRUN apt-get install -y curl

**Good Example:**

    RUN apt-get update && apt-get install -y curl

#### 2\. Leverage Layer Caching

Order instructions from least to most frequently changing to maximize layer caching.

**Example:**

    # Install dependencies (changes less frequently)COPY requirements.txt /app/RUN pip install -r requirements.txt
    # Copy application code (changes more frequently)COPY . /app

#### 3\. Use `--mount=type=cache`

Utilize BuildKit’s `--mount=type=cache` to cache directories across builds.

**Example:**

    FROM python:3.9
    # Use BuildKit cache for pipRUN --mount=type=cache,target=/root/.cache/pip \    pip install --upgrade pip
    COPY requirements.txt /app/RUN --mount=type=cache,target=/root/.cache/pip \    pip install -r requirements.txt
    COPY . /app

#### 4\. Multi-Stage Builds

Use multi-stage builds to reduce the final image size by copying only the necessary artifacts from intermediate stages.

**Example:**

    FROM python:3.9 AS builderWORKDIR /appCOPY . .RUN pip install --upgrade pip \ && pip install -r requirements.txt
    FROM python:3.9-slimCOPY --from=builder /app /appWORKDIR /appENTRYPOINT ["python", "app.py"]

#### 5\. Clean Up After Installations

Remove unnecessary files and caches after installing packages to keep the image size small.

**Example:**

    RUN apt-get update && apt-get install -y \    build-essential \ && rm -rf /var/lib/apt/lists/*

#### 6\. Use `.dockerignore`

Specify files and directories to ignore during the build process to avoid unnecessary files in the build context.

**Example:**

    __pycache__*.pyc*.pyo

### Example Dockerfile

Here is an example of a cache-efficient Dockerfile using the principles outlined above:

    FROM python:3.9 AS baseWORKDIR /app
    # Install dependenciesCOPY requirements.txt ./RUN --mount=type=cache,target=/root/.cache/pip \    pip install --upgrade pip \ && pip install -r requirements.txt
    # Copy source filesCOPY . .
    # Build the applicationRUN python setup.py build
    # Production imageFROM python:3.9-slimCOPY --from=base /app /appWORKDIR /appENTRYPOINT ["python", "app.py"]

### fal Platform Specific Gotchas

When deploying your application on the fal platform, you don’t need to worry about enabling Docker Buildx or BuildKit. We take care of it for you. However, you can follow the guidelines mentioned above to create efficient Dockerfiles that will help speed up the build process and reduce resource consumption.

#### 1\. Interacting with the local filesystem

`COPY` and `ADD` (from local filesystem) are not supported as of now to copy files into the container from the host. Instead you can use fal’s `fal.toolkit` to upload files and refer them in the container using links.

    json_url = File.from_path("my-file.json", repository="cdn").url
    dockerfile_str = f"""FROM python:3.11-slimRUN apt-get update && apt-get install -y curlRUN curl '{json_url}' > my-file.json"""

or you can use `ADD` to directly download the file from the URL:

    json_url = File.from_path("requirements.txt", repository="cdn").url
    dockerfile_str = f"""FROM python:3.11-slimADD {json_url} /app/requirements.txtWORKDIR /appRUN pip install -r requirements.txt"""

### Conclusion

By following these guidelines, you can create Dockerfiles that build efficiently and take full advantage of Docker Buildx and BuildKit’s caching capabilities. This will lead to faster build times and reduced resource usage.

For more detailed information, refer to the [Docker documentation](https://docs.docker.com/build)
.

---

# 404 | fal.ai Docs



404
===

Page not found. Check the URL or try using the search bar.

---

# Container Support with fal | fal.ai Docs



Container Support with fal
==========================

fal now supports running functions within custom Docker containers, providing greater flexibility and control over your environment.

### Example: Using Custom Containers with fal functions

Here’s a complete example demonstrating how to use custom containers with `fal`.

    import fal
    from fal.container import ContainerImage
    dockerfile_str = """FROM python:3.11
    RUN apt-get update && apt-get install -y ffmpegRUN pip install pyjokes ffmpeg-python"""
    @fal.function(    kind="container",    image=ContainerImage.from_dockerfile_str(dockerfile_str),)def test_container():    # A dependency that might have complex installation requirements.    import ffmpeg    (        ffmpeg.input("input.mp4")        .filter('thumbnail', n=300)        .output("thumbnail_filter_2.png")        .run()    )    # And tell me a joke!    import pyjokes    print(pyjokes.get_joke())
        print("done")
    if __name__ == "__main__":    test_container()

#### Detailed Explanation

1.  **Importing fal and ContainerImage**:

    import falfrom fal.container import ContainerImage

2.  **Creating a Dockerfile String**: A multi-line string (`dockerfile_str`) is defined, specifying the base image as `python:3.11`, and installing `ffmpeg` and `pyjokes` packages.

    dockerfile_str = """FROM python:3.11
    RUN apt-get update && apt-get install -y ffmpegRUN pip install pyjokes ffmpeg-python"""

Alternatively, you can use a Dockerfile path to specify the Dockerfile location:

    import pathlibPWD = Path(__file__).resolve().parent@fal.function(    kind="container",    image=ContainerImage.from_dockerfile(f"{PWD}/Dockerfile"),)def test_container():    ...

3.  **Defining the Container Function**: The `@fal.function` decorator specifies that this function runs in a container. The `image` parameter is set using `ContainerImage.from_dockerfile_str(dockerfile_str)`, which builds the Docker image from the provided Dockerfile string.
    
        @fal.function(    kind="container",    image=ContainerImage.from_dockerfile_str(dockerfile_str),)
    
4.  **Function Implementation**: Inside `test_container`, the `ffmpeg` library processes a video to create a thumbnail image. Then, it uses `pyjokes` to print a random joke.
    
        def test_container():    import ffmpeg    (        ffmpeg.input("input.mp4")        .filter('thumbnail', n=300)        .output("thumbnail_filter_2.png")        .run()    )    import pyjokes    print(pyjokes.get_joke())
            print("done")
    

#### Running the Function

To run the function, save the code to a file (e.g., `test_container.py`) and execute it using the `fal run` command:

    fal run test_container.py

or directly from the Python interpreter:

    python test_container.py

This example demonstrates how to leverage Docker containers in fal, enabling customized execution environments for your functions. For more details and advanced usage, refer to the [fal Container Documentation](/private-serverless-models/running-containerized-model)
.

---


# Table of Contents

- [Quickstart | Firecrawl](#quickstart-firecrawl)
- [SDKs | Firecrawl](#sdks-firecrawl)
- [Firecrawl Docs](#firecrawl-docs)
- [Rate Limits | Firecrawl](#rate-limits-firecrawl)
- [Launch Week II | Firecrawl](#launch-week-ii-firecrawl)
- [Welcome to V1 | Firecrawl](#welcome-to-v1-firecrawl)
- [Integrations | Firecrawl](#integrations-firecrawl)
- [Python SDK | Firecrawl](#python-sdk-firecrawl)
- [Advanced Scraping Guide | Firecrawl](#advanced-scraping-guide-firecrawl)
- [Node SDK | Firecrawl](#node-sdk-firecrawl)
- [Crawl | Firecrawl](#crawl-firecrawl)
- [Go SDK | Firecrawl](#go-sdk-firecrawl)
- [Firecrawl Docs](#firecrawl-docs)
- [Map | Firecrawl](#map-firecrawl)
- [Rust SDK | Firecrawl](#rust-sdk-firecrawl)
- [Firecrawl Docs](#firecrawl-docs)
- [Firecrawl Docs](#firecrawl-docs)
- [Extract | Firecrawl](#extract-firecrawl)
- [Langchain | Firecrawl](#langchain-firecrawl)
- [Firecrawl Docs](#firecrawl-docs)
- [Llamaindex | Firecrawl](#llamaindex-firecrawl)
- [Firecrawl Docs](#firecrawl-docs)
- [CrewAI | Firecrawl](#crewai-firecrawl)
- [Firecrawl Docs](#firecrawl-docs)
- [Dify | Firecrawl](#dify-firecrawl)
- [Flowise | Firecrawl](#flowise-firecrawl)
- [Firecrawl Docs](#firecrawl-docs)
- [Langflow | Firecrawl](#langflow-firecrawl)
- [Camel AI | Firecrawl](#camel-ai-firecrawl)
- [Open Source vs Cloud | Firecrawl](#open-source-vs-cloud-firecrawl)
- [Running locally | Firecrawl](#running-locally-firecrawl)
- [Self-hosting | Firecrawl](#self-hosting-firecrawl)
- [Batch Scrape | Firecrawl](#batch-scrape-firecrawl)
- [Quickstart | Firecrawl](#quickstart-firecrawl)

---

# Quickstart | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Get Started

Quickstart

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#welcome-to-firecrawl)

Welcome to Firecrawl
--------------------------------------------------

[Firecrawl](https://firecrawl.dev?ref=github)
 is an API service that takes a URL, crawls it, and converts it into clean markdown. We crawl all accessible subpages and give you clean markdown for each. No sitemap required.

[​](#how-to-use-it)

How to use it?
-------------------------------------

We provide an easy to use API with our hosted version. You can find the playground and documentation [here](https://firecrawl.dev/playground)
. You can also self host the backend if you’d like.

Check out the following resources to get started:

*   [x]  **API**: [Documentation](https://docs.firecrawl.dev/api-reference/introduction)
    
*   [x]  **SDKs**: [Python](https://docs.firecrawl.dev/sdks/python)
    , [Node](https://docs.firecrawl.dev/sdks/node)
    , [Go](https://docs.firecrawl.dev/sdks/go)
    , [Rust](https://docs.firecrawl.dev/sdks/rust)
    
*   [x]  **LLM Frameworks**: [Langchain (python)](https://python.langchain.com/docs/integrations/document_loaders/firecrawl/)
    , [Langchain (js)](https://js.langchain.com/docs/integrations/document_loaders/web_loaders/firecrawl)
    , [Llama Index](https://docs.llamaindex.ai/en/latest/examples/data_connectors/WebPageDemo/#using-firecrawl-reader)
    , [Crew.ai](https://docs.crewai.com/)
    , [Composio](https://composio.dev/tools/firecrawl/all)
    , [PraisonAI](https://docs.praison.ai/firecrawl/)
    , [Superinterface](https://superinterface.ai/docs/assistants/functions/firecrawl)
    , [Vectorize](https://docs.vectorize.io/integrations/source-connectors/firecrawl)
    
*   [x]  **Low-code Frameworks**: [Dify](https://dify.ai/blog/dify-ai-blog-integrated-with-firecrawl)
    , [Langflow](https://docs.langflow.org/)
    , [Flowise AI](https://docs.flowiseai.com/integrations/langchain/document-loaders/firecrawl)
    , [Cargo](https://docs.getcargo.io/integration/firecrawl)
    , [Pipedream](https://pipedream.com/apps/firecrawl/)
    
*   [x]  **Others**: [Zapier](https://zapier.com/apps/firecrawl/integrations)
    , [Pabbly Connect](https://www.pabbly.com/connect/integrations/firecrawl/)
    
*   [ ]  Want an SDK or Integration? Let us know by opening an issue.

**Self-host:** To self-host refer to guide [here](/contributing/self-host)
.

### 

[​](#api-key)

API Key

To use the API, you need to sign up on [Firecrawl](https://firecrawl.dev)
 and get an API key.

### 

[​](#features)

Features

*   [**Scrape**](/_sites/docs.firecrawl.dev/introduction#scraping)
    : scrapes a URL and get its content in LLM-ready format (markdown, structured data via [LLM Extract](/_sites/docs.firecrawl.dev/introduction#extraction)
    , screenshot, html)
*   [**Crawl**](/_sites/docs.firecrawl.dev/introduction#crawling)
    : scrapes all the URLs of a web page and return content in LLM-ready format
*   [**Map**](/features/map)
    : input a website and get all the website urls - extremely fast

### 

[​](#powerful-capabilities)

Powerful Capabilities

*   **LLM-ready formats**: markdown, structured data, screenshot, HTML, links, metadata
*   **The hard stuff**: proxies, anti-bot mechanisms, dynamic content (js-rendered), output parsing, orchestration
*   **Customizability**: exclude tags, crawl behind auth walls with custom headers, max crawl depth, etc…
*   **Media parsing**: pdfs, docx, images.
*   **Reliability first**: designed to get the data you need - no matter how hard it is.
*   **Actions**: click, scroll, input, wait and more before extracting data

You can find all of Firecrawl’s capabilities and how to use them in our [documentation](https://docs.firecrawl.dev)

[​](#crawling)

Crawling
--------------------------

Used to crawl a URL and all accessible subpages. This submits a crawl job and returns a job ID to check the status of the crawl.

### 

[​](#installation)

Installation

### 

[​](#usage)

Usage

If you’re using cURL or `async crawl` functions on SDKs, this will return an `ID` where you can use to check the status of the crawl.

    {
      "success": true,
      "id": "123-456-789",
      "url": "https://api.firecrawl.dev/v1/crawl/123-456-789"
    }
    

### 

[​](#check-crawl-job)

Check Crawl Job

Used to check the status of a crawl job and get its result.

#### 

[​](#response)

Response

The response will be different depending on the status of the crawl. For not completed or large responses exceeding 10MB, a `next` URL parameter is provided. You must request this URL to retrieve the next 10MB of data. If the `next` parameter is absent, it indicates the end of the crawl data.

[​](#scraping)

Scraping
--------------------------

To scrape a single URL, use the `scrape_url` method. It takes the URL as a parameter and returns the scraped data as a dictionary.

### 

[​](#response-2)

Response

SDKs will return the data object directly. cURL will return the payload exactly as shown below.

    {
      "success": true,
      "data" : {
        "markdown": "Launch Week I is here! [See our Day 2 Release 🚀](https://www.firecrawl.dev/blog/launch-week-i-day-2-doubled-rate-limits)[💥 Get 2 months free...",\
        "html": "<!DOCTYPE html><html lang=\"en\" class=\"light\" style=\"color-scheme: light;\"><body class=\"__variable_36bd41 __variable_d7dc5d font-inter ...",\
        "metadata": {\
          "title": "Home - Firecrawl",\
          "description": "Firecrawl crawls and converts any website into clean markdown.",\
          "language": "en",\
          "keywords": "Firecrawl,Markdown,Data,Mendable,Langchain",\
          "robots": "follow, index",\
          "ogTitle": "Firecrawl",\
          "ogDescription": "Turn any website into LLM-ready data.",\
          "ogUrl": "https://www.firecrawl.dev/",\
          "ogImage": "https://www.firecrawl.dev/og.png?123",\
          "ogLocaleAlternate": [],\
          "ogSiteName": "Firecrawl",\
          "sourceURL": "https://firecrawl.dev",\
          "statusCode": 200\
        }\
      }\
    }\
    \
\
[​](#extraction)\
\
Extraction\
------------------------------\
\
With LLM extraction, you can easily extract structured data from any URL. We support pydantic schemas to make it easier for you too. Here is how you to use it:\
\
v1 is only supported on node, python and cURL at this time.\
\
Output:\
\
JSON\
\
    {\
        "success": true,\
        "data": {\
          "extract": {\
            "company_mission": "Train a secure AI on your technical resources that answers customer and employee questions so your team doesn't have to",\
            "supports_sso": true,\
            "is_open_source": false,\
            "is_in_yc": true\
          },\
          "metadata": {\
            "title": "Mendable",\
            "description": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
            "robots": "follow, index",\
            "ogTitle": "Mendable",\
            "ogDescription": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
            "ogUrl": "https://docs.firecrawl.dev/",\
            "ogImage": "https://docs.firecrawl.dev/mendable_new_og1.png",\
            "ogLocaleAlternate": [],\
            "ogSiteName": "Mendable",\
            "sourceURL": "https://docs.firecrawl.dev/"\
          },\
        }\
    }\
    \
\
### \
\
[​](#extracting-without-schema-new)\
\
Extracting without schema (New)\
\
You can now extract without a schema by just passing a `prompt` to the endpoint. The llm chooses the structure of the data.\
\
Output:\
\
JSON\
\
    {\
        "success": true,\
        "data": {\
          "extract": {\
            "company_mission": "Train a secure AI on your technical resources that answers customer and employee questions so your team doesn't have to",\
          },\
          "metadata": {\
            "title": "Mendable",\
            "description": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
            "robots": "follow, index",\
            "ogTitle": "Mendable",\
            "ogDescription": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
            "ogUrl": "https://docs.firecrawl.dev/",\
            "ogImage": "https://docs.firecrawl.dev/mendable_new_og1.png",\
            "ogLocaleAlternate": [],\
            "ogSiteName": "Mendable",\
            "sourceURL": "https://docs.firecrawl.dev/"\
          },\
        }\
    }\
    \
\
### \
\
[​](#extraction-v0)\
\
Extraction (v0)\
\
[​](#interacting-with-the-page-with-actions)\
\
Interacting with the page with Actions\
--------------------------------------------------------------------------------------\
\
Firecrawl allows you to perform various actions on a web page before scraping its content. This is particularly useful for interacting with dynamic content, navigating through pages, or accessing content that requires user interaction.\
\
Here is an example of how to use actions to navigate to google.com, search for Firecrawl, click on the first result, and take a screenshot.\
\
It is important to almost always use the `wait` action before/after executing other actions to give enough time for the page to load.\
\
### \
\
[​](#example)\
\
Example\
\
### \
\
[​](#output)\
\
Output\
\
[​](#open-source-vs-cloud)\
\
Open Source vs Cloud\
--------------------------------------------------\
\
Firecrawl is open source available under the [AGPL-3.0 license](https://github.com/mendableai/firecrawl/blob/main/LICENSE)\
.\
\
To deliver the best possible product, we offer a hosted version of Firecrawl alongside our open-source offering. The cloud solution allows us to continuously innovate and maintain a high-quality, sustainable service for all users.\
\
Firecrawl Cloud is available at [firecrawl.dev](https://firecrawl.dev)\
 and offers a range of features that are not available in the open source version:\
\
[​](#contributing)\
\
Contributing\
----------------------------------\
\
We love contributions! Please read our [contributing guide](https://github.com/mendableai/firecrawl/blob/main/CONTRIBUTING.md)\
 before submitting a pull request.\
\
[Launch Week II (New)](/launch-week)\
\
On this page\
\
*   [Welcome to Firecrawl](#welcome-to-firecrawl)\
    \
*   [How to use it?](#how-to-use-it)\
    \
*   [API Key](#api-key)\
    \
*   [Features](#features)\
    \
*   [Powerful Capabilities](#powerful-capabilities)\
    \
*   [Crawling](#crawling)\
    \
*   [Installation](#installation)\
    \
*   [Usage](#usage)\
    \
*   [Check Crawl Job](#check-crawl-job)\
    \
*   [Response](#response)\
    \
*   [Scraping](#scraping)\
    \
*   [Response](#response-2)\
    \
*   [Extraction](#extraction)\
    \
*   [Extracting without schema (New)](#extracting-without-schema-new)\
    \
*   [Extraction (v0)](#extraction-v0)\
    \
*   [Interacting with the page with Actions](#interacting-with-the-page-with-actions)\
    \
*   [Example](#example)\
    \
*   [Output](#output)\
    \
*   [Open Source vs Cloud](#open-source-vs-cloud)\
    \
*   [Contributing](#contributing)

---

# SDKs | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Overall

Overview

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#official-sdks)

Official SDKs
------------------------------------

[Python SDK\
----------\
\
Explore the Python SDK for Firecrawl.](python)
[Node SDK\
--------\
\
Explore the Node SDK for Firecrawl.](node)

[​](#community-sdks)

Community SDKs
--------------------------------------

[Go SDK\
------\
\
Explore the Go SDK for Firecrawl.](go)
[Rust SDK\
--------\
\
Explore the Rust SDK for Firecrawl.](rust)

[Python](/sdks/python)

On this page

*   [Official SDKs](#official-sdks)
    
*   [Community SDKs](#community-sdks)

---

# Firecrawl Docs

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Using the API

Introduction

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#base-url)

Base URL
--------------------------

All requests contain the following base URL:

    https://api.firecrawl.dev 
    

[​](#authentication)

Authentication
--------------------------------------

For authentication, it’s required to include an Authorization header. The header should contain `Bearer fc-123456789`, where `fc-123456789` represents your API Key.

    Authorization: Bearer fc-123456789
    

​

[​](#response-codes)

Response codes
--------------------------------------

Firecrawl employs conventional HTTP status codes to signify the outcome of your requests.

Typically, 2xx HTTP status codes denote success, 4xx codes represent failures related to the user, and 5xx codes signal infrastructure problems.

| Status | Description |
| --- | --- |
| 200 | Request was successful. |
| 400 | Verify the correctness of the parameters. |
| 401 | The API key was not provided. |
| 402 | Payment required |
| 404 | The requested resource could not be located. |
| 429 | The rate limit has been surpassed. |
| 5xx | Signifies a server error with Firecrawl. |

Refer to the Error Codes section for a detailed explanation of all potential API errors.

​

[​](#rate-limit)

Rate limit
------------------------------

The Firecrawl API has a rate limit to ensure the stability and reliability of the service. The rate limit is applied to all endpoints and is based on the number of requests made within a specific time frame.

When you exceed the rate limit, you will receive a 429 response code.

[Scrape](/api-reference/endpoint/scrape)

On this page

*   [Base URL](#base-url)
    
*   [Authentication](#authentication)
    
*   [Response codes](#response-codes)
    
*   [Rate limit](#rate-limit)

---

# Rate Limits | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Get Started

Rate Limits

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#current-plans)

Current Plans
------------------------------------

| Plan | /scrape (requests/min) | /crawl (requests/min) | /search (requests/min) |
| --- | --- | --- | --- |
| Free | 10  | 1   | 5   |
| Hobby | 20  | 3   | 10  |
| Standard | 100 | 10  | 50  |
| Growth | 1000 | 50  | 500 |

|     | /crawl/status (requests/min) |
| --- | --- |
| Default | 150 |

These rate limits are enforced to ensure fair usage and availability of the API for all users. If you require higher limits, please contact us at [hello@firecrawl.com](mailto:hello@firecrawl.com)
 to discuss custom plans.

### 

[​](#batch-endpoints)

Batch Endpoints

Batch endpoints follow the /crawl rate limit.

[​](#legacy-plans)

Legacy Plans
----------------------------------

| Plan | /scrape (requests/min) | /crawl (concurrent req) | /search (requests/min) |
| --- | --- | --- | --- |
| Starter | 20  | 3   | 20  |
| Standard Legacy | 40  | 40  | 40  |
| Scaled Legacy | 50  | 20  | 50  |

If you require higher limits, please contact us at [hello@firecrawl.com](mailto:hello@firecrawl.com)
 to discuss custom plans.

[Welcome to V1](/v1-welcome)
[Integrations](/integrations)

On this page

*   [Current Plans](#current-plans)
    
*   [Batch Endpoints](#batch-endpoints)
    
*   [Legacy Plans](#legacy-plans)

---

# Launch Week II | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Get Started

Launch Week II (New)

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#day-7-faster-markdown-parsing)

Day 7 - Faster Markdown Parsing
----------------------------------------------------------------------

We’ve rebuilt our Markdown parser from the ground up with a focus on speed and performance. This enhancement ensures that your web scraping tasks are more efficient and deliver higher-quality results.

### 

[​](#whats-new)

What’s New?

*   **Speed Improvements**: Experience parsing speeds up to 4 times faster than before, allowing for quicker data processing and reduced waiting times.
*   **Enhanced Reliability**: Our new parser handles a wider range of HTML content more gracefully, reducing errors and improving consistency.
*   **Cleaner Markdown Output**: Get cleaner and more readable Markdown, making your data easier to work with and integrate into your workflows.

[​](#day-6-mobile-scraping-mobile-screenshots)

Day 6 - Mobile Scraping (+ Mobile Screenshots)
------------------------------------------------------------------------------------------------

Firecrawl now introduces **mobile device emulation** for both scraping and screenshots, empowering you to interact with sites as if from a mobile device. This feature is essential for testing mobile-specific content, understanding responsive design, and gaining insights from mobile-specific elements.

### 

[​](#why-mobile-scraping)

Why Mobile Scraping?

Mobile-first experiences are increasingly common, and this feature enables you to:

*   Take high-fidelity mobile screenshots for a more accurate representation of how a site appears on mobile.
*   Test and verify mobile layouts and UI elements, ensuring the accuracy of your scraping results for responsive websites.
*   Scrape mobile-only content, gaining access to information or layouts that vary from desktop versions.

### 

[​](#usage)

Usage

To activate mobile scraping, simply add `"mobile": true` in your request, which will enable Firecrawl’s mobile emulation mode.

For further details, including additional configuration options, visit the [API Reference](https://docs.firecrawl.dev/api-reference/endpoint/scrape)
.

[​](#day-5-actions-2-new-actions)

Day 5 - Actions (2 new actions)
--------------------------------------------------------------------

Firecrawl allows you to perform various actions on a web page before scraping its content. This is particularly useful for interacting with dynamic content, navigating through pages, or accessing content that requires user interaction.

We’re excited to introduce two powerful new actions:

1.  **Scrape**: Capture the current page content at any point during your interaction sequence, returning both URL and HTML.
2.  **Wait for Selector**: Wait for a specific element to appear on the page before proceeding, ensuring more reliable automation.

    actions = [\
        {"type": "scrape"},\
        {"type": "wait", "selector": "#my-element"},\
    ]
    

Here is an example of how to use actions to navigate to google.com, search for Firecrawl, click on the first result, scrape the current page content, and take a screenshot.

For more precise control, you can now use `{type: "wait", selector: "#my-element"}` to wait for a specific element to appear on the page.

### 

[​](#example)

Example

### 

[​](#output)

Output

For more details about the actions parameters, refer to the [API Reference](https://docs.firecrawl.dev/api-reference/endpoint/scrape)
.

[​](#day-4-advanced-iframe-scraping)

Day 4 - Advanced iframe scraping
------------------------------------------------------------------------

We’re excited to announce comprehensive iframe scraping support in Firecrawl. Our scraper can now seamlessly handle nested iframes, dynamically loaded content, and cross-origin frames - solving one of web scraping’s most challenging technical hurdles.

### 

[​](#technical-innovation)

Technical Innovation

Firecrawl now implements:

*   Recursive iframe traversal and content extraction
*   Cross-origin iframe handling with proper security context management
*   Smart automatic wait for iframe content to load
*   Support for dynamically injected iframes
*   Proper handling of sandboxed iframes

### 

[​](#why-it-matters)

Why it matters

Many modern websites use iframes for:

*   Embedded content and widgets
*   Payment forms and secure inputs
*   Third-party integrations
*   Advertisement frames
*   Social media embeds

Previously, these elements were often black boxes in scraping results. Now, you get complete access to iframe content just like any other part of the page.

### 

[​](#usage-2)

Usage

No additional configuration needed! The iframe scraping happens automatically when you use any of our scraping or crawling endpoints. Whether you’re using `/scrape` for single pages or `/crawl` for entire websites, iframe content will be seamlessly integrated into your results.

[​](#day-3-credit-packs)

Day 3 - Credit Packs
------------------------------------------------

Credit Packs allow you to you can easily top up your plan if your running low. Additionally, we now offer Auto Recharge, which automatically recharges your account when you’re approaching your limit. To enable visit the pricing page at [https://www.firecrawl.dev/pricing](https://www.firecrawl.dev/pricing)

### 

[​](#credit-packs)

Credit Packs

Flexible monthly credit boosts for your projects.

*   **$9/mo for 1000 credits**
*   Add to any existing plan
*   Choose the amount you need

### 

[​](#auto-recharge-credits)

Auto Recharge Credits

Automatically top up your account when credits run low.

*   **$11 per 1000 credits**
*   Enable auto recharge with any subscription plan

[​](#day-2-geolocation)

Day 2 - Geolocation
----------------------------------------------

Introducing location and language settings for scraping requests. Specify country and preferred languages to get relevant content based on your target location and language preferences.

### 

[​](#how-it-works)

How it works

When you specify the location settings, Firecrawl will use an appropriate proxy if available and emulate the corresponding language and timezone settings. By default, the location is set to ‘US’ if not specified.

### 

[​](#usage-3)

Usage

To use the location and language settings, include the `location` object in your request body with the following properties:

*   `country`: ISO 3166-1 alpha-2 country code (e.g., ‘US’, ‘AU’, ‘DE’, ‘JP’). Defaults to ‘US’.
*   `languages`: An array of preferred languages and locales for the request in order of priority. Defaults to the language of the specified location.

[​](#day-1-batch-scrape)

Day 1 - Batch Scrape
------------------------------------------------

You can now scrape multiple URLs at the same time with our new batch endpoint. Ideal for when you don’t need the scraping results immediately.

### 

[​](#how-it-works-2)

How it works

It is very similar to how the `/crawl` endpoint works. It submits a batch scrape job and returns a job ID to check the status of the batch scrape.

The sdk provides 2 methods, synchronous and asynchronous. The synchronous method will return the results of the batch scrape job, while the asynchronous method will return a job ID that you can use to check the status of the batch scrape.

### 

[​](#usage-4)

Usage

### 

[​](#response)

Response

If you’re using the sync methods from the SDKs, it will return the results of the batch scrape job. Otherwise, it will return a job ID that you can use to check the status of the batch scrape.

#### 

[​](#synchronous)

Synchronous

Completed

    {
      "status": "completed",
      "total": 36,
      "completed": 36,
      "creditsUsed": 36,
      "expiresAt": "2024-00-00T00:00:00.000Z",
      "next": "https://api.firecrawl.dev/v1/batch/scrape/123-456-789?skip=26",
      "data": [\
        {\
          "markdown": "[Firecrawl Docs home page![light logo](https://mintlify.s3-us-west-1.amazonaws.com/firecrawl/logo/light.svg)!...",\
          "html": "<!DOCTYPE html><html lang=\"en\" class=\"js-focus-visible lg:[--scroll-mt:9.5rem]\" data-js-focus-visible=\"\">...",\
          "metadata": {\
            "title": "Build a 'Chat with website' using Groq Llama 3 | Firecrawl",\
            "language": "en",\
            "sourceURL": "https://docs.firecrawl.dev/learn/rag-llama3",\
            "description": "Learn how to use Firecrawl, Groq Llama 3, and Langchain to build a 'Chat with your website' bot.",\
            "ogLocaleAlternate": [],\
            "statusCode": 200\
          }\
        },\
        ...\
      ]\
    }\
    \
\
#### \
\
[​](#asynchronous)\
\
Asynchronous\
\
You can then use the job ID to check the status of the batch scrape by calling the `/batch/scrape/{id}` endpoint. This endpoint is meant to be used while the job is still running or right after it has completed **as batch scrape jobs expire after 24 hours**.\
\
    {\
      "success": true,\
      "id": "123-456-789",\
      "url": "https://api.firecrawl.dev/v1/batch/scrape/123-456-789"\
    }\
    \
\
[Quickstart](/introduction)\
[Welcome to V1](/v1-welcome)\
\
On this page\
\
*   [Day 7 - Faster Markdown Parsing](#day-7-faster-markdown-parsing)\
    \
*   [What’s New?](#whats-new)\
    \
*   [Day 6 - Mobile Scraping (+ Mobile Screenshots)](#day-6-mobile-scraping-mobile-screenshots)\
    \
*   [Why Mobile Scraping?](#why-mobile-scraping)\
    \
*   [Usage](#usage)\
    \
*   [Day 5 - Actions (2 new actions)](#day-5-actions-2-new-actions)\
    \
*   [Example](#example)\
    \
*   [Output](#output)\
    \
*   [Day 4 - Advanced iframe scraping](#day-4-advanced-iframe-scraping)\
    \
*   [Technical Innovation](#technical-innovation)\
    \
*   [Why it matters](#why-it-matters)\
    \
*   [Usage](#usage-2)\
    \
*   [Day 3 - Credit Packs](#day-3-credit-packs)\
    \
*   [Credit Packs](#credit-packs)\
    \
*   [Auto Recharge Credits](#auto-recharge-credits)\
    \
*   [Day 2 - Geolocation](#day-2-geolocation)\
    \
*   [How it works](#how-it-works)\
    \
*   [Usage](#usage-3)\
    \
*   [Day 1 - Batch Scrape](#day-1-batch-scrape)\
    \
*   [How it works](#how-it-works-2)\
    \
*   [Usage](#usage-4)\
    \
*   [Response](#response)\
    \
*   [Synchronous](#synchronous)\
    \
*   [Asynchronous](#asynchronous)

---

# Welcome to V1 | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Get Started

Welcome to V1

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

Firecrawl V1 is here! With that we introduce a more reliable and developer friendly API.

Here is what’s new:

*   Output Formats for `/scrape`. Choose what formats you want your output in.
*   New [`/map` endpoint](/features/map)
     for getting most of the URLs of a webpage.
*   Developer friendly API for `/crawl/{id}` status.
*   2x Rate Limits for all plans.
*   [Go SDK](/sdks/go)
     and [Rust SDK](/sdks/rust)
    
*   Teams support
*   API Key Management in the dashboard.
*   `onlyMainContent` is now default to `true`.
*   `/crawl` webhooks and websocket support.

[​](#scrape-formats)

Scrape Formats
--------------------------------------

You can now choose what formats you want your output in. You can specify multiple output formats. Supported formats are:

*   Markdown (markdown)
*   HTML (html)
*   Raw HTML (rawHtml) (with no modifications)
*   Screenshot (screenshot or screenshot@fullPage)
*   Links (links)
*   Extract (extract) - structured output

Output keys will match the format you choose.

### 

[​](#response)

Response

SDKs will return the data object directly. cURL will return the payload exactly as shown below.

    {
      "success": true,
      "data" : {
        "markdown": "Launch Week I is here! [See our Day 2 Release 🚀](https://www.firecrawl.dev/blog/launch-week-i-day-2-doubled-rate-limits)[💥 Get 2 months free...",\
        "html": "<!DOCTYPE html><html lang=\"en\" class=\"light\" style=\"color-scheme: light;\"><body class=\"__variable_36bd41 __variable_d7dc5d font-inter ...",\
        "metadata": {\
          "title": "Home - Firecrawl",\
          "description": "Firecrawl crawls and converts any website into clean markdown.",\
          "language": "en",\
          "keywords": "Firecrawl,Markdown,Data,Mendable,Langchain",\
          "robots": "follow, index",\
          "ogTitle": "Firecrawl",\
          "ogDescription": "Turn any website into LLM-ready data.",\
          "ogUrl": "https://www.firecrawl.dev/",\
          "ogImage": "https://www.firecrawl.dev/og.png?123",\
          "ogLocaleAlternate": [],\
          "ogSiteName": "Firecrawl",\
          "sourceURL": "https://firecrawl.dev",\
          "statusCode": 200\
        }\
      }\
    }\
    \
\
[​](#introducing-map-alpha)\
\
Introducing /map (Alpha)\
-------------------------------------------------------\
\
The easiest way to go from a single url to a map of the entire website.\
\
### \
\
[​](#usage)\
\
Usage\
\
### \
\
[​](#response-2)\
\
Response\
\
SDKs will return the data object directly. cURL will return the payload exactly as shown below.\
\
    {\
      "status": "success",\
      "links": [\
        "https://firecrawl.dev",\
        "https://www.firecrawl.dev/pricing",\
        "https://www.firecrawl.dev/blog",\
        "https://www.firecrawl.dev/playground",\
        "https://www.firecrawl.dev/smart-crawl",\
        ...\
      ]\
    }\
    \
\
[​](#websockets)\
\
WebSockets\
------------------------------\
\
To crawl a website with WebSockets, use the `Crawl URL and Watch` method.\
\
[​](#extract-format)\
\
Extract format\
--------------------------------------\
\
LLM extraction is now available in v1 under the `extract` format. To extract structured from a page, you can pass a schema to the endpoint or just provide a prompt.\
\
Output:\
\
JSON\
\
    {\
        "success": true,\
        "data": {\
          "extract": {\
            "company_mission": "Train a secure AI on your technical resources that answers customer and employee questions so your team doesn't have to",\
            "supports_sso": true,\
            "is_open_source": false,\
            "is_in_yc": true\
          },\
          "metadata": {\
            "title": "Mendable",\
            "description": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
            "robots": "follow, index",\
            "ogTitle": "Mendable",\
            "ogDescription": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
            "ogUrl": "https://docs.firecrawl.dev/",\
            "ogImage": "https://docs.firecrawl.dev/mendable_new_og1.png",\
            "ogLocaleAlternate": [],\
            "ogSiteName": "Mendable",\
            "sourceURL": "https://docs.firecrawl.dev/"\
          },\
        }\
    }\
    \
\
### \
\
[​](#extracting-without-schema-new)\
\
Extracting without schema (New)\
\
You can now extract without a schema by just passing a `prompt` to the endpoint. The llm chooses the structure of the data.\
\
Output:\
\
JSON\
\
    {\
        "success": true,\
        "data": {\
          "extract": {\
            "company_mission": "Train a secure AI on your technical resources that answers customer and employee questions so your team doesn't have to",\
          },\
          "metadata": {\
            "title": "Mendable",\
            "description": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
            "robots": "follow, index",\
            "ogTitle": "Mendable",\
            "ogDescription": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",\
            "ogUrl": "https://docs.firecrawl.dev/",\
            "ogImage": "https://docs.firecrawl.dev/mendable_new_og1.png",\
            "ogLocaleAlternate": [],\
            "ogSiteName": "Mendable",\
            "sourceURL": "https://docs.firecrawl.dev/"\
          },\
        }\
    }\
    \
\
[​](#new-crawl-webhook)\
\
New Crawl Webhook\
--------------------------------------------\
\
You can now pass a `webhook` parameter to the `/crawl` endpoint. This will send a POST request to the URL you specify when the crawl is started, updated and completed.\
\
The webhook will now trigger for every page crawled and not just the whole result at the end.\
\
cURL\
\
    curl -X POST https://api.firecrawl.dev/v1/crawl \\
        -H 'Content-Type: application/json' \\
        -H 'Authorization: Bearer YOUR_API_KEY' \\
        -d '{\
          "url": "https://docs.firecrawl.dev",\
          "limit": 100,\
          "webhook": "https://example.com/webhook"\
        }'\
    \
\
### \
\
[​](#webhook-events)\
\
Webhook Events\
\
There are now 4 types of events:\
\
*   `crawl.started` - Triggered when the crawl is started.\
*   `crawl.page` - Triggered for every page crawled.\
*   `crawl.completed` - Triggered when the crawl is completed to let you know it’s done.\
*   `crawl.failed` - Triggered when the crawl fails.\
\
### \
\
[​](#webhook-response)\
\
Webhook Response\
\
*   `success` - If the webhook was successful in crawling the page correctly.\
*   `type` - The type of event that occurred.\
*   `id` - The ID of the crawl.\
*   `data` - The data that was scraped (Array). This will only be non empty on `crawl.page` and will contain 1 item if the page was scraped successfully. The response is the same as the `/scrape` endpoint.\
*   `error` - If the webhook failed, this will contain the error message.\
\
[​](#migrating-from-v0)\
\
Migrating from V0\
--------------------------------------------\
\
[​](#scrape-endpoint)\
\
/scrape endpoint\
-----------------------------------------\
\
The updated `/scrape` endpoint has been redesigned for enhanced reliability and ease of use. The structure of the new `/scrape` request body is as follows:\
\
    {\
      "url": "<string>",\
      "formats": ["markdown", "html", "rawHtml", "links", "screenshot"],\
      "includeTags": ["<string>"],\
      "excludeTags": ["<string>"],\
      "headers": { "<key>": "<value>" },\
      "waitFor": 123,\
      "timeout": 123\
    }\
    \
\
### \
\
[​](#formats)\
\
Formats\
\
You can now choose what formats you want your output in. You can specify multiple output formats. Supported formats are:\
\
*   Markdown (markdown)\
*   HTML (html)\
*   Raw HTML (rawHtml) (with no modifications)\
*   Screenshot (screenshot or screenshot@fullPage)\
*   Links (links)\
\
By default, the output will be include only the markdown format.\
\
### \
\
[​](#details-on-the-new-request-body)\
\
Details on the new request body\
\
The table below outlines the changes to the request body parameters for the `/scrape` endpoint in V1.\
\
| Parameter | Change | Description |\
| --- | --- | --- |\
| `onlyIncludeTags` | Moved and Renamed | Moved to root level. And renamed to `includeTags`. |\
| `removeTags` | Moved and Renamed | Moved to root level. And renamed to `excludeTags`. |\
| `onlyMainContent` | Moved | Moved to root level. `true` by default. |\
| `waitFor` | Moved | Moved to root level. |\
| `headers` | Moved | Moved to root level. |\
| `parsePDF` | Moved | Moved to root level. |\
| `extractorOptions` | No Change |     |\
| `timeout` | No Change |     |\
| `pageOptions` | Removed | No need for `pageOptions` parameter. The scrape options were moved to root level. |\
| `replaceAllPathsWithAbsolutePaths` | Removed | `replaceAllPathsWithAbsolutePaths` is not needed anymore. Every path is now default to absolute path. |\
| `includeHtml` | Removed | add `"html"` to `formats` instead. |\
| `includeRawHtml` | Removed | add `"rawHtml"` to `formats` instead. |\
| `screenshot` | Removed | add `"screenshot"` to `formats` instead. |\
| `fullPageScreenshot` | Removed | add `"screenshot@fullPage"` to `formats` instead. |\
| `extractorOptions` | Removed | Use `"extract"` format instead with `extract` object. |\
\
The new `extract` format is described in the [llm-extract](/features/extract)\
 section.\
\
[​](#crawl-endpoint)\
\
/crawl endpoint\
---------------------------------------\
\
We’ve also updated the `/crawl` endpoint on `v1`. Check out the improved body request below:\
\
    {\
      "url": "<string>",\
      "excludePaths": ["<string>"],\
      "includePaths": ["<string>"],\
      "maxDepth": 2,\
      "ignoreSitemap": true,\
      "limit": 10,\
      "allowBackwardLinks": true,\
      "allowExternalLinks": true,\
      "scrapeOptions": {\
        // same options as in /scrape\
        "formats": ["markdown", "html", "rawHtml", "screenshot", "links"],\
        "headers": { "<key>": "<value>" },\
        "includeTags": ["<string>"],\
        "excludeTags": ["<string>"],\
        "onlyMainContent": true,\
        "waitFor": 123\
      }\
    }\
    \
\
### \
\
[​](#details-on-the-new-request-body-2)\
\
Details on the new request body\
\
The table below outlines the changes to the request body parameters for the `/crawl` endpoint in V1.\
\
| Parameter | Change | Description |\
| --- | --- | --- |\
| `pageOptions` | Renamed | Renamed to `scrapeOptions`. |\
| `includes` | Moved and Renamed | Moved to root level. Renamed to `includePaths`. |\
| `excludes` | Moved and Renamed | Moved to root level. Renamed to `excludePaths`. |\
| `allowBackwardCrawling` | Moved and Renamed | Moved to root level. Renamed to `allowBackwardLinks`. |\
| `allowExternalLinks` | Moved | Moved to root level. |\
| `maxDepth` | Moved | Moved to root level. |\
| `ignoreSitemap` | Moved | Moved to root level. |\
| `limit` | Moved | Moved to root level. |\
| `crawlerOptions` | Removed | No need for `crawlerOptions` parameter. The crawl options were moved to root level. |\
| `timeout` | Removed | Use `timeout` in `scrapeOptions` instead. |\
\
[Launch Week II (New)](/launch-week)\
[Rate Limits](/rate-limits)\
\
On this page\
\
*   [Scrape Formats](#scrape-formats)\
    \
*   [Response](#response)\
    \
*   [Introducing /map (Alpha)](#introducing-map-alpha)\
    \
*   [Usage](#usage)\
    \
*   [Response](#response-2)\
    \
*   [WebSockets](#websockets)\
    \
*   [Extract format](#extract-format)\
    \
*   [Extracting without schema (New)](#extracting-without-schema-new)\
    \
*   [New Crawl Webhook](#new-crawl-webhook)\
    \
*   [Webhook Events](#webhook-events)\
    \
*   [Webhook Response](#webhook-response)\
    \
*   [Migrating from V0](#migrating-from-v0)\
    \
*   [/scrape endpoint](#scrape-endpoint)\
    \
*   [Formats](#formats)\
    \
*   [Details on the new request body](#details-on-the-new-request-body)\
    \
*   [/crawl endpoint](#crawl-endpoint)\
    \
*   [Details on the new request body](#details-on-the-new-request-body-2)

---

# Integrations | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Get Started

Integrations

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[Langchain\
---------\
\
Check out Firecrawl Document Loader](integrations/langchain)
[LlamaIndex\
----------\
\
Check out Firecrawl Reader](integrations/llamaindex)
[Dify\
----\
\
Extract structured data from web pages](integrations/dify)
[Flowise\
-------\
\
Sync data directly from websites](integrations/flowise)
[CrewAI\
------\
\
Coordinate AI agents for web scraping tasks](integrations/crewai)
[Langflow\
--------\
\
Design visual web data pipelines](integrations/langflow)
[Camel AI\
--------\
\
Design visual web data pipelines](integrations/camelai)

[Rate Limits](/rate-limits)
[Advanced Scraping Guide](/advanced-scraping-guide)

---

# Python SDK | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

SDKs

Python

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#installation)

Installation
----------------------------------

To install the Firecrawl Python SDK, you can use pip:

Python

    pip install firecrawl-py
    

[​](#usage)

Usage
--------------------

1.  Get an API key from [firecrawl.dev](https://firecrawl.dev)
    
2.  Set the API key as an environment variable named `FIRECRAWL_API_KEY` or pass it as a parameter to the `FirecrawlApp` class.

Here’s an example of how to use the SDK:

Python

    from firecrawl import FirecrawlApp
    
    app = FirecrawlApp(api_key="fc-YOUR_API_KEY")
    
    # Scrape a website:
    scrape_status = app.scrape_url(
      'https://firecrawl.dev', 
      params={'formats': ['markdown', 'html']}
    )
    print(scrape_status)
    
    # Crawl a website:
    crawl_status = app.crawl_url(
      'https://firecrawl.dev', 
      params={
        'limit': 100, 
        'scrapeOptions': {'formats': ['markdown', 'html']}
      }
    )
    print(crawl_status)
    

### 

[​](#scraping-a-url)

Scraping a URL

To scrape a single URL, use the `scrape_url` method. It takes the URL as a parameter and returns the scraped data as a dictionary.

Python

    # Scrape a website:
    scrape_result = app.scrape_url('firecrawl.dev', params={'formats': ['markdown', 'html']})
    print(scrape_result)
    

### 

[​](#crawling-a-website)

Crawling a Website

To crawl a website, use the `crawl_url` method. It takes the starting URL and optional parameters as arguments. The `params` argument allows you to specify additional options for the crawl job, such as the maximum number of pages to crawl, allowed domains, and the output format.

Python

    crawl_status = app.crawl_url(
      'https://firecrawl.dev', 
      params={
        'limit': 100, 
        'scrapeOptions': {'formats': ['markdown', 'html']}
      }, 
      poll_interval=30
    )
    print(crawl_status)
    

### 

[​](#asynchronous-crawling)

Asynchronous Crawling

To crawl a website asynchronously, use the `crawl_url_async` method. It returns the crawl `ID` which you can use to check the status of the crawl job. It takes the starting URL and optional parameters as arguments. The `params` argument allows you to specify additional options for the crawl job, such as the maximum number of pages to crawl, allowed domains, and the output format.

Python

    crawl_status = app.async_crawl_url(
      'https://firecrawl.dev', 
      params={
        'limit': 100, 
        'scrapeOptions': {'formats': ['markdown', 'html']}
      }
    )
    print(crawl_status)
    

### 

[​](#checking-crawl-status)

Checking Crawl Status

To check the status of a crawl job, use the `check_crawl_status` method. It takes the job ID as a parameter and returns the current status of the crawl job.

Python

    crawl_status = app.check_crawl_status("<crawl_id>")
    print(crawl_status)
    

### 

[​](#cancelling-a-crawl)

Cancelling a Crawl

To cancel an asynchronous crawl job, use the `cancel_crawl` method. It takes the job ID of the asynchronous crawl as a parameter and returns the cancellation status.

Python

    cancel_crawl = app.cancel_crawl(id)
    print(cancel_crawl)
    

### 

[​](#map-a-website)

Map a Website

Use `map_url` to generate a list of URLs from a website. The `params` argument let you customize the mapping process, including options to exclude subdomains or to utilize the sitemap.

Python

    # Map a website:
    map_result = app.map_url('https://firecrawl.dev')
    print(map_result)
    

### 

[​](#crawling-a-website-with-websockets)

Crawling a Website with WebSockets

To crawl a website with WebSockets, use the `crawl_url_and_watch` method. It takes the starting URL and optional parameters as arguments. The `params` argument allows you to specify additional options for the crawl job, such as the maximum number of pages to crawl, allowed domains, and the output format.

Python

    # inside an async function...
    nest_asyncio.apply()
    
    # Define event handlers
    def on_document(detail):
        print("DOC", detail)
    
    def on_error(detail):
        print("ERR", detail['error'])
    
    def on_done(detail):
        print("DONE", detail['status'])
    
        # Function to start the crawl and watch process
    async def start_crawl_and_watch():
        # Initiate the crawl job and get the watcher
        watcher = app.crawl_url_and_watch('firecrawl.dev', { 'excludePaths': ['blog/*'], 'limit': 5 })
    
        # Add event listeners
        watcher.add_event_listener("document", on_document)
        watcher.add_event_listener("error", on_error)
        watcher.add_event_listener("done", on_done)
    
        # Start the watcher
        await watcher.connect()
    
    # Run the event loop
    await start_crawl_and_watch()
    

[​](#error-handling)

Error Handling
--------------------------------------

The SDK handles errors returned by the Firecrawl API and raises appropriate exceptions. If an error occurs during a request, an exception will be raised with a descriptive error message.

[Overview](/sdks/overview)
[Node](/sdks/node)

On this page

*   [Installation](#installation)
    
*   [Usage](#usage)
    
*   [Scraping a URL](#scraping-a-url)
    
*   [Crawling a Website](#crawling-a-website)
    
*   [Asynchronous Crawling](#asynchronous-crawling)
    
*   [Checking Crawl Status](#checking-crawl-status)
    
*   [Cancelling a Crawl](#cancelling-a-crawl)
    
*   [Map a Website](#map-a-website)
    
*   [Crawling a Website with WebSockets](#crawling-a-website-with-websockets)
    
*   [Error Handling](#error-handling)

---

# Advanced Scraping Guide | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Get Started

Advanced Scraping Guide

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

This guide will walk you through the different endpoints of Firecrawl and how to use them fully with all its parameters.

[​](#basic-scraping-with-firecrawl-scrape)

Basic scraping with Firecrawl (/scrape)
-------------------------------------------------------------------------------------

To scrape a single page and get clean markdown content, you can use the `/scrape` endpoint.

[​](#scraping-pdfs)

Scraping PDFs
------------------------------------

**Firecrawl supports scraping PDFs by default.** You can use the `/scrape` endpoint to scrape a PDF link and get the text content of the PDF. You can disable this by setting `parsePDF` to `false`.

[​](#scrape-options)

Scrape Options
--------------------------------------

When using the `/scrape` endpoint, you can customize the scraping behavior with many parameters. Here are the available options:

### 

[​](#setting-the-content-formats-on-response-with-formats)

Setting the content formats on response with `formats`

*   **Type**: `array`
*   **Enum**: `["markdown", "links", "html", "rawHtml", "screenshot"]`
*   **Description**: Specify the formats to include in the response. Options include:
    *   `markdown`: Returns the scraped content in Markdown format.
    *   `links`: Includes all hyperlinks found on the page.
    *   `html`: Provides the content in HTML format.
    *   `rawHtml`: Delivers the raw HTML content, without any processing.
    *   `screenshot`: Includes a screenshot of the page as it appears in the browser.
    *   `extract`: Extracts structured information from the page using the LLM.
*   **Default**: `["markdown"]`

### 

[​](#getting-the-full-page-content-as-markdown-with-onlymaincontent)

Getting the full page content as markdown with `onlyMainContent`

*   **Type**: `boolean`
*   **Description**: By default, the scraper will only return the main content of the page, excluding headers, navigation bars, footers, etc. Set this to `false` to return the full page content.
*   **Default**: `true`

### 

[​](#setting-the-tags-to-include-with-includetags)

Setting the tags to include with `includeTags`

*   **Type**: `array`
*   **Description**: Specify the HTML tags, classes and ids to include in the response.
*   **Default**: undefined

### 

[​](#setting-the-tags-to-exclude-with-excludetags)

Setting the tags to exclude with `excludeTags`

*   **Type**: `array`
*   **Description**: Specify the HTML tags, classes and ids to exclude from the response.
*   **Default**: undefined

### 

[​](#waiting-for-the-page-to-load-with-waitfor)

Waiting for the page to load with `waitFor`

*   **Type**: `integer`
*   **Description**: To be used only as a last resort. Wait for a specified amount of milliseconds for the page to load before fetching content.
*   **Default**: `0`

### 

[​](#setting-the-maximum-timeout)

Setting the maximum `timeout`

*   **Type**: `integer`
*   **Description**: Set the maximum duration in milliseconds that the scraper will wait for the page to respond before aborting the operation.
*   **Default**: `30000` (30 seconds)

### 

[​](#example-usage)

Example Usage

    curl -X POST https://api.firecrawl.dev/v1/scrape \
        -H '
        Content-Type: application/json' \
        -H 'Authorization : Bearer YOUR_API_KEY' \
        -d '{
          "url": "https://docs.firecrawl.dev",
          "formats": ["markdown", "links", "html", "rawHtml", "screenshot"],
          "includeTags": ["h1", "p", "a", ".main-content"],
          "excludeTags": ["#ad", "#footer"],
          "onlyMainContent": false,
          "waitFor": 1000,
          "timeout": 15000
        }'
    

In this example, the scraper will:

*   Return the full page content as markdown.
*   Include the markdown, raw HTML, HTML, links and screenshot in the response.
*   The response will include only the HTML tags `<h1>`, `<p>`, `<a>`, and elements with the class `.main-content`, while excluding any elements with the IDs `#ad` and `#footer`.
*   Wait for 1000 milliseconds (1 second) for the page to load before fetching the content.
*   Set the maximum duration of the scrape request to 15000 milliseconds (15 seconds).

Here is the API Reference for it: [Scrape Endpoint Documentation](https://docs.firecrawl.dev/api-reference/endpoint/scrape)

[​](#extractor-options)

Extractor Options
--------------------------------------------

When using the `/scrape` endpoint, you can specify options for **extracting structured information** from the page content using the `extract` parameter. Here are the available options:

### 

[​](#using-the-llm-extraction)

Using the LLM Extraction

### 

[​](#schema)

schema

*   **Type**: `object`
*   **Required**: False if prompt is provided
*   **Description**: The schema for the data to be extracted. This defines the structure of the extracted data.

### 

[​](#system-prompt)

system prompt

*   **Type**: `string`
*   **Required**: False
*   **Description**: System prompt for the LLM.

### 

[​](#prompt)

prompt

*   **Type**: `string`
*   **Required**: False if schema is provided
*   **Description**: A prompt for the LLM to extract the data in the correct structure.
*   **Example**: `"Extract the features of the product"`

### 

[​](#example-usage-2)

Example Usage

    curl -X POST https://api.firecrawl.dev/v0/scrape \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer YOUR_API_KEY' \
        -d '{
          "url": "https://firecrawl.dev",
          "formats": ["markdown", "extract"],
          "extract": {
            "prompt": "Extract the features of the product"
          }
        }'
    

    {
      "success": true,
      "data": {
        "content": "Raw Content",
        "metadata": {
          "title": "Mendable",
          "description": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",
          "robots": "follow, index",
          "ogTitle": "Mendable",
          "ogDescription": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",
          "ogUrl": "https://docs.firecrawl.dev/",
          "ogImage": "https://docs.firecrawl.dev/mendable_new_og1.png",
          "ogLocaleAlternate": [],
          "ogSiteName": "Mendable",
          "sourceURL": "https://docs.firecrawl.dev/",
          "statusCode": 200
        },
        "extract": {
          "product": "Firecrawl",
          "features": {
            "general": {
              "description": "Turn websites into LLM-ready data.",
              "openSource": true,
              "freeCredits": 500,
              "useCases": [\
                "AI applications",\
                "Data science",\
                "Market research",\
                "Content aggregation"\
              ]
            },
            "crawlingAndScraping": {
              "crawlAllAccessiblePages": true,
              "noSitemapRequired": true,
              "dynamicContentHandling": true,
              "dataCleanliness": {
                "process": "Advanced algorithms",
                "outputFormat": "Markdown"
              }
            },
            ...
          }
        }
      }
    }
    

[​](#actions)

Actions
------------------------

When using the `/scrape` endpoint, Firecrawl allows you to perform various actions on a web page before scraping its content. This is particularly useful for interacting with dynamic content, navigating through pages, or accessing content that requires user interaction.

### 

[​](#available-actions)

Available Actions

#### 

[​](#wait)

wait

*   **Type**: `object`
*   **Description**: Wait for a specified amount of milliseconds.
*   **Properties**:
    *   `type`: `"wait"`
    *   `milliseconds`: Number of milliseconds to wait.
*   **Example**:
    
        {
          "type": "wait",
          "milliseconds": 2000
        }
        
    

#### 

[​](#screenshot)

screenshot

*   **Type**: `object`
*   **Description**: Take a screenshot.
*   **Properties**:
    *   `type`: `"screenshot"`
    *   `fullPage`: Should the screenshot be full-page or viewport sized? (default: `false`)
*   **Example**:
    
        {
          "type": "screenshot",
          "fullPage": true
        }
        
    

#### 

[​](#click)

click

*   **Type**: `object`
*   **Description**: Click on an element.
*   **Properties**:
    *   `type`: `"click"`
    *   `selector`: Query selector to find the element by.
*   **Example**:
    
        {
          "type": "click",
          "selector": "#load-more-button"
        }
        
    

#### 

[​](#write)

write

*   **Type**: `object`
*   **Description**: Write text into an input field.
*   **Properties**:
    *   `type`: `"write"`
    *   `text`: Text to type.
    *   `selector`: Query selector for the input field.
*   **Example**:
    
        {
          "type": "write",
          "text": "Hello, world!",
          "selector": "#search-input"
        }
        
    

#### 

[​](#press)

press

*   **Type**: `object`
*   **Description**: Press a key on the page.
*   **Properties**:
    *   `type`: `"press"`
    *   `key`: Key to press.
*   **Example**:
    
        {
          "type": "press",
          "key": "Enter"
        }
        
    

#### 

[​](#scroll)

scroll

*   **Type**: `object`
*   **Description**: Scroll the page.
*   **Properties**:
    *   `type`: `"scroll"`
    *   `direction`: Direction to scroll (`"up"` or `"down"`).
    *   `amount`: Amount to scroll in pixels.
*   **Example**:
    
        {
          "type": "scroll",
          "direction": "down",
          "amount": 500
        }
        
    

For more details about the actions parameters, refer to the [API Reference](https://docs.firecrawl.dev/api-reference/endpoint/scrape)
.

[​](#crawling-multiple-pages)

Crawling Multiple Pages
--------------------------------------------------------

To crawl multiple pages, you can use the `/crawl` endpoint. This endpoint allows you to specify a base URL you want to crawl and all accessible subpages will be crawled.

    curl -X POST https://api.firecrawl.dev/v1/crawl \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer YOUR_API_KEY' \
        -d '{
          "url": "https://docs.firecrawl.dev"
        }'
    

Returns a id

    { "id": "1234-5678-9101" }
    

### 

[​](#check-crawl-job)

Check Crawl Job

Used to check the status of a crawl job and get its result.

    curl -X GET https://api.firecrawl.dev/v1/crawl/1234-5678-9101 \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer YOUR_API_KEY'
    

#### 

[​](#pagination-next-url)

Pagination/Next URL

If the content is larger than 10MB or if the crawl job is still running, the response will include a `next` parameter. This parameter is a URL to the next page of results. You can use this parameter to get the next page of results.

### 

[​](#crawler-options)

Crawler Options

When using the `/crawl` endpoint, you can customize the crawling behavior with request body parameters. Here are the available options:

#### 

[​](#includepaths)

`includePaths`

*   **Type**: `array`
*   **Description**: URL patterns to include in the crawl. Only URLs matching these patterns will be crawled.
*   **Example**: `["/blog/*", "/products/*"]`

#### 

[​](#excludepaths)

`excludePaths`

*   **Type**: `array`
*   **Description**: URL patterns to exclude from the crawl. URLs matching these patterns will be skipped.
*   **Example**: `["/admin/*", "/login/*"]`

#### 

[​](#maxdepth)

`maxDepth`

*   **Type**: `integer`
*   **Description**: Maximum depth to crawl relative to the entered URL. A maxDepth of 0 scrapes only the entered URL. A maxDepth of 1 scrapes the entered URL and all pages one level deep. A maxDepth of 2 scrapes the entered URL and all pages up to two levels deep. Higher values follow the same pattern.
*   **Example**: `2`

#### 

[​](#limit)

`limit`

*   **Type**: `integer`
*   **Description**: Maximum number of pages to crawl.
*   **Default**: `10000`

#### 

[​](#allowbackwardlinks)

`allowBackwardLinks`

*   **Type**: `boolean`
*   **Description**: This option permits the crawler to navigate to URLs that are higher in the directory structure than the base URL. For instance, if the base URL is `example.com/blog/topic`, enabling this option allows crawling to pages like `example.com/blog` or `example.com`, which are backward in the path hierarchy relative to the base URL.
*   **Default**: `false`

### 

[​](#allowexternallinks)

`allowExternalLinks`

*   **Type**: `boolean`
*   **Description**: This option allows the crawler to follow links that point to external domains. Be careful with this option, as it can cause the crawl to stop only based only on the`limit` and `maxDepth` values.
*   **Default**: `false`

#### 

[​](#scrapeoptions)

scrapeOptions

As part of the crawler options, you can also specify the `scrapeOptions` parameter. This parameter allows you to customize the scraping behavior for each page.

*   **Type**: `object`
*   **Description**: Options for the scraper.
*   **Example**: `{"formats": ["markdown", "links", "html", "rawHtml", "screenshot"], "includeTags": ["h1", "p", "a", ".main-content"], "excludeTags": ["#ad", "#footer"], "onlyMainContent": false, "waitFor": 1000, "timeout": 15000}`
*   **Default**: `{ "formats": ["markdown"] }`
*   **See**: [Scrape Options](/_sites/docs.firecrawl.dev/advanced-scraping-guide#setting-the-content-formats-on-response-with-formats)
    

### 

[​](#example-usage-3)

Example Usage

    curl -X POST https://api.firecrawl.dev/v1/crawl \
        -H 'Content-Type: application/json' \
        -H 'Authorization : Bearer YOUR_API_KEY' \
        -d '{
          "url": "https://docs.firecrawl.dev",
          "includePaths": ["/blog/*", "/products/*"],
          "excludePaths": ["/admin/*", "/login/*"],
          "maxDepth": 2,
          "limit": 1000
        }'
    

In this example, the crawler will:

*   Only crawl URLs that match the patterns `/blog/*` and `/products/*`.
*   Skip URLs that match the patterns `/admin/*` and `/login/*`.
*   Return the full document data for each page.
*   Crawl up to a maximum depth of 2.
*   Crawl a maximum of 1000 pages.

[​](#mapping-website-links-with-map)

Mapping Website Links with `/map`
-------------------------------------------------------------------------

The `/map` endpoint is adept at identifying URLs that are contextually related to a given website. This feature is crucial for understanding a site’s contextual link environment, which can greatly aid in strategic site analysis and navigation planning.

### 

[​](#usage)

Usage

To use the `/map` endpoint, you need to send a GET request with the URL of the page you want to map. Here is an example using `curl`:

    curl -X POST https://api.firecrawl.dev/v1/map \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer YOUR_API_KEY' \
        -d '{
          "url": "https://docs.firecrawl.dev"
        }'
    

This will return a JSON object containing links contextually related to the url.

### 

[​](#example-response)

Example Response

      {
        "success":true,
        "links":[\
          "https://docs.firecrawl.dev",\
          "https://docs.firecrawl.dev/api-reference/endpoint/crawl-delete",\
          "https://docs.firecrawl.dev/api-reference/endpoint/crawl-get",\
          "https://docs.firecrawl.dev/api-reference/endpoint/crawl-post",\
          "https://docs.firecrawl.dev/api-reference/endpoint/map",\
          "https://docs.firecrawl.dev/api-reference/endpoint/scrape",\
          "https://docs.firecrawl.dev/api-reference/introduction",\
          "https://docs.firecrawl.dev/articles/search-announcement",\
          ...\
        ]
      }
    

### 

[​](#map-options)

Map Options

*   **Type**: `string`
*   **Description**: Search for links containing specific text.
*   **Example**: `"blog"`

#### 

[​](#limit-2)

`limit`

*   **Type**: `integer`
*   **Description**: Maximum number of links to return.
*   **Default**: `100`

#### 

[​](#ignoresitemap)

`ignoreSitemap`

*   **Type**: `boolean`
*   **Description**: Ignore the website sitemap when crawling
*   **Default**: `true`

#### 

[​](#includesubdomains)

`includeSubdomains`

*   **Type**: `boolean`
*   **Description**: Include subdomains of the website
*   **Default**: `false`

Here is the API Reference for it: [Map Endpoint Documentation](https://docs.firecrawl.dev/api-reference/endpoint/map)

[Integrations](/integrations)
[Scrape](/features/scrape)

On this page

*   [Basic scraping with Firecrawl (/scrape)](#basic-scraping-with-firecrawl-scrape)
    
*   [Scraping PDFs](#scraping-pdfs)
    
*   [Scrape Options](#scrape-options)
    
*   [Setting the content formats on response with formats](#setting-the-content-formats-on-response-with-formats)
    
*   [Getting the full page content as markdown with onlyMainContent](#getting-the-full-page-content-as-markdown-with-onlymaincontent)
    
*   [Setting the tags to include with includeTags](#setting-the-tags-to-include-with-includetags)
    
*   [Setting the tags to exclude with excludeTags](#setting-the-tags-to-exclude-with-excludetags)
    
*   [Waiting for the page to load with waitFor](#waiting-for-the-page-to-load-with-waitfor)
    
*   [Setting the maximum timeout](#setting-the-maximum-timeout)
    
*   [Example Usage](#example-usage)
    
*   [Extractor Options](#extractor-options)
    
*   [Using the LLM Extraction](#using-the-llm-extraction)
    
*   [schema](#schema)
    
*   [system prompt](#system-prompt)
    
*   [prompt](#prompt)
    
*   [Example Usage](#example-usage-2)
    
*   [Actions](#actions)
    
*   [Available Actions](#available-actions)
    
*   [wait](#wait)
    
*   [screenshot](#screenshot)
    
*   [click](#click)
    
*   [write](#write)
    
*   [press](#press)
    
*   [scroll](#scroll)
    
*   [Crawling Multiple Pages](#crawling-multiple-pages)
    
*   [Check Crawl Job](#check-crawl-job)
    
*   [Pagination/Next URL](#pagination-next-url)
    
*   [Crawler Options](#crawler-options)
    
*   [includePaths](#includepaths)
    
*   [excludePaths](#excludepaths)
    
*   [maxDepth](#maxdepth)
    
*   [limit](#limit)
    
*   [allowBackwardLinks](#allowbackwardlinks)
    
*   [allowExternalLinks](#allowexternallinks)
    
*   [scrapeOptions](#scrapeoptions)
    
*   [Example Usage](#example-usage-3)
    
*   [Mapping Website Links with /map](#mapping-website-links-with-map)
    
*   [Usage](#usage)
    
*   [Example Response](#example-response)
    
*   [Map Options](#map-options)
    
*   [search](#search)
    
*   [limit](#limit-2)
    
*   [ignoreSitemap](#ignoresitemap)
    
*   [includeSubdomains](#includesubdomains)

---

# Node SDK | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

SDKs

Node

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#installation)

Installation
----------------------------------

To install the Firecrawl Node SDK, you can use npm:

Node

    npm install @mendable/firecrawl-js
    

[​](#usage)

Usage
--------------------

1.  Get an API key from [firecrawl.dev](https://firecrawl.dev)
    
2.  Set the API key as an environment variable named `FIRECRAWL_API_KEY` or pass it as a parameter to the `FirecrawlApp` class.

Here’s an example of how to use the SDK with error handling:

Node

    import FirecrawlApp, { CrawlParams, CrawlStatusResponse } from '@mendable/firecrawl-js';
    
    const app = new FirecrawlApp({apiKey: "fc-YOUR_API_KEY"});
    
    // Scrape a website
    const scrapeResponse = await app.scrapeUrl('https://firecrawl.dev', {
      formats: ['markdown', 'html'],
    });
    
    if (!scrapeResponse.success) {
      throw new Error(`Failed to scrape: ${scrapeResponse.error}`)
    }
    
    console.log(scrapeResponse)
    
    // Crawl a website
    const crawlResponse = await app.crawlUrl('https://firecrawl.dev', {
      limit: 100,
      scrapeOptions: {
        formats: ['markdown', 'html'],
      }
    });
    
    if (!crawlResponse.success) {
      throw new Error(`Failed to crawl: ${crawlResponse.error}`)
    }
    
    console.log(crawlResponse)
    

### 

[​](#scraping-a-url)

Scraping a URL

To scrape a single URL with error handling, use the `scrapeUrl` method. It takes the URL as a parameter and returns the scraped data as a dictionary.

Node

    // Scrape a website:
    const scrapeResult = await app.scrapeUrl('firecrawl.dev', { formats: ['markdown', 'html'] });
    
    if (!scrapeResult.success) {
      throw new Error(`Failed to scrape: ${scrapeResult.error}`)
    }
    
    console.log(scrapeResult)
    

### 

[​](#crawling-a-website)

Crawling a Website

To crawl a website with error handling, use the `crawlUrl` method. It takes the starting URL and optional parameters as arguments. The `params` argument allows you to specify additional options for the crawl job, such as the maximum number of pages to crawl, allowed domains, and the output format.

Node

    const crawlResponse = await app.crawlUrl('https://firecrawl.dev', {
      limit: 100,
      scrapeOptions: {
        formats: ['markdown', 'html'],
      }
    })
    
    if (!crawlResponse.success) {
      throw new Error(`Failed to crawl: ${crawlResponse.error}`)
    }
    
    console.log(crawlResponse)
    

### 

[​](#asynchronous-crawling)

Asynchronous Crawling

To crawl a website asynchronously, use the `crawlUrlAsync` method. It returns the crawl `ID` which you can use to check the status of the crawl job. It takes the starting URL and optional parameters as arguments. The `params` argument allows you to specify additional options for the crawl job, such as the maximum number of pages to crawl, allowed domains, and the output format.

Node

    const crawlResponse = await app.asyncCrawlUrl('https://firecrawl.dev', {
      limit: 100,
      scrapeOptions: {
        formats: ['markdown', 'html'],
      }
    });
    
    if (!crawlResponse.success) {
      throw new Error(`Failed to crawl: ${crawlResponse.error}`)
    }
    
    console.log(crawlResponse)
    

### 

[​](#checking-crawl-status)

Checking Crawl Status

To check the status of a crawl job with error handling, use the `checkCrawlStatus` method. It takes the `ID` as a parameter and returns the current status of the crawl job.

Node

    const crawlResponse = await app.checkCrawlStatus("<crawl_id>");
    
    if (!crawlResponse.success) {
      throw new Error(`Failed to check crawl status: ${crawlResponse.error}`)
    }
    
    console.log(crawlResponse)
    

### 

[​](#cancelling-a-crawl)

Cancelling a Crawl

To cancel an asynchronous crawl job, use the `cancelCrawl` method. It takes the job ID of the asynchronous crawl as a parameter and returns the cancellation status.

Node

    const cancelCrawl = await app.cancelCrawl(id);
    console.log(cancelCrawl)
    

### 

[​](#mapping-a-website)

Mapping a Website

To map a website with error handling, use the `mapUrl` method. It takes the starting URL as a parameter and returns the mapped data as a dictionary.

Node

    const mapResult = await app.mapUrl('https://firecrawl.dev');
    
    if (!mapResult.success) {
      throw new Error(`Failed to map: ${mapResult.error}`)
    }
    
    console.log(mapResult)
    

### 

[​](#crawling-a-website-with-websockets)

Crawling a Website with WebSockets

To crawl a website with WebSockets, use the `crawlUrlAndWatch` method. It takes the starting URL and optional parameters as arguments. The `params` argument allows you to specify additional options for the crawl job, such as the maximum number of pages to crawl, allowed domains, and the output format.

Node

    const watch = await app.crawlUrlAndWatch('mendable.ai', { excludePaths: ['blog/*'], limit: 5});
    
    watch.addEventListener("document", doc => {
      console.log("DOC", doc.detail);
    });
    
    watch.addEventListener("error", err => {
      console.error("ERR", err.detail.error);
    });
    
    watch.addEventListener("done", state => {
      console.log("DONE", state.detail.status);
    });
    

[​](#error-handling)

Error Handling
--------------------------------------

The SDK handles errors returned by the Firecrawl API and raises appropriate exceptions. If an error occurs during a request, an exception will be raised with a descriptive error message. The examples above demonstrate how to handle these errors using `try/catch` blocks.

[Python](/sdks/python)
[Go](/sdks/go)

On this page

*   [Installation](#installation)
    
*   [Usage](#usage)
    
*   [Scraping a URL](#scraping-a-url)
    
*   [Crawling a Website](#crawling-a-website)
    
*   [Asynchronous Crawling](#asynchronous-crawling)
    
*   [Checking Crawl Status](#checking-crawl-status)
    
*   [Cancelling a Crawl](#cancelling-a-crawl)
    
*   [Mapping a Website](#mapping-a-website)
    
*   [Crawling a Website with WebSockets](#crawling-a-website-with-websockets)
    
*   [Error Handling](#error-handling)

---

# Crawl | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Features

Crawl

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

Firecrawl thoroughly crawls websites, ensuring comprehensive data extraction while bypassing any web blocker mechanisms. Here’s how it works:

1.  **URL Analysis:** Begins with a specified URL, identifying links by looking at the sitemap and then crawling the website. If no sitemap is found, it will crawl the website following the links.
    
2.  **Recursive Traversal:** Recursively follows each link to uncover all subpages.
    
3.  **Content Scraping:** Gathers content from every visited page while handling any complexities like JavaScript rendering or rate limits.
    
4.  **Result Compilation:** Converts collected data into clean markdown or structured output, perfect for LLM processing or any other task.
    

This method guarantees an exhaustive crawl and data collection from any starting URL.

[​](#crawling)

Crawling
--------------------------

### 

[​](#crawl-endpoint)

/crawl endpoint

Used to crawl a URL and all accessible subpages. This submits a crawl job and returns a job ID to check the status of the crawl.

By default - Crawl will ignore sublinks of a page if they aren’t children of the url you provide. So, the website.com/other-parent/blog-1 wouldn’t be returned if you crawled website.com/blogs/. If you want website.com/other-parent/blog-1, use the `allowBackwardLinks` parameter

### 

[​](#installation)

Installation

### 

[​](#usage)

Usage

### 

[​](#response)

Response

If you’re using cURL or `async crawl` functions on SDKs, this will return an `ID` where you can use to check the status of the crawl.

    {
      "success": true,
      "id": "123-456-789",
      "url": "https://api.firecrawl.dev/v1/crawl/123-456-789"
    }
    

### 

[​](#check-crawl-job)

Check Crawl Job

Used to check the status of a crawl job and get its result.

This endpoint only works for crawls that are in progress or crawls that have completed recently.

#### 

[​](#response-handling)

Response Handling

The response varies based on the crawl’s status.

For not completed or large responses exceeding 10MB, a `next` URL parameter is provided. You must request this URL to retrieve the next 10MB of data. If the `next` parameter is absent, it indicates the end of the crawl data.

The skip parameter sets the maximum number of results returned for each chunk of results returned.

The skip and next parameter are only relavent when hitting the api directly. If you’re using the SDK, we handle this for you and will return all the results at once.

[​](#crawl-websocket)

Crawl WebSocket
----------------------------------------

Firecrawl’s WebSocket-based method, `Crawl URL and Watch`, enables real-time data extraction and monitoring. Start a crawl with a URL and customize it with options like page limits, allowed domains, and output formats, ideal for immediate data processing needs.

[​](#crawl-webhook)

Crawl Webhook
------------------------------------

You can now pass a `webhook` parameter to the `/crawl` endpoint. This will send a POST request to the URL you specify when the crawl is started, updated and completed.

The webhook will now trigger for every page crawled and not just the whole result at the end.

cURL

    curl -X POST https://api.firecrawl.dev/v1/crawl \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer YOUR_API_KEY' \
        -d '{
          "url": "https://docs.firecrawl.dev",
          "limit": 100,
          "webhook": "https://example.com/webhook"
        }'
    

### 

[​](#webhook-events)

Webhook Events

There are now 4 types of events:

*   `crawl.started` - Triggered when the crawl is started.
*   `crawl.page` - Triggered for every page crawled.
*   `crawl.completed` - Triggered when the crawl is completed to let you know it’s done (Beta)\*\*
*   `crawl.failed` - Triggered when the crawl fails.

### 

[​](#webhook-response)

Webhook Response

*   `success` - If the webhook was successful in crawling the page correctly.
*   `type` - The type of event that occurred.
*   `id` - The ID of the crawl.
*   `data` - The data that was scraped (Array). This will only be non empty on `crawl.page` and will contain 1 item if the page was scraped successfully. The response is the same as the `/scrape` endpoint.
*   `error` - If the webhook failed, this will contain the error message.

\*\*Beta consideration

*   There is a very tiny chance that the `crawl.completed` event may be triggered while the final `crawl.page` events are still being processed. We’re working on a fix for this.

[Batch Scrape](/features/batch-scrape)
[Map (Alpha)](/features/map)

On this page

*   [Crawling](#crawling)
    
*   [/crawl endpoint](#crawl-endpoint)
    
*   [Installation](#installation)
    
*   [Usage](#usage)
    
*   [Response](#response)
    
*   [Check Crawl Job](#check-crawl-job)
    
*   [Response Handling](#response-handling)
    
*   [Crawl WebSocket](#crawl-websocket)
    
*   [Crawl Webhook](#crawl-webhook)
    
*   [Webhook Events](#webhook-events)
    
*   [Webhook Response](#webhook-response)

---

# Go SDK | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

SDKs

Go

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#installation)

Installation
----------------------------------

To install the Firecrawl Go SDK, you can use go get:

Go

    go get github.com/mendableai/firecrawl-go
    

[​](#usage)

Usage
--------------------

1.  Get an API key from [firecrawl.dev](https://firecrawl.dev)
    
2.  Set the `API key` as a parameter to the `FirecrawlApp` struct.
3.  Set the `API URL` and/or pass it as a parameter to the `FirecrawlApp` struct. Defaults to `https://api.firecrawl.dev`.
4.  Set the `version` and/or pass it as a parameter to the `FirecrawlApp` struct. Defaults to `v1`.

Here’s an example of how to use the SDK with error handling:

Go

    import (
    	"fmt"
    	"log"
    	"github.com/google/uuid"
    	"github.com/mendableai/firecrawl-go"
    )
    
    func ptr[T any](v T) *T {
    	return &v
    }
    
    func main() {
    	// Initialize the FirecrawlApp with your API key
    	apiKey := "fc-YOUR_API_KEY"
    	apiUrl := "https://api.firecrawl.dev"
    	version := "v1"
    
    	app, err := firecrawl.NewFirecrawlApp(apiKey, apiUrl, version)
    	if err != nil {
    		log.Fatalf("Failed to initialize FirecrawlApp: %v", err)
    	}
    
      // Scrape a website
      scrapeStatus, err := app.ScrapeUrl("https://firecrawl.dev", firecrawl.ScrapeParams{
        Formats: []string{"markdown", "html"},
      })
      if err != nil {
        log.Fatalf("Failed to send scrape request: %v", err)
      }
    
      fmt.Println(scrapeStatus)
    
    	// Crawl a website
      idempotencyKey := uuid.New().String() // optional idempotency key
      crawlParams := &firecrawl.CrawlParams{
    		ExcludePaths: []string{"blog/*"},
    		MaxDepth:     ptr(2),
    	}
    
    	crawlStatus, err := app.CrawlUrl("https://firecrawl.dev", crawlParams, &idempotencyKey)
    	if err != nil {
    		log.Fatalf("Failed to send crawl request: %v", err)
    	}
    
    	fmt.Println(crawlStatus) 
    }
    

### 

[​](#scraping-a-url)

Scraping a URL

To scrape a single URL with error handling, use the `ScrapeURL` method. It takes the URL as a parameter and returns the scraped data as a dictionary.

Go

    // Scrape a website
    scrapeResult, err := app.ScrapeUrl("https://firecrawl.dev", map[string]any{
      "formats": []string{"markdown", "html"},
    })
    if err != nil {
      log.Fatalf("Failed to scrape URL: %v", err)
    }
    
    fmt.Println(scrapeResult)
    

### 

[​](#crawling-a-website)

Crawling a Website

To crawl a website, use the `CrawlUrl` method. It takes the starting URL and optional parameters as arguments. The `params` argument allows you to specify additional options for the crawl job, such as the maximum number of pages to crawl, allowed domains, and the output format.

Go

    crawlStatus, err := app.CrawlUrl("https://firecrawl.dev", map[string]any{
      "limit": 100,
      "scrapeOptions": map[string]any{
        "formats": []string{"markdown", "html"},
      },
    })
    if err != nil {
      log.Fatalf("Failed to send crawl request: %v", err)
    }
    
    fmt.Println(crawlStatus) 
    

### 

[​](#checking-crawl-status)

Checking Crawl Status

To check the status of a crawl job, use the `CheckCrawlStatus` method. It takes the job ID as a parameter and returns the current status of the crawl job.

Go

    // Get crawl status
    crawlStatus, err := app.CheckCrawlStatus("<crawl_id>")
    
    if err != nil {
      log.Fatalf("Failed to get crawl status: %v", err)
    }
    
    fmt.Println(crawlStatus)
    

### 

[​](#map-a-website)

Map a Website

Use `MapUrl` to generate a list of URLs from a website. The `params` argument let you customize the mapping process, including options to exclude subdomains or to utilize the sitemap.

Go

    // Map a website
    mapResult, err := app.MapUrl("https://firecrawl.dev", nil)
    if err != nil {
      log.Fatalf("Failed to map URL: %v", err)
    }
    
    fmt.Println(mapResult)
    

[​](#error-handling)

Error Handling
--------------------------------------

The SDK handles errors returned by the Firecrawl API and raises appropriate exceptions. If an error occurs during a request, an exception will be raised with a descriptive error message.

[Node](/sdks/node)
[Rust](/sdks/rust)

On this page

*   [Installation](#installation)
    
*   [Usage](#usage)
    
*   [Scraping a URL](#scraping-a-url)
    
*   [Crawling a Website](#crawling-a-website)
    
*   [Checking Crawl Status](#checking-crawl-status)
    
*   [Map a Website](#map-a-website)
    
*   [Error Handling](#error-handling)

---

# Firecrawl Docs

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Endpoints

Scrape

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

POST

/

scrape

Send

Authorization

Authorization

string

\*

Bearer

Authorization

Required

string

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

Body

object

\*

url

string

\*

url

Required

string

The URL to scrape

formats

array

formats

array

Formats to include in the output.

onlyMainContent

boolean

Select option

onlyMainContent

boolean

Only return the main content of the page excluding headers, navs, footers, etc.

includeTags

array

includeTags

array

Tags to include in the output.

excludeTags

array

excludeTags

array

Tags to exclude from the output.

headers

object

headers

object

Headers to send with the request. Can be used to send cookies, user-agent, etc.

waitFor

integer

waitFor

integer

Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load.

mobile

boolean

Select option

mobile

boolean

Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.

skipTlsVerification

boolean

Select option

skipTlsVerification

boolean

Skip TLS certificate verification when making requests

timeout

integer

timeout

integer

Timeout in milliseconds for the request

extract

object

extract

object

Extract object

schema

object

schema

object

The schema to use for the extraction (Optional)

systemPrompt

string

systemPrompt

string

The system prompt to use for the extraction (Optional)

prompt

string

prompt

string

The prompt to use for the extraction without a schema (Optional)

actions

array

actions

array

Actions to perform on the page before grabbing the content

location

object

location

object

Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.

country

string

country

string

ISO 3166-1 alpha-2 country code (e.g., 'US', 'AU', 'DE', 'JP')

languages

array

languages

array

Preferred languages and locales for the request in order of priority. Defaults to the language of the specified location. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language

removeBase64Images

boolean

Select option

removeBase64Images

boolean

Removes all base 64 images from the output, which may be overwhelmingly long. The image's alt text remains in the output, but the URL is replaced with a placeholder.

#### Authorizations

[​](#authorization-authorization)

Authorization

string

headerrequired

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

#### Body

application/json

[​](#body-url)

url

string

required

The URL to scrape

[​](#body-formats)

formats

enum<string>\[\]

Formats to include in the output.

Available options:

`markdown`,

`html`,

`rawHtml`,

`links`,

`screenshot`,

`extract`,

`screenshot@fullPage`

[​](#body-only-main-content)

onlyMainContent

boolean

default: true

Only return the main content of the page excluding headers, navs, footers, etc.

[​](#body-include-tags)

includeTags

string\[\]

Tags to include in the output.

[​](#body-exclude-tags)

excludeTags

string\[\]

Tags to exclude from the output.

[​](#body-headers)

headers

object

Headers to send with the request. Can be used to send cookies, user-agent, etc.

[​](#body-wait-for)

waitFor

integer

default: 0

Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load.

[​](#body-mobile)

mobile

boolean

default: false

Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.

[​](#body-skip-tls-verification)

skipTlsVerification

boolean

default: false

Skip TLS certificate verification when making requests

[​](#body-timeout)

timeout

integer

default: 30000

Timeout in milliseconds for the request

[​](#body-extract)

extract

object

Extract object

Show child attributes

[​](#body-extract-schema)

extract.schema

object

The schema to use for the extraction (Optional)

[​](#body-extract-system-prompt)

extract.systemPrompt

string

The system prompt to use for the extraction (Optional)

[​](#body-extract-prompt)

extract.prompt

string

The prompt to use for the extraction without a schema (Optional)

[​](#body-actions)

actions

object\[\]

Actions to perform on the page before grabbing the content

*   Wait
*   Screenshot
*   Click
*   Write text
*   Press a key
*   Scroll
*   Scrape
*   Execute JavaScript

Show child attributes

[​](#body-actions-type)

actions.type

enum<string>

required

Wait for a specified amount of milliseconds

Available options:

`wait`

[​](#body-actions-milliseconds)

actions.milliseconds

integer

Number of milliseconds to wait

Required range: `x > 1`

[​](#body-actions-selector)

actions.selector

string

Query selector to find the element by

[​](#body-location)

location

object

Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.

Show child attributes

[​](#body-location-country)

location.country

string

default: US

ISO 3166-1 alpha-2 country code (e.g., 'US', 'AU', 'DE', 'JP')

[​](#body-location-languages)

location.languages

string\[\]

Preferred languages and locales for the request in order of priority. Defaults to the language of the specified location. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language

[​](#body-remove-base64-images)

removeBase64Images

boolean

Removes all base 64 images from the output, which may be overwhelmingly long. The image's alt text remains in the output, but the URL is replaced with a placeholder.

#### Response

200 - application/json

[​](#response-success)

success

boolean

[​](#response-data)

data

object

Show child attributes

[​](#response-data-markdown)

data.markdown

string

[​](#response-data-html)

data.html

string | null

HTML version of the content on page if `html` is in `formats`

[​](#response-data-raw-html)

data.rawHtml

string | null

Raw HTML content of the page if `rawHtml` is in `formats`

[​](#response-data-screenshot)

data.screenshot

string | null

Screenshot of the page if `screenshot` is in `formats`

[​](#response-data-links)

data.links

string\[\]

List of links on the page if `links` is in `formats`

[​](#response-data-actions)

data.actions

object | null

Results of the actions specified in the `actions` parameter. Only present if the `actions` parameter was provided in the request

Show child attributes

[​](#response-data-actions-screenshots)

data.actions.screenshots

string\[\]

Screenshot URLs, in the same order as the screenshot actions provided.

[​](#response-data-metadata)

data.metadata

object

Show child attributes

[​](#response-data-metadata-title)

data.metadata.title

string

[​](#response-data-metadata-description)

data.metadata.description

string

[​](#response-data-metadata-language)

data.metadata.language

string | null

[​](#response-data-metadata-source-url)

data.metadata.sourceURL

string

[​](#response-data-metadata-any-other-metadata)

data.metadata.<any other metadata>

string

[​](#response-data-metadata-status-code)

data.metadata.statusCode

integer

The status code of the page

[​](#response-data-metadata-error)

data.metadata.error

string | null

The error message of the page

[​](#response-data-llm-extraction)

data.llm\_extraction

object | null

Displayed when using LLM Extraction. Extracted data from the page following the schema defined.

[​](#response-data-warning)

data.warning

string | null

Can be displayed when using LLM Extraction. Warning message will let you know any issues with the extraction.

[Introduction](/api-reference/introduction)
[Crawl](/api-reference/endpoint/crawl-post)

---

# Map | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Features

Map

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#introducing-map-alpha)

Introducing /map (Alpha)
-------------------------------------------------------

The easiest way to go from a single url to a map of the entire website. This is extremely useful for:

*   When you need to prompt the end-user to choose which links to scrape
*   Need to quickly know the links on a website
*   Need to scrape pages of a website that are related to a specific topic (use the `search` parameter)
*   Only need to scrape specific pages of a website

[​](#alpha-considerations)

Alpha Considerations
--------------------------------------------------

This endpoint prioritizes speed, so it may not capture all website links. We are working on improvements. Feedback and suggestions are very welcome.

[​](#mapping)

Mapping
------------------------

### 

[​](#map-endpoint)

/map endpoint

Used to map a URL and get urls of the website. This returns most links present on the website.

### 

[​](#installation)

Installation

### 

[​](#usage)

Usage

### 

[​](#response)

Response

SDKs will return the data object directly. cURL will return the payload exactly as shown below.

    {
      "status": "success",
      "links": [\
        "https://firecrawl.dev",\
        "https://www.firecrawl.dev/pricing",\
        "https://www.firecrawl.dev/blog",\
        "https://www.firecrawl.dev/playground",\
        "https://www.firecrawl.dev/smart-crawl",\
        ...\
      ]
    }
    

#### 

[​](#map-with-search)

Map with search

Map with `search` param allows you to search for specific urls inside a website.

cURL

    curl -X POST https://api.firecrawl.dev/v1/map \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer YOUR_API_KEY' \
        -d '{
          "url": "https://firecrawl.dev",
          "search": "docs"
        }'
    

Response will be an ordered list from the most relevant to the least relevant.

    {
      "status": "success",
      "links": [\
        "https://docs.firecrawl.dev",\
        "https://docs.firecrawl.dev/sdks/python",\
        "https://docs.firecrawl.dev/learn/rag-llama3",\
      ]
    }
    

[Crawl](/features/crawl)
[LLM Extract](/features/extract)

On this page

*   [Introducing /map (Alpha)](#introducing-map-alpha)
    
*   [Alpha Considerations](#alpha-considerations)
    
*   [Mapping](#mapping)
    
*   [/map endpoint](#map-endpoint)
    
*   [Installation](#installation)
    
*   [Usage](#usage)
    
*   [Response](#response)
    
*   [Map with search](#map-with-search)

---

# Rust SDK | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

SDKs

Rust

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#installation)

Installation
----------------------------------

To install the Firecrawl Rust SDK, add the following to your `Cargo.toml`:

Rust

    # Add this to your Cargo.toml
    [dependencies]
    firecrawl = "^1.0"
    tokio = { version = "^1", features = ["full"] }
    

[​](#usage)

Usage
--------------------

First, you need to obtain an API key from [firecrawl.dev](https://firecrawl.dev)
. Then, you need to initialize the `FirecrawlApp`. From there, you can access functions like `FirecrawlApp::scrape_url`, which let you use our API.

Here’s an example of how to use the SDK in Rust:

Rust

    use firecrawl::{crawl::{CrawlOptions, CrawlScrapeOptions, CrawlScrapeFormats}, FirecrawlApp, scrape::{ScrapeOptions, ScrapeFormats}};
    
    #[tokio::main]
    async fn main() {
        // Initialize the FirecrawlApp with the API key
        let app = FirecrawlApp::new("fc-YOUR_API_KEY").expect("Failed to initialize FirecrawlApp");
    
        // Scrape a URL
        let options = ScrapeOptions {
            formats vec! [ ScrapeFormats::Markdown, ScrapeFormats::HTML ].into(),
            ..Default::default()
        };
    
        let scrape_result = app.scrape_url("https://firecrawl.dev", options).await;
    
        match scrape_result {
            Ok(data) => println!("Scrape Result:\n{}", data.markdown.unwrap()),
            Err(e) => eprintln!("Map failed: {}", e),
        }
    
        // Crawl a website
        let crawl_options = CrawlOptions {
            scrape_options: CrawlScrapeOptions {
                formats: vec![ CrawlScrapeFormats::Markdown, CrawlScrapeFormats::HTML ].into(),
                ..Default::default()
            }.into(),
            limit: 100.into(),
            ..Default::default()
        };
    
        let crawl_result = app
            .crawl_url("https://mendable.ai", crawl_options)
            .await;
    
        match crawl_result {
            Ok(data) => println!("Crawl Result (used {} credits):\n{:#?}", data.credits_used, data.data),
            Err(e) => eprintln!("Crawl failed: {}", e),
        }
    }
    

### 

[​](#scraping-a-url)

Scraping a URL

To scrape a single URL, use the `scrape_url` method. It takes the URL as a parameter and returns the scraped data as a `Document`.

Rust

    let options = ScrapeOptions {
        formats vec! [ ScrapeFormats::Markdown, ScrapeFormats::HTML ].into(),
        ..Default::default()
    };
    
    let scrape_result = app.scrape_url("https://firecrawl.dev", options).await;
    
    match scrape_result {
        Ok(data) => println!("Scrape Result:\n{}", data.markdown.unwrap()),
        Err(e) => eprintln!("Map failed: {}", e),
    }
    

### 

[​](#scraping-with-extract)

Scraping with Extract

With Extract, you can easily extract structured data from any URL. You need to specify your schema in the JSON Schema format, using the `serde_json::json!` macro.

Rust

    let json_schema = json!({
        "type": "object",
        "properties": {
            "top": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "title": {"type": "string"},
                        "points": {"type": "number"},
                        "by": {"type": "string"},
                        "commentsURL": {"type": "string"}
                    },
                    "required": ["title", "points", "by", "commentsURL"]
                },
                "minItems": 5,
                "maxItems": 5,
                "description": "Top 5 stories on Hacker News"
            }
        },
        "required": ["top"]
    });
    
    let llm_extraction_options = ScrapeOptions {
        formats: vec![ ScrapeFormats::Extract ].into(),
        extract: ExtractOptions {
            schema: json_schema.into(),
            ..Default::default()
        }.into(),
        ..Default::default()
    };
    
    let llm_extraction_result = app
        .scrape_url("https://news.ycombinator.com", llm_extraction_options)
        .await;
    
    match llm_extraction_result {
        Ok(data) => println!("LLM Extraction Result:\n{:#?}", data.extract.unwrap()),
        Err(e) => eprintln!("LLM Extraction failed: {}", e),
    }
    

### 

[​](#crawling-a-website)

Crawling a Website

To crawl a website, use the `crawl_url` method. This will wait for the crawl to complete, which may take a long time based on your starting URL and your options.

Rust

    let crawl_options = CrawlOptions {
        scrape_options: CrawlScrapeOptions {
            formats: vec![ CrawlScrapeFormats::Markdown, CrawlScrapeFormats::HTML ].into(),
            ..Default::default()
        }.into(),
        limit: 100.into(),
        ..Default::default()
    };
    
    let crawl_result = app
        .crawl_url("https://mendable.ai", crawl_options)
        .await;
    
    match crawl_result {
        Ok(data) => println!("Crawl Result (used {} credits):\n{:#?}", data.credits_used, data.data),
        Err(e) => eprintln!("Crawl failed: {}", e),
    }
    

#### 

[​](#crawling-asynchronously)

Crawling asynchronously

To crawl without waiting for the result, use the `crawl_url_async` method. It takes the same parameters, but it returns a `CrawlAsyncRespone` struct, containing the crawl’s ID. You can use that ID with the `check_crawl_status` method to check the status at any time. Do note that completed crawls are deleted after 24 hours.

Rust

    let crawl_id = app.crawl_url_async("https://mendable.ai", None).await?.id;
    
    // ... later ...
    
    let status = app.check_crawl_status(crawl_id).await?;
    
    if status.status == CrawlStatusTypes::Completed {
        println!("Crawl is done: {:#?}", status.data);
    } else {
        // ... wait some more ...
    }
    

### 

[​](#map-a-url-alpha)

Map a URL (Alpha)

Map all associated links from a starting URL.

Rust

    let map_result = app.map_url("https://firecrawl.dev", None).await;
    
    match map_result {
        Ok(data) => println!("Mapped URLs: {:#?}", data),
        Err(e) => eprintln!("Map failed: {}", e),
    }
    

[​](#error-handling)

Error Handling
--------------------------------------

The SDK handles errors returned by the Firecrawl API and by our dependencies, and combines them into the `FirecrawlError` enum, implementing `Error`, `Debug` and `Display`. All of our methods return a `Result<T, FirecrawlError>`.

[Go](/sdks/go)

On this page

*   [Installation](#installation)
    
*   [Usage](#usage)
    
*   [Scraping a URL](#scraping-a-url)
    
*   [Scraping with Extract](#scraping-with-extract)
    
*   [Crawling a Website](#crawling-a-website)
    
*   [Crawling asynchronously](#crawling-asynchronously)
    
*   [Map a URL (Alpha)](#map-a-url-alpha)
    
*   [Error Handling](#error-handling)

---

# Firecrawl Docs

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Endpoints

Crawl

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

POST

/

crawl

Send

Authorization

Authorization

string

\*

Bearer

Authorization

Required

string

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

Body

object

\*

url

string

\*

url

Required

string

The base URL to start crawling from

excludePaths

array

excludePaths

array

Specifies URL patterns to exclude from the crawl by comparing website paths against the provided regex patterns. For example, if you set "excludePaths": \["blog/\*"\] for the base URL firecrawl.dev, any results matching that pattern will be excluded, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap.

includePaths

array

includePaths

array

Specifies URL patterns to include in the crawl by comparing website paths against the provided regex patterns. Only the paths that match the specified patterns will be included in the response. For example, if you set "includePaths": \["blog/\*"\] for the base URL firecrawl.dev, only results matching that pattern will be included, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap.

maxDepth

integer

maxDepth

integer

Maximum depth to crawl relative to the entered URL.

ignoreSitemap

boolean

Select option

ignoreSitemap

boolean

Ignore the website sitemap when crawling

limit

integer

limit

integer

Maximum number of pages to crawl. Default limit is 10000.

allowBackwardLinks

boolean

Select option

allowBackwardLinks

boolean

Enables the crawler to navigate from a specific URL to previously linked pages.

allowExternalLinks

boolean

Select option

allowExternalLinks

boolean

Allows the crawler to follow links to external websites.

webhook

string

stringobject

webhook

string

The URL to send the webhook to. This will trigger for crawl started (crawl.started) ,every page crawled (crawl.page) and when the crawl is completed (crawl.completed or crawl.failed). The response will be the same as the `/scrape` endpoint.

scrapeOptions

object

scrapeOptions

object

formats

array

formats

array

Formats to include in the output.

headers

object

headers

object

Headers to send with the request. Can be used to send cookies, user-agent, etc.

includeTags

array

includeTags

array

Tags to include in the output.

excludeTags

array

excludeTags

array

Tags to exclude from the output.

onlyMainContent

boolean

Select option

onlyMainContent

boolean

Only return the main content of the page excluding headers, navs, footers, etc.

removeBase64Images

boolean

Select option

removeBase64Images

boolean

Remove base64 encoded images from the output

mobile

boolean

Select option

mobile

boolean

Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.

waitFor

integer

waitFor

integer

Wait x amount of milliseconds for the page to load to fetch content

#### Authorizations

[​](#authorization-authorization)

Authorization

string

headerrequired

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

#### Body

application/json

[​](#body-url)

url

string

required

The base URL to start crawling from

[​](#body-exclude-paths)

excludePaths

string\[\]

Specifies URL patterns to exclude from the crawl by comparing website paths against the provided regex patterns. For example, if you set "excludePaths": \["blog/\*"\] for the base URL firecrawl.dev, any results matching that pattern will be excluded, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap.

[​](#body-include-paths)

includePaths

string\[\]

Specifies URL patterns to include in the crawl by comparing website paths against the provided regex patterns. Only the paths that match the specified patterns will be included in the response. For example, if you set "includePaths": \["blog/\*"\] for the base URL firecrawl.dev, only results matching that pattern will be included, such as https://www.firecrawl.dev/blog/firecrawl-launch-week-1-recap.

[​](#body-max-depth)

maxDepth

integer

default: 2

Maximum depth to crawl relative to the entered URL.

[​](#body-ignore-sitemap)

ignoreSitemap

boolean

default: false

Ignore the website sitemap when crawling

[​](#body-limit)

limit

integer

default: 10000

Maximum number of pages to crawl. Default limit is 10000.

[​](#body-allow-backward-links)

allowBackwardLinks

boolean

default: false

Enables the crawler to navigate from a specific URL to previously linked pages.

[​](#body-allow-external-links)

allowExternalLinks

boolean

default: false

Allows the crawler to follow links to external websites.

[​](#body-webhook)

webhook

stringobject

The URL to send the webhook to. This will trigger for crawl started (crawl.started) ,every page crawled (crawl.page) and when the crawl is completed (crawl.completed or crawl.failed). The response will be the same as the `/scrape` endpoint.

[​](#body-scrape-options)

scrapeOptions

object

Show child attributes

[​](#body-scrape-options-formats)

scrapeOptions.formats

enum<string>\[\]

Formats to include in the output.

Available options:

`markdown`,

`html`,

`rawHtml`,

`links`,

`screenshot`

[​](#body-scrape-options-headers)

scrapeOptions.headers

object

Headers to send with the request. Can be used to send cookies, user-agent, etc.

[​](#body-scrape-options-include-tags)

scrapeOptions.includeTags

string\[\]

Tags to include in the output.

[​](#body-scrape-options-exclude-tags)

scrapeOptions.excludeTags

string\[\]

Tags to exclude from the output.

[​](#body-scrape-options-only-main-content)

scrapeOptions.onlyMainContent

boolean

default: true

Only return the main content of the page excluding headers, navs, footers, etc.

[​](#body-scrape-options-remove-base64-images)

scrapeOptions.removeBase64Images

boolean

default: true

Remove base64 encoded images from the output

[​](#body-scrape-options-mobile)

scrapeOptions.mobile

boolean

default: false

Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.

[​](#body-scrape-options-wait-for)

scrapeOptions.waitFor

integer

default: 123

Wait x amount of milliseconds for the page to load to fetch content

#### Response

200 - application/json

[​](#response-success)

success

boolean

[​](#response-id)

id

string

[​](#response-url)

url

string

[Scrape](/api-reference/endpoint/scrape)
[Get Crawl Status](/api-reference/endpoint/crawl-get)

---

# Firecrawl Docs

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Endpoints

Get Crawl Status

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

GET

/

crawl

/

{id}

Send

Authorization

Authorization

string

\*

Bearer

Authorization

Required

string

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

Path

id

string

\*

id

Required

string

The ID of the crawl job

#### Authorizations

[​](#authorization-authorization)

Authorization

string

headerrequired

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

#### Path Parameters

[​](#parameter-id)

id

string

required

The ID of the crawl job

#### Response

200 - application/json

[​](#response-status)

status

string

The current status of the crawl. Can be `scraping`, `completed`, or `failed`.

[​](#response-total)

total

integer

The total number of pages that were attempted to be crawled.

[​](#response-completed)

completed

integer

The number of pages that have been successfully crawled.

[​](#response-credits-used)

creditsUsed

integer

The number of credits used for the crawl.

[​](#response-expires-at)

expiresAt

string

The date and time when the crawl will expire.

[​](#response-next)

next

string | null

The URL to retrieve the next 10MB of data. Returned if the crawl is not completed or if the response is larger than 10MB.

[​](#response-data)

data

object\[\]

The data of the crawl.

Show child attributes

[​](#response-data-markdown)

data.markdown

string

[​](#response-data-html)

data.html

string | null

HTML version of the content on page if `includeHtml` is true

[​](#response-data-raw-html)

data.rawHtml

string | null

Raw HTML content of the page if `includeRawHtml` is true

[​](#response-data-links)

data.links

string\[\]

List of links on the page if `includeLinks` is true

[​](#response-data-screenshot)

data.screenshot

string | null

Screenshot of the page if `includeScreenshot` is true

[​](#response-data-metadata)

data.metadata

object

Show child attributes

[​](#response-data-metadata-title)

data.metadata.title

string

[​](#response-data-metadata-description)

data.metadata.description

string

[​](#response-data-metadata-language)

data.metadata.language

string | null

[​](#response-data-metadata-source-url)

data.metadata.sourceURL

string

[​](#response-data-metadata-any-other-metadata)

data.metadata.<any other metadata>

string

[​](#response-data-metadata-status-code)

data.metadata.statusCode

integer

The status code of the page

[​](#response-data-metadata-error)

data.metadata.error

string | null

The error message of the page

[Crawl](/api-reference/endpoint/crawl-post)
[Cancel Crawl](/api-reference/endpoint/crawl-delete)

---

# Extract | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Features

LLM Extract

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#scrape-and-extract-structured-data-with-firecrawl)

Scrape and extract structured data with Firecrawl
------------------------------------------------------------------------------------------------------------

Firecrawl leverages Large Language Models (LLMs) to efficiently extract structured data from web pages. Here’s how:

1.  **Schema Definition:** Define the URL to scrape and the desired data schema using JSON Schema (following OpenAI tool schema). This schema specifies the data structure you expect to extract from the page.
    
2.  **Scrape Endpoint:** Pass the URL and the schema to the scrape endpoint. Documentation for this endpoint can be found here: [Scrape Endpoint Documentation](https://docs.firecrawl.dev/api-reference/endpoint/scrape)
    
3.  **Structured Data Retrieval:** Receive the scraped data in the structured format defined by your schema. You can then use this data as needed in your application or for further processing.
    

This method streamlines data extraction, reducing manual handling and enhancing efficiency.

[​](#extract-structured-data)

Extract structured data
--------------------------------------------------------

### 

[​](#scrape-with-extract-endpoint)

/scrape (with extract) endpoint

Used to extract structured data from scraped pages.

Output:

JSON

    {
        "success": true,
        "data": {
          "extract": {
            "company_mission": "Train a secure AI on your technical resources that answers customer and employee questions so your team doesn't have to",
            "supports_sso": true,
            "is_open_source": false,
            "is_in_yc": true
          },
          "metadata": {
            "title": "Mendable",
            "description": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",
            "robots": "follow, index",
            "ogTitle": "Mendable",
            "ogDescription": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",
            "ogUrl": "https://docs.firecrawl.dev/",
            "ogImage": "https://docs.firecrawl.dev/mendable_new_og1.png",
            "ogLocaleAlternate": [],
            "ogSiteName": "Mendable",
            "sourceURL": "https://docs.firecrawl.dev/"
          },
        }
    }
    

### 

[​](#extracting-without-schema-new)

Extracting without schema (New)

You can now extract without a schema by just passing a `prompt` to the endpoint. The llm chooses the structure of the data.

Output:

JSON

    {
        "success": true,
        "data": {
          "extract": {
            "company_mission": "Train a secure AI on your technical resources that answers customer and employee questions so your team doesn't have to",
          },
          "metadata": {
            "title": "Mendable",
            "description": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",
            "robots": "follow, index",
            "ogTitle": "Mendable",
            "ogDescription": "Mendable allows you to easily build AI chat applications. Ingest, customize, then deploy with one line of code anywhere you want. Brought to you by SideGuide",
            "ogUrl": "https://docs.firecrawl.dev/",
            "ogImage": "https://docs.firecrawl.dev/mendable_new_og1.png",
            "ogLocaleAlternate": [],
            "ogSiteName": "Mendable",
            "sourceURL": "https://docs.firecrawl.dev/"
          },
        }
    }
    

### 

[​](#extract-object)

Extract object

The `extract` object accepts the following parameters:

*   `schema`: The schema to use for the extraction.
*   `systemPrompt`: The system prompt to use for the extraction.
*   `prompt`: The prompt to use for the extraction without a schema.

[Map (Alpha)](/features/map)
[Langchain](/integrations/langchain)

On this page

*   [Scrape and extract structured data with Firecrawl](#scrape-and-extract-structured-data-with-firecrawl)
    
*   [Extract structured data](#extract-structured-data)
    
*   [/scrape (with extract) endpoint](#scrape-with-extract-endpoint)
    
*   [Extracting without schema (New)](#extracting-without-schema-new)
    
*   [Extract object](#extract-object)

---

# Langchain | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Integrations

Langchain

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

> Note: this integration is still using [v0 version of the Firecrawl API](/v0/introduction)
> . You can install the 0.0.20 version for the Python SDK or the 0.0.36 for the Node SDK.

[​](#installation)

Installation
----------------------------------

    pip install firecrawl-py==0.0.20
    

[​](#usage)

Usage
--------------------

You will need to get your own API key. See [https://firecrawl.dev](https://firecrawl.dev)

    from langchain_community.document_loaders import FireCrawlLoader
    
    loader = FireCrawlLoader(
        api_key="YOUR_API_KEY", url="https://firecrawl.dev", mode="crawl"
    )
    
    docs = loader.load()
    

### 

[​](#modes)

Modes

Scrape: Scrape single url and return the markdown. Crawl: Crawl the url and all accessible sub pages and return the markdown for each one.

    loader = FireCrawlLoader(
        api_key="YOUR_API_KEY",
        url="https://firecrawl.dev",
        mode="scrape",
    )
    
    data = loader.load()
    

### 

[​](#crawler-options)

Crawler Options

You can also pass params to the loader. This is a dictionary of options to pass to the crawler. See the FireCrawl API documentation for more information.

[​](#langchain-js)

Langchain JS
----------------------------------

To use it in Langchain JS, you can install it via npm:

    npm install @mendableai/firecrawl-js
    

Then, you can use it like this:

    import { FireCrawlLoader } from "langchain/document_loaders/web/firecrawl";
    
    const loader = new FireCrawlLoader({
      url: "https://firecrawl.dev", // The URL to scrape
      apiKey: process.env.FIRECRAWL_API_KEY, // Optional, defaults to `FIRECRAWL_API_KEY` in your env.
      mode: "scrape", // The mode to run the crawler in. Can be "scrape" for single urls or "crawl" for all accessible subpages
      params: {
        // optional parameters based on Firecrawl API docs
        // For API documentation, visit https://docs.firecrawl.dev
      },
    });
    
    const docs = await loader.load();
    

[LLM Extract](/features/extract)
[Llamaindex](/integrations/llamaindex)

On this page

*   [Installation](#installation)
    
*   [Usage](#usage)
    
*   [Modes](#modes)
    
*   [Crawler Options](#crawler-options)
    
*   [Langchain JS](#langchain-js)

---

# Firecrawl Docs

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Endpoints

Cancel Crawl

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

DELETE

/

crawl

/

{id}

Send

Authorization

Authorization

string

\*

Bearer

Authorization

Required

string

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

Path

id

string

\*

id

Required

string

The ID of the crawl job

#### Authorizations

[​](#authorization-authorization)

Authorization

string

headerrequired

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

#### Path Parameters

[​](#parameter-id)

id

string

required

The ID of the crawl job

#### Response

200 - application/json

[​](#response-success)

success

boolean

[​](#response-message)

message

string

[Get Crawl Status](/api-reference/endpoint/crawl-get)
[Map](/api-reference/endpoint/map)

---

# Llamaindex | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Integrations

Llamaindex

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

> Note: this integration is still using [v0 version of the Firecrawl API](/v0/introduction)
> . You can install the 0.0.20 version for the Python SDK or the 0.0.36 for the Node SDK.

[​](#installation)

Installation
----------------------------------

    pip install firecrawl-py==0.0.20 llama_index llama-index llama-index-readers-web
    
    

[​](#usage)

Usage
--------------------

### 

[​](#using-firecrawl-to-gather-an-entire-website)

Using FireCrawl to Gather an Entire Website

    from llama_index.readers.web import FireCrawlWebReader
    from llama_index.core import SummaryIndex
    import os
    
    
    # Initialize FireCrawlWebReader to crawl a website
    firecrawl_reader = FireCrawlWebReader(
        api_key="<your_api_key>",  # Replace with your actual API key from https://www.firecrawl.dev/
        mode="scrape",  # Choose between "crawl" and "scrape" for single page scraping
        params={"additional": "parameters"}  # Optional additional parameters
    )
    
    # Set the environment variable for the virtual key
    os.environ["OPENAI_API_KEY"] = "<OPENAI_API_KEY>"
    
    # Load documents from a single page URL
    documents = firecrawl_reader.load_data(url="http://paulgraham.com/")
    index = SummaryIndex.from_documents(documents)
    
    # Set Logging to DEBUG for more detailed outputs
    query_engine = index.as_query_engine()
    response = query_engine.query("What did the author do growing up?")
    display(Markdown(f"<b>{response}</b>"))
    

### 

[​](#using-firecrawl-to-gather-a-single-page)

Using FireCrawl to Gather a Single Page

    from llama_index.readers.web import FireCrawlWebReader
    
    # Initialize the FireCrawlWebReader with your API key and desired mode
    firecrawl_reader = FireCrawlWebReader(
        api_key="<your_api_key>",  # Replace with your actual API key from https://www.firecrawl.dev/
        mode="scrape",  # Choose between "crawl" and "scrape"
        params={"additional": "parameters"}  # Optional additional parameters
    )
    
    # Load documents from a specified URL
    documents = firecrawl_reader.load_data(url="http://paulgraham.com/worked.html")
    index = SummaryIndex.from_documents(documents)
    
    # Set Logging to DEBUG for more detailed outputs
    query_engine = index.as_query_engine()
    response = query_engine.query("What did the author do growing up?")
    display(Markdown(f"<b>{response}</b>"))
    

[Langchain](/integrations/langchain)
[CrewAI](/integrations/crewai)

On this page

*   [Installation](#installation)
    
*   [Usage](#usage)
    
*   [Using FireCrawl to Gather an Entire Website](#using-firecrawl-to-gather-an-entire-website)
    
*   [Using FireCrawl to Gather a Single Page](#using-firecrawl-to-gather-a-single-page)

---

# Firecrawl Docs

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Endpoints

Map

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

POST

/

map

Send

Authorization

Authorization

string

\*

Bearer

Authorization

Required

string

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

Body

object

\*

url

string

\*

url

Required

string

The base URL to start crawling from

search

string

search

string

Search query to use for mapping. During the Alpha phase, the 'smart' part of the search functionality is limited to 1000 search results. However, if map finds more results, there is no limit applied.

ignoreSitemap

boolean

Select option

ignoreSitemap

boolean

Ignore the website sitemap when crawling.

sitemapOnly

boolean

Select option

sitemapOnly

boolean

Only return links found in the website sitemap

includeSubdomains

boolean

Select option

includeSubdomains

boolean

Include subdomains of the website

limit

integer

limit

integer

Maximum number of links to return

#### Authorizations

[​](#authorization-authorization)

Authorization

string

headerrequired

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

#### Body

application/json

[​](#body-url)

url

string

required

The base URL to start crawling from

[​](#body-search)

search

string

Search query to use for mapping. During the Alpha phase, the 'smart' part of the search functionality is limited to 1000 search results. However, if map finds more results, there is no limit applied.

[​](#body-ignore-sitemap)

ignoreSitemap

boolean

default: true

Ignore the website sitemap when crawling.

[​](#body-sitemap-only)

sitemapOnly

boolean

default: false

Only return links found in the website sitemap

[​](#body-include-subdomains)

includeSubdomains

boolean

default: false

Include subdomains of the website

[​](#body-limit)

limit

integer

default: 5000

Maximum number of links to return

Required range: `x < 5000`

#### Response

200 - application/json

[​](#response-success)

success

boolean

[​](#response-links)

links

string\[\]

[Cancel Crawl](/api-reference/endpoint/crawl-delete)
[Batch Scrape](/api-reference/endpoint/batch-scrape)

---

# CrewAI | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Integrations

CrewAI

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#using-firecrawl-with-crewai)

Using Firecrawl with CrewAI
----------------------------------------------------------------

Firecrawl is integrated with [CrewAI, the framework for orchestrating AI agents](https://www.crewai.com/)
. This page introduces all of the Firecrawl tools added to the framework.

### 

[​](#installing-firecrawl-tools-inside-of-crewai)

Installing Firecrawl Tools inside of CrewAI

*   Get an API key from your [firecrawl.dev dashboard](https://firecrawl.dev)
     and set it in environment variables (`FIRECRAWL_API_KEY`).
*   Install the [Firecrawl SDK](https://github.com/mendableai/firecrawl)
     along with `crewai[tools]` package:

    pip install firecrawl-py 'crewai[tools]'
    

[​](#tools)

Tools
--------------------

### 

[​](#firecrawlcrawlwebsitetool)

FirecrawlCrawlWebsiteTool

#### 

[​](#example)

Example

Utilize the FirecrawlScrapeFromWebsiteTool as follows to allow your agent to load websites:

    from crewai_tools import FirecrawlCrawlWebsiteTool
    
    tool = FirecrawlCrawlWebsiteTool(url='firecrawl.dev')
    

#### 

[​](#arguments)

Arguments

*   `api_key`: Optional. Specifies Firecrawl API key. Defaults is the `FIRECRAWL_API_KEY` environment variable.
*   `url`: The base URL to start crawling from.
*   `page_options`: Optional.
    *   `onlyMainContent`: Optional. Only return the main content of the page excluding headers, navs, footers, etc.
    *   `includeHtml`: Optional. Include the raw HTML content of the page. Will output a html key in the response.
*   `crawler_options`: Optional. Options for controlling the crawling behavior.
    *   `includes`: Optional. URL patterns to include in the crawl.
    *   `exclude`: Optional. URL patterns to exclude from the crawl.
    *   `generateImgAltText`: Optional. Generate alt text for images using LLMs (requires a paid plan).
    *   `returnOnlyUrls`: Optional. If true, returns only the URLs as a list in the crawl status. Note: the response will be a list of URLs inside the data, not a list of documents.
    *   `maxDepth`: Optional. Maximum depth to crawl. Depth 1 is the base URL, depth 2 includes the base URL and its direct children, and so on.
    *   `mode`: Optional. The crawling mode to use. Fast mode crawls 4x faster on websites without a sitemap but may not be as accurate and shouldn’t be used on heavily JavaScript-rendered websites.
    *   `limit`: Optional. Maximum number of pages to crawl.
    *   `timeout`: Optional. Timeout in milliseconds for the crawling operation.

### 

[​](#firecrawlscrapewebsitetool)

FirecrawlScrapeWebsiteTool

#### 

[​](#example-2)

Example

Utilize the FirecrawlScrapeWebsiteTool as follows to allow your agent to load websites:

    from crewai_tools import FirecrawlScrapeWebsiteTool
    
    tool = FirecrawlScrapeWebsiteTool(url='firecrawl.dev')
    

#### 

[​](#arguments-2)

Arguments

*   `api_key`: Optional. Specifies Firecrawl API key. Defaults is the `FIRECRAWL_API_KEY` environment variable.
*   `url`: The URL to scrape.
*   `page_options`: Optional.
    *   `onlyMainContent`: Optional. Only return the main content of the page excluding headers, navs, footers, etc.
    *   `includeHtml`: Optional. Include the raw HTML content of the page. Will output a html key in the response.
*   `extractor_options`: Optional. Options for LLM-based extraction of structured information from the page content
    *   `mode`: The extraction mode to use, currently supports ‘llm-extraction’
    *   `extractionPrompt`: Optional. A prompt describing what information to extract from the page
    *   `extractionSchema`: Optional. The schema for the data to be extracted
*   `timeout`: Optional. Timeout in milliseconds for the request

### 

[​](#firecrawlsearchtool)

FirecrawlSearchTool

#### 

[​](#example-3)

Example

Utilize the FirecrawlSearchTool as follows to allow your agent to load websites:

    from crewai_tools import FirecrawlSearchTool
    
    tool = FirecrawlSearchTool(query='what is firecrawl?')
    

#### 

[​](#arguments-3)

Arguments

*   `api_key`: Optional. Specifies Firecrawl API key. Defaults is the `FIRECRAWL_API_KEY` environment variable.
*   `query`: The search query string to be used for searching.
*   `page_options`: Optional. Options for result formatting.
    *   `onlyMainContent`: Optional. Only return the main content of the page excluding headers, navs, footers, etc.
    *   `includeHtml`: Optional. Include the raw HTML content of the page. Will output a html key in the response.
    *   `fetchPageContent`: Optional. Fetch the full content of the page.
*   `search_options`: Optional. Options for controlling the crawling behavior.
    *   `limit`: Optional. Maximum number of pages to crawl.

[Llamaindex](/integrations/llamaindex)
[Dify](/integrations/dify)

On this page

*   [Using Firecrawl with CrewAI](#using-firecrawl-with-crewai)
    
*   [Installing Firecrawl Tools inside of CrewAI](#installing-firecrawl-tools-inside-of-crewai)
    
*   [Tools](#tools)
    
*   [FirecrawlCrawlWebsiteTool](#firecrawlcrawlwebsitetool)
    
*   [Example](#example)
    
*   [Arguments](#arguments)
    
*   [FirecrawlScrapeWebsiteTool](#firecrawlscrapewebsitetool)
    
*   [Example](#example-2)
    
*   [Arguments](#arguments-2)
    
*   [FirecrawlSearchTool](#firecrawlsearchtool)
    
*   [Example](#example-3)
    
*   [Arguments](#arguments-3)

---

# Firecrawl Docs

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Endpoints

Batch Scrape

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

POST

/

batch

/

scrape

Send

Authorization

Authorization

string

\*

Bearer

Authorization

Required

string

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

Body

object

\*

urls

array

urls

array

webhook

string

stringobject

webhook

string

The URL to send the webhook to. This will trigger for batch scrape started (batch\_scrape.started), every page scraped (batch\_scrape.page) and when the batch scrape is completed (batch\_scrape.completed or batch\_scrape.failed). The response will be the same as the `/scrape` endpoint.

formats

array

formats

array

Formats to include in the output.

onlyMainContent

boolean

Select option

onlyMainContent

boolean

Only return the main content of the page excluding headers, navs, footers, etc.

includeTags

array

includeTags

array

Tags to include in the output.

excludeTags

array

excludeTags

array

Tags to exclude from the output.

headers

object

headers

object

Headers to send with the request. Can be used to send cookies, user-agent, etc.

waitFor

integer

waitFor

integer

Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load.

mobile

boolean

Select option

mobile

boolean

Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.

skipTlsVerification

boolean

Select option

skipTlsVerification

boolean

Skip TLS certificate verification when making requests

timeout

integer

timeout

integer

Timeout in milliseconds for the request

extract

object

extract

object

Extract object

schema

object

schema

object

The schema to use for the extraction (Optional)

systemPrompt

string

systemPrompt

string

The system prompt to use for the extraction (Optional)

prompt

string

prompt

string

The prompt to use for the extraction without a schema (Optional)

actions

array

actions

array

Actions to perform on the page before grabbing the content

location

object

location

object

Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.

country

string

country

string

ISO 3166-1 alpha-2 country code (e.g., 'US', 'AU', 'DE', 'JP')

languages

array

languages

array

Preferred languages and locales for the request in order of priority. Defaults to the language of the specified location. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language

removeBase64Images

boolean

Select option

removeBase64Images

boolean

Removes all base 64 images from the output, which may be overwhelmingly long. The image's alt text remains in the output, but the URL is replaced with a placeholder.

ignoreInvalidURLs

boolean

Select option

ignoreInvalidURLs

boolean

If invalid URLs are specified in the urls array, they will be ignored. Instead of them failing the entire request, a batch scrape using the remaining valid URLs will be created, and the invalid URLs will be returned in the invalidURLs field of the response.

#### Authorizations

[​](#authorization-authorization)

Authorization

string

headerrequired

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

#### Body

application/json

[​](#body-urls)

urls

string\[\]

[​](#body-webhook)

webhook

stringobject

The URL to send the webhook to. This will trigger for batch scrape started (batch\_scrape.started), every page scraped (batch\_scrape.page) and when the batch scrape is completed (batch\_scrape.completed or batch\_scrape.failed). The response will be the same as the `/scrape` endpoint.

[​](#body-formats)

formats

enum<string>\[\]

Formats to include in the output.

Available options:

`markdown`,

`html`,

`rawHtml`,

`links`,

`screenshot`,

`extract`,

`screenshot@fullPage`

[​](#body-only-main-content)

onlyMainContent

boolean

default: true

Only return the main content of the page excluding headers, navs, footers, etc.

[​](#body-include-tags)

includeTags

string\[\]

Tags to include in the output.

[​](#body-exclude-tags)

excludeTags

string\[\]

Tags to exclude from the output.

[​](#body-headers)

headers

object

Headers to send with the request. Can be used to send cookies, user-agent, etc.

[​](#body-wait-for)

waitFor

integer

default: 0

Specify a delay in milliseconds before fetching the content, allowing the page sufficient time to load.

[​](#body-mobile)

mobile

boolean

default: false

Set to true if you want to emulate scraping from a mobile device. Useful for testing responsive pages and taking mobile screenshots.

[​](#body-skip-tls-verification)

skipTlsVerification

boolean

default: false

Skip TLS certificate verification when making requests

[​](#body-timeout)

timeout

integer

default: 30000

Timeout in milliseconds for the request

[​](#body-extract)

extract

object

Extract object

Show child attributes

[​](#body-extract-schema)

extract.schema

object

The schema to use for the extraction (Optional)

[​](#body-extract-system-prompt)

extract.systemPrompt

string

The system prompt to use for the extraction (Optional)

[​](#body-extract-prompt)

extract.prompt

string

The prompt to use for the extraction without a schema (Optional)

[​](#body-actions)

actions

object\[\]

Actions to perform on the page before grabbing the content

*   Wait
*   Screenshot
*   Click
*   Write text
*   Press a key
*   Scroll
*   Scrape
*   Execute JavaScript

Show child attributes

[​](#body-actions-type)

actions.type

enum<string>

required

Wait for a specified amount of milliseconds

Available options:

`wait`

[​](#body-actions-milliseconds)

actions.milliseconds

integer

Number of milliseconds to wait

Required range: `x > 1`

[​](#body-actions-selector)

actions.selector

string

Query selector to find the element by

[​](#body-location)

location

object

Location settings for the request. When specified, this will use an appropriate proxy if available and emulate the corresponding language and timezone settings. Defaults to 'US' if not specified.

Show child attributes

[​](#body-location-country)

location.country

string

default: US

ISO 3166-1 alpha-2 country code (e.g., 'US', 'AU', 'DE', 'JP')

[​](#body-location-languages)

location.languages

string\[\]

Preferred languages and locales for the request in order of priority. Defaults to the language of the specified location. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language

[​](#body-remove-base64-images)

removeBase64Images

boolean

Removes all base 64 images from the output, which may be overwhelmingly long. The image's alt text remains in the output, but the URL is replaced with a placeholder.

[​](#body-ignore-invalid-urls)

ignoreInvalidURLs

boolean

default: false

If invalid URLs are specified in the urls array, they will be ignored. Instead of them failing the entire request, a batch scrape using the remaining valid URLs will be created, and the invalid URLs will be returned in the invalidURLs field of the response.

#### Response

200 - application/json

[​](#response-success)

success

boolean

[​](#response-id)

id

string

[​](#response-url)

url

string

[​](#response-invalid-urls)

invalidURLs

string\[\] | null

If ignoreInvalidURLs is true, this is an array containing the invalid URLs that were specified in the request. If there were no invalid URLs, this will be an empty array. If ignoreInvalidURLs is false, this field will be undefined.

[Map](/api-reference/endpoint/map)
[Get Batch Scrape Status](/api-reference/endpoint/batch-scrape-get)

---

# Dify | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Integrations

Dify

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#sync-data-from-websites-for-dify-workflows)

Sync Data from Websites for Dify workflows
----------------------------------------------------------------------------------------------

Firecrawl can be used inside of [Dify the LLM workflow builder](https://cloud.dify.ai/)
. This page introduces how to scrape data from a web page, parse it into Markdown, and import it into the Dify knowledge base using their Firecrawl integration.

### 

[​](#configuring-firecrawl)

Configuring Firecrawl

First, you need to configure Firecrawl credentials in the Data Source section of the Settings page.

Log in to your Firecrawl account and get your API Key, and then enter and save it in Dify.

### 

[​](#scrape-target-webpage)

Scrape target webpage

Now comes the fun part, scraping and crawling. On the knowledge base creation page, select Sync from website and enter the URL to be scraped.

The configuration options include: Whether to crawl sub-pages, Page crawling limit, Page scraping max depth, Excluded paths, Include only paths, and Content extraction scope. After completing the configuration, click Run to preview the parsed pages.

### 

[​](#review-import-results)

Review import results

After importing the parsed text from the webpage, it is stored in the knowledge base documents. View the import results and click Add URL to continue importing new web pages.

[CrewAI](/integrations/crewai)
[Flowise](/integrations/flowise)

On this page

*   [Sync Data from Websites for Dify workflows](#sync-data-from-websites-for-dify-workflows)
    
*   [Configuring Firecrawl](#configuring-firecrawl)
    
*   [Scrape target webpage](#scrape-target-webpage)
    
*   [Review import results](#review-import-results)

---

# Flowise | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Integrations

Flowise

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#sync-web-data-in-flowise-workflows)

Sync web data in Flowise workflows
------------------------------------------------------------------------------

Firecrawl can be used inside of [Flowise the Chatflow builder](https://flowiseai.com/)
. This page introduces how to configure and use a Firecrawl block inside of Flowise.

### 

[​](#crawling-with-firecrawl-blocks)

Crawling with Firecrawl blocks

1.  Log in to your Firecrawl account and get your API Key, and then enter it on the block.
2.  (Optional) Connect Text Splitter.
3.  Select the crawl mode to pick up a crawl pages below the target url.
4.  Input target URL to be crawled.
5.  Use the resulting documents in your workflows.

### 

[​](#scraping-with-firecrawl-blocks)

Scraping with Firecrawl blocks

1.  Log in to your Firecrawl account and get your API Key, and then enter it on the block.
2.  (Optional) Connect Text Splitter.
3.  Select the scrape mode to pick up a single page.
4.  Input target URL to be scraped.
5.  Use the resulting documents in your workflows.

[Dify](/integrations/dify)
[Langflow](/integrations/langflow)

On this page

*   [Sync web data in Flowise workflows](#sync-web-data-in-flowise-workflows)
    
*   [Crawling with Firecrawl blocks](#crawling-with-firecrawl-blocks)
    
*   [Scraping with Firecrawl blocks](#scraping-with-firecrawl-blocks)

---

# Firecrawl Docs

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Endpoints

Get Batch Scrape Status

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

GET

/

batch

/

scrape

/

{id}

Send

Authorization

Authorization

string

\*

Bearer

Authorization

Required

string

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

Path

id

string

\*

id

Required

string

The ID of the batch scrape job

#### Authorizations

[​](#authorization-authorization)

Authorization

string

headerrequired

Bearer authentication header of the form `Bearer <token>`, where `<token>` is your auth token.

#### Path Parameters

[​](#parameter-id)

id

string

required

The ID of the batch scrape job

#### Response

200 - application/json

[​](#response-status)

status

string

The current status of the batch scrape. Can be `scraping`, `completed`, or `failed`.

[​](#response-total)

total

integer

The total number of pages that were attempted to be scraped.

[​](#response-completed)

completed

integer

The number of pages that have been successfully scraped.

[​](#response-credits-used)

creditsUsed

integer

The number of credits used for the batch scrape.

[​](#response-expires-at)

expiresAt

string

The date and time when the batch scrape will expire.

[​](#response-next)

next

string | null

The URL to retrieve the next 10MB of data. Returned if the batch scrape is not completed or if the response is larger than 10MB.

[​](#response-data)

data

object\[\]

The data of the batch scrape.

Show child attributes

[​](#response-data-markdown)

data.markdown

string

[​](#response-data-html)

data.html

string | null

HTML version of the content on page if `includeHtml` is true

[​](#response-data-raw-html)

data.rawHtml

string | null

Raw HTML content of the page if `includeRawHtml` is true

[​](#response-data-links)

data.links

string\[\]

List of links on the page if `includeLinks` is true

[​](#response-data-screenshot)

data.screenshot

string | null

Screenshot of the page if `includeScreenshot` is true

[​](#response-data-metadata)

data.metadata

object

Show child attributes

[​](#response-data-metadata-title)

data.metadata.title

string

[​](#response-data-metadata-description)

data.metadata.description

string

[​](#response-data-metadata-language)

data.metadata.language

string | null

[​](#response-data-metadata-source-url)

data.metadata.sourceURL

string

[​](#response-data-metadata-any-other-metadata)

data.metadata.<any other metadata>

string

[​](#response-data-metadata-status-code)

data.metadata.statusCode

integer

The status code of the page

[​](#response-data-metadata-error)

data.metadata.error

string | null

The error message of the page

[Batch Scrape](/api-reference/endpoint/batch-scrape)

---

# Langflow | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Integrations

Langflow

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#sync-web-data-in-langflow-workflows)

Sync web data in Langflow workflows
--------------------------------------------------------------------------------

Firecrawl can be used inside of [Langflow, the AI workflow builder](https://www.langflow.org/)
. This page introduces how to configure and use a Firecrawl block inside of Langflow.

### 

[​](#scraping-with-firecrawl-blocks)

Scraping with Firecrawl blocks

1.  Log in to your Firecrawl account and get your API Key, and then enter it on the block or pass it in from another part of the workflow.
2.  (Optional) Connect Text Splitter.
3.  Select the scrape mode to pick up a single page.
4.  Input target URL to be scraped or pass it in from another part of the workflow.
5.  Set up any Page Options and Extractor Options depending on what website and data you are trying to get. You can also pass these in from another part of the workflow.
6.  Use the data in your workflows.

[Flowise](/integrations/flowise)
[Camel AI](/integrations/camelai)

On this page

*   [Sync web data in Langflow workflows](#sync-web-data-in-langflow-workflows)
    
*   [Scraping with Firecrawl blocks](#scraping-with-firecrawl-blocks)

---

# Camel AI | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Integrations

Camel AI

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#installation)

Installation
----------------------------------

    pip install camel-ai
    
    

[​](#usage)

Usage
--------------------

With Camel AI and Firecrawl you can quickly build multi-agent systems than use data from the web.

### 

[​](#using-firecrawl-to-gather-an-entire-website)

Using Firecrawl to Gather an Entire Website

    mock_app = MockFirecrawlApp.return_value
    firecrawl = Firecrawl(
        api_key='FC_API_KEY', api_url='https://api.test.com'
    )
    url = 'https://example.com'
    response = [{'markdown': 'Markdown content'}]
    mock_app.crawl_url.return_value = respons
    result = firecrawl.markdown_crawl(url)
    

### 

[​](#using-firecrawl-to-gather-a-single-page)

Using Firecrawl to Gather a Single Page

    mock_app = MockFirecrawlApp.return_value
    firecrawl = Firecrawl(
        api_key='test_api_key', api_url='https://api.test.com'
    )
    url = 'https://example.com'
    response = 'Scraped content'
    mock_app.scrape_url.return_value = response
    
    result = firecrawl.scrape(url)
    

[Langflow](/integrations/langflow)
[Open Source vs Cloud](/contributing/open-source-or-cloud)

On this page

*   [Installation](#installation)
    
*   [Usage](#usage)
    
*   [Using Firecrawl to Gather an Entire Website](#using-firecrawl-to-gather-an-entire-website)
    
*   [Using Firecrawl to Gather a Single Page](#using-firecrawl-to-gather-a-single-page)

---

# Open Source vs Cloud | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Contributing

Open Source vs Cloud

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

Firecrawl is open source available under the [AGPL-3.0 license](https://github.com/mendableai/firecrawl/blob/main/LICENSE)
.

To deliver the best possible product, we offer a hosted version of Firecrawl alongside our open-source offering. The cloud solution allows us to continuously innovate and maintain a high-quality, sustainable service for all users.

Firecrawl Cloud is available at [firecrawl.dev](https://firecrawl.dev)
 and offers a range of features that are not available in the open source version:

[Camel AI](/integrations/camelai)
[Running locally](/contributing/guide)

---

# Running locally | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Contributing

Running locally

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

Welcome to [Firecrawl](https://firecrawl.dev)
 🔥! Here are some instructions on how to get the project locally so you can run it on your own and contribute.

If you’re contributing, note that the process is similar to other open-source repos, i.e., fork Firecrawl, make changes, run tests, PR.

If you have any questions or would like help getting on board, join our Discord community [here](https://discord.gg/gSmWdAkdwd)
 for more information or submit an issue on Github [here](https://github.com/mendableai/firecrawl/issues/new/choose)
!

[​](#running-the-project-locally)

Running the project locally
----------------------------------------------------------------

First, start by installing dependencies:

1.  node.js [instructions](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
    
2.  pnpm [instructions](https://pnpm.io/installation)
    
3.  redis [instructions](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/)
    

Set environment variables in a `.env` file in the `/apps/api/` directory. You can copy over the template in `.env.example`.

To start, we won’t set up authentication, or any optional sub services (pdf parsing, JS blocking support, AI features)

    # ./apps/api/.env
    
    # ===== Required ENVS ======
    NUM_WORKERS_PER_QUEUE=8 
    PORT=3002
    HOST=0.0.0.0
    
    #for self-hosting using docker, use redis://redis:6379. For running locally, use redis://localhost:6379
    REDIS_URL=redis://localhost:6379
    
    #for self-hosting using docker, use redis://redis:6379. For running locally, use redis://localhost:6379
    REDIS_RATE_LIMIT_URL=redis://localhost:6379 
    PLAYWRIGHT_MICROSERVICE_URL=http://playwright-service:3000/html
    
    ## To turn on DB authentication, you need to set up supabase.
    USE_DB_AUTHENTICATION=false
    
    # ===== Optional ENVS ======
    
    # Supabase Setup (used to support DB authentication, advanced logging, etc.)
    SUPABASE_ANON_TOKEN= 
    SUPABASE_URL= 
    SUPABASE_SERVICE_TOKEN=
    
    # Other Optionals
    # use if you've set up authentication and want to test with a real API key
    TEST_API_KEY=
    # set if you'd like to test the scraping rate limit
    RATE_LIMIT_TEST_API_KEY_SCRAPE=
    # set if you'd like to test the crawling rate limit
    RATE_LIMIT_TEST_API_KEY_CRAWL=
    # set if you'd like to use scraping Be to handle JS blocking
    SCRAPING_BEE_API_KEY=
    # add for LLM dependednt features (image alt generation, etc.)
    OPENAI_API_KEY=
    BULL_AUTH_KEY=@
    # use if you're configuring basic logging with logtail
    LOGTAIL_KEY=
    # set if you have a llamaparse key you'd like to use to parse pdfs
    LLAMAPARSE_API_KEY=
    # set if you'd like to send slack server health status messages
    SLACK_WEBHOOK_URL=
    # set if you'd like to send posthog events like job logs
    POSTHOG_API_KEY=
    # set if you'd like to send posthog events like job logs
    POSTHOG_HOST=
    
    # set if you'd like to use the fire engine closed beta
    FIRE_ENGINE_BETA_URL=
    
    # Proxy Settings for Playwright (Alternative you can can use a proxy service like oxylabs, which rotates IPs for you on every request)
    PROXY_SERVER=
    PROXY_USERNAME=
    PROXY_PASSWORD=
    # set if you'd like to block media requests to save proxy bandwidth
    BLOCK_MEDIA=
    
    # Set this to the URL of your webhook when using the self-hosted version of FireCrawl
    SELF_HOSTED_WEBHOOK_URL=
    
    # Resend API Key for transactional emails
    RESEND_API_KEY=
    
    # LOGGING_LEVEL determines the verbosity of logs that the system will output.
    # Available levels are:
    # NONE - No logs will be output.
    # ERROR - For logging error messages that indicate a failure in a specific operation.
    # WARN - For logging potentially harmful situations that are not necessarily errors.
    # INFO - For logging informational messages that highlight the progress of the application.
    # DEBUG - For logging detailed information on the flow through the system, primarily used for debugging.
    # TRACE - For logging more detailed information than the DEBUG level.
    # Set LOGGING_LEVEL to one of the above options to control logging output.
    LOGGING_LEVEL=INFO
    

### 

[​](#installing-dependencies)

Installing dependencies

First, install the dependencies using pnpm.

    # cd apps/api # to make sure you're in the right folder
    pnpm install # make sure you have pnpm version 9+!
    

### 

[​](#running-the-project)

Running the project

You’re going to need to open 3 terminals for running the services. Here is [a video guide accurate as of Oct 2024](https://youtu.be/LHqg5QNI4UY)
 (optional: 4 terminals for running the services and testing).

### 

[​](#terminal-1-setting-up-redis)

Terminal 1 - setting up redis

Run the command anywhere within your project

    redis-server
    

### 

[​](#terminal-2-setting-up-workers)

Terminal 2 - setting up workers

Now, navigate to the apps/api/ directory and run:

    pnpm run workers
    # if you are going to use the [llm-extract feature](https://github.com/mendableai/firecrawl/pull/586/), you should also export OPENAI_API_KEY=sk-______
    

This will start the workers who are responsible for processing crawl jobs.

### 

[​](#terminal-3-setting-up-the-main-server)

Terminal 3 - setting up the main server

To do this, navigate to the apps/api/ directory. If you haven’t installed pnpm already, you can do so here: [https://pnpm.io/installation](https://pnpm.io/installation)

Next, run your server with:

    pnpm run start
    

### 

[​](#optional-terminal-4-sending-our-first-request)

_(Optional)_ Terminal 4 - sending our first request

Alright, now let’s send our first request.

    curl -X GET http://localhost:3002/test
    

This should return the response Hello, world!

If you’d like to test the crawl endpoint, you can run this

    curl -X POST http://localhost:3002/v0/crawl \
        -H 'Content-Type: application/json' \
        -d '{
          "url": "https://docs.firecrawl.dev"
        }'
    

[​](#tests)

Tests:
---------------------

The best way to do this is run the test with `npm run test:local-no-auth` if you’d like to run the tests without authentication.

If you’d like to run the tests with authentication, run `npm run test:prod`

[Open Source vs Cloud](/contributing/open-source-or-cloud)
[Self-hosting](/contributing/self-host)

On this page

*   [Running the project locally](#running-the-project-locally)
    
*   [Installing dependencies](#installing-dependencies)
    
*   [Running the project](#running-the-project)
    
*   [Terminal 1 - setting up redis](#terminal-1-setting-up-redis)
    
*   [Terminal 2 - setting up workers](#terminal-2-setting-up-workers)
    
*   [Terminal 3 - setting up the main server](#terminal-3-setting-up-the-main-server)
    
*   [(Optional) Terminal 4 - sending our first request](#optional-terminal-4-sending-our-first-request)
    
*   [Tests:](#tests)

---

# Self-hosting | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Contributing

Self-hosting

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

#### 

[​](#contributor)

Contributor?

Welcome to [Firecrawl](https://firecrawl.dev)
 🔥! Here are some instructions on how to get the project locally so you can run it on your own and contribute.

If you’re contributing, note that the process is similar to other open-source repos, i.e., fork Firecrawl, make changes, run tests, PR.

If you have any questions or would like help getting on board, join our Discord community [here](https://discord.gg/gSmWdAkdwd)
 for more information or submit an issue on Github [here](https://github.com/mendableai/firecrawl/issues/new/choose)
!

[​](#self-hosting-firecrawl)

Self-hosting Firecrawl
------------------------------------------------------

Refer to [SELF\_HOST.md](https://github.com/mendableai/firecrawl/blob/main/SELF_HOST.md)
 for instructions on how to run it locally.

[​](#why)

Why?
-----------------

Self-hosting Firecrawl is particularly beneficial for organizations with stringent security policies that require data to remain within controlled environments. Here are some key reasons to consider self-hosting:

*   **Enhanced Security and Compliance:** By self-hosting, you ensure that all data handling and processing complies with internal and external regulations, keeping sensitive information within your secure infrastructure. Note that Firecrawl is a Mendable product and relies on SOC2 Type2 certification, which means that the platform adheres to high industry standards for managing data security.
*   **Customizable Services:** Self-hosting allows you to tailor the services, such as the Playwright service, to meet specific needs or handle particular use cases that may not be supported by the standard cloud offering.
*   **Learning and Community Contribution:** By setting up and maintaining your own instance, you gain a deeper understanding of how Firecrawl works, which can also lead to more meaningful contributions to the project.

### 

[​](#considerations)

Considerations

However, there are some limitations and additional responsibilities to be aware of:

1.  **Limited Access to Fire-engine:** Currently, self-hosted instances of Firecrawl do not have access to Fire-engine, which includes advanced features for handling IP blocks, robot detection mechanisms, and more. This means that while you can manage basic scraping tasks, more complex scenarios might require additional configuration or might not be supported.
2.  **Manual Configuration Required:** If you need to use scraping methods beyond the basic fetch and Playwright options, you will need to manually configure these in the `.env` file. This requires a deeper understanding of the technologies and might involve more setup time.

Self-hosting Firecrawl is ideal for those who need full control over their scraping and data processing environments but comes with the trade-off of additional maintenance and configuration efforts.

[​](#steps)

Steps
--------------------

1.  First, start by installing the dependencies

*   Docker [instructions](https://docs.docker.com/get-docker/)
    

2.  Set environment variables

Create an `.env` in the root directory you can copy over the template in `apps/api/.env.example`

To start, we wont set up authentication, or any optional sub services (pdf parsing, JS blocking support, AI features)

    # .env
    
    # ===== Required ENVS ======
    NUM_WORKERS_PER_QUEUE=8 
    PORT=3002
    HOST=0.0.0.0
    
    #for self-hosting using docker, use redis://redis:6379. For running locally, use redis://localhost:6379
    REDIS_URL=redis://redis:6379
    
    #for self-hosting using docker, use redis://redis:6379. For running locally, use redis://localhost:6379
    REDIS_RATE_LIMIT_URL=redis://redis:6379 
    PLAYWRIGHT_MICROSERVICE_URL=http://playwright-service:3000/html
    
    ## To turn on DB authentication, you need to set up supabase.
    USE_DB_AUTHENTICATION=false
    
    # ===== Optional ENVS ======
    
    # Supabase Setup (used to support DB authentication, advanced logging, etc.)
    SUPABASE_ANON_TOKEN= 
    SUPABASE_URL= 
    SUPABASE_SERVICE_TOKEN=
    
    # Other Optionals
    # use if you've set up authentication and want to test with a real API key
    TEST_API_KEY=
    # set if you'd like to test the scraping rate limit
    RATE_LIMIT_TEST_API_KEY_SCRAPE=
    # set if you'd like to test the crawling rate limit
    RATE_LIMIT_TEST_API_KEY_CRAWL=
    # set if you'd like to use scraping Be to handle JS blocking
    SCRAPING_BEE_API_KEY=
    # add for LLM dependednt features (image alt generation, etc.)
    OPENAI_API_KEY=
    BULL_AUTH_KEY=@
    # use if you're configuring basic logging with logtail
    LOGTAIL_KEY=
    # set if you have a llamaparse key you'd like to use to parse pdfs
    LLAMAPARSE_API_KEY=
    # set if you'd like to send slack server health status messages
    SLACK_WEBHOOK_URL=
    # set if you'd like to send posthog events like job logs
    POSTHOG_API_KEY=
    # set if you'd like to send posthog events like job logs
    POSTHOG_HOST=
    
    # set if you'd like to use the fire engine closed beta
    FIRE_ENGINE_BETA_URL=
    
    # Proxy Settings for Playwright (Alternative you can can use a proxy service like oxylabs, which rotates IPs for you on every request)
    PROXY_SERVER=
    PROXY_USERNAME=
    PROXY_PASSWORD=
    # set if you'd like to block media requests to save proxy bandwidth
    BLOCK_MEDIA=
    
    # Set this to the URL of your webhook when using the self-hosted version of FireCrawl
    SELF_HOSTED_WEBHOOK_URL=
    
    # Resend API Key for transactional emails
    RESEND_API_KEY=
    
    # LOGGING_LEVEL determines the verbosity of logs that the system will output.
    # Available levels are:
    # NONE - No logs will be output.
    # ERROR - For logging error messages that indicate a failure in a specific operation.
    # WARN - For logging potentially harmful situations that are not necessarily errors.
    # INFO - For logging informational messages that highlight the progress of the application.
    # DEBUG - For logging detailed information on the flow through the system, primarily used for debugging.
    # TRACE - For logging more detailed information than the DEBUG level.
    # Set LOGGING_LEVEL to one of the above options to control logging output.
    LOGGING_LEVEL=INFO
    

3.  _(Optional) Running with TypeScript Playwright Service_
    
    *   Update the `docker-compose.yml` file to change the Playwright service:
        
                build: apps/playwright-service
            
        
        TO
        
                build: apps/playwright-service-ts
            
        
    *   Set the `PLAYWRIGHT_MICROSERVICE_URL` in your `.env` file:
        
            PLAYWRIGHT_MICROSERVICE_URL=http://localhost:3000/scrape
            
        
    *   Don’t forget to set the proxy server in your `.env` file as needed.
        
4.  Build and run the Docker containers:
    
        docker compose build
        docker compose up
        
    

This will run a local instance of Firecrawl which can be accessed at `http://localhost:3002`.

You should be able to see the Bull Queue Manager UI on `http://localhost:3002/admin/@/queues`.

5.  _(Optional)_ Test the API

If you’d like to test the crawl endpoint, you can run this:

    curl -X POST http://localhost:3002/v0/crawl \
        -H 'Content-Type: application/json' \
        -d '{
          "url": "https://docs.firecrawl.dev"
        }'
    

[​](#troubleshooting)

Troubleshooting
----------------------------------------

This section provides solutions to common issues you might encounter while setting up or running your self-hosted instance of Firecrawl.

### 

[​](#supabase-client-is-not-configured)

Supabase client is not configured

**Symptom:**

    [YYYY-MM-DDTHH:MM:SS.SSSz]ERROR - Attempted to access Supabase client when it's not configured.
    [YYYY-MM-DDTHH:MM:SS.SSSz]ERROR - Error inserting scrape event: Error: Supabase client is not configured.
    

**Explanation:** This error occurs because the Supabase client setup is not completed. You should be able to scrape and crawl with no problems. Right now it’s not possible to configure Supabase in self-hosted instances.

### 

[​](#you-re-bypassing-authentication)

You’re bypassing authentication

**Symptom:**

    [YYYY-MM-DDTHH:MM:SS.SSSz]WARN - You're bypassing authentication
    

**Explanation:** This error occurs because the Supabase client setup is not completed. You should be able to scrape and crawl with no problems. Right now it’s not possible to configure Supabase in self-hosted instances.

### 

[​](#docker-containers-fail-to-start)

Docker containers fail to start

**Symptom:** Docker containers exit unexpectedly or fail to start.

**Solution:** Check the Docker logs for any error messages using the command:

    docker logs [container_name]
    

*   Ensure all required environment variables are set correctly in the .env file.
*   Verify that all Docker services defined in docker-compose.yml are correctly configured and the necessary images are available.

### 

[​](#connection-issues-with-redis)

Connection issues with Redis

**Symptom:** Errors related to connecting to Redis, such as timeouts or “Connection refused”.

**Solution:**

*   Ensure that the Redis service is up and running in your Docker environment.
*   Verify that the REDIS\_URL and REDIS\_RATE\_LIMIT\_URL in your .env file point to the correct Redis instance.
*   Check network settings and firewall rules that may block the connection to the Redis port.

### 

[​](#api-endpoint-does-not-respond)

API endpoint does not respond

**Symptom:** API requests to the Firecrawl instance timeout or return no response.

**Solution:**

*   Ensure that the Firecrawl service is running by checking the Docker container status.
*   Verify that the PORT and HOST settings in your .env file are correct and that no other service is using the same port.
*   Check the network configuration to ensure that the host is accessible from the client making the API request.

By addressing these common issues, you can ensure a smoother setup and operation of your self-hosted Firecrawl instance.

[​](#install-firecrawl-on-a-kubernetes-cluster-simple-version)

Install Firecrawl on a Kubernetes Cluster (Simple Version)
----------------------------------------------------------------------------------------------------------------------------

Read the [examples/kubernetes-cluster-install/README.md](https://github.com/mendableai/firecrawl/blob/main/examples/kubernetes-cluster-install/README.md)
 for instructions on how to install Firecrawl on a Kubernetes Cluster.

[Running locally](/contributing/guide)

On this page

*   [Contributor?](#contributor)
    
*   [Self-hosting Firecrawl](#self-hosting-firecrawl)
    
*   [Why?](#why)
    
*   [Considerations](#considerations)
    
*   [Steps](#steps)
    
*   [Troubleshooting](#troubleshooting)
    
*   [Supabase client is not configured](#supabase-client-is-not-configured)
    
*   [You’re bypassing authentication](#you-re-bypassing-authentication)
    
*   [Docker containers fail to start](#docker-containers-fail-to-start)
    
*   [Connection issues with Redis](#connection-issues-with-redis)
    
*   [API endpoint does not respond](#api-endpoint-does-not-respond)
    
*   [Install Firecrawl on a Kubernetes Cluster (Simple Version)](#install-firecrawl-on-a-kubernetes-cluster-simple-version)

---

# Batch Scrape | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v1

Search or ask...

Search...

Navigation

Scrape

Batch Scrape

[Documentation](/introduction)
[SDKs](/sdks/overview)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/api-reference/introduction)

[​](#batch-scraping-multiple-urls)

Batch scraping multiple URLs
------------------------------------------------------------------

You can now batch scrape multiple URLs at the same time. It takes the starting URLs and optional parameters as arguments. The params argument allows you to specify additional options for the batch scrape job, such as the output formats.

### 

[​](#how-it-works)

How it works

It is very similar to how the `/crawl` endpoint works. It submits a batch scrape job and returns a job ID to check the status of the batch scrape.

The sdk provides 2 methods, synchronous and asynchronous. The synchronous method will return the results of the batch scrape job, while the asynchronous method will return a job ID that you can use to check the status of the batch scrape.

### 

[​](#usage)

Usage

### 

[​](#response)

Response

If you’re using the sync methods from the SDKs, it will return the results of the batch scrape job. Otherwise, it will return a job ID that you can use to check the status of the batch scrape.

#### 

[​](#synchronous)

Synchronous

Completed

    {
      "status": "completed",
      "total": 36,
      "completed": 36,
      "creditsUsed": 36,
      "expiresAt": "2024-00-00T00:00:00.000Z",
      "next": "https://api.firecrawl.dev/v1/batch/scrape/123-456-789?skip=26",
      "data": [\
        {\
          "markdown": "[Firecrawl Docs home page![light logo](https://mintlify.s3-us-west-1.amazonaws.com/firecrawl/logo/light.svg)!...",\
          "html": "<!DOCTYPE html><html lang=\"en\" class=\"js-focus-visible lg:[--scroll-mt:9.5rem]\" data-js-focus-visible=\"\">...",\
          "metadata": {\
            "title": "Build a 'Chat with website' using Groq Llama 3 | Firecrawl",\
            "language": "en",\
            "sourceURL": "https://docs.firecrawl.dev/learn/rag-llama3",\
            "description": "Learn how to use Firecrawl, Groq Llama 3, and Langchain to build a 'Chat with your website' bot.",\
            "ogLocaleAlternate": [],\
            "statusCode": 200\
          }\
        },\
        ...\
      ]\
    }\
    \
\
#### \
\
[​](#asynchronous)\
\
Asynchronous\
\
You can then use the job ID to check the status of the batch scrape by calling the `/batch/scrape/{id}` endpoint. This endpoint is meant to be used while the job is still running or right after it has completed **as batch scrape jobs expire after 24 hours**.\
\
    {\
      "success": true,\
      "id": "123-456-789",\
      "url": "https://api.firecrawl.dev/v1/batch/scrape/123-456-789"\
    }\
    \
\
[​](#batch-scrape-with-extraction)\
\
Batch scrape with extraction\
------------------------------------------------------------------\
\
You can also use the batch scrape endpoint to extract structured data from the pages. This is useful if you want to get the same structured data from a list of URLs.\
\
### \
\
[​](#response-2)\
\
Response\
\
#### \
\
[​](#synchronous-2)\
\
Synchronous\
\
Completed\
\
    {\
      "status": "completed",\
      "total": 36,\
      "completed": 36,\
      "creditsUsed": 36,\
      "expiresAt": "2024-00-00T00:00:00.000Z",\
      "next": "https://api.firecrawl.dev/v1/batch/scrape/123-456-789?skip=26",\
      "data": [\
        {\
          "extract": {\
            "title": "Build a 'Chat with website' using Groq Llama 3 | Firecrawl",\
            "description": "Learn how to use Firecrawl, Groq Llama 3, and Langchain to build a 'Chat with your website' bot."\
          }\
        },\
        ...\
      ]\
    }\
    \
\
#### \
\
[​](#asynchronous-2)\
\
Asynchronous\
\
    {\
      "success": true,\
      "id": "123-456-789",\
      "url": "https://api.firecrawl.dev/v1/batch/scrape/123-456-789"\
    }\
    \
\
[Scrape](/features/scrape)\
[Crawl](/features/crawl)\
\
On this page\
\
*   [Batch scraping multiple URLs](#batch-scraping-multiple-urls)\
    \
*   [How it works](#how-it-works)\
    \
*   [Usage](#usage)\
    \
*   [Response](#response)\
    \
*   [Synchronous](#synchronous)\
    \
*   [Asynchronous](#asynchronous)\
    \
*   [Batch scrape with extraction](#batch-scrape-with-extraction)\
    \
*   [Response](#response-2)\
    \
*   [Synchronous](#synchronous-2)\
    \
*   [Asynchronous](#asynchronous-2)

---

# Quickstart | Firecrawl

[Firecrawl Docs home page![light logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/light.svg)![dark logo](https://mintlify.s3.us-west-1.amazonaws.com/firecrawl/logo/dark.svg)](https://firecrawl.dev)

v0

Search or ask...

Search...

Navigation

Get Started

Quickstart

[Documentation](/v0/introduction)
[SDKs](/v0/sdks/python)
[Learn](https://www.firecrawl.dev/blog/category/tutorials)
[API Reference](/v0/api-reference/introduction)

[​](#welcome-to-firecrawl)

Welcome to Firecrawl
--------------------------------------------------

[Firecrawl](https://firecrawl.dev?ref=github)
 is an API service that takes a URL, crawls it, and converts it into clean markdown. We crawl all accessible subpages and give you clean markdown for each. No sitemap required.

[​](#how-to-use-it)

How to use it?
-------------------------------------

We provide an easy to use API with our hosted version. You can find the playground and documentation [here](https://firecrawl.dev/playground)
. You can also self host the backend if you’d like.

Check out the following resources to get started:

*   [x]  **API**: [Documentation](https://docs.firecrawl.dev/api-reference/introduction)
    
*   [x]  **SDKs**: [Python](https://docs.firecrawl.dev/sdks/python)
    , [Node](https://docs.firecrawl.dev/sdks/node)
    , [Go](https://docs.firecrawl.dev/sdks/go)
    , [Rust](https://docs.firecrawl.dev/sdks/rust)
    
*   [x]  **LLM Frameworks**: [Langchain (python)](https://python.langchain.com/docs/integrations/document_loaders/firecrawl/)
    , [Langchain (js)](https://js.langchain.com/docs/integrations/document_loaders/web_loaders/firecrawl)
    , [Llama Index](https://docs.llamaindex.ai/en/latest/examples/data_connectors/WebPageDemo/#using-firecrawl-reader)
    , [Crew.ai](https://docs.crewai.com/)
    , [Composio](https://composio.dev/tools/firecrawl/all)
    , [PraisonAI](https://docs.praison.ai/firecrawl/)
    , [Superinterface](https://superinterface.ai/docs/assistants/functions/firecrawl)
    , [Vectorize](https://docs.vectorize.io/integrations/source-connectors/firecrawl)
    
*   [x]  **Low-code Frameworks**: [Dify](https://dify.ai/blog/dify-ai-blog-integrated-with-firecrawl)
    , [Langflow](https://docs.langflow.org/)
    , [Flowise AI](https://docs.flowiseai.com/integrations/langchain/document-loaders/firecrawl)
    , [Cargo](https://docs.getcargo.io/integration/firecrawl)
    , [Pipedream](https://pipedream.com/apps/firecrawl/)
    
*   [x]  **Others**: [Zapier](https://zapier.com/apps/firecrawl/integrations)
    , [Pabbly Connect](https://www.pabbly.com/connect/integrations/firecrawl/)
    
*   [ ]  Want an SDK or Integration? Let us know by opening an issue.

**Self-host:** To self-host refer to guide [here](/contributing/self-host)
.

### 

[​](#api-key)

API Key

To use the API, you need to sign up on [Firecrawl](https://firecrawl.dev)
 and get an API key.

[​](#crawling)

Crawling
--------------------------

Used to crawl a URL and all accessible subpages. This submits a crawl job and returns a job ID to check the status of the crawl.

### 

[​](#installation)

Installation

### 

[​](#usage)

Usage

If you are not using the sdk or prefer to use webhook or a different polling method, you can set the `wait_until_done` to `false`. This will return a jobId.

For cURL, /crawl will always return a jobId where you can use to check the status of the crawl.

    { "jobId": "1234-5678-9101" }
    

### 

[​](#check-crawl-job)

Check Crawl Job

Used to check the status of a crawl job and get its result.

#### 

[​](#response)

Response

    {
      "status": "completed",
      "current": 22,
      "total": 22,
      "data": [\
        {\
          "content": "Raw Content ",\
          "markdown": "# Markdown Content",\
          "provider": "web-scraper",\
          "metadata": {\
            "title": "Firecrawl | Scrape the web reliably for your LLMs",\
            "description": "AI for CX and Sales",\
            "language": null,\
            "sourceURL": "https://docs.firecrawl.dev/"\
          }\
        }\
      ]
    }
    

[​](#scraping)

Scraping
--------------------------

To scrape a single URL, use the `scrape_url` method. It takes the URL as a parameter and returns the scraped data as a dictionary.

### 

[​](#response-2)

Response

    {
      "success": true,
      "data": {
        "markdown": "<string>",
        "content": "<string>",
        "html": "<string>",
        "rawHtml": "<string>",
        "metadata": {
          "title": "<string>",
          "description": "<string>",
          "language": "<string>",
          "sourceURL": "<string>",
          "<any other metadata> ": "<string>",
          "pageStatusCode": 123,
          "pageError": "<string>"
        },
        "llm_extraction": {},
        "warning": "<string>"
      }
    }
    

[​](#extraction)

Extraction
------------------------------

With LLM extraction, you can easily extract structured data from any URL. We support pydantic schemas to make it easier for you too. Here is how you to use it:

[​](#contributing)

Contributing
----------------------------------

We love contributions! Please read our [contributing guide](https://github.com/mendableai/firecrawl/blob/main/CONTRIBUTING.md)
 before submitting a pull request.

[Advanced Scraping Guide](/v0/advanced-scraping-guide)

On this page

*   [Welcome to Firecrawl](#welcome-to-firecrawl)
    
*   [How to use it?](#how-to-use-it)
    
*   [API Key](#api-key)
    
*   [Crawling](#crawling)
    
*   [Installation](#installation)
    
*   [Usage](#usage)
    
*   [Check Crawl Job](#check-crawl-job)
    
*   [Response](#response)
    
*   [Scraping](#scraping)
    
*   [Response](#response-2)
    
*   [Extraction](#extraction)
    
*   [Contributing](#contributing)

---


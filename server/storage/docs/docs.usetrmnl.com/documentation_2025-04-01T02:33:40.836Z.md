# Table of Contents

- [BYOD | TRMNL API](#byod-trmnl-api)
- [Screen Templating | TRMNL API](#screen-templating-trmnl-api)
- [Introduction | TRMNL API](#introduction-trmnl-api)
- [Screen Templating (Graphics) | TRMNL API](#screen-templating-graphics-trmnl-api)
- [How it Works | TRMNL API](#how-it-works-trmnl-api)
- [Create a screen | TRMNL API](#create-a-screen-trmnl-api)
- [BYOD/S | TRMNL API](#byod-s-trmnl-api)
- [Introduction | TRMNL API](#introduction-trmnl-api)
- [BYOS | TRMNL API](#byos-trmnl-api)
- [Plugin Creation | TRMNL API](#plugin-creation-trmnl-api)
- [Fetch Screen Content | TRMNL API](#fetch-screen-content-trmnl-api)
- [Overview | TRMNL API](#overview-trmnl-api)
- [Getting Started | TRMNL API](#getting-started-trmnl-api)
- [Going Live | TRMNL API](#going-live-trmnl-api)
- [Plugin Screen Generation Flow | TRMNL API](#plugin-screen-generation-flow-trmnl-api)
- [Plugin Management Flow | TRMNL API](#plugin-management-flow-trmnl-api)
- [Introduction | TRMNL API](#introduction-trmnl-api)
- [Plugin Installation Flow | TRMNL API](#plugin-installation-flow-trmnl-api)
- [Plugin Uninstallation Flow | TRMNL API](#plugin-uninstallation-flow-trmnl-api)
- [Introduction | TRMNL API](#introduction-trmnl-api)
- [Provisioning Devices | TRMNL API](#provisioning-devices-trmnl-api)

---

# BYOD | TRMNL API

Before diving into "how," it's worth mentioning that **the investment required to build your own device will be greater than our retail price**.

Making your own TRMNL from scratch is not an economically rational decision, but rather a labor of love. Our own team learned this the ~hard~ fun way while building v1 over 7 months, from Dec 2023 to July 2024.

Here's what you can expect to spend per component:

*   Battery, $5 (unnecessary if you prefer plugged in)
    
*   EPD screen, $65 (see the Waveshare 7.5" on Amazon)
    
*   Microcontroller, $3-50 (depends if you build/solder yourself or leverage a PCB prototyper)
    
*   Enclosure/case, $3-20 (design + 3D print yourself or use a print farm)
    

If you know what you're doing and just need some firmware or a server client, here ya go:

*   Firmware: [https://github.com/usetrmnl/firmware](https://github.com/usetrmnl/firmware)
    
*   Server (multiple options): [https://docs.usetrmnl.com/go/diy/byos](https://docs.usetrmnl.com/go/diy/byos)
    

When you're ready to build plugins:

1.  Buy access to the TRMNL web app + API: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
    
2.  Activate a virtual device: [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device)
    
3.  Plug your TRMNL API key into your DIY device firmware
    
4.  Stay focused
    

Email team@usetrmnl.com if you have any questions.

### 

[](#hardware-requirements)

Hardware requirements

(_Coming Soon_)

[PreviousIntroduction](/go/diy/introduction)
[NextBYOD/S](/go/diy/byod-s)

Last updated 20 days ago

---

# Screen Templating | TRMNL API

[PreviousHow it Works](/go/how-it-works)
[NextScreen Templating (Graphics)](/go/private-plugins/templates-advanced)

Last updated 2 months ago

[](#overview)

Overview


---------------------------

The TRMNL device is an **800x480 pixel, black and white, 1-bit grayscale display**. This means we had to abandon a lot of modern web styling techniques when developing the API. Learn more about this process [here](https://usetrmnl.com/blog/design-system)
.

For the latest documentation on building beautiful plugins with TRMNL, see our Framework docs:

[https://usetrmnl.com/framework](https://usetrmnl.com/framework)

### 

[](#quickstart-trmnl-account)

Quickstart (TRMNL account)

The easiest way to start building with TRMNL is by [making a Private Plugin](https://usetrmnl.com/plugin_settings?keyname=private_plugin)
 from inside your account. This includes an inline editor, merge variable interpolation, and a live previewer.

### 

[](#quickstart-no-trmnl-account)

Quickstart (no TRMNL account)

Create an HTML file with our plugins CSS + JS embedded in the `<head>`.

The example below has simple markup for a "full" layout plugin. We also offer half vertical, half horizontal, and quadrant sized layouts.

Copy

    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="https://usetrmnl.com/css/latest/plugins.css">
        <script src="https://usetrmnl.com/js/latest/plugins.js"></script>
      </head>
      <body class="environment trmnl">
        <div class="screen">
          <div class="view view--full">
            <div class="layout">
              <div class="columns">
                <div class="column">
                  <div class="markdown">
                    <span class="title">Motivational Quote</span>
                    <div class="content content--center">“I love inside jokes. I hope to be a part of one someday.”</div>
                    <span class="label label--underline">Michael Scott</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="title_bar">
              <img class="image" src="https://usetrmnl.com/images/plugins/trmnl--render.svg" />
              <span class="title">Plugin Title</span>
              <span class="instance">Instance Title</span>
            </div>
          </div>
        </div>
      </body>
    </html>

The above markup should produce a screen like this:

Note: in some cases you may need to include the 'Inter' font (inside the `<head>`) to achieve the same look and feel as TRMNL's in-browser markup editor described above:

Copy

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;350;375;400;450;600;700&display=swap" rel="stylesheet">

### 

[](#customize-and-make-it-dynamic)

Customize and make it dynamic

Use our [Framework Docs](https://usetrmnl.com/framework)
 to enhance your design and show/hide logic (example: [overflow management](https://usetrmnl.com/framework/overflow)
, [number formatting](https://usetrmnl.com/framework/format_value)
).

When you're satisfied with the design, replace dynamic content with `{{ variable }}` references. TRMNL uses the [Liquid templating library](https://shopify.github.io/liquid/)
 by Shopify to interpolate values into your template markup. You can then save

[Tutorial - How to create a custom plugin](https://help.usetrmnl.com/en/articles/9510536-custom-plugins)

**Note**: You may also leverage [Liquid Filters](https://shopify.dev/docs/api/liquid/filters)
 to reduce the sanitization required by the service producing data for your TRMNL plugins. For example, you can convert "10" to "$10.00" via [money\_with\_currency](https://shopify.dev/docs/api/liquid/filters/money)
.

TRMNL markup editor with live preview

Sample screen render with TRMNL's plugin CSS stylesheet

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252F2aFKYZJE2fQtAAzXEEni%252Ftrmnl-markup-editor-live-preview.png%3Falt%3Dmedia%26token%3Dfea59298-8af9-4d00-826c-43415c352a91&width=768&dpr=4&quality=100&sign=d1ab9936&sv=2)

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252FuxMoLtQGfTtk8jos7ScY%252Fcustom-plugin-quickstart-example-0.0.5-css.png%3Falt%3Dmedia%26token%3Ded50af5f-59c1-4ddc-b31b-1ad6c541ecff&width=768&dpr=4&quality=100&sign=d3113bfd&sv=2)

---

# Introduction | TRMNL API

There are 4 flavors to building the perfect setup for your needs:

1.  **Default** - buy our device, that runs our firmware, and pings our server
    
2.  **BYOD** - build your own device, that runs our firmware, and pings our server
    
3.  **BYOD/S** - build your own device, mod our firmware, and ping your own server
    
4.  **BYOS** - buy our device, mod our firmware, and ping your own server (_recommended_)
    

### 

[](#choosing-your-stack)

Choosing your stack

After starting TRMNL and going down the rabbit hole of DIY smart home, IoT, e-ink, and gadget communities, it became clear that end-to-end ownership, security, and data privacy are critical ingredients to building trust.

With this in mind we decided to [open source our firmware](https://github.com/usetrmnl/firmware)
 and provide [free guides](https://www.youtube.com/watch?v=3xehPW-PCOM)
 to reproduce the TRMNL experience _without_ our servers in the middle.

When considering how to build your own e-ink dashboard, it is our opinion that...

*   If you're not comfortable with coding, Option #1 is ideal.
    
*   If you're comfortable with high-level programming languages, Option #4 provides an 80/20 approach to privacy + security without breaking the bank or spending hours coding.
    
*   If you have experience in C/C++, or have experience with micro controllers and Python, Option #2 will give you the pride of full control over the look and feel of your peripheral device.
    
*   If you are a l33t programmer or simply have access to AI (half joking), Option #3 is the most comprehensive offering to customize TRMNL however you'd like.
    

### 

[](#prerequisites)

Prerequisites

Options 1, 3, and 4 are available to all customers for no extra charge.

Option 2 requires a small monthly fee to cover your compute time on our servers, since we don't make any revenue on a device sale.

### 

[](#next-steps)

Next steps

Once you've determined the best setup for your needs, find the relevant guide on the left underneath "DIY TRMNL."

[PreviousCreate a screen](/go/private-plugins/create-a-screen)
[NextBYOD](/go/diy/byod)

Last updated 2 months ago

---

# Screen Templating (Graphics) | TRMNL API

[](#overview)

Overview


---------------------------

The TRMNL design system is actively improving to suit the needs of our [growing plugin directory](https://usetrmnl.com/integrations)
 and requests from developers like you.

As we extend [native components](https://usetrmnl.com/framework)
, you are welcome to provide in-line styling to plugin markup to achieve your desired effect.

You may also included 3rd party libraries, for example [Highcharts](https://www.highcharts.com/)
, to create data visualizations like charts and graphs.

[](#quickstart)

Quickstart


-------------------------------

Here's some example Markup content that will render an _ugly_ line chart:

Copy

    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartkick@5.0.1/dist/chartkick.min.js"></script><div class="screen">
    
    <div class="layout">
      <div id="container">
      </div>
    </div>
    <script>
    Highcharts.chart("container", {
        title: {
            text: "Chart demo"
        },
        credits: { enabled: false },
        xAxis: {
            tickInterval: 1,
            type: "logarithmic"
        },
        yAxis: {
            type: "logarithmic",
            minorTickInterval: 0.1,
        },
        tooltip: {
            headerFormat: "<b>{series.name}</b><br />",
            pointFormat: "x = {point.x}, y = {point.y}"
        },
        series: [{\
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],\
            pointStart: 1\
        }]
    });
    </script>

If this is saved into a [Private Plugin](https://usetrmnl.com/plugin_settings?keyname=private_plugin)
 > Markup field, the following screen will be rendered:

As you can see, this isn't pretty (yet).

Here's another line chart with TRMNL-friendly styling:

Get all the code + learn how to do this here: [https://usetrmnl.com/framework/chart](https://usetrmnl.com/framework/chart)

[](#more-charts-and-graphs)

More Charts and Graphs


-------------------------------------------------------

Our [Framework docs](https://usetrmnl.com/framework)
 are the best place for the latest examples and tips to improve the look and feel of graphical embeds from 3rd party tools like Highcharts.

[PreviousScreen Templating](/go/private-plugins/templates)
[NextCreate a screen](/go/private-plugins/create-a-screen)

Last updated 4 months ago

Un-styled chart example

Styled line chart example

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252F2Yi2cWKvqTF4D9sN7TE1%252Fchart-example.bmp%3Falt%3Dmedia%26token%3D9ea90553-02d3-466d-ba6a-96bb03f92f50&width=768&dpr=4&quality=100&sign=7ae1675f&sv=2)

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252FUhsBFE2IvkII3tpgMPRS%252Ftrmnl-line-chart-example.png%3Falt%3Dmedia%26token%3Da9bac52f-9b2c-4ff3-ac94-c67b9963d98e&width=768&dpr=4&quality=100&sign=f081d48e&sv=2)

---

# How it Works | TRMNL API

[PreviousOverview](/go)
[NextScreen Templating](/go/private-plugins/templates)

Last updated 8 months ago

The TRMNL **web server** hosts a growing directory of [native plugins](https://usetrmnl.com/integrations)
 and API endpoints + templating engine for **custom plugins**, managed directly by customers. Learn to build a custom plugin [here](https://help.usetrmnl.com/en/articles/9510536-custom-plugins)
.

The TRMNL **device** is a custom PCB featuring an ESP32-C3 microcontroller, 1800-2500 mAh battery, and 7.5" EPD screen housed in injection-molded ABS soft touch plastic. Customers may disassemble their device, mod their firmware, and retrieve their API keys (_or pay a small one-time fee to unlock the Developer add-on_) without impacting our [Terms of Service](https://usetrmnl.com/terms)
.

TRMNL **firmware** supports automatic OTA (over the air) updates to WiFi-connected devices and is [open source](https://github.com/usetrmnl/firmware)
. Here's how it works:

1.  TRMNL device wakes up and sends request to web server for displayable content every _n_ period\*
    
2.  TRMNL web server generates a single-use, 1-bit, bitmap image (800x480 pixels). Response JSON includes a link to this image and timing instructions for the next "refresh" request.
    
3.  TRMNL device renders the content, then goes to sleep for the instructed amount of time.
    

\* "Displayable content" is the most recently created screen, in order of priority according to the [Playlists](https://usetrmnl.com/playlists)
 interface. "N" is a value in minutes, configurable by customers from the [Devices > Edit](https://usetrmnl.com/devices/)
 web interface.

[](#opinionated-device-less-than-greater-than-server-relationship)

Opinionated device <> server relationship


-----------------------------------------------------------------------------------------------------------------

Most IoT products support SSH-ing directly into peripheral devices. We've heard too many horror stories about how this can go wrong, and decided to invert the paradigm.

**Your TRMNL device pings our server, never the other way around**.

Each request made to our `/api/display` endpoint includes only the minimum details needed to support customers -- an API key, device mac address, firmware version, battery voltage, and wifi signal strength.

**We do not collect any footprint of your location or identity**, such as IP address or WiFi configuration. The SSID and password for your local network are stored only on your TRMNL device.

When the TRMNL web server responds to a device's request we include only a few fields. These include "update\_firmware" (true/false), a direct download link to the firmware's \[public\] binary package, and whether the device should be reset. Customers may reset their device to transfer ownership or safely destroy data from their web account.

**TRMNL does not store rendered content over time.**

Whenever the web server generates a new bitmap image, it replaces the previous image. This keeps our costs low, allowing us to provide perpetual service without subscription fees. This also protects users, because we only have access to the most recent screen rendered for each of your plugins.

Device, Server, Native Plugins, 3rd Party Developer, Firmware Components

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252Fm3L3FfIrP81iWwuv3kwf%252FTRMNL%2520architecture%2520overview.png%3Falt%3Dmedia%26token%3Dd3406dbb-1bce-4352-b2cb-6a8c01fa1227&width=768&dpr=4&quality=100&sign=30f0061b&sv=2)

---

# Create a screen | TRMNL API

[PreviousScreen Templating (Graphics)](/go/private-plugins/templates-advanced)
[NextIntroduction](/go/diy/introduction)

Last updated 5 months ago

### 

[](#before-you-begin)

Before you begin

Creating screens requires a Private Plugin instance inside your TRMNL account. This is currently available via the web interface only. Simply navigate to [Plugins > Private Plugin > New](https://usetrmnl.com/plugin_settings/new?keyname=private_plugin)
.

**Only devices with the Developer add-on** may access their own Access Token. You may unlock this feature anytime from your [Devices > Edit](https://usetrmnl.com/devices/)
 page for a one-time fee.e a screen (webhook strategy)

If your private plugin's "Strategy" is set to Webhook, you can provide data to TRMNL's server at any time.

Simply send a `POST` request to the instance's Webhook URL, accessible from the configuration form. The below example updates the Plugin with UUID "asdfqwerty1234" using dynamic values inside a "merge\_variables" node:

Copy

    curl "https://usetrmnl.com/api/custom_plugins/asdfqwerty1234" \
      -H "Content-Type: application/json" \
      -d '{"merge_variables": {"text":"You can do it!", "author": "Rob Schneider"}}' \
      -X POST

The Plugin's UUID value (`asdfqwerty1234` in the example above) will associate your payload with the Markup you already provided when you [created your private plugin](https://help.usetrmnl.com/en/articles/9510536-custom-plugins)
.

To retrieve your Plugin's Webook URL / UUID, visit your private plugin instance. Note that you must "save" (create) the private plugin before a UUID and Webhook URL will be generated.

[](#create-a-screen-polling-strategy)

Create a screen (polling strategy)


-----------------------------------------------------------------------------

If your private plugin's "Strategy" is set to Polling, the TRMNL server will periodically fetch for new data from an endpoint of your choice.

Simply provide a "Polling URL" inside your private webhook instance (web UI), and TRMNL will make a `GET` request to that URL. To test this quickly, we've prepared an endpoint that responds with `text` and `author` key/value pairs, along with a `collection` array for quick demonstration:

[https://usetrmnl.com/custom\_plugin\_example\_data.json](https://usetrmnl.com/custom_plugin_example_data.json)

If your desired polling URL contains a collection/array in the root node, TRMNL will nest it inside a key named "data" for accessibility by the Liquid templating engine. Here is an example of that style payload:

[https://usetrmnl.com/custom\_plugin\_example\_data.json?collection\_only=true](https://usetrmnl.com/custom_plugin_example_data.json?collection_only=true)

**Note**: With the Polling strategy, variables _do not_ need to be nested within a "merge\_variables" node. That is only a requirement for the Webhook strategy.

[](#troubleshooting)

Troubleshooting


-----------------------------------------

For more assistance, see our [Private Plugin Tutorial](https://help.usetrmnl.com/en/articles/9510536-custom-plugins)
 or email team@usetrmnl.com.

Private Plugin Webhook URL w/ UUID

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252FPA9RPoCtwBFaL2kZOSAl%252Ftrmnl-private-plugin-webhook-url.png%3Falt%3Dmedia%26token%3D2a450915-85b6-4b7f-8b14-4458bc446017&width=768&dpr=4&quality=100&sign=38e48cfa&sv=2)

---

# BYOD/S | TRMNL API

In the BYOD/S model, the only TRMNL IP is our [open source firmware](https://github.com/usetrmnl/firmware)
. Technically we don't owe you any explanation to get up and running, but we'll do it anyway. ;)

### 

[](#device-setup)

Device setup

See our [BYOD guide](/go/diy/byod)
 for instructions to build a device that's compatible with our firmware.

### 

[](#server-quickstart)

Server quickstart

The TRMNL web server generates bitmap images. When a device pings our web server, the next-in-queue image is shared as an absolute URL inside a JSON response like this:

Copy

    {
      "image_url"=>"https://trmnl.s3.us-east-2.amazonaws.com/path-to-img.bmp"
    }

You can demo this process from the command line by installing [ImageMagick](https://en.wikipedia.org/wiki/ImageMagick)
, then invoking `convert`:

Copy

    convert regular_img.png -depth 1 eink_compatible.bmp

With this in mind, building your own server simply necessitates creating an endpoint that responds with links to firmware-compatible Bitmap images.

Assuming you've set up a device, simply...

1.  change the base URL to your own server or local network from the WiFi Captive Portal
    
2.  mimic the `api/setup` and `api/display` endpoints to respond per the [firmware readme](https://github.com/usetrmnl/firmware)
    
3.  profit
    

### 

[](#other-infrastructure)

Other infrastructure

In the quickstarter above we glossed over a critical element: "next-in-queue" images.

At TRMNL we use a Playlists table to manage the ordering of plugin instances, so that users can drag/drop different screen content in any sequence they like.

Each item in a device's Playlist is an instance\* of a Plugin, something we call a PluginSetting.

This keeps our Plugins table immutable, for example our Google Calendar record contains just name, icon, etc. But details about an actual connection to Google Calendar are stored inside a PluginSetting record. Keep this in mind as you build your own server -- do you want to allow multiple connections to the same parent plugin?

TRMNL also supports PlaylistGroups. These are parent objects to playlists, and they simply act as buckets to which playlist items should be rendered on a device during any given time period.

This is another feature to consider building on your own implementation, but does not need to be considered at the device or firmware level.

[PreviousBYOD](/go/diy/byod)
[NextBYOS](/go/diy/byos)

Last updated 1 month ago

Drag/Drop Playlists UI

Playlist Groups in action

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252FP6nK1Gac9hUKT9kXB74q%252Ftrmnl-playlist-drag-drop.png%3Falt%3Dmedia%26token%3Dff2808e9-236c-4694-aed4-ad094e09276b&width=768&dpr=4&quality=100&sign=6e482e7e&sv=2)

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252F3FGkPQVG2iwq5fmNWTPc%252Ftrmnl-playlist-group-example.png%3Falt%3Dmedia%26token%3D5fc07605-7537-4a11-a135-72f04e4d81ce&width=768&dpr=4&quality=100&sign=2fe149e2&sv=2)

---

# Introduction | TRMNL API

Our plugin marketplace allows developers to create their own public plugins for other users to install. In the future, the plugin marketplace will enable developers to earn money per install, similar to the Shopify App Marketplace or Google Play Store.

TRMNL's plugin marketplace uses the OAuth2 flow. The plugin owner maintains user data and is responsible for data privacy and security. TRMNL will fetch markup content at regular intervals and generate an image for the connected user's device to display.

[PreviousBYOS](/go/diy/byos)
[NextPlugin Creation](/go/plugin-marketplace/plugin-creation)

Last updated 6 months ago

---

# BYOS | TRMNL API

[PreviousBYOD/S](/go/diy/byod-s)
[NextIntroduction](/go/plugin-marketplace/introduction)

Last updated 8 hours ago

First, purchase a TRMNL from our [home page](https://usetrmnl.com)
.

Next, follow along this 10 minute video to bootstrap your own server client with ~zero coding required.

**Update** following this video's release —

Modifying firmware is no longer required. Simply set a custom base URL from the WiFi Captive Portal while provisioning credentials during Step 2, [here](https://help.usetrmnl.com/en/articles/9416306-how-to-set-up-a-new-device)
.

**Why BYOS?**

TRMNL intends to ensure that **every device is un-brickable and can run with zero external dependencies**.

### 

[](#implementations)

Implementations

We support multiple implementations developed by us and the community at large. The goal isn't for BYOS to match parity with our hosted solution but to provide enough of a pleasant solution for your own customized experience. There are trade offs either way but we've got you covered for whatever path you wish to travel.

**Legend**

Use this legend to understand the matrix of features below.

*   🟢 Supported.
    
*   🟡 Partially supported.
    
*   🔴 Not supported or not implemented.
    
*   ⚫️ Archived with minimal maintenance support.
    
*   ⚪️ Unknown.
    

**Matrix**

Below is a list of all implementations in various languages/frameworks you can use to self-host and manage your devices with:

Implementation

Dashboard

Auto-Provisioning

Devices

JSON Data API

Image Previews

Playlists

Plugins

Recipes

Docker

Maintained

Semantic Versioning

🟢

🟢

🟢

🟢

🟡

🔴

🔴

🔴

🟢

🟢

🟢

🟡

🔴

🟡

🟢

🔴

🔴

🔴

🔴

🟢

⚫️

🟢

🔴

🔴

🟢

🟢

🟢

🟢

🔴

🔴

🔴

🔴

⚪️

🔴

🔴

🔴

🟡

🔴

🔴

🔴

🔴

🔴

🔴

⚪️

🟢

🟢

🟢

🟢

🟢

🟢

🟢

🔴

🟢

🟢

🔴

🟢

🟢

🟢

🟢

🟢

🔴

🔴

🟢

🔴

🟢

⚪️

Here's a more detailed breakdown of each feature:

*   **Dashboard**: Provides a high level overview of information.
    
*   **Auto-Provisioning**: Means that a device can be automatically provisioned once added to your network. This includes the automatic provisioning of new and existing devices.
    
*   **Devices**: Provides device management in terms of updating each device, viewing current image, viewing logs, and more.
    
*   **JSON Data API**: Provides full API support using a JSON Data API for device management, image generation, logging, etc.
    
*   **Image Previews**: Provides a UI for viewing generated images for devices, plugins, recipes, etc.
    
*   **Playlists**: Supports hosted playlist feature.
    
*   **Plugins**: Supports hosted plugins feature.
    
*   **Recipes**: Supports hosted recipes feature.
    
*   **Docker**: Supports Docker for both local development and production deployment.
    
*   **Maintained**: Project is maintained and kept up-to-date on a weekly basis.
    
*   **Semantic Versioning**: Supports [strict semantic versioning](https://alchemists.io/articles/strict_semantic_versioning)
    .
    

### 

[](#api)

API

At a minimum, the following API endpoints should be supported for all BYOS implementations:

#### 

[](#display)

Display

Copy

    curl "http://byos.local/api/display" \
         -H 'ID: <redacted>' \
         -H 'Access-Token: <redacted>' \
         -H 'Accept: application/json' \
         -H 'Content-Type: application/json'

#### 

[](#images)

Images

Copy

    curl -X "POST" "http://byos.local/api/images" \
        -H 'ID: <redacted>' \
        -H 'Access-Token: <redacted>' \
        -H 'Accept: application/json' \
        -H 'Content-Type: application/json' \
        -d $'{
     "image": {
       "content": "<p>Demo</p>"
       "file_name": "demo"
     }
    }'

#### 

[](#logs)

Logs

Copy

    curl "http://byos.local/api/log" \
         -H 'ID: <redacted>' \
         -H 'Access-Token: <redacted>' \
         -H 'Accept: application/json' \
         -H 'Content-Type: application/json'

#### 

[](#setup)

Setup

Copy

    curl "https://byos.local/api/setup/" \
        -H 'ID: <redacted>' \
        -H 'Access-Token: <redacted>' \
        -H 'Accept: application/json' \
        -H 'Content-Type: application/json'
    

💡 For a detailed breakdown of all API endpoints and what they can do, please refer to the [Terminus API Documentation](https://github.com/usetrmnl/byos_hanami?tab=readme-ov-file#apis)
.

(Ruby + Hanami)

(Ruby + Sinatra)

(Elixer + Phoenix)

(Python + Django)

(PHP + Laravel)

(Next.js)

[**TRMNL Terminus**](https://github.com/usetrmnl/byos_hanami)

[**TRMNL**](https://github.com/usetrmnl/byos_sinatra)

[**TRMNL**](https://github.com/usetrmnl/byos_phoenix)

[**Community**](https://github.com/usetrmnl/byos_django)

[**Community**](https://github.com/usetrmnl/byos_laravel)

[**Community**](https://github.com/usetrmnl/byos_next)

BYOS - Open Source TRMNL Project

---

# Plugin Creation | TRMNL API

[PreviousIntroduction](/go/plugin-marketplace/introduction)
[NextPlugin Installation Flow](/go/plugin-marketplace/plugin-installation-flow)

Last updated 6 months ago

You can create a new plugin by visiting the following URL:

Copy

    https://usetrmnl.com/plugins/my/new

You'll have to provide the following information about your plugin.

**Name**: Branded title (if applicable, ex "Vandelay Industries") or brief tag that describes the plugin's functionality

**Description**: Additional text to help differentiate your plugin from others

**Icon**: PNG format preferred

**Installation URL**: Endpoint where TRMNL should trigger the installation flow

**Installation Succes Webhook URL**: Where you want to receive installation success events as a webhook

**Plugin Management URL**: Where TRMNL users can manage their plugins

**Plugin Markup URL:** Endpoint where TRMNL should ping your webserver for markup content

**Uninstallation Webhook URL**: Where you want to receive uninstallation events as a webhook

TRMNL public plugin client

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252F2AF2fhANOr2CbGPbZWd8%252Ftrmnl-plugin-form.png%3Falt%3Dmedia%26token%3D475f08eb-659a-43c9-96b2-2ac86f981e54&width=768&dpr=4&quality=100&sign=14d19b7f&sv=2)

---

# Fetch Screen Content | TRMNL API

First, purchase + set up a TRMNL device.

Alternatively you can pay a small subscription fee for server-only access. With this setup you'll provide your own hardware but have full access to the TRMNL web application for plugin management, content rendering, and all the other features enjoyed by TRMNL device owners. Email support@usetrmnl.com for more information.

Once you have an API Key -- accessible from your [Devices > Edit](https://usetrmnl.com/devices)
 > Developer Perks -- make a request like below. Just replace "xxxxx" with your API key.

Copy

    curl https://usetrmnl.com/api/display --header "access-token:xxxxxx"

This will respond with several fields, for example:

Copy

    {
      "status"=>0, # will be 202 if no user_id is attached to device
      "image_url"=>"https://trmnl.s3.us-east-2.amazonaws.com/path-to-img.bmp",
      "image_name"=>"2024-12-15T00:00:00",
      "update_firmware"=>false,
      "firmware_url"=>nil,
      "refresh_rate"=>"1800",
      "reset_firmware"=>false
    }

The `image_url` is likely the most interesting to you, as this may be leveraged by your own hardware to render content however you see fit.

**Note**: TRMNL devices send a few additional values in the request headers by default, such as your WiFi connection strength (RSSI value), firmware version (ex: 1.3.7), and more.

These atrributes impact the response content by instructing the device to either update firmware, change its refresh rate, and so on. But excluding these values from your request is OK, just be aware that some response values may be nil.

[PreviousIntroduction](/go/private-api/introduction)
[NextIntroduction](/go/partners-api/introduction)

Last updated 5 months ago

---

# Overview | TRMNL API

Last updated 1 month ago

👋

[How it Works](/go/how-it-works)

[Screen Templating](/go/private-plugins/templates)

[DIY TRMNL (Advanced)](/go/diy/introduction)

[Plugin Marketplace](/go/plugin-marketplace/introduction)

[Private API](/go/private-api/introduction)

[Partners API](/go/partners-api/introduction)

---

# Getting Started | TRMNL API

The TRMNL team manually approves each Partner, which involves the following:

1.  basic KYC to ensure our intentions align (_customer delight, not bulk discounts_)
    
2.  program negotiation (net-30 vs on-demand payment terms, optional quotas, etc)
    
3.  testing the Partner's custom plugin end-to-end
    

**KYC** includes determining a Partner point of contact, getting some sense of weekly / monthly device provision volume, and possibly a small deposit.

**Program negotiation** is simple and might look like this: "_Partner wants to award their customers a TRMNL device for 50% off. Partner can generate TRMNL discount codes for 50% off and will pay TRMNL monthly via invoice for the remaining 50%, less a 10% bulk discount._"

**Testing** entails the Partner providing TRMNL a demo user account on the Partner platform, with instructions to set up their custom plugin manually on an existing TRMNL account.

[PreviousIntroduction](/go/partners-api/introduction)
[NextProvisioning Devices](/go/partners-api/provisioning-devices)

Last updated 3 months ago

---

# Going Live | TRMNL API

After building and testing your plugin, copy/paste the following application into an email to team@usetrmnl.com.

Subject:

Copy

    Public plugin submission - {{ plugin name }}

Body:

Copy

    Hi team,
    
    Please review my plugin for the public marketplace:
    
    Plugin ID: {{ visit My Plugins > click Edit, copy integer ID from URL }}
    Owner Email: {{ should == inbox from which you are sending this message }}
    
    Why should this plugin be public vs private? How does it help other users?
    {{ should be different than your Description field. if your plugin is against our ethos (breeds distraction, not focus), it may be better as an open source + Private plugin. }}
    
    Video demonstration:
    {{ link to video, no audio required, of the plugin being installed from scratch. }}
    
    How can we test this plugin works?
    {{ preferably a demo login email/password that we can own forever, ex "team@usetrmnl.com" }}
    
    Will you how promote TRMNL when this plugin is published? If so, how/where?
    {{ no wrong answers, but we prioritize plugins that help us grow }}
    
    Thanks,
    {{ your name }}

After receiving this information we'll test out your plugin, send revision requests (if applicable), and soft launch it to our Plugins marketplace by changing the status to "public."

We can then discuss featuring your work in an upcoming email newsletter or other social channels. At any time you are welcome to post it in our developer-only Discord's "#flex" channel, prior to public approval.

[PreviousPlugin Uninstallation Flow](/go/plugin-marketplace/plugin-uninstallation-flow)
[NextIntroduction](/go/private-api/introduction)

Last updated 6 months ago

---

# Plugin Screen Generation Flow | TRMNL API

[PreviousPlugin Management Flow](/go/plugin-marketplace/plugin-management-flow)
[NextPlugin Uninstallation Flow](/go/plugin-marketplace/plugin-uninstallation-flow)

Last updated 1 month ago

TRMNL generates a screen every X minutes, where X is the refresh frequency set by the user.

TRMNL generates screens by sending a POST request to the `plugin_markup_url` endpoint you specified during [Plugin Creation](/go/plugin-marketplace/plugin-creation)
. The request body will include the `user_uuid` (that particular user's plugin connection UUID). The request header contains an `authorization` key with the user's plugin connection `access_token`as the Bearer token. Here's an example of our server request:

Copy

    curl -XPOST 'https://your-server.com/your-markup-url' \
    -H 'Authorization: Bearer xxx' \
    -d 'user_uuid=xx'

Your web server should respond with HTML inside root nodes named `markup`, `markup_quadrant`, and so on to satisfy each layout offered by TRMNL. This markup should include whatever values you want the user to see rendered on their screen.

**Pro tip**: use the [Private Plugin](https://usetrmnl.com/plugin_settings/new?keyname=private_plugin)
 markup editor to develop the frontend of your plugin. This in-browser text editor supports live refresh and automatically applies the correct styling and JavaScript helpers to your markup.

TRMNL uses the markup in your server's response to generate an e-ink friendly image. If the user connecting your plugin created a "full screen" playlist item, TRMNL will leverage the HTML inside the `markup` node. If they connected your plugin as part of a left/right Mashup, TRMNL will look for HTML inside the `markup_half_vertical` node.

Here's an example of a valid server response:

Copy

    {
      "markup": '<div class="view view--full"><div class="layout"><div class="columns"><div class="column"><div class="markdown gap--large"><span class="title">Daily Scripture</span><div class="content-element content content--center">Hello</div><span class="label label--underline mt-4">World</span></div></div></div></div><div>', "markup_half_horizontal": '<div class="view view--half_horizontal">Your content</div>', "markup_half_vertical": '<div class="view view--half_vertical">Your content</div>', "markup_quadrant": '<div class="view view--quadrant">Your content</div>'
    }

**Note:** in order for your plugin to be published in the TRMNL public marketplace, you must provide HTML for all available markup layouts. [View them here](https://help.usetrmnl.com/en/articles/10168132-mashups)
.

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252FDCcL1s7ZrP9wn6kC02pm%252FScreenshot%25202024-09-06%2520at%25203.35.01%2520PM.png%3Falt%3Dmedia%26token%3D0d2d40a4-26cd-4355-a802-f2e876c46d1e&width=768&dpr=4&quality=100&sign=3d12023&sv=2)

---

# Plugin Management Flow | TRMNL API

[PreviousPlugin Installation Flow](/go/plugin-marketplace/plugin-installation-flow)
[NextPlugin Screen Generation Flow](/go/plugin-marketplace/plugin-screen-generation-flow)

Last updated 6 months ago

After a user installs your plugin, they may want to manage the plugin settings. TRMNL will redirect the user to the `plugin_management_url` with a unique user identifier (UUID) params, so that you can identify them on your web server.

Example request: `https://yourapp.com/manage?uuid=ae48d6ac-48f4-4aed-8464-bad68368e97c`

**Note**: The UUID is the unique user identifier in the TRMNL plugin architecture. This allows TRMNL users to have multiple instances of the same plugin, each with their own settings.

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252F6F6aeY44yXnuwmNZaQa7%252FScreenshot%25202024-09-06%2520at%25203.32.53%2520PM.png%3Falt%3Dmedia%26token%3D11218821-f9f3-48a7-9b2c-38d7c5917d5c&width=768&dpr=4&quality=100&sign=90e543c4&sv=2)

---

# Introduction | TRMNL API

As outlined in our [open source firmware](https://github.com/usetrmnl/firmware)
, TRMNL exposes a GET endpoint that responds with image and other content for your device to store or render.

Copy

    GET /api/display
    
    # request headers example
    {
      'ID' => 'XX:XX:XX:XX',
      'Access-Token' => '2r--SahjsAKCFksVcped2Q'
    }
    
    # response body example
    {
      "image_url"=>"https://trmnl.s3.us-east-2.amazonaws.com/path-to-img.bmp",
      "image_name"=>"2024-09-20T00:00:00",
      "update_firmware"=>false,
    }

The TRMNL server leverages your device's immutable Mac Address (`ID` ) header during initial setup, then depends on the `Access-Token`header for subsequent requests.

Thus, **if you know your device's API key, you can request content without a TRMNL device or TRMNL firmware**.

In these \[WIP\] Private API docs we'll outline a few ways to take advantage of this information for your own privacy, security, and experimentation purposes.

**Only devices with the Developer add-on** may access their own Access Token. You may unlock this feature anytime from your [Devices > Edit](https://usetrmnl.com/devices/)
 page for a one-time fee.

[PreviousGoing Live](/go/plugin-marketplace/going-live)
[NextFetch Screen Content](/go/private-api/fetch-screen-content)

Last updated 5 months ago

---

# Plugin Installation Flow | TRMNL API

[PreviousPlugin Creation](/go/plugin-marketplace/plugin-creation)
[NextPlugin Management Flow](/go/plugin-marketplace/plugin-management-flow)

Last updated 1 month ago

1.  **Installation Request**
    

When the user installs your plugin, TRMNL sends an installation request to `installation_url` with unique `token` and `installation_callback_url`.

1.  **Fetch Access Token**
    

After receiving the request, Your server using the `client_id`, `client_secret` and `token` from step#1 request the `access_token` from TRMNL using the following endpoint:

Copy

    body = {
      code: 'code-from-step-1',
      client_id: 'your-plugin-client-id',
      client_secret: 'your-plugin-secret',
      grant_type: 'authorization_code'
    }
    response = HTTParty.post("https://usetrmnl.com/oauth/token", body: body)
    response['access_token']

1.  **Access Token**
    

TRMNL responds with the `access_token`.

1.  **Installation Callback**
    

Use the `installation_callback_url` from Step #1 and redirect the user back to TRMNL.

1.  **Success Webhook**
    

After the user has successfully finished installing the plugin, TRMNL sends a success notification to `installation_success_webhook_url` endpoint. Data is sent in JSON format as follows.

HTTP Headers:

Copy

    { 'Authorization': 'Bearer <access_token>', 'Content-Type': 'application/json' }

Body:

Copy

    {
      "user": {
        "name":"Ronak J",
        "email":"ronak@usetrmnl.com",
        "first_name":"Ronak",
        "last_name":"J",
        "locale":"en",
        "time_zone":"Pacific Time (US & Canada)",
        "time_zone_iana":"America/Los_Angeles",
        "utc_offset":-28800,
        "plugin_setting_id":1234,
        "uuid": "674c9d99-cea1-4e52-9025-9efbe0e30901"
      }
    }

Time zone mappings are available here under "Constants:" [https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html](https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html)

The `plugin_setting_id`is useful for building a redirect URI in your own application, for example to send a user back to usetrmnl.com/plugin\_settings/:plugin\_setting\_id/edit.

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252FV3WFAksYhfX7FLhm5LTE%252Fimage.png%3Falt%3Dmedia%26token%3D55b4da70-b80f-422e-a43f-32cc2cc8dd25&width=768&dpr=4&quality=100&sign=aefc9845&sv=2)

---

# Plugin Uninstallation Flow | TRMNL API

[PreviousPlugin Screen Generation Flow](/go/plugin-marketplace/plugin-screen-generation-flow)
[NextGoing Live](/go/plugin-marketplace/going-live)

Last updated 4 months ago

When a user uninstalls your plugin, as a best practice TRMNL will send a notification via webhook. The request is sent to the `uninstallation_webhook_url` in JSON format with the following details:

HTTP Headers:

Copy

    { 'Authorization': 'Bearer <access_token>', 'Content-Type': 'application/json'

Body:

Copy

    { 
      "user_uuid": "uuid-of-the-user"
    }

Parse this webhook payload to perform a "teardown" or similar strategy on your web server.

![](https://docs.usetrmnl.com/~gitbook/image?url=https%3A%2F%2F1607647240-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnXhDs1PQJ2VX7ppA91eY%252Fuploads%252FxbMH8zY08tuSIhS9w6Hu%252FScreenshot%25202024-09-06%2520at%25203.36.35%2520PM.png%3Falt%3Dmedia%26token%3D70af7edc-90f8-439e-9c5f-0d3251e4f420&width=768&dpr=4&quality=100&sign=821449df&sv=2)

---

# Introduction | TRMNL API

If you're a company with a custom plugin, TRMNL makes it easy to reward customers with free or discounted devices that arrive pre-connected to your platform.

Example scenario:

1.  Acme SaaS has a subscriber dashboard for their email newsletter tool. Acme builds a custom plugin inside TRMNL to showcase this information.
    
2.  Acme wants to gift a free TRMNL device to their top customers. Acme creates coupon codes with the TRMNL Partners API that their customer can use at checkout for X% off their order.
    
3.  When Acme's customer device is shipped, it is associated to their account on Acme's platform. Upon unboxing + WiFi pairing, Acme's customer will see their Acme native dashboard on TRMNL device without any additional setup.
    

Continue reading to learn how this works with just a single API request, or email [partners@usetrmnl.com](mailto:partners@usetrmnl.com)
 to get started.

[PreviousFetch Screen Content](/go/private-api/fetch-screen-content)
[NextGetting Started](/go/partners-api/getting-started)

Last updated 3 months ago

---

# Provisioning Devices | TRMNL API

To preload a custom plugin on a device for your customer, you can generate a coupon code and share the customer's relevant credentials in a single API request.

**Step 1 - Partner requests a coupon**

Copy

    POST /api/partners
    
    Headers: 
    Client-ID, Access-Token # provided by TRMNL team
    
    Body:
    { 
      partner: { 
        action: "provision_discount", 
        data: { "user-data": "goes here", "more-data": "also ok" },
        meta: { "expires_at": "2025-03-20" } # will expire at 23:59 EST on this date
      }
    } 

Based on your program terms, TRMNL will generate a coupon with your Partner name + unique suffix.

Copy

    # response example
    { status: 200, data: { code: "acme-123456789" } }

If a quota is preferred, for example 50x maximum provisions per month, this endpoint will return a `nil`code value when the quota is breached.

**Step 2 - TRMNL generates a coupon**

Provide the `code`from Step 1 to your customer with instructions to purchase a device from usetrmnl.com. They can provide this code at checkout.

If your discount is for 100% off, they will not be charged. If your code is for 50% off, they will pay 50% at checkout. You will be billed via invoice later for claimed discount codes during the agreed period. Additional terms are possible, for example requiring customers to pay for shipping, or only subsidizing a device with our regular (vs large size) battery, etc.

**Step 3 - TRMNL pre-loads the Partner's plugin**

Prior to this workflow being implemented, TRMNL should have already tested your custom plugin. Assuming it requires some kind of API credential to be accessed by a TRMNL user's device, the Step 1 payload should include these details inside the `data`node.

Whatever key/values are provided in the `data` node of Step 1 will be saved to the user's pre-loaded plugin when their device is unboxed and set up. Thus these key/values should match exactly the merge variables required by the plugin setting instance.

Contact [partners@usetrmnl.com](mailto:partners@usetrmnl.com)
 with questions or requests.

[PreviousGetting Started](/go/partners-api/getting-started)

Last updated 2 months ago

---


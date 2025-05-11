# Table of Contents

- [Installing Tailwind CSS with Vite - Tailwind CSS](#installing-tailwind-css-with-vite-tailwind-css)
- [Editor setup - Getting started - Tailwind CSS](#editor-setup-getting-started-tailwind-css)
- [Compatibility - Getting started - Tailwind CSS](#compatibility-getting-started-tailwind-css)
- [Adding custom styles - Core concepts - Tailwind CSS](#adding-custom-styles-core-concepts-tailwind-css)
- [Responsive design - Core concepts - Tailwind CSS](#responsive-design-core-concepts-tailwind-css)
- [Dark mode - Core concepts - Tailwind CSS](#dark-mode-core-concepts-tailwind-css)
- [Styling with utility classes - Core concepts - Tailwind CSS](#styling-with-utility-classes-core-concepts-tailwind-css)
- [Upgrade guide - Getting started - Tailwind CSS](#upgrade-guide-getting-started-tailwind-css)
- [Theme variables - Core concepts - Tailwind CSS](#theme-variables-core-concepts-tailwind-css)
- [Colors - Core concepts - Tailwind CSS](#colors-core-concepts-tailwind-css)
- [Detecting classes in source files - Core concepts - Tailwind CSS](#detecting-classes-in-source-files-core-concepts-tailwind-css)
- [Preflight - Base styles - Tailwind CSS](#preflight-base-styles-tailwind-css)
- [Functions and directives - Core concepts - Tailwind CSS](#functions-and-directives-core-concepts-tailwind-css)
- [aspect-ratio - Layout - Tailwind CSS](#aspect-ratio-layout-tailwind-css)
- [break-after - Layout - Tailwind CSS](#break-after-layout-tailwind-css)
- [break-before - Layout - Tailwind CSS](#break-before-layout-tailwind-css)

---

# Installing Tailwind CSS with Vite - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Getting Started
2.  Using Vite

Installation

Get started with Tailwind CSS
=============================

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.

Installation
------------

*   [Using Vite](/docs/installation/using-vite)
    
    --------------------------------------------
    
*   [Using PostCSS](/docs/installation/using-postcss)
    
    --------------------------------------------------
    
*   [Tailwind CLI](/docs/installation/tailwind-cli)
    
    ------------------------------------------------
    
*   [Framework Guides](/docs/installation/framework-guides)
    
    --------------------------------------------------------
    
*   [Play CDN](/docs/installation/play-cdn)
    
    ----------------------------------------
    

### Installing Tailwind CSS as a Vite plugin

Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it with frameworks like Laravel, SvelteKit, React Router, Nuxt, and SolidJS.

01

#### Install Tailwind CSS

Install `tailwindcss` and `@tailwindcss/vite` via npm.

Terminal

    npm install tailwindcss @tailwindcss/vite

02

#### Configure the Vite plugin

Add the `@tailwindcss/vite` plugin to your Vite configuration.

vite.config.ts

    import { defineConfig } from 'vite'import tailwindcss from '@tailwindcss/vite'export default defineConfig({  plugins: [    tailwindcss(),  ],})

03

#### Import Tailwind CSS

Add an `@import` to your CSS file that imports Tailwind CSS.

CSS

    @import "tailwindcss";

04

#### Start your build process

Run your build process with `npm run dev` or whatever command is configured in your `package.json` file.

Terminal

    npm run dev

05

#### Start using Tailwind in your HTML

Make sure your compiled CSS is included in the `<head>` _(your framework might handle this for you)_, then start using Tailwind’s utility classes to style your content.

HTML

    <!doctype html><html><head>  <meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">  <link href="/src/styles.css" rel="stylesheet"></head><body>  <h1 class="text-3xl font-bold underline">    Hello world!  </h1></body></html>

**Are you stuck?** Setting up Tailwind with Vite can be a bit different across different build tools. Check our framework guides to see if we have more specific instructions for your particular setup.

[Explore our framework guides](/docs/installation/framework-guides)

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Editor setup - Getting started - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Getting started
2.  Editor setup

Getting started

Editor setup
============

Tooling to improve the developer experience when working with Tailwind CSS.

[Syntax support](#syntax-support)

----------------------------------

Tailwind CSS uses custom CSS syntax like `@theme`, `@variant`, and `@source`, and in some editors this can trigger warnings or errors where these rules aren't recognized.

If you're using VS Code, our official [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
 plugin includes a dedicated Tailwind CSS language mode that has support for all of the custom at-rules and functions Tailwind uses.

In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files.

[IntelliSense for VS Code](#intellisense-for-vs-code)

------------------------------------------------------

The official [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
 extension for Visual Studio Code enhances the Tailwind development experience by providing users with advanced features such as autocomplete, syntax highlighting, and linting.

![Tailwind CSS IntelliSense extension for Visual Studio Code](/_next/static/media/intellisense.c22de782.png)

*   **Autocomplete** — providing intelligent suggestions for utility classes, as well as [CSS functions and directives](/docs/functions-and-directives)
    .
*   **Linting** — highlighting errors and potential bugs in both your CSS and your markup.
*   **Hover previews** — revealing the complete CSS for utility classes when you hover over them.
*   **Syntax highlighting** — so that Tailwind features that use custom CSS syntax are highlighted correctly.

Check out the project [on GitHub](https://github.com/tailwindcss/intellisense)
 to learn more, or [add it to Visual Studio Code](vscode:extension/bradlc.vscode-tailwindcss)
 to get started now.

[Class sorting with Prettier](#class-sorting-with-prettier)

------------------------------------------------------------

We maintain an official [Prettier plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
 for Tailwind CSS that automatically sorts your classes following our [recommended class order](/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted)
.

![](/_next/static/media/prettier-banner.79c40690.jpg)

It works seamlessly with custom Tailwind configurations, and because it’s just a Prettier plugin, it works anywhere Prettier works—including every popular editor and IDE, and of course on the command line.

HTML

    <!-- Before --><button class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">Submit</button><!-- After --><button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Submit</button>

Check out the plugin [on GitHub](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
 to learn more and get started.

[JetBrains IDEs](#jetbrains-ides)

----------------------------------

JetBrains IDEs like WebStorm, PhpStorm, and others include support for intelligent Tailwind CSS completions in your HTML.

[Learn more about Tailwind CSS support in JetBrains IDEs →](https://www.jetbrains.com/help/webstorm/tailwind-css.html)

### On this page

*   [Syntax support](#syntax-support)
    
*   [IntelliSense for VS Code](#intellisense-for-vs-code)
    
*   [Class sorting with Prettier](#class-sorting-with-prettier)
    
*   [JetBrains IDEs](#jetbrains-ides)
    

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Compatibility - Getting started - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Getting started
2.  Compatibility

Getting started

Compatibility
=============

Learn about browser support and compatibility with other tooling.

[Browser support](#browser-support)

------------------------------------

Tailwind CSS v4.0 is designed for and tested on modern browsers, and the core functionality of the framework specifically depends on these browser versions:

*   **Chrome 111** _(released March 2023)_
*   **Safari 16.4** _(released March 2023)_
*   **Firefox 128** _(released July 2024)_

Tailwind also includes support for many bleeding-edge platform features like `field-sizing: content`, `@starting-style`, and `text-wrap: balance` that have limited browser support. It's up to you if you want to use these modern features in your projects — if the browsers you're targeting don't support them, simply don't use those utilities and variants.

If you're unsure about the support for a modern platform feature, the [Can I use](https://caniuse.com/mdn-css_at-rules_starting-style)
 database is a great resource.

[Sass, Less, and Stylus](#sass-less-and-stylus)

------------------------------------------------

Tailwind CSS v4.0 is a full-featured CSS build tool designed for a specific workflow, and is not designed to be used with CSS preprocessors like Sass, Less, or Stylus.

**Think of Tailwind CSS itself as your preprocessor** — you shouldn't use Tailwind with Sass for the same reason you wouldn't use Sass with Stylus.

Since Tailwind is designed for modern browsers, you actually don't need a preprocessor for things like nesting or variables, and Tailwind itself will do things like bundle your imports and add vendor prefixes.

### [Build-time imports](#build-time-imports)

Tailwind will automatically bundle other CSS files you include with `@import`, without the need for a separate preprocessing tool.

app.css

    @import "tailwindcss";@import "./typography.css";

In this example, the `typography.css` file will be bundled into your compiled CSS for you by Tailwind, without any other tooling like Sass or `postcss-import`.

### [Variables](#variables)

All modern browsers support [native CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
 without the need for any sort of preprocessor:

typography.css

    .typography {  font-size: var(--text-base);  color: var(--color-gray-700);}

Tailwind relies on CSS variables heavily internally, so if you can use Tailwind in your project, you can use native CSS variables.

### [Nesting](#nesting)

Under the hood Tailwind uses [Lightning CSS](https://lightningcss.dev/)
 to process nested CSS like this:

typography.css

    .typography {  p {    font-size: var(--text-base);  }  img {    border-radius: var(--radius-lg);  }}

Tailwind flattens that nested CSS for you so it can be understood by all modern browsers:

output.css

    .typography p {  font-size: var(--text-base);}.typography img {  border-radius: var(--radius-lg);}

Native CSS nesting support is also very good these days, so you don't really need a preprocessor for nesting even if you aren't using Tailwind.

### [Loops](#loops)

In Tailwind, the sorts of classes you may have used loops for in the past (like `col-span-1`, `col-span-2`, etc.) are generated for you on-demand by Tailwind whenever you use them instead of having to be predefined.

On top of that, when you're building things with Tailwind CSS, you do the vast majority of your styling in your HTML, not in CSS files. Since you're not writing tons of CSS in the first place, you just don't need features like loops that are designed for programmatically generating lots of custom CSS rules.

### [Color and math functions](#color-and-math-functions)

When using preprocessors like Sass or Less, you may have used functions like `darken` or `lighten` to adjust colors.

When using Tailwind, the recommended workflow is to use a predefined color palette that includes light and dark shades of each color, like the expertly designed [default color palette](/docs/colors)
 included with the framework.

    <button class="bg-indigo-500 hover:bg-indigo-600 ...">  <!-- ... --></button>

You can also use modern CSS features like [color-mix()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)
 to adjust colors at run-time directly in the browser. This even lets you adjust colors defined using CSS variables or the `currentcolor` keyword, which isn't possible with preprocessors.

Similarly, browsers support math functions like `min()`, `max()`, and `round()` natively now, so there's no need to rely on a preprocessor for these features anymore either.

[CSS modules](#css-modules)

----------------------------

Tailwind is compatible with CSS modules and can co-exist with them if you are introducing Tailwind into a project that already uses them, but **we don't recommend using CSS modules and Tailwind together** if you can avoid it.

### [Scoping concerns](#scoping-concerns)

CSS modules are designed to solve scoping problems that just don't exist when composing utility classes in your HTML instead of writing custom CSS.

Styles are naturally scoped with Tailwind because each utility class always does the same thing, no matter where it's used — there's no risk that adding a utility class to one part of your UI creates some unexpected side effect somewhere else.

### [Performance](#performance)

When using CSS modules, build tools like Vite, Parcel, and Turbopack process each CSS module separately. That means if you have 50 CSS modules in a project, **Tailwind needs to run 50 separate times**, which leads to much slower build times and a worse developer experience.

### [Explicit context sharing](#explicit-context-sharing)

Since CSS modules are each processed separately, they have no `@theme` unless you import one.

This means features like `@apply` won't work the way you expect unless you explicitly import your global styles as reference:

Import your global styles as reference to make sure your theme variables are defined

Button.module.css

    @reference "../app.css";button {  @apply bg-blue-500;}

Alternatively, you can also just use CSS variables instead of `@apply` which has the added benefit of letting Tailwind skip processing those files and will improve your build performance:

Button.module.css

    button {  background: var(--color-blue-500);}

[Vue, Svelte, and Astro](#vue-svelte-and-astro)

------------------------------------------------

Vue, Svelte, and Astro support `<style>` blocks in component files that behave very much like [CSS modules](#css-modules)
, which means they are each processed by your build tooling totally separately and have all of the same drawbacks.

If you're using Tailwind with these tools, **we recommend avoiding `<style>` blocks in your components** and just styling things with utility classes directly in your markup, the way Tailwind is meant to be used.

If you do use `<style>` blocks, make sure to import your global styles as reference if you want features like `@apply` to work as expected:

Import your global styles as reference to make sure your theme variables are defined

Button.vue

    <template>  <button><slot /></button></template><style scoped>  @reference "../app.css";  button {    @apply bg-blue-500;  }</style>

Or just use your globally defined CSS variables instead of features like `@apply`, which don't require Tailwind to process your component CSS at all:

Button.vue

    <template>  <button><slot /></button></template><style scoped>  button {    background-color: var(--color-blue-500);  }</style>

### On this page

*   [Browser support](#browser-support)
    
*   [Sass, Less, and Stylus](#sass-less-and-stylus)
    *   [Build-time imports](#build-time-imports)
        
    *   [Variables](#variables)
        
    *   [Nesting](#nesting)
        
    *   [Loops](#loops)
        
    *   [Color and math functions](#color-and-math-functions)
        
*   [CSS modules](#css-modules)
    *   [Scoping concerns](#scoping-concerns)
        
    *   [Performance](#performance)
        
    *   [Explicit context sharing](#explicit-context-sharing)
        
*   [Vue, Svelte, and Astro](#vue-svelte-and-astro)
    

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Adding custom styles - Core concepts - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Core concepts
2.  Adding custom styles

Core concepts

Adding custom styles
====================

Best practices for adding your own custom styles in Tailwind projects.

Often the biggest challenge when working with a framework is figuring out what you’re supposed to do when there’s something you need that the framework doesn’t handle for you.

Tailwind has been designed from the ground up to be extensible and customizable, so that no matter what you’re building you never feel like you’re fighting the framework.

This guide covers topics like customizing your design tokens, how to break out of those constraints when necessary, adding your own custom CSS, and extending the framework with plugins.

[Customizing your theme](#customizing-your-theme)

--------------------------------------------------

If you want to change things like your color palette, spacing scale, typography scale, or breakpoints, add your customizations using the `@theme` directive in your CSS:

CSS

    @theme {  --font-display: "Satoshi", "sans-serif";  --breakpoint-3xl: 120rem;  --color-avocado-100: oklch(0.99 0 0);  --color-avocado-200: oklch(0.98 0.04 113.22);  --color-avocado-300: oklch(0.94 0.11 115.03);  --color-avocado-400: oklch(0.92 0.19 114.08);  --color-avocado-500: oklch(0.84 0.18 117.33);  --color-avocado-600: oklch(0.53 0.12 118.34);  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);  /* ... */}

Learn more about customizing your theme in the [theme variables documentation](/docs/theme)
.

[Using arbitrary values](#using-arbitrary-values)

--------------------------------------------------

While you can usually build the bulk of a well-crafted design using a constrained set of design tokens, once in a while you need to break out of those constraints to get things pixel-perfect.

When you find yourself really needing something like `top: 117px` to get a background image in just the right spot, use Tailwind's square bracket notation to generate a class on the fly with any arbitrary value:

HTML

    <div class="top-[117px]">  <!-- ... --></div>

This is basically like inline styles, with the major benefit that you can combine it with interactive modifiers like `hover` and responsive modifiers like `lg`:

HTML

    <div class="top-[117px] lg:top-[344px]">  <!-- ... --></div>

This works for everything in the framework, including things like background colors, font sizes, pseudo-element content, and more:

HTML

    <div class="bg-[#bada55] text-[22px] before:content-['Festivus']">  <!-- ... --></div>

If you're referencing a CSS variable as an arbitrary value, you can use the custom property syntax:

HTML

    <div class="fill-(--my-brand-color) ...">  <!-- ... --></div>

This is just a shorthand for `fill-[var(--my-brand-color)]` that adds the `var()` function for you automatically.

### [Arbitrary properties](#arbitrary-properties)

If you ever need to use a CSS property that Tailwind doesn't include a utility for out of the box, you can also use square bracket notation to write completely arbitrary CSS:

HTML

    <div class="[mask-type:luminance]">  <!-- ... --></div>

This is _really_ like inline styles, but again with the benefit that you can use modifiers:

HTML

    <div class="[mask-type:luminance] hover:[mask-type:alpha]">  <!-- ... --></div>

This can be useful for things like CSS variables as well, especially when they need to change under different conditions:

HTML

    <div class="[--scroll-offset:56px] lg:[--scroll-offset:44px]">  <!-- ... --></div>

### [Arbitrary variants](#arbitrary-variants)

Arbitrary _variants_ are like arbitrary values but for doing on-the-fly selector modification, like you can with built-in pseudo-class variants like `hover:{utility}` or responsive variants like `md:{utility}` but using square bracket notation directly in your HTML.

HTML

    <ul role="list">  {#each items as item}  <li class="lg:[&:nth-child(-n+3)]:hover:underline">{item}</li>  {/each}</ul>

Learn more in the [arbitrary variants](/docs/hover-focus-and-other-states#using-arbitrary-variants)
 documentation.

### [Handling whitespace](#handling-whitespace)

When an arbitrary value needs to contain a space, use an underscore (`_`) instead and Tailwind will automatically convert it to a space at build-time:

HTML

    <div class="grid grid-cols-[1fr_500px_2fr]">  <!-- ... --></div>

In situations where underscores are common but spaces are invalid, Tailwind will preserve the underscore instead of converting it to a space, for example in URLs:

HTML

    <div class="bg-[url('/what_a_rush.png')]">  <!-- ... --></div>

In the rare case that you actually need to use an underscore but it's ambiguous because a space is valid as well, escape the underscore with a backslash and Tailwind won't convert it to a space:

HTML

    <div class="before:content-['hello\_world']">  <!-- ... --></div>

If you're using something like JSX where the backslash is stripped from the rendered HTML, use [String.raw()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw)
 so the backslash isn't treated as a JavaScript escape character:

    <div className={String.raw`before:content-['hello\_world']`}>  <!-- ... --></div>

### [Resolving ambiguities](#resolving-ambiguities)

Many utilities in Tailwind share a common namespace but map to different CSS properties. For example `text-lg` and `text-black` both share the `text-` namespace, but one is for `font-size` and the other is for `color`.

When using arbitrary values, Tailwind can generally handle this ambiguity automatically based on the value you pass in:

HTML

    <!-- Will generate a font-size utility --><div class="text-[22px]">...</div><!-- Will generate a color utility --><div class="text-[#bada55]">...</div>

Sometimes it really is ambiguous though, for example when using CSS variables:

HTML

    <div class="text-(--my-var)">...</div>

In these situations, you can "hint" the underlying type to Tailwind by adding a [CSS data type](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types)
 before the value:

HTML

    <!-- Will generate a font-size utility --><div class="text-(length:--my-var)">...</div><!-- Will generate a color utility --><div class="text-(color:--my-var)">...</div>

[Using custom CSS](#using-custom-css)

--------------------------------------

While Tailwind is designed to handle the bulk of your styling needs, there is nothing stopping you from just writing plain CSS when you need to:

CSS

    @import "tailwindcss";.my-custom-style {  /* ... */}

### [Adding base styles](#adding-base-styles)

If you just want to set some defaults for the page (like the text color, background color, or font family), the easiest option is just adding some classes to the `html` or `body` elements:

HTML

    <!doctype html><html lang="en" class="bg-gray-100 font-serif text-gray-900">  <!-- ... --></html>

This keeps your base styling decisions in your markup alongside all of your other styles, instead of hiding them in a separate file.

If you want to add your own default base styles for specific HTML elements, use the `@layer` directive to add those styles to Tailwind's `base` layer:

CSS

    @layer base {  h1 {    font-size: var(--text-2xl);  }  h2 {    font-size: var(--text-xl);  }}

### [Adding component classes](#adding-component-classes)

Use the `components` layer for any more complicated classes you want to add to your project that you'd still like to be able to override with utility classes.

Traditionally these would be classes like `card`, `btn`, `badge` — that kind of thing.

CSS

    @layer components {  .card {    background-color: var(--color-white);    border-radius: var(--rounded-lg);    padding: var(--spacing-6);    box-shadow: var(--shadow-xl);  }}

By defining component classes in the `components` layer, you can still use utility classes to override them when necessary:

HTML

    <!-- Will look like a card, but with square corners --><div class="card rounded-none">  <!-- ... --></div>

Using Tailwind you probably don't need these types of classes as often as you think. Read our guide on [managing duplication](/docs/styling-with-utility-classes#managing-duplication)
 for our recommendations.

The `components` layer is also a good place to put custom styles for any third-party components you're using:

CSS

    @layer components {  .select2-dropdown {    /* ... */  }}

### [Using variants](#using-variants)

Use the `@variant` directive to apply a Tailwind variant within custom CSS:

app.css

    .my-element {  background: white;  @variant dark {    background: black;  }}

Compiled CSS

    .my-element {  background: white;  @media (prefers-color-scheme: dark) {    background: black;  }}

If you need to apply multiple variants at the same time, use nesting:

app.css

    .my-element {  background: white;  @variant dark {    @variant hover {      background: black;    }  }}

Compiled CSS

    .my-element {  background: white;  @media (prefers-color-scheme: dark) {    &:hover {      @media (hover: hover) {        background: black;      }    }  }}

[Adding custom utilities](#adding-custom-utilities)

----------------------------------------------------

### [Simple utilities](#simple-utilities)

In addition to using the utilities that ship with Tailwind, you can also add your own custom utilities. This can be useful when there's a CSS feature you'd like to use in your project that Tailwind doesn't include utilities for out of the box.

Use the `@utility` directive to add a custom utility to your project:

CSS

    @utility content-auto {  content-visibility: auto;}

You can now use this utility in your HTML:

HTML

    <div class="content-auto">  <!-- ... --></div>

It will also work with variants like `hover`, `focus` and `lg`:

HTML

    <div class="hover:content-auto">  <!-- ... --></div>

Custom utilities are automatically inserted into the `utilities` layer along with all of the built-in utilities in the framework.

### [Complex utilities](#complex-utilities)

If your custom utility is more complex than a single class name, use nesting to define the utility:

CSS

    @utility scrollbar-hidden {  &::-webkit-scrollbar {    display: none;  }}

### [Functional utilities](#functional-utilities)

In addition to registering simple utilities with the `@utility` directive, you can also register functional utilities that accept an argument:

CSS

    @utility tab-* {  tab-size: --value(--tab-size-*);}

The special `--value()` function is used to resolve the utility value.

#### [Matching theme values](#matching-theme-values)

Use the `--value(--theme-key-*)` syntax to resolve the utility value against a set of theme keys:

CSS

    @theme {  --tab-size-2: 2;  --tab-size-4: 4;  --tab-size-github: 8;}@utility tab-* {  tab-size: --value(--tab-size-*);}

This will match utilities like `tab-2`, `tab-4`, and `tab-github`.

#### [Bare values](#bare-values)

To resolve the value as a bare value, use the `--value({type})` syntax, where `{type}` is the data type you want to validate the bare value as:

CSS

    @utility tab-* {  tab-size: --value(integer);}

This will match utilities like `tab-1` and `tab-76`.

#### [Literal values](#literal-values)

To support literal values, use the `--value('literal')` syntax (notice the quotes):

CSS

    @utility tab-* {  tab-size: --value('inherit', 'initial', 'unset');}

This will match utilities like `tab-inherit`, `tab-initial`, and `tab-unset`.

#### [Arbitrary values](#arbitrary-values)

To support arbitrary values, use the `--value([{type}])` syntax (notice the square brackets) to tell Tailwind which types are supported as an arbitrary value:

CSS

    @utility tab-* {  tab-size: --value([integer]);}

This will match utilities like `tab-[1]` and `tab-[76]`. If you want to support any data type, you can use `--value([*])`.

#### [Supporting theme, bare, and arbitrary values together](#supporting-theme-bare-and-arbitrary-values-together)

All three forms of the `--value()` function can be used within a rule as multiple declarations, and any declarations that fail to resolve will be omitted in the output:

CSS

    @theme {  --tab-size-github: 8;}@utility tab-* {  tab-size: --value([integer]);  tab-size: --value(integer);  tab-size: --value(--tab-size-*);}

This makes it possible to treat the value differently in each case if necessary, for example translating a bare integer to a percentage:

CSS

    @utility opacity-* {  opacity: --value([percentage]);  opacity: calc(--value(integer) * 1%);  opacity: --value(--opacity-*);}

The `--value()` function can also take multiple arguments and resolve them left to right if you don't need to treat the return value differently in different cases:

CSS

    @theme {  --tab-size-github: 8;}@utility tab-* {  tab-size: --value(--tab-size-*, integer, [integer]);}@utility opacity-* {  opacity: calc(--value(integer) * 1%);  opacity: --value(--opacity-*, [percentage]);}

#### [Negative values](#negative-values)

To support negative values, register separate positive and negative utilities into separate declarations:

CSS

    @utility inset-* {  inset: calc(var(--spacing) * --value([percentage], [length]));}@utility -inset-* {  inset: calc(var(--spacing) * --value([percentage], [length]) * -1);}

#### [Modifiers](#modifiers)

Modifiers are handled using the `--modifier()` function which works exactly like the `--value()` function but operates on a modifier if present:

CSS

    @utility text-* {  font-size: --value(--text-*, [length]);  line-height: --modifier(--leading-*, [length], [*]);}

If a modifier isn't present, any declaration depending on a modifier is just not included in the output.

#### [Fractions](#fractions)

To handle fractions, we rely on the CSS `ratio` data type. If this is used with `--value()`, it's a signal to Tailwind to treat the value and modifier as a single value:

CSS

    @utility aspect-* {  aspect-ratio: --value(--aspect-ratio-*, ratio, [ratio]);}

This will match utilities like `aspect-square`, `aspect-3/4`, and `aspect-[7/9]`.

[Adding custom variants](#adding-custom-variants)

--------------------------------------------------

In addition to using the variants that ship with Tailwind, you can also add your own custom variants using the `@custom-variant` directive:

    @custom-variant theme-midnight {  &:where([data-theme="midnight"] *) {    @slot;  }}

Now you can use the `theme-midnight:<utility>` variant in your HTML:

    <html data-theme="midnight">  <button class="theme-midnight:bg-black ..."></button></html>

You can create variants using the shorthand syntax when nesting isn't required:

    @custom-variant theme-midnight (&:where([data-theme="midnight"] *));

When a custom variant has multiple rules, they can be nested within each other:

    @custom-variant any-hover {  @media (any-hover: hover) {    &:hover {      @slot;    }  }}

### On this page

*   [Customizing your theme](#customizing-your-theme)
    
*   [Using arbitrary values](#using-arbitrary-values)
    *   [Arbitrary properties](#arbitrary-properties)
        
    *   [Arbitrary variants](#arbitrary-variants)
        
    *   [Handling whitespace](#handling-whitespace)
        
    *   [Resolving ambiguities](#resolving-ambiguities)
        
*   [Using custom CSS](#using-custom-css)
    *   [Adding base styles](#adding-base-styles)
        
    *   [Adding component classes](#adding-component-classes)
        
    *   [Using variants](#using-variants)
        
*   [Adding custom utilities](#adding-custom-utilities)
    *   [Simple utilities](#simple-utilities)
        
    *   [Complex utilities](#complex-utilities)
        
    *   [Functional utilities](#functional-utilities)
        
*   [Adding custom variants](#adding-custom-variants)
    

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Responsive design - Core concepts - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Core concepts
2.  Responsive design

Core concepts

Responsive design
=================

Using responsive utility variants to build adaptive user interfaces.

[Overview](#overview)

----------------------

Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece of cake to build complex responsive interfaces without ever leaving your HTML.

First, make sure you've added the [viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
 to the `<head>` of your document:

index.html

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

Then to add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the `:` character:

HTML

    <!-- Width of 16 by default, 32 on medium screens, and 48 on large screens --><img class="w-16 md:w-32 lg:w-48" src="..." />

There are five breakpoints by default, inspired by common device resolutions:

| Breakpoint prefix | Minimum width | CSS |
| --- | --- | --- |
| `sm` | 40rem _(640px)_ | `@media (width >= 40rem) { ... }` |
| `md` | 48rem _(768px)_ | `@media (width >= 48rem) { ... }` |
| `lg` | 64rem _(1024px)_ | `@media (width >= 64rem) { ... }` |
| `xl` | 80rem _(1280px)_ | `@media (width >= 80rem) { ... }` |
| `2xl` | 96rem _(1536px)_ | `@media (width >= 96rem) { ... }` |

This works for **every utility class in the framework**, which means you can change literally anything at a given breakpoint — even things like letter spacing or cursor styles.

Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens:

    <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">  <div class="md:flex">    <div class="md:shrink-0">      <img        class="h-48 w-full object-cover md:h-full md:w-48"        src="/img/building.jpg"        alt="Modern building architecture"      />    </div>    <div class="p-8">      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">        Incredible accommodation for your team      </a>      <p class="mt-2 text-gray-500">        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of        places to do just that.      </p>    </div>  </div></div>

Here's how the example above works:

*   By default, the outer `div` is `display: block`, but by adding the `md:flex` utility, it becomes `display: flex` on medium screens and larger.
*   When the parent is a flex container, we want to make sure the image never shrinks, so we've added `md:shrink-0` to prevent shrinking on medium screens and larger. Technically we could have just used `shrink-0` since it would do nothing on smaller screens, but since it only matters on `md` screens, it's a good idea to make that clear in the class name.
*   On small screens the image is automatically full width by default. On medium screens and up, we've constrained the width to a fixed size and ensured the image is full height using `md:h-full md:w-48`.

We've only used one breakpoint in this example, but you could easily customize this component at other sizes using the `sm`, `lg`, `xl`, or `2xl` responsive prefixes as well.

[Working mobile-first](#working-mobile-first)

----------------------------------------------

Tailwind uses a mobile-first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap.

What this means is that unprefixed utilities (like `uppercase`) take effect on all screen sizes, while prefixed utilities (like `md:uppercase`) only take effect at the specified breakpoint _and above_.

### [Targeting mobile screens](#targeting-mobile-screens)

Where this approach surprises people most often is that to style something for mobile, you need to use the unprefixed version of a utility, not the `sm:` prefixed version. Don't think of `sm:` as meaning "on small screens", think of it as "at the small _breakpoint_".

Don't use `sm:` to target mobile devices

HTML

    <!-- This will only center text on screens 640px and wider, not on small screens --><div class="sm:text-center"></div>

Use unprefixed utilities to target mobile, and override them at larger breakpoints

HTML

    <!-- This will center text on mobile, and left align it on screens 640px and wider --><div class="text-center sm:text-left"></div>

For this reason, it's often a good idea to implement the mobile layout for a design first, then layer on any changes that make sense for `sm` screens, followed by `md` screens, etc.

### [Targeting a breakpoint range](#targeting-a-breakpoint-range)

By default, styles applied by rules like `md:flex` will apply at that breakpoint and stay applied at larger breakpoints.

If you'd like to apply a utility _only_ when a specific breakpoint range is active, stack a responsive variant like `md` with a `max-*` variant to limit that style to a specific range:

HTML

    <div class="md:max-xl:flex">  <!-- ... --></div>

Tailwind generates a corresponding `max-*` variant for each breakpoint, so out of the box the following variants are available:

| Variant | Media query |
| --- | --- |
| `max-sm` | `@media (width < 40rem) { ... }` |
| `max-md` | `@media (width < 48rem) { ... }` |
| `max-lg` | `@media (width < 64rem) { ... }` |
| `max-xl` | `@media (width < 80rem) { ... }` |
| `max-2xl` | `@media (width < 96rem) { ... }` |

### [Targeting a single breakpoint](#targeting-a-single-breakpoint)

To target a single breakpoint, target the range for that breakpoint by stacking a responsive variant like `md` with the `max-*` variant for the next breakpoint:

HTML

    <div class="md:max-lg:flex">  <!-- ... --></div>

Read about [targeting breakpoint ranges](#targeting-a-breakpoint-range)
 to learn more.

[Using custom breakpoints](#using-custom-breakpoints)

------------------------------------------------------

### [Customizing your theme](#customizing-your-theme)

Use the `--breakpoint-*` theme variables to customize your breakpoints:

app.css

    @import "tailwindcss";@theme {  --breakpoint-xs: 30rem;  --breakpoint-2xl: 100rem;  --breakpoint-3xl: 120rem;}

This updates the `2xl` breakpoint to use `100rem` instead of the default `96rem`, and creates new `xs` and `3xl` breakpoints that can be used in your markup:

HTML

    <div class="grid xs:grid-cols-2 3xl:grid-cols-6">  <!-- ... --></div>

Note that it's important to always use the same unit for defining your breakpoints or the generated utilities may be sorted in an unexpected order, causing breakpoint classes to override each other in unexpected ways.

Tailwind uses `rem` for the default breakpoints, so if you are adding additional breakpoints to the defaults, make sure you use `rem` as well.

Learn more about customizing your theme in the [theme documentation](/docs/theme)
.

### [Removing default breakpoints](#removing-default-breakpoints)

To remove a default breakpoint, reset its value to the `initial` keyword:

app.css

    @import "tailwindcss";@theme {  --breakpoint-2xl: initial;}

You can also reset all of the default breakpoints using `--breakpoint-*: initial`, then define all of your breakpoints from scratch:

app.css

    @import "tailwindcss";@theme {  --breakpoint-*: initial;  --breakpoint-tablet: 40rem;  --breakpoint-laptop: 64rem;  --breakpoint-desktop: 80rem;}

Learn more removing default theme values in the [theme documentation](/docs/theme)
.

### [Using arbitrary values](#using-arbitrary-values)

If you need to use a one-off breakpoint that doesn’t make sense to include in your theme, use the `min` or `max` variants to generate a custom breakpoint on the fly using any arbitrary value.

    <div class="max-[600px]:bg-sky-300 min-[320px]:text-center">  <!-- ... --></div>

Learn more about arbitrary value support in the [arbitrary values](/docs/adding-custom-styles#using-arbitrary-values)
 documentation.

[Container queries](#container-queries)

----------------------------------------

### [What are container queries?](#what-are-container-queries)

[Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
 are a modern CSS feature that let you style something based on the size of a parent element instead of the size of the entire viewport. They let you build components that are a lot more portable and reusable because they can change based on the actual space available for that component.

### [Basic example](#basic-example)

Use the `@container` class to mark an element as a container, then use variants like `@sm` and `@md` to style child elements based on the size of the container:

HTML

    <div class="@container">  <div class="flex flex-col @md:flex-row">    <!-- ... -->  </div></div>

Just like breakpoint variants, container queries are mobile-first in Tailwind CSS and apply at the target container size and up.

### [Max-width container queries](#max-width-container-queries)

Use variants like `@max-sm` and `@max-md` to apply a style below a specific container size:

HTML

    <div class="@container">  <div class="flex flex-row @max-md:flex-col">    <!-- ... -->  </div></div>

### [Container query ranges](#container-query-ranges)

Stack a regular container query variant with a max-width container query variant to target a specific range:

HTML

    <div class="@container">  <div class="flex flex-row @sm:@max-md:flex-col">    <!-- ... -->  </div></div>

### [Named containers](#named-containers)

For complex designs that use multiple nested containers, you can name containers using `@container/{name}` and target specific containers with variants like `@sm/{name}` and `@md/{name}`:

HTML

    <div class="@container/main">  <!-- ... -->  <div class="flex flex-row @sm/main:flex-col">    <!-- ... -->  </div></div>

This makes it possible to style something based on the size of a distant container, rather than just the nearest container.

### [Using custom container sizes](#using-custom-container-sizes)

Use the `--container-*` theme variables to customize your container sizes:

app.css

    @import "tailwindcss";@theme {  --container-8xl: 96rem;}

This adds a new `8xl` container query variant that can be used in your markup:

HTML

    <div class="@container">  <div class="flex flex-col @8xl:flex-row">    <!-- ... -->  </div></div>

Learn more about customizing your theme in the [theme documentation](/docs/theme)
.

### [Using arbitrary values](#using-arbitrary-container-query-values)

Use variants like `@min-[475px]` and `@max-[960px]` for one-off container query sizes you don't want to add to your theme:

HTML

    <div class="@container">  <div class="flex flex-col @min-[475px]:flex-row">    <!-- ... -->  </div></div>

### [Using container query units](#using-container-query-units)

Use [container query length units](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units)
 like `cqw` as arbitrary values in other utility classes to reference the container size:

HTML

    <div class="@container">  <div class="w-[50cqw]">    <!-- ... -->  </div></div>

### [Container size reference](#container-size-reference)

By default, Tailwind includes container sizes ranging from 16rem _(256px)_ to 80rem _(1280px)_:

| Variant | Minimum width | CSS |
| --- | --- | --- |
| `@3xs` | 16rem _(256px)_ | `@container (width >= 16rem) { … }` |
| `@2xs` | 18rem _(288px)_ | `@container (width >= 18rem) { … }` |
| `@xs` | 20rem _(320px)_ | `@container (width >= 20rem) { … }` |
| `@sm` | 24rem _(384px)_ | `@container (width >= 24rem) { … }` |
| `@md` | 28rem _(448px)_ | `@container (width >= 28rem) { … }` |
| `@lg` | 32rem _(512px)_ | `@container (width >= 32rem) { … }` |
| `@xl` | 36rem _(576px)_ | `@container (width >= 36rem) { … }` |
| `@2xl` | 42rem _(672px)_ | `@container (width >= 42rem) { … }` |
| `@3xl` | 48rem _(768px)_ | `@container (width >= 48rem) { … }` |
| `@4xl` | 56rem _(896px)_ | `@container (width >= 56rem) { … }` |
| `@5xl` | 64rem _(1024px)_ | `@container (width >= 64rem) { … }` |
| `@6xl` | 72rem _(1152px)_ | `@container (width >= 72rem) { … }` |
| `@7xl` | 80rem _(1280px)_ | `@container (width >= 80rem) { … }` |

### On this page

*   [Overview](#overview)
    
*   [Working mobile-first](#working-mobile-first)
    *   [Targeting mobile screens](#targeting-mobile-screens)
        
    *   [Targeting a breakpoint range](#targeting-a-breakpoint-range)
        
    *   [Targeting a single breakpoint](#targeting-a-single-breakpoint)
        
*   [Using custom breakpoints](#using-custom-breakpoints)
    *   [Customizing your theme](#customizing-your-theme)
        
    *   [Removing default breakpoints](#removing-default-breakpoints)
        
    *   [Using arbitrary values](#using-arbitrary-values)
        
*   [Container queries](#container-queries)
    *   [What are container queries?](#what-are-container-queries)
        
    *   [Basic example](#basic-example)
        
    *   [Max-width container queries](#max-width-container-queries)
        
    *   [Container query ranges](#container-query-ranges)
        
    *   [Named containers](#named-containers)
        
    *   [Using custom container sizes](#using-custom-container-sizes)
        
    *   [Using container query units](#using-container-query-units)
        
    *   [Container size reference](#container-size-reference)
        

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Dark mode - Core concepts - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Core concepts
2.  Dark mode

Core concepts

Dark mode
=========

Using variants to style your site in dark mode.

[Overview](#overview)

----------------------

Now that dark mode is a first-class feature of many operating systems, it's becoming more and more common to design a dark version of your website to go along with the default design.

To make this as easy as possible, Tailwind includes a `dark` variant that lets you style your site differently when dark mode is enabled:

Light mode

Writes upside-down

The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.

Dark mode

Writes upside-down

The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.

    <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">  <div>    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">      <svg class="h-6 w-6 stroke-white" ...>        <!-- ... -->      </svg>    </span>  </div>  <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.  </p></div>

By default this uses the `prefers-color-scheme` CSS media feature, but you can also build sites that support [toggling dark mode manually](#toggling-dark-mode-manually)
 by overriding the dark variant.

[Toggling dark mode manually](#toggling-dark-mode-manually)

------------------------------------------------------------

If you want your dark theme to be driven by a CSS selector instead of the `prefers-color-scheme` media query, override the `dark` variant to use your custom selector:

app.css

    @import "tailwindcss";@custom-variant dark (&:where(.dark, .dark *));

Now instead of `dark:*` utilities being applied based on `prefers-color-scheme`, they will be applied whenever the `dark` class is present earlier in the HTML tree:

HTML

    <html class="dark">  <body>    <div class="bg-white dark:bg-black">      <!-- ... -->    </div>  </body></html>

How you add the `dark` class to the `html` element is up to you, but a common approach is to use a bit of JavaScript that updates the `class` attribute and syncs that preference to somewhere like `localStorage`.

### [Using a data attribute](#using-a-data-attribute)

To use a data attribute instead of a class to activate dark mode, just override the `dark` variant with an attribute selector instead:

app.css

    @import "tailwindcss";@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

Now dark mode utilities will be applied whenever the `data-theme` attribute is set to `dark` somewhere up the tree:

HTML

    <html data-theme="dark">  <body>    <div class="bg-white dark:bg-black">      <!-- ... -->    </div>  </body></html>

### [With system theme support](#with-system-theme-support)

To build three-way theme toggles that support light mode, dark mode, and your system theme, use a custom dark mode selector and the [`window.matchMedia()` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
 to detect the system theme and update the `html` element when needed.

Here's a simple example of how you can support light mode, dark mode, as well as respecting the operating system preference:

spaghetti.js

    // On page load or when changing themes, best to add inline in `head` to avoid FOUCdocument.documentElement.classList.toggle(  "dark",  localStorage.theme === "dark" ||    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),);// Whenever the user explicitly chooses light modelocalStorage.theme = "light";// Whenever the user explicitly chooses dark modelocalStorage.theme = "dark";// Whenever the user explicitly chooses to respect the OS preferencelocalStorage.removeItem("theme");

Again you can manage this however you like, even storing the preference server-side in a database and rendering the class on the server — it's totally up to you.

### On this page

*   [Overview](#overview)
    
*   [Toggling dark mode manually](#toggling-dark-mode-manually)
    *   [Using a data attribute](#using-a-data-attribute)
        
    *   [With system theme support](#with-system-theme-support)
        

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Styling with utility classes - Core concepts - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Core concepts
2.  Styling with utility classes

Core concepts

Styling with utility classes
============================

Building complex components from a constrained set of primitive utilities.

[Overview](#overview)

----------------------

You style things with Tailwind by combining many single-purpose presentational classes _(utility classes)_ directly in your markup:

ChitChat

You have a new message!

    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">  <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />  <div>    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>  </div></div>

For example, in the UI above we've used:

*   The [display](/docs/display#flex)
     and [padding](/docs/padding)
     utilities (`flex`, `shrink-0`, and `p-6`) to control the overall layout
*   The [max-width](/docs/max-width)
     and [margin](/docs/margin)
     utilities (`max-w-sm` and `mx-auto`) to constrain the card width and center it horizontally
*   The [background-color](/docs/background-color)
    , [border-radius](/docs/border-radius)
    , and [box-shadow](/docs/box-shadow)
     utilities (`bg-white`, `rounded-xl`, and `shadow-lg`) to style the card's appearance
*   The [width](/docs/width)
     and [height](/docs/height)
     utilities (`size-12`) to set the width and height of the logo image
*   The [gap](/docs/gap)
     utilities (`gap-x-4`) to handle the spacing between the logo and the text
*   The [font-size](/docs/font-size)
    , [color](/docs/text-color)
    , and [font-weight](/docs/font-weight)
     utilities (`text-xl`, `text-black`, `font-medium`, etc.) to style the card text

Styling things this way contradicts a lot of traditional best practices, but once you try it you'll quickly notice some really important benefits:

*   **You get things done faster** — you don't spend any time coming up with class names, making decisions about selectors, or switching between HTML and CSS files, so your designs come together very fast.
*   **Making changes feels safer** — adding or removing a utility class to an element only ever affects that element, so you never have to worry about accidentally breaking something another page that's using the same CSS.
*   **Maintaining old projects is easier** — changing something just means finding that element in your project and changing the classes, not trying to remember how all of that custom CSS works that you haven't touched in six months.
*   **Your code is more portable** — since both the structure and styling live in the same place, you can easily copy and paste entire chunks of UI around, even between different projects.
*   **Your CSS stops growing** — since utility classes are so reusable, your CSS doesn't continue to grow linearly with every new feature you add to a project.

These benefits make a big difference on small projects, but they are even more valuable for teams working on long-running projects at scale.

### [Why not just use inline styles?](#why-not-just-use-inline-styles)

A common reaction to this approach is wondering, “isn’t this just inline styles?” and in some ways it is — you’re applying styles directly to elements instead of assigning them a class name and then styling that class.

But using utility classes has many important advantages over inline styles, for example:

*   **Designing with constraints** — using inline styles, every value is a magic number. With utilities, you’re choosing styles from a [predefined design system](/docs/theme)
    , which makes it much easier to build visually consistent UIs.
*   **Hover, focus, and other states** — inline styles can’t target states like hover or focus, but Tailwind’s [state variants](/docs/hover-focus-and-other-states)
     make it easy to style those states with utility classes.
*   **Media queries** — you can’t use media queries in inline styles, but you can use Tailwind’s [responsive variants](/docs/responsive-design)
     to build fully responsive interfaces easily.

This component is fully responsive and includes a button with hover and active styles, and is built entirely with utility classes:

![Woman's Face](/_next/static/media/erin-lindford.90b9d461.jpg)

Erin Lindford

Product Engineer

Message

    <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="" />  <div class="space-y-2 text-center sm:text-left">    <div class="space-y-0.5">      <p class="text-lg font-semibold text-black">Erin Lindford</p>      <p class="font-medium text-gray-500">Product Engineer</p>    </div>    <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">      Message    </button>  </div></div>

[Thinking in utility classes](#thinking-in-utility-classes)

------------------------------------------------------------

### [Styling hover and focus states](#styling-hover-and-focus-states)

To style an element on states like hover or focus, prefix any utility with the state you want to target, for example `hover:bg-sky-700`:

Hover over this button to see the background color change

Save changes

    <button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>

These prefixes are called [variants](/docs/hover-focus-and-other-states)
 in Tailwind, and they only apply the styles from a utility class when the condition for that variant matches.

Here's what the generated CSS looks like for the `hover:bg-sky-700` class:

Generated CSS

    .hover\:bg-sky-700 {  &:hover {    background-color: var(--color-sky-700);  }}

Notice how this class does nothing _unless_ the element is hovered? Its _only_ job is to provide hover styles — nothing else.

This is different from how you'd write traditional CSS, where a single class would usually provide the styles for many states:

HTML

    <button class="btn">Save changes</button><style>  .btn {    background-color: var(--color-sky-500);    &:hover {      background-color: var(--color-sky-700);    }  }</style>

You can even stack variants in Tailwind to apply a utility when multiple conditions match, like combining `hover:` and `disabled:`

    <button class="bg-sky-500 disabled:hover:bg-sky-500 ...">Save changes</button>

Learn more in the documentation styling elements on [hover, focus, and other states](/docs/hover-focus-and-other-states)
.

### [Media queries and breakpoints](#media-queries-and-breakpoints)

Just like hover and focus states, you can style elements at different breakpoints by prefixing any utility with the breakpoint where you want that style to apply:

Resize this example to see the layout change

01

02

03

04

05

06

    <div class="grid grid-cols-2 sm:grid-cols-3">  <!-- ... --></div>

In the example above, the `sm:` prefix makes sure that `grid-cols-3` only triggers at the `sm` breakpoint and above, which is 40rem out of the box:

Generated CSS

    .sm\:grid-cols-3 {  @media (width >= 40rem) {    grid-template-columns: repeat(3, minmax(0, 1fr));  }}

Learn more in the [responsive design](/docs/responsive-design)
 documentation.

### [Targeting dark mode](#targeting-dark-mode)

Styling an element in dark mode is just a matter of adding the `dark:` prefix to any utility you want to apply when dark mode is active:

Light mode

Writes upside-down

The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.

Dark mode

Writes upside-down

The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.

    <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">  <div>    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">      <svg        class="h-6 w-6 text-white"        fill="none"        viewBox="0 0 24 24"        stroke="currentColor"        aria-hidden="true"      >        <!-- ... -->      </svg>    </span>  </div>  <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.  </p></div>

Just like with hover states or media queries, the important thing to understand is that a single utility class will never include _both_ the light and dark styles — you style things in dark mode by using multiple classes, one for the light mode styles and another for the dark mode styles.

Generated CSS

    .dark\:bg-gray-800 {  @media (prefers-color-scheme: dark) {    background-color: var(--color-gray-800);  }}

Learn more in the [dark mode](/docs/dark-mode)
 documentation.

### [Using class composition](#using-class-composition)

A lot of the time with Tailwind you'll even use multiple classes to build up the value for a single CSS property, for example adding multiple filters to an element:

HTML

    <div class="blur-sm grayscale">  <!-- ... --></div>

Both of these effects rely on the `filter` property in CSS, so Tailwind uses CSS variables to make it possible to compose these effects together:

Generated CSS

    .blur-sm {  --tw-blur: blur(var(--blur-sm));  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-grayscale,);}.grayscale {  --tw-grayscale: grayscale(100%);  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-grayscale,);}

The generated CSS above is slightly simplified, but the trick here is that each utility sets a CSS variable just for the effect it's meant to apply. Then the `filter` property looks at all of these variables, falling back to nothing if the variable hasn't been set.

Tailwind uses this same approach for [gradients](/docs/background-image#adding-a-linear-gradient)
, [shadow colors](/docs/box-shadow#setting-the-shadow-color)
, [transforms](/docs/translate)
, and more.

### [Using arbitrary values](#using-arbitrary-values)

Many utilities in Tailwind are driven by [theme variables](/docs/theme)
, like `bg-blue-500`, `text-xl`, and `shadow-md`, which map to your underlying color palette, type scale, and shadows.

When you need to use a one-off value outside of your theme, use the special square bracket syntax for specifying arbitrary values:

HTML

    <button class="bg-[#316ff6] ...">  Sign in with Facebook</button>

This can be useful for one-off colors outside of your color palette _(like the Facebook blue above)_, but also when you need a complex custom value like a very specific grid:

HTML

    <div class="grid grid-cols-[24rem_2.5rem_minmax(0,1fr)]">  <!-- ... --></div>

It's also useful when you need to use CSS features like `calc()`, even if you are using your theme values:

HTML

    <div class="max-h-[calc(100dvh-(--spacing(6))]">  <!-- ... --></div>

There's even a syntax for generating completely arbitrary CSS including an arbitrary property name, which can be useful for setting CSS variables:

HTML

    <div class="[--gutter-width:1rem] lg:[--gutter-width:2rem]">  <!-- ... --></div>

Learn more in the documentation on [using arbitrary values](/docs/adding-custom-styles#using-arbitrary-values)
.

#### [How does this even work?](#how-does-this-even-work)

Tailwind CSS isn't one big static stylesheet like you might be used to with other CSS frameworks — it generates the CSS needed based on the classes you're actually using when you compile your CSS.

It does this by scanning all of the files in your project looking for any symbol that looks like it could be a class name:

Button.jsx

    export default function Button({ size, children }) {  let sizeClasses = {    md: "px-4 py-2 rounded-md text-base",    lg: "px-5 py-3 rounded-lg text-lg",  }[size];  return (    <button type="button" className={`font-bold ${sizeClasses}`}>      {children}    </button>  );}

After it's found all of the potential classes, Tailwind generates the CSS for each one and compiles it all into one stylesheet of just the styles you actually need.

Since the CSS is generated based on the class name, Tailwind can recognize classes using arbitrary values like `bg-[#316ff6]` and generate the necessary CSS, even when the value isn't part of your theme.

Learn more about how this works in [detecting classes in source files](/docs/detecting-classes-in-source-files)
.

### [Complex selectors](#complex-selectors)

Sometimes you need to style an element under a combination of conditions, for example in dark mode, at a specific breakpoint, when hovered, and when the element has a specific data attribute.

Here's an example of what that looks like with Tailwind:

HTML

    <button class="dark:lg:data-current:hover:bg-indigo-600 ...">  <!-- ... --></button>

Simplified CSS

    @media (prefers-color-scheme: dark) and (width >= 64rem) {  button[data-current]:hover {    background-color: var(--color-indigo-600);  }}

Tailwind also supports things like `group-hover`, which let you style an element when a specific parent is hovered:

HTML

    <a href="#" class="group rounded-lg p-8">  <!-- ... -->  <span class="group-hover:underline">Read more…</span></a>

Simplified CSS

    @media (hover: hover) {  a:hover span {    text-decoration-line: underline;  }}

This `group-*` syntax works with other variants too, like `group-focus`, `group-active`, and [many more](/docs/hover-focus-and-other-states#styling-based-on-parent-state)
.

For really complex scenarios _(especially when styling HTML you don't control)_, Tailwind supports [arbitrary variants](/docs/adding-custom-styles#arbitrary-variants)
 which let you write any selector you want, directly in a class name:

HTML

    <div class="[&>[data-active]+span]:text-blue-600 ...">  <span data-active><!-- ... --></span>  <span>This text will be blue</span></div>

Simplified CSS

    div > [data-active] + span {  color: var(--color-blue-600);}

### [When to use inline styles](#when-to-use-inline-styles)

Inline styles are still very useful in Tailwind CSS projects, particularly when a value is coming from a dynamic source like a database or API:

branded-button.jsx

    export function BrandedButton({ buttonColor, textColor, children }) {  return (    <button      style={{        backgroundColor: buttonColor,        color: textColor,      }}      className="rounded-md px-3 py-1.5 font-medium"    >      {children}    </button>  );}

You might also reach for an inline style for very complicated arbitrary values that are difficult to read when formatted as a class name:

HTML

    <div class="grid-[2fr_max(0,var(--gutter-width))_calc(var(--gutter-width)+10px)]"><div style="grid-template-columns: 2fr max(0, var(--gutter-width)) calc(var(--gutter-width) + 10px)">  <!-- ... --></div>

Another useful pattern is setting CSS variables based on dynamic sources using inline styles, then referencing those variables with utility classes:

branded-button.jsx

    export function BrandedButton({ buttonColor, buttonColorHover, textColor, children }) {  return (    <button      style={{        "--bg-color": buttonColor,        "--bg-color-hover": buttonColorHover,        "--text-color": textColor,      }}      className="bg-(--bg-color) text-(--text-color) hover:bg-(--bg-color-hover) ..."    >      {children}    </button>  );}

[Managing duplication](#managing-duplication)

----------------------------------------------

When you build entire projects with just utility classes, you'll inevitably find yourself repeating certain patterns to recreate the same design in different places.

For example, here the utility classes for each avatar image are repeated five separate times:

#### Contributors

204

![](https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)![](https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)![](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80)![](https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)![](https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

[*   198 others](#)

    <div>  <div class="flex items-center space-x-2 text-base">    <h4 class="font-semibold text-slate-900">Contributors</h4>    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>  </div>  <div class="mt-3 flex -space-x-2 overflow-hidden">    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />  </div>  <div class="mt-3 text-sm font-medium">    <a href="#" class="text-blue-500">+ 198 others</a>  </div></div>

Don't panic! In practice this isn't the problem you might be worried it is, and the strategies for dealing with it are things you already do every day.

### [Using loops](#using-loops)

A lot of the time a design element that shows up more than once in the rendered page is only actually authored once because the actual markup is rendered in a loop.

For example, the duplicate avatars at the beginning of this guide would almost certainly be rendered in a loop in a real project:

#### Contributors

204

![](https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)![](https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)![](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80)![](https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)![](https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)

[*   198 others](#)

    <div>  <div class="flex items-center space-x-2 text-base">    <h4 class="font-semibold text-slate-900">Contributors</h4>    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>  </div>  <div class="mt-3 flex -space-x-2 overflow-hidden">    {#each contributors as user}      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={user.avatarUrl} alt={user.handle} />    {/each}  </div>  <div class="mt-3 text-sm font-medium">    <a href="#" class="text-blue-500">+ 198 others</a>  </div></div>

When elements are rendered in a loop like this, the actual class list is only written once so there's no actual duplication problem to solve.

### [Using multi-cursor editing](#using-multi-cursor-editing)

When duplication is localized to a group of elements in a single file, the easiest way to deal with it is to use [multi-cursor editing](https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor)
 to quickly select and edit the class list for each element at once:

You'd be surprised at how often this ends up being the best solution. If you can quickly edit all of the duplicated class lists simultaneously, there's no benefit to introducing any additional abstraction.

    <nav class="flex justify-center space-x-4">  <a href="/dashboard" class="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">    Home  </a>  <a href="/team" class="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">    Team  </a>  <a href="/projects" class="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">    Projects  </a>  <a href="/reports" class="font-medium rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">    Reports  </a></nav>

### [Using components](#using-components)

If you need to reuse some styles across multiple files, the best strategy is to create a _component_ if you're using a front-end framework like React, Svelte, or Vue, or a _template partial_ if you're using a templating language like Blade, ERB, Twig, or Nunjucks.

![Beach](https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=80)

Private Villa

[Relaxing All-Inclusive Resort in Cancun](#)

$299 USD per night

    export function VacationCard({ img, imgAlt, eyebrow, title, pricing, url }) {  return (    <div>      <img className="rounded-lg" src={img} alt={imgAlt} />      <div className="mt-4">        <div className="text-xs font-bold text-sky-500">{eyebrow}</div>        <div className="mt-1 font-bold text-gray-700">          <a href={url} className="hover:underline">            {title}          </a>        </div>        <div className="mt-2 text-sm text-gray-600">{pricing}</div>      </div>    </div>  );}

Now you can use this component in as many places as you like, while still having a single source of truth for the styles so they can easily be updated together in one place.

### [Using custom CSS](#using-custom-css)

If you're using a templating language like ERB or Twig instead of something like React or Vue, creating a template partial for something as small as a button can feel like overkill compared to a simple CSS class like `btn`.

While it's highly recommended that you create proper template partials for more complex components, writing some custom CSS is totally fine when a template partial feels heavy-handed.

Here's what a `btn-primary` class might look like, using [theme variables](/docs/theme#with-custom-css)
 to keep the design consistent:

Save changes

HTML

    <button class="btn-primary">Save changes</button>

CSS

    @import "tailwindcss";@layer components {  .btn-primary {    border-radius: calc(infinity * 1px);    background-color: var(--color-violet-500);    padding-inline: --spacing(5);    padding-block: --spacing(2);    font-weight: var(--font-weight-semibold);    color: var(--color-white);    box-shadow: var(--shadow-md);    &:hover {      @media (hover: hover) {        background-color: var(--color-violet-700);      }    }  }}

Again though, for anything that's more complicated than just a single HTML element, we highly recommend using template partials so the styles and structure can be encapsulated in one place.

[Managing style conflicts](#managing-style-conflicts)

------------------------------------------------------

### [Conflicting utility classes](#conflicting-utility-classes)

When you add two classes that target the same CSS property, the class that appears later in the stylesheet wins. So in this example, the element will receive `display: grid` even though `flex` comes last in the actual `class` attribute:

HTML

    <div class="grid flex">  <!-- ... --></div>

CSS

    .flex {  display: flex;}.grid {  display: grid;}

In general, you should just never add two conflicting classes to the same element — only ever add the one you actually want to take effect:

example.jsx

    export function Example({ gridLayout }) {  return <div className={gridLayout ? "grid" : "flex"}>{/* ... */}</div>;}

Using component-based libraries like React or Vue, this often means exposing specific props for styling customizations instead of letting consumers add extra classes from outside of a component, since those styles will often conflict.

### [Using the important modifier](#using-the-important-modifier)

When you really need to force a specific utility class to take effect and have no other means of managing the specificity, you can add `!` to the end of the class name to make all of the declarations `!important`:

HTML

    <div class="bg-teal-500 bg-red-500!">  <!-- ... --></div>

Generated CSS

    .bg-red-500\! {  background-color: var(--color-red-500) !important;}.bg-teal-500 {  background-color: var(--color-teal-500);}

### [Using the important flag](#using-the-important-flag)

If you're adding Tailwind to a project that has existing complex CSS with high specificity rules, you can use the `important` flag when importing Tailwind to mark _all_ utilities as `!important`:

app.css

    @import "tailwindcss" important;

Compiled CSS

    @layer utilities {  .flex {    display: flex !important;  }  .gap-4 {    gap: 1rem !important;  }  .underline {    text-decoration-line: underline !important;  }}

### [Using the prefix option](#using-the-prefix-option)

If your project has class names that conflict with Tailwind CSS utilities, you can prefix all Tailwind-generated classes and CSS variables using the `prefix` option:

app.css

    @import "tailwindcss" prefix(tw);

Compiled CSS

    @layer theme {  :root {    --tw-color-red-500: oklch(0.637 0.237 25.331);  }}@layer utilities {  .tw\:text-red-500 {    color: var(--tw-color-red-500);  }}

### On this page

*   [Overview](#overview)
    *   [Why not just use inline styles?](#why-not-just-use-inline-styles)
        
*   [Thinking in utility classes](#thinking-in-utility-classes)
    *   [Styling hover and focus states](#styling-hover-and-focus-states)
        
    *   [Media queries and breakpoints](#media-queries-and-breakpoints)
        
    *   [Targeting dark mode](#targeting-dark-mode)
        
    *   [Using class composition](#using-class-composition)
        
    *   [Using arbitrary values](#using-arbitrary-values)
        
    *   [Complex selectors](#complex-selectors)
        
    *   [When to use inline styles](#when-to-use-inline-styles)
        
*   [Managing duplication](#managing-duplication)
    *   [Using loops](#using-loops)
        
    *   [Using multi-cursor editing](#using-multi-cursor-editing)
        
    *   [Using components](#using-components)
        
    *   [Using custom CSS](#using-custom-css)
        
*   [Managing style conflicts](#managing-style-conflicts)
    *   [Conflicting utility classes](#conflicting-utility-classes)
        
    *   [Using the important modifier](#using-the-important-modifier)
        
    *   [Using the important flag](#using-the-important-flag)
        
    *   [Using the prefix option](#using-the-prefix-option)
        

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Upgrade guide - Getting started - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Getting started
2.  Upgrade guide

Getting started

Upgrade guide
=============

Upgrading your Tailwind CSS projects from v3 to v4.

Tailwind CSS v4.0 is a new major version of the framework, so while we've worked really hard to minimize breaking changes, some updates are necessary. This guide outlines all the steps required to upgrade your projects from v3 to v4.

**Tailwind CSS v4.0 is designed for Safari 16.4+, Chrome 111+, and Firefox 128+.** If you need to support older browsers, stick with v3.4 until your browser support requirements change.

[Using the upgrade tool](#using-the-upgrade-tool)

--------------------------------------------------

If you'd like to upgrade a project from v3 to v4, you can use our upgrade tool to do the vast majority of the heavy lifting for you:

Terminal

    $ npx @tailwindcss/upgrade

For most projects, the upgrade tool will automate the entire migration process including updating your dependencies, migrating your configuration file to CSS, and handling any changes to your template files.

The upgrade tool requires Node.js 20 or higher, so ensure your environment is updated before running it.

**We recommend running the upgrade tool in a new branch**, then carefully reviewing the diff and testing your project in the browser to make sure all of the changes look correct. You may need to tweak a few things by hand in complex projects, but the tool will save you a ton of time either way.

It's also a good idea to go over all of the [breaking changes](#changes-from-v3)
 in v4 and get a good understanding of what's changed, in case there are other things you need to update in your project that the upgrade tool doesn't catch.

[Upgrading manually](#upgrading-manually)

------------------------------------------

### [Using PostCSS](#using-postcss)

In v3, the `tailwindcss` package was a PostCSS plugin, but in v4 the PostCSS plugin lives in a dedicated `@tailwindcss/postcss` package.

Additionally, in v4 imports and vendor prefixing is now handled for you automatically, so you can remove `postcss-import` and `autoprefixer` if they are in your project:

postcss.config.mjs

    export default {  plugins: {    "postcss-import": {},    tailwindcss: {},    autoprefixer: {},    "@tailwindcss/postcss": {},  },};

### [Using Vite](#using-vite)

If you're using Vite, we recommend migrating from the PostCSS plugin to our new dedicated Vite plugin for improved performance and the best developer experience:

vite.config.ts

    import { defineConfig } from "vite";import tailwindcss from "@tailwindcss/vite";export default defineConfig({  plugins: [    tailwindcss(),  ],});

### [Using Tailwind CLI](#using-tailwind-cli)

In v4, Tailwind CLI lives in a dedicated `@tailwindcss/cli` package. Update any of your build commands to use the new package instead:

Terminal

    npx tailwindcss -i input.css -o output.cssnpx @tailwindcss/cli -i input.css -o output.css

[Changes from v3](#changes-from-v3)

------------------------------------

Here's a comprehensive list of all the breaking changes in Tailwind CSS v4.0.

Our [upgrade tool](#using-the-upgrade-tool)
 will handle most of these changes for you automatically, so we highly recommend using it if you can.

### [Browser requirements](#browser-requirements)

Tailwind CSS v4.0 is designed for modern browsers and targets Safari 16.4, Chrome 111, and Firefox 128. We depend on modern CSS features like `@property` and `color-mix()` for core framework features, and Tailwind CSS v4.0 will not work in older browsers.

If you need to support older browsers, we recommend sticking with v3.4 for now. We're actively exploring a compatibility mode to help people upgrade sooner that we hope to share more news on in the future.

### [Removed @tailwind directives](#removed-tailwind-directives)

In v4 you import Tailwind using a regular CSS `@import` statement, not using the `@tailwind` directives you used in v3:

CSS

    @tailwind base;@tailwind components;@tailwind utilities;@import "tailwindcss";

### [Removed deprecated utilities](#removed-deprecated-utilities)

We've removed any utilities that were deprecated in v3 and have been undocumented for several years. Here's a list of what's been removed along with the modern alternative:

| Deprecated | Replacement |
| --- | --- |
| `bg-opacity-*` | Use opacity modifiers like `bg-black/50` |
| `text-opacity-*` | Use opacity modifiers like `text-black/50` |
| `border-opacity-*` | Use opacity modifiers like `border-black/50` |
| `divide-opacity-*` | Use opacity modifiers like `divide-black/50` |
| `ring-opacity-*` | Use opacity modifiers like `ring-black/50` |
| `placeholder-opacity-*` | Use opacity modifiers like `placeholder-black/50` |
| `flex-shrink-*` | `shrink-*` |
| `flex-grow-*` | `grow-*` |
| `overflow-ellipsis` | `text-ellipsis` |
| `decoration-slice` | `box-decoration-slice` |
| `decoration-clone` | `box-decoration-clone` |

### [Renamed utilities](#renamed-utilities)

We've renamed the following utilities in v4 to make them more consistent and predictable:

| v3  | v4  |
| --- | --- |
| `shadow-sm` | `shadow-xs` |
| `shadow` | `shadow-sm` |
| `drop-shadow-sm` | `drop-shadow-xs` |
| `drop-shadow` | `drop-shadow-sm` |
| `blur-sm` | `blur-xs` |
| `blur` | `blur-sm` |
| `backdrop-blur-sm` | `backdrop-blur-xs` |
| `backdrop-blur` | `backdrop-blur-sm` |
| `rounded-sm` | `rounded-xs` |
| `rounded` | `rounded-sm` |
| `outline-none` | `outline-hidden` |
| `ring` | `ring-3` |

#### [Updated shadow, radius, and blur scales](#updated-shadow-radius-and-blur-scales)

We've renamed the default shadow, radius and blur scales to make sure every utility has a named value. The "bare" versions still work for backward compatibility, but the `_<utility>_-sm` utilities will look different unless updated to their respective `_<utility>_-xs` versions.

To update your project for these changes, replace all the v3 utilities with their v4 versions:

HTML

    <input class="shadow-sm" /><input class="shadow-xs" /><input class="shadow" /><input class="shadow-sm" />

#### [Renamed outline utility](#renamed-outline-utility)

The `outline` utility now sets `outline-width: 1px` by default to be more consistent with border and ring utilities. Furthermore all `outline-<number>` utilities default `outline-style` to `solid`, omitting the need to combine them with `outline`:

HTML

    <input class="outline outline-2" /><input class="outline-2" />

The `outline-none` utility previously didn't actually set `outline-style: none`, and instead set an invisible outline that would still show up in forced colors mode for accessibility reasons.

To make this more clear we've renamed this utility to `outline-hidden` and added a new `outline-none` utility that actually sets `outline-style: none`.

To update your project for this change, replace any usage of `outline-none` with `outline-hidden`:

HTML

    <input class="focus:outline-none" /><input class="focus:outline-hidden" />

#### [Default ring width change](#default-ring-width-change)

In v3, the `ring` utility added a `3px` ring. We've changed this in v4 to be `1px` to make it consistent with borders and outlines.

To update your project for this change, replace any usage of `ring` with `ring-3`:

HTML

    <input class="ring ring-blue-500" /><input class="ring-3 ring-blue-500" />

### [Space-between selector](#space-between-selector)

We've changed the selector used by the [`space-x-*` and `space-y-*` utilities](/docs/margin#adding-space-between-children)
 to address serious performance issues on large pages:

CSS

    /* Before */.space-y-4 > :not([hidden]) ~ :not([hidden]) {  margin-top: 1rem;}/* Now */.space-y-4 > :not(:last-child) {  margin-bottom: 1rem;}

You might see changes in your project if you were ever using these utilities with inline elements, or if you were adding other margins to child elements to tweak their spacing.

If this change causes any issues in your project, we recommend migrating to a flex or grid layout and using `gap` instead:

HTML

    <div class="space-y-4 p-4"><div class="flex flex-col gap-4 p-4">  <label for="name">Name</label>  <input type="text" name="name" /></div>

### [Using variants with gradients](#using-variants-with-gradients)

In v3, overriding part of a gradient with a variant would "reset" the entire gradient, so in this example the `to-*` color would be transparent in dark mode instead of yellow:

HTML

    <div class="bg-gradient-to-r from-red-500 to-yellow-400 dark:from-blue-500">  <!-- ... --></div>

In v4, these values are preserved which is more consistent with how other utilities in Tailwind work.

This means you may need to explicitly use `via-none` if you want to "unset" a three-stop gradient back to a two-stop gradient in a specific state:

HTML

    <div class="bg-linear-to-r from-red-500 via-orange-400 to-yellow-400 dark:via-none dark:from-blue-500 dark:to-teal-400">  <!-- ... --></div>

### [Container configuration](#container-configuration)

In v3, the `container` utility had several configuration options like `center` and `padding` that no longer exist in v4.

To customize the `container` utility in v4, extend it using the `@utility` directive:

CSS

    @utility container {  margin-inline: auto;  padding-inline: 2rem;}

### [Default border color](#default-border-color)

In v3, the `border-*` and `divide-*` utilities used your configured `gray-200` color by default. We've changed this to `currentColor` in v4 to make Tailwind less opinionated and match browser defaults.

To update your project for this change, make sure you specify a color anywhere you're using a `border-*` or `divide-*` utility:

    <div class="border border-gray-200 px-2 py-3 ...">  <!-- ... --></div>

Alternatively, add these base styles to your project to preserve the v3 behavior:

CSS

    @layer base {  *,  ::after,  ::before,  ::backdrop,  ::file-selector-button {    border-color: var(--color-gray-200, currentColor);  }}

### [Default ring width and color](#default-ring-width-and-color)

We've changed the width of the `ring` utility from 3px to 1px and changed the default color from `blue-500` to `currentColor` to make things more consistent the `border-*`, `divide-*`, and `outline-*` utilities.

To update your project for these changes, replace any use of `ring` with `ring-3`:

    <button class="focus:ring ..."><button class="focus:ring-3 ...">  <!-- ... --></button>

Then make sure to add `ring-blue-500` anywhere you were depending on the default ring color:

    <button class="focus:ring-3 focus:ring-blue-500 ...">  <!-- ... --></button>

Alternatively, add these theme variables to your CSS to preserve the v3 behavior:

CSS

    @theme {  --default-ring-width: 3px;  --default-ring-color: var(--color-blue-500);}

Note though that these variables are only supported for compatibility reasons, and are not considered idiomatic usage of Tailwind CSS v4.0.

### [Preflight changes](#preflight-changes)

We've made a couple small changes to the base styles in Preflight in v4:

#### [New default placeholder color](#new-default-placeholder-color)

In v3, placeholder text used your configured `gray-400` color by default. We've simplified this in v4 to just use the current text color at 50% opacity.

You probably won't even notice this change (it might even make your project look better), but if you want to preserve the v3 behavior, add this CSS to your project:

CSS

    @layer base {  input::placeholder,  textarea::placeholder {    color: var(--color-gray-400);  }}

#### [Buttons use the default cursor](#buttons-use-the-default-cursor)

Buttons now use `cursor: default` instead of `cursor: pointer` to match the default browser behavior.

If you'd like to continue using `cursor: pointer` by default, add these base styles to your CSS:

CSS

    @layer base {  button:not(:disabled),  [role="button"]:not(:disabled) {    cursor: pointer;  }}

#### [Dialog margins removed](#dialog-margins-removed)

Preflight now resets margins on `<dialog>` elements to be consistent with how other elements are reset.

If you still want dialogs to be centered by default, add this CSS to your project:

CSS

    @layer base {  dialog {    margin: auto;  }}

### [Using a prefix](#using-a-prefix)

Prefixes now look like variants and are always at the beginning of the class name:

    <div class="tw:flex tw:bg-red-500 tw:hover:bg-red-600">  <!-- ... --></div>

When using a prefix, you should still configure your theme variables as if you aren't using a prefix:

    @import "tailwindcss" prefix(tw);@theme {  --font-display: "Satoshi", "sans-serif";  --breakpoint-3xl: 120rem;  --color-avocado-100: oklch(0.99 0 0);  --color-avocado-200: oklch(0.98 0.04 113.22);  --color-avocado-300: oklch(0.94 0.11 115.03);  /* ... */}

The generated CSS variables _will_ include a prefix to avoid conflicts with any existing variables in your project:

    :root {  --tw-font-display: "Satoshi", "sans-serif";  --tw-breakpoint-3xl: 120rem;  --tw-color-avocado-100: oklch(0.99 0 0);  --tw-color-avocado-200: oklch(0.98 0.04 113.22);  --tw-color-avocado-300: oklch(0.94 0.11 115.03);  /* ... */}

### [Adding custom utilities](#adding-custom-utilities)

In v3, any custom classes you defined within `@layer utilities` or `@layer components` would get picked up by Tailwind as a true utility class and would automatically work with variants like `hover`, `focus`, or `lg` with the difference being that `@layer components` would always come first in the generated stylesheet.

In v4 we are using native cascade layers and no longer hijacking the `@layer` at-rule, so we've introduced the `@utility` API as a replacement:

CSS

    @layer utilities {  .tab-4 {    tab-size: 4;  }}@utility tab-4 {  tab-size: 4;}

Custom utilities are now also sorted based on the amount of properties they define. This means that component utilities like this `.btn` can be overwritten by other Tailwind utilities without additional configuration:

CSS

    @layer components {  .btn {    border-radius: 0.5rem;    padding: 0.5rem 1rem;    background-color: ButtonFace;  }}@utility btn {  border-radius: 0.5rem;  padding: 0.5rem 1rem;  background-color: ButtonFace;}

Learn more about registering custom utilities in the [adding custom utilities documentation](/docs/adding-custom-styles#adding-custom-utilities)
.

### [Variant stacking order](#variant-stacking-order)

In v3, stacked variants were applied from right to left, but in v4 we've updated them to apply left to right to look more like CSS syntax.

To update your project for this change, reverse the order of any order-sensitive stacked variants in your project:

HTML

    <ul class="py-4 first:*:pt-0 last:*:pb-0"><ul class="py-4 *:first:pt-0 *:last:pb-0">  <li>One</li>  <li>Two</li>  <li>Three</li></ul>

You likely have very few of these if any—the direct child variant (`*`) and any typography plugin variants (`prose-headings`) are the most likely ones you might be using, and even then it's only if you've stacked them with other variants.

### [Variables in arbitrary values](#variables-in-arbitrary-values)

In v3 you were able to use CSS variables as arbitrary values without `var()`, but recent updates to CSS mean that this can often be ambiguous, so we've changed the syntax for this in v4 to use parentheses instead of square brackets.

To update your project for this change, replace usage of the old variable shorthand syntax with the new variable shorthand syntax:

HTML

    <div class="bg-[--brand-color]"></div><div class="bg-(--brand-color)"></div>

### [Hover styles on mobile](#hover-styles-on-mobile)

In v4 we've updated the `hover` variant to only apply when the primary input device supports hover:

CSS

    @media (hover: hover) {  .hover\:underline:hover {    text-decoration: underline;  }}

This can create problems if you've built your site in a way that depends on touch devices triggering hover on tap. If this is an issue for you, you can override the `hover` variant with your own variant that uses the old implementation:

CSS

    @custom-variant hover (&:hover);

Generally though we recommend treating hover functionality as an enhancement, and not depending on it for your site to work since touch devices don't truly have the ability to hover.

### [Transitioning outline-color](#transitioning-outline-color)

The `transition` and `transition-color` utilities now include the `outline-color` property.

This means if you were adding an outline with a custom color on focus, you will see the color transition from the default color. To avoid this, make sure you set the outline color unconditionally, or explicitly set it for both states:

HTML

    <button class="transition hover:outline-2 hover:outline-cyan-500"></button><button class="outline-cyan-500 transition hover:outline-2"></button>

### [Disabling core plugins](#disabling-core-plugins)

In v3 there was a `corePlugins` option you could use to completely disable certain utilities in the framework. This is no longer supported in v4.

### [Using the theme() function](#using-the-theme-function)

Since v4 includes CSS variables for all of your theme values, we recommend using those variables instead of the `theme()` function whenever possible:

CSS

    .my-class {  background-color: theme(colors.red.500);  background-color: var(--color-red-500);}

For cases where you still need to use the `theme()` function (like in media queries where CSS variables aren't supported), you should use the CSS variable name instead of the old dot notation:

CSS

    @media (width >= theme(screens.xl)) {@media (width >= theme(--breakpoint-xl)) {  /* ... */}

### [Using a JavaScript config file](#using-a-javascript-config-file)

JavaScript config files are still supported for backward compatibility, but they are no longer detected automatically in v4.

If you still need to use a JavaScript config file, you can load it explicitly using the `@config` directive:

CSS

    @config "../../tailwind.config.js";

The `corePlugins`, `safelist`, and `separator` options from the JavaScript-based config are not supported in v4.0.

### [Theme values in JavaScript](#theme-values-in-javascript)

In v3 we exported a `resolveConfig` function that you could use to turn your JavaScript-based config into a flat object that you could use in your other JavaScript.

We've removed this in v4 in hopes that people can use the CSS variables we generate directly instead, which is much simpler and will significantly reduce your bundle size.

For example, the popular [Motion](https://motion.dev/docs/react-quick-start)
 library for React lets you animate to and from CSS variable values:

JSX

    <motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />

If you need access to a resolved CSS variable value in JS, you can use `getComputedStyle` to get the value of a theme variable on the document root:

spaghetti.js

    let styles = getComputedStyle(document.documentElement);let shadow = styles.getPropertyValue("--shadow-xl");

### [Using @apply with Vue, Svelte, or CSS modules](#using-apply-with-vue-svelte-or-css-modules)

In v4, stylesheets that are bundled separately from your main CSS file (e.g. CSS modules files, `<style>` blocks in Vue, Svelte, or Astro, etc.) do not have access to theme variables, custom utilities, and custom variants defined in other files.

To make these definitions available in these contexts, use [`@reference`](/docs/functions-and-directives#reference-directive)
 to import them without duplicating any CSS in your bundle:

Vue

    <template>  <h1>Hello world!</h1></template><style>  @reference "../../app.css";  h1 {    @apply text-2xl font-bold text-red-500;  }</style>

Alternatively, you can use your CSS theme variables directly instead of using `@apply` at all, which will also improve performance since Tailwind won't need to process these styles:

Vue

    <template>  <h1>Hello world!</h1></template><style>  h1 {    color: var(--text-red-500);  }</style>

You can find more documentation on [using Tailwind with CSS modules](/docs/compatibility#css-modules)
.

### On this page

*   [Using the upgrade tool](#using-the-upgrade-tool)
    
*   [Upgrading manually](#upgrading-manually)
    *   [Using PostCSS](#using-postcss)
        
    *   [Using Vite](#using-vite)
        
    *   [Using Tailwind CLI](#using-tailwind-cli)
        
*   [Changes from v3](#changes-from-v3)
    *   [Browser requirements](#browser-requirements)
        
    *   [Removed @tailwind directives](#removed-tailwind-directives)
        
    *   [Removed deprecated utilities](#removed-deprecated-utilities)
        
    *   [Renamed utilities](#renamed-utilities)
        
    *   [Space-between selector](#space-between-selector)
        
    *   [Using variants with gradients](#using-variants-with-gradients)
        
    *   [Container configuration](#container-configuration)
        
    *   [Default border color](#default-border-color)
        
    *   [Default ring width and color](#default-ring-width-and-color)
        
    *   [Preflight changes](#preflight-changes)
        
    *   [Using a prefix](#using-a-prefix)
        
    *   [Adding custom utilities](#adding-custom-utilities)
        
    *   [Variant stacking order](#variant-stacking-order)
        
    *   [Variables in arbitrary values](#variables-in-arbitrary-values)
        
    *   [Hover styles on mobile](#hover-styles-on-mobile)
        
    *   [Transitioning outline-color](#transitioning-outline-color)
        
    *   [Disabling core plugins](#disabling-core-plugins)
        
    *   [Using the theme() function](#using-the-theme-function)
        
    *   [Using a JavaScript config file](#using-a-javascript-config-file)
        
    *   [Theme values in JavaScript](#theme-values-in-javascript)
        
    *   [Using @apply with Vue, Svelte, or CSS modules](#using-apply-with-vue-svelte-or-css-modules)
        

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Theme variables - Core concepts - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Core concepts
2.  Theme variables

Core concepts

Theme variables
===============

Using utility classes as an API for your design tokens.

[Overview](#overview)

----------------------

Tailwind is a framework for building custom designs, and different designs need different typography, colors, shadows, breakpoints, and more.

These low-level design decisions are often called _design tokens_, and in Tailwind projects you store those values in _theme variables_.

### [What are theme variables?](#what-are-theme-variables)

Theme variables are special CSS variables defined using the `@theme` directive that influence which utility classes exist in your project.

For example, you can add a new color to your project by defining a theme variable like `--color-mint-500`:

app.css

    @import "tailwindcss";@theme {  --color-mint-500: oklch(0.72 0.11 178);}

Now you can use utility classes like `bg-mint-500`, `text-mint-500`, or `fill-mint-500` in your HTML:

HTML

    <div class="bg-mint-500">  <!-- ... --></div>

Tailwind also generates regular CSS variables for your theme variables so you can reference your design tokens in arbitrary values or inline styles:

HTML

    <div style="background-color: var(--color-mint-500)">  <!-- ... --></div>

Learn more about how theme variables map to different utility classes in the [theme variable namespaces](#theme-variable-namespaces)
 documentation.

#### [Why `@theme` instead of `:root`?](#why-theme-instead-of-root)

Theme variables aren't _just_ CSS variables — they also instruct Tailwind to create new utility classes that you can use in your HTML.

Since they do more than regular CSS variables, Tailwind uses special syntax so that defining theme variables is always explicit. Theme variables are also required to be defined top-level and not nested under other selectors or media queries, and using a special syntax makes it possible to enforce that.

Defining regular CSS variables with `:root` can still be useful in Tailwind projects when you want to define a variable that isn't meant to be connected to a utility class. Use `@theme` when you want a design token to map directly to a utility class, and use `:root` for defining regular CSS variables that shouldn't have corresponding utility classes.

### [Relationship to utility classes](#relationship-to-utility-classes)

Some utility classes in Tailwind like `flex` and `object-cover` are static, and are always the same from project to project. But many others are driven by theme variables, and only exist because of the theme variables you've defined.

For example, theme variables defined in the `--font-*` namespace determine all of the `font-family` utilities that exist in a project:

./node\_modules/tailwindcss/theme.css

    @theme {  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;  /* ... */}

The `font-sans`, `font-serif`, and `font-mono` utilities only exist by default because Tailwind's default theme defines the `--font-sans`, `--font-serif`, and `--font-mono` theme variables.

If another theme variable like `--font-poppins` were defined, a `font-poppins` utility class would become available to go with it:

app.css

    @import "tailwindcss";@theme {  --font-poppins: Poppins, sans-serif;}

HTML

    <h1 class="font-poppins">This headline will use Poppins.</h1>

You can name your theme variables whatever you want within these namespaces, and a corresponding utility with the same name will become available to use in your HTML.

#### [Relationship to variants](#relationship-to-variants)

Some theme variables are used to define variants rather than utilities. For example theme variables in the `--breakpoint-*` namespace determine which responsive breakpoint variants exist in your project:

app.css

    @import "tailwindcss";@theme {  --breakpoint-3xl: 120rem;}

Now you can use the `3xl:*` variant to only trigger a utility when the viewport is 120rem or wider:

HTML

    <div class="3xl:grid-cols-6 grid grid-cols-2 md:grid-cols-4">  <!-- ... --></div>

Learn more about how theme variables map to different utility classes and variants in the [theme variable namespaces](#theme-variable-namespaces)
 documentation.

### [Theme variable namespaces](#theme-variable-namespaces)

Theme variables are defined in _namespaces_ and each namespace corresponds to one or more utility class or variant APIs.

Defining new theme variables in these namespaces will make new corresponding utilities and variants available in your project:

| Namespace | Utility classes |
| --- | --- |
| `--color-*` | Color utilities like `bg-red-500`, `text-sky-300`, and many more |
| `--font-*` | Font family utilities like `font-sans` |
| `--text-*` | Font size utilities like `text-xl` |
| `--font-weight-*` | Font weight utilities like `font-bold` |
| `--tracking-*` | Letter spacing utilities like `tracking-wide` |
| `--leading-*` | Line height utilities like `leading-tight` |
| `--breakpoint-*` | Responsive breakpoint variants like `sm:*` |
| `--container-*` | Container query variants like `@sm:*` and size utilities like `max-w-md` |
| `--spacing-*` | Spacing and sizing utilities like `px-4`, `max-h-16`, and many more |
| `--radius-*` | Border radius utilities like `rounded-sm` |
| `--shadow-*` | Box shadow utilities like `shadow-md` |
| `--inset-shadow-*` | Inset box shadow utilities like `inset-shadow-xs` |
| `--drop-shadow-*` | Drop shadow filter utilities like `drop-shadow-md` |
| `--blur-*` | Blur filter utilities like `blur-md` |
| `--perspective-*` | Perspective utilities like `perspective-near` |
| `--aspect-*` | Aspect ratio utilities like `aspect-video` |
| `--ease-*` | Transition timing function utilities like `ease-out` |
| `--animate-*` | Animation utilities like `animate-spin` |

For a list of all of the default theme variables, see the [default theme variable reference](#default-theme-variable-reference)
.

### [Default theme variables](#default-theme-variables)

When you import `tailwindcss` at the top of your CSS file, it includes a set of default theme variables to get you started.

Here's what you're actually importing when you import `tailwindcss`:

node\_modules/tailwindcss/index.css

    @layer theme, base, components, utilities;@import "./theme.css" layer(theme);@import "./preflight.css" layer(base);@import "./utilities.css" layer(utilities);

That `theme.css` file includes the default color palette, type scale, shadows, fonts, and more:

node\_modules/tailwindcss/theme.css

    @theme {  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;  --color-red-50: oklch(0.971 0.013 17.38);  --color-red-100: oklch(0.936 0.032 17.717);  --color-red-200: oklch(0.885 0.062 18.334);  /* ... */  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);  /* ... */}

This is why utilities like `bg-red-200`, `font-serif`, and `shadow-sm` exist out of the box — they're driven by the default theme, not hardcoded into the framework like `flex-col` or `pointer-events-none`.

For a list of all of the default theme variables, see the [default theme variable reference](#default-theme-variable-reference)
.

[Customizing your theme](#customizing-your-theme)

--------------------------------------------------

The default theme variables are very general purpose and suitable for building dramatically different designs, but they are still just a starting point. It's very common to customize things like the color palette, fonts, and shadows to build exactly the design you have in mind.

### [Extending the default theme](#extending-the-default-theme)

Use `@theme` to define new theme variables and extend the default theme:

app.css

    @import "tailwindcss";@theme {  --font-script: Great Vibes, cursive;}

This makes a new `font-script` utility class available that you can use in your HTML, just like the default `font-sans` or `font-mono` utilities:

HTML

    <p class="font-script">This will use the Great Vibes font family.</p>

Learn more about how theme variables map to different utility classes and variants in the [theme variable namespaces](#theme-variable-namespaces)
 documentation.

### [Overriding the default theme](#overriding-the-default-theme)

Override a default theme variable value by redefining it within `@theme`:

app.css

    @import "tailwindcss";@theme {  --breakpoint-sm: 30rem;}

Now the `sm:*` variant will trigger at 30rem instead of the default 40rem viewport size:

HTML

    <div class="grid grid-cols-1 sm:grid-cols-3">  <!-- ... --></div>

To completely override an entire namespace in the default theme, set the entire namespace to `initial` using the special asterisk syntax:

app.css

    @import "tailwindcss";@theme {  --color-*: initial;  --color-white: #fff;  --color-purple: #3f3cbb;  --color-midnight: #121063;  --color-tahiti: #3ab7bf;  --color-bermuda: #78dcca;}

When you do this, all of the default utilities that use that namespace _(like `bg-red-500`)_ will be removed, and only your custom values _(like `bg-midnight`)_ will be available.

Learn more about how theme variables map to different utility classes and variants in the [theme variable namespaces](#theme-variable-namespaces)
 documentation.

### [Using a custom theme](#using-a-custom-theme)

To completely disable the default theme and use only custom values, set the global theme variable namespace to `initial`:

app.css

    @import "tailwindcss";@theme {  --*: initial;  --spacing: 4px;  --font-body: Inter, sans-serif;  --color-lagoon: oklch(0.72 0.11 221.19);  --color-coral: oklch(0.74 0.17 40.24);  --color-driftwood: oklch(0.79 0.06 74.59);  --color-tide: oklch(0.49 0.08 205.88);  --color-dusk: oklch(0.82 0.15 72.09);}

Now none of the default utility classes that are driven by theme variables will be available, and you'll only be able to use utility classes matching your custom theme variables like `font-body` and `text-dusk`.

### [Defining animation keyframes](#defining-animation-keyframes)

Define the `@keyframes` rules for your `--animate-*` theme variables within `@theme` to include them in your generated CSS:

app.css

    @import "tailwindcss";@theme {  --animate-fade-in-scale: fade-in-scale 0.3s ease-out;  @keyframes fade-in-scale {    0% {      opacity: 0;      transform: scale(0.95);    }    100% {      opacity: 1;      transform: scale(1);    }  }}

If you want your custom `@keyframes` rules to always be included even when not adding an `--animate-*` theme variable, define them outside of `@theme` instead.

### [Referencing other variables](#referencing-other-variables)

When defining theme variables that reference other variables, use the `inline` option:

app.css

    @import "tailwindcss";@theme inline {  --font-sans: var(--font-inter);}

Using the `inline` option, the utility class will use the theme variable _value_ instead of referencing the actual theme variable:

dist.css

    .font-sans {  font-family: var(--font-inter);}

Without using `inline`, your utility classes might resolve to unexpected values because of how variables are resolved in CSS.

For example, this text will fall back to `sans-serif` instead of using `Inter` like you might expect:

HTML

    <div id="parent" style="--font-sans: var(--font-inter, sans-serif);">  <div id="child" style="--font-inter: Inter; font-family: var(--font-sans);">    This text will use the sans-serif font, not Inter.  </div></div>

This happens because `var(--font-sans)` is resolved where `--font-sans` is defined _(on `#parent`)_, and `--font-inter` has no value there since it's not defined until deeper in the tree _(on `#child`)_.

### [Generating all CSS variables](#generating-all-css-variables)

By default only used CSS variables will be generated in the final CSS output. If you want to always generate all CSS variables, you can use the `static` theme option:

app.css

    @import "tailwindcss";@theme static {  --color-primary: var(--color-red-500);  --color-secondary: var(--color-blue-500);}

### [Sharing across projects](#sharing-across-projects)

Since theme variables are defined in CSS, sharing them across projects is just a matter of throwing them into their own CSS file that you can import in each project:

./packages/brand/theme.css

    @theme {  --*: initial;  --spacing: 4px;  --font-body: Inter, sans-serif;  --color-lagoon: oklch(0.72 0.11 221.19);  --color-coral: oklch(0.74 0.17 40.24);  --color-driftwood: oklch(0.79 0.06 74.59);  --color-tide: oklch(0.49 0.08 205.88);  --color-dusk: oklch(0.82 0.15 72.09);}

Then you can use `@import` to include your theme variables in other projects:

./packages/admin/app.css

    @import "tailwindcss";@import "../brand/theme.css";

You can put shared theme variables like this in their own package in monorepo setups or even publish them to NPM and import them just like any other third-party CSS files.

[Using your theme variables](#using-your-theme-variables)

----------------------------------------------------------

All of your theme variables are turned into regular CSS variables when you compile your CSS:

dist.css

    :root {  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;  --color-red-50: oklch(0.971 0.013 17.38);  --color-red-100: oklch(0.936 0.032 17.717);  --color-red-200: oklch(0.885 0.062 18.334);  /* ... */  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);  /* ... */}

This makes it easy to reference all of your design tokens in any of your custom CSS or inline styles.

### [With custom CSS](#with-custom-css)

Use your theme variables to get access to your design tokens when you're writing custom CSS that needs to use the same values:

app.css

    @import "tailwindcss";@layer components {  .typography {    p {      font-size: var(--text-base);      color: var(--color-gray-700);    }    h1 {      font-size: var(--text-2xl--line-height);      font-weight: var(--font-weight-semibold);      color: var(--color-gray-950);    }    h2 {      font-size: var(--text-xl);      font-weight: var(--font-weight-semibold);      color: var(--color-gray-950);    }  }}

This is often useful when styling HTML you don't control, like Markdown content coming from a database or API and rendered to HTML.

### [With arbitrary values](#with-arbitrary-values)

Using theme variables in arbitrary values can be useful, especially in combination with the `calc()` function.

HTML

    <div class="relative rounded-xl">  <div class="absolute inset-px rounded-[calc(var(--radius-xl)-1px)]">    <!-- ... -->  </div>  <!-- ... --></div>

In the above example, we're subtracting 1px from the `--radius-xl` value on a nested inset element to make sure it has a concentric border radius.

### [Referencing in JavaScript](#referencing-in-javascript)

Most of the time when you need to reference your theme variables in JS you can just use the CSS variables directly, just like any other CSS value.

For example, the popular [Motion](https://motion.dev/docs/react-quick-start)
 library for React lets you animate to and from CSS variable values:

JSX

    <motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />

If you need access to a resolved CSS variable value in JS, you can use `getComputedStyle` to get the value of a theme variable on the document root:

spaghetti.js

    let styles = getComputedStyle(document.documentElement);let shadow = styles.getPropertyValue("--shadow-xl");

[Default theme variable reference](#default-theme-variable-reference)

----------------------------------------------------------------------

For reference, here's a complete list of the theme variables included by default when you import Tailwind CSS into your project:

tailwindcss/theme.css

    @theme {  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;  --color-red-50: oklch(0.971 0.013 17.38);  --color-red-100: oklch(0.936 0.032 17.717);  --color-red-200: oklch(0.885 0.062 18.334);  --color-red-300: oklch(0.808 0.114 19.571);  --color-red-400: oklch(0.704 0.191 22.216);  --color-red-500: oklch(0.637 0.237 25.331);  --color-red-600: oklch(0.577 0.245 27.325);  --color-red-700: oklch(0.505 0.213 27.518);  --color-red-800: oklch(0.444 0.177 26.899);  --color-red-900: oklch(0.396 0.141 25.723);  --color-red-950: oklch(0.258 0.092 26.042);  --color-orange-50: oklch(0.98 0.016 73.684);  --color-orange-100: oklch(0.954 0.038 75.164);  --color-orange-200: oklch(0.901 0.076 70.697);  --color-orange-300: oklch(0.837 0.128 66.29);  --color-orange-400: oklch(0.75 0.183 55.934);  --color-orange-500: oklch(0.705 0.213 47.604);  --color-orange-600: oklch(0.646 0.222 41.116);  --color-orange-700: oklch(0.553 0.195 38.402);  --color-orange-800: oklch(0.47 0.157 37.304);  --color-orange-900: oklch(0.408 0.123 38.172);  --color-orange-950: oklch(0.266 0.079 36.259);  --color-amber-50: oklch(0.987 0.022 95.277);  --color-amber-100: oklch(0.962 0.059 95.617);  --color-amber-200: oklch(0.924 0.12 95.746);  --color-amber-300: oklch(0.879 0.169 91.605);  --color-amber-400: oklch(0.828 0.189 84.429);  --color-amber-500: oklch(0.769 0.188 70.08);  --color-amber-600: oklch(0.666 0.179 58.318);  --color-amber-700: oklch(0.555 0.163 48.998);  --color-amber-800: oklch(0.473 0.137 46.201);  --color-amber-900: oklch(0.414 0.112 45.904);  --color-amber-950: oklch(0.279 0.077 45.635);  --color-yellow-50: oklch(0.987 0.026 102.212);  --color-yellow-100: oklch(0.973 0.071 103.193);  --color-yellow-200: oklch(0.945 0.129 101.54);  --color-yellow-300: oklch(0.905 0.182 98.111);  --color-yellow-400: oklch(0.852 0.199 91.936);  --color-yellow-500: oklch(0.795 0.184 86.047);  --color-yellow-600: oklch(0.681 0.162 75.834);  --color-yellow-700: oklch(0.554 0.135 66.442);  --color-yellow-800: oklch(0.476 0.114 61.907);  --color-yellow-900: oklch(0.421 0.095 57.708);  --color-yellow-950: oklch(0.286 0.066 53.813);  --color-lime-50: oklch(0.986 0.031 120.757);  --color-lime-100: oklch(0.967 0.067 122.328);  --color-lime-200: oklch(0.938 0.127 124.321);  --color-lime-300: oklch(0.897 0.196 126.665);  --color-lime-400: oklch(0.841 0.238 128.85);  --color-lime-500: oklch(0.768 0.233 130.85);  --color-lime-600: oklch(0.648 0.2 131.684);  --color-lime-700: oklch(0.532 0.157 131.589);  --color-lime-800: oklch(0.453 0.124 130.933);  --color-lime-900: oklch(0.405 0.101 131.063);  --color-lime-950: oklch(0.274 0.072 132.109);  --color-green-50: oklch(0.982 0.018 155.826);  --color-green-100: oklch(0.962 0.044 156.743);  --color-green-200: oklch(0.925 0.084 155.995);  --color-green-300: oklch(0.871 0.15 154.449);  --color-green-400: oklch(0.792 0.209 151.711);  --color-green-500: oklch(0.723 0.219 149.579);  --color-green-600: oklch(0.627 0.194 149.214);  --color-green-700: oklch(0.527 0.154 150.069);  --color-green-800: oklch(0.448 0.119 151.328);  --color-green-900: oklch(0.393 0.095 152.535);  --color-green-950: oklch(0.266 0.065 152.934);  --color-emerald-50: oklch(0.979 0.021 166.113);  --color-emerald-100: oklch(0.95 0.052 163.051);  --color-emerald-200: oklch(0.905 0.093 164.15);  --color-emerald-300: oklch(0.845 0.143 164.978);  --color-emerald-400: oklch(0.765 0.177 163.223);  --color-emerald-500: oklch(0.696 0.17 162.48);  --color-emerald-600: oklch(0.596 0.145 163.225);  --color-emerald-700: oklch(0.508 0.118 165.612);  --color-emerald-800: oklch(0.432 0.095 166.913);  --color-emerald-900: oklch(0.378 0.077 168.94);  --color-emerald-950: oklch(0.262 0.051 172.552);  --color-teal-50: oklch(0.984 0.014 180.72);  --color-teal-100: oklch(0.953 0.051 180.801);  --color-teal-200: oklch(0.91 0.096 180.426);  --color-teal-300: oklch(0.855 0.138 181.071);  --color-teal-400: oklch(0.777 0.152 181.912);  --color-teal-500: oklch(0.704 0.14 182.503);  --color-teal-600: oklch(0.6 0.118 184.704);  --color-teal-700: oklch(0.511 0.096 186.391);  --color-teal-800: oklch(0.437 0.078 188.216);  --color-teal-900: oklch(0.386 0.063 188.416);  --color-teal-950: oklch(0.277 0.046 192.524);  --color-cyan-50: oklch(0.984 0.019 200.873);  --color-cyan-100: oklch(0.956 0.045 203.388);  --color-cyan-200: oklch(0.917 0.08 205.041);  --color-cyan-300: oklch(0.865 0.127 207.078);  --color-cyan-400: oklch(0.789 0.154 211.53);  --color-cyan-500: oklch(0.715 0.143 215.221);  --color-cyan-600: oklch(0.609 0.126 221.723);  --color-cyan-700: oklch(0.52 0.105 223.128);  --color-cyan-800: oklch(0.45 0.085 224.283);  --color-cyan-900: oklch(0.398 0.07 227.392);  --color-cyan-950: oklch(0.302 0.056 229.695);  --color-sky-50: oklch(0.977 0.013 236.62);  --color-sky-100: oklch(0.951 0.026 236.824);  --color-sky-200: oklch(0.901 0.058 230.902);  --color-sky-300: oklch(0.828 0.111 230.318);  --color-sky-400: oklch(0.746 0.16 232.661);  --color-sky-500: oklch(0.685 0.169 237.323);  --color-sky-600: oklch(0.588 0.158 241.966);  --color-sky-700: oklch(0.5 0.134 242.749);  --color-sky-800: oklch(0.443 0.11 240.79);  --color-sky-900: oklch(0.391 0.09 240.876);  --color-sky-950: oklch(0.293 0.066 243.157);  --color-blue-50: oklch(0.97 0.014 254.604);  --color-blue-100: oklch(0.932 0.032 255.585);  --color-blue-200: oklch(0.882 0.059 254.128);  --color-blue-300: oklch(0.809 0.105 251.813);  --color-blue-400: oklch(0.707 0.165 254.624);  --color-blue-500: oklch(0.623 0.214 259.815);  --color-blue-600: oklch(0.546 0.245 262.881);  --color-blue-700: oklch(0.488 0.243 264.376);  --color-blue-800: oklch(0.424 0.199 265.638);  --color-blue-900: oklch(0.379 0.146 265.522);  --color-blue-950: oklch(0.282 0.091 267.935);  --color-indigo-50: oklch(0.962 0.018 272.314);  --color-indigo-100: oklch(0.93 0.034 272.788);  --color-indigo-200: oklch(0.87 0.065 274.039);  --color-indigo-300: oklch(0.785 0.115 274.713);  --color-indigo-400: oklch(0.673 0.182 276.935);  --color-indigo-500: oklch(0.585 0.233 277.117);  --color-indigo-600: oklch(0.511 0.262 276.966);  --color-indigo-700: oklch(0.457 0.24 277.023);  --color-indigo-800: oklch(0.398 0.195 277.366);  --color-indigo-900: oklch(0.359 0.144 278.697);  --color-indigo-950: oklch(0.257 0.09 281.288);  --color-violet-50: oklch(0.969 0.016 293.756);  --color-violet-100: oklch(0.943 0.029 294.588);  --color-violet-200: oklch(0.894 0.057 293.283);  --color-violet-300: oklch(0.811 0.111 293.571);  --color-violet-400: oklch(0.702 0.183 293.541);  --color-violet-500: oklch(0.606 0.25 292.717);  --color-violet-600: oklch(0.541 0.281 293.009);  --color-violet-700: oklch(0.491 0.27 292.581);  --color-violet-800: oklch(0.432 0.232 292.759);  --color-violet-900: oklch(0.38 0.189 293.745);  --color-violet-950: oklch(0.283 0.141 291.089);  --color-purple-50: oklch(0.977 0.014 308.299);  --color-purple-100: oklch(0.946 0.033 307.174);  --color-purple-200: oklch(0.902 0.063 306.703);  --color-purple-300: oklch(0.827 0.119 306.383);  --color-purple-400: oklch(0.714 0.203 305.504);  --color-purple-500: oklch(0.627 0.265 303.9);  --color-purple-600: oklch(0.558 0.288 302.321);  --color-purple-700: oklch(0.496 0.265 301.924);  --color-purple-800: oklch(0.438 0.218 303.724);  --color-purple-900: oklch(0.381 0.176 304.987);  --color-purple-950: oklch(0.291 0.149 302.717);  --color-fuchsia-50: oklch(0.977 0.017 320.058);  --color-fuchsia-100: oklch(0.952 0.037 318.852);  --color-fuchsia-200: oklch(0.903 0.076 319.62);  --color-fuchsia-300: oklch(0.833 0.145 321.434);  --color-fuchsia-400: oklch(0.74 0.238 322.16);  --color-fuchsia-500: oklch(0.667 0.295 322.15);  --color-fuchsia-600: oklch(0.591 0.293 322.896);  --color-fuchsia-700: oklch(0.518 0.253 323.949);  --color-fuchsia-800: oklch(0.452 0.211 324.591);  --color-fuchsia-900: oklch(0.401 0.17 325.612);  --color-fuchsia-950: oklch(0.293 0.136 325.661);  --color-pink-50: oklch(0.971 0.014 343.198);  --color-pink-100: oklch(0.948 0.028 342.258);  --color-pink-200: oklch(0.899 0.061 343.231);  --color-pink-300: oklch(0.823 0.12 346.018);  --color-pink-400: oklch(0.718 0.202 349.761);  --color-pink-500: oklch(0.656 0.241 354.308);  --color-pink-600: oklch(0.592 0.249 0.584);  --color-pink-700: oklch(0.525 0.223 3.958);  --color-pink-800: oklch(0.459 0.187 3.815);  --color-pink-900: oklch(0.408 0.153 2.432);  --color-pink-950: oklch(0.284 0.109 3.907);  --color-rose-50: oklch(0.969 0.015 12.422);  --color-rose-100: oklch(0.941 0.03 12.58);  --color-rose-200: oklch(0.892 0.058 10.001);  --color-rose-300: oklch(0.81 0.117 11.638);  --color-rose-400: oklch(0.712 0.194 13.428);  --color-rose-500: oklch(0.645 0.246 16.439);  --color-rose-600: oklch(0.586 0.253 17.585);  --color-rose-700: oklch(0.514 0.222 16.935);  --color-rose-800: oklch(0.455 0.188 13.697);  --color-rose-900: oklch(0.41 0.159 10.272);  --color-rose-950: oklch(0.271 0.105 12.094);  --color-slate-50: oklch(0.984 0.003 247.858);  --color-slate-100: oklch(0.968 0.007 247.896);  --color-slate-200: oklch(0.929 0.013 255.508);  --color-slate-300: oklch(0.869 0.022 252.894);  --color-slate-400: oklch(0.704 0.04 256.788);  --color-slate-500: oklch(0.554 0.046 257.417);  --color-slate-600: oklch(0.446 0.043 257.281);  --color-slate-700: oklch(0.372 0.044 257.287);  --color-slate-800: oklch(0.279 0.041 260.031);  --color-slate-900: oklch(0.208 0.042 265.755);  --color-slate-950: oklch(0.129 0.042 264.695);  --color-gray-50: oklch(0.985 0.002 247.839);  --color-gray-100: oklch(0.967 0.003 264.542);  --color-gray-200: oklch(0.928 0.006 264.531);  --color-gray-300: oklch(0.872 0.01 258.338);  --color-gray-400: oklch(0.707 0.022 261.325);  --color-gray-500: oklch(0.551 0.027 264.364);  --color-gray-600: oklch(0.446 0.03 256.802);  --color-gray-700: oklch(0.373 0.034 259.733);  --color-gray-800: oklch(0.278 0.033 256.848);  --color-gray-900: oklch(0.21 0.034 264.665);  --color-gray-950: oklch(0.13 0.028 261.692);  --color-zinc-50: oklch(0.985 0 0);  --color-zinc-100: oklch(0.967 0.001 286.375);  --color-zinc-200: oklch(0.92 0.004 286.32);  --color-zinc-300: oklch(0.871 0.006 286.286);  --color-zinc-400: oklch(0.705 0.015 286.067);  --color-zinc-500: oklch(0.552 0.016 285.938);  --color-zinc-600: oklch(0.442 0.017 285.786);  --color-zinc-700: oklch(0.37 0.013 285.805);  --color-zinc-800: oklch(0.274 0.006 286.033);  --color-zinc-900: oklch(0.21 0.006 285.885);  --color-zinc-950: oklch(0.141 0.005 285.823);  --color-neutral-50: oklch(0.985 0 0);  --color-neutral-100: oklch(0.97 0 0);  --color-neutral-200: oklch(0.922 0 0);  --color-neutral-300: oklch(0.87 0 0);  --color-neutral-400: oklch(0.708 0 0);  --color-neutral-500: oklch(0.556 0 0);  --color-neutral-600: oklch(0.439 0 0);  --color-neutral-700: oklch(0.371 0 0);  --color-neutral-800: oklch(0.269 0 0);  --color-neutral-900: oklch(0.205 0 0);  --color-neutral-950: oklch(0.145 0 0);  --color-stone-50: oklch(0.985 0.001 106.423);  --color-stone-100: oklch(0.97 0.001 106.424);  --color-stone-200: oklch(0.923 0.003 48.717);  --color-stone-300: oklch(0.869 0.005 56.366);  --color-stone-400: oklch(0.709 0.01 56.259);  --color-stone-500: oklch(0.553 0.013 58.071);  --color-stone-600: oklch(0.444 0.011 73.639);  --color-stone-700: oklch(0.374 0.01 67.558);  --color-stone-800: oklch(0.268 0.007 34.298);  --color-stone-900: oklch(0.216 0.006 56.043);  --color-stone-950: oklch(0.147 0.004 49.25);  --color-black: #000;  --color-white: #fff;  --spacing: 0.25rem;  --breakpoint-sm: 40rem;  --breakpoint-md: 48rem;  --breakpoint-lg: 64rem;  --breakpoint-xl: 80rem;  --breakpoint-2xl: 96rem;  --container-3xs: 16rem;  --container-2xs: 18rem;  --container-xs: 20rem;  --container-sm: 24rem;  --container-md: 28rem;  --container-lg: 32rem;  --container-xl: 36rem;  --container-2xl: 42rem;  --container-3xl: 48rem;  --container-4xl: 56rem;  --container-5xl: 64rem;  --container-6xl: 72rem;  --container-7xl: 80rem;  --text-xs: 0.75rem;  --text-xs--line-height: calc(1 / 0.75);  --text-sm: 0.875rem;  --text-sm--line-height: calc(1.25 / 0.875);  --text-base: 1rem;  --text-base--line-height: calc(1.5 / 1);  --text-lg: 1.125rem;  --text-lg--line-height: calc(1.75 / 1.125);  --text-xl: 1.25rem;  --text-xl--line-height: calc(1.75 / 1.25);  --text-2xl: 1.5rem;  --text-2xl--line-height: calc(2 / 1.5);  --text-3xl: 1.875rem;  --text-3xl--line-height: calc(2.25 / 1.875);  --text-4xl: 2.25rem;  --text-4xl--line-height: calc(2.5 / 2.25);  --text-5xl: 3rem;  --text-5xl--line-height: 1;  --text-6xl: 3.75rem;  --text-6xl--line-height: 1;  --text-7xl: 4.5rem;  --text-7xl--line-height: 1;  --text-8xl: 6rem;  --text-8xl--line-height: 1;  --text-9xl: 8rem;  --text-9xl--line-height: 1;  --font-weight-thin: 100;  --font-weight-extralight: 200;  --font-weight-light: 300;  --font-weight-normal: 400;  --font-weight-medium: 500;  --font-weight-semibold: 600;  --font-weight-bold: 700;  --font-weight-extrabold: 800;  --font-weight-black: 900;  --tracking-tighter: -0.05em;  --tracking-tight: -0.025em;  --tracking-normal: 0em;  --tracking-wide: 0.025em;  --tracking-wider: 0.05em;  --tracking-widest: 0.1em;  --leading-tight: 1.25;  --leading-snug: 1.375;  --leading-normal: 1.5;  --leading-relaxed: 1.625;  --leading-loose: 2;  --radius-xs: 0.125rem;  --radius-sm: 0.25rem;  --radius-md: 0.375rem;  --radius-lg: 0.5rem;  --radius-xl: 0.75rem;  --radius-2xl: 1rem;  --radius-3xl: 1.5rem;  --radius-4xl: 2rem;  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);  --blur-xs: 4px;  --blur-sm: 8px;  --blur-md: 12px;  --blur-lg: 16px;  --blur-xl: 24px;  --blur-2xl: 40px;  --blur-3xl: 64px;  --perspective-dramatic: 100px;  --perspective-near: 300px;  --perspective-normal: 500px;  --perspective-midrange: 800px;  --perspective-distant: 1200px;  --aspect-video: 16 / 9;  --ease-in: cubic-bezier(0.4, 0, 1, 1);  --ease-out: cubic-bezier(0, 0, 0.2, 1);  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);  --animate-spin: spin 1s linear infinite;  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;  --animate-bounce: bounce 1s infinite;  @keyframes spin {    to {      transform: rotate(360deg);    }  }  @keyframes ping {    75%,    100% {      transform: scale(2);      opacity: 0;    }  }  @keyframes pulse {    50% {      opacity: 0.5;    }  }  @keyframes bounce {    0%,    100% {      transform: translateY(-25%);      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);    }    50% {      transform: none;      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);    }  }}

### On this page

*   [Overview](#overview)
    *   [What are theme variables?](#what-are-theme-variables)
        
    *   [Relationship to utility classes](#relationship-to-utility-classes)
        
    *   [Theme variable namespaces](#theme-variable-namespaces)
        
    *   [Default theme variables](#default-theme-variables)
        
*   [Customizing your theme](#customizing-your-theme)
    *   [Extending the default theme](#extending-the-default-theme)
        
    *   [Overriding the default theme](#overriding-the-default-theme)
        
    *   [Using a custom theme](#using-a-custom-theme)
        
    *   [Defining animation keyframes](#defining-animation-keyframes)
        
    *   [Referencing other variables](#referencing-other-variables)
        
    *   [Generating all CSS variables](#generating-all-css-variables)
        
    *   [Sharing across projects](#sharing-across-projects)
        
*   [Using your theme variables](#using-your-theme-variables)
    *   [With custom CSS](#with-custom-css)
        
    *   [With arbitrary values](#with-arbitrary-values)
        
    *   [Referencing in JavaScript](#referencing-in-javascript)
        
*   [Default theme variable reference](#default-theme-variable-reference)
    

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Colors - Core concepts - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Core concepts
2.  Colors

Core concepts

Colors
======

Using and customizing the color palette in Tailwind CSS projects.

Tailwind CSS includes a vast, beautiful color palette out of the box, carefully crafted by expert designers and suitable for a wide range of different design styles.

50

100

200

300

400

500

600

700

800

900

950

red

orange

amber

yellow

lime

green

emerald

teal

cyan

sky

blue

indigo

violet

purple

fuchsia

pink

rose

slate

gray

zinc

neutral

stone

Click to copy the OKLCH value or shift+click to copy the nearest hex value.

Every color in the default palette includes 11 steps, with 50 being the lightest, and 950 being the darkest:

50

100

200

300

400

500

600

700

800

900

950

    <div>  <div class="bg-sky-50"></div>  <div class="bg-sky-100"></div>  <div class="bg-sky-200"></div>  <div class="bg-sky-300"></div>  <div class="bg-sky-400"></div>  <div class="bg-sky-500"></div>  <div class="bg-sky-600"></div>  <div class="bg-sky-700"></div>  <div class="bg-sky-800"></div>  <div class="bg-sky-900"></div>  <div class="bg-sky-950"></div></div>

The entire color palette is available across all color related utilities, including things like [background color](/docs/background-color)
, [border color](/docs/border-color)
, [fill](/docs/fill)
, [caret color](/docs/caret-color)
, and many more.

[Working with colors](#working-with-colors)

--------------------------------------------

### [Using color utilities](#using-color-utilities)

Use color utilities like `bg-white`, `border-pink-300`, and `text-gray-950` to set the different color properties of elements in your design:

Tom Watson mentioned you in Logo redesign

9:37am

    <div class="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">  <span class="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">    <svg class="size-6 stroke-pink-700 dark:stroke-pink-500"><!-- ... --></svg>  </span>  <div>    <p class="text-gray-700 dark:text-gray-400">      <span class="font-medium text-gray-950 dark:text-white">Tom Watson</span> mentioned you in      <span class="font-medium text-gray-950 dark:text-white">Logo redesign</span>    </p>    <time class="mt-1 block text-gray-500" datetime="9:37">9:37am</time>  </div></div>

Here's a full list of utilities that use your color palette:

| Utility | Description |
| --- | --- |
| `bg-*` | Sets the [background color](/docs/background-color)<br> of an element |
| `text-*` | Sets the [text color](/docs/text-color)<br> of an element |
| `decoration-*` | Sets the [text decoration color](/docs/text-decoration-color)<br> of an element |
| `border-*` | Sets the [border color](/docs/border-color)<br> of an element |
| `outline-*` | Sets the [outline color](/docs/outline-color)<br> of an element |
| `shadow-*` | Sets the color of [box shadows](/docs/box-shadow#setting-the-shadow-color) |
| `inset-shadow-*` | Sets the color of [inset box shadows](/docs/box-shadow#setting-the-inset-shadow-color) |
| `ring-*` | Sets the color of [ring shadows](/docs/box-shadow#setting-the-ring-color) |
| `inset-ring-*` | Sets the color of [inset ring shadows](/docs/box-shadow#setting-the-inset-ring-color) |
| `accent-*` | Sets the [accent color](/docs/accent-color)<br> of form controls |
| `caret-*` | Sets the [caret color](/docs/caret-color)<br> in form controls |
| `fill-*` | Sets the [fill color](/docs/fill)<br> of SVG elements |
| `stroke-*` | Sets the [stroke color](/docs/stroke)<br> of SVG elements |

### [Adjusting opacity](#adjusting-opacity)

You can adjust the opacity of a color using syntax like `bg-black/75`, where `75` sets the alpha channel of the color to 75%:

    <div>  <div class="bg-sky-500/10"></div>  <div class="bg-sky-500/20"></div>  <div class="bg-sky-500/30"></div>  <div class="bg-sky-500/40"></div>  <div class="bg-sky-500/50"></div>  <div class="bg-sky-500/60"></div>  <div class="bg-sky-500/70"></div>  <div class="bg-sky-500/80"></div>  <div class="bg-sky-500/90"></div>  <div class="bg-sky-500/100"></div></div>

This syntax also supports arbitrary values and the CSS variable shorthand:

HTML

    <div class="bg-pink-500/[71.37%]"><!-- ... --></div><div class="bg-cyan-400/(--my-alpha-value)"><!-- ... --></div>

### [Targeting dark mode](#targeting-dark-mode)

Use the `dark` variant to write classes like `dark:bg-gray-800` that only apply a color when dark mode is active:

Light mode

Writes upside-down

The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.

Dark mode

Writes upside-down

The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.

    <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">  <div>    <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">      <svg class="h-6 w-6 stroke-white" ...>        <!-- ... -->      </svg>    </span>  </div>  <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>  <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.  </p></div>

Learn more about styling for dark mode in the [dark mode documentation](/docs/dark-mode)
.

### [Referencing in CSS](#referencing-in-css)

Colors are exposed as CSS variables in the `--color-*` namespace, so you can reference them in CSS with variables like `--color-blue-500` and `--color-pink-700`:

CSS

    @import "tailwindcss";@layer components {  .typography {    color: var(--color-gray-950);    a {      color: var(--color-blue-500);      &:hover {        color: var(--color-blue-800);      }    }  }}

You can also use these as arbitrary values in utility classes:

HTML

    <div class="bg-[light-dark(var(--color-white),var(--color-gray-950))]">  <!-- ... --></div>

To quickly adjust the opacity of a color when referencing it as a variable in CSS, Tailwind includes a special `--alpha()` function:

CSS

    @import "tailwindcss";@layer components {  .DocSearch-Hit--Result {    background-color: --alpha(var(--color-gray-950) / 10%);  }}

[Customizing your colors](#customizing-your-colors)

----------------------------------------------------

Use `@theme` to add custom colors to your project under the `--color-*` theme namespace:

CSS

    @import "tailwindcss";@theme {  --color-midnight: #121063;  --color-tahiti: #3ab7bf;  --color-bermuda: #78dcca;}

Now utilities like `bg-midnight`, `text-tahiti`, and `fill-bermuda` will be available in your project in addition to the default colors.

Learn more about theme variables in the [theme variables documentation](/docs/theme)
.

### [Overriding default colors](#overriding-default-colors)

Override any of the default colors by defining new theme variables with the same name:

CSS

    @import "tailwindcss";@theme {  --color-gray-50: oklch(0.984 0.003 247.858);  --color-gray-100: oklch(0.968 0.007 247.896);  --color-gray-200: oklch(0.929 0.013 255.508);  --color-gray-300: oklch(0.869 0.022 252.894);  --color-gray-400: oklch(0.704 0.04 256.788);  --color-gray-500: oklch(0.554 0.046 257.417);  --color-gray-600: oklch(0.446 0.043 257.281);  --color-gray-700: oklch(0.372 0.044 257.287);  --color-gray-800: oklch(0.279 0.041 260.031);  --color-gray-900: oklch(0.208 0.042 265.755);  --color-gray-950: oklch(0.129 0.042 264.695);}

### [Disabling default colors](#disabling-default-colors)

Disable any default color by setting the theme namespace for that color to `initial`:

CSS

    @import "tailwindcss";@theme {  --color-lime-*: initial;  --color-fuchsia-*: initial;}

This is especially useful for removing the corresponding CSS variables from your output for colors you don't intend to use.

### [Using a custom palette](#using-a-custom-palette)

Use `--color-*: initial` to completely disable all of the default colors and define your own custom color palette:

CSS

    @import "tailwindcss";@theme {  --color-*: initial;  --color-white: #fff;  --color-purple: #3f3cbb;  --color-midnight: #121063;  --color-tahiti: #3ab7bf;  --color-bermuda: #78dcca;}

### [Referencing other variables](#referencing-other-variables)

Use `@theme inline` when defining colors that reference other colors:

CSS

    @import "tailwindcss";:root {  --acme-canvas-color: oklch(0.967 0.003 264.542);}[data-theme="dark"] {  --acme-canvas-color: oklch(0.21 0.034 264.665);}@theme inline {  --color-canvas: var(--acme-canvas-color);}

Learn more in the theme documentation on [referencing other variables](/docs/theme#referencing-other-variables)
.

[Default color palette reference](#default-color-palette-reference)

--------------------------------------------------------------------

Here's a complete list of the default colors and their values for reference:

CSS

    @theme {  --color-red-50: oklch(0.971 0.013 17.38);  --color-red-100: oklch(0.936 0.032 17.717);  --color-red-200: oklch(0.885 0.062 18.334);  --color-red-300: oklch(0.808 0.114 19.571);  --color-red-400: oklch(0.704 0.191 22.216);  --color-red-500: oklch(0.637 0.237 25.331);  --color-red-600: oklch(0.577 0.245 27.325);  --color-red-700: oklch(0.505 0.213 27.518);  --color-red-800: oklch(0.444 0.177 26.899);  --color-red-900: oklch(0.396 0.141 25.723);  --color-red-950: oklch(0.258 0.092 26.042);  --color-orange-50: oklch(0.98 0.016 73.684);  --color-orange-100: oklch(0.954 0.038 75.164);  --color-orange-200: oklch(0.901 0.076 70.697);  --color-orange-300: oklch(0.837 0.128 66.29);  --color-orange-400: oklch(0.75 0.183 55.934);  --color-orange-500: oklch(0.705 0.213 47.604);  --color-orange-600: oklch(0.646 0.222 41.116);  --color-orange-700: oklch(0.553 0.195 38.402);  --color-orange-800: oklch(0.47 0.157 37.304);  --color-orange-900: oklch(0.408 0.123 38.172);  --color-orange-950: oklch(0.266 0.079 36.259);  --color-amber-50: oklch(0.987 0.022 95.277);  --color-amber-100: oklch(0.962 0.059 95.617);  --color-amber-200: oklch(0.924 0.12 95.746);  --color-amber-300: oklch(0.879 0.169 91.605);  --color-amber-400: oklch(0.828 0.189 84.429);  --color-amber-500: oklch(0.769 0.188 70.08);  --color-amber-600: oklch(0.666 0.179 58.318);  --color-amber-700: oklch(0.555 0.163 48.998);  --color-amber-800: oklch(0.473 0.137 46.201);  --color-amber-900: oklch(0.414 0.112 45.904);  --color-amber-950: oklch(0.279 0.077 45.635);  --color-yellow-50: oklch(0.987 0.026 102.212);  --color-yellow-100: oklch(0.973 0.071 103.193);  --color-yellow-200: oklch(0.945 0.129 101.54);  --color-yellow-300: oklch(0.905 0.182 98.111);  --color-yellow-400: oklch(0.852 0.199 91.936);  --color-yellow-500: oklch(0.795 0.184 86.047);  --color-yellow-600: oklch(0.681 0.162 75.834);  --color-yellow-700: oklch(0.554 0.135 66.442);  --color-yellow-800: oklch(0.476 0.114 61.907);  --color-yellow-900: oklch(0.421 0.095 57.708);  --color-yellow-950: oklch(0.286 0.066 53.813);  --color-lime-50: oklch(0.986 0.031 120.757);  --color-lime-100: oklch(0.967 0.067 122.328);  --color-lime-200: oklch(0.938 0.127 124.321);  --color-lime-300: oklch(0.897 0.196 126.665);  --color-lime-400: oklch(0.841 0.238 128.85);  --color-lime-500: oklch(0.768 0.233 130.85);  --color-lime-600: oklch(0.648 0.2 131.684);  --color-lime-700: oklch(0.532 0.157 131.589);  --color-lime-800: oklch(0.453 0.124 130.933);  --color-lime-900: oklch(0.405 0.101 131.063);  --color-lime-950: oklch(0.274 0.072 132.109);  --color-green-50: oklch(0.982 0.018 155.826);  --color-green-100: oklch(0.962 0.044 156.743);  --color-green-200: oklch(0.925 0.084 155.995);  --color-green-300: oklch(0.871 0.15 154.449);  --color-green-400: oklch(0.792 0.209 151.711);  --color-green-500: oklch(0.723 0.219 149.579);  --color-green-600: oklch(0.627 0.194 149.214);  --color-green-700: oklch(0.527 0.154 150.069);  --color-green-800: oklch(0.448 0.119 151.328);  --color-green-900: oklch(0.393 0.095 152.535);  --color-green-950: oklch(0.266 0.065 152.934);  --color-emerald-50: oklch(0.979 0.021 166.113);  --color-emerald-100: oklch(0.95 0.052 163.051);  --color-emerald-200: oklch(0.905 0.093 164.15);  --color-emerald-300: oklch(0.845 0.143 164.978);  --color-emerald-400: oklch(0.765 0.177 163.223);  --color-emerald-500: oklch(0.696 0.17 162.48);  --color-emerald-600: oklch(0.596 0.145 163.225);  --color-emerald-700: oklch(0.508 0.118 165.612);  --color-emerald-800: oklch(0.432 0.095 166.913);  --color-emerald-900: oklch(0.378 0.077 168.94);  --color-emerald-950: oklch(0.262 0.051 172.552);  --color-teal-50: oklch(0.984 0.014 180.72);  --color-teal-100: oklch(0.953 0.051 180.801);  --color-teal-200: oklch(0.91 0.096 180.426);  --color-teal-300: oklch(0.855 0.138 181.071);  --color-teal-400: oklch(0.777 0.152 181.912);  --color-teal-500: oklch(0.704 0.14 182.503);  --color-teal-600: oklch(0.6 0.118 184.704);  --color-teal-700: oklch(0.511 0.096 186.391);  --color-teal-800: oklch(0.437 0.078 188.216);  --color-teal-900: oklch(0.386 0.063 188.416);  --color-teal-950: oklch(0.277 0.046 192.524);  --color-cyan-50: oklch(0.984 0.019 200.873);  --color-cyan-100: oklch(0.956 0.045 203.388);  --color-cyan-200: oklch(0.917 0.08 205.041);  --color-cyan-300: oklch(0.865 0.127 207.078);  --color-cyan-400: oklch(0.789 0.154 211.53);  --color-cyan-500: oklch(0.715 0.143 215.221);  --color-cyan-600: oklch(0.609 0.126 221.723);  --color-cyan-700: oklch(0.52 0.105 223.128);  --color-cyan-800: oklch(0.45 0.085 224.283);  --color-cyan-900: oklch(0.398 0.07 227.392);  --color-cyan-950: oklch(0.302 0.056 229.695);  --color-sky-50: oklch(0.977 0.013 236.62);  --color-sky-100: oklch(0.951 0.026 236.824);  --color-sky-200: oklch(0.901 0.058 230.902);  --color-sky-300: oklch(0.828 0.111 230.318);  --color-sky-400: oklch(0.746 0.16 232.661);  --color-sky-500: oklch(0.685 0.169 237.323);  --color-sky-600: oklch(0.588 0.158 241.966);  --color-sky-700: oklch(0.5 0.134 242.749);  --color-sky-800: oklch(0.443 0.11 240.79);  --color-sky-900: oklch(0.391 0.09 240.876);  --color-sky-950: oklch(0.293 0.066 243.157);  --color-blue-50: oklch(0.97 0.014 254.604);  --color-blue-100: oklch(0.932 0.032 255.585);  --color-blue-200: oklch(0.882 0.059 254.128);  --color-blue-300: oklch(0.809 0.105 251.813);  --color-blue-400: oklch(0.707 0.165 254.624);  --color-blue-500: oklch(0.623 0.214 259.815);  --color-blue-600: oklch(0.546 0.245 262.881);  --color-blue-700: oklch(0.488 0.243 264.376);  --color-blue-800: oklch(0.424 0.199 265.638);  --color-blue-900: oklch(0.379 0.146 265.522);  --color-blue-950: oklch(0.282 0.091 267.935);  --color-indigo-50: oklch(0.962 0.018 272.314);  --color-indigo-100: oklch(0.93 0.034 272.788);  --color-indigo-200: oklch(0.87 0.065 274.039);  --color-indigo-300: oklch(0.785 0.115 274.713);  --color-indigo-400: oklch(0.673 0.182 276.935);  --color-indigo-500: oklch(0.585 0.233 277.117);  --color-indigo-600: oklch(0.511 0.262 276.966);  --color-indigo-700: oklch(0.457 0.24 277.023);  --color-indigo-800: oklch(0.398 0.195 277.366);  --color-indigo-900: oklch(0.359 0.144 278.697);  --color-indigo-950: oklch(0.257 0.09 281.288);  --color-violet-50: oklch(0.969 0.016 293.756);  --color-violet-100: oklch(0.943 0.029 294.588);  --color-violet-200: oklch(0.894 0.057 293.283);  --color-violet-300: oklch(0.811 0.111 293.571);  --color-violet-400: oklch(0.702 0.183 293.541);  --color-violet-500: oklch(0.606 0.25 292.717);  --color-violet-600: oklch(0.541 0.281 293.009);  --color-violet-700: oklch(0.491 0.27 292.581);  --color-violet-800: oklch(0.432 0.232 292.759);  --color-violet-900: oklch(0.38 0.189 293.745);  --color-violet-950: oklch(0.283 0.141 291.089);  --color-purple-50: oklch(0.977 0.014 308.299);  --color-purple-100: oklch(0.946 0.033 307.174);  --color-purple-200: oklch(0.902 0.063 306.703);  --color-purple-300: oklch(0.827 0.119 306.383);  --color-purple-400: oklch(0.714 0.203 305.504);  --color-purple-500: oklch(0.627 0.265 303.9);  --color-purple-600: oklch(0.558 0.288 302.321);  --color-purple-700: oklch(0.496 0.265 301.924);  --color-purple-800: oklch(0.438 0.218 303.724);  --color-purple-900: oklch(0.381 0.176 304.987);  --color-purple-950: oklch(0.291 0.149 302.717);  --color-fuchsia-50: oklch(0.977 0.017 320.058);  --color-fuchsia-100: oklch(0.952 0.037 318.852);  --color-fuchsia-200: oklch(0.903 0.076 319.62);  --color-fuchsia-300: oklch(0.833 0.145 321.434);  --color-fuchsia-400: oklch(0.74 0.238 322.16);  --color-fuchsia-500: oklch(0.667 0.295 322.15);  --color-fuchsia-600: oklch(0.591 0.293 322.896);  --color-fuchsia-700: oklch(0.518 0.253 323.949);  --color-fuchsia-800: oklch(0.452 0.211 324.591);  --color-fuchsia-900: oklch(0.401 0.17 325.612);  --color-fuchsia-950: oklch(0.293 0.136 325.661);  --color-pink-50: oklch(0.971 0.014 343.198);  --color-pink-100: oklch(0.948 0.028 342.258);  --color-pink-200: oklch(0.899 0.061 343.231);  --color-pink-300: oklch(0.823 0.12 346.018);  --color-pink-400: oklch(0.718 0.202 349.761);  --color-pink-500: oklch(0.656 0.241 354.308);  --color-pink-600: oklch(0.592 0.249 0.584);  --color-pink-700: oklch(0.525 0.223 3.958);  --color-pink-800: oklch(0.459 0.187 3.815);  --color-pink-900: oklch(0.408 0.153 2.432);  --color-pink-950: oklch(0.284 0.109 3.907);  --color-rose-50: oklch(0.969 0.015 12.422);  --color-rose-100: oklch(0.941 0.03 12.58);  --color-rose-200: oklch(0.892 0.058 10.001);  --color-rose-300: oklch(0.81 0.117 11.638);  --color-rose-400: oklch(0.712 0.194 13.428);  --color-rose-500: oklch(0.645 0.246 16.439);  --color-rose-600: oklch(0.586 0.253 17.585);  --color-rose-700: oklch(0.514 0.222 16.935);  --color-rose-800: oklch(0.455 0.188 13.697);  --color-rose-900: oklch(0.41 0.159 10.272);  --color-rose-950: oklch(0.271 0.105 12.094);  --color-slate-50: oklch(0.984 0.003 247.858);  --color-slate-100: oklch(0.968 0.007 247.896);  --color-slate-200: oklch(0.929 0.013 255.508);  --color-slate-300: oklch(0.869 0.022 252.894);  --color-slate-400: oklch(0.704 0.04 256.788);  --color-slate-500: oklch(0.554 0.046 257.417);  --color-slate-600: oklch(0.446 0.043 257.281);  --color-slate-700: oklch(0.372 0.044 257.287);  --color-slate-800: oklch(0.279 0.041 260.031);  --color-slate-900: oklch(0.208 0.042 265.755);  --color-slate-950: oklch(0.129 0.042 264.695);  --color-gray-50: oklch(0.985 0.002 247.839);  --color-gray-100: oklch(0.967 0.003 264.542);  --color-gray-200: oklch(0.928 0.006 264.531);  --color-gray-300: oklch(0.872 0.01 258.338);  --color-gray-400: oklch(0.707 0.022 261.325);  --color-gray-500: oklch(0.551 0.027 264.364);  --color-gray-600: oklch(0.446 0.03 256.802);  --color-gray-700: oklch(0.373 0.034 259.733);  --color-gray-800: oklch(0.278 0.033 256.848);  --color-gray-900: oklch(0.21 0.034 264.665);  --color-gray-950: oklch(0.13 0.028 261.692);  --color-zinc-50: oklch(0.985 0 0);  --color-zinc-100: oklch(0.967 0.001 286.375);  --color-zinc-200: oklch(0.92 0.004 286.32);  --color-zinc-300: oklch(0.871 0.006 286.286);  --color-zinc-400: oklch(0.705 0.015 286.067);  --color-zinc-500: oklch(0.552 0.016 285.938);  --color-zinc-600: oklch(0.442 0.017 285.786);  --color-zinc-700: oklch(0.37 0.013 285.805);  --color-zinc-800: oklch(0.274 0.006 286.033);  --color-zinc-900: oklch(0.21 0.006 285.885);  --color-zinc-950: oklch(0.141 0.005 285.823);  --color-neutral-50: oklch(0.985 0 0);  --color-neutral-100: oklch(0.97 0 0);  --color-neutral-200: oklch(0.922 0 0);  --color-neutral-300: oklch(0.87 0 0);  --color-neutral-400: oklch(0.708 0 0);  --color-neutral-500: oklch(0.556 0 0);  --color-neutral-600: oklch(0.439 0 0);  --color-neutral-700: oklch(0.371 0 0);  --color-neutral-800: oklch(0.269 0 0);  --color-neutral-900: oklch(0.205 0 0);  --color-neutral-950: oklch(0.145 0 0);  --color-stone-50: oklch(0.985 0.001 106.423);  --color-stone-100: oklch(0.97 0.001 106.424);  --color-stone-200: oklch(0.923 0.003 48.717);  --color-stone-300: oklch(0.869 0.005 56.366);  --color-stone-400: oklch(0.709 0.01 56.259);  --color-stone-500: oklch(0.553 0.013 58.071);  --color-stone-600: oklch(0.444 0.011 73.639);  --color-stone-700: oklch(0.374 0.01 67.558);  --color-stone-800: oklch(0.268 0.007 34.298);  --color-stone-900: oklch(0.216 0.006 56.043);  --color-stone-950: oklch(0.147 0.004 49.25);  --color-black: #000;  --color-white: #fff;}

This can be useful if you want to reuse any of these scales but under a different name, like redefining `--color-gray-*` to use the `--color-slate-*` scale.

### On this page

*   [Working with colors](#working-with-colors)
    *   [Using color utilities](#using-color-utilities)
        
    *   [Adjusting opacity](#adjusting-opacity)
        
    *   [Targeting dark mode](#targeting-dark-mode)
        
    *   [Referencing in CSS](#referencing-in-css)
        
*   [Customizing your colors](#customizing-your-colors)
    *   [Overriding default colors](#overriding-default-colors)
        
    *   [Disabling default colors](#disabling-default-colors)
        
    *   [Using a custom palette](#using-a-custom-palette)
        
    *   [Referencing other variables](#referencing-other-variables)
        
*   [Default color palette reference](#default-color-palette-reference)
    

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Detecting classes in source files - Core concepts - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Core concepts
2.  Detecting classes in source files

Core concepts

Detecting classes in source files
=================================

Understanding and customizing how Tailwind scans your source files.

[Overview](#overview)

----------------------

Tailwind works by scanning your project for utility classes, then generating all of the necessary CSS based on the classes you've actually used.

This makes sure your CSS is as small as possible, and is also what makes features like [arbitrary values](/docs/adding-custom-styles#using-arbitrary-values)
 possible.

### [How classes are detected](#how-classes-are-detected)

Tailwind treats all of your source files as plain text, and doesn't attempt to actually parse your files as code in any way.

Instead it just looks for any tokens in your file that could be classes based on which characters Tailwind is expecting in class names:

JSX

    export function Button({ color, children }) {  const colors = {    black: "bg-black text-white",    blue: "bg-blue-500 text-white",    white: "bg-white text-black",  };  return (    <button className={`${colors[color]} rounded-full px-2 py-1.5 font-sans text-sm/6 font-medium shadow`}>      {children}    </button>  );}

Then it tries to generate the CSS for all of these tokens, throwing away any tokens that don't map to a utility class the framework knows about.

### [Dynamic class names](#dynamic-class-names)

Since Tailwind scans your source files as plain text, it has no way of understanding string concatenation or interpolation in the programming language you're using.

Don't construct class names dynamically

HTML

    <div class="text-{{ error ? 'red' : 'green' }}-600"></div>

In the example above, the strings `text-red-600` and `text-green-600` do not exist, so Tailwind will not generate those classes.

Instead, make sure any class names you’re using exist in full:

Always use complete class names

HTML

    <div class="{{ error ? 'text-red-600' : 'text-green-600' }}"></div>

If you're using a component library like React or Vue, this means you shouldn't use props to dynamically construct classes:

Don't use props to build class names dynamically

JSX

    function Button({ color, children }) {  return <button className={`bg-${color}-600 hover:bg-${color}-500 ...`}>{children}</button>;}

Instead, map props to complete class names that are statically detectable at build-time:

Always map props to static class names

JSX

    function Button({ color, children }) {  const colorVariants = {    blue: "bg-blue-600 hover:bg-blue-500",    red: "bg-red-600 hover:bg-red-500",  };  return <button className={`${colorVariants[color]} ...`}>{children}</button>;}

This has the added benefit of letting you map different prop values to different color shades for example:

JSX

    function Button({ color, children }) {  const colorVariants = {    blue: "bg-blue-600 hover:bg-blue-500 text-white",    red: "bg-red-500 hover:bg-red-400 text-white",    yellow: "bg-yellow-300 hover:bg-yellow-400 text-black",  };  return <button className={`${colorVariants[color]} ...`}>{children}</button>;}

As long as you always use complete class names in your code, Tailwind will generate all of your CSS perfectly every time.

### [Which files are scanned](#which-files-are-scanned)

Tailwind will scan every file in your project for class names, except in the following cases:

*   Files that are in your `.gitignore` file
*   Binary files like images, videos, or zip files
*   CSS files
*   Common package manager lock files

If you need to scan any files that Tailwind is ignoring by default, you can [explicitly register](#explicitly-registering-sources)
 those sources.

[Explicitly registering sources](#explicitly-registering-sources)

------------------------------------------------------------------

Use `@source` to explicitly register source paths relative to the stylesheet:

CSS

    @import "tailwindcss";@source "../node_modules/@acmecorp/ui-lib";

This is especially useful when you need to scan an external library that is built with Tailwind, since dependencies are usually listed in your `.gitignore` file and ignored by Tailwind by default.

### [Setting your base path](#setting-your-base-path)

Tailwind uses the current working directory as its starting point when scanning for class names by default.

To set the base path for source detection explicitly, use the `source()` function when importing Tailwind in your CSS:

CSS

    @import "tailwindcss" source("../src");

This can be useful when working with monorepos where your build commands run from the root of the monorepo instead of the root of each project.

### [Ignoring specific paths](#ignoring-specific-paths)

Use `@source not` to ignore specific paths, relative to the stylesheet, when scanning for class names:

CSS

    @import "tailwindcss";@source not "../src/components/legacy";

This is useful when you have large directories in your project that you know don't use Tailwind classes, like legacy components or third-party libraries.

### [Disabling automatic detection](#disabling-automatic-detection)

Use `source(none)` to completely disable automatic source detection if you want to register all of your sources explicitly:

CSS

    @import "tailwindcss" source(none);@source "../admin";@source "../shared";

This can be useful in projects that have multiple Tailwind stylesheets where you want to make sure each one only includes the classes each stylesheet needs.

[Safelisting specific utilities](#safelisting-specific-utilities)

------------------------------------------------------------------

If you need to make sure Tailwind generates certain class names that don’t exist in your content files, use `@source inline()` to force them to be generated:

CSS

    @import "tailwindcss";@source inline("underline");

Generated CSS

    .underline {  text-decoration: underline;}

### [Safelisting variants](#safelisting-variants)

You can also use `@source inline()` to generate classes with variants. For example, to generate the `underline` class with hover and focus variants, add `{hover:,focus:,}` to the source input:

CSS

    @import "tailwindcss";@source inline("{hover:,focus:,}underline");

Generated CSS

    .underline {  text-decoration: underline;}@media (hover: hover) {  .hover\:underline:hover {    text-decoration: underline;  }}@media (focus: focus) {  .focus\:underline:focus {    text-decoration: underline;  }}

### [Safelisting with ranges](#safelisting-with-ranges)

The source input is [brace expanded](https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html)
, so you can generate multiple classes at once. For example, to generate all the red background colors with hover variants, use a range:

CSS

    @import "tailwindcss";@source inline("{hover:,}bg-red-{50,{100..900..100},950}");

Generated CSS

    .bg-red-50 {  background-color: var(--color-red-50);}.bg-red-100 {  background-color: var(--color-red-100);}.bg-red-200 {  background-color: var(--color-red-200);}/* ... */.bg-red-800 {  background-color: var(--color-red-800);}.bg-red-900 {  background-color: var(--color-red-900);}.bg-red-950 {  background-color: var(--color-red-950);}@media (hover: hover) {  .hover\:bg-red-50:hover {    background-color: var(--color-red-50);  }  /* ... */  .hover\:bg-red-950:hover {    background-color: var(--color-red-950);  }}

This generates red background colors from 100 to 900 in increments of 100, along with the first and last shades of 50 and 950. It also adds the `hover:` variant for each of those classes.

### [Explicitly excluding classes](#explicitly-excluding-classes)

Use `@source not inline()` to prevent specific classes from being generated, even if they are detected in your source files:

CSS

    @import "tailwindcss";@source not inline("{hover:,focus:,}bg-red-{50,{100..900..100},950}");

This will explicitly exclude the red background utilities, along with their hover and focus variants, from being generated.

### On this page

*   [Overview](#overview)
    *   [How classes are detected](#how-classes-are-detected)
        
    *   [Dynamic class names](#dynamic-class-names)
        
    *   [Which files are scanned](#which-files-are-scanned)
        
*   [Explicitly registering sources](#explicitly-registering-sources)
    *   [Setting your base path](#setting-your-base-path)
        
    *   [Ignoring specific paths](#ignoring-specific-paths)
        
    *   [Disabling automatic detection](#disabling-automatic-detection)
        
*   [Safelisting specific utilities](#safelisting-specific-utilities)
    *   [Safelisting variants](#safelisting-variants)
        
    *   [Safelisting with ranges](#safelisting-with-ranges)
        
    *   [Explicitly excluding classes](#explicitly-excluding-classes)
        

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Preflight - Base styles - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Base styles
2.  Preflight

Base styles

Preflight
=========

An opinionated set of base styles for Tailwind projects.

[Overview](#overview)

----------------------

Built on top of [modern-normalize](https://github.com/sindresorhus/modern-normalize)
, Preflight is a set of base styles for Tailwind projects that are designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system.

When you import `tailwindcss` into your project, Preflight is automatically injected into the `base` layer:

CSS

    @layer theme, base, components, utilities;@import "tailwindcss/theme.css" layer(theme);@import "tailwindcss/preflight.css" layer(base);@import "tailwindcss/utilities.css" layer(utilities);

While most of the styles in Preflight are meant to go unnoticed—they simply make things behave more like you'd expect them to—some are more opinionated and can be surprising when you first encounter them.

For a complete reference of all the styles applied by Preflight, [see the stylesheet](https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/preflight.css)
.

### [Margins are removed](#margins-are-removed)

Preflight removes all of the default margins from all elements including headings, blockquotes, paragraphs, etc:

CSS

    *,::after,::before,::backdrop,::file-selector-button {  margin: 0;  padding: 0;}

This makes it harder to accidentally rely on margin values applied by the user-agent stylesheet that are not part of your spacing scale.

### [Border styles are reset](#border-styles-are-reset)

In order to make it easy to add a border by simply adding the `border` class, Tailwind overrides the default border styles for all elements with the following rules:

CSS

    *,::after,::before,::backdrop,::file-selector-button {  box-sizing: border-box;  border: 0 solid;}

Since the `border` class only sets the `border-width` property, this reset ensures that adding that class always adds a solid `1px` border that uses `currentColor`.

This can cause some unexpected results when integrating certain third-party libraries, like [Google maps](https://github.com/tailwindlabs/tailwindcss/issues/484)
 for example.

When you run into situations like this, you can work around them by overriding the Preflight styles with your own custom CSS:

CSS

    @layer base {  .google-map * {    border-style: none;  }}

### [Headings are unstyled](#headings-are-unstyled)

All heading elements are completely unstyled by default, and have the same font size and weight as normal text:

CSS

    h1,h2,h3,h4,h5,h6 {  font-size: inherit;  font-weight: inherit;}

The reason for this is two-fold:

*   **It helps you avoid accidentally deviating from your type scale**. By default, browsers assign sizes to headings that don't exist in Tailwind's default type scale, and aren't guaranteed to exist in your own type scale.
*   **In UI development, headings should often be visually de-emphasized**. Making headings unstyled by default means any styling you apply to headings happens consciously and deliberately.

You can always add default header styles to your project by [adding your own base styles](/docs/adding-custom-styles#adding-base-styles)
.

### [Lists are unstyled](#lists-are-unstyled)

Ordered and unordered lists are unstyled by default, with no bullets or numbers:

CSS

    ol,ul,menu {  list-style: none;}

If you'd like to style a list, you can do so using the [list-style-type](/docs/list-style-type)
 and [list-style-position](/docs/list-style-position)
 utilities:

HTML

    <ul class="list-inside list-disc">  <li>One</li>  <li>Two</li>  <li>Three</li></ul>

You can always add default list styles to your project by [adding your own base styles](/docs/adding-custom-styles#adding-base-styles)
.

#### [Accessibility considerations](#accessibility-considerations)

Unstyled lists are [not announced as lists by VoiceOver](https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
. If your content is truly a list but you would like to keep it unstyled, [add a "list" role](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html)
 to the element:

HTML

    <ul role="list">  <li>One</li>  <li>Two</li>  <li>Three</li></ul>

### [Images are block-level](#images-are-block-level)

Images and other replaced elements (like `svg`, `video`, `canvas`, and others) are `display: block` by default:

CSS

    img,svg,video,canvas,audio,iframe,embed,object {  display: block;  vertical-align: middle;}

This helps to avoid unexpected alignment issues that you often run into using the browser default of `display: inline`.

If you ever need to make one of these elements `inline` instead of `block`, simply use the `inline` utility:

HTML

    <img class="inline" src="..." alt="..." />

### [Images are constrained](#images-are-constrained)

Images and videos are constrained to the parent width in a way that preserves their intrinsic aspect ratio:

CSS

    img,video {  max-width: 100%;  height: auto;}

This prevents them from overflowing their containers and makes them responsive by default. If you ever need to override this behavior, use the `max-w-none` utility:

HTML

    <img class="max-w-none" src="..." alt="..." />

[Extending Preflight](#extending-preflight)

--------------------------------------------

If you'd like to add your own base styles on top of Preflight, add them to the `base` CSS layer in your CSS using `@layer base`:

CSS

    @layer base {  h1 {    font-size: var(--text-2xl);  }  h2 {    font-size: var(--text-xl);  }  h3 {    font-size: var(--text-lg);  }  a {    color: var(--color-blue-600);    text-decoration-line: underline;  }}

Learn more in the [adding base styles documentation](/docs/adding-custom-styles#adding-base-styles)
.

[Disabling Preflight](#disabling-preflight)

--------------------------------------------

If you'd like to completely disable Preflight—perhaps because you're integrating Tailwind into an existing project or you'd prefer to define your own base styles—you can do so by importing only the parts of Tailwind that you need.

By default, this is what `@import "tailwindcss";` injects:

CSS

    @layer theme, base, components, utilities;@import "tailwindcss/theme.css" layer(theme);@import "tailwindcss/preflight.css" layer(base);@import "tailwindcss/utilities.css" layer(utilities);

To disable Preflight, simply omit its import while keeping everything else:

CSS

    @layer theme, base, components, utilities;@import "tailwindcss/theme.css" layer(theme);@import "tailwindcss/preflight.css" layer(base);@import "tailwindcss/utilities.css" layer(utilities);

### On this page

*   [Overview](#overview)
    *   [Margins are removed](#margins-are-removed)
        
    *   [Border styles are reset](#border-styles-are-reset)
        
    *   [Headings are unstyled](#headings-are-unstyled)
        
    *   [Lists are unstyled](#lists-are-unstyled)
        
    *   [Images are block-level](#images-are-block-level)
        
    *   [Images are constrained](#images-are-constrained)
        
*   [Extending Preflight](#extending-preflight)
    
*   [Disabling Preflight](#disabling-preflight)
    

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# Functions and directives - Core concepts - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Core concepts
2.  Functions and directives

Core concepts

Functions and directives
========================

A reference for the custom functions and directives Tailwind exposes to your CSS.

[Directives](#directives)

--------------------------

Directives are custom Tailwind-specific [at-rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)
 you can use in your CSS that offer special functionality for Tailwind CSS projects.

### @import

Use the `@import` directive to inline import CSS files, including Tailwind itself:

CSS

    @import "tailwindcss";

### @theme

Use the `@theme` directive to define your project's custom design tokens, like fonts, colors, and breakpoints:

CSS

    @theme {  --font-display: "Satoshi", "sans-serif";  --breakpoint-3xl: 120rem;  --color-avocado-100: oklch(0.99 0 0);  --color-avocado-200: oklch(0.98 0.04 113.22);  --color-avocado-300: oklch(0.94 0.11 115.03);  --color-avocado-400: oklch(0.92 0.19 114.08);  --color-avocado-500: oklch(0.84 0.18 117.33);  --color-avocado-600: oklch(0.53 0.12 118.34);  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);  /* ... */}

Learn more about customizing your theme in the [theme variables documentation](/docs/theme)
.

### @source

Use the `@source` directive to explicitly specify source files that aren't picked up by Tailwind's automatic content detection:

CSS

    @source "../node_modules/@my-company/ui-lib";

Learn more about automatic content detection in the [detecting classes in source files documentation](/docs/detecting-classes-in-source-files)
.

### @utility

Use the `@utility` directive to add custom utilities to your project that work with variants like `hover`, `focus` and `lg`:

CSS

    @utility tab-4 {  tab-size: 4;}

Learn more about registering custom utilities in the [adding custom utilities documentation](/docs/adding-custom-styles#adding-custom-utilities)
.

### @variant

Use the `@variant` directive to apply a Tailwind variant to styles in your CSS:

CSS

    .my-element {  background: white;  @variant dark {    background: black;  }}

Learn more using variants in the [using variants documentation](/docs/adding-custom-styles#using-variants)
.

### @custom-variant

Use the `@custom-variant` directive to add a custom variant in your project:

CSS

    @custom-variant theme-midnight (&:where([data-theme="midnight"] *));

This lets you write utilities `theme-midnight:bg-black` and `theme-midnight:text-white`.

Learn more about adding custom variants in the [adding custom variants documentation](/docs/adding-custom-styles#adding-custom-variants)
.

### @apply

Use the `@apply` directive to inline any existing utility classes into your own custom CSS:

CSS

    .select2-dropdown {  @apply rounded-b-lg shadow-md;}.select2-search {  @apply rounded border border-gray-300;}.select2-results__group {  @apply text-lg font-bold text-gray-900;}

This is useful when you need to write custom CSS (like to override the styles in a third-party library) but still want to work with your design tokens and use the same syntax you’re used to using in your HTML.

### @reference

If you want to use `@apply` or `@variant` in the `<style>` block of a Vue or Svelte component, or within CSS modules, you will need to import your theme variables, custom utilities, and custom variants to make those values available in that context.

To do this without duplicating any CSS in your output, use the `@reference` directive to import your main stylesheet for reference without actually including the styles:

Vue

    <template>  <h1>Hello world!</h1></template><style>  @reference "../../app.css";  h1 {    @apply text-2xl font-bold text-red-500;  }</style>

If you’re just using the default theme with no customizations, you can import `tailwindcss` directly:

Vue

    <template>  <h1>Hello world!</h1></template><style>  @reference "tailwindcss";  h1 {    @apply text-2xl font-bold text-red-500;  }</style>

[Functions](#functions)

------------------------

Tailwind provides the following build-time functions to make working with colors and the spacing scale easier.

### \--alpha()

Use the `--alpha()` function to adjust the opacity of a color:

Input CSS

    .my-element {  color: --alpha(var(--color-lime-300) / 50%);}

Compiled CSS

    .my-element {  color: color-mix(in oklab, var(--color-lime-300) 50%, transparent);}

### \--spacing()

Use the `--spacing()` function to generate a spacing value based on your theme:

Input CSS

    .my-element {  margin: --spacing(4);}

Compiled CSS

    .my-element {  margin: calc(var(--spacing) * 4);}

This can also be useful in arbitrary values, especially in combination with `calc()`:

HTML

    <div class="py-[calc(--spacing(4)-1px)]">  <!-- ... --></div>

[Compatibility](#compatibility)

--------------------------------

The following directives and functions exist solely for compatibility with Tailwind CSS v3.x.

### @config

Use the `@config` directive to load a legacy JavaScript-based configuration file:

CSS

    @config "../../tailwind.config.js";

The `corePlugins`, `safelist`, and `separator` options from the JavaScript-based config are not supported in v4.0.

### @plugin

Use the `@plugin` directive to load a legacy JavaScript-based plugin:

CSS

    @plugin "@tailwindcss/typography";

The `@plugin` directive accepts either a package name or a local path.

### theme()

Use the `theme()` function to access your Tailwind theme values using dot notation:

CSS

    .my-element {  margin: theme(spacing.12);}

This function is deprecated, and we recommend [using CSS theme variables](/docs/theme#using-your-theme-variables)
 instead.

### On this page

*   [Directives](#directives)
    *   [@import](#import-directive)
        
    *   [@theme](#theme-directive)
        
    *   [@source](#source-directive)
        
    *   [@utility](#utility-directive)
        
    *   [@variant](#variant-directive)
        
    *   [@custom-variant](#custom-variant-directive)
        
    *   [@apply](#apply-directive)
        
    *   [@reference](#reference-directive)
        
*   [Functions](#functions)
    *   [\--alpha()](#alpha-function)
        
    *   [\--spacing()](#spacing-function)
        
*   [Compatibility](#compatibility)
    *   [@config](#config-directive)
        
    *   [@plugin](#plugin-directive)
        
    *   [theme()](#theme-function)
        

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# aspect-ratio - Layout - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Layout
2.  aspect-ratio

Layout

aspect-ratio
============

Utilities for controlling the aspect ratio of an element.

| Class | Styles |
| --- | --- |
| `aspect-<ratio>` | `aspect-ratio: <ratio>;` |
| `aspect-square` | `aspect-ratio: 1 / 1;` |
| `aspect-video` | `aspect-ratio: var(--aspect-ratio-video); /* 16 / 9 */` |
| `aspect-auto` | `aspect-ratio: auto;` |
| `aspect-(<custom-property>)` | `aspect-ratio: var(<custom-property>);` |
| `aspect-[<value>]` | `aspect-ratio: <value>;` |

[Examples](#examples)

----------------------

### [Basic example](#basic-example)

Use `aspect-<ratio>` utilities like `aspect-3/2` to give an element a specific aspect ratio:

Resize the example to see the expected behavior

![](https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80)

    <img class="aspect-3/2 object-cover ..." src="/img/villas.jpg" />

### [Using a video aspect ratio](#using-a-video-aspect-ratio)

Use the `aspect-video` utility to give a video element a 16 / 9 aspect ratio:

Resize the example to see the expected behavior

    <iframe class="aspect-video ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>

### [Using a custom value](#using-a-custom-value)

Use the `aspect-[<value>]` syntax to set the aspect ratio based on a completely custom value:

    <img class="aspect-[calc(4*3+1)/3] ..." src="/img/villas.jpg" />

For CSS variables, you can also use the `aspect-(<custom-property>)` syntax:

    <img class="aspect-(--my-aspect-ratio) ..." src="/img/villas.jpg" />

This is just a shorthand for `aspect-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](#responsive-design)

Prefix an `aspect-ratio` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

    <iframe class="aspect-video md:aspect-square ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states)
.

[Customizing your theme](#customizing-your-theme)

--------------------------------------------------

Use the `--aspect-*` theme variables to customize the aspect ratio utilities in your project:

    @theme {  --aspect-retro: 4 / 3; }

Now the `aspect-retro` utility can be used in your markup:

    <iframe class="aspect-retro" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>

Learn more about customizing your theme in the [theme documentation](/docs/theme#customizing-your-theme)
.

### On this page

*   [Quick reference](#quick-reference)
    
*   [Examples](#examples)
    *   [Basic example](#basic-example)
        
    *   [Using a video aspect ratio](#using-a-video-aspect-ratio)
        
    *   [Using a custom value](#using-a-custom-value)
        
    *   [Responsive design](#responsive-design)
        
*   [Customizing your theme](#customizing-your-theme)
    

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# break-after - Layout - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Layout
2.  break-after

Layout

break-after
===========

Utilities for controlling how a column or page should break after an element.

| Class | Styles |
| --- | --- |
| `break-after-auto` | `break-after: auto;` |
| `break-after-avoid` | `break-after: avoid;` |
| `break-after-all` | `break-after: all;` |
| `break-after-avoid-page` | `break-after: avoid-page;` |
| `break-after-page` | `break-after: page;` |
| `break-after-left` | `break-after: left;` |
| `break-after-right` | `break-after: right;` |
| `break-after-column` | `break-after: column;` |

[Examples](#examples)

----------------------

### [Basic example](#basic-example)

Use utilities like `break-after-column` and `break-after-page` to control how a column or page break should behave after an element:

    <div class="columns-2">  <p>Well, let me tell you something, ...</p>  <p class="break-after-column">Sure, go ahead, laugh...</p>  <p>Maybe we can live without...</p>  <p>Look. If you think this is...</p></div>

### [Responsive design](#responsive-design)

Prefix a `break-after` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

    <div class="break-after-column md:break-after-auto ...">  <!-- ... --></div>

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states)
.

### On this page

*   [Quick reference](#quick-reference)
    
*   [Examples](#examples)
    *   [Basic example](#basic-example)
        
    *   [Responsive design](#responsive-design)
        

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---

# break-before - Layout - Tailwind CSS

[](/)
v4.1

⌘KCtrl K[Docs](/docs)
[Blog](/blog)
[Showcase](/showcase)
[Plus](/plus?ref=top)
[](https://github.com/tailwindlabs/tailwindcss)

1.  Layout
2.  break-before

Layout

break-before
============

Utilities for controlling how a column or page should break before an element.

| Class | Styles |
| --- | --- |
| `break-before-auto` | `break-before: auto;` |
| `break-before-avoid` | `break-before: avoid;` |
| `break-before-all` | `break-before: all;` |
| `break-before-avoid-page` | `break-before: avoid-page;` |
| `break-before-page` | `break-before: page;` |
| `break-before-left` | `break-before: left;` |
| `break-before-right` | `break-before: right;` |
| `break-before-column` | `break-before: column;` |

[Examples](#examples)

----------------------

### [Basic example](#basic-example)

Use utilities like `break-before-column` and `break-before-page` to control how a column or page break should behave before an element:

    <div class="columns-2">  <p>Well, let me tell you something, ...</p>  <p class="break-before-column">Sure, go ahead, laugh...</p>  <p>Maybe we can live without...</p>  <p>Look. If you think this is...</p></div>

### [Responsive design](#responsive-design)

Prefix a `break-before` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

    <div class="break-before-column md:break-before-auto ...">  <!-- ... --></div>

Learn more about using variants in the [variants documentation](/docs/hover-focus-and-other-states)
.

### On this page

*   [Quick reference](#quick-reference)
    
*   [Examples](#examples)
    *   [Basic example](#basic-example)
        
    *   [Responsive design](#responsive-design)
        

Copyright © 2025 Tailwind Labs Inc.·[Trademark Policy](/brand)

---


# Table of Contents

- [Welcome to Clerk Docs](#welcome-to-clerk-docs)
- [Next.js: Set up your Clerk account](#next-js-set-up-your-clerk-account)
- [Next.js: Route Handlers](#next-js-route-handlers)
- [Next.js: Next.js Quickstart (App Router)](#next-js-next-js-quickstart-app-router-)
- [Next.js: Clerk Next.js SDK](#next-js-clerk-next-js-sdk)
- [Next.js: getAuth()](#next-js-getauth-)
- [Next.js: buildClerkProps](#next-js-buildclerkprops)
- [Next.js: clerkMiddleware() | Next.js](#next-js-clerkmiddleware-next-js)
- [Next.js: Server Actions](#next-js-server-actions)
- [Next.js: currentUser()](#next-js-currentuser-)
- [Next.js: auth()](#next-js-auth-)
- [Next.js: Next.js Quickstart (Pages Router)](#next-js-next-js-quickstart-pages-router-)
- [Next.js: Read session and user data in your Next.js app with Clerk](#next-js-read-session-and-user-data-in-your-next-js-app-with-clerk)
- [Next.js: Build your own sign-in-or-up page for your Next.js app with Clerk](#next-js-build-your-own-sign-in-or-up-page-for-your-next-js-app-with-clerk)
- [Next.js: Build your own sign-up page for your Next.js app with Clerk](#next-js-build-your-own-sign-up-page-for-your-next-js-app-with-clerk)

---

# Welcome to Clerk Docs

[Skip to main content](#main)

Welcome to Clerk Docs
=====================

Find all the guides and resources you need to develop with Clerk.

[Quickstarts & Tutorials](/docs/quickstarts/overview)

------------------------------------------------------

Explore our end-to-end tutorials and getting started guides for different application stacks using Clerk.

[UI Components](/docs/components/overview)

-------------------------------------------

Clerk's prebuilt UI components give you a beautiful, fully-functional user management experience in minutes.

[API Reference](/docs/references/overview)

-------------------------------------------

Dig into our API reference documentation and SDKs. We have everything you need to get started setting up authentication with Clerk.

[Security](/docs/security/overview)

------------------------------------

Account security is the top concern of every feature we build. This documentation lists some of the many protections included with Clerk.

[Explore by frontend framework](#explore-by-frontend-framework)

----------------------------------------------------------------

### [Next.js](/docs/quickstarts/nextjs)

Easily add secure, beautiful, and fast authentication to Next.js with Clerk.

### [React](/docs/quickstarts/react)

Get started installing and initializing Clerk in a new React + Vite app.

### [Astro](/docs/quickstarts/astro)

Easily add secure and SSR-friendly authentication to your Astro application with Clerk.

### [Chrome Extension](/docs/quickstarts/chrome-extension)

Use the Chrome Extension SDK to authenticate users in your Chrome extension.

### [Expo](/docs/quickstarts/expo)

Use Clerk with Expo to authenticate users in your React Native application.

### [iOSBeta](/docs/quickstarts/ios)

Use the Clerk iOS SDK to authenticate users in your native Apple applications.

### [JavaScript](/docs/quickstarts/javascript)

The Clerk JavaScript SDK gives you access to prebuilt components and helpers to make user authentication easier.

### [Nuxt](/docs/quickstarts/nuxt)

Easily add secure, beautiful, and fast authentication to Nuxt with Clerk.

### [React Router](/docs/quickstarts/react-router)

Easily add secure, edge- and SSR-friendly authentication to React Router with Clerk.

### [RedwoodJS](/docs/references/redwood/overview)

Grow your RedwoodJS application with Clerk user management and authentication.

### [Remix](/docs/quickstarts/remix)

Easily add secure, edge- and SSR-friendly authentication to Remix with Clerk.

![tanstack start logo](data:image/webp;base64,UklGRu4JAABXRUJQVlA4TOEJAAAvP8APEM8Hu9r2tM0n/1KSMjNze8UzdNWu0duOwMzMlfXTGnBt204b3SczDjPU0+Vr5j+nnZ6Zp2dm0vjJ0oUc2bZqZZ1z3rX/cXcdQphEQgoWB0TgMHOHa3JEASCA6mXbtl1bY02NHcC+gJtq6gS2j+Aa/Sf7/8nY7ADw+MR//od0UAdVqEIUojCFeOEKdZ2TC6d7an1+DTIlHUShDur0v2kPEIX1/ZF5rZCuYct/87xXJc3Jdcw4BHhRxdJqF9PdrdRpi51GGXWq0NbpSINW7nVWUXczcgDDExNiEfXqZnAy7g9PvOkcndL6ndA2FYTZ0e8waiGBcsekHQvyZJbM2C5dIKjFQE9hqRgZowLYZ5RSB00iBaNgKQx8DtQvIjlPAAWYEBECKCAEwEeBpigqfJvUv+k1pq4ajyduRLjbAe2/hCJ8eA5ejtzrLD3L+S1LJiwHtfy3qRsMF6O5Zs3w+OdGQFuYDmjCTUfIq2jCRruMVca0QtDGxEN73TM9m9mVTwTQlWqXKebbnReuFRAsKaMztr8sBDF4XQiCZf2gyhm+evx475T/bMXkJ/P/bH7sn4/fpvxg5xfdVOv/C1DP+5nOBtpF8V51yL7Hp19nN/1fWo2BdPkhPBQTrqPW+58ZI04aj9D8dcriIDYfPs2PeQKY0xtmlRvzW5u3wjVx+VkW8V3c9Bcz/d68ppcUT7NN5BwXMtrfxltpLS6TnfpxZ65i9Jva4/F09xKHDn33UUc9g2Lsa8dmfGDtesPbS7Q+O2PMJOiThnjBUOGBPkhPBomjsrRXRWakM5V5K+byF0kO8uIPPOcl/mupUf4X+Q+g+66zmdB050bbJVvZst3+2OJJd7s3ax939pabr/0Tagr9c9w69ufp30Cs+xcogWqHv6AEedBreClwp6kGmkJSOyjPr6vh72iOy4jMPEacH9WAtuOxwWx1qDE9nwH2MhCgNB9uLeTdml/ZZaWrxv9MWjrSMfjLmHJTb50zARERTEvbtrVt5K0IDGF0mDkb6FLaMDPYwxBmzuBRmSF84GFmxkj25WOBISv4v++T/j+i/w7ctnGk0FOwe8XvoKz9f2KnO/V25pQexx1WfZ5zGTjUXY7U3ff4yh32haU7VwF/vYjCtrJNMplMryD55Zckov8O3LaNpCiDFTqX926/4ElBrkDDz3//8+8P//OfGOfufyB+tjW6CgJR/PyL+yNLgruEZqMrucV//eF7w3cAQEAE1gbEyP01jijSv/3Gv2XfGFgyv//B+Lc/ijQvAtH9/esUfXtzaDDyx7d4/TCdCLz/w1dp+OP2PH69dgMO3k81AvHpl19A6swHADs3AFJ9KBAffJGW2wYhzAHYSyUC8eHn6fjs9tAg9t51jekAgv3kEYiP7qXpjutyxnagw9BJKQQfPk7ujutCcjsdZEvS88GTZJ65eeGBlzCh4vVteLLaQV2dln0v4SHw6bOkCqcHNJb3nCewMBRZPOfUsdtlc5ggAu8/fyEgscIBSVX080RFRLDMrHax02GZXk7X3090PT6yOS8qFHRE57rq55oeBsgWF0cWL4BOVstAdOz2EhmL6CDRsxOr82x9gLFozkV+LCDrpDkO9bNw0dEJceK8OjK4ekTLRmzsj+KnljkqGuhXfRy4CAOXomAhc43lW2qdRZaA86PTnS5r+qgnbj1LmU2BpgRcvw+0qOPoIKk+4LLkAyNmqyDnfHX59Mzp4sbNZP6gwHjxmQ0rDutS1HHIccghcjQ1gwdc7teLmdkKoHZwGRis7hoXU3fcI4zzLAgIAAiYP6MTWUIagaQ5ks8fyMi8RLMUQs3Q4hmUrYJY2d7t6OKduGUeJUGbsqwBDXSIEtGUI5MGROCE2LTUz4IW5Y1BxMh2EM+wfNVQVpLrwY0yu5wBVdZIlzSASUGcy6BwKbxWDmtQZhFEgc2D1cHyZUBERCE2PFgKAAIAxFpUVTQOQEAwNQ6aD7jE/f3ZZQazmtXgkhArfasClpkAKPVgBQBUAwDkxHySynVFBseY0dmYP+AzHvfPW2ox29QygKUIAOtbAQaVuFHFbEKXPsUvayoRl6bGJt7M7g9kuH7uDVfb1TCryFI5w8FFxljVxmaNzfqMP+CqUcUncZ80Ozbxek228GZkci7mMak6RKyNLFYj4uZWrRXOSYEM7/SM4pOBzbwxOgaNNfOhmHHxf4y1KWkk01Z9nRXNaZl+fT7k9cmBy9DCKIyL2jp3/mNNuZypS0d9A1q5c3IgOoezXp/qxt5EY94y2+DC3MchB9PQ0NZk1TgX1eewKeTN4P7pBecTGPvQVgiddGBba7PNnO40ue7HxsTecJo/HBv9xL0SrS127XNCCPeNy8zA9EJL82tjI6PXWq7E+RDc85Ny89mZ8+7F7Zvw5AzuBmcvhNCtT9+9YC2SuvUUbXQunj13yYVw7+oL55wl5f5TNIGLyLleFUL/83tKKXWx69ZNp+TFS5d7VERMX/9lPrIbtNZadt10N2496ZeP/5f9OhJ9r6+E0YIUptxHjfhFP+7HCLS8ftUiBnY5Y8x/rdaihqEWi4hWkFfrbVKIdqZuPW6xHZ++wOiQbR8wLUL52tZjvZrQQdFcHtNyT3TH56+a9M9f8i8YYFKFxOyNQd8gYuc3SicSOphQbJmPPU+s1mTXwJD9+QuMaTeDITH7YrD+YwN/L68AKIP4g6YhNfD45gd8p5Qf9wD+MR+6Oj6rTmMGyLEhMddjkF9b5bLyW30bHAD5PJ1giFP8BuV96BmAwW8/zAo/5Vo+5uDP8tLC/NyshCWnFB3YePlPMmWtTZDr1RMUWvQUmJcbdGRZLTkm5sKS+hPLO9geHpGlotYoZWFybml1ZSubTslkvKGuprrKVZoK42Sd56PCnZXVpbnJAifm8HaMPkzNzrO4mYmC2mpOp5QkVotYA9V0oIIg633Pvd0qjE/McGJOsROH7cUFHg+zGZ1OeA2q3tUZRqqYw7WW3hsFD7gRF7cD85bpmUmKMXPzD7LGpMlNUEzq7BvVPD83E4g5HZw4uXKRUsLC/Zy16WQC4wJSSQV80oUSMjHLvGnf9gTLndw+myFXEJDqgEj/jdccCEnPgeAQUw/3AWQzaRVFKhynmTFOjxXHC4/2IykjInXGBD8CRlofHxbGi2OxMHTJHNhPOmdtNsMXjxXOhwgTfuJRKXTLA5Tv7GcaSAclEZR6nlTWJ/x7ZaGJ/7EDxvCFDoqJ9BN7BBceRw6pEEkLCzYJL3yOHhKWuPV5guJLNwfvD4eLFvgQNXLWbYKDB4OyT+yAhjd0NOK69UgkedvEzHQBosphjoR8DBuJQX531u3vjx0+yBcy0Nj0Ps/aLjQT7v3RI+RQt3+f2yuPHbHv6T4nsgEA)

### [TanStack StartBeta](/docs/quickstarts/tanstack-start)

Easily add secure and SSR-friendly authentication to your TanStack Start application with Clerk.

### [Vue](/docs/quickstarts/vue)

Get started installing and initializing Clerk in a new Vue + Vite app.

[Explore by backend framework](#explore-by-backend-framework)

--------------------------------------------------------------

### [JS Backend SDK](/docs/references/backend/overview)

The Clerk Backend SDK exposes our Backend API resources and low-level authentication utilities for JavaScript environments.

### [C#](https://github.com/clerk/clerk-sdk-csharp/blob/main/README.md)

The Clerk C# SDK is a wrapper around our Backend API to make it easier to integrate Clerk into your backend.

### [Express](/docs/quickstarts/express)

Quickly add authentication and user management to your Express application.

### [Go](/docs/references/go/overview)

The Clerk Go SDK is a wrapper around the Backend API written in Golang to make it easier to integrate Clerk into your backend.

### [Fastify](/docs/quickstarts/fastify)

Build secure authentication and user management flows for your Fastify server.

### [Python](https://github.com/clerk/clerk-sdk-python/blob/main/README.md)

The Clerk Python SDK is a wrapper around the Backend API written in Python to make it easier to integrate Clerk into your backend.

### [Ruby on Rails](/docs/quickstarts/ruby)

Integrate authentication and user management into your Ruby application.

[Explore by feature](#explore-by-feature)

------------------------------------------

### [Authentication](/docs/authentication/overview)

Clerk supports multiple authentication strategies so you can implement the strategy that makes sense for your users.

### [User management](/docs/users/overview)

Complete user management. Add sign up, sign in, and profile management to your application in minutes.

### [Database integrations](/docs/integrations/overview)

Enable Clerk-managed users to authenticate and interact directly with your database with Clerk's integrations.

### [Customization](/docs/customization/overview)

Clerk's components can be customized to match the look and feel of your application.

### [Organizations](/docs/organizations/overview)

Organizations are shared accounts, useful for project and team leaders. Members with elevated privileges can manage member access to the organization's data and resources.

### [SDKs](/docs/references/overview)

Clerk's SDKs allow you to call the Clerk server API without having to implement the calls yourself.

[Learn the concepts](#learn-the-concepts)

------------------------------------------

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F_docs%2Fmain%2Fhome%2Fwhat-is-clerk.png&w=2048&q=75&dpl=dpl_5id1Ke8Qc4iQ8CKhTafQbUqToAVh)![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F_docs%2Fmain%2Fhome%2Fwhat-is-clerk-dark.png&w=2048&q=75&dpl=dpl_5id1Ke8Qc4iQ8CKhTafQbUqToAVh)

### [What is Clerk authentication?](/docs/authentication/overview)

Clerk offers multiple authentication strategies to identify legitimate users of your application, and to allow them to make authenticated requests to your backend.

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F_docs%2Fmain%2Fhome%2Fuser-object.png&w=2048&q=75&dpl=dpl_5id1Ke8Qc4iQ8CKhTafQbUqToAVh)![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F_docs%2Fmain%2Fhome%2Fuser-object-dark.png&w=2048&q=75&dpl=dpl_5id1Ke8Qc4iQ8CKhTafQbUqToAVh)

### [What is the "User" object?](/docs/users/overview)

The User object contains all account information that describes a user of your app in Clerk. Users can authenticate and manage their accounts, update their personal and contact info, or set up security features for their accounts.

![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F_docs%2Fmain%2Fhome%2Forganizations.png&w=2048&q=75&dpl=dpl_5id1Ke8Qc4iQ8CKhTafQbUqToAVh)![](/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F_docs%2Fmain%2Fhome%2Forganizations-dark.png&w=2048&q=75&dpl=dpl_5id1Ke8Qc4iQ8CKhTafQbUqToAVh)

### [How do organizations work?](/docs/organizations/overview)

Organizations allow members to collaborate across shared resources. Each member of an organization needs to have a user account in your application. All organization members have access to most of the organization resources, but some members can take advantage of administrative features.

[Join our Discord](https://clerk.com/discord)

----------------------------------------------

Join our official Discord server to chat with us directly and become a part of the Clerk community.

Join Discord

Join Discord

[Need help?](/support)

-----------------------

Contact us through Discord, Twitter, or email to receive answers to your questions and learn more about Clerk.

Get help

Get help

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/index.mdx)

Last updated on Feb 5, 2025

Support

---

# Next.js: Set up your Clerk account

[Skip to main content](#main)

1.  [Sign into Clerk](#sign-into-clerk)
    
2.  [Create a Clerk application](#create-a-clerk-application)
    
3.  [Select identifiers and social providers](#select-identifiers-and-social-providers)
    
4.  [Integrate Clerk into your application](#integrate-clerk-into-your-application)
    

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/quickstarts/setup-clerk.mdx)

Set up your Clerk account
=========================

Before you can start integrating Clerk into your application, you need to create a Clerk account and set up a new application in the Clerk Dashboard. This guide will walk you through those steps.

Note

If you're migrating from another platform, see the [migration guides](/docs/deployments/migrate-overview)
 to learn how to move your data to Clerk.

[Sign into Clerk](#sign-into-clerk)

------------------------------------

[Create a Clerk account⁠](https://dashboard.clerk.com/sign-up)
 or [sign into the Clerk Dashboard⁠](https://dashboard.clerk.com/)
.

[Create a Clerk application](#create-a-clerk-application)

----------------------------------------------------------

If you've just created an account for the first time, you'll be taken directly to the interactive authentication setup form.

Otherwise, you'll be redirected to the [Clerk Dashboard⁠](https://dashboard.clerk.com/)
. To create a new app, select the **Create application** card. You'll be redirected to the interactive authentication setup form.

[Select identifiers and social providers](#select-identifiers-and-social-providers)

------------------------------------------------------------------------------------

Once you are in the interactive authentication setup form, you will be asked to build your authentication flow. Here, Clerk provides various options for setting up your sign-up and sign-in flows. You can choose to use email, phone, or username as [identifiers](/docs/authentication/configuration/sign-up-sign-in-options#identifiers)
, and you can enable [social authentication providers](/docs/authentication/social-connections/overview)
.

Once the application is created, you can also customize your authentication flow by selecting different authentication strategies, verification methods, and more. [Learn more about sign-up and sign-in options](/docs/authentication/configuration/sign-up-sign-in-options)
.

[Integrate Clerk into your application](#integrate-clerk-into-your-application)

--------------------------------------------------------------------------------

Now that your application is created in the Clerk Dashboard, you can integrate it into your codebase. To integrate Clerk into your application, use one of our [quickstarts](/docs/quickstarts/overview)
.

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/quickstarts/setup-clerk.mdx)

Last updated on Jan 22, 2025

Support

---

# Next.js: Route Handlers

[Skip to main content](#main)

1.  [Protect your Route Handlers](#protect-your-route-handlers)
    
2.  [Retrieve data from external sources](#retrieve-data-from-external-sources)
    
3.  [Retrieve the current user](#retrieve-the-current-user)
    
4.  [Interact with Clerk's Backend API](#interact-with-clerks-backend-api)
    

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/route-handlers.mdx)

Route Handlers
==============

Clerk provides helpers that allow you to protect your Route Handlers, fetch the current user, and interact with the Clerk Backend API.

[Protect your Route Handlers](#protect-your-route-handlers)

------------------------------------------------------------

If you aren't protecting your Route Handler using [`clerkMiddleware()`](/docs/references/nextjs/clerk-middleware)
, you can protect your Route Handler in two ways:

*   Use [`auth.protect()`](/docs/references/nextjs/auth#protect)
     if you want Clerk to return a `404` error when there is no signed in user.
*   Use [`auth().userId`](/docs/references/nextjs/auth#retrieving-user-id)
     if you want to customize the behavior or error message.

auth.protect()

auth().userId()

app/api/route.ts

    import { auth } from '@clerk/nextjs/server'
    
    export async function GET() {
      // If there is no signed in user, this will return a 404 error
      await auth.protect()
    
      // Add your Route Handler logic here
    
      return Response.json({ message: 'Hello world!' })
    }

app/api/route.ts

    import { auth } from '@clerk/nextjs/server'
    import { NextResponse } from 'next/server'
    
    export async function GET() {
      const { userId } = await auth()
    
      if (!userId) {
        return NextResponse.json({ error: 'Error: No signed in user' }, { status: 401 })
      }
    
      // Add your Route Handler logic here
    
      return NextResponse.json({ userId })
    }

[Retrieve data from external sources](#retrieve-data-from-external-sources)

----------------------------------------------------------------------------

Clerk provides integrations with a number of popular databases.

The following example demonstrates how to use [`auth().getToken()`](/docs/references/backend/types/auth-object#get-token)
 to retrieve a token from a JWT template and use it to fetch data from the external source.

app/api/route.ts

    import { NextResponse } from 'next/server'
    import { auth } from '@clerk/nextjs/server'
    export async function GET() {
      const { userId, getToken } = await auth()
    
      if (!userId) {
        return new Response('Unauthorized', { status: 401 })
      }
    
      const token = await getToken({ template: 'supabase' })
    
      // Fetch data from Supabase and return it.
      const data = { supabaseData: 'Hello World' }
    
      return NextResponse.json({ data })
    }

[Retrieve the current user](#retrieve-the-current-user)

--------------------------------------------------------

In some cases, you might need the current user in your Route Handler. Clerk provides an asynchronous helper called [`currentUser()`](/docs/references/nextjs/current-user)
 to retrieve the current [`Backend User`](/docs/references/backend/types/backend-user)
 object.

app/api/route.ts

    import { NextResponse } from 'next/server'
    import { currentUser } from '@clerk/nextjs/server'
    export async function GET() {
      const user = await currentUser()
    
      if (!user) {
        return new Response('Unauthorized', { status: 401 })
      }
    
      return NextResponse.json({ user })
    }

[Interact with Clerk's Backend API](#interact-with-clerks-backend-api)

-----------------------------------------------------------------------

The [JavaScript Backend SDK](/docs/references/backend/overview)
 exposes the [Backend API⁠](/docs/reference/backend-api)
 resources and low-level authentication utilities for JavaScript environments.

`clerkClient` exposes an instance of the JavaScript Backend SDK for use in server environments.

app/api/route.ts

    import { NextResponse, NextRequest } from 'next/server'
    import { auth, clerkClient } from '@clerk/nextjs/server'
    
    export async function POST(req: NextRequest) {
      const { userId } = await auth()
    
      if (!userId) return NextResponse.redirect(new URL('/sign-in', req.url))
    
      const params = { firstName: 'John', lastName: 'Wick' }
    
      const client = await clerkClient()
    
      const user = await client.users.updateUser(userId, params)
    
      return NextResponse.json({ user })
    }

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/route-handlers.mdx)

Last updated on Jan 7, 2025

Support

---

# Next.js: Next.js Quickstart (App Router)

[Skip to main content](#main)

1.  [Create a new Next.js application](#create-a-new-next-js-application)
    
2.  [Install `@clerk/nextjs`](#install-clerk-nextjs)
    
3.  [Add `clerkMiddleware()` to your app](#add-clerk-middleware-to-your-app)
    
4.  [Add `<ClerkProvider>` and Clerk components to your app](#add-clerk-provider-and-clerk-components-to-your-app)
    
5.  [Create your first user](#create-your-first-user)
    
6.  [It's time to build!](#its-time-to-build)
    
7.  [Next steps](#next-steps)
    

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/quickstarts/nextjs.mdx)

Next.js Quickstart (App Router)
===============================

You will learn the following:
-----------------------------

*   Install `@clerk/nextjs`
*   Add `clerkMiddleware()`
*   Add `<ClerkProvider>` and Clerk components
*   Create your first user

Example repository
------------------

*   [App Router Quickstart Repo](https://github.com/clerk/clerk-nextjs-app-quickstart)
    

[Create a new Next.js application](#create-a-new-next-js-application)

----------------------------------------------------------------------

Run the following command to [create a new Next.js application⁠](https://nextjs.org/docs/getting-started/installation)
:

terminal

    npx create-next-app@latest

[Install `@clerk/nextjs`](#install-clerk-nextjs)

-------------------------------------------------

Run the following command to install the Next.js SDK:

npm

yarn

pnpm

bun

terminal

    npm install @clerk/nextjs

terminal

    yarn add @clerk/nextjs

terminal

    pnpm add @clerk/nextjs

terminal

    bun add @clerk/nextjs

[Add `clerkMiddleware()` to your app](#add-clerk-middleware-to-your-app)

-------------------------------------------------------------------------

`clerkMiddleware()` grants you access to user authentication state throughout your app.

1.  Create a `middleware.ts` file.
    
    *   If you're using the `/src` directory, create `middleware.ts` in the `/src` directory.
    *   If you're not using the `/src` directory, create `middleware.ts` in the root directory.
    
2.  In your `middleware.ts` file, export the `clerkMiddleware()` helper:
    
    middleware.ts
    
        import { clerkMiddleware } from '@clerk/nextjs/server'
        
        export default clerkMiddleware()
        
        export const config = {
          matcher: [\
            // Skip Next.js internals and all static files, unless found in search params\
            '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
            // Always run for API routes\
            '/(api|trpc)(.*)',\
          ],
        }
    
3.  By default, `clerkMiddleware()` will not protect any routes. All routes are public and you must opt-in to protection for routes. See the [`clerkMiddleware()` reference](/docs/references/nextjs/clerk-middleware)
     to learn how to require authentication for specific routes.
    

[Add `<ClerkProvider>` and Clerk components to your app](#add-clerk-provider-and-clerk-components-to-your-app)

---------------------------------------------------------------------------------------------------------------

1.  Add the [`<ClerkProvider>`](/docs/components/clerk-provider)
     component to your app's layout. This component provides Clerk's authentication context to your app.
2.  Copy and paste the following file into your `layout.tsx` file. This creates a header with Clerk's [prebuilt components](/docs/components/overview)
     to allow users to sign in and out.

app/layout.tsx

    import type { Metadata } from 'next'
    import {
      ClerkProvider,
      SignInButton,
      SignUpButton,
      SignedIn,
      SignedOut,
      UserButton,
    } from '@clerk/nextjs'
    import { Geist, Geist_Mono } from 'next/font/google'
    import './globals.css'
    
    const geistSans = Geist({
      variable: '--font-geist-sans',
      subsets: ['latin'],
    })
    
    const geistMono = Geist_Mono({
      variable: '--font-geist-mono',
      subsets: ['latin'],
    })
    
    export const metadata: Metadata = {
      title: 'Clerk Next.js Quickstart',
      description: 'Generated by create next app',
    }
    
    export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode
    }>) {
      return (
        <ClerkProvider>
          <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
              <header className="flex justify-end items-center p-4 gap-4 h-16">
                <SignedOut>
                  <SignInButton />
                  <SignUpButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </header>
              {children}
            </body>
          </html>
        </ClerkProvider>
      )
    }

[Create your first user](#create-your-first-user)

--------------------------------------------------

1.  Run your project with the following command:
    
    npm
    
    yarn
    
    pnpm
    
    bun
    
    terminal
    
        npm run dev
    
    terminal
    
        yarn dev
    
    terminal
    
        pnpm dev
    
    terminal
    
        bun dev
    
2.  Visit your app's homepage at [http://localhost:3000⁠](http://localhost:3000)
    .
    
3.  Click "Sign up" in the header and authenticate to create your first user.
    

[It's time to build!](#its-time-to-build)

------------------------------------------

You've added Clerk to your Next.js app 🎉. From here, you can continue developing your application.

To make configuration changes to your Clerk development instance, claim the Clerk keys that were generated for you by selecting **Claim your application** in the bottom right of your app. This will associate the application with your Clerk account.

[Next steps](#next-steps)

--------------------------

### [Create a custom sign-in or sign-up page](/docs/references/nextjs/custom-sign-in-or-up-page)

This tutorial gets you started with Clerk's `<SignInButton />` component, which uses the Account Portal. If you don't want to use the Account Portal, read this guide about creating a custom authentication page.

### [Add custom onboarding to your authentication flow](/docs/references/nextjs/add-onboarding-flow)

If you need to collect additional information about users that Clerk's Account Portal or prebuilt components don't collect, read this guide about adding a custom onboarding flow to your authentication flow.

### [Protect specific routes](/docs/references/nextjs/clerk-middleware)

This tutorial taught you that by default, `clerkMiddleware()` will not protect any routes. Read this reference doc to learn how to protect specific routes from unauthenticated users.

### [Read user and session data](/docs/references/nextjs/read-session-data)

Learn how to use Clerk's hooks and helpers to access the active session and user data in your Next.js app.

### [Next.js SDK Reference](/docs/references/nextjs/overview)

Learn more about the Clerk Next.js SDK and how to use it.

### [Deploy to Production](/docs/deployments/overview)

Learn how to deploy your Clerk app to production.

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/quickstarts/nextjs.mdx)

Last updated on Feb 12, 2025

Support

---

# Next.js: Clerk Next.js SDK

[Skip to main content](#main)

1.  [Client-side helpers](#client-side-helpers)
    
2.  [Server-side helpers](#server-side-helpers)
    1.  [App router](#app-router)
        
    2.  [Pages router](#pages-router)
        
3.  [`Auth` object](#auth-object)
    
4.  [`clerkMiddleware()`](#clerk-middleware)
    
5.  [Demo repositories](#demo-repositories)
    

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/overview.mdx)

Clerk Next.js SDK
=================

The Clerk Next.js SDK gives you access to prebuilt components, React hooks, and helpers to make user authentication easier. Refer to the [quickstart guide](/docs/quickstarts/nextjs)
 to get started.

[Client-side helpers](#client-side-helpers)

--------------------------------------------

Because the Next.js SDK is built on top of the Clerk React SDK, you can use the hooks that the React SDK provides. These hooks include access to the [`Clerk`](/docs/references/javascript/clerk/clerk)
 object, [`User` object](/docs/references/javascript/user/user)
, [`Organization` object](/docs/references/javascript/organization/organization)
, and a set of useful helper methods for signing in and signing up.

*   [`useUser()`⁠](/docs/references/react/use-user)
    
*   [`useClerk()`⁠](/docs/references/react/use-clerk)
    
*   [`useAuth()`⁠](/docs/references/react/use-auth)
    
*   [`useSignIn()`⁠](/docs/references/react/use-sign-in)
    
*   [`useSignUp()`⁠](/docs/references/react/use-sign-up)
    
*   [`useSession()`⁠](/docs/references/react/use-session)
    
*   [`useSessionList()`⁠](/docs/references/react/use-session-list)
    
*   [`useOrganization()`⁠](/docs/references/react/use-organization)
    
*   [`useOrganizationList()`⁠](/docs/references/react/use-organization-list)
    

[Server-side helpers](#server-side-helpers)

--------------------------------------------

### [App router](#app-router)

Clerk provides first-class support for the [Next.js App Router⁠](https://nextjs.org/docs/app)
. The following references show how to integrate Clerk features into apps using the latest App Router and React Server Components features.

*   [`auth()`](/docs/references/nextjs/auth)
    
*   [`currentUser()`](/docs/references/nextjs/current-user)
    
*   [Route Handlers](/docs/references/nextjs/route-handlers)
    
*   [Server Actions](/docs/references/nextjs/server-actions)
    

### [Pages router](#pages-router)

Clerk continues to provide drop-in support for the Next.js Pages Router. In addition to the main Clerk integration, the following references are available for apps using Pages Router.

*   [`getAuth()`](/docs/references/nextjs/get-auth)
    
*   [`buildClerkProps()`](/docs/references/nextjs/build-clerk-props)
    

[`Auth` object](#auth-object)

------------------------------

Both `auth()` (App Router) and `getAuth()` (Pages Router) return an `Auth` object. This JavaScript object contains important information like the current user's session ID, user ID, and organization ID. Learn more about the [`Auth` object⁠](/docs/references/backend/types/auth-object)
.

[`clerkMiddleware()`](#clerk-middleware)

-----------------------------------------

The `clerkMiddleware()` helper integrates Clerk authentication into your Next.js application through middleware. It allows you to integrate authorization into both the client and server of your application. You can learn more [here](/docs/references/nextjs/clerk-middleware)
.

[Demo repositories](#demo-repositories)

----------------------------------------

For examples of Clerk's features, such as user and organization management, integrated into a single application, see the Next.js demo repositories:

*   [Clerk + Next.js App Router Demo⁠](https://github.com/clerk/clerk-nextjs-demo-app-router)
    
*   [Clerk + Next.js Pages Router Demo⁠](https://github.com/clerk/clerk-nextjs-demo-pages-router)
    

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/overview.mdx)

Last updated on Jan 29, 2025

Support

---

# Next.js: getAuth()

[Skip to main content](#main)

1.  [Parameters](#parameters)
    
2.  [Returns](#returns)
    
3.  [Usage](#usage)
    

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/get-auth.mdx)

`getAuth()`
===========

The `getAuth()` helper retrieves authentication state from the request object.

Note

If you are using App Router, use the [`auth()` helper](/docs/references/nextjs/auth)
 instead.

[Parameters](#parameters)

--------------------------

*   Name
    
    `req`
    
    Description
    
    The Next.js request object.
    
*   Name
    
    `opts?`
    
    Description
    
    An optional object that can be used to configure the behavior of the `getAuth()` function. It accepts the following properties:
    
    *   `secretKey?`: A string that represents the Secret Key used to sign the session token. If not provided, the Secret Key is retrieved from the environment variable `CLERK_SECRET_KEY`.
    

[Returns](#returns)

--------------------

`getAuth()` returns the `Auth` object. See the [`Auth` reference](/docs/references/backend/types/auth-object)
 for more information.

[Usage](#usage)

----------------

See the [dedicated guide](/docs/references/nextjs/read-session-data#pages-router)
 for example usage.

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/get-auth.mdx)

Last updated on Jan 29, 2025

Support

---

# Next.js: buildClerkProps

[Skip to main content](#main)

1.  [Usage](#usage)
    

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/build-clerk-props.mdx)

`buildClerkProps`
=================

Clerk uses `buildClerkProps` to inform the client-side helpers of the authentication state of the user. This function is used SSR in the `getServerSideProps` function of your Next.js application.

[Usage](#usage)

----------------

#### [Basic usage](#basic-usage)

pages/myServerSidePage

    import { getAuth, buildClerkProps } from '@clerk/nextjs/server'
    import { GetServerSideProps } from 'next'
    
    export const getServerSideProps: GetServerSideProps = async (ctx) => {
      const { userId } = getAuth(ctx.req)
    
      if (!userId) {
        // handle user is not signed in.
      }
    
      // Load any data your application needs for the page using the userId
      return { props: { ...buildClerkProps(ctx.req) } }
    }

#### [Protecting pages using SSR](#protecting-pages-using-ssr)

It is important to protect your API routes to ensure that only authenticated users can access them. You can do this by checking if the `userId` is present in the `getAuth()` response.

pages/api/example.ts

    import { clerkClient, getAuth, buildClerkProps } from '@clerk/nextjs/server'
    import { GetServerSideProps } from 'next'
    
    export const getServerSideProps: GetServerSideProps = async (ctx) => {
      const { userId } = getAuth(ctx.req)
    
      const client = await clerkClient()
    
      const user = userId ? await client.users.getUser(userId) : undefined
    
      return { props: { ...buildClerkProps(ctx.req, { user }) } }
    }

#### [Usage with `clerkClient`](#usage-with-clerk-client)

The `clerkClient` allows you to access the Clerk API. You can use this to retrieve or update data.

pages/api/example.ts

    import { getAuth, buildClerkProps, clerkClient } from '@clerk/nextjs/server'
    import { GetServerSideProps } from 'next'
    
    export const getServerSideProps: GetServerSideProps = async (ctx) => {
      const { userId } = getAuth(ctx.req)
    
      const user = userId ? await clerkClient().users.getUser(userId) : undefined
    
      return { props: { ...buildClerkProps(ctx.req, { user }) } }
    }

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/build-clerk-props.mdx)

Last updated on Nov 18, 2024

Support

---

# Next.js: clerkMiddleware() | Next.js

[Skip to main content](#main)

1.  [Configure `clerkMiddleware()`](#configure-clerk-middleware)
    
2.  [`createRouteMatcher()`](#create-route-matcher)
    
3.  [Protect API routes](#protect-api-routes)
    1.  [Protect routes based on authentication status](#protect-routes-based-on-authentication-status)
        
    2.  [Protect routes based on authorization status](#protect-routes-based-on-authorization-status)
        
4.  [Protect multiple groups of routes](#protect-multiple-groups-of-routes)
    
5.  [Protect all routes](#protect-all-routes)
    
6.  [Debug your Middleware](#debug-your-middleware)
    
7.  [Combine Middleware](#combine-middleware)
    
8.  [`clerkMiddleware()` options](#clerk-middleware-options)
    1.  [Dynamic keys](#dynamic-keys)
        
    2.  [`OrganizationSyncOptions`](#organization-sync-options)
        
    3.  [Pattern](#pattern)
        

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/clerk-middleware.mdx)

clerkMiddleware() | Next.js
===========================

The `clerkMiddleware()` helper integrates Clerk authentication into your Next.js application through Middleware. `clerkMiddleware()` is compatible with both the App and Pages routers.

[Configure `clerkMiddleware()`](#configure-clerk-middleware)

-------------------------------------------------------------

Create a `middleware.ts` file at the root of your project, or in your `src/` directory if you have one.

Note

For more information about Middleware in Next.js, see the [Next.js documentation⁠](https://nextjs.org/docs/pages/building-your-application/routing/middleware)
.

middleware.ts

    import { clerkMiddleware } from '@clerk/nextjs/server'
    
    export default clerkMiddleware()
    
    export const config = {
      matcher: [\
        // Skip Next.js internals and all static files, unless found in search params\
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
        // Always run for API routes\
        '/(api|trpc)(.*)',\
      ],
    }

By default, `clerkMiddleware` will not protect any routes. All routes are public and you must opt-in to protection for routes.

[`createRouteMatcher()`](#create-route-matcher)

------------------------------------------------

`createRouteMatcher()` is a Clerk helper function that allows you to protect multiple routes. `createRouteMatcher()` accepts an array of routes and checks if the route the user is trying to visit matches one of the routes passed to it. The paths provided to this helper can be in the same format as the paths provided to the Next Middleware matcher.

The `createRouteMatcher()` helper returns a function that, if called with the `req` object from the Middleware, will return `true` if the user is trying to access a route that matches one of the routes passed to `createRouteMatcher()`.

In the following example, `createRouteMatcher()` sets all `/dashboard` and `/forum` routes as protected routes.

    const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)'])

[Protect API routes](#protect-api-routes)

------------------------------------------

You can protect routes using either or both of the following:

*   [Authentication-based protection](#protect-routes-based-on-authentication-status)
    : Verify if the user is signed in.
*   [Authorization-based protection](#protect-routes-based-on-authorization-status)
    : Verify if the user has the required organization roles or custom permissions.

### [Protect routes based on authentication status](#protect-routes-based-on-authentication-status)

You can protect routes based on a user's authentication status by checking if the user is signed in.

There are two methods that you can use:

*   Use [`auth.protect()`](/docs/references/nextjs/auth#protect)
     if you want to redirect unauthenticated users to the sign-in route automatically.
*   Use [`auth().userId`](/docs/references/nextjs/auth#retrieving-user-id)
     if you want more control over what your app does based on user authentication status.

auth.protect()

auth().userId()

middleware.ts

    import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
    
    const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)'])
    
    export default clerkMiddleware(async (auth, req) => {
      if (isProtectedRoute(req)) await auth.protect()
    })
    
    export const config = {
      matcher: [\
        // Skip Next.js internals and all static files, unless found in search params\
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
        // Always run for API routes\
        '/(api|trpc)(.*)',\
      ],
    }

app/middleware.ts

    import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
    
    const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)'])
    
    export default clerkMiddleware(async (auth, req) => {
      const { userId, redirectToSignIn } = await auth()
    
      if (!userId && isProtectedRoute(req)) {
        // Add custom logic to run before redirecting
    
        return redirectToSignIn()
      }
    })
    
    export const config = {
      matcher: [\
        // Skip Next.js internals and all static files, unless found in search params\
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
        // Always run for API routes\
        '/(api|trpc)(.*)',\
      ],
    }

### [Protect routes based on authorization status](#protect-routes-based-on-authorization-status)

You can protect routes based on a user's authorization status by checking if the user has the required roles or permissions.

There are two methods that you can use:

*   Use [`auth.protect()`](/docs/references/nextjs/auth#protect)
     if you want Clerk to return a `404` if the user does not have the role or permission.
*   Use [`auth().has()`](/docs/references/backend/types/auth-object#has)
     if you want more control over what your app does based on the authorization status.

auth.protect()

auth().has()

middleware.ts

    import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
    
    const isProtectedRoute = createRouteMatcher(['/admin(.*)'])
    
    export default clerkMiddleware(async (auth, req) => {
      // Restrict admin routes to users with specific permissions
      if (isProtectedRoute(req)) {
        await auth.protect((has) => {
          return has({ permission: 'org:admin:example1' }) || has({ permission: 'org:admin:example2' })
        })
      }
    })
    
    export const config = {
      matcher: [\
        // Skip Next.js internals and all static files, unless found in search params\
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
        // Always run for API routes\
        '/(api|trpc)(.*)',\
      ],
    }

Warning

Using `has()` **on the server-side** to check permissions works only with **custom permissions**, as [system permissions](/docs/organizations/roles-permissions#system-permissions)
 aren't included in `auth.sessionClaims.orgs_permissions`. To check system permissions, verify the user's role instead.

middleware.ts

    import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
    
    const isProtectedRoute = createRouteMatcher(['/admin(.*)'])
    
    export default clerkMiddleware(async (auth, req) => {
      const { has, redirectToSignIn } = await auth()
      // Restrict admin routes to users with specific permissions
      if (
        (isProtectedRoute(req) && !has({ permission: 'org:admin:example1' })) ||
        !has({ permission: 'org:admin:example2' })
      ) {
        // Add logic to run if the user does not have the required permissions
    
        return redirectToSignIn()
      }
    })
    
    export const config = {
      matcher: [\
        // Skip Next.js internals and all static files, unless found in search params\
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
        // Always run for API routes\
        '/(api|trpc)(.*)',\
      ],
    }

[Protect multiple groups of routes](#protect-multiple-groups-of-routes)

------------------------------------------------------------------------

You can use more than one `createRouteMatcher()` in your application if you have two or more groups of routes.

The following example uses the [`has()`](/docs/references/backend/types/auth-object#has)
 method from the `auth()` helper.

middleware.ts

    import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
    
    const isTenantRoute = createRouteMatcher(['/organization-selector(.*)', '/orgid/(.*)'])
    
    const isTenantAdminRoute = createRouteMatcher(['/orgId/(.*)/memberships', '/orgId/(.*)/domain'])
    
    export default clerkMiddleware(async (auth, req) => {
      // Restrict admin routes to users with specific permissions
      if (isTenantAdminRoute(req)) {
        await auth.protect((has) => {
          return has({ permission: 'org:admin:example1' }) || has({ permission: 'org:admin:example2' })
        })
      }
      // Restrict organization routes to signed in users
      if (isTenantRoute(req)) await auth.protect()
    })
    
    export const config = {
      matcher: [\
        // Skip Next.js internals and all static files, unless found in search params\
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
        // Always run for API routes\
        '/(api|trpc)(.*)',\
      ],
    }

[Protect all routes](#protect-all-routes)

------------------------------------------

To protect all routes in your application and define specific routes as public, you can use any of the above methods and simply invert the `if` condition.

middleware.ts

    import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
    
    const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])
    
    export default clerkMiddleware(async (auth, request) => {
      if (!isPublicRoute(request)) {
        await auth.protect()
      }
    })
    
    export const config = {
      matcher: [\
        // Skip Next.js internals and all static files, unless found in search params\
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
        // Always run for API routes\
        '/(api|trpc)(.*)',\
      ],
    }

[Debug your Middleware](#debug-your-middleware)

------------------------------------------------

If you are having issues getting your Middleware dialed in, or are trying to narrow down auth-related issues, you can use the debugging feature in `clerkMiddleware()`. Add `{ debug: true }` to `clerkMiddleware()` and you will get debug logs in your terminal.

middleware.ts

    import { clerkMiddleware } from '@clerk/nextjs/server'
    
    export default clerkMiddleware(
      (auth, req) => {
        // Add your middleware checks
      },
      { debug: true },
    )
    
    export const config = {
      matcher: [\
        // Skip Next.js internals and all static files, unless found in search params\
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
        // Always run for API routes\
        '/(api|trpc)(.*)',\
      ],
    }

If you would like to set up debugging for your development environment only, you can use the `process.env.NODE_ENV` variable to conditionally enable debugging. For example, `{ debug: process.env.NODE_ENV === 'development' }`.

[Combine Middleware](#combine-middleware)

------------------------------------------

You can combine other Middleware with Clerk's Middleware by returning the second Middleware from `clerkMiddleware()`.

middleware.ts

    import { clerkMiddleware, createRouteMatcher, redirectToSignIn } from '@clerk/nextjs/server'
    import createMiddleware from 'next-intl/middleware'
    
    import { AppConfig } from './utils/AppConfig'
    
    const intlMiddleware = createMiddleware({
      locales: AppConfig.locales,
      localePrefix: AppConfig.localePrefix,
      defaultLocale: AppConfig.defaultLocale,
    })
    
    const isProtectedRoute = createRouteMatcher(['dashboard/(.*)'])
    
    export default clerkMiddleware(async (auth, req) => {
      if (isProtectedRoute(req)) await auth.protect()
    
      return intlMiddleware(req)
    })
    
    export const config = {
      matcher: [\
        // Skip Next.js internals and all static files, unless found in search params\
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
        // Always run for API routes\
        '/(api|trpc)(.*)',\
      ],
    }

[`clerkMiddleware()` options](#clerk-middleware-options)

---------------------------------------------------------

The `clerkMiddleware()` function accepts an optional object. The following options are available:

*   Name
    
    `audience?`
    
    Type
    
    `string | string[]`
    
    Description
    
    A string or list of [audiences⁠](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3)
    . If passed, it is checked against the `aud` claim in the token.
    
*   Name
    
    `authorizedParties?`
    
    Type
    
    `string[]`
    
    Description
    
    An allowlist of origins to verify against, to protect your application from the subdomain cookie leaking attack. For example: `['http://localhost:3000', 'https://example.com']`
    
*   Name
    
    `clockSkewInMs?`
    
    Type
    
    `number`
    
    Description
    
    Specifies the allowed time difference (in milliseconds) between the Clerk server (which generates the token) and the clock of the user's application server when validating a token. Defaults to 5000 ms (5 seconds).
    
*   Name
    
    `domain?`
    
    Type
    
    `string`
    
    Description
    
    The domain used for satellites to inform Clerk where this application is deployed.
    
*   Name
    
    `isSatellite?`
    
    Type
    
    `boolean`
    
    Description
    
    When using Clerk's satellite feature, this should be set to `true` for secondary domains.
    
*   Name
    
    `jwtKey`
    
    Type
    
    `string`
    
    Description
    
    Used to verify the session token in a networkless manner. Supply the PEM public key from the **[**API keys**⁠](https://dashboard.clerk.com/last-active?path=api-keys)
     page -> Show JWT public key -> PEM Public Key** section in the Clerk Dashboard. **It's recommended to use [the environment variable](/docs/deployments/clerk-environment-variables)
     instead.** For more information, refer to [Manual JWT verification](/docs/backend-requests/handling/manual-jwt)
    .
    
*   Name
    
    `organizationSyncOptions?`
    
    Type
    
    `[OrganizationSyncOptions](#organization-sync-options)  | undefined`
    
    Description
    
    Used to activate a specific [organization](/docs/organizations/overview)
     or [personal account](/docs/organizations/organization-workspaces#organization-workspaces-in-the-clerk-dashboard:~:text=Personal%20account)
     based on URL path parameters. If there's a mismatch between the active organization in the session (e.g., as reported by [`auth()`](/docs/references/nextjs/auth)
    ) and the organization indicated by the URL, the middleware will attempt to activate the organization specified in the URL.
    
*   Name
    
    `proxyUrl?`
    
    Type
    
    `string`
    
    Description
    
    Specify the URL of the proxy, if using a proxy.
    
*   Name
    
    `signInUrl`
    
    Type
    
    `string`
    
    Description
    
    This URL will be used for any redirects that might happen and needs to point to your primary application on the client-side. This option is optional for production instances. **It is required to be set for a satellite application in a development instance.** It's recommended to use [the environment variable](/docs/deployments/clerk-environment-variables#sign-in-and-sign-up-redirects)
     instead.
    
*   Name
    
    `signUpUrl`
    
    Type
    
    `string`
    
    Description
    
    This URL will be used for any redirects that might happen and needs to point to your primary application on the client-side. This option is optional for production instances but **must be set for a satellite application in a development instance.** It's recommended to use [the environment variable](/docs/deployments/clerk-environment-variables#sign-in-and-sign-up-redirects)
     instead.
    
*   Name
    
    `publishableKey`
    
    Type
    
    `string`
    
    Description
    
    The Clerk Publishable Key for your instance. This can be found on the [**API keys**⁠](https://dashboard.clerk.com/last-active?path=api-keys)
     page in the Clerk Dashboard.
    
*   Name
    
    `secretKey?`
    
    Type
    
    `string`
    
    Description
    
    The Clerk Secret Key for your instance. This can be found on the [**API keys**⁠](https://dashboard.clerk.com/last-active?path=api-keys)
     page in the Clerk Dashboard. The `CLERK_ENCRYPTION_KEY` environment variable must be set when providing `secretKey` as an option, refer to [Dynamic keys](#dynamic-keys)
    .
    

It's also possible to dynamically set options based on the incoming request:

middleware.ts

    import { clerkMiddleware } from '@clerk/nextjs/server'
    
    export default clerkMiddleware(
      (auth, req) => {
        // Add your middleware checks
      },
      (req) => ({
        // Provide `domain` based on the request host
        domain: req.nextUrl.host,
      }),
    )

### [Dynamic keys](#dynamic-keys)

Note

Dynamic keys are not accessible on the client-side.

The following options, known as "Dynamic Keys," are shared to the Next.js application server through `clerkMiddleware`, enabling access by server-side helpers like [`auth()`](/docs/references/nextjs/auth)
:

*   `signUpUrl`
*   `signInUrl`
*   `secretKey`
*   `publishableKey`

Dynamic keys are encrypted and shared during request time using a [AES encryption algorithm⁠](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)
. When providing a `secretKey`, the `CLERK_ENCRYPTION_KEY` environment variable is mandatory and used as the encryption key. If no `secretKey` is provided to `clerkMiddleware`, the encryption key defaults to `CLERK_SECRET_KEY`.

When providing `CLERK_ENCRYPTION_KEY`, it is recommended to use a 32-byte (256-bit), pseudorandom value. You can use `openssl` to generate a key:

terminal

    openssl rand --hex 32

For multi-tenant applications, you can dynamically define Clerk keys depending on the incoming request. Here's an example:

middleware.ts

    import { clerkMiddleware } from '@clerk/nextjs/server'
    
    // You would typically fetch these keys from a external store or environment variables.
    const tenantKeys = {
      tenant1: { publishableKey: 'pk_tenant1...', secretKey: 'sk_tenant1...' },
      tenant2: { publishableKey: 'pk_tenant2...', secretKey: 'sk_tenant2...' },
    }
    
    export default clerkMiddleware(
      (auth, req) => {
        // Add your middleware checks
      },
      (req) => {
        // Resolve tenant based on the request
        const tenant = getTenant(req)
        return tenantKeys[tenant]
      },
    )

### [`OrganizationSyncOptions`](#organization-sync-options)

The `organizationSyncOptions` property on the [`clerkMiddleware()`](#clerk-middleware-options)
 options object has the type `OrganizationSyncOptions`, which has the following properties:

*   Name
    
    `organizationPatterns`
    
    Type
    
    `[Pattern](#pattern) []`
    
    Description
    
    Specifies URL patterns that are organization-specific, containing an organization ID or slug as a path parameter. If a request matches this path, the organization identifier will be used to set that org as active.
    
    If the route also matches the `personalAccountPatterns` prop, this prop takes precedence.
    
    Patterns must have a path parameter named either `:id` (to match a Clerk organization ID) or `:slug` (to match a Clerk organization slug).
    
    Warning
    
    If the organization can't be activated—either because it doesn't exist or the user lacks access—the previously active organization will remain unchanged. Components must detect this case and provide an appropriate error and/or resolution pathway, such as calling `notFound()` or displaying an [`<OrganizationSwitcher />`](/docs/components/organization/organization-switcher)
    .
    
    Common examples:
    
    *   `["/orgs/:slug", "/orgs/:slug/(.*)"]`
    *   `["/orgs/:id", "/orgs/:id/(.*)"]`
    *   `["/app/:any/orgs/:slug", "/app/:any/orgs/:slug/(.*)"]`
    
*   Name
    
    `personalAccountPatterns`
    
    Type
    
    `[Pattern](#pattern) []`
    
    Description
    
    URL patterns for resources that exist within the context of a [Clerk Personal Account](/docs/organizations/organization-workspaces#organization-workspaces-in-the-clerk-dashboard:~:text=Personal%20account)
     (user-specific, outside any organization).
    
    If the route also matches the `organizationPattern` prop, the `organizationPattern` prop takes precedence.
    
    Common examples:
    
    *   `["/me", "/me/(.*)"]`
    *   `["/user/:any", "/user/:any/(.*)"]`
    

### [Pattern](#pattern)

A `Pattern` is a `string` that represents the structure of a URL path. In addition to any valid URL, it may include:

*   Named path parameters prefixed with a colon (e.g., `:id`, `:slug`, `:any`).
*   Wildcard token, `(.*)`, which matches the remainder of the path.

#### [Examples](#examples)

*   `/orgs/:slug`

| URL | Matches | `:slug` value |
| --- | --- | --- |
| `/orgs/acmecorp` | ✅   | `acmecorp` |
| `/orgs` | ❌   | n/a |
| `/orgs/acmecorp/settings` | ❌   | n/a |

*   `/app/:any/orgs/:id`

| URL | Matches | `:id` value |
| --- | --- | --- |
| `/app/petstore/orgs/org_123` | ✅   | `org_123` |
| `/app/dogstore/v2/orgs/org_123` | ❌   | n/a |

*   `/personal-account/(.*)`

| URL | Matches |
| --- | --- |
| `/personal-account/settings` | ✅   |
| `/personal-account` | ❌   |

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/clerk-middleware.mdx)

Last updated on Jan 21, 2025

Support

---

# Next.js: Server Actions

[Skip to main content](#main)

1.  [With Server Components](#with-server-components)
    1.  [Protect your Server Actions](#protect-your-server-actions)
        
    2.  [Accessing the current user](#accessing-the-current-user)
        
2.  [With Client Components](#with-client-components)
    1.  [Protect your Server Actions](#protect-your-server-actions-2)
        
    2.  [Accessing the current user](#accessing-the-current-user-2)
        

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/server-actions.mdx)

Server Actions
==============

Clerk provides helpers to allow you to protect your Server Actions, fetch the current user, and interact with the Clerk API.

The following guide provides examples for using Server Actions in Server Components and in Client Components.

[With Server Components](#with-server-components)

--------------------------------------------------

### [Protect your Server Actions](#protect-your-server-actions)

You can use the [`auth()`](/docs/references/nextjs/auth)
 helper to protect your server actions. This helper will return the current user's ID if they are signed in, or `null` if they are not.

actions.ts

    import { auth } from '@clerk/nextjs/server'
    
    export default function AddToCart() {
      async function addItem(formData: FormData) {
        'use server'
    
        const { userId } = await auth()
    
        if (!userId) {
          throw new Error('You must be signed in to add an item to your cart')
        }
    
        console.log('add item server action', formData)
      }
    
      return (
        <form action={addItem}>
          <input value={'test'} type="text" name="name" />
          <button type="submit">Add to Cart</button>
        </form>
      )
    }

### [Accessing the current user](#accessing-the-current-user)

Current user data is important for data enrichment. You can use the [`currentUser()`](/docs/references/nextjs/current-user)
 helper to fetch the current user's data in your server actions.

app/page.tsx

    import { currentUser } from '@clerk/nextjs/server'
    
    export default function AddHobby() {
      async function addHobby(formData: FormData) {
        'use server'
    
        const user = await currentUser()
    
        if (!user) {
          throw new Error('You must be signed in to use this feature')
        }
    
        const serverData = {
          usersHobby: formData.get('hobby'),
          userId: user.id,
          profileImage: user.imageUrl,
        }
    
        console.log('add item server action completed with user details ', serverData)
      }
    
      return (
        <form action={addHobby}>
          <input value={'soccer'} type="text" name="hobby" />
          <button type="submit">Submit your hobby</button>
        </form>
      )
    }

[With Client Components](#with-client-components)

--------------------------------------------------

When using Server Actions in Client Components, you need to make sure you use prop drilling to ensure that headers are available.

### [Protect your Server Actions](#protect-your-server-actions-2)

Use the following tabs to see an example of how to protect a Server Action that is used in a Client Component.

Server Action

Client Component

Page

app/actions.ts

    'use server'
    import { auth } from '@clerk/nextjs/server'
    
    export async function addItem(formData: FormData) {
      const { userId } = await auth()
    
      if (!userId) {
        throw new Error('You must be signed in to add an item to your cart')
      }
    
      console.log('add item server action', formData)
    }

app/components/AddItem.tsx

    'use client'
    
    export default function AddItem({ addItem }) {
      return (
        <form action={addItem}>
          <input value={'test'} type="text" name="name" />
          <button type="submit">Add to Cart</button>
        </form>
      )
    }

app/page.tsx

    import AddItem from './components/AddItem'
    import { addItem } from './actions'
    export default function Hobby() {
      return <AddItem addItem={addItem} />
    }

### [Accessing the current user](#accessing-the-current-user-2)

Use the following tabs to see an example of how to access the current user in a Server Action that is used in a Client Component.

Server Action

Client Component

Page

app/actions.ts

    'use server'
    import { currentUser } from '@clerk/nextjs/server'
    
    export async function addHobby(formData: FormData) {
      const user = await currentUser()
    
      if (!user) {
        throw new Error('You must be signed in to use this feature')
      }
    
      const serverData = {
        usersHobby: formData.get('hobby'),
        userId: user.id,
        profileImage: user.imageUrl,
      }
    
      console.log('add Hobby completed with user details ', serverData)
    }

app/components/AddHobby.tsx

    'use client'
    
    export default function UI({ addHobby }) {
      return (
        <form action={addHobby}>
          <input value={'soccer'} type="text" name="hobby" />
          <button type="submit">Submit your hobby</button>
        </form>
      )
    }

app/page.tsx

    import AddHobby from './components/AddHobby'
    import { addHobby } from './actions'
    export default function Hobby() {
      return <AddHobby addHobby={addHobby} />
    }

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/server-actions.mdx)

Last updated on Oct 23, 2024

Support

---

# Next.js: currentUser()

[Skip to main content](#main)

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/current-user.mdx)

`currentUser()`
===============

The `currentUser` helper returns the [`Backend User`](/docs/references/backend/types/backend-user)
 object of the currently active user. It can be used in Server Components, Route Handlers, and Server Actions.

Under the hood, this helper:

*   calls `fetch()`, so it is automatically deduped per request.
*   uses the [`GET /v1/users/{user_id}`⁠](/docs/reference/backend-api/tag/Users#operation/GetUser)
     endpoint.
*   counts towards the [Backend API request rate limit](/docs/backend-requests/resources/rate-limits#rate-limits)
    .

app/page.tsx

    import { currentUser } from '@clerk/nextjs/server'
    
    export default async function Page() {
      const user = await currentUser()
    
      if (!user) return <div>Not signed in</div>
    
      return <div>Hello {user?.firstName}</div>
    }

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/current-user.mdx)

Last updated on Dec 3, 2024

Support

---

# Next.js: auth()

[Skip to main content](#main)

1.  [`auth.protect()`](#auth-protect)
    1.  [Example](#example)
        
2.  [`redirectToSignIn()`](#redirect-to-sign-in)
    1.  [Example](#example-2)
        
3.  [`auth()` usage](#auth-usage)
    1.  [Protect pages and routes](#protect-pages-and-routes)
        
    2.  [Check roles and permissions](#check-roles-and-permissions)
        
    3.  [Data fetching with `getToken()`](#data-fetching-with-get-token)
        

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/auth.mdx)

`auth()`
========

The `auth()` helper returns the [`Auth`](/docs/references/backend/types/auth-object)
 object of the currently active user, as well as the [`redirectToSignIn()`](#redirect-to-sign-in)
 method.

*   Only available for App Router.
*   Only works on the server-side, such as in Server Components, Route Handlers, and Server Actions.
*   Requires [`clerkMiddleware()`](/docs/references/nextjs/clerk-middleware)
     to be configured.

[`auth.protect()`](#auth-protect)

----------------------------------

`auth` includes a single property, the `protect()` method, which you can use in two ways:

*   to check if a user is authenticated (signed in)
*   to check if a user is authorized (has the correct roles or permissions) to access something, such as a component or a route handler

The following table describes how `auth.protect()` behaves based on user authentication or authorization status:

| Authenticated | Authorized | `auth.protect()` will |
| --- | --- | --- |
| Yes | Yes | Return the [`Auth`](/docs/references/backend/types/auth-object)<br> object. |
| Yes | No  | Return a `404` error. |
| No  | No  | Redirect the user to the sign-in page\*. |

Important

For non-document requests, such as API requests, `auth.protect()` returns a `404` error to users who aren't authenticated.

`auth.protect()` accepts the following parameters:

*   Name
    
    `role?`
    
    Type
    
    `string`
    
    Description
    
    The role to check for.
    
*   Name
    
    `permission?`
    
    Type
    
    `string`
    
    Description
    
    The permission to check for.
    
*   Name
    
    `has?`
    
    Type
    
    `(isAuthorizedParams: CheckAuthorizationParamsWithCustomPermissions) => boolean`
    
    Description
    
    A function that checks if the user has an organization role or custom permission. See the [reference](/docs/references/backend/types/auth-object#has)
     for more information.
    
*   Name
    
    `unauthorizedUrl?`
    
    Type
    
    `string`
    
    Description
    
    The URL to redirect the user to if they are not authorized.
    
*   Name
    
    `unauthenticatedUrl?`
    
    Type
    
    `string`
    
    Description
    
    The URL to redirect the user to if they are not authenticated.
    

### [Example](#example)

`auth.protect()` can be used to check if a user is authenticated or authorized to access certain parts of your application or even entire routes. See detailed examples in the [dedicated guide](/docs/organizations/verify-user-permissions)
.

[`redirectToSignIn()`](#redirect-to-sign-in)

---------------------------------------------

The `auth()` helper returns the `redirectToSignIn()` method, which you can use to redirect the user to the sign-in page.

`redirectToSignIn()` accepts the following parameters:

*   Name
    
    `returnBackUrl?`
    
    Type
    
    `string | URL`
    
    Description
    
    The URL to redirect the user back to after they sign in.
    

Note

`auth()` on the server-side can only access redirect URLs defined via [environment variables](/docs/deployments/clerk-environment-variables#sign-in-and-sign-up-redirects)
 or [`clerkMiddleware` dynamic keys](/docs/references/nextjs/clerk-middleware#dynamic-keys)
.

### [Example](#example-2)

The following example shows how to use `redirectToSignIn()` to redirect the user to the sign-in page if they are not authenticated. It's also common to use `redirectToSignIn()` in `clerkMiddleware()` to protect entire routes; see [the `clerkMiddleware()` docs](/docs/references/nextjs/clerk-middleware)
 for more information.

app/page.tsx

    import { auth } from '@clerk/nextjs/server'
    
    export default async function Page() {
      const { userId, redirectToSignIn } = await auth()
    
      if (!userId) return redirectToSignIn()
    
      return <h1>Hello, {userId}</h1>
    }

[`auth()` usage](#auth-usage)

------------------------------

### [Protect pages and routes](#protect-pages-and-routes)

You can use `auth()` to check if a `userId` exists. If it's null, then there is not an authenticated (signed in) user. See detailed examples in the [dedicated guide](/docs/references/nextjs/read-session-data)
.

### [Check roles and permissions](#check-roles-and-permissions)

You can use `auth()` to check if a user is authorized to access certain parts of your application or even entire routes by checking their roles or permissions. See detailed examples in the [dedicated guide](/docs/organizations/verify-user-permissions)
.

### [Data fetching with `getToken()`](#data-fetching-with-get-token)

If you need to send a JWT along to a server, `getToken()` retrieves the current user's [session token](/docs/backend-requests/resources/session-tokens)
 or a [custom JWT template](/docs/backend-requests/making/jwt-templates)
. See detailed examples in the [`Auth` reference](/docs/references/backend/types/auth-object#get-token)
.

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/auth.mdx)

Last updated on Jan 29, 2025

Support

---

# Next.js: Next.js Quickstart (Pages Router)

[Skip to main content](#main)

1.  [Install `@clerk/nextjs`](#install-clerk-nextjs)
    
2.  [Set your Clerk API keys](#set-your-clerk-api-keys)
    
3.  [Add `clerkMiddleware()` to your app](#add-clerk-middleware-to-your-app)
    
4.  [Add `<ClerkProvider>` and Clerk components to your app](#add-clerk-provider-and-clerk-components-to-your-app)
    
5.  [Create your first user](#create-your-first-user)
    
6.  [Next steps](#next-steps)
    

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/quickstarts/nextjs-pages-router.mdx)

Next.js Quickstart (Pages Router)
=================================

You will learn the following:
-----------------------------

*   Install `@clerk/nextjs`
*   Set your Clerk API keys
*   Add `clerkMiddleware()`
*   Add `<ClerkProvider>` and Clerk components

Before you start
----------------

*   [Set up a Clerk application](/docs/quickstarts/setup-clerk)
    
*   [Create a Next.js application](https://nextjs.org/docs/getting-started/installation)
    

Example repository
------------------

*   [Pages Router Quickstart Repo](https://github.com/clerk/clerk-nextjs-pages-quickstart)
    

[Install `@clerk/nextjs`](#install-clerk-nextjs)

-------------------------------------------------

The [Clerk Next.js SDK](/docs/references/nextjs/overview)
 gives you access to prebuilt components, React hooks, and helpers to make user authentication easier.

Run the following command to install the SDK:

npm

yarn

pnpm

bun

terminal

    npm install @clerk/nextjs

terminal

    yarn add @clerk/nextjs

terminal

    pnpm add @clerk/nextjs

terminal

    bun add @clerk/nextjs

[Set your Clerk API keys](#set-your-clerk-api-keys)

----------------------------------------------------

Add the following keys to your `.env.local` file. These keys can always be retrieved from the [**API keys**⁠](https://dashboard.clerk.com/last-active?path=api-keys)
 page in the Clerk Dashboard.

1.  In the Clerk Dashboard, navigate to the [**API keys**⁠](https://dashboard.clerk.com/last-active?path=api-keys)
     page.
2.  In the **Quick Copy** section, copy your Clerk Publishable and Secret Keys.
3.  Paste your keys into your `.env.local` file.

The final result should resemble the following:

.env.local

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
    CLERK_SECRET_KEY=YOUR_SECRET_KEY

[Add `clerkMiddleware()` to your app](#add-clerk-middleware-to-your-app)

-------------------------------------------------------------------------

[`clerkMiddleware()`](/docs/references/nextjs/clerk-middleware#clerk-middleware)
 grants you access to user authentication state throughout your app, on any route or page. It also allows you to protect specific routes from unauthenticated users. To add `clerkMiddleware()` to your app, follow these steps:

1.  Create a `middleware.ts` file.
    
    *   If you're using the `/src` directory, create `middleware.ts` in the `/src` directory.
    *   If you're not using the `/src` directory, create `middleware.ts` in the root directory alongside `.env.local`.
    
2.  In your `middleware.ts` file, export the `clerkMiddleware()` helper:
    
    middleware.ts
    
        import { clerkMiddleware } from '@clerk/nextjs/server'
        
        export default clerkMiddleware()
        
        export const config = {
          matcher: [\
            // Skip Next.js internals and all static files, unless found in search params\
            '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
            // Always run for API routes\
            '/(api|trpc)(.*)',\
          ],
        }
    
3.  By default, `clerkMiddleware()` will not protect any routes. All routes are public and you must opt-in to protection for routes. See the [`clerkMiddleware()` reference](/docs/references/nextjs/clerk-middleware)
     to learn how to require authentication for specific routes.
    

[Add `<ClerkProvider>` and Clerk components to your app](#add-clerk-provider-and-clerk-components-to-your-app)

---------------------------------------------------------------------------------------------------------------

The [`<ClerkProvider>`](/docs/components/clerk-provider)
 component provides session and user context to Clerk's hooks and components. It's recommended to wrap your entire app at the entry point with `<ClerkProvider>` to make authentication globally accessible. See the [reference docs](/docs/components/clerk-provider)
 for other configuration options.

You can control which content signed-in and signed-out users can see with Clerk's [prebuilt control components](/docs/components/overview#control-components)
. Create a header using the following components:

*   [`<SignedIn>`](/docs/components/control/signed-in)
    : Children of this component can only be seen while **signed in**.
    
*   [`<SignedOut>`](/docs/components/control/signed-out)
    : Children of this component can only be seen while **signed out**.
    
*   [`<UserButton />`](/docs/components/user/user-button)
    : Shows the signed-in user's avatar. Selecting it opens a dropdown menu with account management options.
    
*   [`<SignInButton />`](/docs/components/unstyled/sign-in-button)
    : An unstyled component that links to the sign-in page. In this example, since no props or [environment variables](/docs/deployments/clerk-environment-variables)
     are set for the sign-in URL, this component links to the [Account Portal sign-in page](/docs/customization/account-portal/overview#sign-in-or-up)
    .
    
    pages/\_app.tsx
    
        import '@/styles/globals.css'
        import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
        import type { AppProps } from 'next/app'
        
        function MyApp({ Component, pageProps }: AppProps) {
          return (
            <ClerkProvider {...pageProps}>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <Component {...pageProps} />
            </ClerkProvider>
          )
        }
        
        export default MyApp
    

[Create your first user](#create-your-first-user)

--------------------------------------------------

1.  Run your project with the following command:
    
    npm
    
    yarn
    
    pnpm
    
    bun
    
    terminal
    
        npm run dev
    
    terminal
    
        yarn dev
    
    terminal
    
        pnpm dev
    
    terminal
    
        bun dev
    
2.  Visit your app's homepage at [http://localhost:3000⁠](http://localhost:3000)
    .
    
3.  Click "Sign up" in the header and authenticate to create your first user.
    

[Next steps](#next-steps)

--------------------------

### [Create a custom sign-in or sign-up page](/docs/references/nextjs/custom-sign-in-or-up-page)

This tutorial gets you started with Clerk's `<SignInButton />` component, which uses the Account Portal. If you don't want to use the Account Portal, read this guide about creating a custom authentication page.

### [Add custom onboarding to your authentication flow](/docs/references/nextjs/add-onboarding-flow)

If you need to collect additional information about users that Clerk's Account Portal or prebuilt components don't collect, read this guide about adding a custom onboarding flow to your authentication flow.

### [Protect specific routes](/docs/references/nextjs/clerk-middleware)

This tutorial taught you that by default, `clerkMiddleware()` will not protect any routes. Read this reference doc to learn how to protect specific routes from unauthenticated users.

### [Read user and session data](/docs/references/nextjs/read-session-data)

Learn how to use Clerk's hooks and helpers to access the active session and user data in your Next.js app.

### [Next.js SDK Reference](/docs/references/nextjs/overview)

Learn more about the Clerk Next.js SDK and how to use it.

### [Deploy to Production](/docs/deployments/overview)

Learn how to deploy your Clerk app to production.

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/quickstarts/nextjs-pages-router.mdx)

Last updated on Feb 12, 2025

Support

---

# Next.js: Read session and user data in your Next.js app with Clerk

[Skip to main content](#main)

1.  [Server-side](#server-side)
    1.  [App Router](#app-router)
        
    2.  [Pages Router](#pages-router)
        
2.  [Client-side](#client-side)
    1.  [`useAuth()`](#use-auth)
        
    2.  [`useUser()`](#use-user)
        

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/read-session-data.mdx)

Read session and user data in your Next.js app with Clerk
=========================================================

Clerk provides a set of [hooks and helpers](/docs/references/nextjs/overview#client-side-helpers)
 that you can use to access the active session and user data in your Next.js application. Here are examples of how to use these helpers in both the client and server-side to get you started.

[Server-side](#server-side)

----------------------------

### [App Router](#app-router)

[`auth()`](/docs/references/nextjs/auth)
 and [`currentUser()`](/docs/references/nextjs/current-user)
 are App Router-specific helpers that you can use inside of your Route Handlers, Middleware, Server Components, and Server Actions.

*   The `auth()` helper will return the [`Auth`](/docs/references/backend/types/auth-object)
     object of the currently active user.
*   The `currentUser()` helper will return the [`Backend User`](/docs/references/backend/types/backend-user)
     object of the currently active user. This is helpful if you want to render information, like their first and last name, directly from the server. Under the hood, `currentUser()` uses the [`clerkClient`](/docs/references/backend/overview)
     wrapper to make a call to the Backend API. **This does count towards the [Backend API request rate limit](/docs/backend-requests/resources/rate-limits#rate-limits)
    **. This also uses `fetch()` so it is automatically deduped per request.

The following example uses the [`auth()`](/docs/references/nextjs/auth)
 helper to validate an authenticated user and the `currentUser()` helper to access the `Backend User` object for the authenticated user.

Note

Any requests from a Client Component to a Route Handler will read the session from cookies and will not need the token sent as a Bearer token.

Server components and actions

Route Handler

app/page.tsx

    import { auth, currentUser } from '@clerk/nextjs/server'
    
    export default async function Page() {
      // Get the userId from auth() -- if null, the user is not signed in
      const { userId } = await auth()
    
      // Protect the route by checking if the user is signed in
      if (!userId) {
        return <div>Sign in to view this page</div>
      }
    
      // Get the Backend API User object when you need access to the user's information
      const user = await currentUser()
    
      // Use `user` to render user details or create UI elements
      return <div>Welcome, {user.firstName}!</div>
    }

app/api/user/route.ts

    import { NextResponse } from 'next/server'
    import { currentUser, auth } from '@clerk/nextjs/server'
    
    export async function GET() {
      // Use `auth()` to get the user's ID
      const { userId } = await auth()
    
      // Protect the route by checking if the user is signed in
      if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 })
      }
    
      // Use `currentUser()` to get the Backend API User object
      const user = await currentUser()
    
      // Add your Route Handler's logic with the returned `user` object
    
      return NextResponse.json({ user: user }, { status: 200 })
    }

### [Pages Router](#pages-router)

For Next.js applications using the Pages Router, the [`getAuth()`](/docs/references/nextjs/get-auth)
 helper will return the [`Auth`](/docs/references/backend/types/auth-object)
 object of the currently active user, which contains important information like the current user's session ID, user ID, and organization ID. The `userId` can be used to protect your API routes.

In some cases, you may need the full [`Backend User`](/docs/references/backend/types/backend-user)
 object of the currently active user. This is helpful if you want to render information, like their first and last name, directly from the server.

The `clerkClient()` helper returns an instance of the [JavaScript Backend SDK](/docs/references/backend/overview)
, which exposes Clerk's Backend API resources through methods such as the [`getUser()`⁠](/docs/references/backend/user/get-user)
 method. This method returns the full `Backend User` object.

In the following example, the `userId` is passed to the Backend SDK's `getUser()` method to get the user's full `Backend User` object.

API Route

getServerSideProps

pages/api/auth.ts

    import { getAuth, clerkClient } from '@clerk/nextjs/server'
    import type { NextApiRequest, NextApiResponse } from 'next'
    
    export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      // Use `getAuth()` to get the user's ID
      const { userId } = getAuth(req)
    
      // Protect the route by checking if the user is signed in
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' })
      }
    
      // Initialize the Backend SDK
      const client = await clerkClient()
    
      // Get the user's full `Backend User` object
      const user = await client.users.getUser(userId)
    
      return res.status(200).json({ user })
    }

Note

`buildClerkProps` informs client-side features, like `useAuth()`, `<SignedIn>`, and `<SignedOut>`, of the authentication state during server-side rendering.

pages/example.tsx

    import { getAuth, buildClerkProps } from '@clerk/nextjs/server'
    import { GetServerSideProps } from 'next'
    
    export const getServerSideProps: GetServerSideProps = async (ctx) => {
      // Use `getAuth()` to get the user's ID
      const { userId } = getAuth(ctx.req)
    
      // Protect the route by checking if the user is signed in
      if (!userId) {
        // Handle when the user is not signed in
      }
    
      // Initialize the Backend SDK
      const client = await clerkClient()
    
      // Get the user's full `Backend User` object
      const user = userId ? await client.users.getUser(userId) : undefined
    
      return { props: { ...buildClerkProps(ctx.req, { user }) } }
    }

[Client-side](#client-side)

----------------------------

### [`useAuth()`](#use-auth)

The following example uses the [`useAuth()`](/docs/references/react/use-auth)
 hook to access the current auth state, as well as helper methods to manage the current active session. The hook returns `userId`, which can be used to protect your routes.

example.tsx

    export default function Example() {
      const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth()
    
      if (!isLoaded) {
        return <div>Loading...</div>
      }
    
      if (!isSignedIn) {
        // You could also add a redirect to the sign-in page here
        return <div>Sign in to view this page</div>
      }
    
      return (
        <div>
          Hello, {userId}! Your current active session is {sessionId}.
        </div>
      )
    }

### [`useUser()`](#use-user)

The following example uses the [`useUser()`](/docs/references/react/use-user)
 hook to access the [`User`](/docs/references/javascript/user/user)
 object, which contains the current user's data such as their full name. The `isLoaded` and `isSignedIn` properties are used to handle the loading state and to check if the user is signed in, respectively.

src/Example.tsx

    export default function Example() {
      const { isSignedIn, user, isLoaded } = useUser()
    
      if (!isLoaded) {
        return <div>Loading...</div>
      }
    
      if (!isSignedIn) {
        return <div>Sign in to view this page</div>
      }
    
      return <div>Hello {user.firstName}!</div>
    }

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/read-session-data.mdx)

Last updated on Jan 29, 2025

Support

---

# Next.js: Build your own sign-in-or-up page for your Next.js app with Clerk

[Skip to main content](#main)

1.  [Build a sign-in-or-up page](#build-a-sign-in-or-up-page)
    
2.  [Make the sign-in-or-up route public](#make-the-sign-in-or-up-route-public)
    
3.  [Update your environment variables](#update-your-environment-variables)
    
4.  [Visit your new page](#visit-your-new-page)
    
5.  [Next steps](#next-steps)
    

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/custom-sign-in-or-up-page.mdx)

Build your own sign-in-or-up page for your Next.js app with Clerk
=================================================================

This guide shows you how to use the [`<SignIn />`](/docs/components/authentication/sign-in)
 component with the [Next.js optional catch-all route⁠](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments)
 in order to build a custom page for your Next.js app that allows users to sign in or sign up within a single flow.

If the prebuilt components don't meet your specific needs or if you require more control over the logic, you can rebuild the existing Clerk flows using the Clerk API. For more information, see the [custom flow guides](/docs/custom-flows/overview)
.

Note

Just getting started with Clerk and Next.js? See the [quickstart tutorial](/docs/quickstarts/nextjs)
!

[Build a sign-in-or-up page](#build-a-sign-in-or-up-page)

----------------------------------------------------------

The following example demonstrates how to render the [`<SignIn />`](/docs/components/authentication/sign-up)
 component to allow users to both sign-in or sign-up from a single flow.

app/sign-in/\[\[...sign-in\]\]/page.tsx

    import { SignIn } from '@clerk/nextjs'
    
    export default function Page() {
      return <SignIn />
    }

[Make the sign-in-or-up route public](#make-the-sign-in-or-up-route-public)

----------------------------------------------------------------------------

By default, `clerkMiddleware()` makes all routes public. **This step is specifically for applications that have configured `clerkMiddleware()` to make [all routes protected](/docs/references/nextjs/clerk-middleware#protect-all-routes)
.** If you have not configured `clerkMiddleware()` to protect all routes, you can skip this step.

To make the sign-in route public:

*   Navigate to your `middleware.ts` file.
*   Create a new [route matcher](/docs/references/nextjs/clerk-middleware#create-route-matcher)
     that matches the sign-in route, or you can add it to your existing route matcher that is making routes public.
*   Create a check to see if the user's current route is a public route. If it is not a public route, use [`auth.protect()`](/docs/references/nextjs/auth#protect)
     to protect the route.

middleware.ts

    import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
    
    const isPublicRoute = createRouteMatcher(['/sign-in(.*)'])
    
    export default clerkMiddleware(async (auth, request) => {
      if (!isPublicRoute(request)) {
        await auth.protect()
      }
    })
    
    export const config = {
      matcher: [\
        // Skip Next.js internals and all static files, unless found in search params\
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
        // Always run for API routes\
        '/(api|trpc)(.*)',\
      ],
    }

[Update your environment variables](#update-your-environment-variables)

------------------------------------------------------------------------

Update your environment variables to point to your custom sign-in page. Learn more about the available [environment variables](/docs/deployments/clerk-environment-variables)
.

.env.local

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

[Visit your new page](#visit-your-new-page)

--------------------------------------------

Run your project with the following command:

npm

yarn

pnpm

bun

terminal

    npm run dev

terminal

    yarn dev

terminal

    pnpm dev

terminal

    bun dev

Visit your new custom page locally at [localhost:3000/sign-in⁠](http://localhost:3000/sign-in)
.

[Next steps](#next-steps)

--------------------------

### [Custom sign-up page](/docs/references/nextjs/custom-sign-up-page)

Learn how to add a custom sign-up page to your Next.js app with Clerk's prebuilt components.

### [Read user and session data](/docs/references/nextjs/read-session-data)

Learn how to use Clerk's hooks and helpers to access the active session and user data in your Next.js application.

### [Client-side helpers](/docs/references/nextjs/overview#client-side-helpers)

Learn more about Next.js client-side helpers and how to use them.

### [Next.js SDK Reference](/docs/references/nextjs/overview)

Learn more about additional Next.js methods.

### [Clerk components](/docs/components/overview)

Learn more about Clerk's prebuilt components that make authentication and user management easy.

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/custom-sign-in-or-up-page.mdx)

Last updated on Feb 12, 2025

Support

---

# Next.js: Build your own sign-up page for your Next.js app with Clerk

[Skip to main content](#main)

1.  [Build a sign-up page](#build-a-sign-up-page)
    
2.  [Make the sign-up route public](#make-the-sign-up-route-public)
    
3.  [Update your environment variables](#update-your-environment-variables)
    
4.  [Visit your new page](#visit-your-new-page)
    
5.  [Next steps](#next-steps)
    

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/custom-sign-up-page.mdx)

Build your own sign-up page for your Next.js app with Clerk
===========================================================

By default, the [`<SignIn />`](/docs/references/nextjs/custom-sign-in-or-up-page)
 component handles signing-in or signing-up, but if you'd like to have a dedicated sign-up page, this guide shows you how to use the [`<SignUp />`](/docs/components/authentication/sign-up)
 component with the [Next.js optional catch-all route⁠](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments)
 in order to build custom sign-up page for your Next.js app.

If the prebuilt components don't meet your specific needs or if you require more control over the logic, you can rebuild the existing Clerk flows using the Clerk API. For more information, see the [custom flow guides](/docs/custom-flows/overview)
.

Note

Just getting started with Clerk and Next.js? See the [quickstart tutorial](/docs/quickstarts/nextjs)
!

[Build a sign-up page](#build-a-sign-up-page)

----------------------------------------------

The following example demonstrates how to render the [`<SignUp />`](/docs/components/authentication/sign-up)
 component.

app/sign-up/\[\[...sign-up\]\]/page.tsx

    import { SignUp } from '@clerk/nextjs'
    
    export default function Page() {
      return <SignUp />
    }

[Make the sign-up route public](#make-the-sign-up-route-public)

----------------------------------------------------------------

By default, `clerkMiddleware()` makes all routes public. **This step is specifically for applications that have configured `clerkMiddleware()` to make [all routes protected](/docs/references/nextjs/clerk-middleware#protect-all-routes)
.** If you have not configured `clerkMiddleware()` to protect all routes, you can skip this step.

To make the sign-up route public:

*   Navigate to your `middleware.ts` file.
*   Add the sign-up route to your existing route matcher that is making routes public.

middleware.ts

      import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
      
      const isPublicRoute = createRouteMatcher([\
        '/sign-in(.*)',\
    +   '/sign-up(.*)'\
      ])
      
      export default clerkMiddleware(async (auth, request) => {
        if (!isPublicRoute(request)) {
          await auth.protect()
        }
      })
      
      export const config = {
        matcher: [\
          // Skip Next.js internals and all static files, unless found in search params\
          '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\
          // Always run for API routes\
          '/(api|trpc)(.*)',\
        ],
      }

[Update your environment variables](#update-your-environment-variables)

------------------------------------------------------------------------

Update your environment variables to point to your custom sign-in and sign-up pages. Learn more about the available [environment variables](/docs/deployments/clerk-environment-variables)
.

.env.local

      NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    + NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

[Visit your new page](#visit-your-new-page)

--------------------------------------------

Run your project with the following command:

npm

yarn

pnpm

bun

terminal

    npm run dev

terminal

    yarn dev

terminal

    pnpm dev

terminal

    bun dev

Visit your new custom page locally at [localhost:3000/sign-up⁠](http://localhost:3000/sign-up)
.

[Next steps](#next-steps)

--------------------------

### [Read user and session data](/docs/references/nextjs/read-session-data)

Learn how to use Clerk's hooks and helpers to access the active session and user data in your Next.js application.

### [Client-side helpers](/docs/references/nextjs/overview#client-side-helpers)

Learn more about Next.js client-side helpers and how to use them.

### [Next.js SDK Reference](/docs/references/nextjs/overview)

Learn more about additional Next.js methods.

### [Clerk components](/docs/components/overview)

Learn more about Clerk's prebuilt components that make authentication and user management easy.

Feedback
--------

What did you think of this content?

It was helpfulIt was not helpfulI have feedback

[Edit this page on GitHub](https://github.com/clerk/clerk-docs/edit/main/docs/references/nextjs/custom-sign-up-page.mdx)

Last updated on Feb 12, 2025

Support

---


---
layout: doc
title: "GraphQL API"
order: 202
---

The graph API is one of the core components of the skyhop platform. Via this API it's possible to invoke all functionality which we have implemented in the web application ourselves.

If you are not yet familiar with GraphQL, please consider checking out the documentation over at [https://graphql.org](https://graphql.org).

## API Access

The Skyhop GraphQL API allows access to flight information not otherwise available. Some information is publicly accessible, while other information is limited to Skyhop subscribers. Publicly available information, such as departure and arrival information on flights, is freely available and does not require an API key. Information like flight paths, and other personal information is only accessible with an API Key and/or an authenticated user.

3rd party applications can get access to the data related to a specific profile by letting them log in via the Skyhop OAuth server. Skyhop subscribers have to specifically grant access for you to gain access to their data.

## API Stability

Given Skyhop is still an early stage product which is in continuous development we cannot make hard guarantuees about the stability of it's API surface. This practically means we may be able to update any API at any given time. Rest assured that we are our biggest customer, and we would have the hardest time of all changing all API implementations. If you want to be notified when we're breaking part of the API surface up, send us an mail at [support@skyhop.org](mailto:support@skyhop.org) and we'll let you know in advance.

> Once Skyhop starts to gain traction we'll try to support any API version at least 6 months into the future, which will give you some leeway when breaking changes happen.

## Getting access
Currently there is no self-service way of registering an API client. If you wish to create an implementation send an email to [support@skyhop.org](mailto:support@skyhop.org) describing your use case, tech stack, and data you wish to have access to and we'll help you set up your integration. For testing purposes you can use the method described below to get short lived access tokens.

## Getting authenticated
In order to be able to use the graph API you will need to retrieve an authentication token. This token tells the API who your are (or who you represent), and retrieves to correct data for you. You can get an authorization token in one of several ways:

1. Grab one from the developer tools in the Skyhop application. You can open a hidden modal by typing the so called 'konami code' ( ↑ ↑ ↓ ↓ ← → ← → B A ). Please note these access tokens are only short lived, and you might need to retrieve a new one every hour. This function, however, is accessible to both free and paid subscribers.

2. Register your application for an access token on your behalf. These long-lived access tokens grant your application continuous access to the graph API. Please note that this is only available on paid subscription plans.

3. Register your application for an appropriate OAuth authorization flow. This way users are redirected to Skyhop where they grant your application access to their data. This is available by default on group or airfield subscriptions. If you're not on one of those subscription plans, please contact skyhop support for more options.

<img alt="The debug screen for developers with the ability to copy access tokens." src="/assets/images/developer-debug-screen.png" class="border-8 rounded-lg bg-gray-200"/>
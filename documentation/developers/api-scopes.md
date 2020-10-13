---
layout: doc
title: "API Scopes"
order: 203
---

The API is being secured through an OAuth server. In order to access data it's required to authorize yourself or your application through this server. This server will hand out (JWT) access tokens indicating you are in fact authorized to access a certain resource.

There are several steps with which we determine whether the 3rd party accessing the API is authorized to do so. One of the first steps is in checking whether the scope is correctly. The scope determines to which section(s) of the API the token grants access to.

When working with the GraphQL API, information about the scopes required to access a certain endpoint is available in the description fields on the node or endpoint.

Note that for certain scopes it is required to collect user consent. This will mean that either client credentials have to be used, or that the user will be redirected to a consent screen after login.

We have divides scopes into two different flavours: scopes defining reach, and scopes defining access. These two can be combined to get the amount of access you require for your application. Requesting a scope representing a certain reach will automatically grant you access to read the related data. If you need more access to the related resource you can request an additional access scope. Reach is mainly defined in the following three terms:

- Public: get access to public data
- Personal: get access to private data
- Group: get access to data from a group you are part of. Data may be private or public.

For example: if you want to mutate your own logbook via the API you will need to request the personal:flights scope combined with the flights:mutate scope.

Please note that even though the names of API scopes are familiar to the names of access rights, their functionality should not be confused. In that regard scopes define what features an application may have access to, and access rights determine what data an user has access to. If scopes are provided without sufficient access rights, no data will be returned upon running queries targeting said resource.

## Available scopes
The following scopes can be requested, as grouped by the affected resource (data model).

### Aircraft information

Scope name | Scope description | User consent required
-----------|-------------------|-----------------------
`public:aircraft`   |  | ❌
`personal:aircraft` |  | ❌
`group:aircraft`    |  | ❌
`aircraft:mutate`   |  | ❌

### Airfield information 
Because airfield information is automatically being imported there is no general functionality to change this information. An exception is available for accounts representing groups or airfields who can mutate information on their own airfield.

Scope name | Scope description | User consent required
-----------|-------------------|-----------------------
`public:airfields` | Access airfield information through the API | ❌
`airfields:mutate` | Mutate airfield information. | ❌

### Flight information

Scope name | Scope description | User consent required
-----------|-------------------|-----------------------
`public:flights` | Access to public flight information. This information is usually immutable, even with the mutate scope requested. | ❌
`personal:flights` | Access personal flight information such as the logbook. | ✔
`group:flights` | Access flight information related to a group. May include both public and private information. | ✔
`flights:mutate` | Allows for changing flight data. This includes both registering flight information, and updating flight information. | ✔

### Group information
A group may represent entities like flight schools or aeroclubs. Groups can be used to manage assets, users and flight information on a higher level than otherwise possible using user profiles.

Scope name | Scope description | User consent required
-----------|-------------------|-----------------------
`public:groups` | Get information about public groups. | ❌
`private:groups` | Get information from private groups of which you are a member. | ❌
`groups:mutate` | Change information related to your groups. | ✔

### Profile information
Profile information contains information about other people who are using SkyHop. Access to profile information is required when you want to know who has been the pilot of a certain flight.

Besides that there is a significant difference between requesting a scope to access other people's profiles, and accessing your own profile. For all profiles you can retrieve some generic information like names and so on. In addition for your own profile you can access and modify information about your preferences and other closely related information such as connected (Telegram) accounts.

Scope name | Scope description | User consent required
-----------|-------------------|-----------------------
`public:profiles` | Access information on public profiles. | ❌
`personal:profile` | Grants access to an user's personal profile. This includes preferences for use within apps. | ✔
`group:profiles` | Access profiles of people enrolled in the same groups as you. | ✔
`profile:mutate` | Grants access to change details on the user's personal profile. | ✔
`profiles:mutate` | Change information from other people's profiles. Only available to group managed profiles. | ✔

### Weather information
We also offer access to some basic weather information. Weather information is publicly accessible and cannot be modified.

Scope name | Scope description | User consent required
-----------|-------------------|-----------------------
`all:weather` | Access weather information such as METAR reports. | ❌
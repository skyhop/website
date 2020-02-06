---
order: 4
---

# Graph API: Design Guidelines and Principles

Almost everything we build at SkyHop makes use of the Graph API to get things done. This ranges from the creation of new users to the retrieval of flight information. Because this component is so important to our infrastructure we've invested a significant amount of time to make this API as easily accessible as possible. This document describes the guidelines we have used to design our GraphQL API. Even though it is primarily intended for the developers working on the SkyHop platform, it might also benefit you as it enables you to understand the conventions by which this API has been built.

We invite everyone to challenge our design decisions so that we can build a better product together.

## Relevant resources
If you're working on a client application which makes use of this API, you might be interested in the following URI's:

- [https://graphql.org](https://graphql.org): Documentation on the Graph Query Language (GraphQL). It's strongly recommended to familiarize yourself with the basic GraphQL concepts before implementing this API.
- [https://api.skyhop.org/graph](https://api.skyhop.org/graph): This is the API endpoint itself. You will execute all GraphQL queries on this endpoint.
- [https://login.skyhop.org](https://login.skyhop.org): This is the place where our OAuth server lives. You will need to authenticate via this service in order to gain access to the API resources.

All endpoints on the API will require authorization in order to gain access. Based on your subscription level you may or may not get access to certain functionality within the API. If you haven't yet, sign-up for an account with SkyHop so that you can use your personal access token for testing. You will need a paid subscription to retrieve a long lived access token for application deployment.

## General guidelines
The general guidelines have been applied through the whole API, and are therefore relevant to queries, mutations and subscriptions alike.

### Naming
All queries, mutations and subscriptions are named using the `camelCase` convention. No exceptions really.

Naming different types within the API goes a bit different. Though types mostly represent a data resource such as a flight or a profile, most resources will have two different kinds of types. The distinction here is between graph types, which one can use to query through the data model, and input types, which one can use to mutate data.

Think of it as two different data models for input (into the graph) and output (from the graph). Graph types will have the name of the resource, such as `Flight` or `Profile`, whereas input types will have `Input` appended to the resource name, resulting in the `FlightInput` type or the `ProfileInput` type.

### Identifiers (cursors)
In order to uniquely identify a resource we use something often called a cursor. This cursor can really be anything which fits in a string, although it will usually be a base-64 encoded GUID.

The reason for using cursors is that it brings us an API wide method which enables us to consistently work with objects, regardless of what identifier the object uses in the underlying data structure. In practice the data contained by these base-64 cursors will mostly consist of integers, guids and strings, but should not influence the way you work with them.

Even though most objects will have cursors, there are some objects which do not have one. Objects missing a cursor are usually the result of abstractions, are not queryable through the root query object, and are only accessible through closely related data. Examples of such objects in our API are the `flight.departure` and `flight.arrival` objects.

### Relationships and related objects
Even though GraphQL is built to represent relations between objects, there are cases where we either can not or do not want to show certain data. In these cases we will return a null object as response for the relationship.

### Arrays
In case a list (paginated or not) does not contain items we will return an empty array. Arrays will never return a null result, in favor of an empty array.

### Pagination
The way we do pagination is based on the GraphQL Relay specification in which cursor based pagination has been described. Using cursor based pagination allows us to solve some inconvenience which comes with realtime data, and gives us the most flexibility in implementing client-side solutions. A connection object is defined as:

```gql
connection {
  totalCount
  edges {
    cursor
    node {  ...  }
  }
  pageInfo {
    # add fields on the pageinfo
  }
}
```

This base structure enables us to send the pagination results along with some pagination metadata.

A connection object by default has 2 or 4 parameters which can be used to retrieve a single slice of data, based on whether the connection can be queried unidirectional or bi-directional. These two or four arguments are:

- `after`: Accepts a cursor and describes that entities after this one should be retrieved.
- `first`: The number of items to retrieve after the given cursor.
before: Accepts a cursor and describes that entities before this one should be retrieved.
- `last`: The number of items to retrieve starting from the back (or before a given cursor).

These four arguments can be freely used together to retrieve the data as is convenient for the situation.

For more information on the use cursor based pagination, check out [https://corstianboerman.com/2019-03-08/implementing-pagination-with-graphql-net-and-relay.html#cursor-pagination](https://corstianboerman.com/2019-03-08/implementing-pagination-with-graphql-net-and-relay.html#cursor-pagination).

### Ordering
For most lists we offer ways to order the result set. Lists which have this option will have an argument called order which accepts an array with enum values. These enum values differ between endpoints but usually have the format of [fieldName] and [fieldName]Desc. The result set will be ordered based on the sequence of the enum values in the array. If duplicate values are found the result set will be sorted based on a default method, but should be considered indeterministic.

### Authorization
The whole API is secured through the use of JWT bearer tokens. Before any request is made you should authorize yourself through the OAuth server.

If a request is made without authorization, you will receive an exception indicating so.

### Error handling
We try to communicate as clearly as possible about what we like and what we don't like. In case something goes wrong, or we have different intentions than the user, we will throw an exception with an description of the error. If no exception is thrown the request was successful.

### Rate limiting
The graph API is rate limited as safety measure to prevent (un)intentional denial of service attacks. Rate limits are applied to the whole API, but are dynamic in nature and may vary between endpoints and users. In case you need an increased rate limit for your application, please contact support and we'll be happy to loosen it up a little, or help you find an alternative way to achieve what you want.

## Queries
### Data-loader usage
In order to benefit the API's performance we'll use the data-loader wherever applicable. Even though this is something which is and should be abstracted away from the end-user it is something which is really important to consider when designing new API endpoints.

## Mutations
Mutations are the operations which change data, or start to execute a certain action. Even though queries and mutations look the same superficially, they are different by convention and execution order.

### Naming
Within the mutations we'll have a separation between two types of mutations. The first one being ***object mutations*** and the second being ***RPC (Remote Procedure Call) mutations***. The distinction between these two is that the first one is meant to directly apply to the data model behind the API, such as managing profiles, or modifying flight information, while the other one is meant to trigger a certain action, such as sending an email, or triggering a data export job.

The naming convention to tell these two apart is as follows. Object mutations are called just `mutate` while the RPC like mutations use the simple present tense to name it's action, like `sendMail`.

All mutations are grouped based on the object type they are most relevant to. Most of the time this is the object type they return. When running a mutation, the query will resemble something as follows:

```gql
mutation ($profile: Profile!) {
  profiles {
    mutate (profile: $profile) {
      cursor
      # further fields omitted
    }
  }
}
```

### Object mutations
In order to promote code reusability we combined the create and update operations in a single endpoint. Rule of thumb is that if an cursor is omitted, the operation represents a create action. Opposite, when an cursor is defined we're either doing an update operation, or in case the identifier does not exist in the datastore, an insert. The idea behind this is that we don't care about whether an object is created or updated, as long as the containing data is stored, and can be retrieved again.

As a side effect we support the use case in which object identifiers are generated on the client side, and later synchronized with the API. This facilitates in scenarios where temporarily no internet connection is available.

One thing to note is that object mutations may have side effects. One example is when creating a new profile, after which an invitation message will be sent to this person's email address.

We're trying our best to be as flexible as possible when it comes to data operations, and therefore all fields which are not necessarily required for the application to function will be nullable.

Because deleting a resource is a destructive operation which we want you to be executing only when you intend to do so we have put this in a separate mutation. The naming convention for delete mutations is `delete[ObjectName]`. A delete operation only requires the cursor of the resource to be deleted to be provided as a parameter, therefore a delete operation can be executed as follows:

```gql
mutation ($cursor: String!) {
  deleteProfile(cursor: $cursor)
}
```

### Remote Procedure Calls
All mutations which involve anything else than directly mutating data objects are designed as being a remote procedure call. Just like object mutations, an RPC call may or may not have side effects based on the intended action, and one should be careful about continuously triggering one mutation.

## Subscriptions
Subscriptions will provide you with live data on anything which regularly changes, i.e. data which is (mostly) automatically being collected. An example of this are the subscription endpoints on flight information and aircraft positions. While the aircraft positions cannot be manually entered, flight information can, and will also be broadcasted to keep connected clients in sync.

Data models which do not need to be monitored in realtime do not have subscription endpoints.

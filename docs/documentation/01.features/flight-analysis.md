---
order: 2
---

# Flight Analysis

One of the core functionalities of skyhop is it's ability to analyze flight information. This information can be used to improve your flying skill, compare with your peers, and to automatically maintain your logbook.

## Available information
Skyhop tries to automatically analyze flight information whenever possible. Via this approach we retrieve the following data:

- Departure time
- Departure airfield/runway
- Launch method (winch, tow or motor)
- Arrival time
- Arrival airfield/runway
- Aircraft identifier (FLARM or ADS-B ID)
- Registration
- Callsign
- Type
- Total flight time

Whenever sufficient en-route data is available we also might be able to calculate some statistics including:

- Number of thermals
- Climb rate per thermal
- Cruise performance
- Average glide-ratio

## Using this information in a 3rd party application
Subscribers can use this information within a 3rd party application. For more information on how to do this, check out [the GraphQL docs](/documentation/02.developers/graphql-api.html).
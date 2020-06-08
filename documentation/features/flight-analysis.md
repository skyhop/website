---
layout: doc
title: "Flight Analysis"
order: 102
---

<p class="font-thin text-lg">To help you analyze your flight performance we have built several tools which may help you with that. Flight analysis is available for every automatically registered flight, or manually registered flights for which you have uploaded a flight track.</p>

<img class="relative mx-auto rounded-lg shadow-lg my-10" src="/assets/images/Screenshot 2020-04-28 at 19.47.31.png" alt="three dimensional (3D) map showing the flight path in a glider with some general flight information such as departure and arrival times as well as airfield information in the left" />

## Available information
For automatically collected flight information we usually have the following information available:

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

The minimum set of information we need to collect a flight is an aircraft registration, and it's departure and arrival information. If any of those are missing we will ask you to complete it before you can add the flight to your logbook.


## Flight path analysis

In order to show as much relevant information as possible we are calculating some statistics for you. These statistics are based on the following information:

- Altitude [feet]
- Climbrate [feet/minute]
- Speed [kt]
- Turnrate [turns/minute]

> If this information is not available in the flight track, we will try to derive this information from the given flight path. For this to work correctly we are dependend on the position information (latitude, longitude and altitude) coupled with a timestamp.

Depending on whether sufficient flight information is available we are calculating some other in-flight statistics such as:

- Number of thermals
- Climb rate per thermal
- Cruise performance
- Average glide-ratio

If the information we have is not sufficient enough to calculate these statistics, you can always upload your flight track later on.

<img class="relative mx-auto rounded-lg shadow-lg ml-12 float-right" width="300" src="/assets/images/Screenshot 2020-04-28 at 21.00.34.png" alt="Statistics about ones flight performance in a glider aircraft showing a chart with altitude information and statistics about cruise and thermal performance" />

## Estimations

To paint an even clearer picture of what's happening during the flight we are estimating the following parameters for you, in alphabetical order:

- Bank angle [°]
- Horizontal acceleration [m/s²]
- Kinetic energy [joule/kg]
- Lift [Newton/kg]
- Lift coefficient [/m²]
- Load factor
- Turn radius [m]
- Vertical acceleration [m/s²]

These values are estimates, and should be treated as such. Therefore, there may be deviations with properly measured data. Regardless of this these values prove a valuable tool for debriefing purposes as they give additional dimensions to flight information.


### Calculating absolute values from these estimations

The estimations we're calculating are normalized to the information we have at hand. Given we don't know about the mass of the aircraft, or its wingspan, we are reflecting this lack of information in the units of our estimations. When you know this information however, it's quite trivial to use the estimation to calculate absolute values.


**Kinetic energy:** The amount of kinetic energy is normalized for the mass of the aircraft. To get the absolute amount of kinetic energy in the aircraft, you can multiply this value by the mass of the aircraft in order to get the total amount of kinetic energy in joules.


**Lift:** The estimated amount of lift has been normalized for the amount of mass. Multiplying the estimation with the mass of the aircraft will result in the total amount of lift in amount of Newtons.


**Lift coefficient:** The lift coefficient is an estimation which is highly dependent on the total wing area of the aircraft. Multiplying this value with the wing area will give you the absolute lift coefficient. Given the lift coefficient has no dimension, this will result in an unitless value.

---
## Integration into other applications

All information available within Skyhop is available for implementation in 3rd party applications. For more information on how to do this, visit [the GraphQL docs](/documentation/developers/graphql-api.html). Skyhop offers consulting services to help you with integration.

---
title: "Maintaining flight records, tailored for gliding clubs"
layout: blog
author: corstian
---

<p class="font-thin text-lg">This post describes some ideas about the administrative workflows used to maintain flight records. This post is specifically written with gliding clubs in mind. Though these ideas are potentially (partly) applicable to the broader aviation community, this post has been based on the following conditions;

  <ul>
    <li>Aircraft are shared among a dynamic group of pilots. Time slots are not planned beforehand, but rather discussed on the fly.</li>
    <li>Flight administration happens manually on the airfield. There is usually someone dedicated to keeping track of the flight administration.</li>
  </ul>
</p>


## Background
In order to simplify the administrative task of keeping flight records, Skyhop has become a platform which automatically keeps track of flights and uses this information in ways to simplify and minimize the human effort required. At the time of writing, for each flight we're collecting the following information:

1. Aircraft Information
2. Departure Time
3. Departure Airfield & Runway
4. Arrival Time
5. Arrival Airfield & Runway
6. (Partial) Flight Path

There is an effort to also collect the following information:

- Launch methods (if applicable)
- Occupants

Automatic collection of flight information is the cornerstone on which the workflows described in this document are made possible.

### Data collection

Skyhop aggregates information from different sources in order to provide these services. A primary source is the Open Glider Network (OGN) which shares the position information of aircraft using the FLARM collision avoidance system.

![](/assets/images/Skyhop_automatic_flight_registration.png)

In order to automatically determine the occupants of a flight, Skyhop is working on an app which can autonomously determine the occupants for a flight. The gist of this app is that it is able to associate the position of the phone with specific flights, and automatically add the flight to the signed on profile. This process removes the requirement to manually keep track of the occupants of a flight.


### Data collection modes

There is a distinction between automatic flight registration and assisted flight registration. No human input is required with automatic flight registration, but requires using the Skyhop app. Assisted flight registration requires a minimal amount of human input, and tries to simplify the process of log keeping as much as possible.

In order to tackle any possible concern with regard to privacy, increased battery pressure, or not having a supported smartphone, the use of the mobile app is fully optional. As such assisted flight registration is our default and tries to simplify the record keeping process as much as possible. Usually the only data which needs to be entered manually is about the occupants, as is the launch method.

The Skyhop web app is used on the launch point to keep track of the ongoing flight activity. This app will display all available data, which includes automatic matches between occupants and flights. Any missing data can be completed within this app.

> Of course aircraft without FLARM or transponder are the exception, as those flights need to be entered manually, and sadly there's nothing we can do about that, yet.

The following table outlines what information is collected with which method;

| *Information* | *No FLARM / Transponder* | *Assisted Registration* | *Automatic Registration* |
|-|-|-|-|
| Aircraft | ❌ | ✅ | ✅ |
| Departure Time | ❌ | ✅ | ✅ |
| Departure Airfield | ❌ | ✅ | ✅ |
| Launch Method | ❌ | ✅ | ✅ |
| Arrival Time | ❌ | ✅ | ✅ |
| Arrival Airfield | ❌ | ✅ | ✅ |
| Occupancy | ❌ | ❌ | ✅ |
| Currency | ❌ | ✅ | ✅ |
| Training Exercises | ❌ | ❌ | ❌ |

## Workflows
This section describes the practical implications of using Skyhop on the launch platform.

### During a typical launch

Skyhop is designed in a way that a single person should be able to both coordinate ongoing launch activities, as well as maintaining flight records. Typically the only information required to enter would be the name(s) of the people flying the glider, as would be their roles.

> As a convention the first person entered gets assigned the role of Pilot in Command. When the second occupant is an instructor, this person automatically gets assigned as pilot in command, with the time being logged for the first one as being "DUAL". If the second occupant isn't an instructor, their role will be assigned as being a passenger. This is just an automatic suggestion, and can always be changed manually.

Entering information about the occupants, as well as their roles can be done before departure, or afterwards. If entered before departure, the flight info will automatically be appended once registered. Otherwise, if entered after departure, this information can be appended to the flight information which is already available.

### Aircraft without FLARM or transponder

Flights of aircraft not tracked by FLARM or ADS-B need to be entered manually. Special consideration needs to be given that flight information for these aircraft need to be entered manually, especially when most other aircraft are tracked automatically.

### Weak link failure

When a weak link failure occurs and it needs to be recovered, there's the option to plot the estimated impact points of the weak link on a map, based on the flight path, the weather situation and properties of the weak link. This map can be shared with others whom can go out and recover the failed weak link in a fraction of the time it'd otherwise take.

### Registering training exercises

> **Heads up:**
> At the time of writing, keeping track of training exercises is highly experimental and subject to changes until the DTO module is fully fleshed out.

Exercise performance cannot be tracked from the flight overview. Instead, people can modify their flights and add the training exercises they performed from their own account.

#### DTO Administration

In the feature we intend to fully integrate the administrative requirements for a DTO within the mobile app. As such, occupants are actively encouraged to keep track of the exercises they perform. Additionally, we'll offer a feature with which instructors can review flight performance and training status for all students.

## Current limitations

There are some limitations which come with the use of Skyhop which we are unable to simplify. These are;

- The requirement of internet access on the launch point. Skyhop needs a realtime connection to be able to pull in up to date flight data. Although it is possible to create a fully local solution, the cost of this *(I'd happily build this under a consulting contract)* doesn't weigh up against the cost of a mobile data bundle.
- Aircraft without FLARM or transponder are not tracked, and those flights need to be entered manually.

## Call for feedback

Even though the aim is to develop a system which can be implemented for most flight clubs, there are inherent differences between different types of aviation. If there are specific features which would be incredibly helpful to you, send me an email ([corstian@skyhop.org](mailto:corstian@skyhop.org)) so we can do a little brainstorm session.
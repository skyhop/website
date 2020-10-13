---
title: "Exercise tracking, automatic flight logging and more awesomeness"
author: corstian
layout: blog
---

Over the last weeks I have been busy improving upon existing functionality, finishing a few new features and laying the foundations for future awesomeness!

The highlight for sure is the new feature with which you can now keep track of your exercises. The current version is a proof of concept to see how this works, and is configured to show the exercises as defined in the Flight Crew Licensing requirements for a LAPL(S). Being able to keep track of executed exercises is the first step towards a digital administrative system compliant with the requirements for a EASA DTO (Declared Training Organization).


## Changes
The following changes have been released;

- The interface to add a new flight has been altered.
- It is now possible to add your own aircraft based on its FLARM registration
- Loading indicators have been added, indicating more clearly what the application is doing.
- FANET devices are now also supported as data source
- Exercises can now be tracked within Skyhop


## Exercises

From now on you can track the exercises you have done. This can be done along with other information you wish to store about a flight. For each exercise it is possible to give one of the following ratings:

1. Unsatisfactory
2. Satisfactory
3. Good
4. Very good
5. Exemplary

Additionally it is possible to add a comment detailing flight performance for each exercise, creating a clear overview of your current status. This overview is available nearby the logbook in a tab called "Flight Training".

<video class="w-full shadow-lg rounded-lg my-10 max-w-sm mx-auto" autoplay loop>
  <source src="/assets/images/Screen Recording 2020-07-12 at 16.09.33.mov">
</video>

Over the upcoming period we'll evaluate the effectiveness of this new feature. Once proven effective, I'll iterate over exercise tracking once again with the goal of making it suitable for deployment at scale, such as with flight schools. The primary goal herein would be to offer a clear overview of the training progression for all students.

<img class="relative mx-auto rounded-lg shadow-lg" src="/assets/images/Annotation 2020-07-14 175904.jpg" alt="Progression of flight training as shown in Skyhop" />


## Upcoming feature; fully automatic flight logging

Besides the finished and improved features described above, I have been busy exploring the viability of an important upcoming feature; **fully automatic flight logging**. This feature is going to be a gamechanger for pilots who fly an awful lot.

The general idea behind this feature is that your position will be matched with your aircraft's position information. Once there is a spatiotemporal match (meaning you are in the same place at the same time as the aircraft) we'll automatically add the flight to your logbook.

### Idea validation
In order to validate this idea with fellow glider pilots I will deliver a Telegram chatbot which will let you know about your flight times, and if you have an Skyhop account, it will add it to your logbook.

Why an chatbot, how does that work? Telegram is an amazingly easy to use platform to communicate with end users whereas an user and a bot can send information to each other. One of the possibilities within Telegram is live location sharing, which we'll use for this experiment. By sharing your location with the Skyhop bot on Telegram we'll be able to match your position with the aircraft you're flying.

A rough estimation *(if you personally know me, you probably also know how terrible I am at estimations)* is that I will be able to ship this in about two weeks. I'm already looking forward to receiving feedback to this feature, and will keep you updated on this progress!




*- Corstian*


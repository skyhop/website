---
title: "Launching Skyhop!"
layout: blog
author: corstian
description: "Skyhop has been released! The first MVP for Skyhop is now available for you to use. More information in this post ->"
image: "/assets/images/2020-05-21 10.49.57.jpg"
image-description: "That's me, Corstian, toasting to the first MVP of Skyhop"
---

Back in 2016 when I started working on some aviation related software tools I could not imagine I'd be able to ship a product like this one day, but here we are. I'm happy to announce the public availability of what I would call the MVP (Minimum Viable Product) version of Skyhop! More details in this blog post;


But first, let me share a bit of my story; my name is Corstian, and I started flying gliders back in 2015. The funny thing is that when I started flying, my little brother was like "hey cool, I'm going to join you", and we've been flying together since then. Often, when we're on our way back home after a day on the airfield we'd share our flights and talk crap about each others performance. This has been a major contribution to my inspiration for building Skyhop.

<img class="relative mx-auto rounded-lg shadow-lg my-10" src="/assets/images/2020-05-21 10.49.57.jpg" alt="Toasting to the release of the Skyhop minimum viable product" />
<small>That's me, toasting to a finished MVP 🥳</small>


## The problems I have been solving
Over the last three years I've been trying to solve several different problems, which have laid the foundation for what Skyhop has become now, and which will define the future developments.


### 1. Difficulty accessing flight logs
Most humans are lazy, or at least I am. As a result I prefer to wriggle myself out of any recurring task I would potentially have to do. In this case that's the collection of flight information for debriefing purposes.

In order to extract data from a flight recorder you'd have to use a micro SD card, which if it is around, will be full, and if it's not full it'll be broken. Sometimes it even happens the flight recorder does not want to transfer your flight, for some reason. Don't even get me started on properly organizing flight logs on your computer, and searching through them.

For me that's just too much effort for the reward of an IGC file. Though I may have invested more time tackling this problem than I'd ever realistically spend time extracting flight information, I think it's nice to have easy access to flight logs.


### 2. Accurately maintaining flight logs

Every now and then there's a situation where we're unable to maintain (accurate) flight logs at our gliding club, mostly due to equipment failures or connection issues, but sometimes also due to operator error. Nonetheless the result is always the same;

- Pilots are wondering what they have to pen into the logbooks
- Maintenance is frustrated that the aircraft's logs are incorrect
- The board is frustrated because they have to report flight statistics to the relevant government agencies

This has been the primary reason why I started working on a solution to automatically collect flight metadata.


### 3. Getting a better understanding of my flight performance

Although there are some amazing analysis tools out there which help you gain helpful insights into your flight performance, all of these tools relied on flight information you would have to supply. For the issues I have with this, please head back to the previous paragraph.

As a result I decided to build my own, based on data I could automatically collect. Although there were (and still are) some data quality issues to overcome, there's still an incredible amount of information which can be extracted if you know what to look for. Thankfully planes are subject to the laws of physics, and therefore it's possible to calculate estimations of certain forces on the aircraft. This -I think- is the most valuable and insightful feature of the current flight analysis functionality.


## Why an MVP?

The previous three problems have been a major inspiration to what Skyhop is today, and I have tried solving these all as elegantly as possible. Though I have succeeded in solving these problems for now, there are still many topics I would love to explore in the nearby future. In fact I see this version of Skyhop as the starting point for many more exciting developments in the future. Topics I would love to explore include;

- Pairing flight logs with a student administration system
- The development of a maintenance log, also paired with flight logs
- Fully automatic flight registration (literally effortless log maintenance)

I would love to hear from you what you expect to gain from using Skyhop. Only with your input I can properly prioritize future developments. Feel free to send me an email for a casual chat via [corstian@skyhop.org](mailto:corstian@skyhop.org).


## Getting started

Just hit the big blue "log in" button in the upper right corner to get started, or navigate to [app.skyhop.org](https://app.skyhop.org) and log in with your Google or Microsoft account. Alternatively, create a new account using your email address, and you're ready to go!

> One thing to keep in mind is that the flight analysis features I've hinted about are only available after you have added a flight to your logbook. This is meant as a basic privacy control to prevent anyone from snooping through your flight tracks.


## Closing remarks

Now that I have gotten this out of the way I hope to get some free time to invest in finally getting my pilots license. Although I have been flying since 2015, I have never really progressed past solo status, and I think it's about time now. Given I resigned from my job last year in order to finish Skyhop, I have plenty of time left to build new features. It's my wish to be able to continue my full-time dedication to Skyhop, but that's only possible with your support! If you're curious about the direction of this project, please consider buying a subscription as that'll help me extend my financial runway for a while!


Thanks again,  
Corstian
---
title: "Visualising METAR and TAF reports"
author: corstian
layout: blog
---

<img class="relative mx-auto rounded-lg shadow-lg my-10" src="/assets/images/Screenshot 2020-06-05 at 12.17.08.png" alt="The weather center visualising the latest METAR and TAF reports within Skyhop." />

<p class="font-thin text-lg">Recently I've been working on making weather information a little bit more accessible. Although there always has been a little weather widget on the dasboard, it's now possible to get more relevant information including the Terminal Aerodrome Forecast (TAF), if it's available. Starting today you'll be able to use the new addition to Skyhop with which you can easily check out the current weather situation nearby.</p>


In the past I have gotten the feedback that it would be a convenient feature to have an all in one briefing dashboard which includes all relevant information, such as the weather situation, forecast as well as NOTAMs. Although we're not there yet, this weather dashboard definitely is a step into the right direction. It just happened that we've got some weather information laying around already for other purposes such as [the localization of broken weak links](/documentation/features/weak-link-recovery), and from there on it was a fairly easy step to make this information available in a dashboard. The information on which this dashboard is based is all pulled from the latest METAR and TAF reports which are available seconds after they have been published.

You can configure your default station for which METAR and TAF reports are retrieved from the settings, which are accessible via the profile. You have the choice to either locate the closest METAR station, or to select a fixed METAR station based on its ICAO designator. If, for whatever reason, your location cannot be located, your configured static station will be used instead.

Stay tuned for more in the future!



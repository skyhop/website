---
title: "Introducing live flight following"
author: corstian
layout: blog
---

<p class="font-thin text-lg">I have been on a streak lately as I'm cranking out new features at a speed I've never been able to before. The latest addition to Skyhop involves live flight following, but it's a bit different than you're used to.</p>

Most of you will be familiar with flight following with tools like <a href="https://live.glidernet.org" rel="nofollow">live.glidernet.org</a>. The new addition on Skyhop is nothing like that. Let me walk you through it, but first more about the reasons it turned out like this;


## Inspiration

Although map based tracking tools are nice, I feel they have a few major shortcomings;

- It may be slow via a mobile connection
- Difficult to get an overview on a small screen
- It's rough on your phone's battery
- Lack of details unless you interact with the map

Based on the pain points above I came up with a different solution, where I determine the position of an aircraft, and just write down what would otherwise be part of ATC communication, namely;

- Who (registration/callsign)
- What (Aircraft type)
- Where (Actual position)

There isn't really another way to create a textual representation of an aircrafts whereabouts as coordinates are inherently difficult for humans to understand. As a result I decided to use the names of relatively big places (starting from +-4000 inhabitants) as reference points to communicate the position of an aircraft.

<img class="relative mx-auto rounded-lg shadow-lg my-10" src="/assets/images/Screenshot 2020-06-06 at 12.06.41.png" alt="A realtime, textual overview of aircraft positions, derived from relatively big places (with more than 4000 inhabitants)" />

Though this is working quite well in most places, when flying through the alps we're mostly referring to our position relative to well known peaks. Though currently not possible, I will add the names of peaks as reference points in a future update. Probably once I get to fly through the alps again.

> Originally I started playing with this idea when I was on winch duty, trying to keep track of my brother doing a cross country. Ofcourse with a spotty internet connection. It's back then that I figured a list containing the positions of all aircraft would be much more easier to use, especially for someone familiar with the environment.


## Baby steps towards a virtual flight computer

One of my goals is to build a virtual flight computer which can be used to assist someone from the ground. Althought we're not there yet, this feature opens up the way to introduce more extensive tools to assist with remote instructions, for example with cross country training.

The most difficult step of bringing realtime data to the browser has already been taken. From here on I will try to spend some focus to design a dashboard showing realtime flight information for a specific aircraft, and build some algorithms to calculate important metrics in real time such as glide ratio, and more goodness like that.

Stay tuned for more!


\- Corstian
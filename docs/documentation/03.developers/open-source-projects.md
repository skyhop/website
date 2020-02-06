---
order: 2
---

# Open Source Projects

We recognize that all great software built nowadays is built upon the shoulders of giants. Because we rely on tons of open-software projects we believe it's no more than reasonable to empower other people with great ideas by releasing some of the projects which we have specifically built for SkyHop.

While some of these projects themselves are heavily inspired on other open-source projects, some of these projects are novel implementations specifically developed for use with SkyHop.

This page lists the projects we have available.

## Flight Analysis
One of the most important parts of our infrastructure is this project. It is responsible for processing flight data points in a way which results in some useful metadata such as departure and arrival information.
Check it out here: [https://github.com/skyhop/FlightAnalysis](https://github.com/skyhop/FlightAnalysis)

## XCServer
This project is an Docker adaption based on the XCSoar python bindings. It contains a simple web server and enables you to upload an IGC file in order to get a JSON file in return. This JSON file contains flight information such as glide ratios, thermal activity, and some speed/altitude averages in return.
Check it out here: [https://github.com/skyhop/XCServer](https://github.com/skyhop/XCServer)

## APRS Server
As we heavily rely on external data to be able to analyze flight performance, it's important to have a reliable APRS parser, as well as a server client. We use this project ourselves to retrieve our data from Open Glider Net, or OGN in short.
Check it out here: [https://github.com/skyhop/Aprs](https://github.com/skyhop/Aprs), or pull the Docker container from https://hub.docker.com/r/corstian/xcserver!

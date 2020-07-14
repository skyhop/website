---
title: "Implementing the FAI triangle"
author: corstian
layout: blog
---

<p class="font-thin text-lg">In contrast with the other posts over here this is one which dives into the technical details about a specific feature I've been building. In the past I would have posted such content over at my [personal blog](https://corstianboerman.com), but since I launched Skyhop I'm moving all content slightly related to aviation over here. This time I'm covering the implementation and underlying calculus required to calculate the FAI triangle.</p>

> I am used to keep a tab open in which I write the things that I'm working on in order to keep myself on track. This post is also the result of that practice, and does not really cover Skyhop as a product, but more one of my technical explorations building Skyhop.

## Getting started
Personally I'm have no idea what I'm doing when it comes mathematics, so I'm sourcing for inspiration. One of the sources I'm using for this is [this repository (https://github.com/Turbo87/aeroscore-rs)](https://github.com/Turbo87/aeroscore-rs). It's an implementation written by Tobias Bieniek in Rust. Important about this implementation is that it uses an optimizer so that it will try to approximate an optimal solution.

## 
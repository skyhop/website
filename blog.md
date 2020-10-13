---
layout: blog-list
---

<!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
<div class="relative bg-gray-50 pt-10 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
    <div class="h-1/3 sm:h-2/3"></div>
  </div>
  <div class="relative max-w-7xl mx-auto">
    <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
      From the blog 🛫
    </h2>
    <div class="mt-12 grid gap-10 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
      {% for post in site.posts %}
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <!-- <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
        </div> -->
        <div class="flex-1 bg-white p-8 flex flex-col justify-between">
          <div class="flex-1">
            <!-- <p class="text-sm leading-5 font-medium text-indigo-600">
              <a href="#" class="hover:underline">
                Blog
              </a>
            </p> -->
            <a href="{{ post.url }}" class="block">
              <h3 class="mt-2 text-2xl leading-7 font-semibold text-gray-900">
                {{ post.title }}
              </h3>
              <div class="mt-6 text-base leading-6 text-gray-500 prose">
                {{ post.excerpt }}
              </div>
            </a>
          </div>
          <div class="mt-12 flex items-center -m-8 p-8 bg-magenta-50 shadow-inner">
            <div class="flex-shrink-0">
              <a href="{{site.authors[post.author].twitter}}">
                <img class="h-10 w-10 rounded-full" src="{{ site.authors[post.author].picture }}" alt="">
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm leading-5 font-medium text-gray-900">
                <a href="{{site.authors[post.author].twitter}}" class="hover:underline">
                  {{site.authors[post.author].name}}
                </a>
              </p>
              <div class="flex text-sm leading-5 text-gray-500">
                <time datetime="2020-03-16">
                  on the
                  {% assign day = post.date | date: "%-d"  %}
                  {% case day %}
                  {% when '1' or '21' or '31' %}{{ day }}st
                  {% when '2' or '22' %}{{ day }}nd
                  {% when '3' or '23' %}{{ day }}rd
                  {% else %}{{ day }}th
                  {% endcase %}
                  of {{post.date | date: "%B, %Y"}}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>

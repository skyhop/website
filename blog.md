---
layout: blog-list
---

<section class="text-gray-700 body-font overflow-hidden">
  <div class="container px-8 py-24 mx-auto">
    <div class="max-w-screen-lg">
      {% for post in site.posts %}
      <div class="flex flex-wrap md:flex-no-wrap bg-white mb-10 rounded-lg shadow-md">
        <!-- <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="tracking-widest font-medium title-font text-gray-900">{{ post.category }}</span>
          <span class="mt-1 text-gray-500 text-sm">{{ post.date }}</span>
        </div> -->
        <div class="md:flex-grow">
          <div class="flex bg-gray-100 py-10 rounded-t-lg">
            <img src="{{ site.authors[post.author].picture }}"
              class="rounded-full shadow-md w-12 h-12 -ml-6 border-2 mt-1 border-white" />
            <div class="block ml-10">
              <h2 class="text-2xl font-medium text-blue-900 title-font">{{ post.title }}</h2>
              <span class="text-gray-400 text-sm">
                <a href="{{site.authors[post.author].twitter}}" class="font-medium">{{site.authors[post.author].name}}</a> on the
                {% assign day = post.date | date: "%-d"  %}
                {% case day %}
                {% when '1' or '21' or '31' %}{{ day }}st
                {% when '2' or '22' %}{{ day }}nd
                {% when '3' or '23' %}{{ day }}rd
                {% else %}{{ day }}th
                {% endcase %}
                of {{post.date | date: "%B, %Y"}}
              </span>
            </div>
          </div>
          <div class="px-16 pb-10">
            <p class="leading-relaxed mt-10">{{ post.excerpt }}</p>
            <a class="text-indigo-500 inline-flex items-center mt-10" href="{{ post.url }}">Continue Reading
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {% endfor %}
      
    </div>
  </div>
</section>
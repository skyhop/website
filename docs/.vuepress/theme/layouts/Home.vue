<template>
  <div ref="container">
    <div>
      <PageHeader />

      <!-- <header class="py-4 pl-2 pr-4 bg-white flex shadow-lg">
        <div class="flex w-full">
          <a href="https://skyhop.org" class="mr-auto">
            <img class="h-12" src="https://skyhop.org/images/logo.svg" />
            <img class="h-10" src="https://login.skyhop.org/images/skyhop.svg" />
          </a>
          <a
            href="https://app.skyhop.org"
            class="text-white font-normal bg-blue-600 my-1 py-1 px-3 flex rounded shadow-md hover:shadow hover:bg-blue-500"
          >🔑&nbsp;sign in</a>
        </div>
      </header>-->

      <Hero />

      <!-- <HugOfDeath /> -->

      <section class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
        <!-- <div
          class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute"
          style="height: 80px; transform: translateZ(0px);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon class="text-gray-200 fill-current" points="2560 0 2560 100 0 100" />
          </svg>
        </div>-->
        <div class="flex my-32">
          <div class="w-full md:w-1/2 lg:w-1/4 float-left py-4 md:pr-4 lg:pr-4">
            <h2 class="text-xl font-light">make it easier</h2>
            <h3 class="font-medium text-2xl text-blue-600 mb-4">The digital logbook</h3>
            <p>No need to manually keep your logbook up-to-date again with our digital logbook which keeps itself up to date!</p>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 float-left py-4 md:pl-4 lg:px-4">
            <h2 class="text-xl font-light">get better</h2>
            <h3 class="font-medium text-2xl text-blue-600 mb-4">Flight analysis</h3>
            <p>Go above and beyond by comparing flight performance with your peers and learning from each other.</p>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 float-left py-4 md:pr-4 lg:px-4">
            <h2 class="text-xl font-light">stay safer</h2>
            <h3 class="font-medium text-2xl text-blue-600 mb-4">
              Flight following
              <span
                class="bg-yellow-200 text-yellow-600 rounded text-sm px-2 py-1"
              >beta</span>
            </h3>
            <p>By identifying risky behaviour before it becomes a problem you may save yourself one day.</p>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 float-left py-4 md:pl-4 lg:pl-4">
            <h2 class="text-xl font-light">for your convenience</h2>
            <h3 class="font-medium text-2xl text-blue-600 mb-4">
              Weak-link finder
              <span
                class="bg-green-200 text-green-600 rounded text-sm px-2 py-1"
              >new</span>
            </h3>
            <p>Make a well educated guess about the location of a broken weak-link and save yourselves hours of searching.</p>
          </div>
        </div>

        <OurJourney />

        <SellingPoints />

        <!-- 
        <div class="container mx-auto px-4 pb-32 pt-48">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div class="md:pr-12">
                <div
                  class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
                >
                  <i class="fas fa-file-alt text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">Transparency By Default</h3>
                <p
                  class="mt-4 text-lg leading-relaxed text-gray-600"
                >We offer 3<sup>rd</sup> parties full access to the same data sources we use ourselves. This way you have the freedom to develop custom functionality tailored to your use-cases, and you can be sure you will not be locked in by a single vendor.</p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"
                        >
                          <i class="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Access our high quality GraphQL API</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"
                        >
                          <i class="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Extensive documentation for users as well as developers</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"
                        >
                          <i class="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Qualitative data sources</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-xl"
                src="https://demos.creative-tim.com/tailwindcss-starter-project/static/media/documentation.e889cedc.png"
                style="transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg);"
              />
            </div>
          </div>
        </div>
        <div class="justify-center text-center flex flex-wrap mt-24">
          <div class="w-full md:w-6/12 px-12 md:px-4">
            <h2 class="font-semibold text-4xl">Beautiful Example Pages</h2>
            <p
              class="text-lg leading-relaxed mt-4 mb-4 text-gray-600"
            >Tailwind Starter Kit is a completly new product built using our past experience in web templates. Take the examples we made for you and start playing with them.</p>
          </div>
        </div>-->
      </section>
      <InCaseOfEmergency />

      <PageFooter />
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import OurJourney from "../components/OurJourney";
import InCaseOfEmergency from "../components/InCaseOfEmergency";
import PageFooter from "../components/PageFooter";
import SellingPoints from "../components/SellingPoints";
import PageHeader from "../components/PageHeader";
import HugOfDeath from "../components/HugOfDeath";

export default {
  components: {
    Hero,
    OurJourney,
    InCaseOfEmergency,
    PageFooter,
    SellingPoints,
    PageHeader,
    HugOfDeath
  },
  methods: {
    handleScroll(event) {
      let header = document.getElementsByTagName("header")[0];

      if (window.scrollY >= 50) {
        header.classList.add("bg-white", "shadow");
      } else {
        header.classList.remove("bg-white", "shadow");
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus">
@import '../styles/style.styl';
</style>
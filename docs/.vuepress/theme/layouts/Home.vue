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
        <div class="">
          <div class="my-32 flex items-stretch flex-wrap">
            <div class="flex flex-col w-full md:w-1/2 lg:w-1/4 float-left py-4 md:pr-4 lg:pr-4">
              <h2 class="text-xl font-light">make it easier</h2>
              <h3 class="font-medium text-2xl text-blue-600 mb-4"><a href="#" class="hover:underline">The digital logbook</a></h3>
              <p>No need to manually keep your logbook up-to-date again with our digital logbook which keeps itself up to date! <a href="#" class="underline text-blue-500">More information...</a></p>
            </div>
            <div class="flex flex-col w-full md:w-1/2 lg:w-1/4 float-left py-4 md:pl-4 lg:px-4">
              <h2 class="text-xl font-light">get better</h2>
              <h3 class="font-medium text-2xl text-blue-600 mb-4"><a href="#" class="hover:underline">Flight analysis</a></h3>
              <p>Go above and beyond by comparing flight performance with your peers and learning from each other. <a href="#" class="underline text-blue-500">More information...</a></p>
            </div>
            <div class="flex flex-col w-full md:w-1/2 lg:w-1/4 float-left py-4 md:pr-4 lg:px-4">
              <h2 class="text-xl font-light">stay safer</h2>
              <h3 class="font-medium text-2xl text-blue-600 mb-4">
                <a href="#" class="hover:underline">Flight following</a>
                <span
                  class="bg-yellow-200 text-yellow-600 rounded text-sm px-2 py-1"
                >beta</span>
              </h3>
              <p>By identifying risky behaviour before it becomes a problem you may save yourself one day. <a href="#" class="underline text-blue-500">More information...</a></p>
            </div>
            <div class="flex flex-col w-full md:w-1/2 lg:w-1/4 float-left py-4 md:pl-4 lg:pl-4">
              <h2 class="text-xl font-light">for your convenience</h2>
              <h3 class="font-medium text-2xl text-blue-600 mb-4">
                <a href="#" class="hover:underline">Weak-link finder</a>
                <span
                  class="bg-green-200 text-green-600 rounded text-sm px-2 py-1"
                >new</span>
              </h3>
              <p>Make a well educated guess about the location of a broken weak-link and save yourselves hours of searching. <a href="#" class="underline text-blue-500">More information...</a></p>
            </div>
          </div>
        </div>

        <OurJourney />

        <SellingPoints />
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
  // destroyed() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }
};
</script>

<style lang="stylus">
@import '../styles/style.styl';
</style>
<template>
  <div
    class="bg-gray-200 w-full shadow-lg py-16 md:py-20 md:pl-4 md:pr-8 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64"
  >
    <div class="flex flex-wrap items-center items-stretch">
      <div
        class="w-full sm:w-10/12 md:w-6/12 lg:w-6/12 mr-auto md:ml-auto relative flex items-stretch mb-16 md:mb-0"
      >
        <h2
          class="text-2xl lg:text-3xl xl:text-4xl leading-tight font-bold text-gray-800 absolute z-10"
          style="top: 50%; transform: translateY(-50%);"
        >
          Thanks
          <span style="color: #FF5700;">Reddit</span>,
          <br />you broke it again 🙂
        </h2>
        <div class="absolute bottom-0 z-0 w-9/12 hidden md:block md:-mb-20"></div>
      </div>
      <div class="w-full sm:w-10/12 md:w-6/12 lg:w-4/12 mr-auto">
        <p
          class="text-gray-700 leading-relaxed"
        >We are experiencing the infamous hug of death. Whilst landing page keeps working fine, our applications might be impacted by the sudden load of traffic coming in.</p>

        <p
          class="text-gray-700 leading-relaxed mt-6"
        >Enter your email so we can let you know when things are back to normal.</p>

        <div class="mt-10">
          <!-- <p class="text-white"><strong></strong></p> -->
          <form id="form" @submit.prevent="subscribe" class="relative mt-5">
            <div class="sm:flex">
              <input
                type="email"
                required="required"
                placeholder="Enter your email"
                v-model="email"
                class="block sm:max-w-xs w-full px-4 py-2 text-lg leading-snug appearance-none bg-white focus:outline-none focus:shadow-outline"
              />
              <button
                class="mt-4 relative h-12 sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto px-4 py-2 font-semibold leading-snug bg-blue-600 text-white uppercase tracking-wide shadow-md focus:outline-none focus:shadow-outline hover:bg-blue-500"
              >
                <span class>Keep me updated!</span>
                <span
                  class="v-cloak:hidden absolute inset-0 flex items-center justify-center pointer-events-none opacity-0"
                >
                  <svg viewBox="0 0 24 24" class="h-8 w-8 spin">
                    <path
                      fill="currentColor"
                      d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z"
                      class="text-gray-600"
                    />
                    <path
                      fill="currentColor"
                      d="M12 3a9 9 0 010 18v-2a7 7 0 000-14V3z"
                      class="text-gray-400"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <!---->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    //curl 'http://localhost:9000/api/subscribers' -H 'Content-Type: application/json' \
    // --data '{"email":"subsriber@domain.com","name":"The Subscriber","status":"enabled","lists":[1],"attribs":{"city":"Bengaluru","projects":3,,"stack":{"languages":["go","python"]}}}'
    async subscribe() {
      try {
        let response = await fetch("http://listmonk.whaally.com/subscribe", {
          method: "POST",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: this.email,
            name: this.email,
            status: "enabled",
            attribs: {
              reason: "hug of death"
            }
          })
        });

        let text = await response.text();
        let json = JSON.parse(text.split("\n")[0]);
        alert(json.message);
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style>
</style>
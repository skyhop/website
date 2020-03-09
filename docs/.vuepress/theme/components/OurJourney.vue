<template>
  <div class="bg-gray-100 w-full shadow-lg my-20 md:pl-4 rounded-lg overflow-hidden">
    <div class="flex flex-wrap items-center items-stretch">
      <div
        class="md:py-20 px-12 md:px-0 w-full sm:w-10/12 md:w-6/12 lg:w-5/12 md:px-4 mr-auto md:ml-auto relative flex items-stretch my-12 md:mb-0"
      >
        <h2
          class="text-2xl lg:text-3xl xl:text-4xl leading-tight font-bold text-blue-600 content-center absolute z-10"
          style="top: 50%; transform: translateY(-50%);"
        >Our journey</h2>
        <div class="absolute bottom-0 z-0 w-11/12 xl:pl-48 hidden md:block">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 53 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xml:space="preserve"
            xmlns:serif="http://www.serif.com/"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"
          >
            <g transform="matrix(0.110146,0,0,0.107361,-2.84228,-6.22684)">
              <clipPath id="_clip1">
                <rect x="25.805" y="57.999" width="478.455" height="180.815" />
              </clipPath>
              <g clip-path="url(#_clip1)">
                <path
                  d="M104.873,301.052C110.331,307.19 118.968,309.355 126.659,306.556L491.096,173.912C501.469,170.136 506.826,158.656 503.05,148.278C484.451,97.177 427.172,71.847 376.83,92.561L314.945,117.452L230.93,61.365C225.634,57.829 218.97,57.027 212.985,59.205L155.422,80.157C149.252,82.403 144.577,87.534 142.914,93.886C141.251,100.238 142.812,107.001 147.09,111.982L194.546,167.239L138.17,190.953L119.43,169.879C113.983,163.752 105.347,161.57 97.644,164.375L38.964,185.733C32.737,188 28.037,193.203 26.414,199.629C24.791,206.054 26.456,212.865 30.859,217.817L104.873,301.052ZM98.563,206.608L117.787,228.227C123.475,234.623 132.6,236.69 140.488,233.373L235.356,193.468C241.248,190.989 245.601,185.843 247.067,179.621C248.534,173.399 246.938,166.851 242.773,162.001L196.272,107.855L217.146,100.258L301.512,156.579C307.004,160.246 313.953,160.965 320.08,158.5L391.827,129.642C391.883,129.62 391.938,129.597 391.994,129.574C415.31,119.953 440.425,127.476 455.168,144.422L125.74,264.323L80.322,213.247L98.563,206.608Z"
                  style="fill:rgb(89,167,231);fill-rule:nonzero;"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div
        class="md:px-8 lg:px-16 md:py-20 pb-16 pt-8 px-12 md:px-0 w-full sm:pr-32 md:w-6/12 lg:w-5/12 mr-auto bg-gray-200"
      >
        <p
          class="text-blue-600 leading-loose"
        >Skyhop is a hobby project which turned full time. From our own experiences flying gliders we've set out on a journey to make the time on the ground as easy and fun as possible, not worrying about maintaining proper records. We're trying to define what the logbook of the future looks like, and raise the bar when it comes to quality. Follow us on our journey building it, and stay up to date of the newest features we're building.</p>

        <div class="mt-10">
          <form
            method="post"
            action="https://listmonk.whaally.com/subscription/form"
            class="listmonk-form"
          >
            <input type="hidden" name="l" value="60812f57-1f90-41ce-866a-68724eaa6c9e">
            <div class="flex flex-row">
              <p>
                <input type="text" name="email" placeholder="E-mail" class="block sm:max-w-xs w-full px-4 py-2 text-lg leading-snug appearance-none bg-white focus:outline-none focus:shadow-outline" />
              </p>
              <p>
                <input type="submit" value="Subscribe" class="mt-4 relative h-12 sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto px-4 py-2 font-semibold leading-snug bg-blue-600 text-white uppercase tracking-wide shadow-md focus:outline-none focus:shadow-outline hover:bg-blue-500" />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
</style>
<template>
  <header
    ref="header"
    class="w-full bg-transparent fixed top-0 left-0 z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-4 xl:py-6"
    id="navbar"
    style="transition-duration: .2s"
  >
    <nav class="flex items-center justify-between">
      <div class>
        <a href="/">
          <img class="h-10" src="https://login.skyhop.org/images/skyhop.svg" />
        </a>
      </div>

      <div class="block sm:hidden">
        <button type="button" class="navbar-toggler">
          <span class="navbar-toggler-bar"></span>
          <span class="navbar-toggler-bar"></span>
          <span class="navbar-toggler-bar"></span>
        </button>
      </div>

      <div class="hidden sm:flex">
        <ul class="flex flex-col sm:flex-row">
          <li>
            <a href="https://registry.skyhop.org/" class="sm:px-4 py-2 block">Flights</a>
          </li>
          <li>
            <a href="/about-us" class="sm:px-4 py-2 sm:hidden lg:block">About Us</a>
          </li>
          <li>
            <a href="/documentation/" class="sm:px-4 py-2 sm:hidden md:block">Documentation</a>
          </li>
          <li>
            <a
              href="https://app.skyhop.org/"
              class="sm:px-4 py-2 block text-blue-600 border border-gray-400 rounded-lg ml-4"
            >Login</a>
          </li>
          <li>
            <a
              href="#"
              class="sm:px-4 py-2 block bg-blue-600 text-white rounded-lg ml-4"
            >Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>
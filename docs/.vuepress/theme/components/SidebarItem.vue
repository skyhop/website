<template>
  <div class="leading-loose">
    <p
      class="my-2 text-gray-700"
    >
      <router-link v-if="element.path" :to="element.path" class="text-md hover:bg-gray-200 hover:shadow px-3 py-2 hover:text-blue-800 rounded" activeClass="text-blue-600">{{element.title}}</router-link>
      <span v-else class="font-bold text-gray-500 px-3 py-2">{{element.title}}</span>
    </p>

    <sidebar-item
      v-for="child in children"
      :children="child.children"
      :element="child"
      class="pl-3 my-1"
    ></sidebar-item>
  </div>
</template>

<script>
export default {
  props: ["element", "children"],
  name: "sidebar-item"
};
</script>

<style>
</style>
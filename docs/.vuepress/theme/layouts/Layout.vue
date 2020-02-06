<template>
  <div>
    <PageHeader class="bg-white shadow-md relative" />
    <div class="w-full flex w-full px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-4 xl:py-6">
      <div class="w-1/3">
        <div class="py-8 pr-6">
          <SidebarItem v-for="route in GetRoutes($site.themeConfig.sidebar)"
            :children="route.children"
            :element="route" />
        </div>
      </div>
      <div class="w-2/3">
        <div class="">
          <div class="markdown-body">
            <Content />
          </div>
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import SidebarItem from "../components/SidebarItem";

export default {
  components: {
    PageHeader,
    PageFooter,
    SidebarItem
  },
  methods: {
    GetRoutes(routes) {
      return routes.map(e => {
        if (e.children != undefined && e.children.length > 0) {
          return {
            title: e.title,
            children: this.GetRoutes(e.children)
          }
        } else {
          return this.FindRoute(e);
        }
      }).filter(item => item != null)
    },
    FindRoute(path) {
      return this.$site.pages
        .sort((a, b) => a.path.length - b.path.length).find(e => e.path.indexOf(`${path}.html`) == 1);
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/style.styl';
</style>
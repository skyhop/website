<template>
  <div>
    <PageHeader class="bg-white shadow-md relative" />
    <Content />
    <!-- <div class="w-full flex w-full px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-4 xl:py-6">
      <div class="w-2/3">
        <div class="">
          <div class="markdown-body">
            
          </div>
        </div>
      </div>
    </div> -->
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
  }
};
</script>

<style lang="stylus">
@import '../styles/style.styl';
</style>
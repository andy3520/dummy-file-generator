<template>
  <div class="w-screen h-screen overflow-hidden relative">
    <top-nav />
    <main class="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-5xl h-full mx-auto">
        <router-view />
      </div>
    </main>
    <my-footer class="absolute bottom-0 inset-x-0" />
  </div>
</template>

<script>
import TopNav from "@/components/layouts/TopNav";
import MyFooter from "@/components/layouts/Footer";
export default {
  components: {
    TopNav,
    MyFooter
  }
};
</script>

<style></style>

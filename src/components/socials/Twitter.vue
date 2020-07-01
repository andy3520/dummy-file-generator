<template>
  <a :href="link" target="_blank" class="inline-flex items-center">
    <slot>
      by Andy Nguyen
    </slot>
    <icon-twitter class="ml-2 mt-1" />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "https://twitter.com/annguyenhieuduc"
    }
  }
};
</script>

<style></style>

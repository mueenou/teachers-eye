<template>
  <v-footer :fixed="fixed" color="blue-grey">
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      fixed: false
    };
  }
};
</script>

<style>
</style>
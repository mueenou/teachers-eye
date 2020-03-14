<template>
  <v-layout row wrap>
      <v-flex xs1>
          Page Admin
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: ['auth-admin']
}
</script>

<style>

</style>
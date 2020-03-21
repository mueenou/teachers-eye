<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1 class="text-center">Liste des élèves</h1>
      <Students/>
    </v-flex>
  </v-layout>
</template>

<script>
import Students from '@/components/Students'
export default {
  components: {
      Students
  },
};
</script>

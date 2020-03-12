<template>
  <v-app-bar :clipped-left="clipped" fixed app color="blue-grey" dense>
    <v-toolbar-title>
      <v-btn text to="/" nuxt depressed large color="white">
        <span class="font-weight-light">Teachers</span>
        <span class="font-weight-bold">' Eye</span>
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="isAuthenticated">
      <span>{{currentUser.firstName ? currentUser.firstName  + ' ' + currentUser.lastName : ""}}</span>
      <v-btn text class="mr-2" nuxt to="/user" small color="white">
        <v-icon>mdi-account</v-icon>
        <span>Mon compte</span>
      </v-btn>
      <v-btn text class="mr-2" nuxt small @click="logoutUser" color="white">
        <v-icon>mdi-logout</v-icon>
        <span>Déconnexion</span>
      </v-btn>
    </div>
    <div v-else>
      <span>{{currentUser.firstName || ""}}</span>
      <v-btn text class="mr-2" nuxt to="/login" small color="white">
        <v-icon>mdi-login</v-icon>Connexion
      </v-btn>
      <v-btn text class="mr-2" nuxt to="/register" small color="white">
        <span>S'inscrire</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>

import { mapState } from 'vuex'
export default {
  name: "Appbar",
  computed: {
    ...mapState(['currentUser', 'isAuthenticated']),
  },
  data() {
    return {
      clipped: false
    };
  },
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser')
      this.$store.dispatch('handleSnackbar', {displaySb: true, message: 'Déconnexion réussie', color: 'pink'})
      this.$router.push('/login');
    },
  },
};
</script>

<style>
</style>
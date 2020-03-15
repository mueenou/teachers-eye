<template>
  <v-app-bar :clipped-left="clipped" flat fixed app color="#EEEEEE" dense>
    <v-toolbar-title>
      <v-btn text to="/" nuxt depressed large color="#555555">
        <span class="font-weight-light">Teachers</span>
        <span class="font-weight-bold">' Eye</span>
      </v-btn>
    </v-toolbar-title>
    <v-btn text class="mr-2" nuxt small to="/admin" color="#555555" v-if="isAdmin" >
        <span>Admin</span>
      </v-btn>
    <v-spacer></v-spacer>
    <div v-if="isAuthenticated">
      <v-btn text class="mr-2" nuxt small to="/students" color="#555555">
        <span>Elèves</span>
      </v-btn>
      <v-btn text class="mr-2" nuxt to="/user" small color="#555555">
        <v-icon>mdi-account</v-icon>
        <!-- <span>{{$auth.user.data.firstName || ""}} {{$auth.user.data.lastName || ""}}</span> -->
      </v-btn>
      <v-btn text class="mr-2" nuxt small @click="logoutUser" color="#555555">
        <v-icon>mdi-logout</v-icon>
        <span>Déconnexion</span>
      </v-btn>
    </div>
    <div v-else>
      <span></span>
      <v-btn text class="mr-2" nuxt to="/login" small color="#555555">
        <v-icon>mdi-login</v-icon>Connexion
      </v-btn>
      <v-btn text class="mr-2" nuxt to="/register" small color="#555555">
        <span>S'inscrire</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
export default {
  name: "Appbar",
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  data() {
    return {
      clipped: false
    };
  },
  methods: {
    logoutUser() {
      this.$auth.logout()
      this.$store.dispatch('handleSnackbar', {displaySb: true, message: 'Déconnexion réussie', color: 'pink'})
      this.$router.push('/login');
    },
    isAdmin() {
      if (this.loggedInUser) {
        if (this.loggedInUser.data.status === true) {
          return true
        } else {
          return false
        }
      }
    }
  },
};
</script>

<style>
</style>
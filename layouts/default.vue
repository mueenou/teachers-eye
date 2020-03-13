<template>
  <v-app color="grey lighten-4">
    <AppBar/>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-snackbar
        :value="snackbar"
        :timeout="0"
    >
        {{ `${sbMessage}  !` }}
        <v-btn
          :color="sbColor"
          text
          @click="$store.dispatch('handleSnackbar', {displaySb: false, message: '', color: 'green'})"
        >
          Close
        </v-btn>
    </v-snackbar>
    <Footer/>
  </v-app>
</template>

<script>
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'
import { mapState } from 'vuex'
export default {
  components: {
    AppBar, Footer
  },
  computed: {
    ...mapState(['snackbar', 'currentUser', 'sbMessage', 'sbColor'])
  },
  data () {
    return {

    }
  },
  methods: {
    
  },
}
</script>

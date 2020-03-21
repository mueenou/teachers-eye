<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6 style="max-width: 350px; width: 100%;" class="text-center"> 
      <h1>Connexion</h1>
      <v-alert type="error" v-if="error">
        {{error}}
      </v-alert>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="loginInfos.email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field 
          v-model="loginInfos.password" 
          label="Password" 
          required 
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"></v-text-field>
        <v-btn :disabled="!valid" outlined tile color="#555555" class="mr-4" @click="loginUser" v-ripple>Se connecter</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      error: "",
      valid: true,
      loginInfos: {
        email: "",
        password: ""
      },
      pswRules: [
        v => !!v || "Password is required.",
        v =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
            v
          ) ||
          "Min. 8 characters with at least one capital letter, a number and a special character."
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    async loginUser() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.loginInfos.email,
            password: this.loginInfos.password
          },
        })
        this.$store.dispatch('handleSnackbar', {displaySb: true, message: 'Connexion réussie', color: 'green'})
      } catch (e) {
        this.error = "Un problème est survenue, veuillez réessayer ultéreieurement."
      }
    }
  }
};
</script>

<style>
</style>
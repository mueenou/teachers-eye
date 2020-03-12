<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1>Page de connexion</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="loginInfos.email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field 
          v-model="loginInfos.password" 
          label="Password" 
          required 
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"></v-text-field>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="loginUser" v-ripple>Se connecter</v-btn>
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
      let user = await this.$store.dispatch('loginUser', this.loginInfos )
      console.log
      if(user.error) {
        alert(user.error)
      } else {
        console.log("Connexion avec succès !")
        this.$store.dispatch('handleSnackbar', {displaySb: true, message: 'Connexion réussie', color: 'green'})
        this.$router.push('/user')
      }
    }
  }
};
</script>

<style>
</style>
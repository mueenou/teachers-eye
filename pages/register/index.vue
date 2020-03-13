<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1>Inscription</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="signupInfos.firstName" :rules="nameRules" label="First Name" required></v-text-field>
        <v-text-field v-model="signupInfos.lastName" :rules="nameRules" label="Last Name" required></v-text-field>
        <v-text-field v-model="signupInfos.email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field v-model="signupInfos.age" :rules="ageRules" label="Age" required></v-text-field>
        <v-row width="350">
          <v-checkbox v-for="(promo, index) in allPromos" :key="index" v-model="signupInfos.promos" :label="promo.name" :value="promo.name"></v-checkbox>
        </v-row>
        <v-text-field v-model="signupInfos.password" type="password" label="Password" required></v-text-field>
        <v-text-field v-model="pswConfirm" :rules="pswConfirmRules" type="password" label="Confirm password" required></v-text-field>
        <v-select
          v-model="signupInfos.userType"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Professeur ou étudiant(e)?"
          required
        ></v-select>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" v-ripple>S'inscrire</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['currentUser'])
  },
  data() {
    return {
      valid: true,
      error: "",
      selected: [],
      allPromos: [
        {
          name: "6A",
        },
        {
          name: "6B",
        },
        {
          name: "6C",
        },
        {
          name: "6D",
        },
        {
          name: "5A",
        },
        {
          name: "5B",
        },
        {
          name: "5C",
        },
        {
          name: "5D",
        },
        {
          name: "4A",
        },
        {
          name: "4B",
        },
        {
          name: "4C",
        },
        {
          name: "4D",
        },
        {
          name: "3A",
        },
        {
          name: "3B",
        },
        {
          name: "3C",
        },
        {
          name: "3D",
        },
      ],
      signupInfos: {
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        userType: "",
        password: "",
        promos: []
      },
      pswConfirm: "",
      pswConfirmRules: [v => v === this.signupInfos.password || "Le mot de passe n'est pas conforme."],
      nameRules: [v => !!v || "Name is required"],
      nameRules: [v => !!v || "Name is required"],
      ageRules: [
        v => v > 10 || "Vous devez être au moins agé de 10 ans."
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      items: ["Student", "Teacher"],
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
      this.signupUser();
    },

    async signupUser() {
      try {
        await this.$axios.post('signup', this.signupInfos)

        await this.$auth.loginWith('local', {
          data: {
            email: this.signupInfos.email,
            password: this.signupInfos.password
          },
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e
      }
    }
    
  }
};
</script>

<style>
</style>
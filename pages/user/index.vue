<template>
    <v-layout row wrap justify-center>
        <v-card width="450" color="#EEEEEE">
            <v-card-title primary-title>
                {{loggedInUser.data.firstName.toUpperCase()}} {{loggedInUser.data.lastName.toUpperCase()}}
            </v-card-title>
            <v-card-subtitle>
                Rôle: {{loggedInUser.data.userType}}
            </v-card-subtitle>
            <v-card-subtitle>
                Age: {{loggedInUser.data.age}}
            </v-card-subtitle>
            <v-card-subtitle>
                E-mail: {{loggedInUser.data.email}}
            </v-card-subtitle>
            <v-card-subtitle>
                Points de comportement: {{loggedInUser.data.attitudePoints}}
            </v-card-subtitle>
            <v-card-subtitle>
                Avertissements: {{loggedInUser.data.warnings}}
            </v-card-subtitle>
        </v-card>
    </v-layout>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
    computed: {
        ...mapState(['auth', 'currentUser']),
        ...mapGetters(['loggedInUser']),
    },

}
</script>

<style>

</style>
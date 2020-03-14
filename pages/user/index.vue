<template>
    <v-layout row wrap justify-center>
        <v-card width="450" flat color="#EFFFFF">
            <v-card-title primary-title>
                {{$auth.user.data.firstName.toUpperCase()}} {{$auth.user.data.lastName.toUpperCase()}}
            </v-card-title>
            <v-card-subtitle>
                Rôle: {{$auth.user.data.userType}}
            </v-card-subtitle>
            <v-card-subtitle>
                Age: {{$auth.user.data.age}}
            </v-card-subtitle>
            <v-card-subtitle>
                E-mail: {{$auth.user.data.email}}
            </v-card-subtitle>
        </v-card>
    </v-layout>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
    computed: {
        ...mapState(['auth', 'currentUser']),
        middleware: ['set-state']
    },

}
</script>

<style>

</style>
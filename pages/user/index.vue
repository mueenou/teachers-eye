<template>
    <v-layout row wrap justify-center>
        <v-card width="450">
            <v-card-title primary-title>
                {{currentUser.firstName}} {{currentUser.lastName}}
            </v-card-title>
            <v-card-subtitle>
                {{currentUser.userType ? currentUser.userType.toUpperCase() : ""}}
            </v-card-subtitle>
            <v-card-subtitle>
                {{`Age: ${currentUser.age}`}}
            </v-card-subtitle>
            <v-card-subtitle>
                {{currentUser.email}}
            </v-card-subtitle>
        </v-card>
    </v-layout>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(['currentUser'])
    },

}
</script>

<style>

</style>
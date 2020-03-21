<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md10>
            <v-tabs v-model="tab" background-color="primary" dark style="width: 800px;">
              <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item>
                <Students style="height: 60vh;"/>
              </v-tab-item><v-tab-item>
                <v-card flat>
                  <Teachers style="height: 60vh;"/>
                </v-card>
              </v-tab-item><v-tab-item>
                <v-card flat>
                  <Users style="height: 60vh;"/>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
    </v-flex>
  </v-layout>
</template>

<script>
import Students from '@/components/Students'
import Teachers from '@/components/Teachers'
import Users from '@/components/Users'

export default {
  middleware: ["auth-admin"],
  components: {
    Students, Teachers, Users
  },
  data () {
    return {
      tab: null,
      items: [
        { tab: 'Students', content: 'Tab 1 Content' },
        { tab: 'Teachers', content: 'Tab 2 Content' },
        { tab: 'All', content: 'Tab 3 Content' },
      ],
    }
  },
};
</script>

<style>
</style>
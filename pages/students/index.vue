<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1 class="text-center">Liste des élèves</h1>
      <v-card rounded>
        <v-simple-table fixed-header height="300px">
          <thead>
            <tr>
              <th class="text-center">Nom/Prénom</th>
              <th class="text-center">Âge</th>
              <th class="text-center">Classe</th>
              <th class="text-center">Points de comportement</th>
              <th class="text-center">Avertissements</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student._id">
              <td class="text-center">{{student.firstName}} {{student.lastName}}</td>
              <td class="text-center">{{student.age}}</td>
              <td class="text-center">{{student.promos[0]}}</td>
              <td class="text-center">
                <v-btn color="success" icon>
                  <v-icon color="#555555" icon>mdi-arrow-up-bold-circle</v-icon>
                </v-btn>
                {{student.attitudePoints}}
                <v-btn color="success" icon>
                  <v-icon color="#555555" icon>mdi-arrow-down-bold-circle</v-icon>
                </v-btn>
              </td>
              <td class="text-center">{{student.warnings}}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      students: null
    };
  },
  methods: {
    async allUsers() {
      try {
        const response = await this.$axios.get(
          "http://localhost:5000/api/auth/user/students"
        );
        this.students = response.data.users;
        console.log(this.students);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.allUsers();
  }
};
</script>

<style>
td {
  text-transform: capitalize;
}
</style>
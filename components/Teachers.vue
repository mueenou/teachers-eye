<template>
  <v-card rounded>
    <v-simple-table fixed-header height="300px">
      <thead>
        <tr>
          <th class="text-center">Nom/Prénom</th>
          <th class="text-center">Classe</th>
          <th class="text-center">E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="teacher in teachers" :key="teacher._id">
          <td class="text-center">{{teacher.firstName}} {{teacher.lastName}}</td>
          <td class="text-center"><span v-for="(batch, index) in teacher.promos" :key="index">{{`${batch} `}}</span></td>
          <td class="text-center">{{teacher.email}}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
    data() {
    return {
      teachers: null
    };
  },
  mounted() {
    this.allUsers();
  },
  methods: {
    async allUsers() {
      try {
        const response = await this.$axios.get(
          "http://localhost:5000/api/auth/user/teachers"
        );
        this.teachers = response.data.users;
        console.log(this.teachers);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
td:nth-child(1) {
  text-transform: capitalize;
}
</style>
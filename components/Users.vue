<template>
  <v-card rounded>
    <v-simple-table fixed-header height="300px">
      <thead>
        <tr>
          <th class="text-center">Nom/Prénom</th>
          <th class="text-center">Rôle</th>
          <th class="text-center">Âge</th>
          <th class="text-center">Classe</th>
          <th class="text-center">E-mail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user._id">
          <td class="text-center">{{user.firstName}} {{user.lastName}}</td>
          <td class="text-center">{{user.userType}}</td>
          <td class="text-center">{{user.age}}</td>
          <td class="text-center"><span v-for="(batch, index) in user.promos" :key="index">{{`${batch} `}}</span></td>
          <td class="text-center">{{user.email}}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
    data() {
    return {
      users: null
    };
  },
  mounted() {
    this.allUsers();
  },
  methods: {
    async allUsers() {
      try {
        const response = await this.$axios.get(
          "http://localhost:5000/api/auth/user/allUsers"
        );
        this.users = response.data.users;
        console.log(this.users);
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
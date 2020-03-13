<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1>Liste des élèves</h1>
      <v-simple-table fixed-header height="300px" dense>
        <thead>
          <tr>
            <th class="text-left">Nom/Prénom</th>
            <th class="text-left">Âge</th>
            <th class="text-left">Points de comportement</th>
            <th class="text-left">Avertissements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>firstname Lastname</td>
            <td>Age</td>
            <td>Points</td>
            <td>warnings</td>
          </tr>
        </tbody>
    </v-simple-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>
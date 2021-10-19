<template>
  <table class="ui celled striped table">
    <thead>
      <tr>
        <th colspan="5" class="ui center">Cabinas</th>
      </tr>
      <tr>
        <th class="aligned collapsing center">N° Cabina</th>
        <th class="aligned collapsing center">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cabina, index) of cabinas" :key="index">
        <td class="center aligned collapsing"> Cabina: {{ cabina.id }}</td>
        <td class="center aligned collapsing">
          <button class="ui button red compact mini" @click="eliminar_cabina({ id: cabina.id })"><i class="icon delete"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'TableCabinas',
  computed: {
    ...mapState(['cabinas'])
  },
  methods: {
    ...mapMutations(['eliminar_cabina'])
  }
}
</script>
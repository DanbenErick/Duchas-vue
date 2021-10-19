<template>
  <table class="ui celled striped table">
    <thead>
      <tr>
        <th colspan="5" class="ui center">Cliente</th>
      </tr>
      <tr>
        <th class="aligned collapsing center">Nombre</th>
        <th class="aligned collapsing center">Hora de Ingreso</th>
        <th class="aligned collapsing center">Tiempo Contratado</th>
        <th class="aligned collapsing center">Dinero</th>
        <th class="aligned collapsing center">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cliente, index) of clientes" :key="index">
        <td class="center aligned collapsing"> {{ cliente.nombre_cliente }}</td>
        <td class="center aligned collapsing">{{ cliente.hora_entrada_cliente }}</td>
        <td class="center aligned collapsing">{{ cliente.tiempo_contratado }}:min</td>
        <td class="center aligned collapsing">S/. {{ cliente.precio_cliente }}.00</td>
        <td class="center aligned collapsing">
          <button class="ui icon compact mini button green"><i class="icon check"></i></button>
          <button class="ui icon compact mini button red"><i class="icon delete"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Table',
  computed: {
    ...mapState(['clientes'])
  }
}
</script>

<style scoped>
  table {
    width: 100%;
  }
</style>
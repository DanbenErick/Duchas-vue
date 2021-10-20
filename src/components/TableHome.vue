<template>
  <table class="ui celled striped table">
    <thead>
      <tr>
        <th colspan="7" class="ui center">Cliente</th>
      </tr>
      <tr>
        <th class="aligned collapsing center">Nombre</th>
        <th class="aligned collapsing center">Cabina</th>
        <th class="aligned collapsing center">Hora de Ingreso</th>
        <th class="aligned collapsing center">Hora de Salida</th>
        <th class="aligned collapsing center">Tiempo Contratado</th>
        <th class="aligned collapsing center">Dinero</th>
        <th class="aligned collapsing center">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(cliente, index) of clientes"
        :key="index"
        v-show="!cliente.atendido"
      >
        <td class="center aligned collapsing">{{ cliente.nombre_cliente }}</td>
        <td class="center aligned collapsing">{{ cliente.cabina }}</td>
        <td class="center aligned collapsing">
          {{ cliente.hora_entrada_cliente }}
        </td>
        <td class="center alined collapsing">
          {{ cliente.hora_salida_cliente }}
        </td>
        <td class="center aligned collapsing">
          {{ cliente.tiempo_contratado }}:min
        </td>
        <td class="center aligned collapsing">
          S/. {{ cliente.precio_cliente }}.00
        </td>
        <td class="center aligned collapsing">
          <button
            class="ui icon compact mini button green"
            @click="cliente_atendido(index)"
          >
            <i class="icon check"></i>
          </button>
          <button class="ui icon compact mini button red">
            <i class="icon delete"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "TableHome",
  computed: {
    ...mapState(["clientes"]),
  },
  methods: {
    ...mapMutations(["cliente_atendido"]),
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
</style>

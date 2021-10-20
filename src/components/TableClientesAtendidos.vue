<template>
  <div class="ui container segment">
    <table class="ui pointing table">
      <thead>
        <tr>
          <th colspan="5" class="ui center">Cliente</th>
        </tr>
        <tr>
          <th class="aligned collapsing center">Nombre</th>
          <th class="aligned collapsing center">Hora de Ingreso</th>
          <th class="aligned collapsing center">Hora de Salida</th>
          <th class="aligned collapsing center">Cabina</th>
          <th class="aligned collapsing center">Dinero</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) of clientesAtendidos" :key="index">
          <td class="left aligned collapsing">{{ cliente.nombre_cliente }}</td>
          <td class="left aligned collapsing">
            {{ cliente.hora_entrada_cliente }}
          </td>
          <td class="left aligned collapsing">
            {{ cliente.hora_salida_cliente }}:min
          </td>
          <td class="left aligned collapsing">{{ cliente.cabina }}</td>
          <td class="left aligned collapsing">
            S/. {{ cliente.precio_cliente }}.00
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "TableClientesAtendidos",
  computed: {
    ...mapGetters(["clientesAtendidos"]),
  },
};
</script>

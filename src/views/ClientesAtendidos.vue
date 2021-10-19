<template>
  <div class="ui segment">
    <TableClientesAtendidos />
  </div>
</template>
<script>
import TableClientesAtendidos from "../components/TableClientesAtendidos.vue";
export default {
  name: "ClientesAtendidos",
  components: {
    TableClientesAtendidos,
  },
};
</script>

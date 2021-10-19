<template>
  <div class="ui container two column grid segment">
    <div class="column">
      <FormCabinas />
    </div>
    <div class="column">
      <TableCabinas />
    </div>
  </div>
</template>
<script>
import FormCabinas from "../components/FormCabinas.vue";
import TableCabinas from "../components/TableCabinas.vue";
export default {
  name: "Cabinas",
  components: {
    FormCabinas,
    TableCabinas,
  },
};
</script>

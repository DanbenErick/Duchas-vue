<template>
  <div class="ui container two column grid segment">
    <div class="column">
      <FormHome />
    </div>
    <div class="column">
      <TableHome />
    </div>
  </div>
</template>
<script>
import FormHome from '../components/FormHome.vue'
import TableHome from '../components/TableHome.vue'
export default {
  name: 'Home',
  components: {
    FormHome,
    TableHome
  }
}
</script>

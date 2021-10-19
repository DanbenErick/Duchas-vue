<template>
  <div class="ui segment">
    <div class="ui container">
      <h1 class="ui center aligned header">Duchas</h1>
    </div>
  </div>
  <div class="ui container">
    <Menu />
  </div>
  <div class="ui container two column grid segment">
    <div class="column">
      <Form ></Form>
    </div>
    <div class="column">
      <Table></Table>
    </div>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import Table from './components/Table.vue'
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  components: {
    Form,
    Table,
    Menu
  }
}
</script>

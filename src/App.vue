<template>
  <div class="ui segment">
    <div class="ui container">
      <h1 class="ui center aligned header">Duchas</h1>
    </div>
  </div>
  <div class="ui container">
    <Menu />
  </div>
  <router-view/>
</template>
<script>
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>
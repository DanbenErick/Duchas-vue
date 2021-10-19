<template>
  <div class="ui pointing menu">
    <router-link class="item" to="/" active-class="active"> Home </router-link>
    <router-link class="item" to="/cabinas" active-class="active">
      Cabinas
    </router-link>
    <router-link class="item" to="clientes-atendidos" active-class="active">
      Clientes Atendidos
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Menu",
};
</script>

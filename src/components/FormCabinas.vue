<template>
  <div class="ui form">
    <div class="field">
      <label>Numero de Cabina</label>
      <input type="number" v-model="cabina">
    </div>
    <button class="ui button blue fluid" @click="guardar_cabina">Guardar</button>
    <div class="ui red inverted segment" v-show="show_datos_rellenados">No rellenaste todos los datos requeridos</div>
    <div class="ui red inverted segment" v-show="show_cabina_creada">La cabina que intentaste crear, ya existe</div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex' 
export default {
  name: 'FormCabinas',
  data() {
    return  {
      cabina: '',
      show_datos_rellenados: false,
    }
  },
  computed: {
    ...mapState(['show_cabina_creada'])
  },
  methods: {
    guardar_cabina() {
      if( this.cabina != '') {
        this.agregar_cabina({ cabina: this.cabina })
        this.cabina = ''
        this.show_datos_rellenados = false
      } else {
        this.show_datos_rellenados = true
      }
    },
    ...mapMutations(['agregar_cabina'])
  },
}
</script>
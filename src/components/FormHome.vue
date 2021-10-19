<template>
  <div class="ui form">
    <div class="field">
      <label>Nombre del Cliente</label>
      <input type="text" name="first-name" v-model="cliente.nombre_cliente" />
    </div>
    <div class="field">
      <label>Cabina</label>
      <select v-model="cliente.cabina">
        <option
          v-for="(cabina, index) in cabinas"
          :key="index"
          :value="cabina.id"
        >
          Cabina - {{ cabina.id }}
        </option>
      </select>
    </div>
    <div class="field">
      <label>Hora de Entrada</label>
      <input type="time" v-model="cliente.hora_entrada_cliente" />
    </div>
    <div class="field">
      <label>Tiempo Contratado</label>
      <input type="number" v-model="cliente.tiempo_contratado" />
    </div>
    <div class="field">
      <label>Precio</label>
      <input type="number" v-model="cliente.precio_cliente" />
    </div>
    <button
      class="ui button blue fluid"
      type="submit"
      @click="resetear_valores"
    >
      Guardar
    </button>
    <div class="ui red inverted segment" v-show="show_datos_rellenados">
      No rellenaste todos los datos requeridos
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "FormHome",
  data() {
    return {
      cliente: {
        nombre_cliente: "",
        cabina: "",
        hora_entrada_cliente: "",
        tiempo_contratado: "",
        precio_cliente: "",
      },
      show_datos_rellenados: false,
    };
  },
  computed: {
    ...mapState(["cabinas"]),
  },
  methods: {
    resetear_valores() {
      if (
        this.cliente.nombre_cliente != "" &&
        this.cliente.hora_entrada_cliente != "" &&
        this.cliente.tiempo_contratado != "" &&
        this.cliente.precio_cliente != ""
      ) {
        this.agregar_cliente(this.cliente);
        this.show_datos_rellenados = false;
        this.cliente.nombre_cliente = "";
        this.cliente.hora_entrada_cliente = "";
        this.cliente.tiempo_contratado = "";
        this.cliente.precio_cliente = "";
      } else {
        this.show_datos_rellenados = true;
        console.log("Se tiene que rellenar todos los datos");
      }
    },
    ...mapMutations(["agregar_cliente"]),
  },
};
</script>

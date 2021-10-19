import { createStore } from "vuex";

export default createStore({
  state: {
    clientes: [],
    cabinas: [],
    show_cabina_creada: false,
  },
  getters: {
    clientesAtendidos(state) {
      return state.clientes.filter((cliente) => cliente.atendido == true);
    },
  },
  mutations: {
    agregar_cliente(state, payload) {
      const data = {
        nombre_cliente: payload.nombre_cliente,
        cabina: payload.cabina,
        hora_entrada_cliente: payload.hora_entrada_cliente,
        tiempo_contratado: payload.tiempo_contratado,
        precio_cliente: payload.precio_cliente,
        atendido: false,
      };
      state.clientes.push(data);
    },
    agregar_cabina(state, payload) {
      const existe =
        state.cabinas.filter((cabina) => cabina.id == payload.cabina).length ==
        0;
      if (existe) {
        state.cabinas.push({ id: payload.cabina });
        state.show_cabina_creada = false;
      } else {
        state.show_cabina_creada = true;
      }
    },
    eliminar_cabina(state, payload) {
      state.cabinas = state.cabinas.filter((cabina) => cabina.id != payload.id);
    },
    cliente_atendido(state, index) {
      state.clientes[index].atendido = true;
    },
  },
  actions: {},
  modules: {},
});

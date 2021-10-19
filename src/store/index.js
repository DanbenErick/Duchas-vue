import { createStore } from 'vuex'

export default createStore({
  state: {
    clientes: []
  },
  mutations: {
    agregar_cliente(state, payload) {
      const data =  {
        nombre_cliente: payload.nombre_cliente,
        hora_entrada_cliente: payload.hora_entrada_cliente,
        tiempo_contratado: payload.tiempo_contratado,
        precio_cliente: payload.precio_cliente,
      } 
      state.clientes.push(data)
    }
  },
  actions: {

  },
  modules: {
  }
})

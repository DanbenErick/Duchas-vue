import { createStore } from "vuex";

export default createStore({
  state: {
    clientes: [],
    cabinas: [],
    show_cabina_creada: false,
    show_cabina_ocupada: false,
  },
  getters: {
    clientesAtendidos(state) {
      return state.clientes.filter((cliente) => cliente.atendido == true);
    },
  },
  mutations: {
    agregar_cliente(state, payload) {
      if(state.clientes.filter( cliente => cliente.cabina == payload.cabina && cliente.atendido == false ).length == 0) {
        
        let tiempoDividido = payload.hora_entrada_cliente.split(':')
        let hora = parseInt(tiempoDividido[0])
        let minuto = parseInt(tiempoDividido[1])

        minuto += parseInt(payload.tiempo_contratado)

        if(minuto >= 60) {
          hora += 1
          minuto -= 60
        }
        console.log("Tiempo contratado:", payload.tiempo_contratado)
        console.log("Hora", hora, minuto)


        const data = {
          nombre_cliente: payload.nombre_cliente,
          cabina: payload.cabina,
          hora_entrada_cliente: payload.hora_entrada_cliente,
          hora_salida_cliente: `${hora}:${minuto}`,
          tiempo_contratado: payload.tiempo_contratado,
          precio_cliente: payload.precio_cliente,
          atendido: false,
        };
        state.clientes.push(data);
        state.show_cabina_ocupada = false
      }else {
        state.show_cabina_ocupada = true
      }
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

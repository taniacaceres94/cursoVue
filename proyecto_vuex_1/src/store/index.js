import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 100
  },
  mutations: {
    incrementar(state, payload){
      state.contador = state.contador + payload
    },
    decrementar(state, payload){
      state.contador = state.contador - payload
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar', 10)
    },
    accionDecrementar({commit}, numero){
      commit('decrementar', numero)
    },
    accionBoton({commit}, objeto){
      if (objeto.estado) {
        commit('incrementar', objeto.numero)
      }else{
        commit('decrementar', objeto.numero)
      }
    }
  },
  modules: {
  }
})

/**
 * Las acciones nos permiten ejecutar una mutación. ya que no se recomienda ejecutar una mutación directamente
 * 'commit' ejecuta una mutación
 */

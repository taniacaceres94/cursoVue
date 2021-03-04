import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0
    }
  },
  mutations: {
    cargar(state, payload){
      state.tareas = payload
    },
    set(state, payload){
      state.tareas.push(payload)
      // Guardamos en el localStorage las tareas cada vez que creemos una
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
      // Eliminamos del localStorage la tarea seleccionada
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    tarea(state, payload){
      if (!state.tareas.find(item => item.id == payload)) {
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(item => item.id == payload)
    },
    editar(state, payload){
      /**
       * Buscamos la coincidencia del id, si es que coincide se va a guardar el 'payload' (la tarea
       * con los datos modificados) en el array de tareas, en caso contrario se guarda el 'item'
       * (la tarea sin editar que va leyendo del array)
       */
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/')
      // Guardamos en el localStorage las tareas cada vez que editemos una
      localStorage.setItem('tareas', JSON.stringify(state.tareas))
    }
    
  },
  actions: {
    cargarLocalStorage({commit}){
      if(localStorage.getItem('tareas')){
        const tareitas = JSON.parse(localStorage.getItem('tareas'))
        commit('cargar', tareitas)
        return
      }

      localStorage.setItem('tareas', JSON.stringify([]))
    },
    setTareas({commit}, tarea){
      commit('set', tarea)
    },
    deteleTareas({commit}, id){
      commit('eliminar', id)
    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    updateTarea({commit}, tarea){
      commit('editar', tarea)
    }
  },
  modules: {
  }
})

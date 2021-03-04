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

    },
    eliminar(state, payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)

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
  
    }
    
  },
  actions: {
    async cargarLocalStorage({commit}){
      try{
        const res = await fetch('https://vue-api-5c63c-default-rtdb.europe-west1.firebasedatabase.app/tareas.json')
        const dataDB = await res.json()
        console.log(dataDB)
        const arrayTareas = []

        for (let id in dataDB) {
          arrayTareas.push(dataDB[id])
          
        }
        console.log(arrayTareas)
        commit('cargar', arrayTareas)
      }
      catch (error) {
        console.log(error)
      }
    },
    async setTareas({commit}, tarea){
      try{
        // recibimos la URL donde nosotros estamos haciendo la petición
        const res = await fetch(`https://vue-api-5c63c-default-rtdb.europe-west1.firebasedatabase.app/tareas/${tarea.id}.json`, {
          //recibe un objeto
          method: 'PUT',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(tarea)
        })
        // La respuesta que viene de la BD
        /**
         * Estamos esperando a recibir la data, para almacenarla en 'dataDB'
         */
        const dataBD = await res.json()
        console.log(dataBD)

      }catch(error){
        console.log(error)
      }
      commit('set', tarea)
    },
    async deteleTareas({commit}, id){
      try {
          await fetch(`https://vue-api-5c63c-default-rtdb.europe-west1.firebasedatabase.app/tareas/${id}.json`, {
          method: 'DELETE'
        })
        commit('eliminar', id)

      } catch (error) {
        console.log(error)
      }
      
    },
    setTarea({commit}, id){
      commit('tarea', id)
    },
    async updateTarea({commit}, tarea){
      try{
        const res = await fetch(`https://vue-api-5c63c-default-rtdb.europe-west1.firebasedatabase.app/tareas/${tarea.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify(tarea)
        })
        const dataDB = await res.json()
        commit('editar', dataDB)

      } catch(error) {
        console.log(error)
      }
      
    }
  },
  modules: {
  }
})

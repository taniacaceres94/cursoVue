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
    },
    user: null
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
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
    cerrarSesion({commit}){
      commit('setUser', null)
      router.push('/ingreso')
      /**
         * Eliminamos del localstorage al usuario
         */
       localStorage.removeItem('usuario')
    },
    async ingresoUsuario({commit}, usuario){
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_8xYKe_oh9syOPIbnQi1UIMaAUOhSRK4', {
          method: 'POST',
          body : JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        console.log('userDB', userDB)

        if (userDB.error) {
          return console.log(userDB.error)
        }

        commit('setUser', userDB)
        router.push('/')
        /**
         * Guardamos en localstorage el usuario
         */
        localStorage.setItem('usuario', JSON.stringify(userDB))
        

      } catch (error) {
        
        console.log(error)
      }
    },
    async registrarUsuario({commit}, usuario) {
      console.log(usuario)
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_8xYKe_oh9syOPIbnQi1UIMaAUOhSRK4', {
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        console.log(userDB)
        if (userDB.error) {
          console.log(userDB.error)
          return
        }
        commit('setUser', userDB)
        router.push('/')

        /**
         * Guardamos en localstorage el usuario
         */
         localStorage.setItem('usuario', JSON.stringify(userDB))

      } catch (error) {
        console.log(error)
      }
    },
    async cargarLocalStorage({commit, state}){
      if (localStorage.getItem('usuario')) {
        /**
         * Si existe la info del usuario la llenamos en setUser
         */
        commit('setUser', JSON.parse(localStorage.getItem('usuario')))
      }else{
        return commit('setUser', null)
      }
      /**
       * Solo en caso de que el usuario exista, se hace la petición a la BD
       */
      try{
        const res = await fetch(`https://vue-api-5c63c-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)
        const dataDB = await res.json()
        const arrayTareas = []

        for (let id in dataDB) {
          arrayTareas.push(dataDB[id])
          
        }
        commit('cargar', arrayTareas)
      }
      catch (error) {
        console.log(error)
      }
    },
    async setTareas({commit, state}, tarea){
      try{
        // recibimos la URL donde nosotros estamos haciendo la petición
        const res = await fetch(`https://vue-api-5c63c-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
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
    async deteleTareas({commit, state}, id){
      try {
          await fetch(`https://vue-api-5c63c-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
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
    async updateTarea({commit, state}, tarea){
      try{
        const res = await fetch(`https://vue-api-5c63c-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
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
  /**
   * Getters: nos sirven para retornar información del state que podriamos utilizar en las vistas.
   * Se puede utilizar el mismo state en las vistas, pero es recomendable usar los 'getters'
   */
  getters : {
    usuarioAutenticado(state){
      return !!state.user
      /**
       * !!: si el usuario existe nos retorna un true, si no existe nos retorna un false
       */
    }
  },
  modules: {
  }
})

<template>
  <div>
      <h1 class="my-5">Ingreso de usuarios</h1>
      <form @submit.prevent="procesarFormulario">
          <input
            class="form-control my-2"
            type="email"
            placeholder="email"
            v-model.trim="email">
          <input 
           class="form-control my-2" 
           type="password" 
           placeholder="password"
           v-model.trim="pass1">
          <button class="btn btn-primary" type="submit" :disabled="bloquear">Ingresar</button>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            email: '',
            pass1: ''
        }
    },
    computed: {
        bloquear(){
            if (!this.email.includes('@')) {
                return true
            }
            if (this.pass1.length > 5) {
                return false
            }

            return true
        }
    },
    methods: {
        ...mapActions(['ingresoUsuario']),
        procesarFormulario(){
            this.ingresoUsuario({email: this.email, password: this.pass1})
            this.email = ''
            this.pass1 = ''
        }
    }
}
</script>


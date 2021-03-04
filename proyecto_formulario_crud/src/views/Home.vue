<template>
  <div>
    <form @submit.prevent="procesarFormulario">
      <Input :tarea="tarea"/>
    </form>
  
    <ListaTareas/>
  </div>
</template>

<script>
// Imports //
import Input from '../components/Input'
import ListaTareas from '../components/ListaTareas'
import { mapActions } from 'vuex'
const shortid = require('shortid')

export default {
  name: 'Home',
  components: {
    Input, ListaTareas
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0,
      }
    }
  },
  methods:{
    ...mapActions(['setTareas']),
    procesarFormulario(){
      if (this.tarea.nombre.trim() === '') {
        return
      }

      // Generar id
      this.tarea.id = shortid.generate()
      

      // Enviar los datos
      this.setTareas(this.tarea)

      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0,
      }
    }
  }

}
</script>

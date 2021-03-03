<template>
  <form @submit.prevent="procesarFormulario">
    <!-- Text -->
    <input
     type="text"
     class="form-control m-2"
     placeholder="Ingrese nombre"
     v-model.trim="tarea.nombre"
    >

  <!-- Checkbox -->
    <div class="form-check form-check-inline">
      <input
       type="checkbox"
       id="check-1"
       class="form-check-input"
       v-model="tarea.categorias"
       value="Javascript">  
       <label for="check-1" class="form-check-label">Javascript</label>    
    </div>

    <div class="form-check form-check-inline">
      <input
       type="checkbox"
       id="check-2"
       class="form-check-input"
       v-model="tarea.categorias"
       value="Node js">  
       <label for="check-2" class="form-check-label">Node js</label>    
    </div>
    <!-- Radio -->
    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input 
        type="radio" 
        id="radio-1"
        class="form-check-input"
        value="urgente"
        v-model="tarea.estado">
        <label for="radio-1" class="form-check-label">Urgente</label>
      </div>

      <div class="form-check form-check-inline">
        <input 
        type="radio" 
        id="radio-2"
        class="form-check-input"
        value="relax"
        v-model="tarea.estado">
        <label for="radio-2" class="form-check-label">Relax</label>
      </div>
    </div>

    <!-- Number -->
    <div class="mt-2">
      <input 
        type="number"
        class="form-control"
        v-model.number="tarea.numero">

    </div>

    <button type="submit" :disabled="bloquear" class="btn btn-dark mt-2 btn-block">Procesar</button>

  </form>
  <p>{{ tarea }}</p>
</template>

<script>


export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      tarea: {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0,
      }
    }
  },
  methods:{
    procesarFormulario(){
      console.log(this.tarea)
      if (this.tarea.nombre.trim() === '') {
        console.log('Campo vacio')
        return
      }
      console.log('No esta vacio')
      // Enviar los datos

      this.tarea = {
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0,
      }
    }
  },
  computed: {
    bloquear(){
      return this.tarea.nombre.trim() === '' ? true : false 
    }
  }

}
</script>

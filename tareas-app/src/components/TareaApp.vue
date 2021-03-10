<template>
  <div>
    <h1>App tareas</h1>
    <TareaForm />
    <TareaItem 
        v-for="tarea in tareas"
        :key="tarea.id"
        :tarea="tarea"
    />

    <div v-if="tareas.length === 0" class="alert alert-dark mt-3">Sin tareas pendientes 😍</div>
    {{ tareas }}
  </div>
</template>

<script>
import { provide, ref, watchEffect } from 'vue'
import TareaForm from './TareaForm.vue'
import TareaItem from './TareaItem.vue'
export default {
    components:{
        TareaForm, TareaItem
    },
    setup(){
        const tareas = ref([])

/**
 * Leemos las tareas
 */
        provide('tareas', tareas)
        if (localStorage.getItem('tareas')) {
            /**
             * Si existe, empujamos las tareas dentro de nuestra ref
             */

            tareas.value = JSON.parse(localStorage.getItem('tareas'))
        }

        /**
         * watchEffect se ejecuta solo una vez
         */
        watchEffect(() => {
            /**
             * Captura los cambios que se realizan con lo relacionado dentro de éste
             */
            localStorage.setItem('tareas', JSON.stringify(tareas.value))

        })

        return { tareas }
    }
}
</script>

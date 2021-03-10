<template>
  <h2>Contador: {{ contador }}</h2>
</template>

<script>
import { inject } from 'vue'
export default {
    setup(){
        /**
         * Acceder al contador
         * 'inject' para llamar al provide
         */
        const contador = inject('contadorcito')

        return { contador }
    }
}
</script>

<style>

</style>
<template>
 <div>
    <h1>Detalle: {{ $route.params.nombre }}</h1>
    <p v-for="(pais, index) in arrayData" :key="index">
      {{ pais.name }} - {{ pais.region }}
    </p>

 </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useFetch } from '../hooks/useFetch'
export default {
    props: ['nombre'],
    setup(props){
        /**
         * Opción 1
         */
        console.log(props.nombre)
        /**
         * Opción 2
         */
        const nombreParams = useRoute()
        console.log(nombreParams.params.nombre)

        /**
         * Con hooks
         */
        const { arrayData } = useFetch(`https://restcountries.eu/rest/v2/name/${nombreParams.params.nombre}`)
        return arrayData
    }
}
</script>

<style>

</style>
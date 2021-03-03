<template>
  <Titulo texto ="Ruta con parámetros"/>
  <h2>Parámetro: {{ $route.params.id }}</h2>
  <h3>{{ articulo.title }}</h3>
  <p>{{ articulo.body }}</p>
</template>

<script>

import Titulo from '../components/Titulo'

export default {
    components: {
      Titulo
    }, 
    data() {
        return {
            articulo: {}
        }
    },
    methods: {
        async consumirApiParam() {
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                const objeto =  await data.json()
                this.articulo = objeto
                console.log(objeto)
            }   
            catch (error){
                console.log(error)
            }
        }
    },
    created() {
        this.consumirApiParam()
    }
}
</script>

<style>

</style>
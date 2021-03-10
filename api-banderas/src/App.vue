<template>
<div class="container">
  <h1>Paises API</h1>
  <Continentes />
  <Buscador />
  <CardList/>

</div>
</template>

<script>
import CardList from './components/CardList'
import Continentes from './components/Continentes.vue'
import Buscador from './components/Buscador.vue'
export default {
  name: 'App',
  components: {
    CardList,
    Continentes,
    Buscador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

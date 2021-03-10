<template>
  <div>
    <h1>Contador: {{ contador }}</h1>
    <Contador1 />
    <ContadorAccion />
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import Contador1 from './components/Contador1'
import ContadorAccion from './components/ContadorAccion'
export default {
  name: 'App',
  components: {
    Contador1, ContadorAccion
  },
  setup(){
    const contador = ref(0)
  /**
   * Para que el componente secundario acceda al contador utilizamos 'provide'
   */
    provide('contadorcito', contador)

    return { contador }
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

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Titulo texto ="Título de mi home"/>
  </div>
</template>

<script>
  import Titulo from '../components/Titulo'

  export default {
    name: 'Home',
    components: {
      Titulo
    }
  }
</script>

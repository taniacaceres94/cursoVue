<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      fecha: new Date().toISOString().substr(0,10)
    }
  },
  methods: {
    async getDolar(dia){

      let datos = await axios.get(`https://mindicador.cl/api/dolar/${dia}`)
      console.log(datos.data.serie[0].valor)
    }
  },
  created(){
    this.getDolar('01-02-2019')
  }
}
</script>

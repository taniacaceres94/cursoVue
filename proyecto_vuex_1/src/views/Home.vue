<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <h1
      :style="[contador > 100 ? {'color': 'green'} : {'color': 'red'}]"
    >Mi contador: {{ contador }}</h1>
  </div> -->
  <h1
      :style="colorContador"
    >{{ titulo }}: {{ contador }}
  </h1>

  <!-- <button @click="incrementar">Incrementar</button> -->
  <button @click="accionIncrementar">Incrementar</button>
  <BtnDisminuir/>
  <hr>
  <BtnAccion :estado="true"/>
  <BtnAccion :estado="false"/>
  </div>
</template>

<script>
// Imports //
import { mapState, mapMutations, mapActions } from 'vuex'
import BtnDisminuir from '../components/BtnDisminuir'
import BtnAccion from '../components/BtnAccion'

export default {
  name: 'Home',
  components: {
    BtnDisminuir,
    BtnAccion
  },
  data() {
    return {
      titulo: 'Mi contador Vuex'
    }
  },
  computed: {
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? {'color': 'green'} : {'color': 'red'}]

    }
  },
  methods: {
    ...mapMutations(['incrementar']),
    ...mapActions(['accionIncrementar'])
  }
}

/*
  El state (store/index.js) siempre lo vamos a mapear en las propiedades computadas (computed)
  Lo mapeamos con '...' porque lo estamos utilizando el operador de propagador de js

  Los mapMutations se mapean en los methods
*/
</script>

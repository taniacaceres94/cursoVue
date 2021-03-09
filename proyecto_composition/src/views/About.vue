<template>
  <div class="about">
    <Titulo2 :contador="contador" :color="color"/>
    <h1 :style="{'color': color}">Contador: {{ contador }}</h1>
    <!-- <button @click="aumentar">+</button>
    <button @click="disminuir">-</button> -->
    <Btn :texto ="'Aumentar'" @accion="aumentar"/>
    <Btn :texto ="'Disminuir'" @accion="disminuir"/>
  <hr>
    <input type="text" v-model="texto">
    <p>{{ texto }}</p>

  </div>
</template>

<script>
import { computed, ref } from 'vue'
import Titulo2 from '../components/Titulo2'
import Btn from '../components/Btn'
export default {
  components: {
    Titulo2, Btn
  },
  setup(){
    const contador = ref(0)
    const texto = ref('')

    const aumentar = () => {
      contador.value ++
    }

    const disminuir = () => {
      contador.value --
    }

    const color = computed(() => {
      if (contador.value < 0) {
        return 'red'
      }else{
        return 'blue'
      }
    })

    

    return {contador, aumentar, disminuir, color, texto}
  }
}
</script>

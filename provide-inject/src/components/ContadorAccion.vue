<template>
  <div>
    <button @click="contador ++">Aumentar</button>
    <button @click="disminuir">Disminuir</button>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
    setup(){
        const contador = inject('contadorcito')

        const disminuir = () => {
            return contador.value --
        }

        return { contador, disminuir }
    }
}
</script>

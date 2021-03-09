<template>
  <div>
      <h1>Contador: {{ contador }}</h1>
      <Btn :texto="'Aumentar'" @accion="aumentar" />
      <Btn :texto="'Disminuir'" @accion="disminuir" />
  </div>
</template>

<script>
import { useContador } from '../hooks/useContador'
import Btn from '../components/Btn'

export default {
    components: {
        Btn
    },
    setup(){
        /**
         * Opción 1
         */
        // const { contador, aumentar, disminuir } = useContador()
        /**
         * Opción 2
         */
        return { ...useContador()}
    }
}
</script>

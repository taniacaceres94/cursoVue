<template>
  <button
  @click="accionBoton({estado: estado, numero: 10})">
  {{ textoBotton }}</button>
</template>

<script>
// imports //
import { mapActions } from 'vuex'
export default {
    props: {
        estado: Boolean
    },
    computed:{
        textoBotton(){
            return this.estado ? 'Aumentar' : 'Disminuir'
        }
    },
    methods:{
        ...mapActions(['accionBoton'])
    }
}
</script>

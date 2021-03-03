<template>
  <button @click="accionDecrementar(50)">Decrementar</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
    ...mapActions(['accionDecrementar'])
  }
}
</script>

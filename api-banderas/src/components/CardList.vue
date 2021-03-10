<template>
  <div class="row">
     
      <div v-for="pais in paises" :key="pais.name" class="col-12">
          <Card :pais="pais"/>
      </div>
     
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from './Card'
export default {
    components: {
        Card
    },
    setup(){
        const store = useStore()

        const paises = computed(() => {
            console.log(store.state.paises)
            return store.getters.topPaisesPoblacion
            
        })

        
        onMounted(async() => {
            /**
             * 'dispatch' ejecuta una acción del store
             */
            await store.dispatch('getPaises')
            await store.dispatch('filtrarRegion', 'Americas')
        })

        return { paises }
    }
}
</script>

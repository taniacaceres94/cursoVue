<template>
  <p
  :style="{'color': color}"
  >Contador: {{ signoPeso}}</p>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['contador', 'color'],
    setup(props){
        const signoPeso = computed(() => {
            return '$' + props.contador
        })
        return { signoPeso }
    }
    
}
</script>
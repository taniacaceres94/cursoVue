<template>
  <button @click="accionAumentar"> {{ texto }}</button>
</template>

<script>
export default {
    props: ['texto'],
    setup(props, context){
        const accionAumentar = () => {
            context.emit('accion')
        }

        return { accionAumentar }
    }

}
</script>
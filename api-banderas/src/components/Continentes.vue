<template>
    <div>
        <h3>Filtrar por continente</h3>
        <div class="btn-group">
            <button @click="ejecutarBtnFilter('Americas')" class="btn btn-dark">AM</button>
            <button @click="ejecutarBtnFilter('Europe')" class="btn btn-dark">EU</button>
            <button @click="ejecutarBtnFilter('Asia')" class="btn btn-dark">AS</button>
            <button @click="ejecutarBtnFilter('Oceania')" class="btn btn-dark">OC</button>
            <button @click="ejecutarBtnFilter('Africa')" class="btn btn-dark">AF</button>
            <button @click="ejecutarBtnFilter('')" class="btn btn-dark">ALL</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    setup(){
        const store = useStore()

        const ejecutarBtnFilter = (region) => {
            return store.dispatch('filtrarRegion', region)
        }


        return { ejecutarBtnFilter }
    }
}
</script>

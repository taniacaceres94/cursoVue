<template>
  <div>
      <h1>Listado de paises</h1>
      <p v-for="(item, index) in arrayData" :key="index">
          
          <router-link :to="`/paises/${ item.name }`">{{ item.name }}</router-link>
      </p>
  </div>
</template>

<script>
import { useFetch } from '../hooks/useFetch'
export default {
    setup(){
        return {...useFetch('https://restcountries.eu/rest/v2/all')}
    }
}
</script>
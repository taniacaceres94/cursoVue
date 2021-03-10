<template>
    <div>
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card">
                <h5 class="card-title">{{pais.name}}</h5>
                    <img :src="pais.flag" alt="" class="img-fluid w-50">
                <p class="card-text">
                    <span class="badge bg-dark mb-1">{{numeroFormato(pais.population)}}</span>
                    <span class="badge bg-dark mb-1">{{ pais.capital}}</span>
                    <span class="badge bg-dark mb-1">{{ pais.nativeName}}</span>
                    <span class="badge bg-dark mb-1">{{ pais.region}}</span>
                </p>
                
            </div>
    </div>
</template>

<script>

export default {
    props: ['pais'],
    setup(){
        const numeroFormato = ( num ) => {
            return new Intl.NumberFormat('es-ES').format(num)
        }


        

        return { numeroFormato}
    }
}
</script>

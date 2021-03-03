<template>
    <h2>Tipo de cuenta: {{cuenta}}</h2>
    <h2>Saldo: {{saldo}}</h2>
    <h2>Cuenta {{ estado ? 'Activar' : 'Desactivada' }}</h2>
    <div v-for="(servicio, index) in servicios" :key="index">
        {{index + 1}} - {{ servicio }}
    </div>
    <AccionSaldo 
        texto="Aumentar Saldo" 
        @accion="aumentar"
    />
    <AccionSaldo 
        texto="Disminuir Saldo" 
        @accion="disminuir"
        :desactivar="desactivar"
    />
</template>

<script>
import AccionSaldo from './AccionSaldo'

export default {
    components: {
        AccionSaldo
    },
    data() {
        return {
            saldo: 1000,
            cuenta: 'Visa',
            estado: true,
            servicios: ['giro', 'abono', 'transferencia'],
            desactivar: false
        }
    },
    methods: {
        aumentar() {
            this.saldo = this.saldo + 100
            this.desactivar = false
        },
        disminuir() {
            if(this.saldo === 0){
                this.desactivar = true
                alert('Saldo Agotado')
            }else {
                this.saldo = this.saldo - 100
            }
        }
    }
}
</script>

<style>

</style>
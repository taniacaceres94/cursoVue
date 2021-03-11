import axios from 'axios';
<template>
  <div class="container">
      <h1>Notas</h1>
        <form @submit.prevent="agregarNota()">
            <input type="text" placeholder="titulo" v-model="nota.nombre">
            <input type="text" placeholder="descripcion" v-model="nota.descripcion">
            <button type="submit">Agregar</button>
        </form>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
    datad(){
        return {
            notas: [],
            nota: {
                nombre: '',
                descripcion: ''
            }
        }
    },
    created(){
        /**
         * Cuando carga nuestra vista se ejecuta lo que hay dentro de 'created'
         */
        this.listarNotas()
    },
    methods:{
        listarNotas(){
            this.axios.get('/nota')
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
        },
        agregarNota(){
            this.axios.post('/nueva-nota', this.nota)
            .then(res => {
                this.notas.push(res.data)
                this.nota.nombre = ''
                this.nota.descripcion = ''
            })
            .catch(e => {
                console.log(e.response)
            })
        },
        eliminarNota(id){
            this.axios.delete(`/nota/${id}`)
            .then(res => {
                /**
                 * Se almacena en 'index' el indice que coincida con el indice de la respuesta y un indice del 
                 * array 'notas'
                 */
                const index = this.notas.findIndex(item => item._id === res.data_id)
                this.notas.splice(index, 1)
            })
        }
    }
}
</script>

<style>

</style>
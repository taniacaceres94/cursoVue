import { mapState } from 'vuex';
<template>
    {{ tareas }}
    <table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Categorías</th>
        <th scope="col">Estado</th>
        <th scope="col">Número</th>
        <th scope="col">Acción</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in tareas" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.nombre }}</td>
            <td>
                <span v-for="(categoria, index) in item.categorias" :key="index">
                    {{ categoria }}
                    {{
                        item.categorias.length === index + 1 ? '' : ', '
                    }}
                </span>
            </td>
            <td>{{ item.estado }}</td>
            <td>{{ item.numero }}</td>
            <td>
                <button @click="deteleTareas(item.id)" class="btn btn-danger">Eliminar</button>
                <router-link class="btn btn-warning"
                    :to="{
                        name: 'Editar',
                        params: {
                            id: item.id
                        }
                    }"
                >
                    Editar
                </router-link>
            </td>
        </tr>
    </tbody>
    </table>
</template>

<script>
// imports //
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['deteleTareas'])
    }

}
</script>

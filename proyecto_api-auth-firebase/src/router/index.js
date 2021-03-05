import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import { nextTick } from '@vue/runtime-core'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { rutaProtegida: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import('../views/Editar.vue'),
    meta: { rutaProtegida: true }
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    component: () => import('../views/Ingreso.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  /**
   * Todas las rutas que estén protegidas, van a mandar un true
   */
  console.log(to.meta.rutaProtegida)
  if (to.meta.rutaProtegida) {
    /**
     * Importamos el store para sacar el  getter de 'usuarioAutenticado', si eso nos da true, es que
     * esta autenticado por lo tsnto vamos a visualizar la vista (next()), en caso contrario lo redirigimos a 
     * la ruta /ingreso
     */

    if (store.getters.usuarioAutenticado) {
      next()
    }else{
      next('/ingreso')
    }
  }else{
    next()
  }
})

export default router

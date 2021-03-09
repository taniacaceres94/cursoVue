import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contador',
    name: 'Contador',
    component: () => import('../views/Contador.vue')
  },
  {
    path: '/paises',
    name: 'Paises',
    component: () => import('../views/Paises.vue')
  },
  {
    path: '/paises/:nombre',
    name: 'Pais',
    props:true,
    component: () => import('../views/Pais.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/perfil',
    name: 'Perfil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Perfil.vue')
  },
  {
    path: '/quemSomos',
    name: 'QuemSomos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/QuemSomos.vue')
  },
  {
    path: '/contato',
    name: 'Contato',
    component:()=> import ('../views/Contato.vue')
  },
  {
    path: '/doacoes',
    name: 'Doacoes',
    component:()=> import ('../views/Doacoes.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component:()=> import ('../views/FAQ.vue')
  },
  {
    path: '/sair',
    name: 'Sair',
    component:()=> import ('../views/Sair.vue')
  },

  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

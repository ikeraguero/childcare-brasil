import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/perfil',
        name: 'Perfil',
        component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue')
      },
      {
        path: '/quemsomos',
        name: 'Quem Somos',
        component: () => import(/* webpackChunkName: "quemsomos" */ '../views/QuemSomos.vue')
      },
      {
        path: '/contato',
        name: 'Contato',
        component: () => import(/* webpackChunkName: "contato" */ '../views/Contato.vue')
      },
      {
        path: '/comodoar',
        name: 'comoDoar',
        component: () => import(/* webpackChunkName: "comodoar" */ '../views/comoDoar.vue')
      },
      {
        path: '/ajudarcriancas',
        name: 'AjudarCriancas',
        component: () => import(/* webpackChunkName: "doacoes" */ '../views/AjudarCriancas.vue')
      },
      {
        path: '/ajudarescolas',
        name: 'AjudarEscolas',
        component: () => import(/* webpackChunkName: "doacoes" */ '../views/AjudarEscolas.vue')
      },
      {
        path: '/faq',
        name: 'FAQ',
        component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue')
      },
      
      {
        path: '/formulario',
        name: 'Formulario',
        component: () => import(/* webpackChunkName: "faq" */ '../views/Formulario.vue')
      },
      
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Blank'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
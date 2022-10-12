import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { authGuard } from "../auth/authGuard"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default'),
    children: [
      {
        path: '/testpage',
        name: 'Area for tests',
        component: () => import('../views/TestView.vue')
      },
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/perfil',
        name: 'Profile',
        beforeEnter: authGuard,
        component: () => import('../views/Perfil.vue')
      },
      {
        path: '/contato',
        name: 'Contact',
        component: () => import('../views/Contato.vue')
      },
      {
        path: '/comodoar',
        name: 'How to Donate',
        component: () => import('../views/comoDoar.vue')
      },
      {
        path: '/criancas',
        name: 'Children',
        beforeEnter: authGuard,
        component: () => import('../views/AjudarCriancas.vue')
      },
      {
        path: '/escolas',
        name: 'Schools',
        beforeEnter: authGuard,
        component: () => import('../views/AjudarEscolas.vue')
      },
      {
        path: '/adminn',
        name: 'Controll Panel',
        beforeEnter: authGuard,
        component: () => import('../views/ControlPanel.vue')
      },
      {
        path: 'adminn/criancas',
        name: 'Children Controll Panel',
        beforeEnter: authGuard,
        component: () => import('../views/ControlPanelChild.vue')
      },
      {
        path: 'adminn/criancas/adicionar',
        name: 'AddChildren',
        beforeEnter: authGuard,
        component: () => import('../views/FormChild.vue')
      },
      {
        path: 'adminn/escolas',
        name: 'Schools Controll Panel',
        beforeEnter: authGuard,
        component: () => import('../views/ControlPanelSchool.vue')
      },
      {
        path: 'adminn/escolas/adicionar',
        name: 'AddSchools',
        beforeEnter: authGuard,
        component: () => import('../views/FormSchool.vue')
      },
      {
        path: "criancas/doar/:id/",
        name: 'DonateChild',
        beforeEnter: authGuard,
        component: () => import('../views/ChildDonationPage.vue')
      },
    {
      path: "escolas/doar/:id/",
        name: 'DonateSchool',
        beforeEnter: authGuard,
        component: () => import('../views/SchoolDonationPage.vue')
      },
      {
      path: "adminn/doacoes",
      name: 'Donations',
      beforeEnter: authGuard,
      component: () => import('../views/Donations.vue')
      
      },
      {
        path: "/success",
        name: 'Success',

        component: () => import('../views/Success.vue')
        
        },
        {
          path: "/error",
          name: 'Error',

          component: () => import('../views/Error.vue')
          
          },
          {
            path: "criancas/doar/:id/sucesso",
            name: 'SuccessMaterials',
            beforeEnter: authGuard,
            component: () => import('../views/SuccessMaterials.vue')
            
            },
      
    ]
  },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router 

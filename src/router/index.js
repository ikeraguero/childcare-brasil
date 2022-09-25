import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { authenticationGuard } from '@/auth/authenticationGuard';


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
        name: 'Profile',
        beforeEnter: authenticationGuard,
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
        beforeEnter: authenticationGuard,
        component: () => import('../views/AjudarCriancas.vue')
      },
      {
        path: '/escolas',
        name: 'Schools',
        beforeEnter: authenticationGuard,
        component: () => import('../views/AjudarEscolas.vue')
      },
      {
        path: '/adminn',
        name: 'Controll Panel',
        beforeEnter: authenticationGuard,
        component: () => import('../views/ControlPanel.vue')
      },
      {
        path: 'adminn/criancas',
        name: 'Children Controll Panel',
        beforeEnter: authenticationGuard,
        component: () => import('../views/ControlPanelChild.vue')
      },
      {
        path: 'adminn/criancas/adicionar',
        name: 'AddChildren',
        beforeEnter: authenticationGuard,
        component: () => import('../views/FormChild.vue')
      },
      {
        path: 'adminn/escolas',
        name: 'Schools Controll Panel',
        beforeEnter: authenticationGuard,
        component: () => import('../views/ControlPanelSchool.vue')
      },
      {
        path: 'adminn/escolas/adicionar',
        name: 'AddSchools',
        beforeEnter: authenticationGuard,
        component: () => import('../views/FormSchool.vue')
      },
      {
        path: "criancas/doar/:id",
        name: 'DonateChild',
        beforeEnter: authenticationGuard,
        component: () => import('../views/ChildDonateForm.vue')
      },
    {
      path: "escolas/doar/:id",
        name: 'DonateSchool',
        beforeEnter: authenticationGuard,
        component: () => import('../views/SchoolDonateForm.vue')
      },
      {
      path: "adminn/doacoes",
      name: 'Donations',
      beforeEnter: authenticationGuard,
      component: () => import('../views/Donations.vue')
      
      },
      {
        path: "/success",
        name: 'Success',
        beforeEnter: authenticationGuard,
        component: () => import('../views/Success.vue')
        
        },
        {
          path: "/error",
          name: 'Error',
          beforeEnter: authenticationGuard,
          component: () => import('../views/Error.vue')
          
          },
          {
            path: "criancas/doar/:id/sucesso",
            name: 'SuccessMaterials',
            beforeEnter: authenticationGuard,
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

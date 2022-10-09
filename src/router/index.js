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
        name: 'Profile',
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
        component: () => import('../views/AjudarCriancas.vue')
      },
      {
        path: '/escolas',
        name: 'Schools',
        component: () => import('../views/AjudarEscolas.vue')
      },
      {
        path: '/adminn',
        name: 'Controll Panel',
        component: () => import('../views/ControlPanel.vue')
      },
      {
        path: 'adminn/criancas',
        name: 'Children Controll Panel',
        component: () => import('../views/ControlPanelChild.vue')
      },
      {
        path: 'adminn/criancas/adicionar',
        name: 'AddChildren',
        component: () => import('../views/FormChild.vue')
      },
      {
        path: 'adminn/escolas',
        name: 'Schools Controll Panel',
        component: () => import('../views/ControlPanelSchool.vue')
      },
      {
        path: 'adminn/escolas/adicionar',
        name: 'AddSchools',
        component: () => import('../views/FormSchool.vue')
      },
      {
        path: "criancas/doar/:id/",
        name: 'DonateChild',
        component: () => import('../views/ChildDonationPage.vue')
      },
    {
      path: "escolas/doar/:id/",
        name: 'DonateSchool',
        component: () => import('../views/SchoolDonationPage.vue')
      },
      {
      path: "adminn/doacoes",
      name: 'Donations',

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

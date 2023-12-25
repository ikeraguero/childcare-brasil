import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default"),
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/perfil",
        name: "Profile",
        beforeEnter: authGuard,
        component: () => import("../views/Profile.vue"),
      },
      {
        path: "/contato",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
      },
      {
        path: "/comodoar",
        name: "How to Donate",
        component: () => import("../views/HowToDonate.vue"),
      },
      {
        path: "/criancas",
        name: "Children",

        component: () => import("../views/HelpChildren.vue"),
      },
      {
        path: "/escolas",
        name: "Schools",

        component: () => import("../views/HelpSchools.vue"),
      },
      {
        path: "/adminn",
        name: "Controll Panel",
        beforeEnter: authGuard,
        component: () => import("../views/ControlPanel.vue"),
      },
      {
        path: "adminn/criancas",
        name: "Children Controll Panel",
        beforeEnter: authGuard,
        component: () => import("../views/ControlPanelChild.vue"),
      },
      {
        path: "adminn/criancas/adicionar",
        name: "AddChildren",
        beforeEnter: authGuard,
        component: () => import("../views/FormChild.vue"),
      },
      {
        path: "adminn/escolas",
        name: "Schools Controll Panel",
        beforeEnter: authGuard,
        component: () => import("../views/ControlPanelSchool.vue"),
      },
      {
        path: "adminn/escolas/adicionar",
        name: "AddSchools",
        beforeEnter: authGuard,
        component: () => import("../views/FormSchool.vue"),
      },
      {
        path: "criancas/doar/:id/",
        name: "DonateChild",
        component: () => import("../views/ChildDonationPage.vue"),
      },
      {
        path: "escolas/doar/:id/",
        name: "DonateSchool",

        component: () => import("../views/SchoolDonationPage.vue"),
      },
      {
        path: "adminn/doacoes",
        name: "Donations",
        beforeEnter: authGuard,
        component: () => import("../views/Donations.vue"),
      },
      {
        path: "/success",
        name: "Success",

        component: () => import("../views/Success.vue"),
      },
      {
        path: "criancas/doar/:id/sucesso",
        name: "SuccessMaterials",
        beforeEnter: authGuard,
        component: () => import("../views/SuccessMaterials.vue"),
      },
      {
        path: "/adminn/criancas/:id",
        name: "UpdateChild",
        beforeEnter: authGuard,
        component: () => import("../views/UpdateChild.vue"),
      },
      {
        path: "/adminn/escolas/:id",
        name: "UpdateSchool",
        beforeEnter: authGuard,
        component: () => import("../views/UpdateSchool.vue"),
      },
      {
        path: "/adminn/doacoes/:id",
        name: "UpdateDonation",
        beforeEnter: authGuard,
        component: () => import("../views/UpdateDonation.vue"),
      },
      {
        path: "/criancas/perfil/:id",
        name: "Child Info",
        beforeEnter: authGuard,
        component: () => import("../views/ChildInfo.vue"),
      },
      {
        path: "/escolas/perfil/:id",
        name: "School Info",
        beforeEnter: authGuard,
        component: () => import("../views/SchoolInfo.vue"),
      },
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

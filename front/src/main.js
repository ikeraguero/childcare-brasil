import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './index.css'

// Import the Auth0 configuration
import { domain, clientId, audience } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
})


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


Vue.component('ChildrenCards', require('./components/ChildrenCards.vue').default);
Vue.component('SchoolCards', require('./components/SchoolCards.vue').default);
Vue.component('DonationCards', require('./components/DonationCards.vue').default);
Vue.component('ChildrenDonationForm', require('./components/ChildrenDonationForm.vue').default);
Vue.component('SchoolsDonationForm', require('./components/SchoolsDonationForm.vue').default);
Vue.component('EditFormChildren', require('./components/EditFormChildren.vue').default);
Vue.component('EditFormSchool', require('./components/EditFormSchool.vue').default);
Vue.component('EditDonations', require('./components/EditDonations.vue').default);

import axios from "axios";
import VueAxios from "vue-axios";
import './assets/tailwind.css'

App.use(VueAxios, axios);
App.mount("#app");
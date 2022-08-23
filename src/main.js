import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './plugins/firebase'
import './index.css'


// Import the Auth0 configuration and plugin
import { domain, clientId, audience } from '../auth_config.json';
import { Auth0Plugin } from '@/auth/auth0-plugin';

// Install the authentication plugin
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});



Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


Vue.component('ChildrenCards', require('./components/ChildrenCards.vue').default);
Vue.component('SchoolCards', require('./components/SchoolCards.vue').default);
Vue.component('DonationCards', require('./components/DonationCards.vue').default);

import axios from "axios";
import VueAxios from "vue-axios";
import './assets/tailwind.css'

App.use(VueAxios, axios);
App.mount("#app");
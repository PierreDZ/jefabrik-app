import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { domain, clientId } from "../auth_config.json";
import { Auth0Plugin } from "./auth";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.use(VueToast);

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
});

Vue.prototype.$http = instance;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
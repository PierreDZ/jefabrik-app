import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from './store'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  Vuex,
  store,
  render: h => h(App)
}).$mount('#app')
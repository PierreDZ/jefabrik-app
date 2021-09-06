import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Tracking from '../views/Tracking.vue'
import Integration from '../views/Integration.vue'
import Personalization from '../views/Personalization.vue'
import Login from '../views/Login.vue'
import { authGuard } from "../auth/authGuard"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: authGuard
  },
  {
    path: '/Tracking',
    name: 'Tracking',
    component: Tracking,
    beforeEnter: authGuard
  },
  {
    path: '/Integration',
    name: 'Integration',
    component: Integration,
    beforeEnter: authGuard
  },
  {
    path: '/Personalization',
    name: 'Personalization',
    component: Personalization,
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

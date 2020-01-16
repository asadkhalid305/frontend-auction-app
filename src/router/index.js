import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/authentication/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/authentication/Register.vue')
  },
  {
    path: '/home/',
    name: 'home',
    component: () => import('../views/Home')
  }
]

const router = new VueRouter({
  routes
})

export default router
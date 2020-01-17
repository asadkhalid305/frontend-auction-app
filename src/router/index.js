import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Auth/Register.vue')
  },
  {
    path: '/recovery',
    name: 'Recovery',
    component: () => import('../views/Recovery'),
    children: [{
      path: 'token-generate',
      name: 'tokenGenerate',
      component: () => import('../views/Recovery/TokenGenerate.vue'),
    }, {
      path: 'token-verify',
      name: 'tokenVerify',
      component: () => import('../views/Recovery/TokenVerify.vue'),
    }, {
      path: 'set-password',
      name: 'setPassword',
      component: () => import('../views/Recovery/SetPassword.vue'),
    }]
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
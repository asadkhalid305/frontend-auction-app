import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/Register.vue')
  },
  {
    path: '/recovery',
    name: 'recovery',
    component: () => import('../views/recovery'),
    children: [{
      path: 'token-generate',
      name: 'tokenGenerate',
      component: () => import('../views/recovery/TokenGenerate.vue'),
    }, {
      path: 'token-verify',
      name: 'tokenVerify',
      component: () => import('../views/recovery/TokenVerify.vue'),
    }, {
      path: 'set-password',
      name: 'setPassword',
      component: () => import('../views/recovery/SetPassword.vue'),
    }]
  },
  {
    path: '/bidding-app',
    name: 'bidding-app',
    component: () => import('../views/home/application/CardProduct/List.vue'),
  },
  {
    path: '/home/',
    name: 'home',
    component: () => import('../views/home'),
    children: [{
        path: 'dashboard/',
        component: () => import('../views/home/dashboard'),
      },
      {
        path: 'application/',
        component: () => import('../views/home/application'),
        children: [{
            path: '',
            name: 'listApp',
            component: () => import('../views/home/application/CardApp/List.vue')
          },
          {
            path: 'add',
            name: 'addApp',
            component: () => import('../views/home/application/CardApp/Add.vue')
          },
          {
            path: 'append-users',
            name: 'appendUsers',
            component: () => import('../views/home/application/CardApp/Actions/AppendUsers.vue')
          },
          {
            path: 'append-products',
            name: 'appendProducts',
            component: () => import('../views/home/application/CardApp/Actions/AppendProducts.vue')
          },
          {
            path: 'view-products',
            name: 'viewProduct',
            component: () => import('../views/home/application/CardProduct/List.vue')
          },
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
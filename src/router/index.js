import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/init',
    name: 'init',
    component: () => import('@/views/init/index.vue')
  },
  {
    path: 'login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/login/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    meta: {
      closeTab: true,
    },
    component: () => import('@/view/error/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
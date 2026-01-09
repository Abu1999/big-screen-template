import { createRouter, createWebHistory } from 'vue-router'

const fixedRouters: any[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/charts-options',
    name: 'charts-options',
    component: () => import('@/views/charts-options/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...fixedRouters],
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)

  next()
})

export default router

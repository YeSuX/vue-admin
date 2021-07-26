import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRoutes = [{
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('@/views/dashboard/index'),
  meta: {
    title: 'Dashboard'
  }
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router

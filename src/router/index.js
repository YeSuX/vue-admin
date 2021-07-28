import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//无权限控制的基础页面
//所有角色都可访问
export const constantRoutes = [{
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('@/views/dashboard/index'),
  meta: {
    title: 'Dashboard'
  }
}]

//权限控制路由
export const asyncRoutes = [{
  path: '/icon',
  name: 'Icons',
  component: () => import('@/views/icons/index'),
  meta: {
    title: 'Icons'
  }
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...constantRoutes,...asyncRoutes]
})

export default router

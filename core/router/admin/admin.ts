import { DashboardOne } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'admin',
  path: '/admin',
  redirect: '/admin/index',
  component: () => import('@@/layouts/admin.vue'),
  meta: { order: 1, auth: true, menu: { title: 'Dashboard', icon: DashboardOne } },
  children: [
    {
      path: 'index',
      component: () => import('@@/admin/home/index.vue'),
      meta: { menu: { title: '工作台' } },
    },
  ],
} as RouteRecordRaw

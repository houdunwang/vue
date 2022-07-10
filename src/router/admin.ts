import { DashboardOne } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
export default {
  //addon需要替换为你的模块名
  path: '/addon/admin',
  component: () => import('@@/layouts/admin.vue'),
  meta: { order: 1, auth: true, menu: { title: 'Dashboard', icon: DashboardOne } },
  children: [
    {
      name: 'admin',
      path: '',
      component: () => import('@/views/admin/index.vue'),
      meta: { menu: { title: '工作台' } },
    },
  ],
} as RouteRecordRaw

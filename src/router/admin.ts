import { DashboardOne } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
export default {
  //Blog需要替换为你的模块名
  path: '/admin',
  component: () => import('@/layouts/admin.vue'),
  meta: { order: 1, auth: true, menu: { title: 'Dashboard', icon: DashboardOne } },
  children: [
    {
      name: 'admin',
      path: '',
      component: () => import('@/views/admin/index.vue'),
      meta: { menu: { title: '工作台' } },
    },
    {
      name: 'table',
      path: 'table',
      component: () => import('@/views/admin/table.vue'),
      meta: { menu: { title: '表格展示' } },
    },
    {
      name: 'form',
      path: 'form',
      component: () => import('@/views/admin/form.vue'),
      meta: { menu: { title: '表单提交' } },
    },
  ],
} as RouteRecordRaw

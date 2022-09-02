import { DashboardOne } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/admin',
  component: () => import('@/layouts/admin.vue'),
  meta: { order: 1, auth: true, menu: { title: 'Dashboard', icon: DashboardOne } },
  children: [
    {
      name: 'admin',
      path: '',
      component: () => import('@/views/admin/index.vue'),
      meta: { menu: { title: '工作台' }, enterClass: 'animate__fadeInRight', leaveClass: 'animate__fadeOutLeft' },
    },
    {
      name: 'admin.table',
      path: 'table',
      component: () => import('@/views/admin/table.vue'),
      meta: { menu: { title: '表格展示' } },
    },
    {
      name: 'admin.form',
      path: 'form',
      component: () => import('@/views/admin/form.vue'),
      meta: { menu: { title: '表单提交' } },
    },
    {
      name: 'admin.animateList',
      path: 'animateList',
      component: () => import('@/views/admin/animateList.vue'),
      meta: { menu: { title: '动态列表' } },
    },
  ],
} as RouteRecordRaw

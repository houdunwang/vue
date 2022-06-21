import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'admin',
  path: '/admin',
  redirect: '/admin/index',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true, menu: { title: 'Dashboard', icon: 'DashboardOne' } },
  children: [
    {
      name: 'admin.index',
      path: 'index',
      component: () => import('@/views/admin/index.vue'),
      meta: { menu: { title: '工作台' } },
    },
  ],
} as RouteRecordRaw

import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'admin',
  path: '/admin',
  redirect: '/admin/home',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true, menu: { title: 'Dashboard', icon: 'fas fa-home' } },
  children: [
    {
      name: 'admin.home',
      path: 'home',
      component: () => import('@/views/admin/home.vue'),
      meta: { menu: { title: '工作台' } },
    },
  ],
} as RouteRecordRaw

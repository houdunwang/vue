import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'siteAdmin',
  path: '/core/site/admin',
  redirect: { name: 'site.index' },
  component: () => import('@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'site.admin.index',
      path: 'index',
      component: () => import('@/views/siteAdmin/index.vue'),
    },
    {
      name: 'site.admin.role',
      path: 'role',
      component: () => import('@/views/siteAdmin/role.vue'),
    },
  ],
} as RouteRecordRaw

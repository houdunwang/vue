import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'admin',
  path: '/core/admin/site/:sid/admin',
  redirect: { name: 'site.index' },
  component: () => import('@@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'admin.index',
      path: '',
      props: true,
      component: () => import('@@/views/admin/index.vue'),
    },
    {
      name: 'admin.role',
      path: ':id',
      props: true,
      component: () => import('@@/views/admin/role.vue'),
    },
  ],
} as RouteRecordRaw

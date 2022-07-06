import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'siteAdmin',
  path: '/core/admin/site/:sid/admin',
  redirect: { name: 'site.index' },
  component: () => import('@@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'site.admin.index',
      path: '',
      props: true,
      component: () => import('@@/views/siteAdmin/index.vue'),
    },
    {
      name: 'site.admin.role',
      path: ':id',
      props: true,
      component: () => import('@@/views/siteAdmin/role.vue'),
    },
  ],
} as RouteRecordRaw

import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'role',
  path: '/core/site/:sid/role',
  component: () => import('@@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'role.index',
      path: '',
      component: () => import('@@/views/role/index.vue'),
      props: true,
    },
    {
      name: 'role.add',
      path: 'add',
      component: () => import('@@/views/role/add.vue'),
    },
    {
      name: 'role.edit',
      path: 'edit/:id',
      component: () => import('@@/views/role/edit.vue'),
    },
    {
      name: 'site.role.permission',
      path: ':id/permission',
      component: () => import('@@/views/role/permission.vue'),
    },
  ],
} as RouteRecordRaw

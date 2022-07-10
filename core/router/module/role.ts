import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'role',
  path: '/core/role',
  component: () => import('@@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'role.index',
      path: '',
      component: () => import('@@/pages/role/index.vue'),
    },
    {
      name: 'role.add',
      path: 'add',
      component: () => import('@@/pages/role/add.vue'),
    },
    {
      name: 'role.edit',
      path: 'edit',
      component: () => import('@@/pages/role/edit.vue'),
    },
    {
      name: 'site.role.permission',
      path: 'permission',
      component: () => import('@@/pages/role/permission.vue'),
    },
  ],
} as RouteRecordRaw

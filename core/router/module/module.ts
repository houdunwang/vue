import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'module',
  path: '/core/module',
  component: () => import('@@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'module.index',
      path: 'index',
      component: () => import('@@/pages/module/index.vue'),
    },
    {
      name: 'module.design',
      path: 'design',
      component: () => import('@@/pages/module/design.vue'),
    },
  ],
} as RouteRecordRaw

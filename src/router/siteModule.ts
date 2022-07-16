import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/core/site/module',
  component: () => import('@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'site.module.index',
      path: 'index',
      component: () => import('@/views/siteModule/index.vue'),
    },
  ],
} as RouteRecordRaw

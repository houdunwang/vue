import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/core/site/:sid',
  component: () => import('@@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'site.module.index',
      path: 'site/module/index',
      props: true,
      component: () => import('@@/views/siteModule/index.vue'),
    },
  ],
} as RouteRecordRaw

import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/site/:sid',
  component: () => import('@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    // {
    //   name: 'site.module.set',
    //   path: 'site/module',
    //   props: true,
    //   component: () => import('@/views/siteModule/set.vue'),
    // },
    {
      name: 'site.module.index',
      path: 'site/module/index',
      props: true,
      component: () => import('@/views/siteModule/index.vue'),
    },
  ],
} as RouteRecordRaw

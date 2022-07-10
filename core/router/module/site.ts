import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'site',
  path: '/core/site',
  redirect: { name: 'site.index' },
  component: () => import('@@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'site.index',
      path: '',
      alias: '/core',
      component: () => import('@@/views/site/index.vue'),
    },
    {
      name: 'site.add',
      path: 'site/add',
      component: () => import('@@/views/site/add.vue'),
    },
    {
      name: 'site.edit',
      path: 'site/:sid',
      component: () => import('@@/views/site/edit.vue'),
    },
    {
      name: 'site.config',
      path: 'config/:sid',
      component: () => import('@@/views/site/config.vue'),
    },
  ],
} as RouteRecordRaw

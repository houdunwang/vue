import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'site',
  path: '/core/site',
  redirect: { name: 'site.index' },
  component: () => import('@@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      name: 'core',
      path: '/core',
      redirect: { name: 'site.index' },
    },
    {
      name: 'site.index',
      path: '',
      component: () => import('@@/pages/site/index.vue'),
    },
    {
      name: 'site.add',
      path: 'add',
      component: () => import('@@/pages/site/add.vue'),
    },
    {
      name: 'site.edit',
      path: 'edit',
      component: () => import('@@/pages/site/edit.vue'),
    },
    {
      name: 'site.config',
      path: 'config',
      component: () => import('@@/pages/site/config.vue'),
    },
  ],
} as RouteRecordRaw

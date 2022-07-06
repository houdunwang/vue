import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'site',
  path: '/core/site',
  redirect: { name: 'site.index' },
  component: () => import('@@/layouts/system.vue'),
  meta: { auth: true },
  children: [
    {
      path: '/core',
      redirect: { name: 'site.index' },
    },
    {
      name: 'site.index',
      path: '',
      component: () => import('@@/views/site/index.vue'),
    },
    {
      name: 'site.add',
      path: 'site/add',
      component: () => import('@@/views/site/add.vue'),
    },
    {
      name: 'site.edit',
      path: 'site/:id',
      component: () => import('@@/views/site/edit.vue'),
    },
    {
      name: 'site.config',
      path: 'config/:id',
      component: () => import('@@/views/site/config.vue'),
    },
  ],
} as RouteRecordRaw

import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/install',
  component: () => import('@/App.vue'),
  children: [
    {
      name: 'install',
      path: '',
      component: () => import('@/views/install/index.vue'),
    },
    {
      name: 'install.info',
      path: 'info',
      component: () => import('@/views/install/info.vue'),
    },
    {
      name: 'install.migrate',
      path: 'migrate',
      component: () => import('@/views/install/migrate.vue'),
    },
    {
      name: 'install.finish',
      path: 'finish',
      component: () => import('@/views/install/finish.vue'),
    },
  ],
} as RouteRecordRaw

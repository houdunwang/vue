import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/install',
  component: () => import('#/App.vue'),
  children: [
    {
      name: 'install',
      path: '',
      component: () => import('#/pages/install/index.vue'),
    },
    {
      name: 'install.info',
      path: 'info',
      component: () => import('#/pages/install/info.vue'),
    },
    {
      name: 'install.migrate',
      path: 'migrate',
      component: () => import('#/pages/install/migrate.vue'),
    },
    {
      name: 'install.finish',
      path: 'finish',
      component: () => import('#/pages/install/finish.vue'),
    },
  ],
} as RouteRecordRaw

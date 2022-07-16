import { DashboardOne } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
export default {
  //Blog需要替换为你的模块名
  path: '/admin',
  component: () => import('@/layouts/admin.vue'),
  meta: { order: 1, auth: true, menu: { title: 'Dashboard', icon: DashboardOne } },
  children: [
    {
      name: 'admin',
      path: '',
      component: () => import('@/views/admin/index.vue'),
      meta: { menu: { title: '工作台' } },
    },
    {
      name: 'install',
      path: '/install',
      component: () => import('@/views/install/index.vue'),
      meta: { menu: { title: '安装界面' } },
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

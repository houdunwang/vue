import AppVue from '@/App.vue'
import { RouteName } from '@/enum/RouteName'
import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/error',
  component: AppVue,
  meta: { order: 3, auth: true },
  children: [
    {
      name: RouteName.NOT_FOUND,
      path: '404',
      component: () => import('@/views/errors/404.vue'),
    },
    {
      name: RouteName.FORBIDDEN,
      path: '403',
      component: () => import('@/views/errors/403.vue'),
    },
    {
      name: RouteName.INTERNAL_SERVER_ERROR,
      path: '500',
      component: () => import('@/views/errors/500.vue'),
    },
    {
      path: '/:any(.*)',
      name: 'notFound',
      component: () => import('@/views/errors/404.vue'),
    },
  ],
} as RouteRecordRaw

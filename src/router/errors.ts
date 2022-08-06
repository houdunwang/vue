import { RouteEnum } from './../enum/RouteEnum';
import { ErrorComputer } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/error',
  component: () => import('@/App.vue'),
  meta: { order: 3, auth: true, menu: { title: '错误页面', icon: ErrorComputer } },
  children: [
    {
      name: RouteEnum.NOT_FOUND,
      path: '404',
      component: () => import('@/views/errors/404.vue'),
      meta: { menu: { title: '404页面', blank: true } },
    },
    {
      name: RouteEnum.FORBIDDEN,
      path: '403',
      component: () => import('@/views/errors/403.vue'),
      meta: { menu: { title: '403页面', blank: true } },
    },
    {
      name: RouteEnum.INTERNAL_SERVER_ERROR,
      path: '500',
      component: () => import('@/views/errors/500.vue'),
      meta: { menu: { title: '500页面', blank: true } },
    },
    {
      path: '/:any(.*)',
      name: 'notFound',
      component: () => import('@/views/errors/404.vue'),
    },
  ],
} as RouteRecordRaw

import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/detail',
  component: () => import('@/layouts/detail/index.vue'),
  meta: { auth: true },
  children: [
    {
      path: '',
      name: 'detail',
      component: () => import('@/views/detail/info.vue'),
    },
    {
      path: 'detail.password',
      name: 'detail.password',
      component: () => import('@/views/detail/password.vue'),
    },
  ],
} as RouteRecordRaw

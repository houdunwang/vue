import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/member',
  component: () => import('@/layouts/member/index.vue'),
  meta: { auth: true },
  children: [
    {
      path: '',
      name: 'member',
      component: () => import('@/views/member/info.vue'),
    },
    {
      path: 'password',
      name: 'member.password',
      component: () => import('@/views/member/password.vue'),
    },
  ],
} as RouteRecordRaw

import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/member',
  component: () => import('@/layouts/member/index.vue'),
  meta: { auth: true },
  children: [
    {
      path: 'info',
      name: 'member.info',
      component: () => import('@/views/member/info.vue'),
    },
  ],
} as RouteRecordRaw

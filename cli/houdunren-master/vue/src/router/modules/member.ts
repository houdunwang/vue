import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/member',
  component: () => import('@/layouts/member/index.vue'),
  meta: { auth: true },
  children: [
    {
      path: 'info',
      name: 'user.info',
      component: () => import('@/views/user/info.vue'),
    },
    {
      path: 'password',
      name: 'user.password',
      component: () => import('@/views/user/password.vue'),
    },
    {
      path: 'email',
      name: 'user.email',
      component: () => import('@/views/user/email.vue'),
    },
    {
      path: 'delete',
      name: 'user.delete',
      component: () => import('@/views/user/delete.vue'),
    },
    {
      path: 'mobile',
      name: 'user.mobile',
      component: () => import('@/views/user/mobile.vue'),
    },
    {
      path: 'wechat',
      name: 'user.wechat',
      component: () => import('@/views/user/wechat.vue'),
    },
    {
      path: 'duration',
      name: 'user.duration',
      component: () => import('@/views/user/duration.vue'),
    },
    {
      path: 'notification',
      name: 'notification.member.index',
      component: () => import('@/views/notification/member-notification.vue'),
    },
  ],
} as RouteRecordRaw

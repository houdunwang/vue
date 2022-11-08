import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/member/index.vue'
import info from '@/views/member/info.vue'
import password from '@/views/member/password.vue'
export default {
  path: '/member',
  component: Layout,
  meta: { auth: true },
  children: [
    {
      path: '',
      name: 'member.info',
      component: info,
    },
    {
      path: 'member/password',
      name: 'member.password',
      component: password,
    },
  ],
} as RouteRecordRaw

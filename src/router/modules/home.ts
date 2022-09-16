import frontVue from '@/layouts/front.vue'
import homeVue from '@/views/home.vue'
import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/',
  component: frontVue,
  children: [
    {
      name: 'home',
      path: '/',
      component: homeVue,
    },
  ],
} as RouteRecordRaw

import { RouteRecordRaw } from 'vue-router'
import login from '@/views/auth/login.vue'
import register from '@/views/auth/register.vue'
import password from '@/views/auth/password.vue'
import authVue from '@/layouts/auth.vue'
export default {
  path: '/auth',
  component: authVue,
  meta: { guest: true },
  children: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: { guest: true },
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: { guest: true },
    },
    {
      path: '/password',
      name: 'password',
      component: password,
      meta: { guest: true },
    },
  ],
} as RouteRecordRaw

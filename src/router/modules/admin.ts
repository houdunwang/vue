import { DashboardOne } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
import Index from '@/views/admin/index.vue'
import Table from '@/views/admin/table.vue'
import form from '@/views/admin/form.vue'
import animateList from '@/views/admin/animateList.vue'
import util from '@/views/admin/util.vue'
import adminVue from '@/layouts/admin.vue'
export default {
  path: '/admin',
  component: adminVue,
  meta: { order: 1, auth: true, menu: { title: 'Dashboard', icon: DashboardOne } },
  children: [
    {
      name: 'admin',
      path: '/admin',
      component: Index,
      meta: { menu: { title: '工作台' } },
    },
    {
      name: 'admin.animateList',
      path: 'animateList',
      component: animateList,
      meta: { menu: { title: '动态列表' } },
    },
    {
      name: 'admin.util',
      path: 'admin/util',
      component: util,
      meta: { menu: { title: '组合API' } },
    },
  ],
} as RouteRecordRaw

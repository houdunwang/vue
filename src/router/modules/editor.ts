import { DocDetail } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'

import wangeditorVue from '@/views/editor/wangeditor.vue'
import markdownVue from '@/views/editor/markdown.vue'
import adminVue from '@/layouts/admin.vue'
export default {
  path: '/admin/editor',
  component: adminVue,
  meta: { order: 2, auth: true, menu: { title: '编辑器', icon: DocDetail } },
  children: [
    {
      name: 'wangEditor',
      path: '',
      component: wangeditorVue,
      meta: { menu: { title: '富文本编辑器' } },
    },
    {
      name: 'markdown',
      path: 'markdown',
      component: markdownVue,
      meta: { menu: { title: 'Markdown' } },
    },
  ],
} as RouteRecordRaw

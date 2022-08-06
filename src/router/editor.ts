import { DocDetail } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/admin/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: { order: 2, auth: true, menu: { title: '编辑器', icon: DocDetail } },
  children: [
    {
      name: 'wangEditor',
      path: '',
      component: () => import('@/views/editor/wangeditor.vue'),
      meta: { menu: { title: '富文本编辑器' } },
    },
    {
      name: 'markdown',
      path: 'markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: { menu: { title: 'Markdown' } },
    },
  ],
} as RouteRecordRaw

import { DocDetail } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@@/layouts/admin.vue'),
  meta: { order: 2, auth: true, menu: { title: '编辑器', icon: DocDetail } },
  children: [
    {
      name: 'admin.wangEditor',
      path: '',
      component: () => import('@@/admin/editor/wangeditor.vue'),
      meta: { menu: { title: '富文本编辑器' } },
    },
    {
      name: 'admin.markdown',
      path: 'markdown',
      component: () => import('@@/admin/editor/markdown.vue'),
      meta: { menu: { title: 'Markdown' } },
    },
  ],
} as RouteRecordRaw

import { DocDetail } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/core/addon/editor',
  component: () => import('#/layouts/admin.vue'),
  meta: { order: 2, auth: true, menu: { title: '编辑器', icon: DocDetail } },
  children: [
    {
      name: 'addon.wangEditor',
      path: '',
      component: () => import('#/addon/editor/wangeditor.vue'),
      meta: { menu: { title: '富文本编辑器' } },
    },
    {
      name: 'addon.markdown',
      path: 'markdown',
      component: () => import('#/addon/editor/markdown.vue'),
      meta: { menu: { title: 'Markdown' } },
    },
  ],
} as RouteRecordRaw

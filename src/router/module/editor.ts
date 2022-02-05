import { RouteRecordRaw } from 'vue-router'
export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true, menu: { title: '编辑器', icon: 'fas fa-baseball-ball' } },
  children: [
    {
      name: 'base',
      path: 'base',
      component: () => import('@/views/editor/base.vue'),
      meta: { permission: 'base_editor', menu: { title: '富文本编辑器' } },
    },
    {
      name: 'markdown',
      path: 'markdown',
      component: () => import('@/views/editor/markdown.vue'),
      meta: { permission: 'markdown_editor', menu: { title: 'Markdown' } },
    },
  ],
} as RouteRecordRaw

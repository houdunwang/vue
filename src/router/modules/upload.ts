import { DashboardOne, ImageFiles } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/upload',
  component: () => import('@/layouts/admin.vue'),
  meta: {
    order: 1,
    auth: true,
    menu: { title: '文件上传', icon: ImageFiles },
  },
  children: [
    {
      name: 'upload.singleImage',
      path: 'single-image',
      component: () => import('@/views/upload/singleImage.vue'),
      meta: { menu: { title: '图片上传' } },
    },
  ],
} as RouteRecordRaw

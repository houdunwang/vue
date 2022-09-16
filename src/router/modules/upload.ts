import adminVue from '@/layouts/admin.vue'
import singleImageVue from '@/views/upload/singleImage.vue'
import { ImageFiles } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/upload',
  component: adminVue,
  meta: {
    order: 1,
    auth: true,
    menu: { title: '文件上传', icon: ImageFiles },
  },
  children: [
    {
      name: 'upload.singleImage',
      path: '',
      component: singleImageVue,
      meta: { menu: { title: '图片上传' } },
    },
  ],
} as RouteRecordRaw

import { RouteRecordRaw } from 'vue-router'
export default {
  //addon需要替换为你的模块名
  path: '/addon/front',
  component: () => import('@/App.vue'),
  children: [
    {
      name: 'front',
      path: '',
      //模块是站点默认模块时，即通过域名直接访问模块时需要以下设置
      //建议保持以下设置存在
      alias: '/',
      component: () => import('@/views/front/index.vue'),
    },
  ],
} as RouteRecordRaw

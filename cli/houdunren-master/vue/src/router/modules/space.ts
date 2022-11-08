import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/space/:uid',
  component: () => import('@/layouts/space/index.vue'),
  children: [
    {
      path: 'topic',
      name: 'topic.space',
      component: () => import('@/views/topic/space.vue'),
    },
    {
      path: 'sign',
      name: 'sign.space',
      component: () => import('@/views/sign/space.vue'),
    },
    {
      path: 'video',
      name: 'video.space',
      component: () => import('@/views/video/space.vue'),
    },
    {
      path: 'video/favorite',
      name: 'video.space.favorite',
      component: () => import('@/views/video/space-favorite.vue'),
    },
    {
      path: 'lesson/favorite',
      name: 'lesson.space.favorite',
      component: () => import('@/views/lesson/favorite.vue'),
    },
    {
      path: 'topic/favorite',
      name: 'topic.space.favorite',
      component: () => import('@/views/topic/space-favorite.vue'),
    },
  ],
} as RouteRecordRaw

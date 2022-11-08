import { RouteRecordRaw } from 'vue-router'

export default {
  path: '/front',
  component: () => import('@/layouts/front/index.vue'),
  children: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue'),
      meta: { title: '后盾人 人人做后盾' },
    },
    //贴子管理
    {
      path: 'topic',
      name: 'topic',
      component: () => import('@/views/topic/index.vue'),
      meta: { title: '话题讨论' },
    },
    {
      path: 'topic/:id',
      name: 'topic.show',
      component: () => import('@/views/topic/show.vue'),
      meta: { auth: true },
    },
    {
      path: 'topic/create',
      name: 'topic.create',
      component: () => import('@/views/topic/create.vue'),
      meta: { auth: true, title: '发表贴子' },
    },
    {
      path: 'topic/edit/:id',
      name: 'topic.edit',
      component: () => import('@/views/topic/edit.vue'),
      meta: { auth: true, title: '编辑贴子' },
    },
    //系统课程
    {
      path: 'system',
      name: 'system',
      component: () => import('@/views/system/system.vue'),
      meta: { title: '系统课程' },
    },
    {
      path: 'project',
      name: 'project',
      component: () => import('@/views/system/project.vue'),
      meta: { title: '实战项目' },
    },
    {
      path: 'system/:id',
      name: 'system.show',
      component: () => import('@/views/system/show.vue'),
      meta: { auth: true },
    },
    //课程管理
    {
      path: 'lesson',
      name: 'lesson',
      component: () => import('@/views/lesson/index.vue'),
      meta: { title: '课程列表' },
    },
    {
      path: 'lesson/:id',
      name: 'lesson.show',
      component: () => import('@/views/lesson/show.vue'),
      meta: { auth: true },
    },
    //视频
    {
      path: 'video',
      name: 'video',
      component: () => import('@/views/video/index.vue'),
      meta: { title: '最近更新' },
    },
    {
      path: 'video/search',
      name: 'video.search',
      component: () => import('@/views/video/search.vue'),
      meta: { title: '视频搜索' },
    },
    {
      path: 'video/:id',
      name: 'video.show',
      component: () => import('@/views/video/show.vue'),
      meta: { auth: true },
    },
    {
      path: 'sign',
      name: 'sign',
      component: () => import('@/views/sign/index.vue'),
      meta: { title: '签到打卡' },
    },
    {
      path: 'subscribe',
      name: 'subscribe',
      component: () => import('@/views/subscribe/front.vue'),
      meta: { title: '订阅会员', auth: true },
    },
    {
      path: 'shot/comment',
      name: 'shot.comment',
      component: () => import('@/views/shot/comment.vue'),
      meta: { title: '感恩陪伴' },
    },
    {
      path: 'shot/live',
      name: 'shot.live',
      component: () => import('@/views/shot/live.vue'),
      meta: { title: '感恩陪伴' },
    },
    {
      path: 'live',
      name: 'live',
      component: () => import('@/views/live/index.vue'),
      meta: { title: '直播平台' },
    },
    {
      path: 'morning',
      name: 'morning',
      component: () => import('@/views/morning/index.vue'),
      meta: { title: '早起少年' },
    },
    //软件
    {
      path: 'soft',
      name: 'soft',
      component: () => import('@/views/soft/index.vue'),
      meta: { title: '软件下载' },
    },
    {
      path: 'soft/:id',
      name: 'soft.show',
      component: () => import('@/views/soft/show.vue'),
      meta: { auth: true },
    },
    //金榜提名
    {
      path: 'question',
      name: 'question',
      component: () => import('@/views/question/index.vue'),
    },
    {
      path: 'question/create',
      name: 'question.create',
      component: () => import('@/views/question/form.vue'),
      meta: { auth: true },
    },
    {
      path: 'question/edit/:id',
      name: 'question.edit',
      component: () => import('@/views/question/form.vue'),
      meta: { auth: true },
    },
    {
      path: 'question/:id',
      name: 'question.show',
      component: () => import('@/views/question/show.vue'),
    },
    {
      path: 'question/all_question',
      name: 'question.all_question',
      component: () => import('@/views/question/all_question.vue'),
    },
    {
      path: 'question/examine',
      name: 'question.examine',
      component: () => import('@/views/question/examine.vue'),
    },
    {
      path: 'question/helper',
      name: 'question.helper',
      component: () => import('@/views/question/helper.vue'),
    },
    {
      path: 'question/my',
      name: 'question.my',
      component: () => import('@/views/question/my-question.vue'),
      meta: { auth: true },
    },
    //答题
    {
      path: 'question_answer',
      name: 'question_answer.index',
      component: () => import('@/views/questionAnswer/index.vue'),
      meta: { auth: true },
    },
    {
      path: 'question_answer/:id',
      name: 'question_answer.show',
      component: () => import('@/views/questionAnswer/show.vue'),
    },
    {
      path: 'question_answer/my_answer_list',
      name: 'question_answer.my_answer_list',
      component: () => import('@/views/questionAnswer/my_answer_list.vue'),
      meta: { auth: true },
    },
  ],
} as RouteRecordRaw

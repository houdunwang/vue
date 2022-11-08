import { DashboardOne } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/admin',
    component: () => import('@/layouts/admin/index.vue'),
    meta: { order: 1, auth: true, admin: true, menu: { title: '基础设置', icon: DashboardOne } },
    children: [
      {
        path: '',
        name: 'admin',
        component: () => import('@/views/admin/index.vue'),
        meta: { title: '后台主页', menu: { title: '后台主页' } },
      },
      {
        path: 'config',
        name: 'admin.config',
        component: () => import('@/views/admin/config.vue'),
        meta: { title: '系统配置', menu: { title: '系统配置' } },
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/index.vue'),
    meta: { auth: true, admin: true, title: '课程管理', menu: { title: '课程管理', icon: DashboardOne } },
    children: [
      {
        path: 'system',
        name: 'system.admin',
        component: () => import('@/views/system/admin.vue'),
        meta: { title: '课程类型', menu: { title: '课程类型' } },
      },
      {
        path: 'system/create',
        name: 'system.create',
        component: () => import('@/views/system/create.vue'),
        meta: { title: '添加系统课程' },
      },
      {
        path: 'system/edit/:id',
        name: 'system.edit',
        component: () => import('@/views/system/edit.vue'),
        meta: { title: '修改课程' },
      },
      {
        path: 'lesson',
        name: 'lesson.admin',
        component: () => import('@/views/lesson/admin.vue'),
        meta: { title: '课程管理', menu: { title: '课程管理' } },
      },
      {
        path: 'lesson/create',
        name: 'lesson.create',
        component: () => import('@/views/lesson/create.vue'),
        meta: { title: '添加课程' },
      },
      {
        path: 'lesson/edit/:id',
        name: 'lesson.edit',
        component: () => import('@/views/lesson/edit.vue'),
      },
    ],
  },

  {
    path: '/admin',
    component: () => import('@/layouts/admin/index.vue'),
    meta: { auth: true, admin: true, title: '晨起活动', menu: { title: '晨起活动', icon: DashboardOne } },
    children: [
      {
        path: 'morning',
        name: 'morning.admin',
        component: () => import('@/views/morning/admin.vue'),
        meta: { title: '活动列表', menu: { title: '活动列表' } },
      },
      {
        path: 'morning/create',
        name: 'morning.create',
        component: () => import('@/views/morning/create.vue'),
        meta: { title: '添加活动', menu: { title: '添加活动' } },
      },
      {
        path: 'morning/admin/edit/:id',
        name: 'morning.edit',
        component: () => import('@/views/morning/edit.vue'),
        meta: { title: '修改活动' },
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/index.vue'),
    meta: { auth: true, admin: true, title: '软件管理', menu: { title: '软件管理', icon: DashboardOne } },
    children: [
      {
        path: 'soft',
        name: 'soft.admin',
        component: () => import('@/views/soft/admin.vue'),
        meta: { title: '软件列表', menu: { title: '软件列表' } },
      },
      {
        path: 'soft/create',
        name: 'soft.create',
        component: () => import('@/views/soft/create.vue'),
        meta: { title: '发布软件', menu: { title: '发布软件' } },
      },
      {
        path: 'soft/edit/:id',
        name: 'soft.edit',
        component: () => import('@/views/soft/edit.vue'),
        meta: { title: '编辑软件' },
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/index.vue'),
    meta: { auth: true, admin: true, title: '微信相关', menu: { title: '微信相关', icon: DashboardOne } },
    children: [
      {
        path: 'menu',
        name: 'wechat.menu',
        component: () => import('@/views/wechat/menu.vue'),
        meta: { title: '微信菜单', menu: { title: '微信菜单' } },
      },
    ],
  },
] as RouteRecordRaw[]

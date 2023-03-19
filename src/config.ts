import appMiddleware from '@/middleware/appMiddleware'
export default {
  middleware: [appMiddleware],
  router: {
    prefix: '',
  },
  member: {
    menu: [
      {
        routeName: 'member',
        title: '资料修改',
      },
      {
        routeName: 'member.password',
        title: '修改密码',
      },
    ],
  },
  user: {
    avatarMenu: [
      {
        routeName: RouteName.ADMIN,
        title: '后台管理',
      },
      {
        routeName: RouteName.MEMBER,
        title: '会员中心',
      },
      {
        routeName: RouteName.HOME,
        title: '网站首页',
      },
    ],
  },
}

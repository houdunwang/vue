import router from '@/router'
const storage = useStorage()

export default () => {
  const form = reactive({
    email: '2300071698@qq.com',
    password: 'admin888',
    password_confirmation: 'admin888',
  })

  //模型权限验证
  function authorize(userId: undefined | number) {
    return userId == useUserStore().user?.id
  }

  //登录检测
  function isLogin(): boolean {
    return useStorage().get(CacheKey.TOKEN_NAME)
  }

  //退出登录
  async function logout() {
    storage.remove(CacheKey.TOKEN_NAME)
    return (location.href = '/')
  }

  //登录
  const login = useUtil().request(async () => {
    storage.set(CacheKey.TOKEN_NAME, 'houdunren.com')
    const route = router.resolve({ name: RouteName.ADMIN })
    location.href = route.fullPath
  })

  return { authorize, isLogin, logout, login, form }
}

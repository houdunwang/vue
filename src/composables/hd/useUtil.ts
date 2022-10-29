import useStorage from '@/composables/hd/useStorage'
import { CacheKey } from '@/enum/CacheKey'
import userStore from '@/store/useUserStore'
const storage = useStorage()

export default () => {
  //模型权限验证
  function authorize(userId: any) {
    return isAdministrator() || userId == userStore().user?.id
  }

  //超级管理员
  function isAdministrator() {
    return userStore().user?.id == 1
  }

  //登录检测
  function isLogin(): boolean {
    return !!storage.get(CacheKey.TOKEN_NAME)
  }

  //退出登录
  function logout() {
    storage.remove(CacheKey.TOKEN_NAME)
    location.href = '/'
  }

  //限制点击频繁
  function request(fn: (args: any) => Promise<any>) {
    let isSubmit = false
    return (args: any) => {
      if (isSubmit) return
      isSubmit = true
      return fn(args).finally(() => (isSubmit = false))
    }
  }

  //初始站点
  async function initSite() {
    const route = useRoute()
    const storeUser = userStore()
    await Promise.all([storeUser.getCurrentUser()])
    watchEffect(() => {
      useTitle(route.meta.title)
    })
  }
  return {
    isLogin,
    logout,
    request,
    isAdministrator,
    authorize,
    initSite,
  }
}

import useStorage from '@/composables/hd/useStorage'
import { CacheKey } from '@/enum/CacheKey'
import { http } from '@/plugins/axios'
import userStore from '@/store/hd/useUserStore'
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
    return useStorage().get(CacheKey.TOKEN_NAME)
    // const userStore = useUserStore()
    // return !!userStore.user
  }

  //退出登录
  async function logout() {
    storage.remove(CacheKey.TOKEN_NAME)
    return (location.href = '/')
    await http.request({
      url: `auth/logout`,
      method: 'POST',
    })
    location.href = '/'
  }

  return { authorize, isAdministrator, isLogin, logout }
}

import useStorage from '@/composables/hd/useStorage'
import { CacheKey } from '@/enum/CacheKey'
import { http } from '@/plugins/axios'
import router from '@/router'
import userStore from '@/store/hd/useUserStore'
import { ElMessageBox } from 'element-plus'
import { onBeforeRouteLeave, RouteLocationRaw } from 'vue-router'
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

  //限制点击频繁
  function request(fn: (args: any) => Promise<any>) {
    let isSubmit = false
    return (args: any) => {
      if (isSubmit) return
      isSubmit = true
      return fn(args).finally(() => (isSubmit = false))
    }
  }

  //根据路由访问页面
  function open(route: RouteLocationRaw, target = '_self') {
    const url = router.resolve(route).fullPath
    if (target == '_blank') window.open(url)
    else location.href = url
  }

  //是否为微信客户端
  function isWechat() {
    var ua = navigator.userAgent.toLowerCase()
    return ua.match(/MicroMessenger/i)
  }

  //路由 Query 参数
  const routeQuery = (name: string, defaultValue?: any) => {
    return useRoute().query[name] || defaultValue
  }

  const routeParams = (name: string, defaultValue?: any) => {
    return useRoute().params[name] || defaultValue
  }

  //离开页面确认
  const routeLeaveConfirm = async (message = '确定离开吗？') => {
    onBeforeRouteLeave(async () => {
      try {
        await ElMessageBox.confirm(message, '温馨提示')
        return true
      } catch {
        return false
      }
    })
  }
  return {
    routeQuery,
    open,
    isLogin,
    logout,
    request,
    isAdministrator,
    authorize,
    isWechat,
    routeParams,
    routeLeaveConfirm,
  }
}

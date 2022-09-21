import useStorage from '@/composables/system/useStorage'
import { CacheKey } from '@/enum/CacheKey'
import router from '@/router'
const storage = useStorage()

export default () => {
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

  //根据URL生成样式类名
  function className() {
    return router.currentRoute.value.fullPath.replace(/\//g, '-').replace(/^\-|\-$/g, '')
  }

  function open(url: string) {
    window.open(url)
  }

  return { isLogin, logout, request, className, open }
}

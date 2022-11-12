import router from '@/router'
import { ElMessageBox } from 'element-plus'
import { onBeforeRouteLeave, RouteLocationRaw } from 'vue-router'

export default () => {
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

  //路由 Params 参数
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
    request,
    isWechat,
    routeParams,
    routeLeaveConfirm,
  }
}

import userStore from '@/store/userStore'
import { Router, RouteRecordRaw } from 'vue-router'
import { modules } from '../index'

export default (router: Router) => {
  const user = userStore()
  let routes = modules.map((route) => {
    //根据权限过滤
    route.children = route.children?.filter((r: RouteRecordRaw) => {
      const permission = r.meta?.permission
      return permission ? user.permissions.find((p) => p == permission) : true
    })
    return route
  })

  //过滤掉children为空的路由
  routes = routes.filter((r) => r.children?.length)
  routes.forEach((r) => router.addRoute(r as RouteRecordRaw))
}

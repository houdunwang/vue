import { Router, RouteRecordRaw, RouteRecordNormalized } from 'vue-router'
import userStore from '@@/store/userStore'

function autoloadModuleRoutes(): RouteRecordNormalized[] {
  const coreModules = import.meta.globEager('./module/**/*.ts')
  const adminModules = import.meta.globEager('./admin/**/*.ts')
  const appModules = import.meta.globEager('../../src/router/*.ts')
  const routes = [] as RouteRecordNormalized[]

  ;[coreModules, appModules, adminModules].map((modules) =>
    Object.keys(modules).forEach((key) => {
      routes.push(modules[key].default)
    }),
  )

  return routes
}

export default function (router: Router) {
  const user = userStore()
  let routes = autoloadModuleRoutes().map((route) => {
    //根据权限过滤
    route.children = route.children?.filter((r: RouteRecordRaw) => {
      const permission = r.meta?.permission
      return permission ? user.permissions.find((p) => p.name == permission) : true
    })
    return route
  })

  //过滤掉children为空的路由
  routes = routes.filter((r) => r.children.length)
  routes.forEach((r) => router.addRoute(r as RouteRecordRaw))
}

import { Router, RouteRecordRaw } from 'vue-router'
import util from '@/utils'
import getRoutes from './view'
import autoloadModuleRoutes from './module'
import userStroe from '@/store/userStroe'

let routes: RouteRecordRaw[] = util.env.VITE_ROUTER_AUTOLOAD ? getRoutes() : autoloadModuleRoutes()

function autoload(router: Router) {
  const user = userStroe()
  routes = routes.map(route => {
    route.children = route.children?.filter(r => {
      const permission = r.meta?.permission
      return permission ? user.info?.permissions.includes(permission) : true
    })
    return route
  })

  routes.forEach(r => router.addRoute(r))
}
export default autoload

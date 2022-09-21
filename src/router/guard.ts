import useStorage from '@/composables/system/useStorage'
import { CacheKey } from '@/enum/CacheKey'
import { RouteName } from '@/enum/RouteName'
import { RouteLocationNormalized, Router } from 'vue-router'
const storage = useStorage()
export default (router: Router) => {
  router.beforeEach(beforeEach)
}

function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  const token = storage.get(CacheKey.TOKEN_NAME)
  if (to.meta.auth && !token) {
    storage.set(CacheKey.REDIRECT_ROUTE_NAME, to.fullPath)
    return { name: RouteName.LOGIN }
  }

  if (to.meta.guest && token) return from
}

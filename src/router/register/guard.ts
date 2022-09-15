import { CacheEnum } from '@/enum/CacheEnum'
import { RouteEnum } from '@/enum/RouteEnum'
import store from '@/utils/store'
import { RouteLocationNormalized, Router } from 'vue-router'

export default (router: Router) => {
  router.beforeEach(beforeEach)
}

function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  const token = store.get(CacheEnum.TOKEN_NAME)
  if (to.meta.auth && !token) {
    store.set(CacheEnum.REDIRECT_ROUTE_NAME, to.fullPath)
    return { name: RouteEnum.LOGIN }
  }

  if (to.meta.guest && token) return from
}

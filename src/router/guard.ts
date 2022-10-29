import useStorage from '@/composables/hd/useStorage'
import { CacheKey } from '@/enum/CacheKey'
import { RouteName } from '@/enum/RouteName'
import userStore from '@/store/useUserStore'
import { ElMessage } from 'element-plus'
import { RouteLocationNormalized, Router } from 'vue-router'
const storage = useStorage()
export default (router: Router) => {
  router.beforeEach(beforeEach)
}

async function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  const token = storage.get(CacheKey.TOKEN_NAME)

  if (to.meta.auth && !token) {
    storage.set(CacheKey.REDIRECT_ROUTE_NAME, to.fullPath)
    ElMessage.success('请登录后操作')
    return { name: RouteName.LOGIN }
  }

  if (to.meta.guest && token) return from
}

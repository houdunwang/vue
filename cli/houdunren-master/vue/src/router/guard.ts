import useStorage from '@/composables/hd/useStorage'
import useUtil from '@/composables/hd/useUtil'
import { CacheKey } from '@/enum/CacheKey'
import { RouteName } from '@/enum/RouteName'
import useConfigStore from '@/store/hd/useConfigStore'
import useUserStore from '@/store/hd/useUserStore'
import { ElMessage } from 'element-plus'
import { RouteLocationNormalized, Router } from 'vue-router'

const storage = useStorage()
const util = useUtil()
let isInit = false

export default (router: Router) => {
  router.beforeEach(beforeEach)
}

//路由守卫
async function beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  await init()
  const userStore = useUserStore()

  if (to.meta.auth && !userStore.user) {
    storage.set(CacheKey.REDIRECT_ROUTE_NAME, to.fullPath)
    ElMessage.success('请登录后操作')
    return { name: RouteName.LOGIN }
  }

  if (to.meta.admin && !util.isAdministrator()) return '/'
  if (to.meta.guest && userStore.user) return '/'
  if (to.meta.title) useTitle(to.meta.title)
}

//初始应用
async function init() {
  if (isInit === true) return
  isInit = true
  const userStore = useUserStore()
  const configStore = useConfigStore()
  await Promise.all([userStore.getCurrentUser(), configStore.get()])
}

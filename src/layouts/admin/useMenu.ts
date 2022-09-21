import { RouteRecordRaw } from 'vue-router'
import { ref } from 'vue'
import router from '@/router'

const show = ref(true)

const history = ref<RouteRecordRaw[]>([])

export default () => {
  const routes = router
    .getRoutes()
    .filter((r) => r.children.length)
    .filter((r) => r.meta.menu)
    .sort((a, b) => {
      return (a.meta.order ?? 100) - (b.meta.order ?? 100)
    })
  //记录历史路由（菜单）
  const recordHistory = (route: RouteRecordRaw) => {
    if (history.value.length == 20) history.value.pop()
    const isExist = history.value.find((h) => h.name == route.name)
    if (!isExist && !route.meta?.menu?.blank) history.value.unshift(route)
  }
  //路由跳转
  const go = (route: RouteRecordRaw) => {
    recordHistory(route)

    if (route.meta?.menu?.blank) {
      const url = router.getRoutes().find((r) => r.name == route.name)?.path
      return window.open(url)
    }

    router.push(route)
  }

  return { routes, show, go, history }
}

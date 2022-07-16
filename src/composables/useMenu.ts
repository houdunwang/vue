import { RouteRecordRaw } from 'vue-router'
import { ref } from 'vue'
import router from '@/router/register'

const routes = router
  .getRoutes()
  .filter((r) => r.children.length)
  .filter((r) => r.meta.menu)
  .sort((a, b) => {
    return (a.meta.order ?? 100) - (b.meta.order ?? 100)
  })
const show = ref(true)

const history = ref<RouteRecordRaw[]>([])

export default () => {
  //路由跳转
  const go = (route: RouteRecordRaw) => {
    if (history.value.length == 20) history.value.pop()
    const isExist = history.value.find((h) => h.name == route.name)
    if (!isExist) history.value.unshift(route)

    router.push(route)
  }
  return { routes, show, go, history }
}

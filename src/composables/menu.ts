import { RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
import { IMenu } from '#/menu'
import { ref } from 'vue'
import router from '@/router'
import utils from '@/utils'
import { CacheEnum } from '@/enum/cacheEnum'

class Menu {
  public menus = ref<IMenu[]>([])
  public history = ref<IMenu[]>([])
  public close = ref(false)
  public route = ref(null as null | RouteLocationNormalized)

  constructor() {
    this.menus.value = this.getMenuByRoute()
    this.history.value = this.getHistoryMenu()
  }

  private getHistoryMenu() {
    const routes = [] as RouteRecordRaw[]
    router.getRoutes().map(r => routes.push(...r.children))

    let menus: IMenu[] = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
    return menus.filter(m => {
      return routes.some(r => r.name == m.route)
    })
  }

  removeHistoryMenu(menu: IMenu) {
    const index = this.history.value.indexOf(menu)
    this.history.value.splice(index, 1)
    utils.store.set(CacheEnum.HISTORY_MENU, this.history.value)
  }

  addHistoryMenu(route: RouteLocationNormalized) {
    if (!route.meta?.menu) return
    this.route.value = route

    const menu: IMenu = { ...route.meta?.menu, route: route.name as string }
    const isHas = this.history.value.some(menu => menu.route == route.name)
    if (!isHas) this.history.value.unshift(menu)
    if (this.history.value.length > 10) {
      this.history.value.pop()
    }

    utils.store.set(CacheEnum.HISTORY_MENU, this.history.value)
  }

  toggleParentMenu(menu: IMenu) {
    this.menus.value.forEach(m => {
      m.isClick = false
      if (m == menu) m.isClick = true
    })
  }
  toggleState() {
    this.close.value = !this.close.value
  }
  setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach(m => {
      m.isClick = false
      m.children?.forEach(c => {
        c.isClick = false
        if (c.route == route.name) {
          m.isClick = true
          c.isClick = true
        }
      })
    })
  }

  getMenuByRoute() {
    return router
      .getRoutes()
      .filter(route => route.children.length && route.meta.menu)
      .map(route => {
        let menu: IMenu = { ...route.meta?.menu }
        menu.children = route.children
          .filter(route => route.meta?.menu)
          .map(route => {
            return { ...route.meta?.menu, route: route.name }
          }) as IMenu[]
        return menu
      })
      .filter(menu => menu.children?.length) as IMenu[]
  }
}

export default new Menu()

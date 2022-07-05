import { CacheEnum } from '../enum/CacheEnum'
import store from '@@/utils/store'
import { RouteLocationNormalized } from 'vue-router'
import { RouteMenu } from '@@/types/router'
import { defineStore } from 'pinia'
import router from '@@/router'
export default defineStore('menu', {
  state: () => {
    return {
      menus: [] as RouteMenu[],
      historyMenu: [] as RouteMenu[],
    }
  },
  actions: {
    init() {
      this.getMenuByRoute()
      this.historyMenu = store.get(CacheEnum.HISTORY_MENU) ?? []
    },
    removeHistoryMenu(menu: RouteMenu) {
      const index = this.historyMenu.indexOf(menu)
      this.historyMenu.splice(index, 1)
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta?.menu) return

      const menu: RouteMenu = { ...route.meta?.menu, route: route.name as string }
      const isHas = this.historyMenu.some((menu) => menu.route == route.name)
      if (!isHas) this.historyMenu.unshift(menu)
      if (this.historyMenu.length > 10) {
        this.historyMenu.pop()
      }

      store.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
    //根据路由获取菜单
    getMenuByRoute() {
      this.menus = router
        .getRoutes()
        .filter((route) => route.children.length && route.meta.menu)
        .map((route) => {
          let menu: RouteMenu = { ...route.meta?.menu }
          menu.children = route.children
            .filter((route) => route.meta?.menu)
            .map((route) => {
              return { ...route.meta?.menu, route: route.name }
            }) as RouteMenu[]
          return menu
        })
        .filter((menu) => menu.children?.length) as RouteMenu[]
    },
  },
})

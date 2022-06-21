import 'vue-router'
import { IconType } from '@icon-park/vue-next/es/all'

export type RouteMenu = {
  title?: string
  icon?: IconType
  isClick?: boolean
  route?: string
  children?: { title?: string; icon?: IconType; isClick?: boolean; route?: string }[]
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    auth?: boolean
    guest?: boolean
    menu?: RouteMenu
    enterClass?: string
    leaveClass?: string
    permission?: string
  }
}

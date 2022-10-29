import { IIconProps } from '@icon-park/vue-next/es/runtime'
import { DefineComponent } from 'vue'
import 'vue-router'

export type RouteMenu = {
  title?: string
  icon?: DefineComponent<IIconProps>
  blank?: boolean
  url?: string
}

declare module 'vue-router' {
  interface RouteMeta {
    menu?: RouteMenu
    title?: string
    order?: number
    auth?: boolean
    admin?: boolean
    guest?: boolean
    enterClass?: string
    leaveClass?: string
    permission?: string
  }
}

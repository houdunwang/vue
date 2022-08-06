import 'vue-router'
import { DefineComponent, ShallowRef } from 'vue'
import { IIconProps } from '@icon-park/vue-next/es/runtime'

export type RouteMenu = {
  title?: string
  icon?: DefineComponent<IIconProps>
  route?: string
  blank?: boolean
}

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    order?: number
    auth?: boolean
    guest?: boolean
    menu?: RouteMenu
    enterClass?: string
    leaveClass?: string
    permission?: string
  }
}

import 'vue-router'
// import { IconType } from '@icon-park/vue-next/es/all'
import { DefineComponent, ShallowRef } from 'vue'
import { IIconProps } from '@icon-park/vue-next/es/runtime'

export type RouteMenu = {
  title?: string
  icon?: DefineComponent<IIconProps>
  route?: string
  //   children?: { title?: string; icon?: IconType; isClick?: boolean; route?: string }[]
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

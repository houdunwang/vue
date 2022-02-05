import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import setupElementPlus from './elementui'
import _ from 'lodash'
import setupPinia from './pinia'

export function setupPlugins(app: App) {
  // autoRegisterComponent(app)
  setupTailwindcss()
  setupElementPlus()
  setupPinia(app)
}

//自动注册全局组件
// function autoRegisterComponent(app: App) {
//   const components = import.meta.globEager('../components/form/*.vue')
//   Object.keys(components).forEach(key => {
//     const name = key.split('/').pop()?.split('.').shift() as string
//     app.component(_.camelCase(name), components[key].default)
//   })
// }

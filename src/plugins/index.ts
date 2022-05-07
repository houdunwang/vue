import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import setupElementPlus from './elementui'
import _ from 'lodash'
import setupPinia from './pinia'
import setupIconPark from './iconpark'
// import { setupTDesign } from './tdesign'
import setupDayjs from './dayjs'

export function setupPlugins(app: App) {
  setupTailwindcss()
  setupElementPlus()
  setupPinia(app)
  setupIconPark(app)
  //   setupTDesign(app)
  setupDayjs()
}

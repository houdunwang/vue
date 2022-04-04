import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import setupElementPlus from './elementui'
import _ from 'lodash'
import setupPinia from './pinia'
import setupIconPark from './iconpark'

export function setupPlugins(app: App) {
  setupTailwindcss()
  setupElementPlus()
  setupPinia(app)
  setupIconPark(app)
}

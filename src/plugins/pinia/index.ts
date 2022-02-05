import { App } from 'vue'
import { createPinia } from 'pinia'

export default function setupPinia(app: App) {
  app.use(createPinia())
}

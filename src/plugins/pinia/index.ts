import { App } from 'vue'
import { createPinia } from 'pinia'

export default (app: App) => {
  app.use(createPinia())
}

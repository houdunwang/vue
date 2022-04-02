import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'
import '@/styles/global.scss'

async function bootstrap() {
  const app = createApp(App)
  setupPlugins(app)
  setupRouter(app)
  await router.isReady()
  app.mount('#app')
}

bootstrap()

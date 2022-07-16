import { App as AppType, createApp } from 'vue'
import router, { setupRouter } from '@/router/register/index'
import plugin from '@/plugins'
import directive from '@/directives'
import App from './App.vue'
import '@/styles/global.scss'

async function bootstrap() {
  const app = createApp(App)
  plugin(app)
  directive(app)
  setupRouter(app)
  await router.isReady()
  app.mount('#app')
}

void bootstrap()

import directive from '@/directives'
import plugin from '@/plugins'
import router, { setupRouter } from '@/router/register/index'
import '@/styles/global.scss'
import { createApp } from 'vue'
import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)
  plugin(app)
  directive(app)
  setupRouter(app)
  await router.isReady()
  app.mount('#app')
}

void bootstrap()

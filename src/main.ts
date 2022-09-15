import directive from '@/directives'
import plugin from '@/plugins'
import router, { setupRouter } from '@/router/register/index'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/global.scss'

async function bootstrap() {
  const app = createApp(App)
  app.use(createPinia())
  plugin(app)
  directive(app)
  await setupRouter(app)
  await router.isReady()
  app.mount('#app')
}

void bootstrap()

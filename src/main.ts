import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'
import '@/styles/global.scss'
import 'animate.css'

// import HdInput from '@/components/form/hd-input.vue'
async function bootstrap() {
  const app = createApp(App)
  setupPlugins(app)
  setupRouter(app)

  // app.component('hdInput', HdInput)
  await router.isReady()
  app.mount('#app')
}

bootstrap()

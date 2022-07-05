import { App as AppType, createApp } from 'vue'
import router, { setupRouter } from '@@/router/index'
import { setupPlugins as CorePlugins } from '@@/plugins'
import CoreDirective from '@@/directives'
import AppDirective from '@/directives'
import AppPlugin from '@/plugins'
import App from './App.vue'
import '@@/styles/global.scss'
import 'animate.css'

class Main {
  public async bootstrap() {
    const app = createApp(App)
    await this.core(app)
    this.project(app)
  }
  //初始核心
  private async core(app: AppType) {
    CorePlugins(app)
    CoreDirective(app)
    setupRouter(app)
    await router.isReady()
    app.mount('#app')
  }
  //初始项目
  private project(app: AppType) {
    AppPlugin(app)
    AppDirective(app)
  }
}

export default new Main()

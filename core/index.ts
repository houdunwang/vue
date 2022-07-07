import { App as AppType, createApp } from 'vue'
import router, { setupRouter } from '@@/router/index'
import plugin from '@@/plugins'
import directive from '@@/directives'
// import AppDirective from '@/directives'
// import AppPlugin from '@/plugins'
import App from './App.vue'
import '@@/styles/global.scss'
import 'animate.css'

class Main {
  public async bootstrap() {
    const app = createApp(App)
    await this.register(app)
    // this.project(app)
  }
  private async register(app: AppType) {
    plugin(app)
    directive(app)
    setupRouter(app)
    await router.isReady()
    app.mount('#app')
  }
  //初始项目
  //   private project(app: AppType) {
  //     AppPlugin(app)
  //     AppDirective(app)
  //   }
}

export default new Main()

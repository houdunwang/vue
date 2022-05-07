import userStore from '@/store/userStore'
import { App as AppType, createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'
import '@/styles/global.scss'
import 'animate.css'
import registerDirective from './directive'

class Main {
  public async bootstrap() {
    const app = this.app()
    await this.initData()
    await router.isReady()
    app.mount('#app')
  }
  //初始应用
  private app(): AppType {
    const app = createApp(App)
    setupPlugins(app)
    setupRouter(app)

    registerDirective(app)
    return app
  }
  //初始应用数据
  private async initData() {
    await userStore().getUserInfo()
  }
}

new Main().bootstrap()

import { App } from 'vue'
import _ from 'lodash'

export default (app: App) => {
  register(app, import.meta.globEager('./*/index.ts'))
}

function register(app: App, modules: Record<string, any>) {
  Object.entries(modules).map(([file, module]) => {
    const name = file.match(/^\.\/(.*)*\//)?.[1] as string
    app.directive(name, module.default)
  })
}

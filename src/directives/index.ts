import { App } from 'vue'

export default (app: App) => {
  register(app, import.meta.globEager('./*.ts'))
  register(app, import.meta.globEager('../../src/directives/*.ts'))
}

function register(app: App, modules: Record<string, any>) {
  Object.entries(modules).map(([file, module]) => {
    const name = file.slice(2, -3)
    if (name != 'index') app.directive(name, module.default)
  })
}

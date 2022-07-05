import { App } from 'vue'

export default function registerDirective(app: App) {
  //清除表单验证错误
  app.directive('hd', {
    mounted(el: HTMLElement, binding) {},
  })
}

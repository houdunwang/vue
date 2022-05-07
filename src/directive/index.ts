import errorStore from '@/store/errorStore'
import { App } from 'vue'
export default function registerDirective(app: App) {
  //清除表单验证错误
  app.directive('clearError', {
    mounted(el: HTMLElement, binding) {
      el.addEventListener('focus', () => {
        errorStore().clearError(binding.value)
      })
    },
  })
}

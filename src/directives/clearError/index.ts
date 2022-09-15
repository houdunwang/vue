import errorStore from '@/store/errorStore'
import { App } from 'vue'

export default (app: App) => {
  app.directive('clearError', {
    mounted(el: HTMLElement, binding: any) {
      el.addEventListener('focus', () => {
        errorStore().clearError(binding.value)
      })
    },
  })
}

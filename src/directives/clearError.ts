import errorStore from '@/store/errorStore'

export default {
  mounted(el: HTMLElement, binding: any) {
    el.addEventListener('focus', () => {
      errorStore().clearError(binding.value)
    })
  },
}

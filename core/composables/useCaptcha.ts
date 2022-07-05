import { apiCaptcha, ICaptcha } from '../apis/codeApi'
const captcha = ref<ICaptcha>()

export default () => {
  const loadCaptcha = async () => {
    captcha.value = await apiCaptcha()
  }

  return { captcha, loadCaptcha }
}

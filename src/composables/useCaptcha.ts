import { http } from '@/plugins/axios'
interface ICaptcha {
  key: string
  img: string
}

export default () => {
  const captcha = ref<ICaptcha>({ key: '', img: '' })

  //获取图形验证码
  const getCaptcha = async () => {
    captcha.value = await http.request<ICaptcha>({
      baseURL: '',
      url: `/captcha/api/math`,
    })
  }
  return { getCaptcha, captcha }
}

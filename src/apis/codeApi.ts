import { http } from '@/plugins/axios'

export interface ICaptcha {
  key: string
  img: string
}

//获取图片验证码
export function apiCaptcha() {
  return http.request<{}, ICaptcha>({
    baseURL: '/captcha/api/math',
  })
}

//任何帐号发送验证码
export function apiCode(account: string) {
  return http.request<null>({
    url: `code/send`,
    method: 'POST',
    data: { account },
  })
}

//向未注册的帐号发送验证码
export function apiCodeToNoExistUser(account: string) {
  return http.request<null>({
    url: `code/not_exist_user`,
    method: 'POST',
    data: { account },
  })
}

//向注册的帐号发送验证码
export function apiCodeToExistUser(account: string) {
  return http.request<null>({
    url: `code/exist_user`,
    method: 'POST',
    data: { account },
  })
}

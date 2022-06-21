import { http } from '@/plugins/axios'

export type ResponseData = {
  user: UserModel
  token: string
}

export function login(data: { account: string; password: string }) {
  return http.request<ResponseData>({
    url: `login`,
    method: 'post',
    data,
  })
}

export interface RegisterFormData {
  account: string
  password: string
  password_confirmation: string
  code: string
}

export function register(data: RegisterFormData) {
  return http.request<ResponseData>({
    url: `register`,
    method: 'post',
    data,
  })
}

export interface ForgetPasswordFormData {
  account: string
  password: string
  password_confirmation: string
  code: string
}

export function forgetPassword(data: any) {
  return http.request<ResponseData>({
    url: 'account/forget-password',
    method: 'post',
    data,
  })
}

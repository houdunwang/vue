import { IUser } from './types/user'
import { http } from '@/plugins/axios'

export function apiInfo() {
  return http.request<IUser>({
    url: `user/info`,
  })
}

export interface ILoginAndRegisterResponse {
  user: IUser
  token: string
}

export interface ILoginForm {
  account: string
  password: string
}

export function apiLogin(data: ILoginForm) {
  return http.request<ILoginAndRegisterResponse>({
    url: `login`,
    method: 'post',
    data,
  })
}

export interface IRegisterForm {
  account: string
  password: string
  password_confirmation: string
  code: string
}

export function apiRegister(data: IRegisterForm) {
  return http.request<ILoginAndRegisterResponse>({
    url: `register`,
    method: 'post',
    data,
  })
}

export interface IForgetPassword {
  account: string
  password: string
  password_confirmation: string
  code: string
}
export function apiForgetPassword(data: IForgetPassword) {
  return http.request<ILoginAndRegisterResponse>({
    url: 'account/forget-password',
    method: 'post',
    data,
  })
}

import { ILogin, ILoginForm, IUser } from './types/user'
import { http } from '@/plugins/axios'

function info() {
  return http.request<IUser>({
    url: `user/info`,
  })
}

export function login(data: ILoginForm) {
  return http.request<ILogin>({
    url: `login`,
    method: 'post',
    data,
  })
}

export default { info, login }

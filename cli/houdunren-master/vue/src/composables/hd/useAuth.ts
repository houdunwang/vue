import { CacheKey } from '@/enum/CacheKey'
import { http } from '@/plugins/axios'
import useStorage from './useStorage'
const storage = useStorage()
type Result = {
  data: {
    user: UserModel
    token: string
  }
}
export default () => {
  async function login(data: any) {
    const res = await http.request<Result>({
      url: `auth/login`,
      method: 'post',
      data,
    })
    await loginCallback(res.data.token)
  }

  async function register(data: any) {
    const res = await http.request<Result>({
      url: `auth/register`,
      method: 'post',
      data,
    })
    await loginCallback(res.data.token)
  }

  async function forgetPassword(data: any) {
    const res = await http.request<Result>({
      url: 'auth/find-password',
      method: 'post',
      data,
    })
    await loginCallback(res.data.token)
  }

  //登录与注册后记录token
  async function loginCallback(token: string) {
    // storage.set(CacheKey.TOKEN_NAME, token)
    const url = storage.get(CacheKey.REDIRECT_ROUTE_NAME, '/')
    storage.remove(CacheKey.REDIRECT_ROUTE_NAME)
    location.href = url
  }

  return { login, register, forgetPassword, loginCallback }
}

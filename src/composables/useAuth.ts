import { CacheKey } from '@/enum/CacheKey'
import { http } from '@/plugins/axios'
import router from '@/router'
import userStore from '@/store/userStore'
import useStorage from './system/useStorage'
const storage = useStorage()
type Result = {
  user: UserModel
  token: string
}
export default () => {
  async function login(data: { mobile: string; password: string }) {
    const res = await http.request<Result>({
      url: `login`,
      method: 'post',
      data,
    })
    loginCallback(res.data.token)
  }

  async function register(data: { mobile: string; password: string; password_confirmation: string }) {
    const res = await http.request<Result>({
      url: `register`,
      method: 'post',
      data,
    })
    loginCallback(res.data.token)
  }

  async function forgetPassword(data: { mobile: string; password: string; password_confirmation: string }) {
    const res = await http.request<Result>({
      url: 'forget-password',
      method: 'post',
      data,
    })
    loginCallback(res.data.token)
  }
  //登录与注册后记录token
  async function loginCallback(token: string) {
    storage.set(CacheKey.TOKEN_NAME, token)
    router.push(storage.get(CacheKey.REDIRECT_ROUTE_NAME, '/'))
    storage.remove(CacheKey.REDIRECT_ROUTE_NAME)
    userStore().getCurrentUser()
  }

  return { login, register, forgetPassword }
}

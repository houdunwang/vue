import { ILoginForm } from './../apis/types/user'
import utils from '@/utils'
import userApi from '@/apis/userApi'
import { CacheEnum } from '@/enum/CacheEnum'
import store from './store'
import router from '@/router'
import userStroe from '@/store/userStroe'
import { http } from '@/plugins/axios'

export function isLogin(): boolean {
  return !!store.get(CacheEnum.TOKEN_NAME)
}

export async function login(values: ILoginForm) {
  const { data } = await userApi.login(values)
  console.log(data)
  store.set(CacheEnum.TOKEN_NAME, data.token)

  userStroe().getUserInfo()

  const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? 'home'

  router.push({ name: routeName })
}

export async function logout() {
  if (!utils.env.VITE_MOCK_ENABLE) {
    await http.request({ url: 'logout', method: 'get' })
  }

  userStroe().info = null
  store.remove(CacheEnum.TOKEN_NAME)
  router.push({ name: 'home' })
}

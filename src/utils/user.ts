import { ILoginData } from './../apis/userApi'
import userApi from '@/apis/userApi'
import { CacheEnum } from '@/enum/cacheEnum'
import store from './store'
import router from '@/router'
import userStroe from '@/store/userStroe'

export async function login(values: ILoginData) {
  const {
    result: { token },
  } = await userApi.login(values)
  store.set(CacheEnum.TOKEN_NAME, { token })
  const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? 'home'
  router.push({ name: routeName })
}

export function logout() {
  store.remove(CacheEnum.TOKEN_NAME)
  router.push('/')
  userStroe().info = null
}

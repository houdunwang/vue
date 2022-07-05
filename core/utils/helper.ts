import { CacheEnum } from '@@/enum/CacheEnum'
import useStore from '@@/store/userStore'
import store from './store'

//是否是超级管理员
export function isSuperAdmin() {
  const storeUser = useStore()
  return Boolean(storeUser.info?.is_super_admin)
}

//是否登录
export function isLogin(): boolean {
  return !!store.get(CacheEnum.TOKEN_NAME)
}

//退出登录
export async function logout() {
  store.remove(CacheEnum.TOKEN_NAME)
  location.href = '/'
}

//登录与注册后记录token
export async function loginAndRegisterCallback(data: { token: string }) {
  store.set(CacheEnum.TOKEN_NAME, data.token)
  location.href = store.get(CacheEnum.REDIRECT_ROUTE_NAME, '/')
}

//限制点击频繁请求
export function request(fn: (args: any) => Promise<any>) {
  let isSubmit = false
  return (args: any) => {
    if (isSubmit) return
    isSubmit = true
    return fn(args).finally(() => (isSubmit = false))
  }
}

export function access(name: string, site: SiteModel): boolean {
  const storeUser = useStore()
  if (isSuperAdmin() || site.user_id == storeUser.info?.id) {
    return true
  }

  return Boolean(storeUser.permissions.find((permission) => permission.name == name))
}

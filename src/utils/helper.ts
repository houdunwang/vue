import { CacheEnum } from '@/enum/CacheEnum'
import router from '@/router/register'
import store from './store'

//是否登录
export function isLogin(): boolean {
  return !!store.get(CacheEnum.TOKEN_NAME)
}

//退出登录
export async function logout() {
  store.remove(CacheEnum.TOKEN_NAME)
  location.href = '/'
}

/**
 * 登录与注册后记录token
 * @param token
 */
export async function loginCallback(token: string) {
  store.set(CacheEnum.TOKEN_NAME, token)
  location.href = store.get(CacheEnum.REDIRECT_ROUTE_NAME, '/')
}

/**
 * 限制点击频繁
 * @param fn 回调函数
 * @returns
 */
export function request(fn: (args: any) => Promise<any>) {
  let isSubmit = false
  return (args: any) => {
    if (isSubmit) return
    isSubmit = true
    return fn(args).finally(() => (isSubmit = false))
  }
}

//根据URL生成样式类名
export function className() {
  return router.currentRoute.value.fullPath.replace(/\//g, '-').replace(/^\-|\-$/g, '')
}

export function open(url:string) {
  window.open(url)
}

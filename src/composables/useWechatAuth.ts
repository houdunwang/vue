import { CacheKey } from '@/enum/CacheKey'
import { http } from '@/plugins/axios'
import useStorage from './hd/useStorage'
const storage = useStorage()

export default () => {
  //登录与注册后记录token
  const loginCallback = async (token: string) => {
    storage.set(CacheKey.TOKEN_NAME, token)
    const url = storage.get(CacheKey.REDIRECT_ROUTE_NAME, '/')
    storage.remove(CacheKey.REDIRECT_ROUTE_NAME)
    location.href = url
  }

  //微信登录或注册
  const loginOrRegister = async (ticket: string) => {
    if (!ticket) return
    const { data } = await http.request<{ data: { token?: string } }>({
      url: `wechat/auth/${ticket}`,
      method: 'POST',
    })
    if (data?.token) loginCallback(data.token)
  }

  return { loginOrRegister }
}

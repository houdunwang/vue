import { CacheKey } from '@/enum/CacheKey'
import { http } from '@/plugins/axios'
import useStorage from './hd/useStorage'
const storage = useStorage()

export default () => {
  const qr = ref()

  //登录与注册后记录token
  const loginCallback = async () => {
    const url = storage.get(CacheKey.REDIRECT_ROUTE_NAME, '/')
    storage.remove(CacheKey.REDIRECT_ROUTE_NAME)
    location.href = url
  }

  //微信登录或注册
  const scanLogin = async () => {
    if (!qr.value?.ticket) return
    const { data } = await http.request<{ data: { token?: string } }>(
      {
        url: `wechat/sancLogin/${qr.value.ticket}`,
        method: 'POST',
      },
      { loading: false },
    )
    if (data?.token) loginCallback()
  }

  //获取登录二维码
  const scanLoginQr = async () => {
    const { data } = await http.request<{ data: { ticket: string } }>({
      url: `wechat/scanloginQr`,
      method: 'POST',
    })
    qr.value = data
  }

  return { scanLogin, scanLoginQr, qr }
}

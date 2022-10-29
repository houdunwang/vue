import { ElMessageBox } from 'element-plus'
import userStore from '@/store/useUserStore'
import { http } from '@/plugins/axios'

export default () => {
  const storeUser = userStore()

  //使用ticket微信登录
  const bind = async (ticket: string) => {
    const res = await http.request<ApiData<{ token?: string; user: UserModel }>>({
      url: `wechat/bind/${ticket}`,
      method: 'POST',
    })
    storeUser.getCurrentUser()
  }

  //解除绑定
  const unbind = async () => {
    ElMessageBox.confirm('确定解除绑定吗？').then(async () => {
      const res = await http.request<ApiData<{ token?: string; user: UserModel }>>({
        url: `wechat/unbind`,
        method: 'POST',
      })
      storeUser.getCurrentUser()
    })
  }

  return { bind, unbind }
}

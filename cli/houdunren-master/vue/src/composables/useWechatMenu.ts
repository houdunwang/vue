import { http } from '@/plugins/axios'
import { ElMessage } from 'element-plus'

export default () => {
  //使用ticket微信登录
  const createMenu = async () => {
    await http.request({
      url: `wechat/menu`,
      method: 'POST',
    })
  }

  return { createMenu }
}

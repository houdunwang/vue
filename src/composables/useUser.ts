import * as api from '@/apis/user'
import router from '@/router/register'

export default () => {
  const users = ref<ResponsePageResult<UserModel>>()
  const user = ref<UserModel>()
  const sid = router.currentRoute.value.query.sid as any

  const load = async (page = 1, params: Record<any, any> = {}) => {
    users.value = await api.getUserList(page, params)
  }

  const find = async (id: any) => {
    user.value = await api.getUser(id)
  }

  return { sid, users, user, load, find }
}

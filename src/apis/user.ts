import { http } from '@/plugins/axios'

export async function currentUserInfo() {
  const res = await http.request<UserModel>({
    url: `user/current`,
  })
  return res.data
}

export async function userList() {
  return await http.request<UserModel, ResponsePageResult<UserModel>>({ url: `user` })
}

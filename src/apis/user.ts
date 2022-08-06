import { http } from '@/plugins/axios'

export async function currentUserInfo() {
  const r = await http
    .request<UserModel>({
      url: `user/current`,
    })
  return r.data
}

export async function userList() {
  return await http.request<UserModel, ResponsePageResult<UserModel>>({ url: `user`, })
}


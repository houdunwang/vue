import { http } from '@/plugins/axios'

export async function currentUserInfo() {
  return await http
    .request<UserModel>({
      url: `table`,
    })
}

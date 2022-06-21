import { http } from '@/plugins/axios'

export function getUserList(page = 1, params: Record<any, any> = {}) {
  return http.request<UserModel[], ResponsePageResult<UserModel>>({
    url:
      `user?page=${page}&` +
      Object.entries(params)
        .map(([k, v]) => `${k}=${v}`)
        .join('&'),
  })
}

export function currentUserInfo() {
  return http.request<UserModel>({
    url: `current_user_info`,
  })
}

export function getUser(id: number) {
  return http
    .request<UserModel>({
      url: `user/${id}`,
    })
    .then((r) => r.data)
}

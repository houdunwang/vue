import { http } from '@/plugins/axios'

export function getAdminList(site: any, page = 1, params = {}) {
  return http.request<UserModel, ResponsePageResult<UserModel>>({
    url:
      `site/${site}/admin?page=${page}&` +
      Object.entries(params)
        .map(([k, v]) => `${k}=${v}`)
        .join('&'),
  })
}

export async function syncSiteAdmin(siteId: number, user_id: number) {
  return http.request({
    url: `site/${siteId}/admin`,
    method: 'POST',
    data: { user_id },
  })
}

export async function removeSiteAdmin(siteId: number, userId: number) {
  return http.request({
    url: `site/${siteId}/admin/${userId}`,
    method: 'DELETE',
  })
}

export async function adminFind(sid: any, id: any) {
  return http
    .request<UserModel>({
      url: `site/${sid}/admin/${id}`,
    })
    .then((r) => r.data)
}

export async function syncAdminRole(sid: number, aid: number, roles: string[]) {
  return http.request({
    url: `site/${sid}/admin/${aid}/role`,
    method: 'POST',
    data: { roles },
  })
}

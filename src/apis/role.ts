import { http } from '@/plugins/axios'

export function getRoleList(siteId: number, page = 1, params = {}) {
  return http.request<RoleModel, ResponsePageResult<RoleModel>>({
    url:
      `/site/${siteId}/role?page=${page}&` +
      Object.entries(params)
        .map((e) => e.join('='))
        .join('&'),
    method: 'get',
  })
}

export function addRole(siteId: number, data: any) {
  return http.request({
    url: `site/${siteId}/role`,
    method: 'POST',
    data,
  })
}

export function delRole(sid: number, rid: number) {
  return http.request({
    url: `site/${sid}/role/${rid}`,
    method: 'DELETE',
  })
}

export function updateRole(sid: any, role: RoleModel) {
  return http.request({
    url: `site/${sid}/role/${role.id}`,
    method: 'PUT',
    data: role,
  })
}

export function roleFind(sid: any, rid: any) {
  return http.request<RoleModel>({ url: `site/${sid}/role/${rid}` }).then((r) => r.data)
}

import { http } from '@@/plugins/axios'

export function updatePermission(sid: number, rid: any, permissions: any[]) {
  return http.request({
    url: `site/${sid}/role/${rid}/permission`,
    method: 'POST',
    data: { permissions },
  })
}

import { http } from '#/plugins/axios'

export function coreUpdate(data: Record<string, any>) {
  return http.request<any>({
    url: '/core/update',
    method: 'get',
  })
}

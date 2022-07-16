import { http } from '@/plugins/axios'

export function getSitePermission(sid: any) {
  return http.request<any>({
    url: `site/${sid}/permission`,
  })
}

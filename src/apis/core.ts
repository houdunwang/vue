import { http } from '@/plugins/axios'
import router from '@/router/register'

export function coreUpdate(data: Record<string, any>) {
  return http.request<any>({
    url: '/core/update',
    method: 'get',
  })
}

export async function currentSite() {
  const sid = router.currentRoute.value.query.sid as any
  const r = await http.request<any>({
    url: `/core/current_site` + (sid ? `?sid=${sid}` : ''),
  })
  return r.data
}

import { http } from '@/plugins/axios'

export function databaseLinkTest(data: Record<string, any>) {
  return http.request<any>({
    url: 'install/test',
    method: 'POST',
    data,
  })
}

export function migrate() {
  return http.request<any>({
    url: 'install/migrate',
  })
}

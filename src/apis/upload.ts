import { http } from '@/plugins/axios'

export function uploadImage(data: FormData) {
  return http.request<{ url: string }>({
    url: `upload/image`,
    method: 'post',
    data,
  })
}

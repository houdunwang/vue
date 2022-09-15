import { http } from '@/plugins/axios'

type Result = { url: string }

export function uploadImage(data: FormData) {
  return http.request<Result>({
    url: `upload/image`,
    method: 'post',
    data,
  })
}

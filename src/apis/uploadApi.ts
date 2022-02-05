import { http } from '@/plugins/axios'

export interface IUploadImage {
  url: string
}

export function uploadImage(data: FormData) {
  return http.request<IUploadImage>({
    url: `upload/image`,
    method: 'post',
    data,
  })
}

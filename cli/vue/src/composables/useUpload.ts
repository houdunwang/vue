import { http } from '@/plugins/axios'
type UploadResult = { data: { url: string } }

export default () => {
  function uploadImage(data: FormData) {
    return http.request<UploadResult>({
      url: `upload/image`,
      method: 'post',
      data,
    })
  }

  return { uploadImage }
}

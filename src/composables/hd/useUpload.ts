import { http } from '@/plugins/axios'
type Result = { data: { url: string } }

export default () => {
  function uploadImage(data: FormData) {
    return http.request<Result>({
      url: `upload/image`,
      method: 'post',
      data,
    })
  }

  return { uploadImage }
}

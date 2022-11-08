import { Ref } from 'vue'
import { http } from '@/plugins/axios'

export default () => {
  const videos = ref<ApiPage<VideoModel>>() as unknown as Ref<ApiPage<VideoModel>>

  const video = async (content: any, page: any) => {
    videos.value = await http.request<ApiPage<VideoModel>>({
      url: `search/video?content=${content}&page=${page}`,
    })
  }

  return {
    videos,
    video,
  }
}

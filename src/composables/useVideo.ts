import { Ref } from 'vue'
import { http } from '@/plugins/axios'
import router from '@/router'

export default () => {
  const collection = ref<ApiPage<VideoModel>>() as unknown as Ref<ApiPage<VideoModel>>
  const model = ref<VideoModel>() as unknown as Ref<VideoModel>

  const findAll = async (page: any) => {
    collection.value = await http.request<ApiPage<VideoModel>>({
      url: `video?page=${page}`,
    })
  }

  //获取课程视频
  const getLessonVideo = async (lessonId: any) => {
    const { data } = await http.request<ApiData<VideoModel[]>>({
      url: `video/lesson/${lessonId}`,
    })
    return data
  }

  const findOne = async (id: any) => {
    const { data } = await http.request<{ data: VideoModel }>({
      url: `video/${id}`,
    })
    const title = useTitle(null)
    title.value = data.title
    model.value = data
  }

  const preVideo = computed<VideoModel | undefined>(() => {
    const videos = model.value?.lesson?.videos!
    const index = videos.findIndex((v) => v.id == model.value?.id) as number
    return videos[index - 1]
  })

  const nextVideo = computed<VideoModel | undefined>(() => {
    const videos = model.value?.lesson?.videos!
    const index = videos.findIndex((v) => v.id == model.value?.id) as number
    return videos[index + 1]
  })

  const search = async (content: any, page: any) => {
    collection.value = await http.request<ApiPage<VideoModel>>({
      url: `video/search?content=${content}&page=${page}`,
    })
  }

  return {
    model,
    findOne,
    preVideo,
    nextVideo,
    findAll,
    collection,
    getLessonVideo,
    search,
  }
}

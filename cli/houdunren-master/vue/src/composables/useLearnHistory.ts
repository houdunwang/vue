import { Ref } from 'vue'
import { http } from '@/plugins/axios'

export default () => {
  const collection = ref<VideoModel[]>() as unknown as Ref<VideoModel[]>

  //视频学习动态
  const videoDynamics = async () => {
    return await http.request<
      ApiData<{ id: number; created_at: string; updated_at: string; user: UserModel; video: VideoModel }[]>
    >({ url: `learn/history/videos` }, { loading: false })
  }

  //课程学习历史
  const learnLessons = async () => {
    return await http
      .request<ApiData<LessonModel[]>>({ url: `learn/history/lessons` }, { loading: false })
      .then((r) => r.data)
  }

  //课程学习的视频历史
  const lessonVideo = async (lessonId: any) => {
    const { data } = await http.request<ApiData<VideoModel[]>>({
      url: `learn/history/lessonVideos/${lessonId}`,
    })
    collection.value = data
  }

  //用户学习视频历史
  const userVideos = async (uid: any, page: any = 1) => {
    return await http.request<ApiPage<VideoModel>>(
      {
        url: `learn/history/user/${uid}?page=${page}`,
      },
      { loading: false },
    )
  }

  return {
    collection,
    videoDynamics,
    lessonVideo,
    userVideos,
    learnLessons,
  }
}

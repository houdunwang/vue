import { http } from '@/plugins/axios'

export default () => {
  const duration = ref<DurationModel>()
  const get = async () => {
    const { data } = await http.request<ApiData<DurationModel>>({
      url: `duration`,
    })
    duration.value = data
  }

  return { get, duration }
}

import router from '@/router'
import { http } from '@/plugins/axios'
export default () => {
  const taskMake = async () => {
    await http.request<ApiData<null>>({
      url: `task/make`,
      method: 'POST',
    })
    router.push({ name: 'user.duration' })
  }

  return { taskMake }
}

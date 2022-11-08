import { Ref } from 'vue'
import { http } from '@/plugins/axios'

interface IConfig {
  [key: string]: Record<string, any>
}

export default () => {
  const config = ref<ConfigModel>() as unknown as Ref<ConfigModel>

  const get = async () => {
    const { data } = await http.request<ApiData<ConfigModel>>({
      url: `config/all`,
    })
    config.value = data
    return data
  }

  //用户收藏列表
  const update = async () => {
    await http.request<ApiPage<any>>({
      url: `config`,
      method: 'PUT',
      data: config.value,
    })
  }

  return { get, update, config }
}

import { http } from '@/plugins/axios'
import { defineStore } from 'pinia'

export default defineStore('config', () => {
  const config = ref()

  const get = async () => {
    const { data } = await http.request<ApiData<ConfigModel>>({
      url: `config/base`,
    })
    config.value = data
  }
  return { config, get }
})

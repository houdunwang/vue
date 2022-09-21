import { http } from '@/plugins/axios'
import { ref } from 'vue'

export default () => {
  const collection = ref<ApiPage<UserModel>>()
  async function findAll() {
    collection.value = await http.request<UserModel, ApiPage<UserModel>>({ url: `user` })
  }
  return { collection, findAll }
}

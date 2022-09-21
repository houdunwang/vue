import useStorage from '@/composables/system/useStorage'
import { http } from '@/plugins/axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { CacheKey } from '@/enum/CacheKey'

export default defineStore('userStore', () => {
  const user = ref<UserModel>()
  const storage = useStorage()
  const getCurrentUser = async () => {
    if (storage.get(CacheKey.TOKEN_NAME)) {
      const res = await http.request<UserModel>({
        url: `user/current`,
      })
      user.value = res.data
    }
  }

  return { user, getCurrentUser }
})

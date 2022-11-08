import useStorage from '@/composables/hd/useStorage'
import { CacheKey } from '@/enum/CacheKey'
import { http } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => {
    return {
      user: undefined as UserModel | undefined,
    }
  },
  getters: {
    isAdministrator: (state) => state.user?.id == 1,
  },
  actions: {
    setUser(data: UserModel) {
      this.user = data
    },
    async getCurrentUser() {
      const storage = useStorage()
      try {
        const res = await http.request<ApiData<UserModel>>({
          url: `user/current`,
        })
        this.user = res.data
      } catch (error) {
        // storage.remove(CacheKey.TOKEN_NAME)
        router.push({ name: 'login' })
      }
    },
  },
})

import useUtil from '@/composables/hd/useUtil'
import { http } from '@/plugins/axios'
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
      if (useUtil().isLogin()) {
        const res = await http.request<ApiData<UserModel>>({
          url: `user/current`,
        })
        this.user = res.data
      }
    },
  },
})

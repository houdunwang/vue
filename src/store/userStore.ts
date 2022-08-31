import { defineStore } from 'pinia'
import { currentUserInfo } from '@/apis/user'

export default defineStore('userStore', {
  state: () => {
    return {
      info: {} as UserModel,
      permissions: [] as string[],
    }
  },

  actions: {
    async getUserInfo() {
      this.info = await currentUserInfo()
    },
  },
})

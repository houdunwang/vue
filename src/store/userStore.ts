import { defineStore } from 'pinia'
import { currentUserInfo } from '@/apis/user'
import { UserModel } from '#/model'

export default defineStore('userStore', {
  state: () => {
    return {
      info: {} as UserModel,
    }
  },

  actions: {
    async getUserInfo() {
      this.info = await currentUserInfo()
    },
  },
})

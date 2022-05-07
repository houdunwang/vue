import { CacheEnum } from '../enum/CacheEnum'
import store from '@/utils/store'
import { defineStore } from 'pinia'
import { IUser } from '@/apis/types/user'
import { apiInfo } from '@/apis/userApi'

export default defineStore('userStore', {
  state: () => {
    return {
      info: {} as null | IUser,
    }
  },
  actions: {
    async getUserInfo() {
      if (store.get(CacheEnum.TOKEN_NAME)) {
        this.info = await apiInfo().then((r) => r.data)
      }
    },
    resetInfo() {
      this.info = null
    },
  },
})

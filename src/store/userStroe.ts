import { CacheEnum } from '../enum/CacheEnum'
import userApi from '@/apis/userApi'
import store from '@/utils/store'
import { defineStore } from 'pinia'
import { IUser } from '@/apis/types/user'

export default defineStore('userStore', {
  state: () => {
    return {
      info: {} as null | IUser,
    }
  },
  actions: {
    async getUserInfo() {
      if (store.get(CacheEnum.TOKEN_NAME)) {
        this.info = await userApi.info().then((r) => r.data)
      }
    },
  },
})

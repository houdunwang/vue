import { currentUserInfo } from '@/apis/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('userStore', () => {
  const user = ref<UserModel>({})

  const getUser = async () => {
    user.value = await currentUserInfo()
  }

  return { user, getUser }
})

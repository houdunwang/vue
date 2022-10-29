import { http } from '@/plugins/axios'
import { ref } from 'vue'

export default () => {
  const collection = ref<ApiPage<UserModel>>()
  const model = ref<UserModel>()

  async function findAll() {
    collection.value = await http.request<ApiPage<UserModel>>({ url: `user` })
  }

  const findOne = async (id: number) => {
    const { data } = await http.request<ApiData<UserModel>>({
      url: `user/${id}`,
    })
    model.value = data
  }

  const update = async (data: any) => {
    const { data: user } = await http.request<ApiData<UserModel>>({
      url: `user/update`,
      method: 'PUT',
      data,
    })
    model.value = user
  }

  const updatePassword = async (data: any) => {
    const { data: user } = await http.request<ApiData<UserModel>>({
      url: `user/password`,
      method: 'PUT',
      data,
    })
    model.value = user
  }

  const updateEmail = async (data: any) => {
    await http.request({
      url: `user/email`,
      method: 'PUT',
      data,
    })
  }

  const updateMobile = async (data: any) => {
    await http.request({
      url: `user/mobile`,
      method: 'PUT',
      data,
    })
  }

  const accountIsExists = (data: { account: any }) => {
    return http.request<ApiData<boolean>>({
      url: `user/account_is_exists`,
      method: 'POST',
      data,
    })
  }
  return { collection, findAll, findOne, model, update, updatePassword, updateEmail, updateMobile, accountIsExists }
}

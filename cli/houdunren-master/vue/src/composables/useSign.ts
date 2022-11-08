import { ElMessageBox } from 'element-plus'
import userStore from '@/store/hd/useUserStore'
import { http } from '@/plugins/axios'

export default () => {
  const collection = ref<SignModel[]>()
  const userCollection = ref<ApiPage<SignModel>>()
  const paginateCollection = ref<ApiPage<SignModel>>()

  //今日签到列表
  const getTodaySignList = async () => {
    const { data } = await http.request<ApiData<SignModel[]>>({
      url: `sign/todaySignList`,
    })
    collection.value = data
  }

  //用户签到列表
  const getUserSignList = async (uid: any, page: any) => {
    userCollection.value = await http.request<ApiPage<SignModel>>({
      url: `sign/userSignList/${uid}?page=${page}`,
    })
  }

  //用户今日签到数据
  const todaySign = computed(() => {
    return collection.value?.find((sign) => sign.user_id == userStore().user?.id)
  })

  //添加签到
  const add = async (data: any) => {
    const { data: sign } = await http.request<ApiData<SignModel>>({
      url: 'sign',
      method: 'POST',
      data,
    })
    collection.value?.push(sign)
  }

  //删除签到
  const remove = async (id: number) => {
    await ElMessageBox.confirm('确定删除吗？')
    await http.request<ApiData<SignModel>>({
      url: `sign/${id}`,
      method: 'DELETE',
    })
    collection.value?.splice(
      collection.value.findIndex((v) => v.id == id),
      1,
    )
  }
  return {
    collection,
    getTodaySignList,
    add,
    todaySign,
    remove,
    getUserSignList,
    userCollection,
    paginateCollection,
  }
}

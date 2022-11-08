import { http } from '@/plugins/axios'

interface IFavour {
  total: number
  state: boolean
  users: UserModel[]
}

export default () => {
  const favour = ref<IFavour>()

  //切换点赞
  const toggleFavour = async (type: string, mid: number) => {
    favour.value = await http.request<IFavour>({
      url: `favour/${type}/${mid}`,
      method: 'POST',
    })
  }

  //模型点赞信息
  const findModelFavourInfo = async (type: string, mid: any) => {
    favour.value = await http.request<IFavour>({
      url: `favour/${type}/${mid}`,
    })
  }

  return { favour, toggleFavour, findModelFavourInfo }
}

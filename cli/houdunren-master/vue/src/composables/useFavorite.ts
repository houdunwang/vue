import { http } from '@/plugins/axios'

interface IFavorite {
  total: number
  state: boolean
  is_favorite: boolean
}

export default () => {
  const collection = ref<ApiPage<any>>()
  const favorite = ref<IFavorite>()

  const toggleFavorite = async (type: string, mid: number) => {
    favorite.value = await http.request<IFavorite>({
      url: `favorite/${type}/${mid}`,
      method: 'POST',
    })
  }

  const find = async (type: string, mid: any) => {
    favorite.value = await http.request<IFavorite>({
      url: `favorite/${type}/${mid}`,
    })
  }

  //用户收藏列表
  const getUserFavorite = async (type: string, uid: any) => {
    collection.value = await http.request<ApiPage<any>>({
      url: `favorite/userFavoriteList/${type}/${uid}`,
    })
  }

  return { favorite, toggleFavorite, find, getUserFavorite, collection }
}

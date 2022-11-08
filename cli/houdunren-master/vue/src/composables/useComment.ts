import { http } from '@/plugins/axios'
export default () => {
  const collection = ref<CommentModel[]>([])
  const form = ref({ content: '' })

  const findAll = async (type: string, mid: number) => {
    const { data } = await http.request<ApiData<CommentModel[]>>({
      url: `comment?type=${type}&mid=${mid}`,
    })

    collection.value = data
  }

  const add = async (type: string, mid: number, data: any) => {
    const { data: comment } = await http.request<{ data: CommentModel }>({
      url: `comment?type=${type}&mid=${mid}`,
      method: 'POST',
      data,
    })
    return comment
  }

  const remove = async (id: number) => {
    await http.request<ApiData<null>>({
      url: `comment/${id}`,
      method: 'DELETE',
    })
  }

  return { findAll, collection, add, form, remove }
}

import { Ref } from 'vue'
import { http } from '@/plugins/axios'
import { ElMessageBox } from 'element-plus'
import qs from 'qs'
export default () => {
  const collection = ref<SystemModel[]>() as unknown as Ref<SystemModel[]>
  const model = ref<SystemModel>({ title: '', description: '', preview: '', download_address: '', type: 'system' })

  const findAll = async (page = 1, params = {}) => {
    const { data } = await http.request<ApiData<SystemModel[]>>({
      url: `system?page=${page}&` + qs.stringify(params),
    })
    collection.value = data
  }

  const findOne = async (id: any) => {
    const { data } = await http.request<{ data: SystemModel }>({
      url: `system/${id}`,
    })
    const title = useTitle(null)
    title.value = data.title
    model.value = data
  }

  const add = async () => {
    await http.request<{ data: SystemModel }>({
      url: `system`,
      method: 'POST',
      data: model.value,
    })
  }

  const update = async () => {
    await http.request<{ data: SystemModel }>({
      url: `system/${model.value?.id}`,
      method: 'PUT',
      data: model.value,
    })
  }

  const remove = async (id: any) => {
    try {
      await ElMessageBox.confirm('确定删除吗?', '温馨提示')
      await http.request({
        url: `system/${id}`,
        method: 'DELETE',
      })
      location.reload()
    } catch (error) {}
  }

  const order = async (data: SystemModel[]) => {
    await http.request({
      url: `system/order`,
      method: 'PUT',
      data,
    })
  }

  return { findAll, collection, findOne, model, update, order, add, remove }
}

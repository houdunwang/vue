import { http } from '@/plugins/axios'
import qs from 'qs'
import router from '@/router'
import { Ref } from 'vue'
import { ElMessageBox } from 'element-plus'

export default () => {
  const collection = ref<ApiPage<SoftModel>>() as unknown as Ref<ApiPage<SoftModel>>
  const model = ref<SoftModel>() as unknown as Ref<SoftModel>

  const findAll = async (page: any, params = {}) => {
    collection.value = await http.request<ApiPage<SoftModel>>({
      url: `soft?page=${page}&` + qs.stringify(params),
    })
  }

  const findOne = async (id: any) => {
    const { data } = await http.request<ApiData<SoftModel>>({
      url: `soft/${id}`,
    })
    model.value = data
  }

  const add = async (data: any) => {
    await http.request<{ data: SystemModel }>({
      url: `soft`,
      method: 'POST',
      data,
    })
    router.push({ name: 'soft.admin.index' })
  }

  const update = async (data: any) => {
    await http.request<{ data: SoftModel }>({
      url: `soft/${data.id}`,
      method: 'PUT',
      data,
    })

    router.push({ name: 'soft.admin.index' })
  }

  const remove = async (id: number) => {
    await ElMessageBox({ message: '确定删除吗?' })
    await http.request({
      url: `soft/${id}`,
      method: 'DELETE',
    })

    const index = collection.value.data.findIndex((v) => v.id == id)
    collection.value.data.splice(index, 1)
  }

  return { findAll, collection, findOne, model, update, remove, add }
}

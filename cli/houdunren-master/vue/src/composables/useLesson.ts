import { http } from '@/plugins/axios'
import qs from 'qs'
import router from '@/router'
import { Ref } from 'vue'
import { ElMessageBox } from 'element-plus'

export default () => {
  const collection = ref<ApiPage<LessonModel>>() as unknown as Ref<ApiPage<LessonModel>>
  const model = ref<LessonModel>() as unknown as Ref<LessonModel>

  const findAll = async (page: any, params = {}) => {
    collection.value = await http.request<ApiPage<LessonModel>>({
      url: `lesson?page=${page}&` + qs.stringify(params),
    })
  }

  const findOne = async (id: any) => {
    const { data } = await http.request<ApiData<LessonModel>>({
      url: `lesson/${id}`,
    })
    const title = useTitle(null)
    title.value = data.title
    model.value = data
  }

  const add = async (data: any) => {
    await http.request<{ data: SystemModel }>({
      url: `lesson`,
      method: 'POST',
      data,
    })
    router.push({ name: 'lesson.admin' })
  }

  const update = async (data: any) => {
    await http.request<{ data: LessonModel }>({
      url: `lesson/${data.id}`,
      method: 'PUT',
      data,
    })

    router.push({ name: 'lesson.admin' })
  }

  const remove = async (id: any) => {
    try {
      await ElMessageBox.confirm('确定删除吗?', '温馨提示')
      await http.request({
        url: `lesson/${id}`,
        method: 'DELETE',
      })
      location.reload()
    } catch (error) {}
  }

  return { findAll, collection, findOne, model, update, remove, add }
}

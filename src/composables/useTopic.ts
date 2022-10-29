import { ElMessageBox } from 'element-plus'
import router from '@/router'
import { http } from '@/plugins/axios'
import qs from 'qs'
import { Ref } from 'vue'
import useUtil from './hd/useUtil'

export default () => {
  const collection = ref<ApiPage<TopicModel>>() as unknown as Ref<ApiPage<TopicModel>>
  const model = ref<TopicModel>() as unknown as Ref<TopicModel>
  const { request } = useUtil()

  const findAll = async (page: any, params = {}) => {
    collection.value = await http.request<ApiPage<TopicModel>>({
      url: `topic?page=${page}&` + qs.stringify(params),
    })
  }

  //推荐贴子列表
  const getRecommendList = async () => {
    const { data } = await http.request<ApiData<TopicModel[]>>({
      url: `topic/recommend`,
    })
    return data
  }

  //用户贴子列表
  const userToipcList = async (userId: any, page: any = 1) => {
    collection.value = await http.request<ApiPage<TopicModel>>({
      url: `topic/user/${userId}?page=${page}`,
    })
  }

  const findOne = async (id: number) => {
    const { data } = await http.request<ApiData<TopicModel>>({
      url: `topic/${id}`,
    })
    model.value = data
  }

  const add = async (data: any) => {
    const { data: topic } = await http.request<{ data: TopicModel }>({
      url: `topic`,
      method: 'POST',
      data,
    })
    router.push({ name: 'topic.show', params: { id: topic.id } })
  }

  const update = async (data: any) => {
    await http.request<{ data: TopicModel }>({
      url: `topic/${data.id}`,
      method: 'PUT',
      data,
    })
    const route = router.resolve({ name: 'topic.show', params: { id: data.id } })
    location.href = route.fullPath
  }

  const remove = async (id: number) => {
    await ElMessageBox({ message: '确定删除吗？' })
    await http.request<ApiData<null>>({
      url: `topic/${id}`,
      method: 'DELETE',
    })
    router.push({ name: 'topic' })
  }

  //贴子推荐属性切换
  const toggleRecommend = async (id: number) => {
    const { data } = await http.request<ApiData<boolean>>({
      url: `topic/recommend/${id}`,
      method: 'PUT',
    })
    model.value.recommend = data
  }

  return { findAll, collection, findOne, model, add, update, remove, userToipcList, toggleRecommend, getRecommendList }
}

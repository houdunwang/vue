import { ElMessage } from 'element-plus'
import { deleteSite } from '@/apis/site'
import _ from 'lodash'

interface IField {
  name: string
  title: string
  form?: string
}

export default <T extends { id?: number; [x: string]: any }>(fields: IField[] = []) => {
  //分布数据
  const collection = ref<ResponsePageResult<T>>()
  //单条数据
  const model = ref<T>(_.zipObject(fields.map((item) => item.name)) as unknown as T)

  //加载分页数据
  const load = async (api: () => Promise<ResponsePageResult<T>>) => {
    collection.value = await api()
  }

  //单条资源
  const find = async (api: (id: number) => Promise<ResponseResult<T>>, id: number) => {
    model.value = await api(id).then((r) => r.data)
  }

  //删除站点
  const remove = async (id: number) => {
    await deleteSite(id)
  }

  //添加更新站点
  const post = async <T>(api: (data: T) => Promise<ResponseResult<T>>) => {
    await api(model.value)
    ElMessage.success(model.value.id ? '更新成功' : '添加成功')
  }

  return { load, post, remove, collection, model, find }
}

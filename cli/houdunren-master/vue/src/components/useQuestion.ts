import useUtil from '@/composables/hd/useUtil'
import { http } from '@/plugins/axios'
import router from '@/router'
import { ElMessage, ElMessageBox } from 'element-plus'

export default () => {
  const util = useUtil()
  const collection = ref<ApiPage<QuestionModel>>()
  const model = reactive<QuestionModel>({
    answer: [],
    description: '',
    lists: [{ title: '' }, { title: '' }],
    type: 'radio',
    user: undefined,
    category: 'web',
    favour_count: 0,
  })

  //添加答案
  const addItem = () => {
    if (model.lists.length >= 4) return ElMessage.error('不能超过4个答案')
    model.lists.push({ title: '' })
  }
  //删除答案
  const removeItem = async (index: number) => {
    if (model.lists.length <= 2) return ElMessage.error('最少要有两个选项')
    try {
      await ElMessageBox.confirm('确定删除吗？', '温馨提示')
      model?.lists.splice(index, 1)
    } catch (error) {}
  }
  //设置类型
  const setAnswer = (index: number) => {
    if (model.type == 'checkbox') return
    model.answer = []
    model.answer.push(index)
  }

  //问题类型
  const changeType = () => {
    if (model) model.answer = []
  }

  //发表问题
  const add = async () => {
    const lists = model.lists.filter((v) => v.title.trim().length)
    if (model.description.length < 20) return ElMessage.error('问题描述不能少于20个字')
    if (lists.length < 2) return ElMessage.error('答案不能少于两个')
    if (model.answer.length == 0) return ElMessage.error('你没有设置正确答案')

    await http.request({
      url: 'question',
      method: 'POST',
      data: model,
    })
    location.href = router.resolve({ name: 'question.my' }).fullPath
  }

  //发表问题
  const update = async () => {
    const lists = model.lists.filter((v) => v.title.trim().length)

    if (model.description.length < 10) return ElMessage.error('问题描述不能少于20个字')
    if (lists.length < 2) return ElMessage.error('答案不能少于两个')
    if (model.answer.length == 0) return ElMessage.error('你没有设置正确答案')

    await http.request({
      url: `question/${model.id}`,
      method: 'PUT',
      data: model,
    })
    location.href = router.resolve({ name: 'question.my' }).fullPath
  }

  //删除问题
  const del = async (id: any) => {
    try {
      await ElMessageBox.confirm('确定删除吗？', '温馨提示')
      await http.request<ApiPage<QuestionModel>>({
        url: `question/${id}`,
        method: 'DELETE',
      })
      location.reload()
    } catch (error) {}
  }

  //获取问题
  const find = async (id: any) => {
    const { data } = await http.request<
      ApiData<QuestionModel & { prev_question: QuestionModel; next_question: QuestionModel }>
    >({
      url: `question/${id}`,
    })

    return data
  }

  //获取用户出的题
  const getUserQuestion = async (uid: any) => {
    collection.value = await http.request<ApiPage<QuestionModel>>({
      url: `question/user_question_list/${uid}?page=${util.routeQuery('page', 1)}`,
      method: 'GET',
    })
  }

  //获取用户出的题
  const getExamine = async () => {
    collection.value = await http.request<ApiPage<QuestionModel>>({
      url: `question/examine?page=${util.routeQuery('page', 1)}`,
      method: 'GET',
    })
  }

  //所有考题
  const getAllQuestion = async () => {
    collection.value = await http.request<ApiPage<QuestionModel>>({
      url: `question?page=${util.routeQuery('page', 1)}`,
    })
  }

  //上一个，下一个问题
  const getRelationQuestion = async (id: any) => {
    const { data } = await http.request<ApiData<{ prev_question: QuestionModel; next_question: QuestionModel }>>({
      url: `question/relation_question/${id}`,
    })
    return data
  }

  return {
    getRelationQuestion,
    getAllQuestion,
    model,
    addItem,
    removeItem,
    setAnswer,
    changeType,
    add,
    collection,
    getUserQuestion,
    del,
    find,
    update,
    getExamine,
  }
}

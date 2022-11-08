import { http } from '@/plugins/axios'
import router from '@/router'

export default () => {
  const questions = ref<(QuestionModel & { answer: any[] })[]>()
  const error = ref()

  //获取考题
  const getQuestions = async () => {
    try {
      let { data } = await http.request<ApiData<QuestionModel[]>>({ url: `question_answer` }, { message: false })
      questions.value = data.map((question: QuestionModel) => {
        question.answer = []
        return question
      })
    } catch (err: any) {
      error.value = err.message
    }
  }

  //查看成绩
  const find = async (id: any) => {
    const { data } = await http.request<ApiData<{ questions: QuestionModel[]; answer: QuestionAnswerModel }>>({
      url: `question_answer/${id}`,
    })
    return data
  }

  //交卷
  const submit = async () => {
    const { data } = await http.request<ApiData<QuestionAnswerModel>>({
      url: `question_answer`,
      method: 'POST',
      data: questions.value?.map((q) => {
        return { id: q.id, answer: q.answer }
      }),
    })
    location.href = router.resolve({ name: 'question_answer.show', params: { id: data.id } }).fullPath
  }

  //今日成绩排行榜
  const getRankingList = async () => {
    const { data } = await http.request<ApiData<QuestionAnswerModel[]>>({ url: `question_answer/ranking_list` })
    return data
  }

  //本周成绩排行榜
  const getQuestionRankTotal = async () => {
    const { data } = await http.request<ApiData<{ user: UserModel; total: number; id: number }[]>>({
      url: `question_answer/questionRankTotal`,
    })
    return data
  }

  //我的考试历史
  const myAnswerList = async () => {
    return await http.request<ApiPage<QuestionAnswerModel>>({ url: `question_answer/my_answer_list` })
  }
  return { questions, getQuestions, submit, find, getRankingList, error, myAnswerList, getQuestionRankTotal }
}

import { ElMessage } from 'element-plus'
import { apiCodeToExistUser, apiCodeToNoExistUser, apiCode } from '@@/apis/codeApi'
import store from '@@/utils/store'
import dayjs from 'dayjs'

export type ICodeSendType = 'any' | 'exist' | 'notExist'
export default () => {
  const sendCode = async (account: string, type: ICodeSendType = 'any') => {
    switch (type) {
      case 'exist':
        await apiCodeToExistUser(account)
        break
      case 'notExist':
        await apiCodeToNoExistUser(account)
        break
      default:
        await apiCode(account)
    }
    store.set('codeSendTime', dayjs())
  }

  const sendTime = () => {
    const time = store.get('codeSendTime')
    return time ? 60 - dayjs().diff(time, 'second') : -1
  }
  return { sendTime, sendCode }
}

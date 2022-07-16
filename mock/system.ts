import { MockMethod } from 'vite-plugin-mock'

const data = {
  id: 1,
  title: '后盾人每晚8点直播',
  tel: null,
  logo: '/images/logo.png',
  email: null,
  address: null,
  wechat: null,
  qq: null,
  icp: null,
  copyright: null,
  config: {
    code: {
      expire: '600',
      length: 4,
      timeout: 60,
    },
    aliyun: {
      access_key_id: '',
      sms_sign_name: '身份验证',
      access_key_secret: '',
    },
    avatar: {
      width: '500',
      height: '100',
    },
    upload: {
      size: 2000,
      mimes: 'doc,pdf',
    },
  },
  created_at: '2022-07-04T22:27:31.000000Z',
  updated_at: '2022-07-04T22:27:31.000000Z',
}
export default [
  {
    url: '/api/system',
    method: 'get',
    response: () => {
      return {
        code: 0,
        status: 'success',
        message: '',
        data,
      }
    },
  },
  {
    url: '/api/system/1',
    method: 'put',
    response: () => {
      return {
        code: 0,
        status: 'success',
        message: '更新成功',
        data,
      }
    },
  },
] as MockMethod[]

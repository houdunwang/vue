import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/system',
    method: 'get',
    response: () => {
      return {
        code: 0,
        status: 'success',
        message: '',
        data: {
          id: 1,
          title: '后盾人',
          tel: null,
          logo: '/static/logo.png',
          email: null,
          address: null,
          wechat: null,
          qq: null,
          icp: null,
          copyright: null,
          config: {
            code: { expire: '600', length: 4, timeout: 60 },
            aliyun: {
              access_key_id: '',
              sms_sign_name: '',
              access_key_secret: '',
            },
            avatar: { width: '500', height: '100' },
            upload: { size: 2000, mimes: 'doc,pdf' },
          },
          created_at: '2022-06-20T08:08:10.000000Z',
          updated_at: '2022-06-20T08:08:10.000000Z',
        },
      }
    },
  },
  {
    url: '/api/system/1',
    method: 'put',
    response: () => {},
  },
] as MockMethod[]

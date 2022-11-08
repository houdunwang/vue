import { user } from './helper/data'
import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '登录成功',
        status: 'success',
        data: {
          token: Random.string(10),
        },
      }
    },
  },
  {
    url: '/api/register',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '注册成功',
        status: 'success',
        data: {
          user,
          token: Random.string(10),
        },
      }
    },
  },
  {
    url: '/api/forget-password',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '密码设置成功',
        status: 'success',
        data: {
          token: Random.string(10),
        },
      }
    },
  },
] as MockMethod[]

import { MockMethod } from 'vite-plugin-mock'
import { user } from './helper/data'
import { createPaginate } from './helper'

export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请示成功',
        status: 'success',
        data: user,
      }
    },
  },
  {
    url: '/api/user/current',
    method: 'get',
    response: () => {
      return {
        code: 0,
        status: 'success',
        message: '',
        data: user,
      }
    },
  },
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return createPaginate(20)
    },
  },
] as MockMethod[]

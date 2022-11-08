import { MockMethod } from 'vite-plugin-mock'
import { user } from './helper/data'
import { createPaginate } from './helper'

export default [
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
] as MockMethod[]

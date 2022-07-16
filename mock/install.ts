import { MockMethod } from 'vite-plugin-mock'
import { createPaginate } from './helper'

export default [
  {
    url: '/api/install/test',
    method: 'post',
    response: () => {
      return {
        message: '测试成功',
      }
    },
  },
  {
    url: '/api/install/migrate',
    method: 'GET',
    response: () => {
      return {
        message: '数据导入成功',
      }
    },
  },
] as MockMethod[]

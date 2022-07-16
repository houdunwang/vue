import { MockMethod } from 'vite-plugin-mock'
import { createPaginate } from './helper'
export default [
  {
    url: '/api/',
    method: 'get',
    response: () => {},
  },
] as MockMethod[]

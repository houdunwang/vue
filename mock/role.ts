import { MockMethod } from 'vite-plugin-mock'
import { createPaginate } from './helper'

const data = {
  id: 1,
  name: 'Eveniet et nostrum error.',
  description: 'Ea distinctio sequi nemo facere quo voluptatem architecto.',
  site_id: 1,
  guard_name: 'sanctum',
  created_at: '2022-07-05T18:10:59.000000Z',
  updated_at: '2022-07-05T18:10:59.000000Z',
  permissions: [],
}

const collects = createPaginate(data)
export default [
  {
    url: '/api/site/1/role',
    method: 'get',
    response: () => {
      return collects
    },
  },
  {
    url: '/api/site/1/role/1',
    method: 'get',
    response: () => {
      return {
        data,
      }
    },
  },
  {
    url: '/api/site/1/role',
    method: 'POST',
    response: () => {
      return {
        message: '角色添加成功',
      }
    },
  },
  {
    url: '/api/site/1/role/1',
    method: 'PUT',
    response: () => {
      return {
        message: '角色更新成功',
      }
    },
  },
  {
    url: '/api/site/1/role/1',
    method: 'delete',
    response: () => {
      return {
        message: '角色删除成功',
      }
    },
  },
] as MockMethod[]

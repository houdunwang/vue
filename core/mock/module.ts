import { MockMethod } from 'vite-plugin-mock'
import { createPaginate } from './helper'
const data = {
  id: 1,
  title: '博客@@',
  name: 'Blog',
  version: '1.0',
  author: '后盾人',
  preview: '/images/xj.jpg',
  install: false,
  admin: true,
  front: true,
  config: {
    title: '博客',
    name: 'Blog',
    version: '1.0',
    author: '后盾人',
    admin: true,
    front: true,
  },
  created_at: '2022-06-20T08:08:10.000000Z',
  updated_at: '2022-06-20T08:08:10.000000Z',
}
const collects = createPaginate(data)

export default [
  {
    url: '/api/module',
    method: 'get',
    response: () => {
      return collects
    },
  },
  {
    url: '/api/module/1',
    method: 'DELETE',
    response: () => {
      return {
        message: '模块删除成功',
      }
    },
  },
  {
    url: '/api/module',
    method: 'POST',
    response: () => {
      return {
        message: '模块添加成功',
      }
    },
  },
] as MockMethod[]

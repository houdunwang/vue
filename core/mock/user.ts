import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
import { createPaginate } from './helper'

const data = {
  avatar: '/images/xj.jpg',
  id: Random.id(),
  name: '向军大叔',
  sex: 2,
  email: Random.email(),
  real_name: null,
  home: null,
  weibo: null,
  wechat: null,
  github: null,
  qq: null,
  wakatime: null,
  email_verified_at: Random.datetime(),
  mobile_verified_at: null,
  lock: null,
  credit1: null,
  credit2: null,
  credit3: null,
  credit4: null,
  credit5: null,
  credit6: null,
  favour_count: 0,
  favorite_count: 0,
  is_super_admin: true,
  permissions: ['article_edit', 'markdown_editor', 'base_editor'],
  roles: [],
}

export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请示成功',
        status: 'success',
        data,
      }
    },
  },
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
    url: '/api/current_user_info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        status: 'success',
        message: '',
        data,
        token: Random.string(10),
      }
    },
  },
  {
    url: '/api/user/1',
    method: 'get',
    response: () => {
      return {
        data,
      }
    },
  },
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return createPaginate(data)
    },
  },
] as MockMethod[]

import { MockMethod } from 'vite-plugin-mock'
import { createPaginate } from './helper'
const data = {
  id: 2,
  title: 'Aut voluptatem neque facere sit.',
  url: null,
  tel: null,
  email: null,
  address: null,
  wechat: null,
  qq: null,
  icp: null,
  copyright: null,
  logo: null,
  description: null,
  keywords: null,
  module_id: null,
  config: {
    aliyun: {
      access_key_id: null,
      sms_sign_name: '身份验证',
      access_key_secret: null,
    },
  },
  user_id: 2,
  created_at: '2022-07-04T22:27:31.000000Z',
  updated_at: '2022-07-05T16:54:59.000000Z',
  master: {
    id: 2,
    name: '后盾人',
    sex: 1,
    email: 'houdunren@qq.com',
    real_name: null,
    home: null,
    weibo: null,
    wechat: null,
    github: null,
    qq: null,
    wakatime: null,
    email_verified_at: '2022-07-04T22:27:31.000000Z',
    mobile_verified_at: null,
    created_at: '2022-07-04T22:27:31.000000Z',
    updated_at: '2022-07-04T22:27:31.000000Z',
    lock: null,
    credit1: null,
    credit2: null,
    credit3: null,
    credit4: null,
    credit5: null,
    credit6: null,
    favour_count: 0,
    favorite_count: 0,
    is_super_admin: false,
  },
}

const collects = createPaginate(data)
export default [
  {
    url: '/api/site',
    method: 'get',
    response: () => {
      return collects
    },
  },
  {
    url: '/api/site',
    method: 'POST',
    response: () => {
      return {
        message: '站点添加成功',
      }
    },
  },
  {
    url: '/api/site/1',
    method: 'PUT',
    response: () => {
      return {
        message: '站点更新成功',
      }
    },
  },
  {
    url: '/api/site/1',
    method: 'get',
    response: () => {
      return {
        data,
      }
    },
  },
  {
    url: '/api/site/:id',
    method: 'DELETE',
    statusCode: 200,
    response: () => {
      return {
        message: '站点删除成功',
      }
    },
  },
  {
    url: '/api/update_all_site_data',
    method: 'get',
    response: () => {
      return {
        code: 0,
        status: 'success',
        message: '所有站点数据更新成功',
        data: null,
      }
    },
  },
] as MockMethod[]

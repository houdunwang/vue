import { MockMethod } from 'vite-plugin-mock'
import { createPaginate } from './helper'
const data = {
  id: 1,
  title: '博客',
  name: 'Blog',
  version: '1.0',
  author: '后盾人',
  preview: '/images/xj.jpg',
  install: false,
  created_at: '2022-06-20T08:08:10.000000Z',
  updated_at: '2022-06-20T08:08:10.000000Z',
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
  permission: [
    {
      title: '文章管理',
      items: [
        {
          title: '文章列表',
          name: 'article_list',
        },
        {
          title: '添加文章',
          name: 'article_add',
        },
        {
          title: '编辑文章',
          name: 'article_edit',
        },
        {
          title: '删除文章',
          name: 'article_delete',
        },
      ],
    },
    {
      title: '评论管理',
      items: [
        {
          title: '添加评论',
          name: 'add_comment',
        },
        {
          title: '添加文章',
          name: 'article_add',
        },
        {
          title: '编辑文章',
          name: 'article_edit',
        },
        {
          title: '删除文章',
          name: 'article_delete',
        },
      ],
    },
  ],
  pivot: {
    site_id: 1,
    module_id: 1,
    created_at: '2022-06-20T09:14:37.000000Z',
    updated_at: '2022-06-20T09:14:37.000000Z',
    is_default: null,
  },
}
const collects = createPaginate(data)

export default [
  {
    url: '/api/site/1/module',
    method: 'get',
    response: () => {
      return collects
    },
  },
  {
    url: '/api/site/1/module',
    method: 'POST',
    response: () => {
      return {
        message: '模块设置成功',
      }
    },
  },
  {
    url: '/api/site/1/module/1',
    method: 'DELETE',
    response: () => {
      return {
        message: '模块删除成功',
      }
    },
  },
  {
    url: '/api/site/1/module/1/set_default',
    method: 'get',
    response: () => {
      return {
        message: '模块设置成功',
      }
    },
  },
] as MockMethod[]

import { Random } from 'mockjs'

export function create(config: Record<string, any>, num = 1) {
  const data: Record<string, any>[] = []
  for (let i = 1; i <= num; i++) {
    config.id = i
    config.created_at = Random.datetime()
    config.updated_at = Random.datetime()
    config.avatar = image()
    config.preview = image()
    data.push(config)
  }
  return data
}

export function image() {
  return '/images/xj.jpg'
}

export function createPaginate(config: Record<string, any>, num = 1) {
  const data = create(config, num)
  return {
    data,
    links: {
      first: '/api/user?page=1',
      last: '/api/user?page=1',
      prev: null,
      next: null,
    },
    meta: {
      current_page: 1,
      from: 1,
      last_page: 1,
      links: [
        {
          url: null,
          label: '&laquo; 上一页',
          active: false,
        },
        {
          url: '/api/user?page=1',
          label: '1',
          active: true,
        },
        {
          url: null,
          label: '下一页 &raquo;',
          active: false,
        },
      ],
      path: '/api/user',
      per_page: 10,
      to: 2,
      total: 2,
    },
  }
}

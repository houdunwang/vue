import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/site/1/role',
    method: 'get',
    response: () => {
      return {
        data: [
          {
            id: 1,
            name: 'editor',
            title: '编辑',
            site_id: 1,
            guard_name: 'sanctum',
            created_at: '2022-06-20T09:11:22.000000Z',
            updated_at: '2022-06-20T09:11:22.000000Z',
            permissions: [],
          },
        ],
        links: {
          first: '/api/site/1/role?page=1',
          last: '/api/site/1/role?page=1',
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
              url: '/api/site/1/role?page=1',
              label: '1',
              active: true,
            },
            {
              url: null,
              label: '下一页 &raquo;',
              active: false,
            },
          ],
          path: '/api/site/1/role',
          per_page: 100,
          to: 2,
          total: 2,
        },
      }
    },
  },
  {
    url: '/api/site/1/role/1',
    method: 'get',
    response: () => {
      return {
        data: {
          id: 1,
          name: 'editor',
          title: '编辑',
          site_id: 1,
          guard_name: 'sanctum',
          created_at: '2022-06-20T09:11:22.000000Z',
          updated_at: '2022-06-20T09:11:22.000000Z',
          permissions: [],
        },
      }
    },
  },
  {
    url: '/api/site/1/role/1',
    method: 'PUT',
    response: () => {
      return {}
    },
  },
  {
    url: '/api/site/1/role/1',
    method: 'delete',
    response: () => {
      return {}
    },
  },
] as MockMethod[]

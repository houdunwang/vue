import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/site/1/permission',
    method: 'get',
    response: () => {
      return {
        data: [
          {
            title: '系统权限',
            permission: [
              {
                title: '角色管理',
                items: [
                  {
                    title: '查看角色',
                    name: 'S1_role_list',
                  },
                  {
                    title: '添加角色',
                    name: 'S1_add_role',
                  },
                  {
                    title: '修改角色',
                    name: 'S1_update_role',
                  },
                  {
                    title: '删除角色',
                    name: 'S1_del_role',
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            title: '博客',
            name: 'Blog',
            version: '1.0',
            author: '后盾人',
            preview: '/addons/Blog/preview.jpeg',
            install: false,
            created_at: '2022-06-20T08:08:10.000000Z',
            updated_at: '2022-06-20T08:08:10.000000Z',
            permission: [
              {
                title: '文章管理',
                items: [
                  {
                    title: '文章列表',
                    name: 'S1_Blog_article_list',
                  },
                  {
                    title: '添加文章',
                    name: 'S1_Blog_article_add',
                  },
                  {
                    title: '编辑文章',
                    name: 'S1_Blog_article_edit',
                  },
                  {
                    title: '删除文章',
                    name: 'S1_Blog_article_delete',
                  },
                ],
              },
            ],
            config: {
              name: 'Blog',
              version: '1.0',
              title: '博客',
              author: '后盾人',
            },
            pivot: {
              site_id: 1,
              module_id: 1,
              created_at: '2022-06-20T09:14:37.000000Z',
              updated_at: '2022-06-20T09:14:37.000000Z',
            },
          },
        ],
      }
    },
  },
  {
    url: '/api/site/1/role/1/permission',
    method: 'POST',
    response: () => {
      return {
        data: {
          code: 0,
        },
      }
    },
  },
] as MockMethod[]

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/site/1/admin',
    method: 'get',
    response: () => {
      return {
        data: [
          {
            avatar: '/static/avatar.jpeg',
            id: 1,
            name: '向军大叔',
            sex: 1,
            email: '2300071698@qq.com',
            real_name: null,
            home: null,
            weibo: null,
            wechat: null,
            github: null,
            qq: null,
            wakatime: null,
            email_verified_at: '2022-06-20T08:08:10.000000Z',
            mobile_verified_at: null,
            created_at: '2022-06-20T08:08:10.000000Z',
            updated_at: '2022-06-20T08:08:10.000000Z',
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
            roles: [
              {
                id: 3,
                name: 'admin',
                title: '管理员',
                site_id: 1,
                guard_name: 'sanctum',
                created_at: '2022-06-20T09:06:50.000000Z',
                updated_at: '2022-06-20T09:06:50.000000Z',
                pivot: {
                  model_id: 1,
                  role_id: 3,
                  model_type: 'App\\Models\\User',
                },
              },
            ],
            pivot: {
              site_id: 1,
              user_id: 1,
              created_at: '2022-06-20T09:07:35.000000Z',
              updated_at: '2022-06-20T09:07:35.000000Z',
            },
          },
        ],
        links: {
          first: '/api/site/1/admin?page=1',
          last: '/api/site/1/admin?page=1',
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
              url: '/api/site/1/admin?page=1',
              label: '1',
              active: true,
            },
            {
              url: null,
              label: '下一页 &raquo;',
              active: false,
            },
          ],
          path: '/api/site/1/admin',
          per_page: 15,
          to: 2,
          total: 2,
        },
      }
    },
  },
  {
    url: '/api/site/1/admin/1',
    method: 'get',
    response: () => {
      return {
        code: 0,
        status: 'success',
        message: '',
        data: {
          avatar: '/static/avatar.jpeg',
          id: 1,
          name: '向军大叔',
          sex: 1,
          email: '2300071698@qq.com',
          real_name: null,
          home: null,
          weibo: null,
          wechat: null,
          github: null,
          qq: null,
          wakatime: null,
          email_verified_at: '2022-06-20T08:08:10.000000Z',
          mobile_verified_at: null,
          created_at: '2022-06-20T08:08:10.000000Z',
          updated_at: '2022-06-20T08:08:10.000000Z',
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
          roles: [
            {
              id: 3,
              name: 'admin',
              title: '管理员',
              site_id: 1,
              guard_name: 'sanctum',
              created_at: '2022-06-20T09:06:50.000000Z',
              updated_at: '2022-06-20T09:06:50.000000Z',
              pivot: {
                model_id: 1,
                role_id: 3,
                model_type: 'App\\Models\\User',
              },
            },
          ],
        },
      }
    },
  },

  {
    url: '/api/site/1/admin',
    method: 'POST',
    response: () => {
      return {
        message: '管理员添加成功',
      }
    },
  },
  {
    url: '/api/site/1/admin/1',
    method: 'delete',
    response: () => {
      return {
        message: '管理员删除成功',
      }
    },
  },
  {
    url: '/api/site/1/admin/1/role',
    method: 'POST',
    response: () => {
      return {
        message: '角色设置成功',
      }
    },
  },
] as MockMethod[]

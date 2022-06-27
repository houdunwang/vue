import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/site',
    method: 'get',
    response: () => {
      return {
        data: [
          {
            id: 1,
            title: '后盾人',
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
            config: {
              aliyun: {
                access_key_id: '',
                sms_sign_name: '\u8eab\u4efd\u9a8c\u8bc1',
                access_key_secret: '',
              },
            },
            user_id: 1,
            created_at: '2022-06-20T08:08:10.000000Z',
            updated_at: '2022-06-20T08:08:10.000000Z',
            module: {
              id: 3,
              title: '\u5546\u57ce',
              name: 'Shop',
              version: '1.0',
              author: '\u5411\u519b\u5927\u53d4',
              preview: '/addons/Shop/preview.jpeg',
              install: false,
              created_at: '2022-06-20T08:08:10.000000Z',
              updated_at: '2022-06-20T08:08:10.000000Z',
              permission: [
                {
                  title: '\u6587\u7ae0\u7ba1\u7406',
                  name: 'article',
                  items: [
                    { title: '\u6587\u7ae0\u5217\u8868', name: 'article_list' },
                    { title: '\u6dfb\u52a0\u6587\u7ae0', name: 'article_add' },
                    { title: '\u7f16\u8f91\u6587\u7ae0', name: 'article_edit' },
                    { title: '\u5220\u9664\u6587\u7ae0', name: 'article_delete' },
                  ],
                },
              ],
              config: { name: 'Shop', version: '1.0', title: '\u5546\u57ce', author: '\u5411\u519b\u5927\u53d4' },
              pivot: {
                site_id: 1,
                module_id: 3,
                created_at: '2022-06-20T08:08:10.000000Z',
                updated_at: '2022-06-20T09:14:31.000000Z',
              },
            },
            master: {
              id: 1,
              name: '\u5411\u519b\u5927\u53d4',
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
            },
          },
        ],
        links: {
          first: '/api/site?page=1',
          last: '/api/site?page=1',
          prev: null,
          next: null,
        },
        meta: {
          current_page: 1,
          from: 1,
          last_page: 1,
          links: [
            { url: null, label: '« \u4e0a\u4e00\u9875', active: false },
            { url: '/api/site?page=1', label: '1', active: true },
            { url: null, label: '\u4e0b\u4e00\u9875 »', active: false },
          ],
          path: '/api/site',
          per_page: 1,
          to: 1,
          total: 1,
        },
      }
    },
  },
  {
    url: '/api/site',
    method: 'POST',
    response: () => {
      return {
        data: {
          title: '后盾人',
          url: 'http://pnncyrhtu.fm/vbbc',
          user_id: 1,
          config: {
            aliyun: {
              access_key_id: '',
              access_key_secret: '',
              sms_sign_name: '身份验证',
            },
          },
          updated_at: '2022-06-21T09:40:47.000000Z',
          created_at: '2022-06-21T09:40:47.000000Z',
          id: 3,
          module: null,
        },
      }
    },
  },
  {
    url: '/api/site/1',
    method: 'PUT',
    response: () => {
      return {
        data: {
          title: '后盾人',
          url: 'http://pnncyrhtu.fm/vbbc',
          user_id: 1,
          config: {
            aliyun: {
              access_key_id: '',
              access_key_secret: '',
              sms_sign_name: '身份验证',
            },
          },
          updated_at: '2022-06-21T09:40:47.000000Z',
          created_at: '2022-06-21T09:40:47.000000Z',
          id: 3,
          module: null,
        },
      }
    },
  },
  {
    url: '/api/site/1',
    method: 'get',
    response: () => {
      return {
        data: {
          title: '后盾人',
          url: 'http://pnncyrhtu.fm/vbbc',
          user_id: 1,
          config: {
            aliyun: {
              access_key_id: '',
              access_key_secret: '',
              sms_sign_name: '身份验证',
            },
          },
          updated_at: '2022-06-21T09:40:47.000000Z',
          created_at: '2022-06-21T09:40:47.000000Z',
          id: 1,
          module: null,
        },
      }
    },
  },
  {
    url: '/api/site/1',
    method: 'DELETE',
    response: () => {
      return {}
    },
  },
  {
    url: '/api/update_all_site_data',
    method: 'get',
    response: () => {
      return {
        code: 0,
        status: 'success',
        message: '\u6240\u6709\u7ad9\u70b9\u521d\u59cb\u6570\u636e\u66f4\u65b0\u6210\u529f',
        data: null,
      }
    },
  },
] as MockMethod[]

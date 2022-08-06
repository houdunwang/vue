export const userTableColumns = [
  { prop: 'id', label: 'ID', align: 'center', width: 80 },
  { prop: 'nickname', label: '昵称', search: true },
  { prop: 'avatar', label: '头像', type: 'image', align: 'center', width: 80 },
  { prop: 'email', label: '邮箱', width: 300, search: true },
  { prop: 'mobile', label: '手机号', width: 200, search: true },
  {
    prop: 'sex',
    label: '性别',
    align: 'center',
    type: 'radio',
    options: [
      ['男', 1],
      ['女', 2],
    ],
    width: 80,
  },
  { prop: 'created_at', label: '注册时间', type: 'date', width: 120 },
  { prop: 'updated_at', label: '更新时间', type: 'date', width: 120 },
] as TableColumnsType[]

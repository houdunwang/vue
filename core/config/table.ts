export const userTableColumns = [
  { prop: 'id', label: 'ID', align: 'center', width: 80 },
  { prop: 'name', label: '昵称', search: true },
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

export const moduleTableColumns = [
  { prop: 'id', label: '编号', width: 80, align: 'center' },
  { prop: 'title', label: '模块名称', search: true },
  { prop: 'name', label: '标识', search: true },
  { prop: 'author', label: '作者', search: true },
  { prop: 'version', label: '版本号' },
  { prop: 'preview', label: '预览图', type: 'image', width: 80, align: 'center' },
  { prop: 'created_at', label: '创建时间', type: 'date', width: 120 },
] as TableColumnsType[]

export const roleTableColumns = [
  { prop: 'id', label: '编号', width: 80, align: 'center' },
  { prop: 'name', label: '角色名称', search: true },
  { prop: 'description', label: '角色描述', search: true },
  { prop: 'permissions', label: '权限', type: 'tag', tag_field: 'title' },
  { prop: 'created_at', label: '创建时间', type: 'date', width: 120 },
  { prop: 'updated_at', label: '更新时间', type: 'date', width: 120 },
] as TableColumnsType[]

export const adminTableColumns = [
  { prop: 'id', label: 'ID', align: 'center', width: 80 },
  { prop: 'name', label: '昵称', search: true },
  { prop: 'roles', label: '角色', type: 'tag', tag_field: 'name' },
  { prop: 'avatar', label: '头像', type: 'image', align: 'center', width: 80 },
  { prop: 'email', label: '邮箱', width: 300, search: true },
  { prop: 'mobile', label: '手机号', width: 200, search: true },
  { prop: 'created_at', label: '注册时间', type: 'date', width: 120 },
] as TableColumnsType[]

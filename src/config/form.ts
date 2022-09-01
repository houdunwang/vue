export const userForm = [
  { title: '昵称', name: 'nickname' },
  { title: '邮箱', name: 'email' },
  {
    title: '性别',
    name: 'sex',
    type: 'radio',
    options: [
      { label: '男', value: 1 },
      { label: '女', value: 2 },
    ],
  },
  { title: '手机号', name: 'mobile' },
  { title: '头像', name: 'avatar', type: 'preview' },
  { title: '主页', name: 'home' },
] as FormFieldType[]

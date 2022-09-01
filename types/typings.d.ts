//表单类型
interface FormFieldType {
  //中文描述
  title: string
  //字段名
  name: string
  //后端返回的表单验证错误的字段名，默认值与name相同
  error_name?: string
  // 表单类型
  type?: 'input' | 'textarea' | 'image' | 'preview' | 'radio' | 'wangeditor' | 'markdown'
  //类型为rado时的选项
  options?: { label: string; value: any }[]
  //html的readonly
  readonly?: boolean
  //html的disabled
  disabled?: boolean
  //html的placeholder
  placeholder?: string
  //默认值
  value?: any
}

//表格列类型
interface TableColumnsType {
  //字段英文
  prop: string
  //中文标题
  label: string
  //列度
  width?: number
  //对齐方式
  align?: 'left' | 'center' | 'right'
  //显示类型
  type?: 'image' | 'date' | 'input' | 'radio' | 'tag'
  //type为radio时，显示内容定义
  options: { label: string; value: any }[]
  //是否用于搜索
  search?: boolean
  //列是否fixed，与 elementUi 含义相同
  fixed?: boolean
  //type为tag时的显示内容
  tag_field?: string
}

//表格按钮类型
interface TableButton {
  title: string
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  permission?: string
  action?: (model: any) => void
  component?: any
}

//请求响应结构
interface ResponseResult<T> {
  code: number
  message: string
  status: 'success' | 'error'
  data: T
}

//分页请求响应结构
interface ResponsePageResult<T> {
  data: T[]
  links: { url?: string; label: string; active: boolean }
  meta: {
    current_page: number
    from: number
    last_page: number
    links: { first: string; last: string; prev?: any; next?: any }[]
    path: string
    per_page: number
    to: number
    total: number
  }
}

interface FormFieldType {
  title: string
  name: string
  error_name?: string
  type?: 'input' | 'textarea' | 'image' | 'preview' | 'radio'
  options?: Record<keyof any, any>
  readonly?: boolean
  disabled?: boolean
  placeholder?: string
  value?: any
}

interface TableColumnsType {
  prop: string
  label: string
  width?: number
  align?: 'left' | 'center' | 'right'
  type?: 'image' | 'date' | 'input' | 'radio' | 'tag'
  options: any
  search?: boolean
  fixed?: boolean
  tag_field?: string
}

interface TableButtonType {
  title: string
  command: string
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
}

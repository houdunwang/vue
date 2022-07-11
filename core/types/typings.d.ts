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

interface TableButton {
  title: string
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  permission?: string
  action?: (model: any) => void
  component?: any
}

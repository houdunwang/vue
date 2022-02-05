import { http } from '@/plugins/axios'

export interface Article {
  id: number
  title: string
  content: string
}

export function article() {
  return http.request<Article[]>({
    url: `article`,
  })
}

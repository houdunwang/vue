import { http } from '@@/plugins/axios'

//分页数据
export function getSiteList() {
  return http.request<SiteModel[], ResponsePageResult<SiteModel>>({
    url: '/site',
  })
}

export async function addSite(data: Record<string, any>) {
  const r = await http.request<SiteModel>({
    url: '/site',
    method: 'POST',
    data,
  })
  return r.data
}

export async function updateSite(data: Record<string, any>) {
  const r = await http.request<SiteModel>({
    url: `/site/${data.id}`,
    method: 'PUT',
    data,
  })
  return r.data
}

export function deleteSite(id: number) {
  return http.request({
    url: `/site/${id}`,
    method: 'DELETE',
  })
}

export async function findSite(id: number) {
  const r = await http.request({
    url: `/site/${id}`,
  })
  return r.data
}

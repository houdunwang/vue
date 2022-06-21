import { http } from '@/plugins/axios'

export function addSite(data: Record<string, any>) {
  return http.request({
    url: '/site',
    method: 'POST',
    data,
  })
}

export function updateSite(data: Record<string, any>) {
  return http.request({
    url: `/site/${data.id}`,
    method: 'PUT',
    data,
  })
}

export function getSiteList<ISite>() {
  return http.request<ISite[], ResponsePageResult<ISite>>({
    url: '/site',
  })
}

export async function siteFind(id: any) {
  return await http.request<SiteModel>({ url: `/site/${id}` }).then((r) => r.data)
}

export function deleteSite(id: number) {
  return http.request({
    url: `/site/${id}`,
    method: 'DELETE',
  })
}

//更新所有站点数据 权限表|同步本地模块到数据表
export function updateAllSiteInitData() {
  return http.request({
    url: `update_all_site_data`,
  })
}

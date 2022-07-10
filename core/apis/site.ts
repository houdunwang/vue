import { http } from '#/plugins/axios'

export function addSite(data: Record<string, any>) {
  return http
    .request<SiteModel>({
      url: '/site',
      method: 'POST',
      data,
    })
    .then((r) => r.data)
}

export async function updateSite(data: Record<string, any>) {
  const r = await http.request<SiteModel>({
    url: `/site/${data.id}`,
    method: 'PUT',
    data,
  })
  return r.data
}

export function getSiteList() {
  return http.request<SiteModel[], ResponsePageResult<SiteModel>>({
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

// //更新所有站点数据 权限表|同步本地模块到数据表
// export function updateAllSiteInitData() {
//   return http.request({
//     url: `update_all_site_data`,
//   })
// }

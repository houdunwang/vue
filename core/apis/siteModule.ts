import { http } from '@@/plugins/axios'

//获取站点模块列表
export function getSiteModuleList(sid: any) {
  return http.request<ModuleModel, ResponsePageResult<ModuleModel>>({
    url: `site/${sid}/module`,
  })
}

//添加站点模块
export function addSiteModule(sid: any, mid: any) {
  return http.request({
    url: `site/${sid}/module`,
    method: 'POST',
    data: { mid },
  })
}

//删除站点模块
export function removeSiteModule(sid: any, mid: any) {
  return http.request({
    url: `site/${sid}/module/${mid}`,
    method: 'DELETE',
  })
}

// 设置站点默认模块
export function setSiteDefaultModule(sid: any, mid: any) {
  return http.request({
    url: `site/${sid}/module/${mid}/set_default`,
  })
}

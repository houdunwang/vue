import { http } from '@@/plugins/axios'

export function getModuleList(page = 1, params = {}) {
  return http.request<ModuleModel, ResponsePageResult<ModuleModel>>({
    url:
      `module?page=${page}&` +
      Object.entries(params)
        .map((item) => item.join('='))
        .join('&'),
  })
}

export function delModule(moduleId: number) {
  return http.request({
    url: `module/${moduleId}`,
    method: 'DELETE',
  })
}

export function addModule(module: ModuleModel) {
  return http.request({
    url: `module`,
    data: module,
    method: 'POST',
  })
}

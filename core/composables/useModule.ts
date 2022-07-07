import * as api from '@@/apis/module'
import { ElMessageBox } from 'element-plus'
import router from '@@/router'

export default () => {
  const modules = ref<ResponsePageResult<ModuleModel>>()
  const module = ref<ModuleModel>()
  const sid = router.currentRoute.value.params.sid as any

  const load = async () => {
    modules.value = await api.getModuleList()
  }

  //删除站点
  const del = async (id: number) => {
    await ElMessageBox.confirm('确定删除吗?')
    await api.delModule(id)
    load()
  }

  const add = async (model: ModuleModel) => {
    await api.addModule(model)
    router.push({ name: 'module.index' })
  }

  return { sid, modules, module, del, load, add }
}

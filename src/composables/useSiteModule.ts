import { addSiteModule, getSiteModuleList, removeSiteModule, setSiteDefaultModule } from '@/apis/siteModule'
import router from '@/router/register'
import { ElMessageBox } from 'element-plus'
import { Ref } from 'vue'

export default () => {
  const modules = ref() as unknown as Ref<ResponsePageResult<ModuleModel>>
  const sid = router.currentRoute.value.query.sid as any

  //获取站点模块
  const get = async () => {
    modules.value = await getSiteModuleList(sid)
  }

  //添加站点模块
  const add = async (module: ModuleModel) => {
    await addSiteModule(sid, module.id)
    get()
  }

  //删除站点模块
  const del = async (id: any) => {
    try {
      await ElMessageBox.confirm('确定删除吗？删除模块将删除模块的所有数据，请谨慎操作！')
      await removeSiteModule(sid, id)
      get()
    } catch (error) {}
  }

  //设置默认模块
  const setDefault = async (id: any) => {
    await setSiteDefaultModule(sid, id)
    get()
  }

  return {
    modules,
    get,
    add,
    del,
    setDefault,
  }
}

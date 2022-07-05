import { addSiteModule, getSiteModuleList, removeSiteModule, setSiteDefaultModule } from '@@/apis/siteModule'
import { ElMessageBox } from 'element-plus'
import { Ref } from 'vue'

export default () => {
  const modules = ref() as unknown as Ref<ResponsePageResult<ModuleModel>>

  //获取站点模块
  const loadModuleList = async (sid: number) => {
    modules.value = await getSiteModuleList(sid)
  }

  //添加站点模块
  const addModule = async (sid: number, module: ModuleModel) => {
    await addSiteModule(sid, module.id)
    loadModuleList(sid)
  }

  //删除站点模块
  const delModule = async (sid: number, module: any) => {
    try {
      await ElMessageBox.confirm('确定删除吗？删除模块将删除模块的所有数据，请谨慎操作！')
      await removeSiteModule(sid, module.id)
      loadModuleList(sid)
    } catch (error) {}
  }

  //设置默认模块
  const setDefaultModule = async (sid: number, module: ModuleModel) => {
    await setSiteDefaultModule(sid, module.id)
  }

  //跳转到模块后台
  const redirectModuleAdmin = (module: ModuleModel) => {
    window.open(`/${module.name}/admin`)
  }

  return {
    modules,
    loadModuleList,
    addModule,
    delModule,
    setDefaultModule,
    redirectModuleAdmin,
  }
}

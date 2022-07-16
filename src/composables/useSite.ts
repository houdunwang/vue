import { deleteSite, siteFind, getSiteList, addSite, updateSite } from '@/apis/site'
import router from '@/router/register'

export default () => {
  const sites = ref<ResponsePageResult<SiteModel>>()
  const site = ref<SiteModel>()
  const sid = router.currentRoute.value.query.sid as any

  const load = async () => {
    sites.value = await getSiteList()
  }

  //根据参数获取站点
  const currentSite = async () => {
    site.value = await siteFind(sid)
  }

  //删除站点
  const del = async (id: number) => {
    await deleteSite(id)
    load()
  }

  const add = async (model: SiteModel) => {
    site.value = await addSite(model)
    router.push({ name: 'site.index' })
  }

  const update = async () => {
    site.value = await updateSite(site.value!)
    router.push({ name: 'site.index' })
  }

  return { sid, sites, site, currentSite, del, load, add, update }
}

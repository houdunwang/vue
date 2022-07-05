import { deleteSite, siteFind, getSiteList } from '@@/apis/site'
import router from '@@/router'
import { Ref } from 'vue'

export default () => {
  const sites = ref() as unknown as Ref<ResponsePageResult<SiteModel>>

  const site = ref() as unknown as Ref<SiteModel>
  //根据参数获取站点
  const getSiteByParams = async () => {
    const sid = router.currentRoute.value.params.sid
    site.value = await siteFind(sid)
  }

  //删除站点
  const del = async (id: number) => {
    await deleteSite(id)

    sites.value.data = sites.value.data.filter((s) => s.id != id)
  }

  const getList = async () => {
    sites.value = await getSiteList()
  }

  return { getSiteByParams, del, getList, site, sites }
}

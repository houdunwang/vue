import { getSitePermission } from '@@/apis/sitePermission'
import router from '@@/router'

export default () => {
  const permissions = ref()
  const sid = router.currentRoute.value.params.sid as any

  const getPermission = async () => {
    permissions.value = await getSitePermission(sid)
  }

  return { sid, permissions, getPermission }
}

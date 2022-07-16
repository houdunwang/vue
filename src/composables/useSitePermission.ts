import { getSitePermission } from '@/apis/sitePermission'
import router from '@/router/register'

export default () => {
  const permissions = ref()
  const sid = router.currentRoute.value.query.sid as any

  const getPermission = async () => {
    permissions.value = await getSitePermission(sid)
  }

  return { sid, permissions, getPermission }
}

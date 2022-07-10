import * as api from '@@/apis/rolePermission'
import router from '@@/router'

export default () => {
  const sid = router.currentRoute.value.query.sid as any

  const update = async (rid: any, permissions: any[]) => {
    await api.updatePermission(sid, rid, permissions)
  }

  return { sid, update }
}

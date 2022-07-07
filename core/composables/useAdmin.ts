import * as api from '@@/apis/admin'
import router from '@@/router'
import { ElMessageBox } from 'element-plus'

export default () => {
  const admins = ref<ResponsePageResult<UserModel>>()
  const admin = ref<UserModel>()
  const sid = router.currentRoute.value.params.sid as unknown as number
  const id = router.currentRoute.value.params.id as any

  const load = async (page: number = 1, params: any = {}) => {
    admins.value = await api.getAdminList(sid, page, params)
  }

  const del = async (model: UserModel) => {
    await ElMessageBox.confirm('确认删除该管理员吗？')
    await api.removeSiteAdmin(sid, model.id)
    load(1)
  }

  const add = async (user: any) => {
    await api.syncSiteAdmin(sid, user.id)
    load()
  }

  const find = async (id: any) => {
    admin.value = await api.adminFind(sid, id)
  }

  const setRole = async (id: any, roles: any[]) => {
    await api.syncAdminRole(sid, id, roles)
    router.push({ name: 'site.admin.index', params: { sid } })
  }
  const current = async () => {
     await find(id)
  }
  return { admins, admin, load, del, add, current, setRole, find }
}

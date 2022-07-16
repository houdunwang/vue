import * as api from '@/apis/role'
import router from '@/router/register'
import { ElMessageBox } from 'element-plus'

export default () => {
  const roles = ref<ResponsePageResult<RoleModel>>()
  const role = ref<RoleModel>()
  const sid = router.currentRoute.value.query.sid as any
  const id = router.currentRoute.value.query.id as any

  const load = async (page: number = 1, params: any = {}) => {
    roles.value = await api.getRoleList(sid, page, params)
  }

  const del = async (model: RoleModel) => {
    await ElMessageBox.confirm('确认删除角色吗？')
    await api.delRole(sid, model.id)
    load()
  }

  const add = async (model: RoleModel) => {
    await api.addRole(sid, model)
    router.push({ name: 'role.index', query: { sid } })
  }

  const update = async () => {
    await api.updateRole(sid, role.value!)
    router.push({ name: 'role.index', query: { sid } })
  }

  const find = async (id: any) => {
    role.value = await api.roleFind(sid, id)
  }

  const current = async () => {
    role.value = await api.roleFind(sid, id)
  }
  return { sid, id, roles, role, del, load, add, update, find, current }
}

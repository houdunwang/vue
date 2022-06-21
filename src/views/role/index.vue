<script setup lang="ts">
import { delRole, getRoleList } from '@/apis/role'
import { roleTableColumns } from '@/config/table'
import { ElMessageBox } from 'element-plus'
import tab from './tab.vue'
const { sid } = defineProps<{ sid: any }>()
const router = useRouter()

const load = async (page: number, params: any) => {
  return getRoleList(sid, page, params).then((response) => {
    response.data.map((role) => {
      role.permissions = role.permissions.map((p) => p.title) as any
    })
    return response
  })
}

let tableKey = $ref(0)
const tableButtonAction = async (model: RoleModel, command: string) => {
  switch (command) {
    case 'del':
      await ElMessageBox.confirm('确认删除该角色吗？')
      await delRole(sid, model.id)
      tableKey++
      break
    case 'edit':
      router.push({ name: `role.edit`, params: { sid, rid: model.id } })
      break
    case 'permissions':
      router.push({ name: 'role.permission.edit', params: { sid, rid: model.id } })
      break
  }
}
</script>

<template>
  <tab :sid="sid" />
  <hd-table-component
    :key="tableKey"
    :columns="roleTableColumns"
    :api="load"
    @action="tableButtonAction"
    :buttons="[
      { title: '删除角色', command: 'del', type: 'danger' },
      { title: '编辑角色', command: 'edit', type: 'success' },
      { title: '设置权限', command: 'permissions', type: 'primary' },
    ]" />
</template>

<style lang="scss"></style>

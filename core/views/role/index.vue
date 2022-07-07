<script setup lang="ts">
import { roleTableColumns } from '@@/config/table'
import router from '@@/router'
import tab from './tab.vue'

const { sid } = defineProps<{ sid: any }>()
const { site, currentSite } = useSite()
const { del, roles, load } = useRole()

await Promise.all([load(), currentSite()])

const buttons = [
  {
    title: '编辑',
    type: 'success',
    permission: 'role-edit',
    action: (model: RoleModel) => router.push({ name: `role.edit`, params: { sid, id: model.id } }),
  },
  { title: '删除', type: 'danger', permission: 'role-del', action: (model: RoleModel) => del(model) },
  {
    title: '权限设置',
    type: 'primary',
    action: (model: RoleModel) => router.push({ name: `site.role.permission`, params: { sid, id: model.id } }),
  },
] as TableButton[]
</script>

<template>
  <tab :site="site" />
  <CoreHdTableComponent
    :data="roles?.data"
    :columns="roleTableColumns"
    :button-width="210"
    :buttons="buttons"
    @search="load(1, $event)" />
</template>

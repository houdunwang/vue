<script setup lang="ts">
import { delRole, getRoleList } from '@@/apis/role'
import { roleTableColumns } from '@@/config/table'
import { access } from '@@/utils/helper'
import { ElMessageBox } from 'element-plus'
import tab from './tab.vue'

const router = useRouter()
let tableKey = $ref(0)
const { sid } = defineProps<{ sid: any }>()
const { site, getSiteByParams } = useSite()
await getSiteByParams()

const load = async (page: number = 1, params: any) => {
  return getRoleList(sid, page, params)
}

const del = async (model: RoleModel) => {
  await ElMessageBox.confirm('确认删除该角色吗？')
  await delRole(site.value.id, model.id)
  tableKey++
}
</script>

<template>
  <tab :site="site" />
  <CoreHdTableComponent :key="tableKey" :columns="roleTableColumns" :api="load" :button-width="210">
    <template #button="{ model }">
      <el-button-group>
        <el-button
          type="primary"
          size="default"
          v-if="access('role-edit', site)"
          @click="$router.push({ name: `role.edit`, params: { sid, rid: model.id } })">
          编辑
        </el-button>
        <el-button type="warning" size="default" v-if="access('role-del', site)" @click="del(model)"> 删除 </el-button>
        <CoreSitePermission :site="site" :role="model" @submit="tableKey++" v-access:role-permission-set="site" />
      </el-button-group>
    </template>
  </CoreHdTableComponent>
</template>

<style lang="scss" scoped></style>

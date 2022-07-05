<script setup lang="ts">
import { getSitePermission } from '@@/apis/sitePermission'
import { updateRolePermission } from '@@/apis/rolePermission'
import TabVue from './tab.vue'
import { roleFind } from '@@/apis/role'
import { updateAllSiteInitData } from '@@/apis/site'

const router = useRouter()
const { sid, rid } = defineProps<{ sid: any; rid: any }>()

const [role, sitePermissionTable] = await Promise.all([roleFind(sid, rid), getSitePermission(sid)])

let permissions = $ref(role.permissions.map((p) => p.name))

const onSubmit = async () => {
  try {
    await updateRolePermission(sid, rid, permissions)
    router.push({ name: 'role.index' })
  } catch (error) {}
}
</script>

<template>
  <TabVue :role="role" :sid="sid" />
  <!-- <el-button type="warning" size="default" @click="updateAllSiteInitData"> 更新权限表 </el-button> -->

  <SitePermission :sid="sid" :rid="rid" />
</template>

<style lang="scss" scoped>
:deep(.el-card__header) {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
</style>

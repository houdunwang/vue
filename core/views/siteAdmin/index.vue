<script setup lang="ts">
import { adminTableColumns } from '@@/config/table'
import TabVue from './tab.vue'

const router = useRouter()
const adminService = useAdmin()
const siteService = useSite()

await Promise.all([siteService.currentSite(), adminService.load()])

const buttons = [
  {
    title: '设置角色',
    action(model: UserModel) {
      router.push({ name: `site.admin.role`, params: { sid: siteService.sid, id: model.id } })
    },
  },
  {
    title: '删除管理员',
    async action(model: UserModel) {
      await adminService.del(model)
    },
  },
] as TableButton[]
</script>

<template>
  <TabVue :site="siteService.site.value!" />
  <CoreUserGet @select="adminService.add" class="mb-2" v-access:admin-add="siteService.site.value" />

  <CoreHdTableComponent
    :data="adminService.admins.value?.data"
    :columns="adminTableColumns"
    :api="adminService.load"
    :buttons="buttons" />
</template>

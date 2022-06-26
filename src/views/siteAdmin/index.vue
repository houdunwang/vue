<script setup lang="ts">
import dayjs from 'dayjs'
import { syncSiteAdmin, getAdminList, removeSiteAdmin } from '@/apis/admin'
import { siteFind } from '@/apis/site'
import { adminTableColumns } from '@/config/table'
import { ElMessageBox } from 'element-plus'
import TabVue from './tab.vue'

const router = useRouter()
const { sid } = defineProps<{ sid: any }>()
const site = $ref(await siteFind(sid))
let tableKey = $ref(0)

//设置管理员
const select = async (user: UserModel) => {
  // await syncSiteAdmin(site.id, user.id)
  tableKey++
}

//用户加载API
const load = async (page: any, params: any) => {
  return getAdminList(sid, page, params).then((response) => {
    response.data.map((admin) => {
      admin.roles = admin.roles.map((r) => r.title) as any
    })
    return response
  })
}

const tableAction = async (model: UserModel, command: string) => {
  switch (command) {
    case 'setRole':
      router.push({ name: `admin.role`, params: { sid, id: model.id } })
      break
    case 'delAdmin':
      try {
        await ElMessageBox.confirm('确定删除吗')
        await removeSiteAdmin(sid, model.id)
        tableKey++
      } catch (error) {}
      break
  }
}
</script>

<template>
  <TabVue :site="site" />

  <UserSelectUser @select="select" class="mb-2" />

  <HdTableComponent
    :columns="adminTableColumns"
    :api="load"
    :key="tableKey"
    @action="tableAction"
    :buttons="[
      { title: '设置角色', command: 'setRole' },
      { title: '删除管理员', command: 'delAdmin' },
    ]" />
</template>

<style lang="scss"></style>

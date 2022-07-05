<script setup lang="ts">
import { roleFind, updateRole } from '@@/apis/role'
import { roleForm } from '@@/config/form'
import TabVue from './tab.vue'
const router = useRouter()
const { sid, rid } = defineProps<{ sid: any; rid: any }>()
const { site, getSiteByParams } = useSite()
await getSiteByParams()
const role = reactive(await roleFind(sid, rid))

const onSubmit = async (model: RoleModel) => {
  try {
    await updateRole(sid, model)
    router.push({ name: 'role.index' })
  } catch (error) {}
}
</script>

<template>
  <TabVue :site="site" :role="role" />
  <el-alert title="修改角色标识将影响后台程序逻辑，请慎重操作" show-icon type="warning" effect="light" />

  <CoreFormFieldList :fields="roleForm" :model="role" @submit="onSubmit" />
</template>

<style lang="scss"></style>

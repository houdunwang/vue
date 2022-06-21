<script setup lang="ts">
import { siteFind } from '@/apis/site'
import { adminFind, syncAdminRole } from '@/apis/admin'
import { getRoleList } from '@/apis/role'
import TabVue from './tab.vue'

const router = useRouter()

const { sid, id } = defineProps<{ sid: any; id: any }>()
const site = await siteFind(sid)
const admin = await adminFind(sid, id)

const response = await getRoleList(sid, 1)
const roles = $ref(admin.roles.map((r) => r.name))
const onSubmit = async () => {
  try {
    await syncAdminRole(sid, id, roles)
    router.push({ name: 'site.admin.index', params: { sid } })
  } catch (error) {}
}
</script>

<template>
  <TabVue :site="site" :admin="admin" />
  <template v-if="response.meta.total">
    <section class="">
      <label v-for="r of response.data" class="m-2 text-gray-700 text-sm inline-flex items-center">
        <input type="checkbox" class="mr-1" v-model="roles" :value="r.name" />
        {{ r.title }}
      </label>
    </section>
    <el-button type="primary" size="default" @click="onSubmit">保存提交</el-button>
  </template>
  <section class="flex flex-col justify-center items-center text-sm font-bold text-gray-600 !py-5" v-else>
    <span class="mb-2">站点还没有设置角色</span>
    <el-button type="primary" size="default" @click="$router.push({ name: 'role.index', params: { sid } })"
      >设置角色</el-button
    >
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply bg-white p-3 border rounded-md mb-3;
}
</style>

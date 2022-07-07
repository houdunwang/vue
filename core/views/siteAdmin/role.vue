<script setup lang="ts">
import TabVue from './tab.vue'

const { site, sid, currentSite } = useSite()
const { admin, setRole, current: currentAdmin } = useAdmin()
const { roles: systemRoles, load: loadRole } = useRole()
await Promise.all([currentSite(), currentAdmin(), loadRole()])

const roles = $ref(admin.value?.roles.map((r) => r.id) ?? [])
</script>

<template>
  <TabVue :site="site!" :admin="admin" />
  <template v-if="systemRoles?.meta.total">
    <section>
      <label v-for="r of systemRoles?.data" class="m-2 text-gray-700 text-sm inline-flex items-center">
        <input type="checkbox" class="mr-1" v-model="roles" :value="r.id" />
        {{ r.name }}
      </label>
    </section>
    <el-button type="primary" size="default" @click="setRole(admin?.id, roles)"> 保存提交 </el-button>
  </template>
  <section class="flex flex-col justify-center items-center text-sm font-bold text-gray-600 !py-5" v-else>
    <span class="mb-2">站点还没有设置角色</span>
    <el-button type="primary" size="default" @click="$router.push({ name: 'role.index', params: { sid } })">
      设置角色
    </el-button>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply bg-white p-3 border rounded-md mb-3;
}
</style>

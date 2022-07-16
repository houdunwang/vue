<script setup lang="ts">
import TabVue from './tab.vue'

const { site, currentSite } = useSite()
const { role, current, id } = useRole()
const { update } = useRolePermission()
const { getPermission, permissions: sitePermissons } = useSitePermission()
await Promise.all([await currentSite(), current(), getPermission()])
const permissions = ref(role.value?.permissions.map((p) => p.name) ?? [])
</script>

<template>
  <div>
    <TabVue :site="site" />
    <el-alert :title="`【${role?.name}】权限设置`" type="success" show-icon effect="light" />

    <el-card shadow="hover" :body-style="{ padding: '20px' }" v-for="module of sitePermissons.data" class="mb-3">
      <template #header>
        <h6 class="text-base">{{ module['title'] }}</h6>
      </template>

      <dl v-for="permission of module.permission" class="w-full">
        <dt class="text-gray-600 text-sm font-bold pb-1">{{ permission.title }}</dt>
        <dd class="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-1 text-sm text-gray-600 mb-3">
          <div v-for="p of permission.items" class="flex items-center">
            <label class="text-xs flex items-center mb-1">
              <input type="checkbox" v-model="permissions" :value="p.name" class="mr-1" />
              {{ p.title }}
              <span class="text-xs text-gray-500">{{ p.name }}</span>
            </label>
          </div>
        </dd>
      </dl>
    </el-card>

    <el-button type="primary" size="default" @click="update(id, permissions)">保存提交</el-button>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-card__header) {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
</style>

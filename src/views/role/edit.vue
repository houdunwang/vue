<script setup lang="ts">
import { roleForm } from '@/config/form'
import TabVue from './tab.vue'

const { site, currentSite } = useSite()
const { current, role, update } = useRole()
await Promise.all([current(), currentSite()])
</script>

<template>
  <TabVue :site="site" :role="role" />
  <el-alert title="修改角色标识将影响后台程序逻辑，请慎重操作" show-icon type="warning" effect="light" />

  <FormFieldList :fields="roleForm" :model="role" @submit="update" />
</template>

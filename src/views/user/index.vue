<script setup lang="ts">
import { userTableColumns } from '@/config/table'
const { load, users } = useUser()
await load()

const tabs = [
  { label: '系统管理', route: { name: 'system.index' } },
  { label: '用户列表', route: { name: 'user.index' }, current: true },
]
</script>

<template>
  <HdTab :tabs="tabs" />
  <HdTableComponent :data="users?.data" :columns="userTableColumns" :button-width="100">
    <template #button="{ model }">
      <UserInfo :user="model" />
    </template>
  </HdTableComponent>
  <HdPagination :total="users?.meta.total" :size="users?.meta.per_page" @change="load" />
</template>

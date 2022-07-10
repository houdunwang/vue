<script setup lang="ts">
import { userTableColumns } from '#/config/table'
const { load, users } = useUser()
await load()

const tabs = [
  { label: '系统管理', route: { name: 'system.index' } },
  { label: '用户列表', route: { name: 'user.index' }, current: true },
]
</script>

<template>
  <CoreHdTab :tabs="tabs" />
  <CoreHdTableComponent :data="users?.data" :columns="userTableColumns" :button-width="100">
    <template #button="{ model }">
      <CoreUserInfo :user="model" />
    </template>
  </CoreHdTableComponent>
  <CoreHdPagination :total="users?.meta.total" :size="users?.meta.per_page" @change="load" />
</template>

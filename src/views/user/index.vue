<script setup lang="ts">
import { getUserList } from '@/apis/user'
import { userTableColumns } from '@/config/table'
const tabs = [
  { label: '系统管理', route: { name: 'system.index' } },
  { label: '用户列表', route: { name: 'user.index' }, current: true },
]
</script>

<template>
  <hd-tab :tabs="tabs" />

  <hd-table-component :api="getUserList" :columns="userTableColumns" :button-width="100">
    <template #button="{ model }">
      <user-info :id="model.id" />
    </template>
  </hd-table-component>
</template>

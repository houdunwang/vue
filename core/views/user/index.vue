<script setup lang="ts">
import { getUserList } from '@@/apis/user'
import { userTableColumns } from '@@/config/table'
const tabs = [
  { label: '系统管理', route: { name: 'system.index' } },
  { label: '用户列表', route: { name: 'user.index' }, current: true },
]
</script>

<template>
  <CoreHdTab :tabs="tabs" />

  <CoreHdTableComponent :api="getUserList" :columns="userTableColumns" :button-width="100">
    <template #button="{ model }">
      <CoreUserInfo :id="model.id" />
    </template>
  </CoreHdTableComponent>
</template>

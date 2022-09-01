<script setup lang="ts">
import { userForm } from '@/config/form'
import userStore from '@/store/userStore'

const store = userStore()
const user = ref(store.info)
</script>

<template>
  <el-card shadow="always" :body-style="{ padding: '20px' }">
    <template #header> 用户资料 </template>
    <HdFormRender :fields="userForm" :model="user" />
  </el-card>
</template>

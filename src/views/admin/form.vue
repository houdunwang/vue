<script setup lang="ts">
import { userForm } from '@/config/form'
const user = reactive({
  nickname: '向军大叔',
  email: '2300071698@qq.com',
  mobile: 19999999999,
  sex: 1,
  avatar: '/images/xj.jpg',
  home: 'https://www.houdunren.com',
})
</script>

<template>
  <el-card shadow="always" :body-style="{ padding: '20px' }">
    <template #header> 用户资料 </template>
    <HdFormRender :fields="userForm" :model="user" />
  </el-card>
</template>

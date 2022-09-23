<script setup lang="ts">
import useIntervalRequest from '@/composables/system/useIntervalRequest'
import { ElMessage } from 'element-plus'

const { exec, time } = useIntervalRequest(10, (check, time) => {
  if (!check()) return false
  else ElMessage.success('执行成功')
})
</script>

<template>
  <div class="grid-cols-3 grid gap-2">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template #header> 延时执行 </template>
      <el-button disabled size="default" v-if="time">请{{ time }}后操作</el-button>
      <el-button type="primary" size="default" @click="exec" v-else>发送验证码</el-button>
    </el-card>
  </div>
</template>

<style lang="scss"></style>

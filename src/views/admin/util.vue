<script setup lang="ts">
import { timeoutRequest } from '@/utils/helper'
import { useIntervalFn } from '@vueuse/core'

const { countdown, fn } = timeoutRequest(10, () => {
  console.log('执行动作')
})

const { pause, resume, isActive } = useIntervalFn(() => {}, 1000)
</script>

<template>
  <el-button type="primary" size="default" v-if="countdown">请{{ countdown }}后操作</el-button>
  <el-button type="primary" size="default" @click="fn" v-else>发送验证码</el-button>
</template>

<style lang="scss"></style>

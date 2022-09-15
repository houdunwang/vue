<script setup lang="ts">
import useIntervalRequest from '@/components/useIntervalRequest'
const { handle, time } = useIntervalRequest(10, () => {
  console.log('abc')
})
</script>

<template>
  <el-button disabled size="default" v-if="time">请{{ time }}后操作</el-button>
  <el-button type="primary" size="default" @click="handle" v-else>发送验证码</el-button>
</template>

<style lang="scss"></style>

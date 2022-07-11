<script setup lang="ts">
const { step = 1 } = defineProps<{ step: number }>()
</script>

<template>
  <div class="step">
    <h1>HDCMS</h1>

    <el-steps :active="step" finish-status="success" simple style="margin-top: 20px" class="mb-5 w-full">
      <el-step title="准备安装" />
      <el-step title="网站信息" />
      <el-step title="初始数据" />
      <el-step title="安装完成" />
    </el-steps>
  </div>
</template>

<style lang="scss" scoped>
div.step {
  @apply flex flex-col items-center shadow-2xl;
  h1 {
    @apply text-gray-300 text-4xl font-thin text-center mt-5;
  }
  @apply bg-gray-800 py-3 w-full w-[800px] m-auto;
}
</style>

<script setup lang="ts">
import { migrate as apiMigrate } from '@/apis/install'
import router from '@/router/register'
import Step from './step.vue'

const migrate = async () => {
  try {
    await apiMigrate()
    router.push({ name: 'install.finish' })
  } catch (error) {}
}
</script>

<template>
  <main>
    <Step :step="3" class="w-full" />
    <section>
      <div class="">
        <img src="/images/xj9.png" class="w-full rounded-full w-32 h-32 object-cover" />
        <nav class="flex flex-row mt-5">
          <el-button type="info" @click="$router.go(-1)">上一步</el-button>
          <el-button type="success" size="default" @click="migrate"> 开始导入初始数据 </el-button>
        </nav>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  @apply bg-gray-800 w-screen h-screen pt-5;
  section {
    @apply w-[800px] flex justify-center flex-col m-auto bg-gray-50 rounded-2xl shadow-2xl;
    h2 {
      @apply text-center text-gray-700 py-5 text-2xl;
    }
    div {
      @apply flex flex-col justify-center items-center py-5;
    }
  }
}
</style>

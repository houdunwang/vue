<script setup lang="ts">
import Step from './step.vue'

const redirect = (url: any) => {
  window.open(url)
}
</script>

<template>
  <main>
    <Step :step="4" class="w-full" />
    <section>
      <img src="/images/xj8.jpg" class="w-full rounded-full w-32 h-32 object-cover" />
      <h2>恭喜！安装成功</h2>
      <div class="flex flex-row">
        <el-button type="success" size="default" @click="redirect('/core')" class="mt-5"> 访问后台 </el-button>
        <el-button
          type="primary"
          size="default"
          @click="
            redirect(
              'https://doc.houdunren.com/houdunren-php/1%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.html#%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F',
            )
          "
          class="mt-5">
          查看文档
        </el-button>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  @apply bg-gray-800 w-screen h-screen pt-5;
  section {
    @apply w-[800px] flex justify-center flex-col items-center m-auto bg-gray-50 rounded-2xl shadow-2xl py-8;
    h2 {
      @apply text-center text-gray-700 py-5 text-2xl;
    }
  }
}
</style>

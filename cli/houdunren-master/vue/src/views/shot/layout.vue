<script setup lang="ts"></script>

<template>
  <main class="!-mt-1 z-20 !p-0 !w-full">
    <section class="items-center text-white relative overflow-hidden">
      <div class="2xl:w-page 2xl:mx-auto flex flex-col justify-center gap-8 my-10 px-6">
        <h1 class="text-2xl text-orange-200">朋友们温暖的鼓励，让我坚持了十年视频录制</h1>
        <h2 class="text-2xl text-yellow-500">人生很短，做不了太多事情，十年弹指一挥间</h2>
        <p class="text-2xl text-red-200">祝朋友们及家人、身体健康、快乐相伴，感恩大家的陪伴</p>
      </div>
      <div class="top-bg"></div>
    </section>
    <div class="bg-gray-800">
      <div class="flex flex-col md:flex-row items-center justify-between 2xl:w-page 2xl:mx-auto p-2">
        <section class="mb-5">
          <el-button type="success" size="large" @click="$router.push({ name: 'shot.comment' })">温暖的评论</el-button>
          <el-button type="danger" size="large" @click="$router.push({ name: 'shot.live' })">直播互动</el-button>
        </section>
        <router-link to="/" class="text-gray-100 text-xl opacity-80 font-light">
          每晚八点直播，欢迎朋友们的到来
        </router-link>
      </div>
      <div class="px-2 w-page mx-auto">
        <slot />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.top-bg {
  overflow: hidden;
  position: absolute;
  z-index: -1;
  background-image: url('/images/space-top-bg.jpg');
  background-position: center;
  transform: scale(1.5);
  filter: blur(20px);
  @apply top-0 left-0 right-0 bottom-0;
}
</style>

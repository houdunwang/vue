<script setup lang="ts"></script>

<template>
  <HdCard class="mb-32">
    <template #header>
      <h2 class="flex flex-col md:flex-row justify-between items-center">
        直播平台
        <router-link to="/" class="text-gray-800 2xl:text-xl opacity-80 font-light">
          每晚八点直播，欢迎朋友们的到来
        </router-link>
      </h2>
    </template>
    <template #default>
      <div class="p-5 flex flex-row gap-2 md:gap-6 2xl:gap-20 items-start">
        <el-image src="/assets/live-qr/douyin.png" fit="fill" :lazy="true" class="border"></el-image>
        <el-image src="/assets/live-qr/bilibili.png" fit="fill" :lazy="true" class="border"></el-image>
        <el-image src="/assets/live-qr/kuaisou.png" fit="fill" :lazy="true" class="border"></el-image>
      </div>
    </template>
  </HdCard>
</template>
